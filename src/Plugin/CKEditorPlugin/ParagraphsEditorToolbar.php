<?php

namespace Drupal\paragraphs_ckeditor\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\ckeditor\CKEditorPluginCssInterface;
use Drupal\ckeditor\CKEditorPluginContextualInterface;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "paragraphseditor_toolbar" plugin.
 *
 * @CKEditorPlugin(
 *   id = "paragraphseditor_toolbar",
 *   label = @Translation("Paragraphs Editor Toolbar Integration"),
 *   module = "paragraphs_ckeditor"
 * )
 */
class ParagraphsEditortoolbar extends CKEditorPluginBase implements CKEditorPluginCssInterface, CKEditorPluginContextualInterface {
  use ParagraphsEditorSettingsTrait;

  /**
   * {@inheritdoc}
   */
  public function getCssFiles(Editor $editor) {
    return [
      drupal_get_path('module', 'paragraphs_ckeditor') . '/css/widget.css',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function isEnabled(Editor $editor) {
    return \Drupal::moduleHandler()->moduleExists('ckeditor_widgettoolbar')
      && $this->getSetting($editor, 'show_toolbar');
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return drupal_get_path('module', 'paragraphs_ckeditor') . '/js/dist/plugins/paragraphseditor_toolbar/plugin.js';
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
