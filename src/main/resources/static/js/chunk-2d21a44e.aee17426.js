(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d21a44e"],{

/***/ "bb91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div style=\"cursor: pointer\">\n    <el-tag :type=\"type\" @click.native=\"handleClick\">{{ text }}</el-tag>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    value: {\n      type: Boolean,\n      require: true\n    },\n    // \u672C\u884C\u7684\u6240\u6709\u6570\u636E\uFF0C\u6B64\u5B57\u6BB5\u4E0D\u9700\u8981\u989D\u5916\u914D\u7F6E\n    scope: {\n      default: null\n    },\n    // \u901A\u8FC7 component \u4E2D props \u5B57\u6BB5\u4F20\u8FC7\u6765\u7684\u6570\u636E\uFF0C\u6B64\u5B57\u6BB5\u9700\u8981\u5148\u5728 component \u4E2D\u914D\u7F6E\n    myProps: {\n      default: null\n    }\n  },\n  computed: {\n    type () {\n      return this.value ? 'success' : 'danger'\n    },\n    text () {\n      if (this.scope.$index === 1) {\n        return this.myProps\n      } else if (this.scope.$index === 3) {\n        return '\u901A\u8FC7scope\u62FF\u5230\u4E86\u5F53\u524D\u884C\u65E5\u671F\uFF1A' + this.scope.row.date\n      }\n      return this.value ? '\u662F' : '\u5426'\n    }\n  },\n  mounted () {\n    console.log(this.scope)\n    console.log(this.myProps)\n  },\n  methods: {\n    handleClick () {\n      this.$emit('input', !this.value)\n    }\n  }\n}\n</script>");

/***/ })

}]);
//# sourceMappingURL=chunk-2d21a44e.aee17426.js.map