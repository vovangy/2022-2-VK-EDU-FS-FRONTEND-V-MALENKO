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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./list_chat/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar chats = localStorage.getItem(\"chats\");\n\nif (!chats) {\n  var current_chats = '{\"1\":{\"user_id\": 1, \"messages\":[{\"user_id\":1,\"value\":\"SIUUUU\",\"time\":\"12:34\"}]}, \"2\":{\"user_id\": 2, \"messages\":[{\"user_id\":2,\"value\":\"Вопросы?\",\"time\":\"09:34\"}]}}';\n  localStorage.setItem(\"chats\", current_chats);\n}\n\nvar history = JSON.parse(localStorage.getItem(\"chats\"));\n\nfor (var _i = 0, _Object$keys = Object.keys(history); _i < _Object$keys.length; _i++) {\n  var chat = _Object$keys[_i];\n  var set_chat = new Map();\n  set_chat.set(chat, {\n    \"user_id\": history[chat][\"user_id\"],\n    \"messages\": history[chat][\"messages\"]\n  });\n  setChat(set_chat, chat);\n}\n\nvar createChatButton = document.getElementById(\"chat-create\");\n\ncreateChatButton.onclick = function () {\n  history = JSON.parse(localStorage.getItem(\"chats\"));\n  var new_chat = String(Number(Object.keys(history).slice(-1)) + 1);\n  var curChats = JSON.parse(localStorage.getItem(\"chats\"));\n  curChats[new_chat] = {\n    \"user_id\": 1,\n    \"messages\": [{\n      \"user_id\": 1,\n      \"value\": \"SIUUUU\",\n      \"time\": \"12:34\"\n    }]\n  };\n  localStorage.setItem(\"chats\", JSON.stringify(curChats));\n  var create_chat = new Map();\n  create_chat.set(new_chat, {\n    \"user_id\": 1,\n    \"messages\": [{\n      \"user_id\": 1,\n      \"value\": \"SIUUUU\",\n      \"time\": \"12:34\"\n    }]\n  });\n  setChat(create_chat, new_chat);\n  var myLink = document.getElementById(new_chat);\n\n  myLink.onclick = function () {\n    localStorage.setItem(\"current_chat\", new_chat);\n    window.location.href = \"chat.html\";\n  };\n\n  return 1;\n};\n\nvar _loop = function _loop() {\n  var chat = _Object$keys2[_i2];\n  var myLink = document.getElementById(chat);\n\n  myLink.onclick = function () {\n    localStorage.setItem(\"current_chat\", chat);\n    window.location.href = \"chat.html\";\n  };\n};\n\nfor (var _i2 = 0, _Object$keys2 = Object.keys(history); _i2 < _Object$keys2.length; _i2++) {\n  _loop();\n}\n\nfunction makeChat(chat, id) {\n  return '          <div class=\"chat-container\" id=' + id + '><div class=\"chat-photo\"> \\\n        <img class=\"img-center\" src=' + selectPhotoFromDatabase(chat.get(id)[\"user_id\"]) + '></img> \\\n    </div> \\\n    <div class=\"chat-message\"> \\\n        <div class=\"chat-message-name\">' + selectNameFromDatabase(chat.get(id)[\"user_id\"]) + '</div> \\\n        <div class=\"chat-message-text\">' + chat.get(id)[\"messages\"].slice(-1)[0][\"value\"] + '</div> \\\n    </div> \\\n    <div class=\"chat-time-seen\"> \\\n        <div class=\"chat-time-message\">' + chat.get(id)[\"messages\"].slice(-1)[0][\"time\"] + '</div> \\\n        <div class=\"chat-seen\"> \\\n            <i class=\"material-icons done_all\">done_all</i> \\\n        </div> \\\n    </div> \\\n</div>';\n}\n\nfunction setChat(value, id) {\n  document.getElementById(\"after_end\").insertAdjacentHTML(\"beforeend\", makeChat(value, id));\n}\n\nfunction selectNameFromDatabase(user_id) {\n  if (user_id == 1) return \"Messi\";\n  return \"Белка\";\n}\n\nfunction selectPhotoFromDatabase(user_id) {\n  if (user_id == 1) return \"https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg\";\n  return \"https://animalsglobe.ru/wp-content/uploads/2011/09/%D0%B1%D0%B5%D0%BB%D0%BA%D0%B0.jpg\";\n}\n\n//# sourceURL=webpack:///./list_chat/index.js?");

/***/ })

/******/ });