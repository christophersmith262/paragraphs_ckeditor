<?php

namespace Drupal\paragraphs_ckeditor\Plugin\CKEditorPlugin;

use Drupal\Core\Form\FormStateInterface;
use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\ckeditor\CKEditorPluginCssInterface;
use Drupal\ckeditor\CKEditorPluginConfigurableInterface;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "paragraphseditor" plugin.
 *
 * @CKEditorPlugin(
 *   id = "paragraphseditor",
 *   label = @Translation("Paragraphs Editor"),
 *   module = "paragraphs_ckeditor"
 * )
 */
class ParagraphsEditor extends CKEditorPluginBase implements CKEditorPluginConfigurableInterface, CKEditorPluginCssInterface {
  use ParagraphsEditorSettingsTrait;

  /**
   * {@inheritdoc}
   */
  public function getCssFiles(Editor $editor) {
    return [
      drupal_get_path('module', 'paragraphs_editor') . '/css/resets.css',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return drupal_get_path('module', 'paragraphs_ckeditor') . '/js/dist/plugins/paragraphseditor/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return [
      'paragraphseditor_showButton' => $this->getSetting($editor, 'show_button'),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return [
      'ParagraphsEditor' => [
        'label' => t('Insert Paragraph'),
        'image' => drupal_get_path('module', 'paragraphs_ckeditor') . '/js/dist/plugins/paragraphseditor/icons/paragraphseditor.png',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return [
      'paragraphs_editor/core',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state, Editor $editor) {
    $form['show_button'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Show Insert / Edit Button'),
      '#description' => $this->t('Toggles whether to show or hide the button for inserting new paragraphs or editing the selected paragraph. If you are using the drag and drop interface you may want to disable this option.'),
      '#default_value' => $this->getSetting($editor, 'show_button'),
    ];

    $form['show_toolbar'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enable Toolbar'),
      '#description' => $this->t('Toggles whether to show or hide the custom widget toolbar width edit, delete, re-position icons. If you disable the toolbar you may want to make sure to enable the Insert / Edit button so that content authors can edit embedded paragraphs.'),
      '#default_value' => $this->getSetting($editor, 'show_toolbar'),
    ];

    $form['autoload_libraries'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Autoload Drupal Libraries'),
      '#description' => $this->t('Toggles whether to automatically load libraries that are attached to rendered paragraphs into the CKEditor instance.'),
      '#default_value' => $this->getSetting($editor, 'autoload_libraries'),
    ];

    return $form;
  }

}
