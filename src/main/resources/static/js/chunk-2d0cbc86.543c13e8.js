(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0cbc86"],{

/***/ "4aad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table14/index.vue?vue&type=template&id=2cf7b4f2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData}},[_c('el-table-column',{attrs:{"label":"日期","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('i',{staticClass:"el-icon-time"}),_c('span',{staticStyle:{"margin-left":"10px"}},[_vm._v(_vm._s(scope.row.date))])]}}])}),_c('el-table-column',{attrs:{"label":"姓名","width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top"}},[_c('p',[_vm._v("姓名: "+_vm._s(scope.row.name))]),_c('p',[_vm._v("住址: "+_vm._s(scope.row.address))]),_c('div',{staticClass:"name-wrapper",attrs:{"slot":"reference"},slot:"reference"},[_c('el-tag',{attrs:{"size":"medium"}},[_vm._v(_vm._s(scope.row.name))])],1)])]}}])}),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){return _vm.handleEdit(scope.$index, scope.row)}}},[_vm._v("编辑")]),_c('el-button',{attrs:{"size":"mini","type":"danger"},on:{"click":function($event){return _vm.handleDelete(scope.$index, scope.row)}}},[_vm._v("删除")])]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table14/index.vue?vue&type=template&id=2cf7b4f2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table14/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//
/* harmony default export */ var table14vue_type_script_lang_js_ = ({
  title: '自定义列模板',
  index: 14,
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
      }]
    };
  },
  methods: {
    handleEdit: function handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete: function handleDelete(index, row) {
      console.log(index, row);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table14/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_table14vue_type_script_lang_js_ = (table14vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table14/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector












































































/* harmony default export */ var table14vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/element/data-table/components/table14/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table14/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var components_table14vue_type_custom_index_0_blockType_vue_filename_injector = (table14vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table14/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_table14vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof components_table14vue_type_custom_index_0_blockType_vue_filename_injector === 'function') components_table14vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var table14 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0cbc86.543c13e8.js.map