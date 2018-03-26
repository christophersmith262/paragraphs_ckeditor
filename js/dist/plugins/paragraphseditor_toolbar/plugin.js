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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/plugins/paragraphseditor_toolbar/plugin.js");
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

/***/ "./js/src/plugins/paragraphseditor_toolbar/icons/edit.js":
/*!***************************************************************!*\
  !*** ./js/src/plugins/paragraphseditor_toolbar/icons/edit.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"/></svg>';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvaWNvbnMvZWRpdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvaWNvbnMvZWRpdC5qcz83NDE0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1TDMgMTcuMjV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6XCIvPjwvc3ZnPic7XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/src/plugins/paragraphseditor_toolbar/icons/edit.js\n");

/***/ }),

/***/ "./js/src/plugins/paragraphseditor_toolbar/icons/index.js":
/*!****************************************************************!*\
  !*** ./js/src/plugins/paragraphseditor_toolbar/icons/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RemoveIcon = exports.MoveIcon = exports.EditIcon = undefined;\n\nvar _edit = __webpack_require__(/*! ./edit */ \"./js/src/plugins/paragraphseditor_toolbar/icons/edit.js\");\n\nvar _edit2 = _interopRequireDefault(_edit);\n\nvar _move = __webpack_require__(/*! ./move */ \"./js/src/plugins/paragraphseditor_toolbar/icons/move.js\");\n\nvar _move2 = _interopRequireDefault(_move);\n\nvar _remove = __webpack_require__(/*! ./remove */ \"./js/src/plugins/paragraphseditor_toolbar/icons/remove.js\");\n\nvar _remove2 = _interopRequireDefault(_remove);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.EditIcon = _edit2.default;\nexports.MoveIcon = _move2.default;\nexports.RemoveIcon = _remove2.default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvaWNvbnMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvc3JjL3BsdWdpbnMvcGFyYWdyYXBoc2VkaXRvcl90b29sYmFyL2ljb25zL2luZGV4LmpzP2FhMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVkaXRJY29uIGZyb20gJy4vZWRpdCc7XG5pbXBvcnQgTW92ZUljb24gZnJvbSAnLi9tb3ZlJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJy4vcmVtb3ZlJztcblxuZXhwb3J0IHsgRWRpdEljb24sIE1vdmVJY29uLCBSZW1vdmVJY29uIH07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/src/plugins/paragraphseditor_toolbar/icons/index.js\n");

/***/ }),

/***/ "./js/src/plugins/paragraphseditor_toolbar/icons/move.js":
/*!***************************************************************!*\
  !*** ./js/src/plugins/paragraphseditor_toolbar/icons/move.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = '<svg height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path clip-path=\"url(#b)\" d=\"M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z\" transform=\"rotate(45) scale(.75) translate(11, -11)\"/></svg>';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvaWNvbnMvbW92ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvaWNvbnMvbW92ZS5qcz9jZWFmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICc8c3ZnIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+PHBhdGggY2xpcC1wYXRoPVwidXJsKCNiKVwiIGQ9XCJNMTUgM2wyLjMgMi4zLTIuODkgMi44NyAxLjQyIDEuNDJMMTguNyA2LjcgMjEgOVYzek0zIDlsMi4zLTIuMyAyLjg3IDIuODkgMS40Mi0xLjQyTDYuNyA1LjMgOSAzSDN6bTYgMTJsLTIuMy0yLjMgMi44OS0yLjg3LTEuNDItMS40Mkw1LjMgMTcuMyAzIDE1djZ6bTEyLTZsLTIuMyAyLjMtMi44Ny0yLjg5LTEuNDIgMS40MiAyLjg5IDIuODdMMTUgMjFoNnpcIiB0cmFuc2Zvcm09XCJyb3RhdGUoNDUpIHNjYWxlKC43NSkgdHJhbnNsYXRlKDExLCAtMTEpXCIvPjwvc3ZnPic7XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/src/plugins/paragraphseditor_toolbar/icons/move.js\n");

/***/ }),

/***/ "./js/src/plugins/paragraphseditor_toolbar/icons/remove.js":
/*!*****************************************************************!*\
  !*** ./js/src/plugins/paragraphseditor_toolbar/icons/remove.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"/></svg>';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvaWNvbnMvcmVtb3ZlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2pzL3NyYy9wbHVnaW5zL3BhcmFncmFwaHNlZGl0b3JfdG9vbGJhci9pY29ucy9yZW1vdmUuanM/YmI3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNiAxOWMwIDEuMS45IDIgMiAyaDhjMS4xIDAgMi0uOSAyLTJWN0g2djEyek0xOSA0aC0zLjVsLTEtMWgtNWwtMSAxSDV2MmgxNFY0elwiLz48L3N2Zz4nO1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/src/plugins/paragraphseditor_toolbar/icons/remove.js\n");

/***/ }),

