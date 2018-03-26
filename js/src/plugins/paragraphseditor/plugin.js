/**
 * @file
 * Paragraphs CKEditor Integration Plugin.
 *
 * @ignore
 */

import $ from 'jquery';
import './icons/paragraphseditor.png';
import './icons/hidpi/paragraphseditor.png';
import { widgetType } from '../config';

var pluginDefinition = {
  icons: 'paragraphseditor',
  hidpi: true,
  requires: [ "widget", "widgetfilter" ],
};

if (Drupal.paragraphs_editor) {
  const modules = require('./modules');
  const widgetBinder = Drupal.paragraphs_editor.register('paragraphs_ckeditor', modules.CKEditorWidgetAdapter);
  const elementFactory = widgetBinder.getElementFactory();
  const widgetTemplate = elementFactory.getTemplate('widget');
  const fieldTemplate = elementFactory.getTemplate('field');

  pluginDefinition = { ...pluginDefinition,

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

      // If no widget manager could be found for this instance then this isn't a
      // CKEditor instance we can attach to. In this case, we just don't add any
      // options to the editor.
      if ($editor.hasClass('paragraphs-editor')) {
        var binder = widgetBinder.open($editor, editor, widgetType);
        $editor.data('paragraphs-ckeditor-binder', binder);

        widgetBinder.getEditors().get(binder.resolveContext($editor).get('id')).set({
          'ckeditorId': editor.name,
        });

        const filterContent = widgetTemplate.getTag() + '[' + widgetTemplate.getAttributeNames().join() + ']';
        var widgetDefinition = {
          allowedContent: filterContent,
          requiredContent: filterContent,

          widgetBinder: {
            services: widgetBinder,
            binder: binder,
          },

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
            var $el = $(element.getOuterHtml());
            binder.save(this.id, $el);
            element.attributes = {};
            $.each($el[0].attributes, function(i, attr) {
              element.attributes[attr.name] = attr.value;
            });
            element.setHtml($el.html());
            return element;
          },

          /**
           * Initializes a new editable element within this widget.
           */
          initEditable: function(editableName, definition) {

            // Override getData to only process field contents when the field is
            // being requested through the widget adapter.
            if (CKEDITOR.plugins.widget.prototype.initEditable.call(this, editableName, definition)) {
              this.editables[editableName].getData = function(exportReady) {
                return exportReady ? this.editor.dataProcessor.toDataFormat(this.getHtml(), {
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
            this.widgetBinderModel = binder.bind(this, this.id, $(this.element.$));
            
            // Add a garbage collection handler so that the model / view are
            // destroyed when the widget is destroyed.
            this.on('destroy', function(evt) {
              binder.destroy(this.id, true);
            });
          }
        };

        modules.dataFormatterSupport(editor, widgetBinder, binder, widgetDefinition);
        modules.downcastCacheSupport(editor, widgetBinder, binder, widgetDefinition);
        modules.dropFilteringSupport(editor, widgetBinder, binder, widgetDefinition);

        if (editor.config.paragraphseditor_showButton) {
          modules.buttonSupport(editor, widgetBinder, binder, widgetDefinition);
        }

        // Define the CKEditor widget that represents a paragraph in the editor.
        editor.widgets.add(widgetType, widgetDefinition);
      }
    }
  }
}

CKEDITOR.plugins.add('paragraphseditor', pluginDefinition);
