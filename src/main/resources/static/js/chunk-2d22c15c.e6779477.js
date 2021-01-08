(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d22c15c"],{

/***/ "f271":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (instance) {
      return instance.$router.replace(JSON.parse(from.params.route));
    });
  },
  render: function render(h) {
    return h();
  }
});

/***/ })

}]);
//# sourceMappingURL=chunk-2d22c15c.e6779477.js.map