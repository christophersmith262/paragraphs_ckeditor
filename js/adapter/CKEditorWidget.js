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

    attachInlineEditing: function(widgetView, index, selector) {
      widgetView.model.widget.initEditable(index, {
        "selector": selector
      });
    },

    getInlineEdit: function(widgetView, index, selector) {
      if (widgetView.model.widget.editables[index]) {
        return widgetView.model.widget.editables[index].getData(true);
      }
      else {
        return widgetView.$el.find(selector).html();
      }
    },

    getRootEl: function() {
      return this.editor.document.$;
    },

  });

})(jQuery, Drupal, CKEDITOR);
