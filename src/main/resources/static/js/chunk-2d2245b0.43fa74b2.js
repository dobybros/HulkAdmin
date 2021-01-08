(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d2245b0"],{

/***/ "e07f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("96eb");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // 测试正则表达式
      regexp: {
        title: '正则表达式',
        code: "{\n  'regexp1': /[a-z][A-Z][0-9]/,\n  'regexp2': /wWsSdD/,\n  'regexp3': /d{5,10}/\n}",
        json: {
          'regexp1': /[a-z][A-Z][0-9]/,
          'regexp2': /\w\W\s\S\d\D/,
          'regexp3': /\d{5,10}/
        },
        mocked: ''
      }
    };
  },
  methods: {
    regexpMock: function regexpMock() {
      this.regexp.mocked = JSON.stringify(mockjs__WEBPACK_IMPORTED_MODULE_0___default.a.mock(this.regexp.json), null, 2);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=chunk-2d2245b0.43fa74b2.js.map