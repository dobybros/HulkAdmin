(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0bfef2"],{

/***/ "4044":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/log/ajax/index.vue?vue&type=template&id=6dbeb916&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("Ajax 错误")]),_c('p',{staticClass:"d2-mt-0"},[_vm._v("请打开浏览器控制台，然后点击下面的按钮，尝试访问一个不存在的网络地址")]),_c('el-button',{attrs:{"type":"danger"},on:{"click":_vm.handleClick}},[_vm._v("请求错误的地址")]),_c('p',[_vm._v("此错误已经被记录在日志页面，并在页面右上\"日志按钮\"区域显示提示信息")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/playground/log/ajax/index.vue?vue&type=template&id=6dbeb916&

// EXTERNAL MODULE: ./src/plugin/axios/index.js
var axios = __webpack_require__("9bd2");

// CONCATENATED MODULE: ./src/api/demo.playground.log.ajax.js

function getInvalidUrl() {
  return Object(axios["a" /* default */])({
    url: '/invalid-url',
    method: 'get'
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/log/ajax/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ajaxvue_type_script_lang_js_ = ({
  methods: {
    handleClick: function handleClick() {
      getInvalidUrl();
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/playground/log/ajax/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var log_ajaxvue_type_script_lang_js_ = (ajaxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/log/ajax/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector





















/* harmony default export */ var ajaxvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/playground/log/ajax/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/playground/log/ajax/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var log_ajaxvue_type_custom_index_0_blockType_vue_filename_injector = (ajaxvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/playground/log/ajax/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  log_ajaxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof log_ajaxvue_type_custom_index_0_blockType_vue_filename_injector === 'function') log_ajaxvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var ajax = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0bfef2.e6a42e3f.js.map