/***/ "./js/src/plugins/paragraphseditor_toolbar/modules.js":
/*!************************************************************!*\
  !*** ./js/src/plugins/paragraphseditor_toolbar/modules.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _toolbarActions = __webpack_require__(/*! ./toolbarActions */ \"./js/src/plugins/paragraphseditor_toolbar/toolbarActions.js\");\n\nvar _toolbarActions2 = _interopRequireDefault(_toolbarActions);\n\nvar _setupCustomDragHandler = __webpack_require__(/*! ./setupCustomDragHandler */ \"./js/src/plugins/paragraphseditor_toolbar/setupCustomDragHandler.js\");\n\nvar _setupCustomDragHandler2 = _interopRequireDefault(_setupCustomDragHandler);\n\nvar _setupWidgetFilterListener = __webpack_require__(/*! ./setupWidgetFilterListener */ \"./js/src/plugins/paragraphseditor_toolbar/setupWidgetFilterListener.js\");\n\nvar _setupWidgetFilterListener2 = _interopRequireDefault(_setupWidgetFilterListener);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = {\n  toolbarActions: _toolbarActions2.default,\n  setupCustomDragHandler: _setupCustomDragHandler2.default,\n  setupWidgetFilterListener: _setupWidgetFilterListener2.default\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvbW9kdWxlcy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvbW9kdWxlcy5qcz9kYmYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b29sYmFyQWN0aW9ucyBmcm9tICcuL3Rvb2xiYXJBY3Rpb25zJztcbmltcG9ydCBzZXR1cEN1c3RvbURyYWdIYW5kbGVyIGZyb20gJy4vc2V0dXBDdXN0b21EcmFnSGFuZGxlcic7XG5pbXBvcnQgc2V0dXBXaWRnZXRGaWx0ZXJMaXN0ZW5lciBmcm9tICcuL3NldHVwV2lkZ2V0RmlsdGVyTGlzdGVuZXInO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdG9vbGJhckFjdGlvbnM6IHRvb2xiYXJBY3Rpb25zLFxuICBzZXR1cEN1c3RvbURyYWdIYW5kbGVyOiBzZXR1cEN1c3RvbURyYWdIYW5kbGVyLFxuICBzZXR1cFdpZGdldEZpbHRlckxpc3RlbmVyOiBzZXR1cFdpZGdldEZpbHRlckxpc3RlbmVyLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/src/plugins/paragraphseditor_toolbar/modules.js\n");

/***/ }),

