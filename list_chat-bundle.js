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
/******/ 	return __webpack_require__(__webpack_require__.s = "./list_chat/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./list_chat/index.css":
/*!*****************************!*\
  !*** ./list_chat/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./list_chat/index.css?");

/***/ }),

/***/ "./list_chat/index.js":
/*!****************************!*\
  !*** ./list_chat/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./list_chat/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nform.addEventListener('submit', handleSubmit.bind(undefined));\nvar chats = localStorage.getItem(\"chats\");\n\nif (!chats) {\n  var current_chats = '{\"1\":{\"user_id\": 1, \"messages\":[{\"user_id\":1,\"value\":\"SIUUUU\",\"time\":\"12:34\"}]}}';\n  localStorage.setItem(\"chats\", current_chats);\n}\n\nvar history = JSON.parse(localStorage.getItem(\"chats\"));\n\nfor (var _i = 0, _Object$keys = Object.keys(history); _i < _Object$keys.length; _i++) {\n  var chat = _Object$keys[_i];\n  var set_chat = new Map();\n  set_chat.set(chat, {\n    \"user_id\": 1,\n    \"messages\": history[chat][\"messages\"]\n  });\n  setChat(set_chat);\n}\n\nfunction handleSubmit(event) {\n  event.preventDefault();\n}\n\nfunction makeChat(chat) {\n  console.log(chat.get(Object.keys(chat)[0]));\n  console.log(chat.get(\"1\")[\"messages\"].slice(-1)[0]);\n  return '          <div class=\"chat-container\" onclick=\"location.href=\\'index.html\\'\"> \\\n    <div class=\"chat-photo\"> \\\n        <img class=\"img-center\" src=\"https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg\"></img> \\\n    </div> \\\n    <div class=\"chat-message\"> \\\n        <div class=\"chat-message-name\">' + selectNameFromDatabase(chat.get(\"1\")[\"messages\"].slice(-1)[0][\"user_id\"]) + '</div> \\\n        <div class=\"chat-message-text\">' + chat.get(\"1\")[\"messages\"].slice(-1)[0][\"value\"] + '</div> \\\n    </div> \\\n    <div class=\"chat-time-seen\"> \\\n        <div class=\"chat-time-message\">' + chat.get(\"1\")[\"messages\"].slice(-1)[0][\"time\"] + '</div> \\\n        <div class=\"chat-seen\"> \\\n            <i class=\"material-icons done_all\">done_all</i> \\\n        </div> \\\n    </div> \\\n</div>';\n  return '<a href=\"index.html\"><div>' + selectNameFromDatabase(chat.get(\"1\")[\"messages\"].slice(-1)[0][\"user_id\"]) + '</div>' + chat.get(\"1\")[\"messages\"].slice(-1)[0][\"value\"] + '<div class=\"time\">' + chat.get(\"1\")[\"messages\"].slice(-1)[0][\"time\"] + '</div></div></a>';\n}\n\nfunction setChat(value) {\n  document.getElementById(\"after_end\").insertAdjacentHTML(\"beforeend\", makeChat(value));\n}\n\nfunction selectNameFromDatabase(user_id) {\n  if (user_id == 1) return \"Messi\";\n  return \"Ronaldo\";\n}\n\n//# sourceURL=webpack:///./list_chat/index.js?");

/***/ })

/******/ });