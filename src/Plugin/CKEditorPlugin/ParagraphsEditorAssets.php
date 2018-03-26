<?php

namespace Drupal\paragraphs_ckeditor\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\ckeditor\CKEditorPluginContextualInterface;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "paragraphseditor_assets" plugin.
 *
 * @CKEditorPlugin(
 *   id = "paragraphseditor_assets",
 *   label = @Translation("Paragraphs Editor Asset Injector Integration"),
 *   module = "paragraphs_ckeditor"
 * )
 */
class ParagraphsEditorAssets extends CKEditorPluginBase implements CKEditorPluginContextualInterface {
  use ParagraphsEditorSettingsTrait;

  /**
   * {@inheritdoc}
   */
  public function isEnabled(Editor $editor) {
    return \Drupal::moduleHandler()->moduleExists('editor_assets')
      && $this->getSetting($editor, 'autoload_libraries');
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return drupal_get_path('module', 'paragraphs_ckeditor') . '/js/dist/plugins/paragraphseditor_assets/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return [];
  }

}
