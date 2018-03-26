import Drupal from 'drupal';

class ParagraphToolboxItem extends Drupal.ckeditor_widgetfilter.Decorator {

  requires = ['toolbox-item'];

  provides = ['paragraph-type'];

  decorate(evt, dragData) {
    var toolboxItemModel = dragData.get('toolbox-item');
    if (toolboxItemModel.get('type') == 'paragraph') {
      dragData.set('paragraph-type', toolboxItemModel.get('bundle'));
    }
  }

};

export default ParagraphToolboxItem;
