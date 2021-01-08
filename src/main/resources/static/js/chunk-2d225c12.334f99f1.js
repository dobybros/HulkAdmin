(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d225c12"],{

/***/ "e66a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/store/ua/index.vue?vue&type=template&id=a8e4aa7e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('p',{staticClass:"d2-mt-0"},[_vm._v("useragent")]),_c('el-input',{attrs:{"value":_vm.uaData.ua}}),_c('p',[_vm._v("格式化数据 in vuex: state.d2admin.ua.data")]),_c('d2-highlight',{attrs:{"code":_vm.uaStr}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/playground/store/ua/index.vue?vue&type=template&id=a8e4aa7e&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/store/ua/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//

/* harmony default export */ var uavue_type_script_lang_js_ = ({
  computed: Object(objectSpread["a" /* default */])({}, Object(vuex_esm["e" /* mapState */])('d2admin/ua', {
    uaData: 'data'
  }), {
    uaStr: function uaStr() {
      var _this$uaData = this.uaData,
          browser = _this$uaData.browser,
          engine = _this$uaData.engine,
          os = _this$uaData.os,
          device = _this$uaData.device,
          cpu = _this$uaData.cpu;
      return JSON.stringify({
        browser: browser,
        engine: engine,
        os: os,
        device: device,
        cpu: cpu
      }, null, 2);
    }
  })
});
// CONCATENATED MODULE: ./src/views/demo/playground/store/ua/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var store_uavue_type_script_lang_js_ = (uavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/store/ua/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector

























/* harmony default export */ var uavue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/playground/store/ua/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/playground/store/ua/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var store_uavue_type_custom_index_0_blockType_vue_filename_injector = (uavue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/playground/store/ua/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  store_uavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof store_uavue_type_custom_index_0_blockType_vue_filename_injector === 'function') store_uavue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var ua = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d225c12.334f99f1.js.map