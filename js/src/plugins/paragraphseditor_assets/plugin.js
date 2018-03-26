import CKEDITOR from 'ckeditor';
import Backbone from 'backbone';
import { widgetType } from '../config';

CKEDITOR.plugins.add('paragraphseditor_assets', {
  icons: '',
  requires: [ "paragraphseditor", "editor_assets" ],

  beforeInit: function(editor) {
    editor.on('widgetDefinition', function (event) {
      var widgetDefinition = event.data;
      if (widgetDefinition.name !== widgetType) {
        return;
      }

      const wb = widgetDefinition.widgetBinder;
      const emptySet = new Backbone.Collection();

      wb.services.getSyncActionResolver().addCollection('asset', function(attributes) {
        const editorModel = wb.services.getEditors().get(attributes.editorContextId);

        if (editorModel) {
          var ckeditorId = editorModel.get('ckeditorId');

          if (CKEDITOR.instances[ckeditorId]) {
            return CKEDITOR.instances[ckeditorId].drupalAssets;
          }
        }

        return emptySet;
      });

      wb.binder.on('bind', function(binder, widgetModel, widgetView) {
        widgetView.on('DOMRender', function(widgetView, $el) {
          editor.drupalAssets.attachBehaviors($el[0]);
        });
        widgetView.on('DOMRemove', function(widgetView, $el) {
          editor.drupalAssets.detachBehaviors($el[0]);
        });
      });

      wb.services.getSyncActionResolver().resolve(drupalSettings.paragraphs_editor);
    });
  }

});
