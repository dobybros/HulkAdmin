(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d225604"],{

/***/ "e3aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table10/index.vue?vue&type=template&id=9ba91806&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-table',{ref:"singleTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData,"highlight-current-row":""},on:{"current-change":_vm.handleCurrentChange}},[_c('el-table-column',{attrs:{"type":"index","width":"50"}}),_c('el-table-column',{attrs:{"property":"date","label":"日期","width":"120"}}),_c('el-table-column',{attrs:{"property":"name","label":"姓名","width":"120"}}),_c('el-table-column',{attrs:{"property":"address","label":"地址"}})],1),_c('div',{staticStyle:{"margin-top":"20px"}},[_c('el-button',{on:{"click":function($event){return _vm.setCurrent(_vm.tableData[1])}}},[_vm._v("选中第二行")]),_c('el-button',{on:{"click":function($event){return _vm.setCurrent()}}},[_vm._v("取消选择")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table10/index.vue?vue&type=template&id=9ba91806&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table10/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var table10vue_type_script_lang_js_ = ({
  title: '单选',
  index: 10,
  data: function data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      currentRow: null
    };
  },
  methods: {
    setCurrent: function setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table10/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_table10vue_type_script_lang_js_ = (table10vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table10/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector








































































/* harmony default export */ var table10vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/element/data-table/components/table10/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table10/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var components_table10vue_type_custom_index_0_blockType_vue_filename_injector = (table10vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table10/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_table10vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof components_table10vue_type_custom_index_0_blockType_vue_filename_injector === 'function') components_table10vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var table10 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d225604.b22eb8af.js.map