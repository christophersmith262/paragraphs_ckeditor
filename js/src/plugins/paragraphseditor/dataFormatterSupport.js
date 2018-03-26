
function dataFormatterSupport(editor, widgetBinder, binder, widgetDefinition) {
  const elementFactory = widgetBinder.getElementFactory();
  const widgetTemplate = elementFactory.getTemplate('widget');
  const fieldTemplate = elementFactory.getTemplate('field');

  // Set up formatting rules for writing CKEditor output markup.
  var formatRules = {
    indent: true,
    breakBeforeOpen: true,
    breakAfterOpen: true,
    breakBeforeClose: true,
    breakAfterClose: true
  };
  editor.dataProcessor.writer.setRules(widgetTemplate.getTag(), formatRules);
  editor.dataProcessor.writer.setRules(fieldTemplate.getTag(), formatRules);

  return widgetDefinition;
}

export default dataFormatterSupport;
