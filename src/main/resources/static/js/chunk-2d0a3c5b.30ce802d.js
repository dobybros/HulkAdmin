(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0a3c5b"],{

/***/ "0434":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/import/xlsx.vue?vue&type=template&id=56a42114&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',{attrs:{"type":"card"}},[_c('template',{slot:"header"},[_vm._v("导入 xlsx")]),_c('div',{staticClass:"d2-mb"},[_c('el-button',{on:{"click":_vm.download}},[_c('d2-icon',{attrs:{"name":"download"}}),_vm._v("\n      下载演示 .xlsx 表格\n    ")],1)],1),_c('div',{staticClass:"d2-mb"},[_c('el-upload',{attrs:{"before-upload":_vm.handleUpload,"action":"default"}},[_c('el-button',{attrs:{"type":"success"}},[_c('d2-icon',{attrs:{"name":"file-o"}}),_vm._v("\n        选择要导入的 .xlsx 表格\n      ")],1)],1)],1),_c('el-table',_vm._b({},'el-table',_vm.table,false),_vm._l((_vm.table.columns),function(item,index){return _c('el-table-column',{key:index,attrs:{"prop":item.prop,"label":item.label}})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/plugins/import/xlsx.vue?vue&type=template&id=56a42114&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/import/xlsx.vue?vue&type=script&lang=js&
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
/* harmony default export */ var xlsxvue_type_script_lang_js_ = ({
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

      this.$import.xlsx(file).then(function (_ref) {
        var header = _ref.header,
            results = _ref.results;
        _this.table.columns = header.map(function (e) {
          return {
            label: e,
            prop: e
          };
        });
        _this.table.data = results;
      });
      return false;
    },
    download: function download() {
      window.location.href = 'http://fairyever.qiniudn.com/d2-admin-import-xlsx-demo.xlsx';
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/plugins/import/xlsx.vue?vue&type=script&lang=js&
 /* harmony default export */ var import_xlsxvue_type_script_lang_js_ = (xlsxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/import/xlsx.vue?vue&type=custom&index=0&blockType=vue-filename-injector































































/* harmony default export */ var xlsxvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/plugins/import/xlsx.vue"
});

// CONCATENATED MODULE: ./src/views/demo/plugins/import/xlsx.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var import_xlsxvue_type_custom_index_0_blockType_vue_filename_injector = (xlsxvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/plugins/import/xlsx.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  import_xlsxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof import_xlsxvue_type_custom_index_0_blockType_vue_filename_injector === 'function') import_xlsxvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var xlsx = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0a3c5b.30ce802d.js.map