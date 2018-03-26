/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/plugins/paragraphseditor_toolbox/plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/plugins/paragraphseditor_toolbox/plugin.js":
/*!***********************************************************!*\
  !*** ./js/src/plugins/paragraphseditor_toolbox/plugin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * @file\n * Drupal Image plugin.\n *\n * This alters the existing CKEditor image2 widget plugin to:\n * - require a data-entity-type and a data-entity-uuid attribute (which Drupal\n *   uses to track where images are being used)\n * - use a Drupal-native dialog (that is in fact just an alterable Drupal form\n *   like any other) instead of CKEditor's own dialogs.\n *\n * @see \\Drupal\\editor\\Form\\EditorImageDialog\n *\n * @ignore\n */\n(function ($, Drupal, CKEDITOR) {\n\n  'use strict';\n\n  var widgetBinder = Drupal.paragraphs_editor.instances['paragraphs_ckeditor'];\n  var schema = widgetBinder.getSchema();\n  var toolboxType = new Drupal.paragraphs_ckeditor.ParagraphToolboxType(schema);\n\n  Drupal.ckeditor_toolbox.manager.registerType('paragraph', toolboxType);\n\n  CKEDITOR.plugins.add('paragraphstoolbox', {\n    icons: null,\n    hidpi: false,\n    requires: [\"ckeditortoolbox\"],\n    cache: schema,\n    type: toolboxType,\n    init: function init(editor) {\n      editor.widgetfilter.on('init', function (evt) {\n        editor.widgetfilter.registerDecorator(new Drupal.ckeditor_widgetfilter.Decorators.ParagraphToolboxItem());\n      });\n    }\n  });\n})(jQuery, Drupal, CKEDITOR);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xib3gvcGx1Z2luLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2pzL3NyYy9wbHVnaW5zL3BhcmFncmFwaHNlZGl0b3JfdG9vbGJveC9wbHVnaW4uanM/YTczMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBEcnVwYWwgSW1hZ2UgcGx1Z2luLlxuICpcbiAqIFRoaXMgYWx0ZXJzIHRoZSBleGlzdGluZyBDS0VkaXRvciBpbWFnZTIgd2lkZ2V0IHBsdWdpbiB0bzpcbiAqIC0gcmVxdWlyZSBhIGRhdGEtZW50aXR5LXR5cGUgYW5kIGEgZGF0YS1lbnRpdHktdXVpZCBhdHRyaWJ1dGUgKHdoaWNoIERydXBhbFxuICogICB1c2VzIHRvIHRyYWNrIHdoZXJlIGltYWdlcyBhcmUgYmVpbmcgdXNlZClcbiAqIC0gdXNlIGEgRHJ1cGFsLW5hdGl2ZSBkaWFsb2cgKHRoYXQgaXMgaW4gZmFjdCBqdXN0IGFuIGFsdGVyYWJsZSBEcnVwYWwgZm9ybVxuICogICBsaWtlIGFueSBvdGhlcikgaW5zdGVhZCBvZiBDS0VkaXRvcidzIG93biBkaWFsb2dzLlxuICpcbiAqIEBzZWUgXFxEcnVwYWxcXGVkaXRvclxcRm9ybVxcRWRpdG9ySW1hZ2VEaWFsb2dcbiAqXG4gKiBAaWdub3JlXG4gKi9cbihmdW5jdGlvbiAoJCwgRHJ1cGFsLCBDS0VESVRPUikge1xuXG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgd2lkZ2V0QmluZGVyID0gRHJ1cGFsLnBhcmFncmFwaHNfZWRpdG9yLmluc3RhbmNlc1sncGFyYWdyYXBoc19ja2VkaXRvciddO1xuICB2YXIgc2NoZW1hID0gd2lkZ2V0QmluZGVyLmdldFNjaGVtYSgpO1xuICB2YXIgdG9vbGJveFR5cGUgPSBuZXcgRHJ1cGFsLnBhcmFncmFwaHNfY2tlZGl0b3IuUGFyYWdyYXBoVG9vbGJveFR5cGUoc2NoZW1hKTtcblxuICBEcnVwYWwuY2tlZGl0b3JfdG9vbGJveC5tYW5hZ2VyLnJlZ2lzdGVyVHlwZSgncGFyYWdyYXBoJywgdG9vbGJveFR5cGUpO1xuXG4gIENLRURJVE9SLnBsdWdpbnMuYWRkKCdwYXJhZ3JhcGhzdG9vbGJveCcsIHtcbiAgICBpY29uczogbnVsbCxcbiAgICBoaWRwaTogZmFsc2UsXG4gICAgcmVxdWlyZXM6IFtcImNrZWRpdG9ydG9vbGJveFwiXSxcbiAgICBjYWNoZTogc2NoZW1hLFxuICAgIHR5cGU6IHRvb2xib3hUeXBlLFxuICAgIGluaXQ6IGZ1bmN0aW9uKGVkaXRvcikge1xuICAgICAgZWRpdG9yLndpZGdldGZpbHRlci5vbignaW5pdCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICBlZGl0b3Iud2lkZ2V0ZmlsdGVyLnJlZ2lzdGVyRGVjb3JhdG9yKG5ldyBEcnVwYWwuY2tlZGl0b3Jfd2lkZ2V0ZmlsdGVyLkRlY29yYXRvcnMuUGFyYWdyYXBoVG9vbGJveEl0ZW0oKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG59KShqUXVlcnksIERydXBhbCwgQ0tFRElUT1IpO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/src/plugins/paragraphseditor_toolbox/plugin.js\n");

/***/ })

/******/ });