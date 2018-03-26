<?php

namespace Drupal\paragraphs_ckeditor\Plugin\CKEditorPlugin;

use Drupal\editor\Entity\Editor;

/**
 * A trait for retrieving paragraphseditor plugin settings.
 */
trait ParagraphsEditorSettingsTrait {

  /**
   * Gets a plugin setting.
   *
   * @var string $name
   *   The name of the plugin setting to get.
   *
   * @return mixed
   *   The setting value or NULL for invalid settings keys.
   */
  protected function getSetting(Editor $editor, $name) {
    // Defaults.
    $defaults = [
      'show_button' => TRUE,
      'show_toolbar' => TRUE,
      'autoload_libraries' => TRUE,
    ];

    $settings = $editor->getSettings();
    if (isset($settings['plugins']['paragraphseditor'][$name])) {
      return $settings['plugins']['paragraphseditor'][$name];
    }
    elseif (isset($config[$name])) {
      return $defaults[$name];
    }
    else {
      return NULL;
    }
  }

}
