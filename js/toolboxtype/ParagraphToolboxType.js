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

  Drupal.paragraphs_ckeditor.ParagraphToolboxType = Drupal.ckeditor_toolbox.ToolboxType.extend({

    constructor: function(filterCache) {
      this._filterCache = filterCache;
    },

    filter: function(toolboxItemModel, editor, element) {
      if ($editor.hasClass('widget-binder-open')) {
        var context = $editor.data('widget-binder').resolveContext($(element.$));
        var type = context.get('field');
        if (this._filterCache.isAllowed(type, toolboxItemModel.get('bundle'))) {
          return true;
        }
      }

      // Fallback to not allowing the insert.
      return false;
    },

    insert: function(toolboxItemModel, editor) {

      // Issue an insert request if the paragraphsckeditor plugin is attached.
      var $editor = $(editor.element.$);
      if ($editor.hasClass('widget-binder-open')) {
        $editor.data('widget-binder').create($(editor.getSelection().getStartElement().$), toolboxItemModel.get('bundle'));
      }

      // We never directly insert markup from here. The paragraphsckeditor
      // plugin is now responsible for finishing the insert.
      return;
    }

  });

})(jQuery, Drupal, CKEDITOR);
