/**
 * @file
 * Drupal Image plugin.
 *
 * This alters the existing CKEditor image2 widget plugin to:
 * - require a data-entity-type and a data-entity-uuid attribute (which Drupal
 *   uses to track where images are being used)
 * - use a Drupal-native dialog (that is in fact just an alterable Drupal form
 *   like any other) instead of CKEditor's own dialogs.
 *
 * @see \Drupal\editor\Form\EditorImageDialog
 *
 * @ignore
 */
(function ($, Drupal, CKEDITOR) {

  'use strict';

  var widgetBinder = Drupal.paragraphs_editor.instances['paragraphs_ckeditor'];
  var widgetType = 'ParagraphsEditorWidget';
  var elementFactory = widgetBinder.getElementFactory();
  var widgetTemplate = elementFactory.getTemplate('widget');
  var fieldTemplate = elementFactory.getTemplate('field');
  var contentFilter = widgetTemplate.getTag() + '[' + widgetTemplate.getAttributeNames().join() + ']';
  var schema = widgetBinder.getSchema();

  Drupal.ckeditor_widgetfilter.Filters.Paragraph = Drupal.ckeditor_widgetfilter.Filter.extend({

    requires: ['paragraph-type'],

    constructor: function(editor, schema, binder) {
      this._editor = editor;
      this._schema = schema;
      this._binder = binder;
    },

    filter: function(el, dragData) {
      var type = dragData.get('paragraph-type');
      var $editor = $(this._editor.element.$);
      if ($editor.hasClass('widget-binder-open')) {
        var context = this._binder.resolveContext($(el.$));
        var schemaId = context.get('schemaId');
        if (this._schema.isAllowed(schemaId, type)) {
          return CKEDITOR.LINEUTILS_BEFORE | CKEDITOR.LINEUTILS_AFTER;
        }
      }
    }
  });

  Drupal.ckeditor_widgetfilter.Decorators.ParagraphType = Drupal.ckeditor_widgetfilter.Decorator.extend({

    requires: ['widget'],

    provides: ['paragraph-type'],

    constructor: function(editor, binder) {
      this._editor = editor;
      this._binder = binder;
    },

    decorate: function(evt, dragData) {
      var $editor = $(this._editor.element.$);
      if ($editor.hasClass('widget-binder-open')) {
        var widget = dragData.get('widget');
        if (widget.name == widgetType) {
          var widgetModel = this._binder.get(widget.id);
          var type = widgetModel.editBufferItemRef.editBufferItem.get('type');
          dragData.set('paragraph-type', type);
        }
      }
    },
  });

  CKEDITOR.plugins.add('paragraphsinsert', {
    icons: 'paragraphsinsert',
    hidpi: false,
    requires: [ "widget", "widgetfilter" ],
    beforeInit: function(editor) {
      var $editor = $(editor.element.$);

      // We need to register the paragraphs-editor-paragraph element with the
      // CKEDITOR DOM model or it will get confused and add wayward <p> tags.
      // Here we will register the paragraphs-editor-paragraph tag to behave
      // like a div tag.
      if ($editor.hasClass('paragraphs-editor')) {
        var embedTag = widgetTemplate.getTag();
        CKEDITOR.dtd[embedTag] = CKEDITOR.dtd.div;
        for (var tagName in CKEDITOR.dtd) {
          if (CKEDITOR.dtd[tagName].div) {
            CKEDITOR.dtd[tagName][embedTag] = 1;
          }
        }
        CKEDITOR.dtd.body[embedTag] = 1;
      }
    },
    init: function (editor) {
      var $editor = $(editor.element.$);
      var downcastingSessions = [];
      var downcastedWidgets = {};

      // If no widget manager could be found for this instance then this isn't a
      // CKEditor instance we can attach to. In this case, we just don't add any
      // options to the editor.
      if ($editor.hasClass('paragraphs-editor')) {
        var binder = widgetBinder.open($editor, editor, widgetType);
        $editor.data('widget-binder', binder);

        // Set up formatting rules for writing CKEditor output markup.
        var formatRules = {
          indent: true,
          breakBeforeOpen: true,
          breakAfterOpen: true,
          breakBeforeClose: true,
          breakAfterClose: true
        };
        editor.dataProcessor.writer.setRules(widgetTemplate.getTag(), formatRules);
        editor.dataProcessor.writer.setRules(fieldTemplate.getTag(), formatRules);

        // Provide a command for creating an "insert paragraph" dialog.
        editor.addCommand('paragraphsinsert', {
          allowedContent: true,
          requiredContent: contentFilter,
          exec: function() {
            var $el = $(editor.getSelection().getStartElement().$);
            binder.create($el);
          },
        });

        // Provide the ui component for the "insert paragraph" command.
        editor.ui.addButton('ParagraphsInsert', {
          label: Drupal.t('Insert ' + binder.getSetting('title')),
          command: 'paragraphsinsert',
        });

        editor.widgetfilter.on('init', function(evt) {
          editor.widgetfilter
            .registerDecorator(new Drupal.ckeditor_widgetfilter.Decorators.ParagraphType(editor, binder))
            .registerFilter(new Drupal.ckeditor_widgetfilter.Filters.Paragraph(editor, schema, binder));
        });

        editor.on('toDataFormat', function(evt) {
          if (evt.data.downcastingSessionId) {
            downcastingSessions.push(true);
          }
        }, null, null, 8);

        editor.on('toDataFormat', function(evt) {
          if (evt.data.downcastingSessionId) {
            downcastingSessions.pop();
            if (_.isEmpty(downcastingSessions)) {
              downcastedWidgets = {};
            }
          }
        }, null, null, 13);

        // Define the CKEditor widget that represents a paragraph in the editor.
        editor.widgets.add(widgetType, {
          allowedContent: true,
          requiredContent: contentFilter,

          /**
           * Determines whether an element should be converted to a widget.
           */
          upcast: function (element) {
            return element.name == widgetTemplate.getTag();
          },

          /**
           * Converts saved html to a form the back end can consume.
           */
          downcast: function (element) {
            if (!downcastedWidgets[this.id]) {
              var $el = $(element.getOuterHtml());
              binder.save(this.id, $el);
              element.attributes = {};
              $.each($el[0].attributes, function(i, attr) {
                element.attributes[attr.name] = attr.value;
              });
              element.setHtml($el.html());
              downcastedWidgets[this.id] = element;
            }

            return downcastedWidgets[this.id];
          },

          initEditable: function(editableName, definition) {
            if (CKEDITOR.plugins.widget.prototype.initEditable.call(this, editableName, definition)) {
              this.editables[editableName].getData = function(exportReady) {
                return exportReady ? this.editor.dataProcessor.toDataFormat( this.getHtml(), {
                  context: this.getName(),
                  filter: this.filter,
                  enterMode: this.enterMode
                }) : '';
              }
            }
          },

          /**
           * Process widgets as they are created.
           */
          init: function() {
            // Make the widget editor aware of the newly embedded widget.
            binder.bind(this, this.id, $(this.element.$));

            // Add a garbage collection handler so that the model / view are
            // destroyed when the widget is destroyed.
            this.on('destroy', function(evt) {
              binder.destroy(this.id, true);
            });
          }
        });
      }
    }
  });

})(jQuery, Drupal, CKEDITOR);
