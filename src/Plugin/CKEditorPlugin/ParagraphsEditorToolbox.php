<?php

namespace Drupal\paragraphs_ckeditor\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\ckeditor\CKEditorPluginContextualInterface;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "paragraphseditor_toolbox" plugin.
 *
 * @CKEditorPlugin(
 *   id = "paragraphseditor_toolbox",
 *   label = @Translation("Paragraphs Editor Toolbox Integration"),
 *   module = "paragraphs_ckeditor"
 * )
 */
class ParagraphsEditorToolbox extends CKEditorPluginBase implements CKEditorPluginContextualInterface {

  /**
   * {@inheritdoc}
   */
  public function isEnabled(Editor $editor) {
    return \Drupal::moduleHandler()->moduleExists('ckeditor_toolbox');
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return drupal_get_path('module', 'paragraphs_ckeditor') . '/js/dist/plugins/paragraphseditor_toolbox/plugin.js';
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
