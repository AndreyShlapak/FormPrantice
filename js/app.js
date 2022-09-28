/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.js */ \"./src/js/filter.js\");\n\n\n//# sourceURL=webpack://gulp/./src/js/app.js?");

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst filterBtn = document.querySelector('.content__filter-btn');\r\nconst adaptiveFilterBtn = document.querySelector('.adaptive-filter__btn');\r\n\r\nconst modal = document.querySelector('.modal');\r\nconst adaptiveFilter = document.querySelector('.adaptive-filter');\r\nconst adaptiveBrand = document.querySelector('.adaptive-brand');\r\n\r\nconst modalToggle = (event) => {\r\n    modal.classList.toggle('active');\r\n    adaptiveFilter.classList.toggle('active');\r\n    event.preventDefault();\r\n}\r\n\r\nfilterBtn.addEventListener('click', modalToggle);\r\nadaptiveFilterBtn.addEventListener('click', modalToggle);\r\n\r\nlet brand = document.querySelector('.content__brand');\r\nlet cpu = document.querySelector('.content__cpu');\r\n\r\nlet adaptiveFilterBrand = document.querySelector('.adaptive-filter__brand');\r\nlet adaptiveFilterCPU = document.querySelector('.adaptive-filter__cpu');\r\nlet contentTitle = document.querySelector('.content__title');\r\n\r\nadaptiveFilterBrand.addEventListener('click', (evt => {\r\n    adaptiveBrand.append(brand);\r\n    contentTitle.classList.remove('content__title');\r\n    contentTitle.classList.toggle('modal__title');\r\n    adaptiveBrand.classList.toggle('active');\r\n}));\r\n\r\nadaptiveFilterCPU.addEventListener('click', (evt => {\r\n    adaptiveBrand.append(cpu);\r\n    contentTitle.classList.remove('content__title');\r\n    contentTitle.classList.toggle('modal__title');\r\n    adaptiveBrand.classList.toggle('active');\r\n}));\r\n\r\ncontentTitle.addEventListener('click', (evt => {\r\n    adaptiveBrand.classList.toggle('active');\r\n}))\r\n\n\n//# sourceURL=webpack://gulp/./src/js/filter.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;