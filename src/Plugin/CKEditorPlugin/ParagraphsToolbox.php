<?php

namespace Drupal\paragraphs_ckeditor\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\ckeditor\CKEditorPluginContextualInterface;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "paragraphstoolbox" plugin.
 *
 * @CKEditorPlugin(
 *   id = "paragraphstoolbox",
 *   label = @Translation("Paragraphs Toolbox Integration"),
 *   module = "paragraphs_ckeditor"
 * )
 */
class ParagraphsToolbox extends CKEditorPluginBase implements CKEditorPluginContextualInterface {

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
    return drupal_get_path('module', 'paragraphs_ckeditor') . '/js/plugins/paragraphstoolbox/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return array(
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return array();
  }

  /**
   * {@inheritdoc}
   */
  function getLibraries(Editor $editor) {
    return array(
      'paragraphs_ckeditor/toolboxtype',
    );
  }
}

