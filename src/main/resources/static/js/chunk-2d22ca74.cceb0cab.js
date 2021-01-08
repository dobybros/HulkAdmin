(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d22ca74"],{

/***/ "f3c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/export/txt.vue?vue&type=template&id=8d8b8484&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',{attrs:{"type":"card"}},[_c('template',{slot:"header"},[_vm._v("导出文本")]),_c('el-input',{attrs:{"type":"textarea","autosize":{minRows: 2, maxRows: 4},"placeholder":"请输入内容 然后点击保存按钮导出文本文档"},model:{value:(_vm.text),callback:function ($$v) {_vm.text=$$v},expression:"text"}}),_c('div',{staticClass:"d2-mt"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.exportTxt}},[_c('d2-icon',{attrs:{"name":"download"}}),_vm._v("\n      保存为 txt\n    ")],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/plugins/export/txt.vue?vue&type=template&id=8d8b8484&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/export/txt.vue?vue&type=script&lang=js&
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
/* harmony default export */ var txtvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      text: ''
    };
  },
  methods: {
    exportTxt: function exportTxt() {
      var _this = this;

      // 校验是不是空
      if (this.text === '') {
        this.$message('虽然可以为空 但是出于体验不建议这样 还是写点东西吧');
        return;
      } // 导出


      this.$export.txt({
        text: this.text,
        title: '文本'
      }).then(function () {
        _this.$message('导出文本成功');
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/plugins/export/txt.vue?vue&type=script&lang=js&
 /* harmony default export */ var export_txtvue_type_script_lang_js_ = (txtvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/export/txt.vue?vue&type=custom&index=0&blockType=vue-filename-injector














































/* harmony default export */ var txtvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/plugins/export/txt.vue"
});

// CONCATENATED MODULE: ./src/views/demo/plugins/export/txt.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var export_txtvue_type_custom_index_0_blockType_vue_filename_injector = (txtvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/plugins/export/txt.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  export_txtvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof export_txtvue_type_custom_index_0_blockType_vue_filename_injector === 'function') export_txtvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var txt = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d22ca74.cceb0cab.js.map