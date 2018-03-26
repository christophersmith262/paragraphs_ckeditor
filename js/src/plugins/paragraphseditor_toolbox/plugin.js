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
  var schema = widgetBinder.getSchema();
  var toolboxType = new Drupal.paragraphs_ckeditor.ParagraphToolboxType(schema);

  Drupal.ckeditor_toolbox.manager.registerType('paragraph', toolboxType);

  CKEDITOR.plugins.add('paragraphstoolbox', {
    icons: null,
    hidpi: false,
    requires: ["ckeditortoolbox"],
    cache: schema,
    type: toolboxType,
    init: function(editor) {
      editor.widgetfilter.on('init', function(evt) {
        editor.widgetfilter.registerDecorator(new Drupal.ckeditor_widgetfilter.Decorators.ParagraphToolboxItem());
      });
    }
  });

})(jQuery, Drupal, CKEDITOR);
