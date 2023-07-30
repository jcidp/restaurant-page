/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   loadHeader: () => (/* binding */ loadHeader)
/* harmony export */ });


const loadHeader = () => {
    const header = document.createElement("header");
    const header_content = createElement("div", null, "header-content");
    header_content.appendChild(createElement("p", "Fantastic Feasts", null, ["id", "logo"]));
    const nav = createElement("nav");
    const home = createElement("a", "Home", "current-tab", ["id", "home"]);
    home.setAttribute("href", "");
    const contact = createElement("a", "Contact", "", ["id", "contact"]);
    contact.setAttribute("href", "");
    const menu = createElement("a", "Menu", "", ["id", "menu"]);
    menu.setAttribute("href", "");
    nav.appendChild(home);
    nav.appendChild(contact);
    nav.appendChild(menu);
    header_content.appendChild(nav);
    header.appendChild(header_content);
    
    const content = createElement("div", "", "", ["id", "content"]);
    content.appendChild(header);
    content.appendChild(createElement("main"));

    const footer = document.createElement("footer");
    const anchor = createElement("a", "", "", ["href", "https://github.com/jcidp"]);
    anchor.appendChild(createElement("p", "Made by jcidp", "", ["id", "author"]));
    renderLinkIcon(anchor);
    footer.appendChild(anchor);

    const body = document.querySelector("body");
    body.appendChild(content);
    body.appendChild(footer);
};

const createElement = (element, content, classes, attribute) => {
    const ele = document.createElement(element);
    if (classes) ele.classList.add(classes);
    if (content) ele.textContent = content;
    if (attribute) ele.setAttribute(attribute[0], attribute[1]);
    return ele;
};

function renderLinkIcon(node) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    const title = document.createElement("title");
    title.textContent = "github";
    iconSvg.appendChild(title);
  
    iconSvg.setAttribute('viewBox', '0 0 24 24');
  
    iconPath.setAttribute(
      'd',
      'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
    );

    iconSvg.appendChild(iconPath);
  
    return node.appendChild(iconSvg);
  }

/***/ }),

/***/ "./src/fantasy_meal.jpeg":
/*!*******************************!*\
  !*** ./src/fantasy_meal.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "808725ae84fd9fccf492.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _fantasy_meal_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fantasy_meal.jpeg */ "./src/fantasy_meal.jpeg");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");



