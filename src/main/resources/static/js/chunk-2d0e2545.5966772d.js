(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0e2545"],{

/***/ "7ddf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div style=\"cursor: pointer\">\n    <el-tag :type=\"type\" @click.native=\"handleClick\">{{ text }}</el-tag>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    value: {\n      type: Boolean,\n      require: true\n    }\n  },\n  computed: {\n    type () {\n      return this.value ? 'success' : 'danger'\n    },\n    text () {\n      return this.value ? '\u662F' : '\u5426'\n    }\n  },\n  methods: {\n    handleClick () {\n      this.$emit('input', !this.value)\n    }\n  }\n}\n</script>");

/***/ })

}]);
//# sourceMappingURL=chunk-2d0e2545.5966772d.js.map