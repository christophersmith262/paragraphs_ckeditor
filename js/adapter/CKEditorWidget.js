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
      // Create the element to be inserted.
      var element = new CKEDITOR.dom.element(embedCode.getTagName());
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

})(jQuery, Drupal, CKEDITOR);
