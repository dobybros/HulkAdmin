(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0b6e6d"],{

/***/ "1ead":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/import/csv.vue?vue&type=template&id=8b4ca2a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',{attrs:{"type":"card"}},[_c('template',{slot:"header"},[_vm._v("导入 csv")]),_c('div',{staticClass:"d2-mb"},[_c('el-button',{on:{"click":_vm.download}},[_c('d2-icon',{attrs:{"name":"download"}}),_vm._v("\n      下载演示 .csv 表格\n    ")],1)],1),_c('div',{staticClass:"d2-mb"},[_c('el-upload',{attrs:{"before-upload":_vm.handleUpload,"action":"default"}},[_c('el-button',{attrs:{"type":"success"}},[_c('d2-icon',{attrs:{"name":"file-o"}}),_vm._v("\n        选择要导入的 .csv 表格\n      ")],1)],1)],1),_c('el-table',_vm._b({},'el-table',_vm.table,false),_vm._l((_vm.table.columns),function(item,index){return _c('el-table-column',{key:index,attrs:{"prop":item.prop,"label":item.label}})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/plugins/import/csv.vue?vue&type=template&id=8b4ca2a0&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/import/csv.vue?vue&type=script&lang=js&


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
/* harmony default export */ var csvvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      table: {
        columns: [],
        data: [],
        size: 'mini',
        stripe: true,
        border: true
      }
    };
  },
  methods: {
    handleUpload: function handleUpload(file) {
      var _this = this;

      this.$import.csv(file).then(function (res) {
        _this.table.columns = Object.keys(res.data[0]).map(function (e) {
          return {
            label: e,
            prop: e
          };
        });
        _this.table.data = res.data;
      });
      return false;
    },
    download: function download() {
      window.location.href = 'http://fairyever.qiniudn.com/d2-admin-import-csv-demo.csv';
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/plugins/import/csv.vue?vue&type=script&lang=js&
 /* harmony default export */ var import_csvvue_type_script_lang_js_ = (csvvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/import/csv.vue?vue&type=custom&index=0&blockType=vue-filename-injector





























































/* harmony default export */ var csvvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/plugins/import/csv.vue"
});

// CONCATENATED MODULE: ./src/views/demo/plugins/import/csv.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var import_csvvue_type_custom_index_0_blockType_vue_filename_injector = (csvvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/plugins/import/csv.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  import_csvvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof import_csvvue_type_custom_index_0_blockType_vue_filename_injector === 'function') import_csvvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var csv = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0b6e6d.88976b23.js.map