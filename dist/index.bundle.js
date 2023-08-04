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
  gap: 2.2rem;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1.5rem;
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

.nav-item:hover {
  transform: scale(1.3);
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

.catlablel {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
  text-align: left;
}

.arealabel {
  font-size: 1.2rem;
  font-weight: 500;
  font-family: "Raleway", sans-serif;
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

#submit {
  font-family: 'Poppins', serif;
  font-weight: lighter;
  cursor: pointer;
}

.open-popup {
  position: fixed;
  z-index: 100;
  top: 1rem;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 95%;
  backdrop-filter: blur(80px);
  transition: height 1s ease;
  padding: 1.5rem;
}

.close-popup {
  margin-left: 75.5%;
  margin-top: 3.5%;
  position: fixed;
  border-radius: 5px;
}

.comments-board {
  padding-top: 0.2rem;
  padding-left: 2rem;
  margin: 3% auto;
  display: flex;
  border: 5px solid grey;
  border-radius: 10px;
  overflow: auto;
  flex-direction: column;
  width: 850px;
  height: 500px;
  background-color: #a3cfbb;
  
}

.comments-board #imgThumb {
  width: 300px;
  height: 300px;
  border-radius: 1rem;
  order: -1;
  margin: 1rem;
}

.comments-board button {
  width: 25%;
  padding: 1rem;
  border-radius: 5px;
  margin-left: 10%;
}

.comments-board h4 {
  font-size: 1.5rem;
  margin: 1rem;
}

.comments-board h5 {
  font-size: 1.2rem;
}

.comments-board input {
  margin: 1% 10%;
  width: 25rem;;
  height: 30px;
  border-radius: 5px;
  padding: .5rem;
  border-color: #fed136;
  box-shadow: none;
}

.comments-board #comment {
  height: 6rem;
}

.divComments {
  border-radius: 5px;
  padding: 0.1rem;
  margin: 1rem;
  background-color: white;
}

.comment {
  padding: 0.2rem;
  margin: 0.8rem;
  background-color: rgb(206, 121, 138, 0.4);
}

