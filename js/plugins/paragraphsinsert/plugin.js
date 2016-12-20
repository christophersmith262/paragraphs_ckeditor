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

  Drupal.paragraphs_editor.Adapters.CKEditorWidget = Drupal.paragraphs_editor.Adapter.extend({

    editor: null,
    widgetType: null,

    constructor: function(editorInstance, widgetType) {
      this.editor = editorInstance;
      this.widgetType = widgetType;
    },

    insertEmbedCode: function(embedCode) {
      var element = new CKEDITOR.dom.element(embedCode.getTagName());
      element.setAttributes(embedCode.getAttributes());
      this.editor.insertElement(element);
      this.editor.widgets.initOn(element, this.widgetType);
    },

    getViewMode: function(widget, id, $el) {
      return widget.data.viewMode ? widget.data.viewMode : 'data';
    },

    setViewMode: function(widget, id, $el, viewMode) {
      widget.setData('viewMode', viewMode);
    },

    widgetExists: function(id) {
      if (this.editor.widgets.instances[id]) {
        return !this.editor.widgets.instances[id].destroyed;
      }
      return false;
    },

    destroyWidget: function(id) {
      this.editor.widgets.instances[id].destroyed = true;
      this.editor.widgets.del(this.editor.widgets.instances[id]);
    },

    attachInlineEditing: function(widgetEditorView, index, selector) {
      widgetEditorView.model.widget.initEditable(index, {
        "selector": selector
      });
    },

    getRootEl: function() {
      return this.editor.document.$;
    },

  });

  CKEDITOR.plugins.add('paragraphsinsert', {
    icons: 'paragraphsinsert',
    hidpi: false,
    requires: [ "widget" ],
    beforeInit: function(editor) {
      var $editor = $(editor.element.$);

      // We need to register the paragraphs-editor-paragraph element with the
      // CKEDITOR DOM model or it will get confused and add wayward <p> tags.
      // Here we will register the paragraphs-editor-paragraph tag to behave
      // like a div tag.
      if ($editor.paragraphsEditor('attachable')) {
        var embedTag = $editor.paragraphsEditor('embed-factory').getTag();
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

      // If no widget manager could be found for this instance then this isn't a
      // CKEditor instance we can attach to. In this case, we just don't add any
      // options to the editor.
      if ($editor.paragraphsEditor('attachable')) {
        var embedCodeFactory = $editor.paragraphsEditor('embed-factory');
        var editorContext = $editor.paragraphsEditor('context');

        var embedTag = embedCodeFactory.getTag();
        var embedAttributes = embedCodeFactory.getAttributes(true);
        var contentFilter = embedTag + '[' + embedAttributes.join() + ']';

        // Initialize the widget manager for use with this editor.
        var adapter = new Drupal.paragraphs_editor.Adapters.CKEditorWidget(editor, 'ParagraphsEditorWidget');
        var widgetManager = $editor.paragraphsEditor('attach', adapter);

        // Set up formatting rules for writing CKEditor output markup.
        var formatRules = {
          indent: true,
          breakBeforeOpen: true,
          breakAfterOpen: true,
          breakBeforeClose: true,
          breakAfterClose: true
        };
        editor.dataProcessor.writer.setRules(embedTag, formatRules);
        editor.dataProcessor.writer.setRules('paragraphs-editor-nested-editor', formatRules);

        // Provide a command for creating an "insert paragraph" dialog.
        editor.addCommand('paragraphsinsert', {
          allowedContent: contentFilter,
          requiredContent: contentFilter,
          exec: function() {
            var $el = $(editor.getSelection().getStartElement());
            widgetManager.insert($el);
          },
        });

        // Provide the ui component for the "insert paragraph" command.
        editor.ui.addButton('ParagraphsInsert', {
          label: Drupal.t('Insert ' + editorContext.getSetting('title')),
          command: 'paragraphsinsert',
        });

        // Define the CKEditor widget that represents a paragraph in the editor.
        editor.widgets.add(adapter.widgetType, {
          allowedContent: contentFilter,
          requiredContent: contentFilter,

          /**
           * Determines whether an element should be converted to a widget.
           */
          upcast: function (element) {
            return element.name == embedTag;
          },

          /**
           * Converts saved html to a form the back end can consume.
           */
          downcast: function (element) {
            var widget = this;

            // Create a temporary DOM element to store the saved html. We can't
            // just pass through the 'element' parameter since it's not a true
            // DOM element, but a CKEditor lightweight parser element
            // representation. We also need to manually call getData on each
            // editable since the default widget plugin handling for nested
            // widgets doesn't support cases where we completely rewrite the
            // existing DOM during downcasting.
            var $el = $(element.getHtml());
            $el.find('[contenteditable="true"]').each(function(i) {
              if (widget.editables[i]) {
                $(this).html(widget.editables[i].getData());
              }
            });

            // Save the html to the temporary DOM element and assign its
            // contents back to the CKEditor parser element.
            widgetManager.save(widget.id, $el);
            element.setHtml($el.html());

            return element;
          },

          /**
           * Process widgets as they are created.
           */
          init: function() {
            // Make the widget editor aware of the newly embedded widget.
            widgetManager.create(this, this.id, $(this.element.$));

            // Add a garbage collection handler so that the model / view are
            // destroyed when the widget is destroyed.
            this.on('destroy', function(evt) {
              widgetManager.destroy(this.id);
            });
          }
        });
      }
    }
  });

})(jQuery, Drupal, CKEDITOR);
