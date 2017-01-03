<?php

namespace Drupal\paragraphs_ckeditor\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\ckeditor\CKEditorPluginCssInterface;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "paragraphsinsert" plugin.
 *
 * @CKEditorPlugin(
 *   id = "paragraphsinsert",
 *   label = @Translation("Insert Component"),
 *   module = "paragraphs_ckeditor"
 * )
 */
class ParagraphsInsert extends CKEditorPluginBase implements CKEditorPluginCssInterface {

  /**
   * {@inheritdoc}
   */
  public function getCssFiles(Editor $editor) {
    return array(
      drupal_get_path('module', 'paragraphs_editor') . '/css/resets.css',
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return drupal_get_path('module', 'paragraphs_ckeditor') . '/js/plugins/paragraphsinsert/plugin.js';
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
    return array(
      'ParagraphsInsert' => array(
        'label' => t('Insert Paragraph'),
        'image' => drupal_get_path('module', 'paragraphs_ckeditor') . '/js/plugins/paragraphsinsert/icons/paragraphsinsert.png',
      ),
    );
  }

  /**
   * {@inheritdoc}
   */
  function getLibraries(Editor $editor) {
    return array(
      'paragraphs_ckeditor/editoradapter',
    );
  }
}
