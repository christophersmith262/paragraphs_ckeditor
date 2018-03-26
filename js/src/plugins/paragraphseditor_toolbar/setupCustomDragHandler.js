import $ from 'jquery';

function setupCustomDragHandler(widgetDefinition, topLevelToolbars) {
  widgetDefinition.updateDragHandlerPosition = function() {
    if (topLevelToolbars[this.id]) {
      var toolbar = topLevelToolbars[this.id];
      var $dragContainer = $(this.dragHandlerContainer.$);
      if (!$dragContainer.parent().is(toolbar.$actionsEl.children().first())) {
        toolbar.$actionsEl.children().first().find('a').prepend($dragContainer);
      }
    }

    this.dragHandlerContainer.setStyles({
      background: 'none',
      display: 'block',
      height: 20 + 'px',
      left: 0,
      position: 'absolute',
      top: 0,
      width: 20 + 'px',
    });

    this.dragHandlerContainer.getFirst().setStyles({
      width: 20 + 'px',
      height: 20 + 'px',
    });
  };
}

export default setupCustomDragHandler;