/***/ "./js/src/plugins/paragraphseditor_toolbar/plugin.js":
/*!***********************************************************!*\
  !*** ./js/src/plugins/paragraphseditor_toolbar/plugin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _ckeditor = __webpack_require__(/*! ckeditor */ \"ckeditor\");\n\nvar _ckeditor2 = _interopRequireDefault(_ckeditor);\n\nvar _backbone = __webpack_require__(/*! backbone */ \"backbone\");\n\nvar _backbone2 = _interopRequireDefault(_backbone);\n\nvar _jquery = __webpack_require__(/*! jquery */ \"jquery\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _config = __webpack_require__(/*! ../config */ \"./js/src/plugins/config.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar pluginDefinition = {\n  icons: '',\n  requires: [\"paragraphseditor\", \"widgettoolbar\"]\n};\n\nif (Drupal.ckeditor_widgettoolbar) {\n  var modules = __webpack_require__(/*! ./modules */ \"./js/src/plugins/paragraphseditor_toolbar/modules.js\");\n\n  pluginDefinition = _extends({}, pluginDefinition, {\n\n    beforeInit: function beforeInit(editor) {\n      editor.on('widgetDefinition', function (event) {\n        var widgetDefinition = event.data;\n        if (widgetDefinition.name !== _config.widgetType) {\n          return;\n        }\n        var wb = widgetDefinition.widgetBinder;\n        var topLevelToolbars = {};\n\n        wb.binder.on('bind', function (binder, widgetModel, widgetView) {\n          var widgetToolbar;\n          var editableToolbars = [];\n          var listeners = [];\n\n          widgetView.on('DOMRender', function (widgetView, $el) {\n            widgetToolbar = editor.widgetToolbars.add(widgetModel.widget.element.$, {\n              label: Drupal.t(widgetModel.editBufferItemRef.editBufferItem.get('label')),\n              actions: modules.toolbarActions(editor, widgetModel)\n            });\n            topLevelToolbars[widgetModel.widget.id] = widgetToolbar;\n\n            if (widgetModel.widget.element.getParent().hasClass('cke_widget_selected')) {\n              widgetToolbar.model.set({ sticky: true, active: true, showLabel: true, showActions: true });\n            }\n\n            // When the widget is selected, show the entire toolbar. When the\n            // widget is deselected, hide the entire toolbar.\n            listeners.push(widgetModel.widget.on('select', function () {\n              widgetToolbar.model.set({ sticky: true, active: true, showLabel: true, showActions: true });\n            }));\n            listeners.push(widgetModel.widget.on('deselect', function () {\n              widgetToolbar.model.set({ sticky: false, active: false, showLabel: false, showActions: false });\n            }));\n\n            // On mouseenter, show make this widget's toolbar the active\n            // toolbar and show the label. On mouseleave, if the action\n            // toolbar is not being shown, hide the entire toolbar.\n            listeners.push(widgetModel.widget.element.getParent().on('mouseover', function (e) {\n              if (!widgetModel.widget.editor.widgetfilter.isDragging()) {\n                widgetToolbar.model.set({ active: true, showLabel: true });\n              }\n              e.data.$.stopPropagation();\n            }));\n            listeners.push(widgetModel.widget.element.getParent().on('mouseleave', function () {\n              if (!widgetToolbar.model.get('showActions') && !editor.widgetfilter.isDragging()) {\n                widgetToolbar.model.set({ active: false, showLabel: false });\n              }\n            }));\n\n            _.each(widgetModel.widget.editables, function (editable) {\n              var toolbar = editor.widgetToolbars.add(editable.$, {\n                label: binder.resolveContext((0, _jquery2.default)(editable.$)).get('fieldLabel')\n              });\n              editable.toolbar = toolbar;\n              editableToolbars.push(toolbar);\n\n              listeners.push(editable.on('focus', function () {\n                toolbar.model.set({ sticky: true, active: true, showLabel: true, showActions: true });\n              }));\n              listeners.push(editable.on('blur', function () {\n                toolbar.model.set({ sticky: false, active: false, showLabel: false, showActions: false });\n              }));\n              listeners.push(editable.on('mouseover', function (e) {\n                if (!editor.widgetfilter.isDragging()) {\n                  toolbar.model.set({ active: true, showLabel: true });\n                }\n                e.data.$.stopPropagation();\n              }));\n              listeners.push(editable.on('mouseleave', function (e) {\n                if (!toolbar.model.get('showActions') && !editor.widgetfilter.isDragging()) {\n                  toolbar.model.set({ active: false, showLabel: false });\n                }\n              }));\n\n              var getData = editable.getData;\n              editable.getData = function (exportReady) {\n                var tmpNode = this.clone(true);\n                var toolbarNodes = tmpNode.find('.toolbar').toArray();\n                if (toolbarNodes.length) {\n                  toolbarNodes[0].remove();\n                }\n                return this.editor.dataProcessor.toDataFormat(tmpNode.getHtml(), {\n                  context: this.getName(),\n                  filter: this.filter,\n                  enterMode: this.enterMode\n                });\n              };\n            });\n          });\n\n          widgetView.on('DOMRemove', function (widgetView, $el) {\n            if (widgetToolbar) {\n              widgetToolbar.remove();\n              widgetToolbar = null;\n            }\n\n            _.each(editableToolbars, function (toolbar) {\n              toolbar.remove();\n            });\n            editableToolbars = [];\n\n            _.each(listeners, function (listener) {\n              listener.removeListener();\n            });\n          });\n        });\n\n        widgetDefinition = modules.setupCustomDragHandler(widgetDefinition, topLevelToolbars);\n        widgetDefinition = modules.setupWidgetFilterListener(editor);\n      });\n    }\n  });\n}\n\n_ckeditor2.default.plugins.add('paragraphseditor_toolbar', pluginDefinition);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvcGx1Z2luLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2pzL3NyYy9wbHVnaW5zL3BhcmFncmFwaHNlZGl0b3JfdG9vbGJhci9wbHVnaW4uanM/ZWExZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ0tFRElUT1IgZnJvbSAnY2tlZGl0b3InO1xuaW1wb3J0IEJhY2tib25lIGZyb20gJ2JhY2tib25lJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyB3aWRnZXRUeXBlIH0gZnJvbSAnLi4vY29uZmlnJztcblxudmFyIHBsdWdpbkRlZmluaXRpb24gPSB7XG4gIGljb25zOiAnJyxcbiAgcmVxdWlyZXM6IFsgXCJwYXJhZ3JhcGhzZWRpdG9yXCIsIFwid2lkZ2V0dG9vbGJhclwiIF0sXG59O1xuXG5pZiAoRHJ1cGFsLmNrZWRpdG9yX3dpZGdldHRvb2xiYXIpIHtcbiAgY29uc3QgbW9kdWxlcyA9IHJlcXVpcmUoJy4vbW9kdWxlcycpO1xuXG4gIHBsdWdpbkRlZmluaXRpb24gPSB7IC4uLnBsdWdpbkRlZmluaXRpb24sXG5cbiAgICBiZWZvcmVJbml0OiBmdW5jdGlvbihlZGl0b3IpIHtcbiAgICAgIGVkaXRvci5vbignd2lkZ2V0RGVmaW5pdGlvbicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgd2lkZ2V0RGVmaW5pdGlvbiA9IGV2ZW50LmRhdGE7XG4gICAgICAgIGlmICh3aWRnZXREZWZpbml0aW9uLm5hbWUgIT09IHdpZGdldFR5cGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2IgPSB3aWRnZXREZWZpbml0aW9uLndpZGdldEJpbmRlcjtcbiAgICAgICAgdmFyIHRvcExldmVsVG9vbGJhcnMgPSB7fTtcblxuICAgICAgICB3Yi5iaW5kZXIub24oJ2JpbmQnLCBmdW5jdGlvbihiaW5kZXIsIHdpZGdldE1vZGVsLCB3aWRnZXRWaWV3KSB7XG4gICAgICAgICAgdmFyIHdpZGdldFRvb2xiYXI7XG4gICAgICAgICAgdmFyIGVkaXRhYmxlVG9vbGJhcnMgPSBbXTtcbiAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgICAgICAgICB3aWRnZXRWaWV3Lm9uKCdET01SZW5kZXInLCBmdW5jdGlvbih3aWRnZXRWaWV3LCAkZWwpIHtcbiAgICAgICAgICAgIHdpZGdldFRvb2xiYXIgPSBlZGl0b3Iud2lkZ2V0VG9vbGJhcnMuYWRkKHdpZGdldE1vZGVsLndpZGdldC5lbGVtZW50LiQsIHtcbiAgICAgICAgICAgICAgbGFiZWw6IERydXBhbC50KHdpZGdldE1vZGVsLmVkaXRCdWZmZXJJdGVtUmVmLmVkaXRCdWZmZXJJdGVtLmdldCgnbGFiZWwnKSksXG4gICAgICAgICAgICAgIGFjdGlvbnM6IG1vZHVsZXMudG9vbGJhckFjdGlvbnMoZWRpdG9yLCB3aWRnZXRNb2RlbCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvcExldmVsVG9vbGJhcnNbd2lkZ2V0TW9kZWwud2lkZ2V0LmlkXSA9IHdpZGdldFRvb2xiYXI7XG5cbiAgICAgICAgICAgIGlmICh3aWRnZXRNb2RlbC53aWRnZXQuZWxlbWVudC5nZXRQYXJlbnQoKS5oYXNDbGFzcygnY2tlX3dpZGdldF9zZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgIHdpZGdldFRvb2xiYXIubW9kZWwuc2V0KHsgc3RpY2t5OiB0cnVlLCBhY3RpdmU6IHRydWUsIHNob3dMYWJlbDogdHJ1ZSwgc2hvd0FjdGlvbnM6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4gdGhlIHdpZGdldCBpcyBzZWxlY3RlZCwgc2hvdyB0aGUgZW50aXJlIHRvb2xiYXIuIFdoZW4gdGhlXG4gICAgICAgICAgICAvLyB3aWRnZXQgaXMgZGVzZWxlY3RlZCwgaGlkZSB0aGUgZW50aXJlIHRvb2xiYXIuXG4gICAgICAgICAgICBsaXN0ZW5lcnMucHVzaCh3aWRnZXRNb2RlbC53aWRnZXQub24oJ3NlbGVjdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB3aWRnZXRUb29sYmFyLm1vZGVsLnNldCh7IHN0aWNreTogdHJ1ZSwgYWN0aXZlOiB0cnVlLCBzaG93TGFiZWw6IHRydWUsIHNob3dBY3Rpb25zOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2god2lkZ2V0TW9kZWwud2lkZ2V0Lm9uKCdkZXNlbGVjdCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB3aWRnZXRUb29sYmFyLm1vZGVsLnNldCh7IHN0aWNreTogZmFsc2UsIGFjdGl2ZTogZmFsc2UsIHNob3dMYWJlbDogZmFsc2UsIHNob3dBY3Rpb25zOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT24gbW91c2VlbnRlciwgc2hvdyBtYWtlIHRoaXMgd2lkZ2V0J3MgdG9vbGJhciB0aGUgYWN0aXZlXG4gICAgICAgICAgICAvLyB0b29sYmFyIGFuZCBzaG93IHRoZSBsYWJlbC4gT24gbW91c2VsZWF2ZSwgaWYgdGhlIGFjdGlvblxuICAgICAgICAgICAgLy8gdG9vbGJhciBpcyBub3QgYmVpbmcgc2hvd24sIGhpZGUgdGhlIGVudGlyZSB0b29sYmFyLlxuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2god2lkZ2V0TW9kZWwud2lkZ2V0LmVsZW1lbnQuZ2V0UGFyZW50KCkub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgaWYgKCF3aWRnZXRNb2RlbC53aWRnZXQuZWRpdG9yLndpZGdldGZpbHRlci5pc0RyYWdnaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB3aWRnZXRUb29sYmFyLm1vZGVsLnNldCh7IGFjdGl2ZTogdHJ1ZSwgc2hvd0xhYmVsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGUuZGF0YS4kLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2god2lkZ2V0TW9kZWwud2lkZ2V0LmVsZW1lbnQuZ2V0UGFyZW50KCkub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKCF3aWRnZXRUb29sYmFyLm1vZGVsLmdldCgnc2hvd0FjdGlvbnMnKSAmJiAhZWRpdG9yLndpZGdldGZpbHRlci5pc0RyYWdnaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB3aWRnZXRUb29sYmFyLm1vZGVsLnNldCh7IGFjdGl2ZTogZmFsc2UsIHNob3dMYWJlbDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgXy5lYWNoKHdpZGdldE1vZGVsLndpZGdldC5lZGl0YWJsZXMsIGZ1bmN0aW9uKGVkaXRhYmxlKSB7XG4gICAgICAgICAgICAgIHZhciB0b29sYmFyID0gZWRpdG9yLndpZGdldFRvb2xiYXJzLmFkZChlZGl0YWJsZS4kLCB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGJpbmRlci5yZXNvbHZlQ29udGV4dCgkKGVkaXRhYmxlLiQpKS5nZXQoJ2ZpZWxkTGFiZWwnKSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGVkaXRhYmxlLnRvb2xiYXIgPSB0b29sYmFyO1xuICAgICAgICAgICAgICBlZGl0YWJsZVRvb2xiYXJzLnB1c2godG9vbGJhcik7XG5cbiAgICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZWRpdGFibGUub24oJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdG9vbGJhci5tb2RlbC5zZXQoeyBzdGlja3k6IHRydWUsIGFjdGl2ZTogdHJ1ZSwgc2hvd0xhYmVsOiB0cnVlLCBzaG93QWN0aW9uczogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICBsaXN0ZW5lcnMucHVzaChlZGl0YWJsZS5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRvb2xiYXIubW9kZWwuc2V0KHsgc3RpY2t5OiBmYWxzZSwgYWN0aXZlOiBmYWxzZSwgc2hvd0xhYmVsOiBmYWxzZSwgc2hvd0FjdGlvbnM6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoKGVkaXRhYmxlLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlZGl0b3Iud2lkZ2V0ZmlsdGVyLmlzRHJhZ2dpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgdG9vbGJhci5tb2RlbC5zZXQoeyBhY3RpdmU6IHRydWUsIHNob3dMYWJlbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5kYXRhLiQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZWRpdGFibGUub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0b29sYmFyLm1vZGVsLmdldCgnc2hvd0FjdGlvbnMnKSAmJiAhZWRpdG9yLndpZGdldGZpbHRlci5pc0RyYWdnaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgIHRvb2xiYXIubW9kZWwuc2V0KHsgYWN0aXZlOiBmYWxzZSwgc2hvd0xhYmVsOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICB2YXIgZ2V0RGF0YSA9IGVkaXRhYmxlLmdldERhdGE7XG4gICAgICAgICAgICAgIGVkaXRhYmxlLmdldERhdGEgPSBmdW5jdGlvbihleHBvcnRSZWFkeSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRtcE5vZGUgPSB0aGlzLmNsb25lKHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb2xiYXJOb2RlcyA9IHRtcE5vZGUuZmluZCgnLnRvb2xiYXInKS50b0FycmF5KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRvb2xiYXJOb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIHRvb2xiYXJOb2Rlc1swXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yLmRhdGFQcm9jZXNzb3IudG9EYXRhRm9ybWF0KHRtcE5vZGUuZ2V0SHRtbCgpLCB7XG4gICAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICBlbnRlck1vZGU6IHRoaXMuZW50ZXJNb2RlXG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHdpZGdldFZpZXcub24oJ0RPTVJlbW92ZScsIGZ1bmN0aW9uKHdpZGdldFZpZXcsICRlbCkge1xuICAgICAgICAgICAgaWYgKHdpZGdldFRvb2xiYXIpIHtcbiAgICAgICAgICAgICAgd2lkZ2V0VG9vbGJhci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgd2lkZ2V0VG9vbGJhciA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uZWFjaChlZGl0YWJsZVRvb2xiYXJzLCBmdW5jdGlvbih0b29sYmFyKSB7XG4gICAgICAgICAgICAgIHRvb2xiYXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVkaXRhYmxlVG9vbGJhcnMgPSBbXTtcblxuICAgICAgICAgICAgXy5lYWNoKGxpc3RlbmVycywgZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpZGdldERlZmluaXRpb24gPSBtb2R1bGVzLnNldHVwQ3VzdG9tRHJhZ0hhbmRsZXIod2lkZ2V0RGVmaW5pdGlvbiwgdG9wTGV2ZWxUb29sYmFycyk7XG4gICAgICAgIHdpZGdldERlZmluaXRpb24gPSBtb2R1bGVzLnNldHVwV2lkZ2V0RmlsdGVyTGlzdGVuZXIoZWRpdG9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuQ0tFRElUT1IucGx1Z2lucy5hZGQoJ3BhcmFncmFwaHNlZGl0b3JfdG9vbGJhcicsIHBsdWdpbkRlZmluaXRpb24pO1xuIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqSEE7QUFtSEE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/src/plugins/paragraphseditor_toolbar/plugin.js\n");