.imgCancel {
  height: 2rem;
  width: 2rem;
  position: fixed;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(282deg) brightness(104%) contrast(106%);
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0.2rem;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,700&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: \"Lora\", serif;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #dfdfdf;\r\n}\r\n\r\n.app-header {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.navbar-logo {\r\n  height: auto;\r\n  margin-left: 1.5rem;\r\n  padding: 18px;\r\n  padding-left: 18rem;\r\n  list-style: none;\r\n  background-image: url('../src/assets/images/logo.png');\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  height: 65px;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem;\r\n  background-color: #2d2c38;\r\n  border: 2px solid #dc3545;\r\n  flex-direction: row;\r\n}\r\n\r\n.navbar-nav {\r\n  padding: 0.5rem;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 2.2rem;\r\n  flex-direction: row;\r\n  padding-left: 1rem;\r\n  padding-right: 1.5rem;\r\n  list-style: none;\r\n  box-sizing: border-box;\r\n  position: sticky;\r\n  top: 0;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link {\r\n  color: rgba(255, 255, 255, 0.85);\r\n  font-size: 0.9rem;\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.navbar-nav > li.nav-item > a.nav-link:hover,\r\n.navbar-nav > li.nav-item > a.nav-link:focus {\r\n  color: #f05f40;\r\n}\r\n\r\n.nav-item:hover {\r\n  transform: scale(1.3);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nmain {\r\n  margin-top: 5em;\r\n  min-height: 75vh;\r\n}\r\n\r\n.meals-card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: transparent;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .meals-card {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    gap: 0;\r\n    margin-left: 1rem;\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  .meals-card::after {\r\n    content: '';\r\n    flex: auto;\r\n  }\r\n}\r\n\r\n.mealItem {\r\n  margin: 1rem;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  border: 2px solid darkgray;\r\n  border-radius: 8px;\r\n  background-color: #fff;\r\n  gap: 1rem;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  .mealItem {\r\n    flex-direction: column;\r\n    margin: 1rem 0.5rem;\r\n    padding: 1rem 0.5rem;\r\n    width: 44%;\r\n    justify-content: flex-start;\r\n    gap: 0;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 992px) {\r\n  .mealItem {\r\n    width: 30%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .mealItem {\r\n    width: 23%;\r\n  }\r\n}\r\n\r\n.strUl {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-weight: bold;\r\n  font-size: large;\r\n}\r\n\r\n.likeUl {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 1.2rem;\r\n  margin-bottom: 0.1rem;\r\n  padding-bottom: 0.1rem;\r\n}\r\n\r\n.thumb {\r\n  height: 220px;\r\n  width: 220px;\r\n  border-radius: 1rem;\r\n  align-self: center;\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0.1rem;\r\n}\r\n\r\n.thumb:hover {\r\n  filter: drop-shadow(0 0 0.75rem crimson);\r\n  transform: scale(1.2);\r\n}\r\n\r\n.catlablel {\r\n  font-size: 1.2rem;\r\n  font-weight: 500;\r\n  font-family: \"Raleway\", sans-serif;\r\n  text-align: left;\r\n}\r\n\r\n.arealabel {\r\n  font-size: 1.2rem;\r\n  font-weight: 500;\r\n  font-family: \"Raleway\", sans-serif;\r\n}\r\n\r\n.buttonDiv {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.button {\r\n  background-color: #dc3dcb;\r\n  border: 1px solid #000;\r\n  border-radius: 3px;\r\n  width: 9rem;\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  margin-left: 4.5rem;\r\n  margin-top: 1rem;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n  background-color: #19f5aa;\r\n  transition: 1s;\r\n}\r\n\r\n.imgLike {\r\n  height: 1.5rem;\r\n}\r\n\r\n.imgLike:hover {\r\n  cursor: pointer;\r\n  filter: invert(8%) sepia(98%) saturate(6374%) hue-rotate(246deg) brightness(111%) contrast(147%);\r\n}\r\n\r\n.imgLike:active {\r\n  filter: invert(42%) sepia(98%) saturate(7352%) hue-rotate(354deg) brightness(98%) contrast(124%);\r\n}\r\n\r\nspan {\r\n  margin: 1rem;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\np {\r\n  margin: 0.2rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n#submit {\r\n  font-family: 'Poppins', serif;\r\n  font-weight: lighter;\r\n  cursor: pointer;\r\n}\r\n\r\n.open-popup {\r\n  position: fixed;\r\n  z-index: 100;\r\n  top: 1rem;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  opacity: 95%;\r\n  backdrop-filter: blur(80px);\r\n  transition: height 1s ease;\r\n  padding: 1.5rem;\r\n}\r\n\r\n.close-popup {\r\n  margin-left: 75.5%;\r\n  margin-top: 3.5%;\r\n  position: fixed;\r\n  border-radius: 5px;\r\n}\r\n\r\n.comments-board {\r\n  padding-top: 0.2rem;\r\n  padding-left: 2rem;\r\n  margin: 3% auto;\r\n  display: flex;\r\n  border: 5px solid grey;\r\n  border-radius: 10px;\r\n  overflow: auto;\r\n  flex-direction: column;\r\n  width: 850px;\r\n  height: 500px;\r\n  background-color: #a3cfbb;\r\n  \r\n}\r\n\r\n.comments-board #imgThumb {\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 1rem;\r\n  order: -1;\r\n  margin: 1rem;\r\n}\r\n\r\n.comments-board button {\r\n  width: 25%;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  margin-left: 10%;\r\n}\r\n\r\n.comments-board h4 {\r\n  font-size: 1.5rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.comments-board h5 {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.comments-board input {\r\n  margin: 1% 10%;\r\n  width: 25rem;;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  padding: .5rem;\r\n  border-color: #fed136;\r\n  box-shadow: none;\r\n}\r\n\r\n.comments-board #comment {\r\n  height: 6rem;\r\n}\r\n\r\n.divComments {\r\n  border-radius: 5px;\r\n  padding: 0.1rem;\r\n  margin: 1rem;\r\n  background-color: white;\r\n}\r\n\r\n.comment {\r\n  padding: 0.2rem;\r\n  margin: 0.8rem;\r\n  background-color: rgb(206, 121, 138, 0.4);\r\n}\r\n\r\n.imgCancel {\r\n  height: 2rem;\r\n  width: 2rem;\r\n  position: fixed;\r\n  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(282deg) brightness(104%) contrast(106%);\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 1rem;\r\n  margin: 0.2rem;\r\n}\r\n\r\nsection,\r\nfooter {\r\n  padding: 2em;\r\n}\r\n\r\n.author {\r\n  font-weight: 900;\r\n  font-family: \"Raleway\", sans-serif;\r\n  color: #3763f4;\r\n}\r\n\r\nfooter {\r\n  border-top: solid 2px #dc3545;\r\n  display: flex;\r\n  justify-content: center;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  position: fixed;\r\n  font-weight: 900;\r\n  padding: 1.5rem;\r\n  background-color: #2d2c38;\r\n  color: rgba(255, 255, 255, 0.85);\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _likes_x_circle_fill_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../likes/x-circle-fill.svg */ "./src/modules/likes/x-circle-fill.svg");
/* harmony import */ var _likes_addLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../likes/addLike.js */ "./src/modules/likes/addLike.js");
/* harmony import */ var _mealPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mealPopup.js */ "./src/modules/mealPopup.js");





const myLike = new Image();
myLike.src = _likes_heart_gif__WEBPACK_IMPORTED_MODULE_0__;
myLike.classList = 'imgLike';

const myCancel = new Image();
myCancel.src = _likes_x_circle_fill_svg__WEBPACK_IMPORTED_MODULE_1__;
myCancel.classList = ('imgCancel');

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
strCat.innerHTML = `<span class='catlablel'>Catgory:- ${category}</span>`;
strArea.innerHTML = `<span class='arealabel'>Area:- ${area}</span>`;
strInstr.innerHTML = `<p class='hide'>${instructions}</p>`;
likeUl.innerHTML = `<span class='hide'>${id}</span><img class='imgLike' src='${_likes_heart_gif__WEBPACK_IMPORTED_MODULE_0__}'><ul class="stop">${likeNum}</ul><p class="stop">Likes</p>`;
buttonComment.innerHTML = `<ul>Comments</ul><span class='hide'>${id}</span>`;

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

  (0,_likes_addLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target.previousElementSibling.textContent);
  const sumlike = e.target.nextElementSibling.textContent;
  e.target.nextElementSibling.textContent = parseInt(sumlike, 10) + 1;
});

