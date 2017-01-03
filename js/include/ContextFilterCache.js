(function ($, Drupal, CKEDITOR) {

  'use strict';

  Drupal.ckeditor_toolbox.ContextFilterCache = function(contextCollection) {
    this._allowedBundleMap = {};
    var cache = this;
    contextCollection.each(function(context) {
      cache._updateCache(context)
    });
    this.listenTo(contextCollection, 'add', this._updateCache);
  }

  $.extend(Drupal.ckeditor_toolbox.ContextFilterCache.prototype, Backbone.Events, {

    isAllowed: function(fieldId, bundleName) {
      return this._allowedBundleMap[fieldId] && this._allowedBundleMap[fieldId][bundleName];
    },

    _updateCache: function(context) {
      var cache = this;
      var fieldId = context.getFieldId();
      $.get('/ajax/paragraphs-editor/schema/' + fieldId, '', function(response) {
        cache._allowedBundleMap[fieldId] = {};
        _.each(response, function(bundleName) {
          cache._allowedBundleMap[fieldId][bundleName] = true;
        });
      });
    }
  });

})(jQuery, Drupal, CKEDITOR);
