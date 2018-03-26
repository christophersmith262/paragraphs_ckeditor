import CKEDITOR from 'ckeditor';
import Backbone from 'backbone';
import $ from 'jquery';
import { widgetType } from '../config';

var pluginDefinition = {
  icons: '',
  requires: [ "paragraphseditor", "widgettoolbar" ],
};

if (Drupal.ckeditor_widgettoolbar) {
  const modules = require('./modules');

  pluginDefinition = { ...pluginDefinition,

    beforeInit: function(editor) {
      editor.on('widgetDefinition', function (event) {
        var widgetDefinition = event.data;
        if (widgetDefinition.name !== widgetType) {
          return;
        }
        const wb = widgetDefinition.widgetBinder;
        var topLevelToolbars = {};

        wb.binder.on('bind', function(binder, widgetModel, widgetView) {
          var widgetToolbar;
          var editableToolbars = [];
          var listeners = [];

          widgetView.on('DOMRender', function(widgetView, $el) {
            widgetToolbar = editor.widgetToolbars.add(widgetModel.widget.element.$, {
              label: Drupal.t(widgetModel.editBufferItemRef.editBufferItem.get('label')),
              actions: modules.toolbarActions(editor, widgetModel),
            });
            topLevelToolbars[widgetModel.widget.id] = widgetToolbar;

            if (widgetModel.widget.element.getParent().hasClass('cke_widget_selected')) {
              widgetToolbar.model.set({ sticky: true, active: true, showLabel: true, showActions: true });
            }

            // When the widget is selected, show the entire toolbar. When the
            // widget is deselected, hide the entire toolbar.
            listeners.push(widgetModel.widget.on('select', function() {
              widgetToolbar.model.set({ sticky: true, active: true, showLabel: true, showActions: true });
            }));
            listeners.push(widgetModel.widget.on('deselect', function() {
              widgetToolbar.model.set({ sticky: false, active: false, showLabel: false, showActions: false });
            }));
                  
            // On mouseenter, show make this widget's toolbar the active
            // toolbar and show the label. On mouseleave, if the action
            // toolbar is not being shown, hide the entire toolbar.
            listeners.push(widgetModel.widget.element.getParent().on('mouseover', function(e) {
              if (!widgetModel.widget.editor.widgetfilter.isDragging()) {
                widgetToolbar.model.set({ active: true, showLabel: true });
              }
              e.data.$.stopPropagation();
            }));
            listeners.push(widgetModel.widget.element.getParent().on('mouseleave', function() {
              if (!widgetToolbar.model.get('showActions') && !editor.widgetfilter.isDragging()) {
                widgetToolbar.model.set({ active: false, showLabel: false });
              }
            }));

            _.each(widgetModel.widget.editables, function(editable) {
              var toolbar = editor.widgetToolbars.add(editable.$, {
                label: binder.resolveContext($(editable.$)).get('fieldLabel'),
              });
              editable.toolbar = toolbar;
              editableToolbars.push(toolbar);

              listeners.push(editable.on('focus', function() {
                toolbar.model.set({ sticky: true, active: true, showLabel: true, showActions: true });
              }));
              listeners.push(editable.on('blur', function() {
                toolbar.model.set({ sticky: false, active: false, showLabel: false, showActions: false });
              }));
              listeners.push(editable.on('mouseover', function(e) {
                if (!editor.widgetfilter.isDragging()) {
                  toolbar.model.set({ active: true, showLabel: true });
                }
                e.data.$.stopPropagation();
              }));
              listeners.push(editable.on('mouseleave', function(e) {
                if (!toolbar.model.get('showActions') && !editor.widgetfilter.isDragging()) {
                  toolbar.model.set({ active: false, showLabel: false });
                }
              }));

              var getData = editable.getData;
              editable.getData = function(exportReady) {
                const tmpNode = this.clone(true);
                const toolbarNodes = tmpNode.find('.toolbar').toArray();
                if (toolbarNodes.length) {
                  toolbarNodes[0].remove();
                }
                return this.editor.dataProcessor.toDataFormat(tmpNode.getHtml(), {
                  context: this.getName(),
                  filter: this.filter,
                  enterMode: this.enterMode
                } );
              }
            });
          });

          widgetView.on('DOMRemove', function(widgetView, $el) {
            if (widgetToolbar) {
              widgetToolbar.remove();
              widgetToolbar = null;
            }

            _.each(editableToolbars, function(toolbar) {
              toolbar.remove();
            });
            editableToolbars = [];

            _.each(listeners, function(listener) {
              listener.removeListener();
            });
          });

        });

        widgetDefinition = modules.setupCustomDragHandler(widgetDefinition, topLevelToolbars);
        widgetDefinition = modules.setupWidgetFilterListener(editor);
      });
    }
  };
}

CKEDITOR.plugins.add('paragraphseditor_toolbar', pluginDefinition);
