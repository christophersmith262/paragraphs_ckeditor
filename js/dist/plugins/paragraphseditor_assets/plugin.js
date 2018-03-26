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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/plugins/paragraphseditor_assets/plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/plugins/config.js":
/*!**********************************!*\
  !*** ./js/src/plugins/config.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar widgetType = exports.widgetType = 'ParagraphsEditorWidget';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9jb25maWcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvc3JjL3BsdWdpbnMvY29uZmlnLmpzPzFmYjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHdpZGdldFR5cGUgPSAnUGFyYWdyYXBoc0VkaXRvcldpZGdldCc7XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/src/plugins/config.js\n");

/***/ }),

/***/ "./js/src/plugins/paragraphseditor_assets/plugin.js":
/*!**********************************************************!*\
  !*** ./js/src/plugins/paragraphseditor_assets/plugin.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _ckeditor = __webpack_require__(/*! ckeditor */ \"ckeditor\");\n\nvar _ckeditor2 = _interopRequireDefault(_ckeditor);\n\nvar _backbone = __webpack_require__(/*! backbone */ \"backbone\");\n\nvar _backbone2 = _interopRequireDefault(_backbone);\n\nvar _config = __webpack_require__(/*! ../config */ \"./js/src/plugins/config.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_ckeditor2.default.plugins.add('paragraphseditor_assets', {\n  icons: '',\n  requires: [\"paragraphseditor\", \"editor_assets\"],\n\n  beforeInit: function beforeInit(editor) {\n    editor.on('widgetDefinition', function (event) {\n      var widgetDefinition = event.data;\n      if (widgetDefinition.name !== _config.widgetType) {\n        return;\n      }\n\n      var wb = widgetDefinition.widgetBinder;\n      var emptySet = new _backbone2.default.Collection();\n\n      wb.services.getSyncActionResolver().addCollection('asset', function (attributes) {\n        var editorModel = wb.services.getEditors().get(attributes.editorContextId);\n\n        if (editorModel) {\n          var ckeditorId = editorModel.get('ckeditorId');\n\n          if (_ckeditor2.default.instances[ckeditorId]) {\n            return _ckeditor2.default.instances[ckeditorId].drupalAssets;\n          }\n        }\n\n        return emptySet;\n      });\n\n      wb.binder.on('bind', function (binder, widgetModel, widgetView) {\n        widgetView.on('DOMRender', function (widgetView, $el) {\n          editor.drupalAssets.attachBehaviors($el[0]);\n        });\n        widgetView.on('DOMRemove', function (widgetView, $el) {\n          editor.drupalAssets.detachBehaviors($el[0]);\n        });\n      });\n\n      wb.services.getSyncActionResolver().resolve(drupalSettings.paragraphs_editor);\n    });\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX2Fzc2V0cy9wbHVnaW4uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvc3JjL3BsdWdpbnMvcGFyYWdyYXBoc2VkaXRvcl9hc3NldHMvcGx1Z2luLmpzPzAwNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENLRURJVE9SIGZyb20gJ2NrZWRpdG9yJztcbmltcG9ydCBCYWNrYm9uZSBmcm9tICdiYWNrYm9uZSc7XG5pbXBvcnQgeyB3aWRnZXRUeXBlIH0gZnJvbSAnLi4vY29uZmlnJztcblxuQ0tFRElUT1IucGx1Z2lucy5hZGQoJ3BhcmFncmFwaHNlZGl0b3JfYXNzZXRzJywge1xuICBpY29uczogJycsXG4gIHJlcXVpcmVzOiBbIFwicGFyYWdyYXBoc2VkaXRvclwiLCBcImVkaXRvcl9hc3NldHNcIiBdLFxuXG4gIGJlZm9yZUluaXQ6IGZ1bmN0aW9uKGVkaXRvcikge1xuICAgIGVkaXRvci5vbignd2lkZ2V0RGVmaW5pdGlvbicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHdpZGdldERlZmluaXRpb24gPSBldmVudC5kYXRhO1xuICAgICAgaWYgKHdpZGdldERlZmluaXRpb24ubmFtZSAhPT0gd2lkZ2V0VHlwZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdiID0gd2lkZ2V0RGVmaW5pdGlvbi53aWRnZXRCaW5kZXI7XG4gICAgICBjb25zdCBlbXB0eVNldCA9IG5ldyBCYWNrYm9uZS5Db2xsZWN0aW9uKCk7XG5cbiAgICAgIHdiLnNlcnZpY2VzLmdldFN5bmNBY3Rpb25SZXNvbHZlcigpLmFkZENvbGxlY3Rpb24oJ2Fzc2V0JywgZnVuY3Rpb24oYXR0cmlidXRlcykge1xuICAgICAgICBjb25zdCBlZGl0b3JNb2RlbCA9IHdiLnNlcnZpY2VzLmdldEVkaXRvcnMoKS5nZXQoYXR0cmlidXRlcy5lZGl0b3JDb250ZXh0SWQpO1xuXG4gICAgICAgIGlmIChlZGl0b3JNb2RlbCkge1xuICAgICAgICAgIHZhciBja2VkaXRvcklkID0gZWRpdG9yTW9kZWwuZ2V0KCdja2VkaXRvcklkJyk7XG5cbiAgICAgICAgICBpZiAoQ0tFRElUT1IuaW5zdGFuY2VzW2NrZWRpdG9ySWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gQ0tFRElUT1IuaW5zdGFuY2VzW2NrZWRpdG9ySWRdLmRydXBhbEFzc2V0cztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZW1wdHlTZXQ7XG4gICAgICB9KTtcblxuICAgICAgd2IuYmluZGVyLm9uKCdiaW5kJywgZnVuY3Rpb24oYmluZGVyLCB3aWRnZXRNb2RlbCwgd2lkZ2V0Vmlldykge1xuICAgICAgICB3aWRnZXRWaWV3Lm9uKCdET01SZW5kZXInLCBmdW5jdGlvbih3aWRnZXRWaWV3LCAkZWwpIHtcbiAgICAgICAgICBlZGl0b3IuZHJ1cGFsQXNzZXRzLmF0dGFjaEJlaGF2aW9ycygkZWxbMF0pO1xuICAgICAgICB9KTtcbiAgICAgICAgd2lkZ2V0Vmlldy5vbignRE9NUmVtb3ZlJywgZnVuY3Rpb24od2lkZ2V0VmlldywgJGVsKSB7XG4gICAgICAgICAgZWRpdG9yLmRydXBhbEFzc2V0cy5kZXRhY2hCZWhhdmlvcnMoJGVsWzBdKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgd2Iuc2VydmljZXMuZ2V0U3luY0FjdGlvblJlc29sdmVyKCkucmVzb2x2ZShkcnVwYWxTZXR0aW5ncy5wYXJhZ3JhcGhzX2VkaXRvcik7XG4gICAgfSk7XG4gIH1cblxufSk7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/src/plugins/paragraphseditor_assets/plugin.js\n");

/***/ }),

/***/ "backbone":
/*!***************************!*\
  !*** external "Backbone" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Backbone;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2JvbmUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJCYWNrYm9uZVwiPzViYzAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBCYWNrYm9uZTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///backbone\n");

/***/ }),

/***/ "ckeditor":
/*!***************************!*\
  !*** external "CKEDITOR" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = CKEDITOR;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJDS0VESVRPUlwiPzc5NmQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBDS0VESVRPUjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ckeditor\n");

/***/ })

/******/ });