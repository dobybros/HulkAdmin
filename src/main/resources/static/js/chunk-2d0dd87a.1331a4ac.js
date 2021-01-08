(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0dd87a"],{

/***/ "827a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      @d2-data-change=\"handleDataChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        },\n        {\n          title: '\u68C0\u67E5\u72B6\u6001\uFF08\u70B9\u51FB\u53EF\u4FEE\u6539\uFF09',\n          key: 'check',\n          component: {\n            name: 'my-tag',\n            props: {\n              myProps: '\u6211\u662F\u901A\u8FC7props\u4F20\u8FC7\u6765\u7684\u6570\u636E\uFF01'\n            }\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          check: true\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',\n          check: false\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',\n          check: true\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',\n          check: true\n        }\n      ]\n    }\n  },\n  methods: {\n    handleDataChange (data) {\n      console.log(data)\n    }\n  }\n}\n</script>");

/***/ })

}]);
//# sourceMappingURL=chunk-2d0dd87a.1331a4ac.js.map