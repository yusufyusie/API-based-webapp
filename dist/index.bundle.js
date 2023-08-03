"use strict";
(self["webpackChunk_api_based_webapp"] = self["webpackChunk_api_based_webapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/images/logo.png */ "./src/assets/images/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: "Lora", serif;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #dfdfdf;
}

.app-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.navbar-logo {
  height: auto;
  margin-left: 1.5rem;
  padding: 18px;
  padding-left: 18rem;
  list-style: none;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.navbar {
  display: flex;
  height: 65px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #2d2c38;
  border: 2px solid #dc3545;
  flex-direction: row;
}

.navbar-nav {
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  flex-direction: row;
  padding-left: 1rem;
  list-style: none;
  box-sizing: border-box;
  position: sticky;
  top: 0;
}

.navbar-nav > li.nav-item > a.nav-link {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
}

.navbar-nav > li.nav-item > a.nav-link:hover,
.navbar-nav > li.nav-item > a.nav-link:focus {
  color: #f05f40;
}

a {
  text-decoration: none;
}

main {
  margin-top: 5em;
  min-height: 75vh;
}

.meals-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}

@media only screen and (min-width: 768px) {
  .meals-card {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .meals-card::after {
    content: '';
    flex: auto;
  }
}

.mealItem {
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  border: 2px solid darkgray;
  border-radius: 8px;
  gap: 1rem;
}

@media only screen and (min-width: 768px) {
  .mealItem {
    flex-direction: column;
    margin: 1rem 0.5rem;
    padding: 1rem 0.5rem;
    width: 44%;
    justify-content: flex-start;
    gap: 0;
  }
}

@media only screen and (min-width: 992px) {
  .mealItem {
    width: 30%;
  }
}

@media only screen and (min-width: 1200px) {
  .mealItem {
    width: 23%;
  }
}

.strUl {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: large;
}

.likeUl {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 0.1rem;
  padding-bottom: 0.1rem;
}

.thumb {
  height: 220px;
  width: 220px;
  border-radius: 1rem;
  align-self: center;
  margin-top: 0.5rem;
  margin-bottom: 0.1rem;
}

.buttonDiv {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  background-color:  #dc3dcb;;
  border: 1px solid #000;
  border-radius: 3px;
  width: 9rem;
  font-size: 1.5rem;
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  margin-left: 4.3rem;
  margin-top: 1rem;
  text-align: center;
  cursor: pointer;
}

.button:hover {
  background-color: #19f5aa;;
  transition: 1s;
}

.imgLike {
  height: 1.5rem;
}

.imgLike:hover {
  cursor: pointer;
  filter: invert(8%) sepia(98%) saturate(6374%) hue-rotate(246deg) brightness(111%) contrast(147%);
}

.imgLike:active {
  filter: invert(42%) sepia(98%) saturate(7352%) hue-rotate(354deg) brightness(98%) contrast(124%);
}

span {
  margin: 1rem;
  font-size: 1.6rem;
}

.hide {
  display: none;
}

p {
  margin: 0.2rem;
  font-size: 1rem;
}

section,
footer {
  padding: 2em;
}

.author {
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  color: #3763f4;
}

footer {
  border-top: solid 2px #dc3545;
  display: flex;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  font-weight: 900;
  padding: 1.5rem;  
  background-color: #2d2c38; 
  color: rgba(255, 255, 255, 0.85);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;EAC1B,SAAS;EACT,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,OAAO;EACP,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,yDAAsD;AACxD;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,MAAM;AACR;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;EACjB,gBAAgB;EAChB,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE;IACE,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,MAAM;IACN,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,UAAU;EACZ;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;IACpB,UAAU;IACV,2BAA2B;IAC3B,MAAM;EACR;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;EAC1B,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,kCAAkC;EAClC,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gGAAgG;AAClG;;AAEA;EACE,gGAAgG;AAClG;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kCAAkC;EAClC,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,gCAAgC;AAClC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: \"Lora\", serif;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #dfdfdf;\r\n}\r\n\r\n.app-header {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.navbar-logo {\r\n  height: auto;\r\n  margin-left: 1.5rem;\r\n  padding: 18px;\r\n  padding-left: 18rem;\r\n  list-style: none;\r\n  background-image: url('../src/assets/images/logo.png');\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  height: 65px;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem;\r\n  background-color: #2d2c38;\r\n  border: 2px solid #dc3545;\r\n  flex-direction: row;\r\n}\r\n\r\n.navbar-nav {\r\n  padding: 0.5rem;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  flex-direction: row;\r\n  padding-left: 1rem;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link {\r\n  color: rgba(255, 255, 255, 0.85);\r\n  font-size: 0.9rem;\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link:hover,\r\n.navbar-nav > li.nav-item > a.nav-link:focus {\r\n  color: #f05f40;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nmain {\r\n  margin-top: 5em;\r\n  min-height: 75vh;\r\n}\r\n\r\n.meals-card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: transparent;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .meals-card {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 0;\r\n    margin-left: 1rem;\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  .meals-card::after {\r\n    content: '';\r\n    flex: auto;\r\n  }\r\n}\r\n\r\n.mealItem {\r\n  margin: 1rem;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 2px solid darkgray;\r\n  border-radius: 8px;\r\n  gap: 1rem;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .mealItem {\r\n    flex-direction: column;\r\n    margin: 1rem 0.5rem;\r\n    padding: 1rem 0.5rem;\r\n    width: 44%;\r\n    justify-content: flex-start;\r\n    gap: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n  .mealItem {\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .mealItem {\r\n    width: 23%;\r\n  }\r\n}\r\n\r\n.strUl {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-weight: bold;\r\n  font-size: large;\r\n}\r\n\r\n.likeUl {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 1.2rem;\r\n  margin-bottom: 0.1rem;\r\n  padding-bottom: 0.1rem;\r\n}\r\n\r\n.thumb {\r\n  height: 220px;\r\n  width: 220px;\r\n  border-radius: 1rem;\r\n  align-self: center;\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0.1rem;\r\n}\r\n\r\n.buttonDiv {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.button {\r\n  background-color:  #dc3dcb;;\r\n  border: 1px solid #000;\r\n  border-radius: 3px;\r\n  width: 9rem;\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  margin-left: 4.3rem;\r\n  margin-top: 1rem;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n  background-color: #19f5aa;;\r\n  transition: 1s;\r\n}\r\n\r\n.imgLike {\r\n  height: 1.5rem;\r\n}\r\n\r\n.imgLike:hover {\r\n  cursor: pointer;\r\n  filter: invert(8%) sepia(98%) saturate(6374%) hue-rotate(246deg) brightness(111%) contrast(147%);\r\n}\r\n\r\n.imgLike:active {\r\n  filter: invert(42%) sepia(98%) saturate(7352%) hue-rotate(354deg) brightness(98%) contrast(124%);\r\n}\r\n\r\nspan {\r\n  margin: 1rem;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\np {\r\n  margin: 0.2rem;\r\n  font-size: 1rem;\r\n}\r\n\r\nsection,\r\nfooter {\r\n  padding: 2em;\r\n}\r\n\r\n.author {\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  color: #3763f4;\r\n}\r\n\r\nfooter {\r\n  border-top: solid 2px #dc3545;\r\n  display: flex;\r\n  justify-content: center;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  position: fixed;\r\n  font-weight: 900;\r\n  padding: 1.5rem;  \r\n  background-color: #2d2c38; \r\n  color: rgba(255, 255, 255, 0.85);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_cards_mealDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards/mealDisplay.js */ "./src/modules/cards/mealDisplay.js");



(0,_modules_cards_mealDisplay_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/modules/cards/getMeals.js":
/*!***************************************!*\
  !*** ./src/modules/cards/getMeals.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const displayMeals = async () => {
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeals);

/***/ }),

/***/ "./src/modules/cards/mealCard.js":
/*!***************************************!*\
  !*** ./src/modules/cards/mealCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _likes_heart_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../likes/heart.svg */ "./src/modules/likes/heart.svg");
/* harmony import */ var _likes_addLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../likes/addLike.js */ "./src/modules/likes/addLike.js");



