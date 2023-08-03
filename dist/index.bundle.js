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
  background-color: #fff;
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

.thumb:hover {
  filter: drop-shadow(0 0 0.75rem crimson);
  transform: scale(1.2);
}

.buttonDiv {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  background-color: #dc3dcb;
  border: 1px solid #000;
  border-radius: 3px;
  width: 9rem;
  font-size: 1.5rem;
  font-weight: 900;
  font-family: "Raleway", sans-serif;
  margin-left: 4.5rem;
  margin-top: 1rem;
  text-align: center;
  cursor: pointer;
}

.button:hover {
  background-color: #19f5aa;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;EAC1B,SAAS;EACT,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,OAAO;EACP,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,yDAAsD;AACxD;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,yBAAyB;EACzB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,MAAM;AACR;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;EACjB,gBAAgB;EAChB,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE;IACE,mBAAmB;IACnB,8BAA8B;IAC9B,eAAe;IACf,MAAM;IACN,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,UAAU;EACZ;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,0BAA0B;EAC1B,kBAAkB;EAClB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE;IACE,sBAAsB;IACtB,mBAAmB;IACnB,oBAAoB;IACpB,UAAU;IACV,2BAA2B;IAC3B,MAAM;EACR;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,wCAAwC;EACxC,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,gBAAgB;EAChB,kCAAkC;EAClC,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gGAAgG;AAClG;;AAEA;EACE,gGAAgG;AAClG;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kCAAkC;EAClC,cAAc;AAChB;;AAEA;EACE,6BAA6B;EAC7B,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,gCAAgC;AAClC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: \"Lora\", serif;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #dfdfdf;\r\n}\r\n\r\n.app-header {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.navbar-logo {\r\n  height: auto;\r\n  margin-left: 1.5rem;\r\n  padding: 18px;\r\n  padding-left: 18rem;\r\n  list-style: none;\r\n  background-image: url('../src/assets/images/logo.png');\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  height: 65px;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem;\r\n  background-color: #2d2c38;\r\n  border: 2px solid #dc3545;\r\n  flex-direction: row;\r\n}\r\n\r\n.navbar-nav {\r\n  padding: 0.5rem;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  flex-direction: row;\r\n  padding-left: 1rem;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link {\r\n  color: rgba(255, 255, 255, 0.85);\r\n  font-size: 0.9rem;\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link:hover,\r\n.navbar-nav > li.nav-item > a.nav-link:focus {\r\n  color: #f05f40;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nmain {\r\n  margin-top: 5em;\r\n  min-height: 75vh;\r\n}\r\n\r\n.meals-card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: transparent;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .meals-card {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 0;\r\n    margin-left: 1rem;\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  .meals-card::after {\r\n    content: '';\r\n    flex: auto;\r\n  }\r\n}\r\n\r\n.mealItem {\r\n  margin: 1rem;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 2px solid darkgray;\r\n  border-radius: 8px;\r\n  background-color: #fff;\r\n  gap: 1rem;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .mealItem {\r\n    flex-direction: column;\r\n    margin: 1rem 0.5rem;\r\n    padding: 1rem 0.5rem;\r\n    width: 44%;\r\n    justify-content: flex-start;\r\n    gap: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n  .mealItem {\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .mealItem {\r\n    width: 23%;\r\n  }\r\n}\r\n\r\n.strUl {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-weight: bold;\r\n  font-size: large;\r\n}\r\n\r\n.likeUl {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 1.2rem;\r\n  margin-bottom: 0.1rem;\r\n  padding-bottom: 0.1rem;\r\n}\r\n\r\n.thumb {\r\n  height: 220px;\r\n  width: 220px;\r\n  border-radius: 1rem;\r\n  align-self: center;\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0.1rem;\r\n}\r\n\r\n.thumb:hover {\r\n  filter: drop-shadow(0 0 0.75rem crimson);\r\n  transform: scale(1.2);\r\n}\r\n\r\n.buttonDiv {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.button {\r\n  background-color: #dc3dcb;\r\n  border: 1px solid #000;\r\n  border-radius: 3px;\r\n  width: 9rem;\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  margin-left: 4.5rem;\r\n  margin-top: 1rem;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n  background-color: #19f5aa;\r\n  transition: 1s;\r\n}\r\n\r\n.imgLike {\r\n  height: 1.5rem;\r\n}\r\n\r\n.imgLike:hover {\r\n  cursor: pointer;\r\n  filter: invert(8%) sepia(98%) saturate(6374%) hue-rotate(246deg) brightness(111%) contrast(147%);\r\n}\r\n\r\n.imgLike:active {\r\n  filter: invert(42%) sepia(98%) saturate(7352%) hue-rotate(354deg) brightness(98%) contrast(124%);\r\n}\r\n\r\nspan {\r\n  margin: 1rem;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\np {\r\n  margin: 0.2rem;\r\n  font-size: 1rem;\r\n}\r\n\r\nsection,\r\nfooter {\r\n  padding: 2em;\r\n}\r\n\r\n.author {\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  color: #3763f4;\r\n}\r\n\r\nfooter {\r\n  border-top: solid 2px #dc3545;\r\n  display: flex;\r\n  justify-content: center;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  position: fixed;\r\n  font-weight: 900;\r\n  padding: 1.5rem;\r\n  background-color: #2d2c38;\r\n  color: rgba(255, 255, 255, 0.85);\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _likes_heart_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../likes/heart.gif */ "./src/modules/likes/heart.gif");
/* harmony import */ var _likes_addLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../likes/addLike.js */ "./src/modules/likes/addLike.js");



