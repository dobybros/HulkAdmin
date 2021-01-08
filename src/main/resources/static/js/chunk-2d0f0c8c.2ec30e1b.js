(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0f0c8c"],{

/***/ "9e9c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/db/all/index.vue?vue&type=template&id=588152a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_c('el-alert',{attrs:{"type":"success","closable":false,"title":"这个页面展示的是全部数据的存储结构，包括系统区域和存储区域，涵盖所有用户，也就是整个 D2Admin 的数据存储结构"}})],1),_c('d2-highlight',{attrs:{"code":_vm.dbData}}),_c('template',{slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.load}},[_vm._v("\n      重新获取本地数据\n    ")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/playground/db/all/index.vue?vue&type=template&id=588152a2&

// EXTERNAL MODULE: ./src/libs/util.js + 3 modules
var util = __webpack_require__("c276");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/db/all/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var allvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      dbData: ''
    };
  },
  mounted: function mounted() {
    this.load();
  },
  methods: {
    load: function load() {
      this.dbData = JSON.stringify(util["a" /* default */].db.value(), null, 2);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/playground/db/all/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var db_allvue_type_script_lang_js_ = (allvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/db/all/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector





































/* harmony default export */ var allvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/playground/db/all/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/playground/db/all/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var db_allvue_type_custom_index_0_blockType_vue_filename_injector = (allvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/playground/db/all/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  db_allvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof db_allvue_type_custom_index_0_blockType_vue_filename_injector === 'function') db_allvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var db_all = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0f0c8c.2ec30e1b.js.map