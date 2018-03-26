import Drupal from 'drupal';
import CKEDITOR from 'ckeditor';
import WidgetBinder from 'widget-binder';

class CKEditorWidgetAdapter extends WidgetBinder.PluginInterface.EditorAdapter  {

  editor = null;
  widgetType = null;

  constructor(editorInstance, widgetType) {
    super();
    this.editor = editorInstance;
    this.widgetType = widgetType;
  }

  static create($editorEl, editor, pluginType) {
    return new CKEditorWidgetAdapter(editor, pluginType);
  }

  insertEmbedCode(embedCode) {
    // Create the element to be inserted.
    var element = new CKEDITOR.dom.element(embedCode.getTag());
    element.setAttributes(embedCode.getAttributes());

    // Insert the markup.
    this.editor.insertElement(element);

    // Initialize the new widget and set focus to it.
    var widget = this.editor.widgets.initOn(element, this.widgetType);
    this.editor.focus();
    widget.focus();
  }

  destroyWidget(id) {
    if (this.editor.widgets.instances[id]) {
      this.editor.widgets.del(this.editor.widgets.instances[id]);
    }
  }

  attachInlineEditing(widgetView, contextString, selector) {
    widgetView.model.widget.initEditable(contextString, {
      "selector": selector
    });
  }

  detachInlineEditing(widgetView, contextString, selector) {
    widgetView.model.widget.destroyEditable(contextString);
  }

  getInlineEdit(widgetView, contextString, selector) {
    if (widgetView.model.widget.editables[contextString]) {
      return widgetView.model.widget.editables[contextString].getData(true);
    }
    else {
      return widgetView.$el.find(selector).html();
    }
  }

  getRootEl() {
    return this.editor.document.$;
  }

};

export default CKEditorWidgetAdapter;
