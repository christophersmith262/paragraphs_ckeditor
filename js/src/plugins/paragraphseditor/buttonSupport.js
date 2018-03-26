import $ from 'jquery';

function buttonSupport(editor, widgetBinder, binder, widgetDefinition) {

  const wb = widgetDefinition.widgetBinder;

  // Provide a command for creating an "insert paragraph" dialog.
  editor.addCommand('paragraphseditor', {
    allowedContent: true,
    requiredContent: widgetDefinition.requiredContent,
    exec: function() {
      if (editor.widgets.selected.length === 1 && editor.widgets.selected[0].widgetBinderModel) {
        editor.widgets.selected[0].widgetBinderModel.edit();
      }
      else {
        const $el = $(editor.getSelection().getStartElement().$);
        wb.binder.create($el);
      }
    },
  });

  // Provide the ui component for the "insert paragraph" command.
  editor.ui.addButton('ParagraphsEditor', {
    label: Drupal.t('Insert / Edit ' + wb.binder.getSetting('title')),
    command: 'paragraphseditor',
  });

}

export default buttonSupport;