const myLike = new Image();
myLike.src = _likes_heart_svg__WEBPACK_IMPORTED_MODULE_0__;
myLike.classList = 'imgLike';

const mealCard = (title, category, area, instructions, id, imageId, likeNum) => {
const board = document.querySelector('.meals-card');

const ul = document.createElement('ul');
ul.className = 'mealItem';

const strUl = document.createElement('ul');
strUl.className = 'strUl';

const strCat = document.createElement('ul');
strCat.className = 'strCat';

const strArea = document.createElement('ul');
strArea.className = 'strArea';

const strInstr = document.createElement('ul');
strInstr.className = 'strInstr';

const likeUl = document.createElement('ul');
likeUl.className = 'likeUl';

const buttonUl = document.createElement('ul');
  buttonUl.className = 'buttonUl';

const buttonComment = document.createElement('ul');
  buttonComment.className = 'button';

ul.innerHTML = `<img class='thumb' src='${imageId}'>`;
strUl.innerHTML = `<span>${title}</span>`;
strCat.innerHTML = `<span>${category}</span>`;
strArea.innerHTML = `<span>${area}</span>`;
strInstr.innerHTML = `<p class='hide'>${instructions}</p>`;
likeUl.innerHTML = `<span class='hide'>${id}</span><img class='imgLike' src='${_likes_heart_svg__WEBPACK_IMPORTED_MODULE_0__}'><ul class="stop">${likeNum}</ul><p class="stop">Likes</p>`;
buttonComment.innerHTML = `<div>Comments</div><span class='hide'>${id}</span>`;

strUl.appendChild(likeUl);
ul.appendChild(strUl);
ul.appendChild(strCat);
ul.appendChild(strArea);
ul.appendChild(strInstr);
buttonUl.appendChild(buttonComment);
ul.appendChild(buttonUl);
board.appendChild(ul);

likeUl.addEventListener('click', (e) => {
  if (e.target.classList.contains('stop')) {
    return;
  }

  (0,_likes_addLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.previousElementSibling.textContent);
  const sumlike = e.target.nextElementSibling.textContent;
  e.target.nextElementSibling.textContent = parseInt(sumlike, 10) + 1;
});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCard);

