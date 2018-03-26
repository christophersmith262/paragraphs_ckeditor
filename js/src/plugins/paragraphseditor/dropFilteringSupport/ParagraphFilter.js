import Drupal from 'drupal';
import $ from 'jquery';
import CKEDITOR from 'ckeditor';
import WidgetFilter from 'widgetfilter';

class ParagraphFilter extends Drupal.ckeditor_widgetfilter.Filter {

  requires = ['paragraph-type'];

  constructor(editor, schema, binder) {
    super();
    this._editor = editor;
    this._schema = schema;
    this._binder = binder;
  }

  filter(el, dragData) {
    var type = dragData.get('paragraph-type');
    var $editor = $(this._editor.element.$);
    if ($editor.hasClass('widget-binder-open')) {
      var context = this._binder.resolveContext($(el.$));
      var schemaId = context.get('schemaId');
      if (this._schema.isAllowed(schemaId, type)) {
        return CKEDITOR.LINEUTILS_BEFORE | CKEDITOR.LINEUTILS_AFTER;
      }
    }
  }

}

export default ParagraphFilter;
