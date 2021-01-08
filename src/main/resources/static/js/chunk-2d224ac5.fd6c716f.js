(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d224ac5"],{

/***/ "e0ae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=template&id=4d24e76b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"cursor":"pointer"}},[_c('el-tag',{attrs:{"type":_vm.type},nativeOn:{"click":function($event){return _vm.handleClick($event)}}},[_vm._v(_vm._s(_vm.text))])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=template&id=4d24e76b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var MyTagvue_type_script_lang_js_ = ({
  props: {
    value: {
      type: Boolean,
      require: true
    }
  },
  computed: {
    type: function type() {
      return this.value ? 'success' : 'danger';
    },
    text: function text() {
      return this.value ? '是' : '否';
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('input', !this.value);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=script&lang=js&
 /* harmony default export */ var demo26_MyTagvue_type_script_lang_js_ = (MyTagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=custom&index=0&blockType=vue-filename-injector































/* harmony default export */ var MyTagvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo26/MyTag.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var demo26_MyTagvue_type_custom_index_0_blockType_vue_filename_injector = (MyTagvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/MyTag.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  demo26_MyTagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof demo26_MyTagvue_type_custom_index_0_blockType_vue_filename_injector === 'function') demo26_MyTagvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var MyTag = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d224ac5.fd6c716f.js.map