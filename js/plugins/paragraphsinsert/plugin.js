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
      var downcastingSessions = [];
      var downcastedWidgets = {};

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
            var $el = $(editor.getSelection().getStartElement().$);
            widgetManager.insert($el);
          },
        });

        // Provide the ui component for the "insert paragraph" command.
        editor.ui.addButton('ParagraphsInsert', {
          label: Drupal.t('Insert ' + editorContext.getSetting('title')),
          command: 'paragraphsinsert',
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

            if (!downcastedWidgets[this.id]) {
              // Save the html to the temporary DOM element and assign its
              // contents back to the CKEditor parser element.

              var $el = $(element.getOuterHtml());
              widgetManager.save(widget.id, $el);
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