/***/ }),

/***/ "./src/modules/cards/mealCounter.js":
/*!******************************************!*\
  !*** ./src/modules/cards/mealCounter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mealCounter = () => {
    const toatalMeals = document.querySelector('#totalMeals');
    toatalMeals.innerHTML = document.getElementsByClassName('mealItem').length;
    return Number(toatalMeals.innerHTML);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealCounter);

/***/ }),

/***/ "./src/modules/cards/mealDisplay.js":
/*!******************************************!*\
  !*** ./src/modules/cards/mealDisplay.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getMeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMeals.js */ "./src/modules/cards/getMeals.js");
/* harmony import */ var _mealCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mealCard.js */ "./src/modules/cards/mealCard.js");
/* harmony import */ var _mealCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mealCounter.js */ "./src/modules/cards/mealCounter.js");




const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iDkQTjuQFS7PeimALucH/likes/';

const mealDisplay = async () => {
    const response = await fetch(URL);
    const likes = await response.json();

    const data = await (0,_getMeals_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    data.meals.forEach((meal) => {
      let likeNum = 0;
      likes.forEach((item) => {
        if (item.item_id === meal.idMeal) {
          likeNum = item.likes;
        }
      });

      (0,_mealCard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
                meal.strMeal,
                meal.strCategory,
                meal.strArea,
                meal.strInstructions,
                meal.idMeal,
                meal.strMealThumb,
                likeNum,
                meal.strTags,
             );
    });
    (0,_mealCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  };

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealDisplay);

/***/ }),

/***/ "./src/modules/likes/addLike.js":
/*!**************************************!*\
  !*** ./src/modules/likes/addLike.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iDkQTjuQFS7PeimALucH/likes/';

const addLike = async (idMeal) => {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: idMeal,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'access-control-allow-origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
    const data = await response.json();
    return data;
  };

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3714c37fac597e01a8ea.png";

/***/ }),