const overlay = document.querySelector('.open-popup');
const cancel = document.querySelector('.close-popup');
cancel.appendChild(myCancel);

buttonComment.addEventListener('click', (e) => {
  overlay.style.display = 'block';
  (0,_mealPopup_js__WEBPACK_IMPORTED_MODULE_3__.mealPopup)(e.target.nextElementSibling.textContent);
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.querySelector('.comments-board').innerHTML = '';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
  document.querySelector('.comments-board').innerHTML = '';
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

/***/ "./src/modules/mealPopup.js":
/*!**********************************!*\
  !*** ./src/modules/mealPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commentArray: () => (/* binding */ commentArray),
/* harmony export */   commentCard: () => (/* binding */ commentCard),
/* harmony export */   commentCounter: () => (/* binding */ commentCounter),
/* harmony export */   commentsCard: () => (/* binding */ commentsCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getComments: () => (/* binding */ getComments),
/* harmony export */   mealPopup: () => (/* binding */ mealPopup),
/* harmony export */   postComment: () => (/* binding */ postComment)
/* harmony export */ });
/* harmony import */ var _cards_getMeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards/getMeals.js */ "./src/modules/cards/getMeals.js");


const commentCard = (name, date, comment) => {
  const comments = document.querySelector('.divComments');
  const div = document.createElement('div');
  div.className = 'comment';
  div.innerHTML = `<h5>${date}<span>:-</span> ${name} ${comment}</h5>`;
  comments.appendChild(div);
};

const getComments = async (idMeal) => {
  let url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iDkQTjuQFS7PeimALucH/comments?item_id=';
  url += idMeal;
  const response = await fetch(url);
  const data = await response.json(url);
  return data;
};

const commentCounter = () => {
  const commentCount = document.getElementsByClassName('comment').length;
  return commentCount;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

const commentArray = async (idMeal) => {
  const counter = document.querySelector('.divCounter');
  const div = document.createElement('div');
  div.className = 'counting';
  const data = await getComments(idMeal);
  data.forEach((comment) => {
    commentCard(comment.username, comment.creation_date, comment.comment);
  });
  counter.innerHTML = '';
  div.innerHTML = `<h4>Comments(${commentCounter()})</h4>`;
  counter.appendChild(div);
};

const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iDkQTjuQFS7PeimALucH/comments';

const postComment = async (name, comment, idMeal) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: idMeal,
      username: name,
      // eslint-disable-next-line object-shorthand
      comment: comment,
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

const commentsCard = (title, tag, imageThumb, id, category, area, instructions) => {
  const commentsBoard = document.querySelector('.comments-board');

  const imgThumb = document.createElement('img');
  imgThumb.id = 'imgThumb';
  imgThumb.src = imageThumb;

  const form = document.createElement('form');

  const divText = document.createElement('div');
  divText.className = 'divText';
  const divCounter = document.createElement('div');
  divCounter.className = 'divCounter';
  const divTable = document.createElement('div');
  divTable.className = 'divComments';

  if (!tag) {
    tag = '';
  }

  divText.innerHTML = `<h1>${title}</h1>
                        <h3>${area} ${category} ${tag}</h3>
                        <p>${instructions}</p>`;

  const inputName = document.createElement('input');
  inputName.id = 'name';
  inputName.className = 'remove';
  inputName.placeholder = 'Your Name';
  inputName.required = true;

  const inputComment = document.createElement('input');
  inputComment.id = 'comment';
  inputComment.placeholder = 'Your Insights';
  inputComment.required = true;

  const submitButton = document.createElement('button');
  submitButton.id = 'submit';
  submitButton.textContent = 'SUBMIT';

  const inputs = [inputName, inputComment, submitButton];

  for (let i = 0; i < inputs.length; i += 1) {
    form.appendChild(inputs[i]);
  }

  commentsBoard.appendChild(imgThumb);
  commentsBoard.appendChild(divText);
  divText.appendChild(form);
  divText.appendChild(divCounter);
  commentsBoard.appendChild(divTable);
  commentArray(id);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userName = document.getElementById('name');
    const comment = document.getElementById('comment');
    postComment(userName.value, comment.value, id);
    userName.value = 'Please Wait';
    comment.value = 'Please Wait';
    setTimeout(() => {
      userName.value = '';
      comment.value = '';
      divTable.innerHTML = '';
      commentArray(id);
    }, 2000);
  });
};

const mealPopup = async (idMeal) => {
  const data = await (0,_cards_getMeals_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  data.meals.forEach((meal) => {
    if (meal.idMeal === idMeal) {
      commentsCard(
                    meal.strMeal,
                    meal.strTags,
                    meal.strMealThumb,
                    meal.idMeal,
                     meal.strCategory,
                    meal.strArea,
                    meal.strInstructions,
                    );
    }
  });
};




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

/***/ }),

