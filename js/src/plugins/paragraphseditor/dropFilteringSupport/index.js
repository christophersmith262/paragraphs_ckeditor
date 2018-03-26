import ParagraphFilter from './ParagraphFilter';
import ParagraphType from './ParagraphType';

function dropFilteringSupport(editor, widgetBinder, binder, widgetDefinition) {
  const schema = widgetBinder.getSchema();

  editor.widgetfilter.on('init', function(evt) {
    editor.widgetfilter
      .registerDecorator(new ParagraphType(editor, binder))
      .registerFilter(new ParagraphFilter(editor, schema, binder));
  });

  return widgetDefinition;
}

export default dropFilteringSupport;
