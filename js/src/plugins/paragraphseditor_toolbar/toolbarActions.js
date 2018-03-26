import Drupal from 'drupal';
import { EditIcon, MoveIcon, RemoveIcon } from './icons'

const ActionButtonView = Drupal.ckeditor_widgettoolbar.Views.ActionButtonView;

export default function(editor, widgetModel) {
  return [
    {
      id: 'move',
      label: Drupal.t('Move'),
      view: ActionButtonView,
      icon: MoveIcon,
      callback: function() {},
    },
    {
      id: 'edit',
      label: Drupal.t('Edit'),
      view: ActionButtonView,
      icon: EditIcon,
      callback: function() {
        widgetModel.edit();
      },
    },
    {
      id: 'remove',
      label: Drupal.t('Remove'),
      view: ActionButtonView,
      icon: RemoveIcon,
      callback: function() {
        editor.fire('saveSnapshot');
        widgetModel.destroy();
      },
    },
  ];
}
