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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./chat/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chat/index.css":
/*!************************!*\
  !*** ./chat/index.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat/index.css?");

/***/ }),

/***/ "./chat/index.js":
/*!***********************!*\
  !*** ./chat/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./chat/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nform.addEventListener('submit', handleSubmit.bind(form));\nvar chats = localStorage.getItem(\"chats\");\nvar current_chat = localStorage.getItem(\"current_chat\", current_chat);\n\nif (!chats) {\n  chats = '{\"1\":{\"user_id\": 1, \"messages\":[{\"user_id\":1,\"value\":\"SIUUUU\",\"time\":\"12:34\"}]}}';\n  current_chat = '{\"1\":{\"user_id\": 1, \"messages\":[{\"user_id\":1,\"value\":\"SIUUUU\",\"time\":\"12:34\"}]}}';\n  localStorage.setItem(\"current_chat\", current_chat);\n} else {\n  if (!current_chat) {\n    current_chat = '{\"1\":{\"user_id\": 1, \"messages\":[{\"user_id\":1,\"value\":\"SIUUUU\",\"time\":\"12:34\"}]}}';\n    localStorage.setItem(\"current_chat\", current_chat);\n  }\n}\n\nchats = JSON.parse(chats);\nvar history = JSON.parse(localStorage.getItem(\"current_chat\"));\nconsole.log(history);\n\nvar _iterator = _createForOfIteratorHelper(history[Object.keys(history)[0]][\"messages\"]),\n    _step;\n\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var message_cur = _step.value;\n    var message = new Map();\n    message.set(\"user_id\", Number(message_cur[\"user_id\"]));\n    message.set(\"value\", message_cur[\"value\"]);\n    message.set(\"time\", message_cur[\"time\"]);\n    sendMessage(message);\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\nfunction handleSubmit(event) {\n  event.preventDefault();\n  if (!input.value) return;\n  var message = new Map();\n  var date = new Date();\n  message.set(\"user_id\", 2);\n  message.set(\"value\", input.value);\n  message.set(\"time\", date.toLocaleTimeString(\"ru-Ru\").slice(0, 5));\n  addMessageToDict(message);\n  sendMessage(message);\n  input.value = '';\n}\n\nfunction makeMessage(message) {\n  if (message.get(\"user_id\") == 1) {\n    return '<div class = \"style-send-message\"><div class=\"sender\">' + selectNameFromDatabase(message.get(\"user_id\")) + '</div>' + message.get(\"value\") + '<div class=\"time\">' + message.get(\"time\") + '</div></div>';\n  }\n\n  return '<div class = \"style-get-message\"><div class=\"sender\">' + selectNameFromDatabase(message.get(\"user_id\")) + '</div>' + message.get(\"value\") + '<div class=\"time\">' + message.get(\"time\") + '</div></div>';\n}\n\nfunction addMessageToDict(message) {\n  chats[Object.keys(history)[0]][\"messages\"].push({\n    \"user_id\": message.get(\"user_id\"),\n    \"value\": message.get(\"value\"),\n    \"time\": message.get(\"time\")\n  });\n  history[Object.keys(history)[0]][\"messages\"].push({\n    \"user_id\": message.get(\"user_id\"),\n    \"value\": message.get(\"value\"),\n    \"time\": message.get(\"time\")\n  });\n  localStorage.setItem(\"chats\", JSON.stringify(chats));\n  localStorage.setItem(\"current_chat\", JSON.stringify(history));\n}\n\nfunction sendMessage(value) {\n  document.getElementById(\"after_end\").insertAdjacentHTML(\"beforeend\", makeMessage(value));\n}\n\nfunction selectNameFromDatabase(user_id) {\n  if (user_id == 1) return \"Messi\";\n  return \"Ronaldo\";\n}\n\n//# sourceURL=webpack:///./chat/index.js?");

/***/ })

/******/ });