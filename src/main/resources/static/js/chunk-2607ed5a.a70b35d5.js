(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2607ed5a"],{

/***/ "6ed2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d17d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/better-scroll/base.vue?vue&type=template&id=6f59bd11&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("基础用法")]),_c('div',{ref:"wrapper",staticClass:"demo-bs-wrapper"},[_c('div',_vm._l((30),function(n){return _c('div',{key:n,staticClass:"demo-bs-item"},[_vm._v("n : "+_vm._s(n))])}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/plugins/better-scroll/base.vue?vue&type=template&id=6f59bd11&scoped=true&

// EXTERNAL MODULE: ./node_modules/better-scroll/dist/bscroll.esm.js
var bscroll_esm = __webpack_require__("1fba");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/better-scroll/base.vue?vue&type=script&lang=js&
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

/* harmony default export */ var basevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      BS: null
    };
  },
  mounted: function mounted() {
    this.scrollInit();
  },
  beforeDestroy: function beforeDestroy() {
    this.scrollDestroy();
  },
  methods: {
    scrollInit: function scrollInit() {
      this.BS = new bscroll_esm["a" /* default */](this.$refs.wrapper, {
        mouseWheel: true,
        click: true,
        scrollbar: {
          fade: true,
          interactive: false
        }
      });
    },
    scrollDestroy: function scrollDestroy() {
      if (this.BS) {
        this.BS.destroy();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/plugins/better-scroll/base.vue?vue&type=script&lang=js&
 /* harmony default export */ var better_scroll_basevue_type_script_lang_js_ = (basevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/demo/plugins/better-scroll/base.vue?vue&type=style&index=0&id=6f59bd11&lang=scss&scoped=true&
var basevue_type_style_index_0_id_6f59bd11_lang_scss_scoped_true_ = __webpack_require__("dff6");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/better-scroll/base.vue?vue&type=custom&index=0&blockType=vue-filename-injector

































































/* harmony default export */ var basevue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/plugins/better-scroll/base.vue"
});

// CONCATENATED MODULE: ./src/views/demo/plugins/better-scroll/base.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var better_scroll_basevue_type_custom_index_0_blockType_vue_filename_injector = (basevue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/plugins/better-scroll/base.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  better_scroll_basevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6f59bd11",
  null
  
)

/* custom blocks */

if (typeof better_scroll_basevue_type_custom_index_0_blockType_vue_filename_injector === 'function') better_scroll_basevue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var base = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "dff6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_base_vue_vue_type_style_index_0_id_6f59bd11_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6ed2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_base_vue_vue_type_style_index_0_id_6f59bd11_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_base_vue_vue_type_style_index_0_id_6f59bd11_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_base_vue_vue_type_style_index_0_id_6f59bd11_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=chunk-2607ed5a.a70b35d5.js.map