/***/ "./src/modules/likes/heart.svg":
/*!*************************************!*\
  !*** ./src/modules/likes/heart.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c475f55949626a67e6a8.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxrSUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw2R0FBNkcsa0JBQWtCO0FBQy9ILDZHQUE2RyxtQ0FBbUMsTUFBTSxvQkFBb0I7QUFDMUsseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFB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d2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL2NhcmRzL2dldE1lYWxzLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvY2FyZHMvbWVhbENhcmQuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9jYXJkcy9tZWFsQ291bnRlci5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL2NhcmRzL21lYWxEaXNwbGF5LmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvbGlrZXMvYWRkTGlrZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxufVxyXG5cclxuLmFwcC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG59XHJcblxyXG4ubmF2YmFyLWxvZ28ge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyYzM4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYzM1NDU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpob3ZlcixcclxuLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjA1ZjQwO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDVlbTtcclxuICBtaW4taGVpZ2h0OiA3NXZoO1xyXG59XHJcblxyXG4ubWVhbHMtY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5tZWFscy1jYXJkIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5tZWFscy1jYXJkOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4ubWVhbEl0ZW0ge1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1lYWxJdGVtIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICB3aWR0aDogNDQlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5tZWFsSXRlbSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAubWVhbEl0ZW0ge1xyXG4gICAgd2lkdGg6IDIzJTtcclxuICB9XHJcbn1cclxuXHJcbi5zdHJVbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmxpa2VVbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xyXG59XHJcblxyXG4udGh1bWIge1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XHJcbn1cclxuXHJcbi5idXR0b25EaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICNkYzNkY2I7O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHdpZHRoOiA5cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi1sZWZ0OiA0LjNyZW07XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTlmNWFhOztcclxuICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuLmltZ0xpa2Uge1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uaW1nTGlrZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZpbHRlcjogaW52ZXJ0KDglKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYzNzQlKSBodWUtcm90YXRlKDI0NmRlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCgxNDclKTtcclxufVxyXG5cclxuLmltZ0xpa2U6YWN0aXZlIHtcclxuICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoNzM1MiUpIGh1ZS1yb3RhdGUoMzU0ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTI0JSk7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMC4ycmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuc2VjdGlvbixcclxuZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyZW07XHJcbn1cclxuXHJcbi5hdXRob3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzc2M2Y0O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCAjZGMzNTQ1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgcGFkZGluZzogMS41cmVtOyAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmMzODsgXHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLE1BQU07QUFDUjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLE1BQU07SUFDTixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLE1BQU07RUFDUjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnR0FBZ0c7QUFDbEc7O0FBRUE7RUFDRSxnR0FBZ0c7QUFDbEc7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDMwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxvZ28ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDE4cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE4cmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJjMzg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGMzNTQ1O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1uYXYge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluayB7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpob3ZlcixcXHJcXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpmb2N1cyB7XFxyXFxuICBjb2xvcjogI2YwNWY0MDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgbWFyZ2luLXRvcDogNWVtO1xcclxcbiAgbWluLWhlaWdodDogNzV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzLWNhcmQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWxzLWNhcmQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lYWxzLWNhcmQ6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGZsZXg6IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tZWFsSXRlbSB7XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBkYXJrZ3JheTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWxJdGVtIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxyXFxuICAgIHdpZHRoOiA0NCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAubWVhbEl0ZW0ge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcclxcbiAgLm1lYWxJdGVtIHtcXHJcXG4gICAgd2lkdGg6IDIzJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN0clVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5saWtlVWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1iIHtcXHJcXG4gIGhlaWdodDogMjIwcHg7XFxyXFxuICB3aWR0aDogMjIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uRGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogICNkYzNkY2I7O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHdpZHRoOiA5cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0LjNyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOWY1YWE7O1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbi5pbWdMaWtlIHtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nTGlrZTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmaWx0ZXI6IGludmVydCg4JSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg2Mzc0JSkgaHVlLXJvdGF0ZSgyNDZkZWcpIGJyaWdodG5lc3MoMTExJSkgY29udHJhc3QoMTQ3JSk7XFxyXFxufVxcclxcblxcclxcbi5pbWdMaWtlOmFjdGl2ZSB7XFxyXFxuICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoNzM1MiUpIGh1ZS1yb3RhdGUoMzU0ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTI0JSk7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgbWFyZ2luOiAwLjJyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24sXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvciB7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjMzc2M2Y0O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNkYzM1NDU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgcGFkZGluZzogMS41cmVtOyAgXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyYzM4OyBcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG1lYWxEaXNwbGF5IGZyb20gJy4vbW9kdWxlcy9jYXJkcy9tZWFsRGlzcGxheS5qcyc7XG5cbm1lYWxEaXNwbGF5KCk7IiwiY29uc3QgVVJMID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP3M9JztcblxuY29uc3QgZGlzcGxheU1lYWxzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lYWxzOyIsImltcG9ydCBsaWtlIGZyb20gJy4uL2xpa2VzL2hlYXJ0LnN2Zyc7XG5pbXBvcnQgYWRkTGlrZSBmcm9tICcuLi9saWtlcy9hZGRMaWtlLmpzJztcblxuY29uc3QgbXlMaWtlID0gbmV3IEltYWdlKCk7XG5teUxpa2Uuc3JjID0gbGlrZTtcbm15TGlrZS5jbGFzc0xpc3QgPSAnaW1nTGlrZSc7XG5cbmNvbnN0IG1lYWxDYXJkID0gKHRpdGxlLCBjYXRlZ29yeSwgYXJlYSwgaW5zdHJ1Y3Rpb25zLCBpZCwgaW1hZ2VJZCwgbGlrZU51bSkgPT4ge1xuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMtY2FyZCcpO1xuXG5jb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG51bC5jbGFzc05hbWUgPSAnbWVhbEl0ZW0nO1xuXG5jb25zdCBzdHJVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5zdHJVbC5jbGFzc05hbWUgPSAnc3RyVWwnO1xuXG5jb25zdCBzdHJDYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuc3RyQ2F0LmNsYXNzTmFtZSA9ICdzdHJDYXQnO1xuXG5jb25zdCBzdHJBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbnN0ckFyZWEuY2xhc3NOYW1lID0gJ3N0ckFyZWEnO1xuXG5jb25zdCBzdHJJbnN0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5zdHJJbnN0ci5jbGFzc05hbWUgPSAnc3RySW5zdHInO1xuXG5jb25zdCBsaWtlVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xubGlrZVVsLmNsYXNzTmFtZSA9ICdsaWtlVWwnO1xuXG5jb25zdCBidXR0b25VbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGJ1dHRvblVsLmNsYXNzTmFtZSA9ICdidXR0b25VbCc7XG5cbmNvbnN0IGJ1dHRvbkNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBidXR0b25Db21tZW50LmNsYXNzTmFtZSA9ICdidXR0b24nO1xuXG51bC5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz0ndGh1bWInIHNyYz0nJHtpbWFnZUlkfSc+YDtcbnN0clVsLmlubmVySFRNTCA9IGA8c3Bhbj4ke3RpdGxlfTwvc3Bhbj5gO1xuc3RyQ2F0LmlubmVySFRNTCA9IGA8c3Bhbj4ke2NhdGVnb3J5fTwvc3Bhbj5gO1xuc3RyQXJlYS5pbm5lckhUTUwgPSBgPHNwYW4+JHthcmVhfTwvc3Bhbj5gO1xuc3RySW5zdHIuaW5uZXJIVE1MID0gYDxwIGNsYXNzPSdoaWRlJz4ke2luc3RydWN0aW9uc308L3A+YDtcbmxpa2VVbC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9J2hpZGUnPiR7aWR9PC9zcGFuPjxpbWcgY2xhc3M9J2ltZ0xpa2UnIHNyYz0nJHtsaWtlfSc+PHVsIGNsYXNzPVwic3RvcFwiPiR7bGlrZU51bX08L3VsPjxwIGNsYXNzPVwic3RvcFwiPkxpa2VzPC9wPmA7XG5idXR0b25Db21tZW50LmlubmVySFRNTCA9IGA8ZGl2PkNvbW1lbnRzPC9kaXY+PHNwYW4gY2xhc3M9J2hpZGUnPiR7aWR9PC9zcGFuPmA7XG5cbnN0clVsLmFwcGVuZENoaWxkKGxpa2VVbCk7XG51bC5hcHBlbmRDaGlsZChzdHJVbCk7XG51bC5hcHBlbmRDaGlsZChzdHJDYXQpO1xudWwuYXBwZW5kQ2hpbGQoc3RyQXJlYSk7XG51bC5hcHBlbmRDaGlsZChzdHJJbnN0cik7XG5idXR0b25VbC5hcHBlbmRDaGlsZChidXR0b25Db21tZW50KTtcbnVsLmFwcGVuZENoaWxkKGJ1dHRvblVsKTtcbmJvYXJkLmFwcGVuZENoaWxkKHVsKTtcblxubGlrZVVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RvcCcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWRkTGlrZShlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50KTtcbiAgY29uc3Qgc3VtbGlrZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gcGFyc2VJbnQoc3VtbGlrZSwgMTApICsgMTtcbn0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVhbENhcmQ7IiwiY29uc3QgbWVhbENvdW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9hdGFsTWVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWxNZWFscycpO1xuICAgIHRvYXRhbE1lYWxzLmlubmVySFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lYWxJdGVtJykubGVuZ3RoO1xuICAgIHJldHVybiBOdW1iZXIodG9hdGFsTWVhbHMuaW5uZXJIVE1MKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lYWxDb3VudGVyOyIsImltcG9ydCBkaXNwbGF5TWVhbHMgZnJvbSAnLi9nZXRNZWFscy5qcyc7XG5pbXBvcnQgbWVhbENhcmQgZnJvbSAnLi9tZWFsQ2FyZC5qcyc7XG5pbXBvcnQgbWVhbENvdW50ZXIgZnJvbSAnLi9tZWFsQ291bnRlci5qcyc7XG5cbmNvbnN0IFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9pRGtRVGp1UUZTN1BlaW1BTHVjSC9saWtlcy8nO1xuXG5jb25zdCBtZWFsRGlzcGxheSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7XG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGlzcGxheU1lYWxzKCk7XG4gICAgZGF0YS5tZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgICBsZXQgbGlrZU51bSA9IDA7XG4gICAgICBsaWtlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLml0ZW1faWQgPT09IG1lYWwuaWRNZWFsKSB7XG4gICAgICAgICAgbGlrZU51bSA9IGl0ZW0ubGlrZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtZWFsQ2FyZChcbiAgICAgICAgICAgICAgICBtZWFsLnN0ck1lYWwsXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJDYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBtZWFsLnN0ckFyZWEsXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJJbnN0cnVjdGlvbnMsXG4gICAgICAgICAgICAgICAgbWVhbC5pZE1lYWwsXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJNZWFsVGh1bWIsXG4gICAgICAgICAgICAgICAgbGlrZU51bSxcbiAgICAgICAgICAgICAgICBtZWFsLnN0clRhZ3MsXG4gICAgICAgICAgICAgKTtcbiAgICB9KTtcbiAgICBtZWFsQ291bnRlcigpO1xuICB9O1xuXG4gIGV4cG9ydCBkZWZhdWx0IG1lYWxEaXNwbGF5OyIsImNvbnN0IFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9pRGtRVGp1UUZTN1BlaW1BTHVjSC9saWtlcy8nO1xuXG5jb25zdCBhZGRMaWtlID0gYXN5bmMgKGlkTWVhbCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWRNZWFsLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgICdhY2Nlc3MtY29udHJvbC1hbGxvdy1vcmlnaW4nOiAnKicsXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscyc6ICd0cnVlJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBhZGRMaWtlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==