/***/ }),

/***/ "./js/src/plugins/paragraphseditor_toolbar/setupCustomDragHandler.js":
/*!***************************************************************************!*\
  !*** ./js/src/plugins/paragraphseditor_toolbar/setupCustomDragHandler.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _jquery = __webpack_require__(/*! jquery */ \"jquery\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction setupCustomDragHandler(widgetDefinition, topLevelToolbars) {\n  widgetDefinition.updateDragHandlerPosition = function () {\n    if (topLevelToolbars[this.id]) {\n      var toolbar = topLevelToolbars[this.id];\n      var $dragContainer = (0, _jquery2.default)(this.dragHandlerContainer.$);\n      if (!$dragContainer.parent().is(toolbar.$actionsEl.children().first())) {\n        toolbar.$actionsEl.children().first().find('a').prepend($dragContainer);\n      }\n    }\n\n    this.dragHandlerContainer.setStyles({\n      background: 'none',\n      display: 'block',\n      height: 20 + 'px',\n      left: 0,\n      position: 'absolute',\n      top: 0,\n      width: 20 + 'px'\n    });\n\n    this.dragHandlerContainer.getFirst().setStyles({\n      width: 20 + 'px',\n      height: 20 + 'px'\n    });\n  };\n}\n\nexports.default = setupCustomDragHandler;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvc2V0dXBDdXN0b21EcmFnSGFuZGxlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvc2V0dXBDdXN0b21EcmFnSGFuZGxlci5qcz9jZDFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmZ1bmN0aW9uIHNldHVwQ3VzdG9tRHJhZ0hhbmRsZXIod2lkZ2V0RGVmaW5pdGlvbiwgdG9wTGV2ZWxUb29sYmFycykge1xuICB3aWRnZXREZWZpbml0aW9uLnVwZGF0ZURyYWdIYW5kbGVyUG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodG9wTGV2ZWxUb29sYmFyc1t0aGlzLmlkXSkge1xuICAgICAgdmFyIHRvb2xiYXIgPSB0b3BMZXZlbFRvb2xiYXJzW3RoaXMuaWRdO1xuICAgICAgdmFyICRkcmFnQ29udGFpbmVyID0gJCh0aGlzLmRyYWdIYW5kbGVyQ29udGFpbmVyLiQpO1xuICAgICAgaWYgKCEkZHJhZ0NvbnRhaW5lci5wYXJlbnQoKS5pcyh0b29sYmFyLiRhY3Rpb25zRWwuY2hpbGRyZW4oKS5maXJzdCgpKSkge1xuICAgICAgICB0b29sYmFyLiRhY3Rpb25zRWwuY2hpbGRyZW4oKS5maXJzdCgpLmZpbmQoJ2EnKS5wcmVwZW5kKCRkcmFnQ29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmRyYWdIYW5kbGVyQ29udGFpbmVyLnNldFN0eWxlcyh7XG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgaGVpZ2h0OiAyMCArICdweCcsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICB3aWR0aDogMjAgKyAncHgnLFxuICAgIH0pO1xuXG4gICAgdGhpcy5kcmFnSGFuZGxlckNvbnRhaW5lci5nZXRGaXJzdCgpLnNldFN0eWxlcyh7XG4gICAgICB3aWR0aDogMjAgKyAncHgnLFxuICAgICAgaGVpZ2h0OiAyMCArICdweCcsXG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwQ3VzdG9tRHJhZ0hhbmRsZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/src/plugins/paragraphseditor_toolbar/setupCustomDragHandler.js\n");