/***/ "./src/modules/likes/x-circle-fill.svg":
/*!*********************************************!*\
  !*** ./src/modules/likes/x-circle-fill.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f3133fe1cd1ea4a07d2.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxrSUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw2R0FBNkcsa0JBQWtCO0FBQy9ILDZHQUE2RyxtQ0FBbUMsTUFBTSxvQkFBb0I7QUFDMUsseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9B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RUEsa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0EscUJBQXFCLDhEQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL2NhcmRzL2dldE1lYWxzLmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvY2FyZHMvbWVhbENhcmQuanMiLCJ3ZWJwYWNrOi8vIGFwaS1iYXNlZC13ZWJhcHAvLi9zcmMvbW9kdWxlcy9jYXJkcy9tZWFsQ291bnRlci5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL2NhcmRzL21lYWxEaXNwbGF5LmpzIiwid2VicGFjazovLyBhcGktYmFzZWQtd2ViYXBwLy4vc3JjL21vZHVsZXMvbGlrZXMvYWRkTGlrZS5qcyIsIndlYnBhY2s6Ly8gYXBpLWJhc2VkLXdlYmFwcC8uL3NyYy9tb2R1bGVzL21lYWxQb3B1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmE6d2dodEA0MDA7NzAwJmZhbWlseT1SYWxld2F5Oml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJMb3JhXCIsIHNlcmlmO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxufVxyXG5cclxuLmFwcC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG59XHJcblxyXG4ubmF2YmFyLWxvZ28ge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDE4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyYzM4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYzM1NDU7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMi4ycmVtO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYS5uYXYtbGluazpob3ZlcixcclxuLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEubmF2LWxpbms6Zm9jdXMge1xyXG4gIGNvbG9yOiAjZjA1ZjQwO1xyXG59XHJcblxyXG4ubmF2LWl0ZW06aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgbWluLWhlaWdodDogNzV2aDtcclxufVxyXG5cclxuLm1lYWxzLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAubWVhbHMtY2FyZCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICAubWVhbHMtY2FyZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBmbGV4OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLm1lYWxJdGVtIHtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZGFya2dyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1lYWxJdGVtIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDFyZW0gMC41cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XHJcbiAgICB3aWR0aDogNDQlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5tZWFsSXRlbSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAubWVhbEl0ZW0ge1xyXG4gICAgd2lkdGg6IDIzJTtcclxuICB9XHJcbn1cclxuXHJcbi5zdHJVbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmxpa2VVbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xyXG59XHJcblxyXG4udGh1bWIge1xyXG4gIGhlaWdodDogMjIwcHg7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XHJcbn1cclxuXHJcbi50aHVtYjpob3ZlciB7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSBjcmltc29uKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5jYXRsYWJsZWwge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hcmVhbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYnV0dG9uRGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzNkY2I7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgd2lkdGg6IDlyZW07XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWxlZnQ6IDQuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOWY1YWE7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbi5pbWdMaWtlIHtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLmltZ0xpa2U6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmaWx0ZXI6IGludmVydCg4JSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg2Mzc0JSkgaHVlLXJvdGF0ZSgyNDZkZWcpIGJyaWdodG5lc3MoMTExJSkgY29udHJhc3QoMTQ3JSk7XHJcbn1cclxuXHJcbi5pbWdMaWtlOmFjdGl2ZSB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoNDIlKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDczNTIlKSBodWUtcm90YXRlKDM1NGRlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDEyNCUpO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDAuMnJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbiNzdWJtaXQge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm9wZW4tcG9wdXAge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgdG9wOiAxcmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvcGFjaXR5OiA5NSU7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDgwcHgpO1xyXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG5cclxuLmNsb3NlLXBvcHVwIHtcclxuICBtYXJnaW4tbGVmdDogNzUuNSU7XHJcbiAgbWFyZ2luLXRvcDogMy41JTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uY29tbWVudHMtYm9hcmQge1xyXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIG1hcmdpbjogMyUgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA4NTBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2NmYmI7XHJcbiAgXHJcbn1cclxuXHJcbi5jb21tZW50cy1ib2FyZCAjaW1nVGh1bWIge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgb3JkZXI6IC0xO1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLmNvbW1lbnRzLWJvYXJkIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG4uY29tbWVudHMtYm9hcmQgaDQge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLmNvbW1lbnRzLWJvYXJkIGg1IHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmNvbW1lbnRzLWJvYXJkIGlucHV0IHtcclxuICBtYXJnaW46IDElIDEwJTtcclxuICB3aWR0aDogMjVyZW07O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmVkMTM2O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb21tZW50cy1ib2FyZCAjY29tbWVudCB7XHJcbiAgaGVpZ2h0OiA2cmVtO1xyXG59XHJcblxyXG4uZGl2Q29tbWVudHMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAwLjFyZW07XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgcGFkZGluZzogMC4ycmVtO1xyXG4gIG1hcmdpbjogMC44cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDEyMSwgMTM4LCAwLjQpO1xyXG59XHJcblxyXG4uaW1nQ2FuY2VsIHtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyODJkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTA2JSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW46IDAuMnJlbTtcclxufVxyXG5cclxuc2VjdGlvbixcclxuZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyZW07XHJcbn1cclxuXHJcbi5hdXRob3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMzc2M2Y0O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDJweCAjZGMzNTQ1O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJjMzg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsTUFBTTtFQUNSO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdHQUFnRztBQUNsRzs7QUFFQTtFQUNFLGdHQUFnRztBQUNsRzs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZiw4RkFBOEY7RUFDOUYsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGdDQUFnQztBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOndnaHRANDAwOzcwMCZmYW1pbHk9UmFsZXdheTppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9yYVxcXCIsIHNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDMwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxvZ28ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDE4cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE4cmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJjMzg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGMzNTQ1O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1uYXYge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIuMnJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rIHtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmhvdmVyLFxcclxcbi5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhLm5hdi1saW5rOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiAjZjA1ZjQwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW06aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA1ZW07XFxyXFxuICBtaW4taGVpZ2h0OiA3NXZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWVhbHMtY2FyZCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVhbHMtY2FyZDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgZmxleDogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxJdGVtIHtcXHJcXG4gIG1hcmdpbjogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGRhcmtncmF5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWxJdGVtIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxyXFxuICAgIHdpZHRoOiA0NCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAubWVhbEl0ZW0ge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcclxcbiAgLm1lYWxJdGVtIHtcXHJcXG4gICAgd2lkdGg6IDIzJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN0clVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5saWtlVWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMS4ycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRodW1iIHtcXHJcXG4gIGhlaWdodDogMjIwcHg7XFxyXFxuICB3aWR0aDogMjIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGh1bWI6aG92ZXIge1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSBjcmltc29uKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhdGxhYmxlbCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmFyZWFsYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uRGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjM2RjYjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB3aWR0aDogOXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tbGVmdDogNC41cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTlmNWFhO1xcclxcbiAgdHJhbnNpdGlvbjogMXM7XFxyXFxufVxcclxcblxcclxcbi5pbWdMaWtlIHtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nTGlrZTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmaWx0ZXI6IGludmVydCg4JSkgc2VwaWEoOTglKSBzYXR1cmF0ZSg2Mzc0JSkgaHVlLXJvdGF0ZSgyNDZkZWcpIGJyaWdodG5lc3MoMTExJSkgY29udHJhc3QoMTQ3JSk7XFxyXFxufVxcclxcblxcclxcbi5pbWdMaWtlOmFjdGl2ZSB7XFxyXFxuICBmaWx0ZXI6IGludmVydCg0MiUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoNzM1MiUpIGh1ZS1yb3RhdGUoMzU0ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoMTI0JSk7XFxyXFxufVxcclxcblxcclxcbnNwYW4ge1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgbWFyZ2luOiAwLjJyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm9wZW4tcG9wdXAge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgdG9wOiAxcmVtO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG9wYWNpdHk6IDk1JTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4MHB4KTtcXHJcXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDc1LjUlO1xcclxcbiAgbWFyZ2luLXRvcDogMy41JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWJvYXJkIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICBtYXJnaW46IDMlIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgZ3JleTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogODUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzY2ZiYjtcXHJcXG4gIFxcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYm9hcmQgI2ltZ1RodW1iIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgb3JkZXI6IC0xO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYm9hcmQgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWJvYXJkIGg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtYm9hcmQgaDUge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1ib2FyZCBpbnB1dCB7XFxyXFxuICBtYXJnaW46IDElIDEwJTtcXHJcXG4gIHdpZHRoOiAyNXJlbTs7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZlZDEzNjtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1ib2FyZCAjY29tbWVudCB7XFxyXFxuICBoZWlnaHQ6IDZyZW07XFxyXFxufVxcclxcblxcclxcbi5kaXZDb21tZW50cyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjFyZW07XFxyXFxuICBtYXJnaW46IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgcGFkZGluZzogMC4ycmVtO1xcclxcbiAgbWFyZ2luOiAwLjhyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAxMjEsIDEzOCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ0NhbmNlbCB7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyODJkZWcpIGJyaWdodG5lc3MoMTA0JSkgY29udHJhc3QoMTA2JSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgbWFyZ2luOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24sXFxyXFxuZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvciB7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjMzc2M2Y0O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYm9yZGVyLXRvcDogc29saWQgMnB4ICNkYzM1NDU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmMzODtcXHJcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG1lYWxEaXNwbGF5IGZyb20gJy4vbW9kdWxlcy9jYXJkcy9tZWFsRGlzcGxheS5qcyc7XG5cbm1lYWxEaXNwbGF5KCk7XG4iLCJjb25zdCBVUkwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/cz0nO1xuXG5jb25zdCBkaXNwbGF5TWVhbHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChVUkwpO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TWVhbHM7IiwiaW1wb3J0IGxpa2UgZnJvbSAnLi4vbGlrZXMvaGVhcnQuZ2lmJztcbmltcG9ydCBjbG9zZUljb24gZnJvbSAnLi4vbGlrZXMveC1jaXJjbGUtZmlsbC5zdmcnO1xuaW1wb3J0IGFkZExpa2UgZnJvbSAnLi4vbGlrZXMvYWRkTGlrZS5qcyc7XG5pbXBvcnQgeyBtZWFsUG9wdXAgfSBmcm9tICcuLi9tZWFsUG9wdXAuanMnO1xuXG5jb25zdCBteUxpa2UgPSBuZXcgSW1hZ2UoKTtcbm15TGlrZS5zcmMgPSBsaWtlO1xubXlMaWtlLmNsYXNzTGlzdCA9ICdpbWdMaWtlJztcblxuY29uc3QgbXlDYW5jZWwgPSBuZXcgSW1hZ2UoKTtcbm15Q2FuY2VsLnNyYyA9IGNsb3NlSWNvbjtcbm15Q2FuY2VsLmNsYXNzTGlzdCA9ICgnaW1nQ2FuY2VsJyk7XG5cbmNvbnN0IG1lYWxDYXJkID0gKHRpdGxlLCBjYXRlZ29yeSwgYXJlYSwgaW5zdHJ1Y3Rpb25zLCBpZCwgaW1hZ2VJZCwgbGlrZU51bSkgPT4ge1xuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMtY2FyZCcpO1xuXG5jb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG51bC5jbGFzc05hbWUgPSAnbWVhbEl0ZW0nO1xuXG5jb25zdCBzdHJVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5zdHJVbC5jbGFzc05hbWUgPSAnc3RyVWwnO1xuXG5jb25zdCBzdHJDYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuc3RyQ2F0LmNsYXNzTmFtZSA9ICdzdHJDYXQnO1xuXG5jb25zdCBzdHJBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbnN0ckFyZWEuY2xhc3NOYW1lID0gJ3N0ckFyZWEnO1xuXG5jb25zdCBzdHJJbnN0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5zdHJJbnN0ci5jbGFzc05hbWUgPSAnc3RySW5zdHInO1xuXG5jb25zdCBsaWtlVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xubGlrZVVsLmNsYXNzTmFtZSA9ICdsaWtlVWwnO1xuXG5jb25zdCBidXR0b25VbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGJ1dHRvblVsLmNsYXNzTmFtZSA9ICdidXR0b25VbCc7XG5cbmNvbnN0IGJ1dHRvbkNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBidXR0b25Db21tZW50LmNsYXNzTmFtZSA9ICdidXR0b24nO1xuXG51bC5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz0ndGh1bWInIHNyYz0nJHtpbWFnZUlkfSc+YDtcbnN0clVsLmlubmVySFRNTCA9IGA8c3Bhbj4ke3RpdGxlfTwvc3Bhbj5gO1xuc3RyQ2F0LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz0nY2F0bGFibGVsJz5DYXRnb3J5Oi0gJHtjYXRlZ29yeX08L3NwYW4+YDtcbnN0ckFyZWEuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPSdhcmVhbGFiZWwnPkFyZWE6LSAke2FyZWF9PC9zcGFuPmA7XG5zdHJJbnN0ci5pbm5lckhUTUwgPSBgPHAgY2xhc3M9J2hpZGUnPiR7aW5zdHJ1Y3Rpb25zfTwvcD5gO1xubGlrZVVsLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz0naGlkZSc+JHtpZH08L3NwYW4+PGltZyBjbGFzcz0naW1nTGlrZScgc3JjPScke2xpa2V9Jz48dWwgY2xhc3M9XCJzdG9wXCI+JHtsaWtlTnVtfTwvdWw+PHAgY2xhc3M9XCJzdG9wXCI+TGlrZXM8L3A+YDtcbmJ1dHRvbkNvbW1lbnQuaW5uZXJIVE1MID0gYDx1bD5Db21tZW50czwvdWw+PHNwYW4gY2xhc3M9J2hpZGUnPiR7aWR9PC9zcGFuPmA7XG5cbnN0clVsLmFwcGVuZENoaWxkKGxpa2VVbCk7XG51bC5hcHBlbmRDaGlsZChzdHJVbCk7XG51bC5hcHBlbmRDaGlsZChzdHJDYXQpO1xudWwuYXBwZW5kQ2hpbGQoc3RyQXJlYSk7XG51bC5hcHBlbmRDaGlsZChzdHJJbnN0cik7XG5idXR0b25VbC5hcHBlbmRDaGlsZChidXR0b25Db21tZW50KTtcbnVsLmFwcGVuZENoaWxkKGJ1dHRvblVsKTtcbmJvYXJkLmFwcGVuZENoaWxkKHVsKTtcblxubGlrZVVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RvcCcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWRkTGlrZShlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50KTtcbiAgY29uc3Qgc3VtbGlrZSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcbiAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gcGFyc2VJbnQoc3VtbGlrZSwgMTApICsgMTtcbn0pO1xuXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW4tcG9wdXAnKTtcbmNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wb3B1cCcpO1xuY2FuY2VsLmFwcGVuZENoaWxkKG15Q2FuY2VsKTtcblxuYnV0dG9uQ29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIG1lYWxQb3B1cChlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQpO1xufSk7XG5cbmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMtYm9hcmQnKS5pbm5lckhUTUwgPSAnJztcbn0pO1xuXG5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWJvYXJkJykuaW5uZXJIVE1MID0gJyc7XG59KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lYWxDYXJkOyIsImNvbnN0IG1lYWxDb3VudGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvYXRhbE1lYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsTWVhbHMnKTtcbiAgICB0b2F0YWxNZWFscy5pbm5lckhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZWFsSXRlbScpLmxlbmd0aDtcbiAgICByZXR1cm4gTnVtYmVyKHRvYXRhbE1lYWxzLmlubmVySFRNTCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZWFsQ291bnRlcjsiLCJpbXBvcnQgZGlzcGxheU1lYWxzIGZyb20gJy4vZ2V0TWVhbHMuanMnO1xuaW1wb3J0IG1lYWxDYXJkIGZyb20gJy4vbWVhbENhcmQuanMnO1xuaW1wb3J0IG1lYWxDb3VudGVyIGZyb20gJy4vbWVhbENvdW50ZXIuanMnO1xuXG5jb25zdCBVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvaURrUVRqdVFGUzdQZWltQUx1Y0gvbGlrZXMvJztcblxuY29uc3QgbWVhbERpc3BsYXkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICAgIGNvbnN0IGxpa2VzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRpc3BsYXlNZWFscygpO1xuICAgIGRhdGEubWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgICAgbGV0IGxpa2VOdW0gPSAwO1xuICAgICAgbGlrZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pdGVtX2lkID09PSBtZWFsLmlkTWVhbCkge1xuICAgICAgICAgIGxpa2VOdW0gPSBpdGVtLmxpa2VzO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbWVhbENhcmQoXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJNZWFsLFxuICAgICAgICAgICAgICAgIG1lYWwuc3RyQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJBcmVhLFxuICAgICAgICAgICAgICAgIG1lYWwuc3RySW5zdHJ1Y3Rpb25zLFxuICAgICAgICAgICAgICAgIG1lYWwuaWRNZWFsLFxuICAgICAgICAgICAgICAgIG1lYWwuc3RyTWVhbFRodW1iLFxuICAgICAgICAgICAgICAgIGxpa2VOdW0sXG4gICAgICAgICAgICAgICAgbWVhbC5zdHJUYWdzLFxuICAgICAgICAgICAgICk7XG4gICAgfSk7XG4gICAgbWVhbENvdW50ZXIoKTtcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBtZWFsRGlzcGxheTsiLCJjb25zdCBVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvaURrUVRqdVFGUzdQZWltQUx1Y0gvbGlrZXMvJztcblxuY29uc3QgYWRkTGlrZSA9IGFzeW5jIChpZE1lYWwpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkTWVhbCxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAnYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luJzogJyonLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnOiAndHJ1ZScsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgZXhwb3J0IGRlZmF1bHQgYWRkTGlrZTsiLCJpbXBvcnQgZGlzcGxheU1lYWxzIGZyb20gJy4vY2FyZHMvZ2V0TWVhbHMuanMnO1xuXG5jb25zdCBjb21tZW50Q2FyZCA9IChuYW1lLCBkYXRlLCBjb21tZW50KSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkNvbW1lbnRzJyk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NOYW1lID0gJ2NvbW1lbnQnO1xuICBkaXYuaW5uZXJIVE1MID0gYDxoNT4ke2RhdGV9PHNwYW4+Oi08L3NwYW4+ICR7bmFtZX0gJHtjb21tZW50fTwvaDU+YDtcbiAgY29tbWVudHMuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGlkTWVhbCkgPT4ge1xuICBsZXQgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2lEa1FUanVRRlM3UGVpbUFMdWNIL2NvbW1lbnRzP2l0ZW1faWQ9JztcbiAgdXJsICs9IGlkTWVhbDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbih1cmwpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGNvbW1lbnRDb3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBjb21tZW50Q291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb21tZW50JykubGVuZ3RoO1xuICByZXR1cm4gY29tbWVudENvdW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudENvdW50ZXI7XG5cbmNvbnN0IGNvbW1lbnRBcnJheSA9IGFzeW5jIChpZE1lYWwpID0+IHtcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXZDb3VudGVyJyk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NOYW1lID0gJ2NvdW50aW5nJztcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENvbW1lbnRzKGlkTWVhbCk7XG4gIGRhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgIGNvbW1lbnRDYXJkKGNvbW1lbnQudXNlcm5hbWUsIGNvbW1lbnQuY3JlYXRpb25fZGF0ZSwgY29tbWVudC5jb21tZW50KTtcbiAgfSk7XG4gIGNvdW50ZXIuaW5uZXJIVE1MID0gJyc7XG4gIGRpdi5pbm5lckhUTUwgPSBgPGg0PkNvbW1lbnRzKCR7Y29tbWVudENvdW50ZXIoKX0pPC9oND5gO1xuICBjb3VudGVyLmFwcGVuZENoaWxkKGRpdik7XG59O1xuXG5jb25zdCBVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvaURrUVRqdVFGUzdQZWltQUx1Y0gvY29tbWVudHMnO1xuXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChuYW1lLCBjb21tZW50LCBpZE1lYWwpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZE1lYWwsXG4gICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3Qtc2hvcnRoYW5kXG4gICAgICBjb21tZW50OiBjb21tZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAnYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luJzogJyonLFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJzogJ3RydWUnLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGNvbW1lbnRzQ2FyZCA9ICh0aXRsZSwgdGFnLCBpbWFnZVRodW1iLCBpZCwgY2F0ZWdvcnksIGFyZWEsIGluc3RydWN0aW9ucykgPT4ge1xuICBjb25zdCBjb21tZW50c0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWJvYXJkJyk7XG5cbiAgY29uc3QgaW1nVGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nVGh1bWIuaWQgPSAnaW1nVGh1bWInO1xuICBpbWdUaHVtYi5zcmMgPSBpbWFnZVRodW1iO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgY29uc3QgZGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZUZXh0LmNsYXNzTmFtZSA9ICdkaXZUZXh0JztcbiAgY29uc3QgZGl2Q291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZDb3VudGVyLmNsYXNzTmFtZSA9ICdkaXZDb3VudGVyJztcbiAgY29uc3QgZGl2VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2VGFibGUuY2xhc3NOYW1lID0gJ2RpdkNvbW1lbnRzJztcblxuICBpZiAoIXRhZykge1xuICAgIHRhZyA9ICcnO1xuICB9XG5cbiAgZGl2VGV4dC5pbm5lckhUTUwgPSBgPGgxPiR7dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke2FyZWF9ICR7Y2F0ZWdvcnl9ICR7dGFnfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2luc3RydWN0aW9uc308L3A+YDtcblxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dE5hbWUuaWQgPSAnbmFtZSc7XG4gIGlucHV0TmFtZS5jbGFzc05hbWUgPSAncmVtb3ZlJztcbiAgaW5wdXROYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgTmFtZSc7XG4gIGlucHV0TmFtZS5yZXF1aXJlZCA9IHRydWU7XG5cbiAgY29uc3QgaW5wdXRDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXRDb21tZW50LmlkID0gJ2NvbW1lbnQnO1xuICBpbnB1dENvbW1lbnQucGxhY2Vob2xkZXIgPSAnWW91ciBJbnNpZ2h0cyc7XG4gIGlucHV0Q29tbWVudC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ1dHRvbi5pZCA9ICdzdWJtaXQnO1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU1VCTUlUJztcblxuICBjb25zdCBpbnB1dHMgPSBbaW5wdXROYW1lLCBpbnB1dENvbW1lbnQsIHN1Ym1pdEJ1dHRvbl07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0c1tpXSk7XG4gIH1cblxuICBjb21tZW50c0JvYXJkLmFwcGVuZENoaWxkKGltZ1RodW1iKTtcbiAgY29tbWVudHNCb2FyZC5hcHBlbmRDaGlsZChkaXZUZXh0KTtcbiAgZGl2VGV4dC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgZGl2VGV4dC5hcHBlbmRDaGlsZChkaXZDb3VudGVyKTtcbiAgY29tbWVudHNCb2FyZC5hcHBlbmRDaGlsZChkaXZUYWJsZSk7XG4gIGNvbW1lbnRBcnJheShpZCk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQnKTtcbiAgICBwb3N0Q29tbWVudCh1c2VyTmFtZS52YWx1ZSwgY29tbWVudC52YWx1ZSwgaWQpO1xuICAgIHVzZXJOYW1lLnZhbHVlID0gJ1BsZWFzZSBXYWl0JztcbiAgICBjb21tZW50LnZhbHVlID0gJ1BsZWFzZSBXYWl0JztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHVzZXJOYW1lLnZhbHVlID0gJyc7XG4gICAgICBjb21tZW50LnZhbHVlID0gJyc7XG4gICAgICBkaXZUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIGNvbW1lbnRBcnJheShpZCk7XG4gICAgfSwgMjAwMCk7XG4gIH0pO1xufTtcblxuY29uc3QgbWVhbFBvcHVwID0gYXN5bmMgKGlkTWVhbCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZGlzcGxheU1lYWxzKCk7XG4gIGRhdGEubWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgIGlmIChtZWFsLmlkTWVhbCA9PT0gaWRNZWFsKSB7XG4gICAgICBjb21tZW50c0NhcmQoXG4gICAgICAgICAgICAgICAgICAgIG1lYWwuc3RyTWVhbCxcbiAgICAgICAgICAgICAgICAgICAgbWVhbC5zdHJUYWdzLFxuICAgICAgICAgICAgICAgICAgICBtZWFsLnN0ck1lYWxUaHVtYixcbiAgICAgICAgICAgICAgICAgICAgbWVhbC5pZE1lYWwsXG4gICAgICAgICAgICAgICAgICAgICBtZWFsLnN0ckNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICBtZWFsLnN0ckFyZWEsXG4gICAgICAgICAgICAgICAgICAgIG1lYWwuc3RySW5zdHJ1Y3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuIG1lYWxQb3B1cCwgY29tbWVudHNDYXJkLCBwb3N0Q29tbWVudCwgY29tbWVudEFycmF5LCBjb21tZW50Q291bnRlciwgZ2V0Q29tbWVudHMsIGNvbW1lbnRDYXJkLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==