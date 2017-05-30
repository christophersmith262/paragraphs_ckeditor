(function($, Drupal, CKEDITOR) {

  'use strict';

  Drupal.paragraphs_ckeditor = {};

  Drupal.paragraphs_ckeditor.CKEditorWidgetAdapter = Drupal.paragraphs_editor.WidgetBinder.PluginInterface.EditorAdapter.extend({

    editor: null,
    widgetType: null,

    constructor: function(editorInstance, widgetType) {
      this.editor = editorInstance;
      this.widgetType = widgetType;
    },

    insertEmbedCode: function(embedCode) {
      // Create the element to be inserted.
      var element = new CKEDITOR.dom.element(embedCode.getTag());
      element.setAttributes(embedCode.getAttributes());

      // Insert the markup.
      this.editor.insertElement(element);

      // Initialize the new widget and set focus to it.
      var widget = this.editor.widgets.initOn(element, this.widgetType);
      this.editor.focus();
      widget.focus();
    },

    destroyWidget: function(id) {
      if (this.editor.widgets.instances[id]) {
        this.editor.widgets.del(this.editor.widgets.instances[id]);
      }
    },

    attachInlineEditing: function(widgetView, contextString, selector) {
      widgetView.model.widget.initEditable(contextString, {
        "selector": selector
      });
    },

    detachInlineEditing: function(widgetView, contextString, selector) {
      widgetView.model.widget.destroyEditable(contextString);
    },

    getInlineEdit: function(widgetView, contextString, selector) {
      if (widgetView.model.widget.editables[contextString]) {
        return widgetView.model.widget.editables[contextString].getData(true);
      }
      else {
        return widgetView.$el.find(selector).html();
      }
    },

    getRootEl: function() {
      return this.editor.document.$;
    },

  });

  Drupal.paragraphs_ckeditor.CKEditorWidgetAdapter.create = function($editorEl, editor, pluginType) {
    return new Drupal.paragraphs_ckeditor.CKEditorWidgetAdapter(editor, pluginType);
  }

  Drupal.paragraphs_editor.register('paragraphs_ckeditor', Drupal.paragraphs_ckeditor.CKEditorWidgetAdapter);

})(jQuery, Drupal, CKEDITOR);
