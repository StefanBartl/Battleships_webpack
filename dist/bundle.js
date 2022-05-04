/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://use.typekit.net/izw3hmc.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* background: url('./icon.png'); */\\n\\n/* #region Table of Content */\\n/*    \\n!                        Battleships Main-CSS-Stylesheet\\n?                                    powered by\\n!                                     Stefan Bartl\\n!                      (WKDSteVIE / WKDMinerva)\\n?                                          2022                                                                                                                                                                        \\n?                  ________________________________                                                                                                                                                                                                  \\n!                                   Table of Content\\n?                                     -) CSS-Setup                                                                                                \\n?                                     -) General-Design\\n?                                     -) header | .navlist\\n?                                     -) Pseudelements\\n?                                     -) Transitions\\n.                                        - header   \\n?                                     -) Animations\\n?                                     -) Media Queries\\n.                                        - small devices\\n?                                   10) Jobs to-do   \\ntodo                CSS - What a wonderful & tricky language !                                                                                                                                                                                                                                                                                                                                                                 */\\n/*#endregion*/\\n\\n\\n\\n/* #region jobs to-do */\\n\\n/*\\ntodo  \\n*/      \\n\\n/* #endregion */\\n\\n\\n/*#region  CSS-Setup */\\n\\n/*? ===  font(s) === */\\n\\n/* futura: font-family: futura-pt,sans-serif; */\\n\\n/* #region setup & themes  */\\n\\n:root {\\n\\n  overflow-wrap: break-word;\\n  word-wrap: break-word;\\n\\n  --font-futura: futura-pt,sans-serif;\\n  font-weight: 400;\\n  font-style: normal; \\n\\n  --fs-400: 1rem;\\n  --fs-500: 1.125rem;\\n  --fs-600: 1.375rem;\\n  --fs-700: 2rem;\\n\\n  /* ! test that out if it is working */\\n  @media (min-width: 45em){\\n  --fs-400: 1.125rem;\\n  --fs-500: 1.375rem;\\n  --fs-600: 2.75rem;\\n  --fs-700: 4.125rem;\\n  }\\n\\n  /* ==================  \\n?    ===  Colour-Palette  ===\\n.     ================== */\\n  --wkd-black: rgb(0, 0, 0);\\n  --wkd-darkgrey: rgb(29, 29, 29);\\n  --wkd-midgrey: rgb(61, 61, 61);\\n  --wkd-grey: rgb(107, 106, 106);\\n  --wkd-lightgrey: rgb(178, 182, 160);\\n  --wkd-white: rgb(255, 255, 255);\\n  --wkd-red: rgb(255, 0, 0);\\n  --wkd-green: rgb(82, 150, 34);\\n  --wkd-intense-blue: rgb(0, 0, 250);\\n  --wkd-pastell-blue: rgb(25, 145, 210);\\n  --wkd-torquise: rgb(8, 253, 216);\\n  --wkd-blueviolett: rgb(21, 23, 76);\\n  --wkd-yellow: rgb(255, 255, 0);\\n  --wkd-yellow-dark: rgb(255, 183, 0);\\n  --wkd-orange: rgb(255, 102, 0); /* filter: brightness(0) saturate(100%) invert(44%) sepia(24%) saturate(4068%) hue-rotate(1deg) brightness(98%) contrast(106%); */\\n  --wkd-grapefruit: rgb(239, 95, 87);\\n  --wkd-pink: rgb(255, 0, 128);\\n  --wkd-pinkviolett: rgb(255, 0, 255);  /* filter: brightness(0) saturate(100%) invert(19%) sepia(63%) saturate(4179%) hue-rotate(293deg) brightness(123%) contrast(136%); */\\n  --wkd-darkviolett: rgb(102, 0, 102); \\n  --wkd-manner: rgb(235, 184, 173);\\n}\\n\\n:root.theme_prime{\\n\\n/*? === design === */\\n--main-colour: var(--wkd-darkgrey);\\n--counter-colour: var(--wkd-orange);\\n--design-strokes-colour: var(--wkd-grey);\\n--design-strokes-accent-colour: var(--wkd-pinkviolett);\\n--shadows: var(--wkd-white);\\n\\n/*? === text === */\\n--text-optimal-width: clamp(45ch, 50%, 75ch);\\n--text-main-colour: var(--wkd-white);\\n--link-hover-color: var(--wkd-red);\\n}\\n\\n/* #endregion */\\n\\n/* #region resets */\\n\\n/* box-sizing */\\n*,\\n*::before,\\n*::after {\\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\\n  -moz-box-sizing: border-box; /* Firefox, other Gecko */\\n  box-sizing: border-box; /* Opera/IE 8+ */\\n}\\n\\n/* margins */\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nfigure,\\npicture {\\n  margin: 0;\\n}\\n\\n/* set up the body*/\\nbody {\\n  min-height: 100vh;\\n  line-height: 1.5;\\n}\\n\\n/* make images easier to work with */\\nimg,\\npicture {\\n  max-width: 100%;\\n  display: block;\\n}\\n\\n/* make form elements easier to work with */\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/* remove animations for people who turned them off*/\\n@media (prefers-reduced-motion: reduce) {\\n  *,\\n  *::before,\\n  *::after {\\n    animation-duration: 0.01ms !important;\\n    animation-iteration-count: 1 !important;\\n    transition-duration: 0.01ms !important;\\n    scroll-behavior: auto !important;\\n  }\\n}\\n\\n/* #endregion */\\n\\n/* #endregion */\\n\\n\\n/* #region General-Design */\\n\\nbody {\\n  background-color: var(--main-colour);\\n  color: var(--text-main-colour);\\n  font-family: var(--font-futura);\\n}\\n\\n/* #endregion */\\n\\n\\n/* #region Pseudoelements */\\n\\n/* #endregion */\\n\\n\\n/* #region Transitions */\\n\\n\\n/* #endregion */\\n\\n\\n/* #region Animations */\\n\\n  @keyframes rotate-element-animation {\\n   0% {transform:perspective(300px) rotateY(0deg)}\\n   25% {transform:perspective(300px) rotateY(90deg)}\\n   50% {transform:perspective(300px) rotateY(180deg)}\\n   75% {transform:perspective(300px) rotateY(270deg)}\\n   100% {transform:perspective(300px) rotateY(360deg)}\\n}\\n\\n/* #endregion */\\n\\n\\n/* #region Media Queries */\\n\\n/* ? small devices */\\n@media (max-width: 767.98px) {\\n}\\n\\n/* #endregion */\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-webpack-jest/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship-webpack-jest/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-webpack-jest/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-webpack-jest/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-webpack-jest/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-webpack-jest/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-webpack-jest/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-webpack-jest/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-webpack-jest/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-webpack-jest/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app-modules/gameboard.js":
/*!**************************************!*\
  !*** ./src/app-modules/gameboard.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/app-modules/ship.js\");\n\nconst Gameboard = function (sizeX, sizeY){\n    // Gameboards should be able to place ships at specific coordinates by calling the ship factory function.\n    \n        // Create a new Gameboard\n        let gameboard = [];\n        for(y = 1; y <= sizeY; y++){\n            let row = [];\n            for(x = 1; x <= sizeX; x++){\n                row.push(0);\n            };\n            gameboard.push(row);\n        };\n        \n        shipIDCounter = 1;\n        shipFormation = [];\n        formationCounter = 0;\n        missedAttacks = {};\n        attackCount = 1;\n\n        placement = (type, start, end) => {\n            // Vailadtion of arguments\n            if(typeof type !== 'string') throw new TypeError('Only the strings \"cruiser\", \"corvette\", \"battleship\" or \"aircraft-carrier\" are allowed as ship type. Default is \"cruiser\".')\n            if(Array.isArray(start) === false || Array.isArray(end) === false) throw new TypeError(`Only 'arrays' are allowed as start & end arguments.`);\n\n            // Create a new ship\n            switch (type) {\n                case 'cruiser':\n                    newShip = Ship(1);\n                    break;\n                case 'corvette':\n                    newShip = Ship(2);\n                    break;\n                case 'battleship':\n                    newShip = Ship(3);\n                    break;\n                case 'aircraft-carrier':\n                    newShip = Ship(4);\n                    break;\n                default:\n                    newShip = Ship(1);\n                    break;\n            };\n            newShip.ID = shipIDCounter;\n            shipFormation.push(newShip);\n            formationCounter++;\n\n             // Make the placement in the gameboard array\n            correctPlacement = false;\n            section = 1;\n             if(start[0] === end[0]){\n                    for(y = start[1]; y <= end[1]; y++){\n                        a = gameboard[y];\n                        a[start[0]] = {ID: shipIDCounter, Type: type, Section: section};\n                        section++;\n                    };\n                    correctPlacement = true;\n            };         \n            if(start[1] === end[1]){\n                for(x = start[0]; x <= end[0]; x++){\n                    a = gameboard[start[1]];\n                    a[x] = shipIDCounter;\n                };\n                correctPlacement = true;\n            };       \n            shipIDCounter++;\n\n            // Inform invoker of placement\n            if  (correctPlacement === true) {\n                // console.log(`Plaement of ${type} fullfilled: ${correctPlacement}.`); \n                return  `Plaement of ${type} fullfilled: ${correctPlacement}.`;\n            } else {\n                // console.log(`Plaement of ${type} fullfilled: ${correctPlacement}. Coordinates for placement not accurate.`);\n                return `Plaement of ${type} fullfilled: ${correctPlacement}. Coordinates for placement not accurate.`; \n            };\n        };\n    \n\n        // Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.\n        receiveAttack = (x, y)=>{\n            if(typeof x !== 'number' || typeof y !== 'number') throw new TypeError(`Only 'numbers' are allowed`);\n            // Get the attacked cell in the gameboard\n            gameboard_row = gameboard[y];\n            attackedCell = gameboard_row[x];\n\n            // If the attacked cell is not empty...\n            if(attackedCell !== 0) {\n                // Set gameboard cell to hitted\n                attackedCell.hitted = true;\n                // Get the attacked ship and hit it\n                attackedShip = shipFormation[attackedCell.ID - 1];\n                attackedShip.hit(attackedCell.Section);\n\n                // Return if a ship get hitted or the whole formation is erased\n                // If all ships in formation are sunken, return this\n                for(let x of shipFormation){\n                    if(x.sunkenState() === true){\n                        formationCounter--;\n                        if(formationCounter === 0){\n                            console.log(`Attach hitted and destroyed last enemy ship!`);\n                            return `Attach hitted and destroyed last enemy ship!`;\n                        };\n                    };\n                };\n                    // If the attack hitted a ship, return this\n                    console.log(`Attack hitted a ship`);\n                    return `Attack hitted a ship`;\n                } else {\n                    // If the attack didn't hit a ship, return this and keep track of missed attacks\n                    missedAttacks[attackCount] = [x, y];\n                    console.log(`Attack didn't hitted a ship`);\n                    return `Attack didn't hitted a ship`;\n                };\n        };\n    \n        // Gameboards should keep track of missed attacks so they can display them properly.\n        // Gameboards should be able to report whether or not all of their ships have been sunk.\n    \n    \n        return { gameboard, placement, receiveAttack, attackCount, missedAttacks };\n};\n\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://battleship-webpack-jest/./src/app-modules/gameboard.js?");

/***/ }),