/***/ }),

/***/ "./js/src/plugins/paragraphseditor_toolbar/setupWidgetFilterListener.js":
/*!******************************************************************************!*\
  !*** ./js/src/plugins/paragraphseditor_toolbar/setupWidgetFilterListener.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ckeditor = __webpack_require__(/*! ckeditor */ \"ckeditor\");\n\nvar _ckeditor2 = _interopRequireDefault(_ckeditor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction setupWidgetFilterListener(editor) {\n\n  editor.widgetfilter.on('update', function (evt) {\n    var activeCid = null;\n\n    if (_ckeditor2.default.plugins.widget.getNestedEditable(editor.editable(), evt.data.target)) {\n      var toolbar = editor.widgets.getByElement(evt.data.target).editables[_ckeditor2.default.plugins.widget.getNestedEditable(evt.editor, evt.data.target).data('cke-widget-editable')].toolbar;\n      toolbar.model.set({ active: true, showLabel: true });\n      activeCid = toolbar.model.cid;\n    }\n\n    editor.widgetToolbars.collection.each(function (model) {\n      if (!model.get('sticky') && model.cid !== activeCid) {\n        model.set({ active: false, showLabel: false });\n      }\n    });\n  });\n}\n\nexports.default = setupWidgetFilterListener;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvc2V0dXBXaWRnZXRGaWx0ZXJMaXN0ZW5lci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvc2V0dXBXaWRnZXRGaWx0ZXJMaXN0ZW5lci5qcz8wOWIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDS0VESVRPUiBmcm9tICdja2VkaXRvcic7XG5cbmZ1bmN0aW9uIHNldHVwV2lkZ2V0RmlsdGVyTGlzdGVuZXIoZWRpdG9yKSB7XG5cbiAgZWRpdG9yLndpZGdldGZpbHRlci5vbigndXBkYXRlJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgdmFyIGFjdGl2ZUNpZCA9IG51bGw7XG5cbiAgICBpZiAoQ0tFRElUT1IucGx1Z2lucy53aWRnZXQuZ2V0TmVzdGVkRWRpdGFibGUoZWRpdG9yLmVkaXRhYmxlKCksIGV2dC5kYXRhLnRhcmdldCkpIHtcbiAgICAgIHZhciB0b29sYmFyID0gZWRpdG9yLndpZGdldHMuZ2V0QnlFbGVtZW50KGV2dC5kYXRhLnRhcmdldCkuZWRpdGFibGVzW0NLRURJVE9SLnBsdWdpbnMud2lkZ2V0LmdldE5lc3RlZEVkaXRhYmxlKGV2dC5lZGl0b3IsIGV2dC5kYXRhLnRhcmdldCkuZGF0YSgnY2tlLXdpZGdldC1lZGl0YWJsZScpXS50b29sYmFyO1xuICAgICAgdG9vbGJhci5tb2RlbC5zZXQoeyBhY3RpdmU6IHRydWUsIHNob3dMYWJlbDogdHJ1ZSB9KTtcbiAgICAgIGFjdGl2ZUNpZCA9IHRvb2xiYXIubW9kZWwuY2lkO1xuICAgIH1cblxuICAgIGVkaXRvci53aWRnZXRUb29sYmFycy5jb2xsZWN0aW9uLmVhY2goZnVuY3Rpb24obW9kZWwpIHtcbiAgICAgIGlmICghbW9kZWwuZ2V0KCdzdGlja3knKSAmJiBtb2RlbC5jaWQgIT09IGFjdGl2ZUNpZCkge1xuICAgICAgICBtb2RlbC5zZXQoeyBhY3RpdmU6IGZhbHNlLCBzaG93TGFiZWw6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXR1cFdpZGdldEZpbHRlckxpc3RlbmVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/src/plugins/paragraphseditor_toolbar/setupWidgetFilterListener.js\n");

