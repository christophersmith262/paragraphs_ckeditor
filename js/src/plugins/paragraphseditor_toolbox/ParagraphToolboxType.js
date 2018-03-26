import Drupal from 'drupal';

class ParagraphToolboxType extends Drupal.ckeditor_toolbox.ToolboxType {

  constructor(filterCache) {
    super();
    this._filterCache = filterCache;
  }

  filter(toolboxItemModel, editor, element) {
    if ($editor.hasClass('widget-binder-open')) {
      var context = $editor.data('widget-binder').resolveContext($(element.$));
      var type = context.get('field');
      if (this._filterCache.isAllowed(type, toolboxItemModel.get('bundle'))) {
        return true;
      }
    }

    // Fallback to not allowing the insert.
    return false;
  }

  insert(toolboxItemModel, editor) {

    // Issue an insert request if the paragraphseditor plugin is attached.
    var $editor = $(editor.element.$);
    if ($editor.hasClass('widget-binder-open')) {
      $editor.data('widget-binder').create($(editor.getSelection().getStartElement().$), toolboxItemModel.get('bundle'));
    }

    // We never directly insert markup from here. The paragraphseditor
    // plugin is now responsible for finishing the insert.
    return;
  }

}

export default ParagraphToolboxType;