/***/ "./src/app-modules/ship.js":
/*!*********************************!*\
  !*** ./src/app-modules/ship.js ***!
  \*********************************/
/***/ ((module) => {

eval("const Ship = function (length) {\n  // Ships will be objects that include their length, where they’ve been hit and whether or not they’ve been sunk\n  \n    if(length < 1 || length === undefined) throw new Error(\"Ship must have a length.\");\n    this.length = length;\n\n    // Setup the ship sections depending on ther length\n    sections = {};\n    for(let x = 1; x <= length; x++){\n        sections[x] = \"ok\";\n    };\n\n    // Assign type to ship depening on its length\n    type = '';\n    switch (length) {\n      case 1:\n          type = 'cruiser';\n          break;\n      case 2:\n        type = 'corvette';\n        break;\n      case 3:\n        type = 'battleship';\n        break;\n      case 4:\n        type = 'aircraft-carrier';\n        break;\n  };\n\n    // Returns the actual states of the sections\n    sectionsState = () => {\n      actual_ship_state = {};\n      for(let x = 1; x <= length; x++){\n          actual_ship_state[`Section`+x] = sections[x];\n      };\n      return actual_ship_state;\n    };\n\n    // Returns the actual damage property\n    damage = () => {\n      damagedSections = 0;\n      for(let x = 1; x <= length; x++){\n          if(sections[x] === \"hitted\") damagedSections++;\n      };\n      return damagedSections;\n    };\n\n    // sunkenState should be a function that calculates it based on their length and whether all of their positions are ‘hit’. The result can be returned as boolean or as a string\n    sunkenState = (asString)=>{\n        if(damage() === length){\n            if(asString === true) {return `This ship is sunken.`}\n            else return true;\n         } else if(asString === true){return `This ship isn't sunken.`}\n            else return false;\n    };\n  \n    // Ships should have a hit() function that takes a number and then marks that position as ‘hit’\n     hit =  (section)=>{\n       // Check for correct argument\n        if(typeof section !== 'number' || section < 1 || section > length) throw new Error(`Only a 'number' between 1 an ${length} (ship length) is allowed.`);\n\n        sections[section] = \"hitted\";   // console.log(`Section ${section} status: ${sections[section]}`);\n        return `Ship hitted at section ${section}`;\n    };\n\n   return { length, type, damage, sectionsState, sunkenState, hit};\n};\n  \nmodule.exports = Ship;\n\n//# sourceURL=webpack://battleship-webpack-jest/./src/app-modules/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n//#region Ship formation\nconst Battleship= __webpack_require__(/*! ../src/app-modules/ship */ \"./src/app-modules/ship.js\");\nconst MS_BattleshipBrowser = new Battleship(2);\n// MS_BattleshipBrowser.hit(1);\n// MS_BattleshipBrowser.hit(2);\n// console.log(MS_BattleshipBrowser.sunkenState());\n// console.log(MS_BattleshipBrowser.type);\n//#endregion\n\nconst Gameboard = __webpack_require__(/*! ./app-modules/gameboard */ \"./src/app-modules/gameboard.js\");\nconst Gameboard_One = new Gameboard(10,6);\n// console.log(Gameboard_One);\nGameboard_One.placement(\"corvette\", [1, 2], [1, 3]);\nGameboard_One.receiveAttack(1,2);\nGameboard_One.receiveAttack(1,3);\nconsole.log(Gameboard_One);\n\nconst container = document.querySelector(\".container\");\nconst text = document.createElement(\"p\");\ntext.innerText = \"Battleship project test text\";\ncontainer.appendChild(text);\n\n\n// ? Example: Image  \n/*\nimport aircraftICO from './graphics/icons/aircraft.ico';\nconst aircraft = new Image();\naircraft.src = aircraftICO;\ncontainer.appendChild(aircraft);\n*/\n\n\n//#region Table of Content\n/*\n!                         Battleships Main-Javascript-File\n?                                      powered by\n!                                      Stefan Bartl\n!                        (WKDSteVIE / WKDMinerva)\n?                                            2022             \n?                  ________________________________                                                                                                                                                                                                  \n!                                     Table of content              \n?                                       -) Language     \n?                                       -)  Open Jobs\ntodo                 Javascript - what a wonderful language!\n*/\n//#endregion\n\n\n//#region Open Jobs  \n/*\ntodo    \n*/\n//#endregion\n\n\n//#region Declaration\n\n// ? Language translation\n// Get setted language from local storage or browser language and store it there\nconst language = localStorage.language || navigator.language;\nconst languageText = document.querySelector(\".language-translate\");\n\n\n//#endregion\n\n\n//#region Language & Translation\n\n// ? Setup Translation \nlanguage[0] === \"d\" && language[1] === \"e\" ? localStorage.language = \"de\" : \"en\";\n\n\n// ! Libraries\n// If the page have less text, do library here in script.js\nfunction English() {\n}\n\nfunction German() {\n}\n\n// ? Initial Translation\nlocalStorage.language === \"en\" ? English() : German();\n\n// ? Change Language\nlanguageText.addEventListener(\"click\", ()=>{\n  // Check for the actual language\n  if(localStorage.language === \"en\"){\n    // Invoke opposite language\n    German();\n    // Store new language in localStorage\n    localStorage.language = \"de\";\n  } else {\n    English();\n    localStorage.language = \"en\";\n  };\n})\n\n//#endregion\n\n\n\n//# sourceURL=webpack://battleship-webpack-jest/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;