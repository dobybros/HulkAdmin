(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d20977c"],{

/***/ "a8d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/components/d2-ueditor/index.vue?vue&type=template&id=356a6694&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('vue-ueditor-wrap',{ref:"ueditor",attrs:{"config":_vm.config,"destroy":true,"init":_vm.init},model:{value:(_vm.currentValue),callback:function ($$v) {_vm.currentValue=$$v},expression:"currentValue"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/d2-ueditor/index.vue?vue&type=template&id=356a6694&

// CONCATENATED MODULE: ./src/components/d2-ueditor/ueditor.config.js
/* harmony default export */ var ueditor_config = ({
  UEDITOR_HOME_URL: '/lib/UEditor/',
  // 编辑器不自动被内容撑高
  autoHeightEnabled: false,
  // 初始容器高度
  initialFrameHeight: 240,
  // 初始容器宽度
  initialFrameWidth: '100%',
  // 关闭自动保存
  enableAutoSave: false
});
// CONCATENATED MODULE: ./src/components/d2-ueditor/button/d2admin.js
/* harmony default export */ var d2admin = ({
  name: 'd2admin',
  icon: './lib/UEditor/button-icon/d2admin.png',
  tip: 'D2Admin',
  handler: function handler(editor, name) {
    editor.execCommand('inserthtml', "<p><span style=\"border: 1px solid rgb(0, 0, 0); font-family: impact, chicago; color: rgb(127, 127, 127);\">https://github.com/d2-projects/</span><span style=\"border: 1px solid rgb(0, 0, 0); font-family: impact, chicago; background-color: rgb(23, 54, 93); color: rgb(255, 255, 255);\">d2-admin</span></p>");
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/components/d2-ueditor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
// 参考 https://github.com/HaoChuan9421/vue-ueditor-wrap


/* harmony default export */ var d2_ueditorvue_type_script_lang_js_ = ({
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      config: ueditor_config,
      currentValue: ''
    };
  },
  watch: {
    // 对外提供 v-model
    value: {
      handler: function handler(val) {
        if (this.currentValue !== val) {
          this.currentValue = val;
        }
      },
      immediate: true
    },
    // 对外提供 v-model
    currentValue: function currentValue(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    init: function init() {
      // 注册一个测试按钮
      this.$refs.ueditor.registerButton(d2admin);
    }
  }
});
// CONCATENATED MODULE: ./src/components/d2-ueditor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_d2_ueditorvue_type_script_lang_js_ = (d2_ueditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/components/d2-ueditor/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector




















































/* harmony default export */ var d2_ueditorvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/components/d2-ueditor/index.vue"
});

// CONCATENATED MODULE: ./src/components/d2-ueditor/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var components_d2_ueditorvue_type_custom_index_0_blockType_vue_filename_injector = (d2_ueditorvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/components/d2-ueditor/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_d2_ueditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof components_d2_ueditorvue_type_custom_index_0_blockType_vue_filename_injector === 'function') components_d2_ueditorvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var d2_ueditor = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d20977c.fde92807.js.map