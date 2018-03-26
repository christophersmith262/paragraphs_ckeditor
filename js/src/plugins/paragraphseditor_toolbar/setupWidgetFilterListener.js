import CKEDITOR from 'ckeditor';

function setupWidgetFilterListener(editor) {

  editor.widgetfilter.on('update', function(evt) {
    var activeCid = null;

    if (CKEDITOR.plugins.widget.getNestedEditable(editor.editable(), evt.data.target)) {
      var toolbar = editor.widgets.getByElement(evt.data.target).editables[CKEDITOR.plugins.widget.getNestedEditable(evt.editor, evt.data.target).data('cke-widget-editable')].toolbar;
      toolbar.model.set({ active: true, showLabel: true });
      activeCid = toolbar.model.cid;
    }

    editor.widgetToolbars.collection.each(function(model) {
      if (!model.get('sticky') && model.cid !== activeCid) {
        model.set({ active: false, showLabel: false });
      }
    });
  });

}

export default setupWidgetFilterListener;
