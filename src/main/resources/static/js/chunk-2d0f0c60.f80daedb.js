(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0f0c60"],{

/***/ "9e97":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table13/index.vue?vue&type=template&id=44457c11&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData}},[_c('el-table-column',{attrs:{"prop":"date","label":"日期","sortable":"","width":"180","filters":[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}],"filter-method":_vm.filterHandler}}),_c('el-table-column',{attrs:{"prop":"name","label":"姓名","width":"180"}}),_c('el-table-column',{attrs:{"prop":"address","label":"地址","formatter":_vm.formatter}}),_c('el-table-column',{attrs:{"prop":"tag","label":"标签","width":"100","filters":[{ text: '家', value: '家' }, { text: '公司', value: '公司' }],"filter-method":_vm.filterTag,"filter-placement":"bottom-end"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-tag',{attrs:{"type":scope.row.tag === '家' ? 'primary' : 'success',"disable-transitions":""}},[_vm._v(_vm._s(scope.row.tag))])]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table13/index.vue?vue&type=template&id=44457c11&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table13/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var table13vue_type_script_lang_js_ = ({
  title: '筛选',
  index: 13,
  data: function data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '家'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
      }]
    };
  },
  methods: {
    formatter: function formatter(row, column) {
      return row.address;
    },
    filterTag: function filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler: function filterHandler(value, row, column) {
      var property = column['property'];
      return row[property] === value;
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table13/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_table13vue_type_script_lang_js_ = (table13vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table13/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector




















































































/* harmony default export */ var table13vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/element/data-table/components/table13/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table13/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var components_table13vue_type_custom_index_0_blockType_vue_filename_injector = (table13vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table13/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_table13vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof components_table13vue_type_custom_index_0_blockType_vue_filename_injector === 'function') components_table13vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var table13 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0f0c60.f80daedb.js.map