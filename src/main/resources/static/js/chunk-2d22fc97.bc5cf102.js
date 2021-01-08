(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d22fc97"],{

/***/ "ea05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("96eb");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // 测试函数
      fn: {
        title: '函数',
        code: "{\n  \"name\": \"FairyEver\",\n  \"say\": function() {\n    return 'I AM ' + this.name\n  }\n}",
        json: {
          "name": "FairyEver",
          "say": function say() {
            return 'I AM ' + this.name;
          }
        },
        mocked: ''
      }
    };
  },
  methods: {
    fnMock: function fnMock() {
      this.fn.mocked = JSON.stringify(mockjs__WEBPACK_IMPORTED_MODULE_1___default.a.mock(this.fn.json), null, 2);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=chunk-2d22fc97.bc5cf102.js.map