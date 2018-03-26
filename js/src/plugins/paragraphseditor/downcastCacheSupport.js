
function downcastCacheSupport(editor, widgetBinder, binder, widgetDefinition) {
  if (widgetDefinition.downcast) {
    var downcastingSessions = [];
    var downcastedWidgets = {};

    editor.on('toDataFormat', function(evt) {
      if (evt.data.downcastingSessionId) {
        downcastingSessions.push(true);
      }
    }, null, null, 8);

    editor.on('toDataFormat', function(evt) {
      if (evt.data.downcastingSessionId) {
        downcastingSessions.pop();
        if (_.isEmpty(downcastingSessions)) {
          downcastedWidgets = {};
        }
      }
    }, null, null, 13);

    var downcast = widgetDefinition.downcast;
    widgetDefinition.downcast = function (element) {
      if (!downcastedWidgets[this.id]) {
        downcastedWidgets[this.id] = downcast.call(this, element);
      }
      return downcastedWidgets[this.id];
    }
  }

  return widgetDefinition;
}

export default downcastCacheSupport;
