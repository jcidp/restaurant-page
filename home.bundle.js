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
    //hero_text.appendChild(createElement("button", "Book Now!", "cta"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDNURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEIwQztBQUNEOztBQUUxQjtBQUNmO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBYTtBQUNuQywwQkFBMEIsc0RBQWE7QUFDdkMsMEJBQTBCLHNEQUFhO0FBQ3ZDLDBCQUEwQixzREFBYTtBQUN2QztBQUNBLDJCQUEyQixzREFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsK0NBQU87QUFDckI7QUFDQSxxQkFBcUIsc0RBQWE7QUFDbEM7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsc0RBQWE7QUFDekM7QUFDQSxnQ0FBZ0Msc0RBQWE7QUFDN0MsZ0NBQWdDLHNEQUFhO0FBQzdDLGdDQUFnQyxzREFBYTtBQUM3QyxnQ0FBZ0Msc0RBQWE7QUFDN0M7O0FBRUE7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtsb2FkSGVhZGVyLCBjcmVhdGVFbGVtZW50fTtcblxuY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGhlYWRlcl9jb250ZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcImhlYWRlci1jb250ZW50XCIpO1xuICAgIGhlYWRlcl9jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiRmFudGFzdGljIEZlYXN0c1wiLCBudWxsLCBbXCJpZFwiLCBcImxvZ29cIl0pKTtcbiAgICBjb25zdCBuYXYgPSBjcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcIkhvbWVcIiwgXCJjdXJyZW50LXRhYlwiLCBbXCJpZFwiLCBcImhvbWVcIl0pO1xuICAgIGhvbWUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIlwiKTtcbiAgICBjb25zdCBjb250YWN0ID0gY3JlYXRlRWxlbWVudChcImFcIiwgXCJDb250YWN0XCIsIFwiXCIsIFtcImlkXCIsIFwiY29udGFjdFwiXSk7XG4gICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiXCIpO1xuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcIk1lbnVcIiwgXCJcIiwgW1wiaWRcIiwgXCJtZW51XCJdKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJcIik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgaGVhZGVyX2NvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyX2NvbnRlbnQpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiXCIsIFtcImlkXCIsIFwiY29udGVudFwiXSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcIm1haW5cIikpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb25zdCBhbmNob3IgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCBcIlwiLCBcIlwiLCBbXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL2pjaWRwXCJdKTtcbiAgICBhbmNob3IuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInBcIiwgXCJNYWRlIGJ5IGpjaWRwXCIsIFwiXCIsIFtcImlkXCIsIFwiYXV0aG9yXCJdKSk7XG4gICAgcmVuZGVyTGlua0ljb24oYW5jaG9yKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYW5jaG9yKTtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudCwgY29udGVudCwgY2xhc3NlcywgYXR0cmlidXRlKSA9PiB7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAoY2xhc3NlcykgZWxlLmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gICAgaWYgKGNvbnRlbnQpIGVsZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgaWYgKGF0dHJpYnV0ZSkgZWxlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgcmV0dXJuIGVsZTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlckxpbmtJY29uKG5vZGUpIHtcbiAgICBjb25zdCBpY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICBjb25zdCBpY29uUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcImdpdGh1YlwiO1xuICAgIGljb25TdmcuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBcbiAgICBpY29uU3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgXG4gICAgaWNvblBhdGguc2V0QXR0cmlidXRlKFxuICAgICAgJ2QnLFxuICAgICAgJ00xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWidcbiAgICApO1xuXG4gICAgaWNvblN2Zy5hcHBlbmRDaGlsZChpY29uUGF0aCk7XG4gIFxuICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGljb25TdmcpO1xuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBIZXJvSW1nIGZyb20gXCIuL2ZhbnRhc3lfbWVhbC5qcGVnXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIFxuICAgIGNvbnN0IGhlcm9fdGV4dCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJoZXJvLXRleHRcIik7XG4gICAgaGVyb190ZXh0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcIkZlYXN0IG9uIEN1bGluYXJ5IE1hZ2ljIGZyb20gRmFudGFzeSBXb3JsZHNcIikpO1xuICAgIGhlcm9fdGV4dC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwicFwiLCBcIldlIGJyaW5nIHRoZSBmYW50YXN0aWNhbCBmbGF2b3JzIG9mIHlvdXIgZmF2b3JpdGUgZmljdGlvbmFsIHdvcmxkcyB0byBsaWZlLlwiKSk7XG4gICAgaGVyb190ZXh0LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiRnJvbSB0aGUgcGFnZXMgb2YgYmVsb3ZlZCBib29rcyB0byB0aGUgc2lsdmVyIHNjcmVlbiwgaW1tZXJzZSB5b3Vyc2VsZiBpbiBhIGRpbmluZyBleHBlcmllbmNlIGxpa2Ugbm8gb3RoZXIhXCIpKTtcbiAgICAvL2hlcm9fdGV4dC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwiQm9vayBOb3chXCIsIFwiY3RhXCIpKTtcbiAgICBjb25zdCBoZXJvX2NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJoZXJvXCIpO1xuICAgIGhlcm9fY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gICAgaGVyb19jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb190ZXh0KTtcbiAgICBcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gSGVyb0ltZztcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQSBkaXNoIGZ1bGwgb2YgZm9vZCB0aGF0IGxvb2tzIGxpa2UgaXQgY2FtZSBmcm9tIGEgZmFudGFzeSBib29rXCIpO1xuICAgIGNvbnN0IGhlcm9faW1nID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIlwiLCBcImhlcm8taW1hZ2VcIik7XG4gICAgaGVyb19pbWcuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBoZXJvX2NvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvX2ltZyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhlcm9fY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFib3V0X2NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJhYm91dFwiKTtcbiAgICBhYm91dF9jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgICBhYm91dF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcImgyXCIsIFwiQSBSZWFsbSBvZiBDdWxpbmFyeSBXb25kZXJcIikpO1xuICAgIGFib3V0X2NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwicFwiLCBcIkF0IEZhbnRhc3RpYyBGZWFzdHMsIGZvb2QgaXMgYW4gZW5jaGFudGluZyBqb3VybmV5IGludG8gdGhlIGhlYXJ0IG9mIGZhbnRhc3kgcmVhbG1zLlwiKSk7XG4gICAgYWJvdXRfY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFwiT3VyIHNraWxsZWQgY2hlZnMgZHJhdyBpbnNwaXJhdGlvbiBmcm9tIGxlZ2VuZGFyeSB0YWxlcyBhbmQgbXl0aGljIHNhZ2FzIHRvIGNyYWZ0IGRpc2hlcyB0aGF0IGlnbml0ZSB5b3VyIGltYWdpbmF0aW9uIGFuZCBzYXRpc2Z5IHlvdXIgY3JhdmluZ3MuXCIpKTtcbiAgICBhYm91dF9jb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInBcIiwgXCJFbWJhcmsgb24gYW4gZXBpY3VyZWFuIGFkdmVudHVyZSB3aXRoIHVzIGFzIHdlIHR1cm4gY2hlcmlzaGVkIGxpdGVyYXJ5IGFuZCBjaW5lbWF0aWMgZmVhc3RzIGludG8gcmVhbGl0eS5cIikpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRfY29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==