function loadHome() {
    const content = document.getElementById("content");
    const main = document.querySelector("main");
    
    const hero_text = (0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "", "hero-text");
    hero_text.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("h1", "Feast on Culinary Magic from Fantasy Worlds"));
    hero_text.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", "We bring the fantastical flavors of your favorite fictional worlds to life."));
    hero_text.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", "From the pages of beloved books to the silver screen, immerse yourself in a dining experience like no other!"));
    hero_text.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", "Book Now!", "cta"));
    const hero_container = (0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "", "hero");
    hero_container.classList.add("container");
    hero_container.appendChild(hero_text);
    
    const img = new Image();
    img.src = _fantasy_meal_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    img.setAttribute("alt", "A dish full of food that looks like it came from a fantasy book");
    const hero_img = (0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "", "hero-image");
    hero_img.appendChild(img);
    hero_container.appendChild(hero_img);

    main.appendChild(hero_container);

    const about_container = (0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "", "about");
    about_container.classList.add("container");
    about_container.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", "A Realm of Culinary Wonder"));
    about_container.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", "At Fantastic Feasts, food is an enchanting journey into the heart of fantasy realms."));
    about_container.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", "Our skilled chefs draw inspiration from legendary tales and mythic sagas to craft dishes that ignite your imagination and satisfy your cravings."));
    about_container.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", "Embark on an epicurean adventure with us as we turn cherished literary and cinematic feasts into reality."));
    main.appendChild(about_container);

    content.appendChild(main);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDNURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEIwQztBQUNEOztBQUUxQjtBQUNmO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBYTtBQUNuQywwQkFBMEIsc0RBQWE7QUFDdkMsMEJBQTBCLHNEQUFhO0FBQ3ZDLDBCQUEwQixzREFBYTtBQUN2QywwQkFBMEIsc0RBQWE7QUFDdkMsMkJBQTJCLHNEQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywrQ0FBTztBQUNyQjtBQUNBLHFCQUFxQixzREFBYTtBQUNsQztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixzREFBYTtBQUN6QztBQUNBLGdDQUFnQyxzREFBYTtBQUM3QyxnQ0FBZ0Msc0RBQWE7QUFDN0MsZ0NBQWdDLHNEQUFhO0FBQzdDLGdDQUFnQyxzREFBYTtBQUM3Qzs7QUFFQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge2xvYWRIZWFkZXIsIGNyZWF0ZUVsZW1lbnR9O1xuXG5jb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGVyX2NvbnRlbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwiaGVhZGVyLWNvbnRlbnRcIik7XG4gICAgaGVhZGVyX2NvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInBcIiwgXCJGYW50YXN0aWMgRmVhc3RzXCIsIG51bGwsIFtcImlkXCIsIFwibG9nb1wiXSkpO1xuICAgIGNvbnN0IG5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgaG9tZSA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiSG9tZVwiLCBcImN1cnJlbnQtdGFiXCIsIFtcImlkXCIsIFwiaG9tZVwiXSk7XG4gICAgaG9tZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcIkNvbnRhY3RcIiwgXCJcIiwgW1wiaWRcIiwgXCJjb250YWN0XCJdKTtcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiTWVudVwiLCBcIlwiLCBbXCJpZFwiLCBcIm1lbnVcIl0pO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBoZWFkZXJfY29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJfY29udGVudCk7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJcIiwgW1wiaWRcIiwgXCJjb250ZW50XCJdKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwibWFpblwiKSk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IGFuY2hvciA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIFwiXCIsIFwiXCIsIFtcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vamNpZHBcIl0pO1xuICAgIGFuY2hvci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwicFwiLCBcIk1hZGUgYnkgamNpZHBcIiwgXCJcIiwgW1wiaWRcIiwgXCJhdXRob3JcIl0pKTtcbiAgICByZW5kZXJMaW5rSWNvbihhbmNob3IpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhbmNob3IpO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50LCBjb250ZW50LCBjbGFzc2VzLCBhdHRyaWJ1dGUpID0+IHtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGlmIChjbGFzc2VzKSBlbGUuY2xhc3NMaXN0LmFkZChjbGFzc2VzKTtcbiAgICBpZiAoY29udGVudCkgZWxlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICBpZiAoYXR0cmlidXRlKSBlbGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZVswXSwgYXR0cmlidXRlWzFdKTtcbiAgICByZXR1cm4gZWxlO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyTGlua0ljb24obm9kZSkge1xuICAgIGNvbnN0IGljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgIGNvbnN0IGljb25QYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiZ2l0aHViXCI7XG4gICAgaWNvblN2Zy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIFxuICAgIGljb25Tdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICBcbiAgICBpY29uUGF0aC5zZXRBdHRyaWJ1dGUoXG4gICAgICAnZCcsXG4gICAgICAnTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkMyLDE2LjQyIDQuODcsMjAuMTcgOC44NCwyMS41QzkuMzQsMjEuNTggOS41LDIxLjI3IDkuNSwyMUM5LjUsMjAuNzcgOS41LDIwLjE0IDkuNSwxOS4zMUM2LjczLDE5LjkxIDYuMTQsMTcuOTcgNi4xNCwxNy45N0M1LjY4LDE2LjgxIDUuMDMsMTYuNSA1LjAzLDE2LjVDNC4xMiwxNS44OCA1LjEsMTUuOSA1LjEsMTUuOUM2LjEsMTUuOTcgNi42MywxNi45MyA2LjYzLDE2LjkzQzcuNSwxOC40NSA4Ljk3LDE4IDkuNTQsMTcuNzZDOS42MywxNy4xMSA5Ljg5LDE2LjY3IDEwLjE3LDE2LjQyQzcuOTUsMTYuMTcgNS42MiwxNS4zMSA1LjYyLDExLjVDNS42MiwxMC4zOSA2LDkuNSA2LjY1LDguNzlDNi41NSw4LjU0IDYuMiw3LjUgNi43NSw2LjE1QzYuNzUsNi4xNSA3LjU5LDUuODggOS41LDcuMTdDMTAuMjksNi45NSAxMS4xNSw2Ljg0IDEyLDYuODRDMTIuODUsNi44NCAxMy43MSw2Ljk1IDE0LjUsNy4xN0MxNi40MSw1Ljg4IDE3LjI1LDYuMTUgMTcuMjUsNi4xNUMxNy44LDcuNSAxNy40NSw4LjU0IDE3LjM1LDguNzlDMTgsOS41IDE4LjM4LDEwLjM5IDE4LjM4LDExLjVDMTguMzgsMTUuMzIgMTYuMDQsMTYuMTYgMTMuODEsMTYuNDFDMTQuMTcsMTYuNzIgMTQuNSwxNy4zMyAxNC41LDE4LjI2QzE0LjUsMTkuNiAxNC41LDIwLjY4IDE0LjUsMjFDMTQuNSwyMS4yNyAxNC42NiwyMS41OSAxNS4xNywyMS41QzE5LjE0LDIwLjE2IDIyLDE2LjQyIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaJ1xuICAgICk7XG5cbiAgICBpY29uU3ZnLmFwcGVuZENoaWxkKGljb25QYXRoKTtcbiAgXG4gICAgcmV0dXJuIG5vZGUuYXBwZW5kQ2hpbGQoaWNvblN2Zyk7XG4gIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IEhlcm9JbWcgZnJvbSBcIi4vZmFudGFzeV9tZWFsLmpwZWdcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9oZWFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgXG4gICAgY29uc3QgaGVyb190ZXh0ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCBcImhlcm8tdGV4dFwiKTtcbiAgICBoZXJvX3RleHQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgxXCIsIFwiRmVhc3Qgb24gQ3VsaW5hcnkgTWFnaWMgZnJvbSBGYW50YXN5IFdvcmxkc1wiKSk7XG4gICAgaGVyb190ZXh0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiV2UgYnJpbmcgdGhlIGZhbnRhc3RpY2FsIGZsYXZvcnMgb2YgeW91ciBmYXZvcml0ZSBmaWN0aW9uYWwgd29ybGRzIHRvIGxpZmUuXCIpKTtcbiAgICBoZXJvX3RleHQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInBcIiwgXCJGcm9tIHRoZSBwYWdlcyBvZiBiZWxvdmVkIGJvb2tzIHRvIHRoZSBzaWx2ZXIgc2NyZWVuLCBpbW1lcnNlIHlvdXJzZWxmIGluIGEgZGluaW5nIGV4cGVyaWVuY2UgbGlrZSBubyBvdGhlciFcIikpO1xuICAgIGhlcm9fdGV4dC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiQm9vayBOb3chXCIsIFwiY3RhXCIpKTtcbiAgICBjb25zdCBoZXJvX2NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJoZXJvXCIpO1xuICAgIGhlcm9fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgaGVyb19jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb190ZXh0KTtcbiAgICBcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gSGVyb0ltZztcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQSBkaXNoIGZ1bGwgb2YgZm9vZCB0aGF0IGxvb2tzIGxpa2UgaXQgY2FtZSBmcm9tIGEgZmFudGFzeSBib29rXCIpO1xuICAgIGNvbnN0IGhlcm9faW1nID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCBcImhlcm8taW1hZ2VcIik7XG4gICAgaGVyb19pbWcuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBoZXJvX2NvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvX2ltZyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhlcm9fY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFib3V0X2NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJhYm91dFwiKTtcbiAgICBhYm91dF9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgICBhYm91dF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgyXCIsIFwiQSBSZWFsbSBvZiBDdWxpbmFyeSBXb25kZXJcIikpO1xuICAgIGFib3V0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwicFwiLCBcIkF0IEZhbnRhc3RpYyBGZWFzdHMsIGZvb2QgaXMgYW4gZW5jaGFudGluZyBqb3VybmV5IGludG8gdGhlIGhlYXJ0IG9mIGZhbnRhc3kgcmVhbG1zLlwiKSk7XG4gICAgYWJvdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiT3VyIHNraWxsZWQgY2hlZnMgZHJhdyBpbnNwaXJhdGlvbiBmcm9tIGxlZ2VuZGFyeSB0YWxlcyBhbmQgbXl0aGljIHNhZ2FzIHRvIGNyYWZ0IGRpc2hlcyB0aGF0IGlnbml0ZSB5b3VyIGltYWdpbmF0aW9uIGFuZCBzYXRpc2Z5IHlvdXIgY3JhdmluZ3MuXCIpKTtcbiAgICBhYm91dF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInBcIiwgXCJFbWJhcmsgb24gYW4gZXBpY3VyZWFuIGFkdmVudHVyZSB3aXRoIHVzIGFzIHdlIHR1cm4gY2hlcmlzaGVkIGxpdGVyYXJ5IGFuZCBjaW5lbWF0aWMgZmVhc3RzIGludG8gcmVhbGl0eS5cIikpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRfY29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==