const myLike = new Image();
myLike.src = _likes_heart_gif__WEBPACK_IMPORTED_MODULE_0__;
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
likeUl.innerHTML = `<span class='hide'>${id}</span><img class='imgLike' src='${_likes_heart_gif__WEBPACK_IMPORTED_MODULE_0__}'><ul class="stop">${likeNum}</ul><p class="stop">Likes</p>`;
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

/***/ "./src/modules/likes/heart.gif":
/*!*************************************!*\
  !*** ./src/modules/likes/heart.gif ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f6a06c1aecc121f961f.gif";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxrSUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw2R0FBNkcsa0JBQWtCO0FBQy9ILDZHQUE2RyxtQ0FBbUMsTUFBTSxvQkFBb0I7QUFDMUsseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlB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MkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlFQUFlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9jYXJkcy9nZXRNZWFscy5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL2NhcmRzL21lYWxDYXJkLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvY2FyZHMvbWVhbENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9jYXJkcy9tZWFsRGlzcGxheS5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL2xpa2VzL2FkZExpa2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAzMDtcclxufVxyXG5cclxuLm5hdmJhci1sb2dvIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMThyZW07XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmMzODtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZGMzNTQ1O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDJyZW07XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluayB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6aG92ZXIsXHJcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmZvY3VzIHtcclxuICBjb2xvcjogI2YwNWY0MDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgbWluLWhlaWdodDogNzV2aDtcclxufVxyXG5cclxuLm1lYWxzLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubWVhbHMtY2FyZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICAubWVhbHMtY2FyZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLm1lYWxJdGVtIHtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1lYWxJdGVtIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICB3aWR0aDogNDQlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5tZWFsSXRlbSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAubWVhbEl0ZW0ge1xyXG4gICAgd2lkdGg6IDIzJTtcclxuICB9XHJcbn1cclxuXHJcbi5zdHJVbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmxpa2VVbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xyXG59XHJcblxyXG4udGh1bWIge1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XHJcbn1cclxuXHJcbi50aHVtYjpob3ZlciB7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSBjcmltc29uKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5idXR0b25EaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjM2RjYjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogOXJlbTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tbGVmdDogNC41cmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5ZjVhYTtcclxuICB0cmFuc2l0aW9uOiAxcztcclxufVxyXG5cclxuLmltZ0xpa2Uge1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uaW1nTGlrZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZpbHRlcjogaW52ZXJ0KDglKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDYzNzQlKSBodWUtcm90YXRlKDI0NmRlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCgxNDclKTtcclxufVxyXG5cclxuLmltZ0xpa2U6YWN0aXZlIHtcclxuICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoNzM1MiUpIGh1ZS1yb3RhdGUoMzU0ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTI0JSk7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMC4ycmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuc2VjdGlvbixcclxuZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyZW07XHJcbn1cclxuXHJcbi5hdXRob3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzc2M2Y0O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCAjZGMzNTQ1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJjMzg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFB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QUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMb3JhXFxcIiwgc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XFxyXFxufVxcclxcblxcclxcbi5hcHAtaGVhZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMzA7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbG9nbyB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xcclxcbiAgcGFkZGluZzogMThweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMThyZW07XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZycpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDY1cHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmMzODtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYzM1NDU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW5hdiB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmhvdmVyLFxcclxcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiAjZjA1ZjQwO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA1ZW07XFxyXFxuICBtaW4taGVpZ2h0OiA3NXZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVhbHMtY2FyZCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVhbHMtY2FyZDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgZmxleDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxJdGVtIHtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWxJdGVtIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxyXFxuICAgIHdpZHRoOiA0NCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAubWVhbEl0ZW0ge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcclxcbiAgLm1lYWxJdGVtIHtcXHJcXG4gICAgd2lkdGg6IDIzJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN0clVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5saWtlVWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1iIHtcXHJcXG4gIGhlaWdodDogMjIwcHg7XFxyXFxuICB3aWR0aDogMjIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWI6aG92ZXIge1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSBjcmltc29uKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbkRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzNkY2I7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgd2lkdGg6IDlyZW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQuNXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5ZjVhYTtcXHJcXG4gIHRyYW5zaXRpb246IDFzO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nTGlrZSB7XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0xpa2U6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoOCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoNjM3NCUpIGh1ZS1yb3RhdGUoMjQ2ZGVnKSBicmlnaHRuZXNzKDExMSUpIGNvbnRyYXN0KDE0NyUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nTGlrZTphY3RpdmUge1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoNDIlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDczNTIlKSBodWUtcm90YXRlKDM1NGRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEyNCUpO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogMC4ycmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uLFxcclxcbmZvb3RlciB7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5hdXRob3Ige1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogIzM3NjNmNDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCAjZGMzNTQ1O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJjMzg7XFxyXFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBtZWFsRGlzcGxheSBmcm9tICcuL21vZHVsZXMvY2FyZHMvbWVhbERpc3BsYXkuanMnO1xuXG5tZWFsRGlzcGxheSgpOyIsImNvbnN0IFVSTCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9zPSc7XG5cbmNvbnN0IGRpc3BsYXlNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFVSTCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNZWFsczsiLCJpbXBvcnQgbGlrZSBmcm9tICcuLi9saWtlcy9oZWFydC5naWYnO1xuaW1wb3J0IGFkZExpa2UgZnJvbSAnLi4vbGlrZXMvYWRkTGlrZS5qcyc7XG5cbmNvbnN0IG15TGlrZSA9IG5ldyBJbWFnZSgpO1xubXlMaWtlLnNyYyA9IGxpa2U7XG5teUxpa2UuY2xhc3NMaXN0ID0gJ2ltZ0xpa2UnO1xuXG5jb25zdCBtZWFsQ2FyZCA9ICh0aXRsZSwgY2F0ZWdvcnksIGFyZWEsIGluc3RydWN0aW9ucywgaWQsIGltYWdlSWQsIGxpa2VOdW0pID0+IHtcbmNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzLWNhcmQnKTtcblxuY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xudWwuY2xhc3NOYW1lID0gJ21lYWxJdGVtJztcblxuY29uc3Qgc3RyVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuc3RyVWwuY2xhc3NOYW1lID0gJ3N0clVsJztcblxuY29uc3Qgc3RyQ2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbnN0ckNhdC5jbGFzc05hbWUgPSAnc3RyQ2F0JztcblxuY29uc3Qgc3RyQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5zdHJBcmVhLmNsYXNzTmFtZSA9ICdzdHJBcmVhJztcblxuY29uc3Qgc3RySW5zdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuc3RySW5zdHIuY2xhc3NOYW1lID0gJ3N0ckluc3RyJztcblxuY29uc3QgbGlrZVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbmxpa2VVbC5jbGFzc05hbWUgPSAnbGlrZVVsJztcblxuY29uc3QgYnV0dG9uVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBidXR0b25VbC5jbGFzc05hbWUgPSAnYnV0dG9uVWwnO1xuXG5jb25zdCBidXR0b25Db21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgYnV0dG9uQ29tbWVudC5jbGFzc05hbWUgPSAnYnV0dG9uJztcblxudWwuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9J3RodW1iJyBzcmM9JyR7aW1hZ2VJZH0nPmA7XG5zdHJVbC5pbm5lckhUTUwgPSBgPHNwYW4+JHt0aXRsZX08L3NwYW4+YDtcbnN0ckNhdC5pbm5lckhUTUwgPSBgPHNwYW4+JHtjYXRlZ29yeX08L3NwYW4+YDtcbnN0ckFyZWEuaW5uZXJIVE1MID0gYDxzcGFuPiR7YXJlYX08L3NwYW4+YDtcbnN0ckluc3RyLmlubmVySFRNTCA9IGA8cCBjbGFzcz0naGlkZSc+JHtpbnN0cnVjdGlvbnN9PC9wPmA7XG5saWtlVWwuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPSdoaWRlJz4ke2lkfTwvc3Bhbj48aW1nIGNsYXNzPSdpbWdMaWtlJyBzcmM9JyR7bGlrZX0nPjx1bCBjbGFzcz1cInN0b3BcIj4ke2xpa2VOdW19PC91bD48cCBjbGFzcz1cInN0b3BcIj5MaWtlczwvcD5gO1xuYnV0dG9uQ29tbWVudC5pbm5lckhUTUwgPSBgPGRpdj5Db21tZW50czwvZGl2PjxzcGFuIGNsYXNzPSdoaWRlJz4ke2lkfTwvc3Bhbj5gO1xuXG5zdHJVbC5hcHBlbmRDaGlsZChsaWtlVWwpO1xudWwuYXBwZW5kQ2hpbGQoc3RyVWwpO1xudWwuYXBwZW5kQ2hpbGQoc3RyQ2F0KTtcbnVsLmFwcGVuZENoaWxkKHN0ckFyZWEpO1xudWwuYXBwZW5kQ2hpbGQoc3RySW5zdHIpO1xuYnV0dG9uVWwuYXBwZW5kQ2hpbGQoYnV0dG9uQ29tbWVudCk7XG51bC5hcHBlbmRDaGlsZChidXR0b25VbCk7XG5ib2FyZC5hcHBlbmRDaGlsZCh1bCk7XG5cbmxpa2VVbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0b3AnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGFkZExpa2UoZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudCk7XG4gIGNvbnN0IHN1bWxpa2UgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IHBhcnNlSW50KHN1bWxpa2UsIDEwKSArIDE7XG59KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lYWxDYXJkOyIsImNvbnN0IG1lYWxDb3VudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvYXRhbE1lYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsTWVhbHMnKTtcbiAgICB0b2F0YWxNZWFscy5pbm5lckhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZWFsSXRlbScpLmxlbmd0aDtcbiAgICByZXR1cm4gTnVtYmVyKHRvYXRhbE1lYWxzLmlubmVySFRNTCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZWFsQ291bnRlcjsiLCJpbXBvcnQgZGlzcGxheU1lYWxzIGZyb20gJy4vZ2V0TWVhbHMuanMnO1xuaW1wb3J0IG1lYWxDYXJkIGZyb20gJy4vbWVhbENhcmQuanMnO1xuaW1wb3J0IG1lYWxDb3VudGVyIGZyb20gJy4vbWVhbENvdW50ZXIuanMnO1xuXG5jb25zdCBVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvaURrUVRqdVFGUzdQZWltQUx1Y0gvbGlrZXMvJztcblxuY29uc3QgbWVhbERpc3BsYXkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICAgIGNvbnN0IGxpa2VzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRpc3BsYXlNZWFscygpO1xuICAgIGRhdGEubWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgICAgbGV0IGxpa2VOdW0gPSAwO1xuICAgICAgbGlrZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pdGVtX2lkID09PSBtZWFsLmlkTWVhbCkge1xuICAgICAgICAgIGxpa2VOdW0gPSBpdGVtLmxpa2VzO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbWVhbENhcmQoXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJNZWFsLFxuICAgICAgICAgICAgICAgIG1lYWwuc3RyQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJBcmVhLFxuICAgICAgICAgICAgICAgIG1lYWwuc3RySW5zdHJ1Y3Rpb25zLFxuICAgICAgICAgICAgICAgIG1lYWwuaWRNZWFsLFxuICAgICAgICAgICAgICAgIG1lYWwuc3RyTWVhbFRodW1iLFxuICAgICAgICAgICAgICAgIGxpa2VOdW0sXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJUYWdzLFxuICAgICAgICAgICAgICk7XG4gICAgfSk7XG4gICAgbWVhbENvdW50ZXIoKTtcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBtZWFsRGlzcGxheTsiLCJjb25zdCBVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvaURrUVRqdVFGUzdQZWltQUx1Y0gvbGlrZXMvJztcblxuY29uc3QgYWRkTGlrZSA9IGFzeW5jIChpZE1lYWwpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkTWVhbCxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAnYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luJzogJyonLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnOiAndHJ1ZScsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgZXhwb3J0IGRlZmF1bHQgYWRkTGlrZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=