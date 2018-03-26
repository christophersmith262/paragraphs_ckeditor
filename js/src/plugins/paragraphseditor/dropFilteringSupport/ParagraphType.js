import Drupal from 'drupal';
import $ from 'jquery';
import { widgetType } from '../../config';

class ParagraphType extends Drupal.ckeditor_widgetfilter.Decorator {

  requires = ['widget'];

  provides = ['paragraph-type'];

  constructor(editor, binder) {
    super();
    this._editor = editor;
    this._binder = binder;
  }

  decorate(evt, dragData) {
    var $editor = $(this._editor.element.$);
    if ($editor.hasClass('widget-binder-open')) {
      const widget = dragData.get('widget');

      if (widget.name == widgetType) {
        const widgetModel = this._binder.get(widget.id);
        const type = widgetModel.editBufferItemRef.editBufferItem.get('type');

        dragData.set('paragraph-type', type);
      }
    }
  }

};

export default ParagraphType;
