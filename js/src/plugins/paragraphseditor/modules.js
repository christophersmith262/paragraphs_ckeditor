import Drupal from 'drupal';
import CKEditorWidgetAdapter from './CKEditorWidgetAdapter';
import dataFormatterSupport from './dataFormatterSupport';
import downcastCacheSupport from './downcastCacheSupport';
import dropFilteringSupport from './dropFilteringSupport';
import buttonSupport from './buttonSupport';

module.exports = {
  CKEditorWidgetAdapter: CKEditorWidgetAdapter,
  dataFormatterSupport: dataFormatterSupport,
  downcastCacheSupport: downcastCacheSupport,
  dropFilteringSupport: dropFilteringSupport,
  buttonSupport: buttonSupport,
};
