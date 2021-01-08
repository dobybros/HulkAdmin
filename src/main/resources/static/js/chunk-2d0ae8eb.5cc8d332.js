(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0ae8eb"],{

/***/ "0b25":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/log/log/index.vue?vue&type=template&id=13decb8a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("记录日志内容")]),_c('p',{staticClass:"d2-mt-0"},[_vm._v("在下方输入你要记录的日志，然后点击记录按钮")]),_c('el-input',{staticClass:"d2-mr-10",staticStyle:{"width":"200px"},attrs:{"placeholder":"日志内容"},model:{value:(_vm.text),callback:function ($$v) {_vm.text=$$v},expression:"text"}}),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleAdd}},[_vm._v("记录")]),_c('p',[_vm._v("此信息已经被记录在日志页面，并在页面右上\"日志按钮\"区域显示提示信息")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/playground/log/log/index.vue?vue&type=template&id=13decb8a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/log/log/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var logvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      text: 'some text'
    };
  },
  methods: {
    handleAdd: function handleAdd() {
      this.$log.push(this.text);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/playground/log/log/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var log_logvue_type_script_lang_js_ = (logvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/log/log/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector






























/* harmony default export */ var logvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/playground/log/log/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/playground/log/log/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var log_logvue_type_custom_index_0_blockType_vue_filename_injector = (logvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/playground/log/log/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  log_logvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof log_logvue_type_custom_index_0_blockType_vue_filename_injector === 'function') log_logvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var log = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0ae8eb.5cc8d332.js.map