/***/ }),

/***/ "./js/src/plugins/paragraphseditor_toolbar/toolbarActions.js":
/*!*******************************************************************!*\
  !*** ./js/src/plugins/paragraphseditor_toolbar/toolbarActions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (editor, widgetModel) {\n  return [{\n    id: 'move',\n    label: _drupal2.default.t('Move'),\n    view: ActionButtonView,\n    icon: _icons.MoveIcon,\n    callback: function callback() {}\n  }, {\n    id: 'edit',\n    label: _drupal2.default.t('Edit'),\n    view: ActionButtonView,\n    icon: _icons.EditIcon,\n    callback: function callback() {\n      widgetModel.edit();\n    }\n  }, {\n    id: 'remove',\n    label: _drupal2.default.t('Remove'),\n    view: ActionButtonView,\n    icon: _icons.RemoveIcon,\n    callback: function callback() {\n      editor.fire('saveSnapshot');\n      widgetModel.destroy();\n    }\n  }];\n};\n\nvar _drupal = __webpack_require__(/*! drupal */ \"drupal\");\n\nvar _drupal2 = _interopRequireDefault(_drupal);\n\nvar _icons = __webpack_require__(/*! ./icons */ \"./js/src/plugins/paragraphseditor_toolbar/icons/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ActionButtonView = _drupal2.default.ckeditor_widgettoolbar.Views.ActionButtonView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy9wYXJhZ3JhcGhzZWRpdG9yX3Rvb2xiYXIvdG9vbGJhckFjdGlvbnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vanMvc3JjL3BsdWdpbnMvcGFyYWdyYXBoc2VkaXRvcl90b29sYmFyL3Rvb2xiYXJBY3Rpb25zLmpzPzhiMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERydXBhbCBmcm9tICdkcnVwYWwnO1xuaW1wb3J0IHsgRWRpdEljb24sIE1vdmVJY29uLCBSZW1vdmVJY29uIH0gZnJvbSAnLi9pY29ucydcblxuY29uc3QgQWN0aW9uQnV0dG9uVmlldyA9IERydXBhbC5ja2VkaXRvcl93aWRnZXR0b29sYmFyLlZpZXdzLkFjdGlvbkJ1dHRvblZpZXc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVkaXRvciwgd2lkZ2V0TW9kZWwpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBpZDogJ21vdmUnLFxuICAgICAgbGFiZWw6IERydXBhbC50KCdNb3ZlJyksXG4gICAgICB2aWV3OiBBY3Rpb25CdXR0b25WaWV3LFxuICAgICAgaWNvbjogTW92ZUljb24sXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7fSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZWRpdCcsXG4gICAgICBsYWJlbDogRHJ1cGFsLnQoJ0VkaXQnKSxcbiAgICAgIHZpZXc6IEFjdGlvbkJ1dHRvblZpZXcsXG4gICAgICBpY29uOiBFZGl0SWNvbixcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgd2lkZ2V0TW9kZWwuZWRpdCgpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncmVtb3ZlJyxcbiAgICAgIGxhYmVsOiBEcnVwYWwudCgnUmVtb3ZlJyksXG4gICAgICB2aWV3OiBBY3Rpb25CdXR0b25WaWV3LFxuICAgICAgaWNvbjogUmVtb3ZlSWNvbixcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZWRpdG9yLmZpcmUoJ3NhdmVTbmFwc2hvdCcpO1xuICAgICAgICB3aWRnZXRNb2RlbC5kZXN0cm95KCk7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQW5DQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/src/plugins/paragraphseditor_toolbar/toolbarActions.js\n");

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

/***/ }),

/***/ "drupal":
/*!*************************!*\
  !*** external "Drupal" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Drupal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJ1cGFsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiRHJ1cGFsXCI/MTRjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IERydXBhbDsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///drupal\n");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianF1ZXJ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCI/Y2QwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jquery\n");

/***/ })

/******/ });