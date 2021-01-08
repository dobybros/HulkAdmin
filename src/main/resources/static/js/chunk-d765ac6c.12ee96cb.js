(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-d765ac6c"],{

/***/ "362c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/layout/header-aside/components/contextmenu/index.vue?vue&type=template&id=e36854b4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.flag),expression:"flag"}],staticClass:"d2-contextmenu",style:(_vm.style)},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layout/header-aside/components/contextmenu/index.vue?vue&type=template&id=e36854b4&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/layout/header-aside/components/contextmenu/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
/* harmony default export */ var contextmenuvue_type_script_lang_js_ = ({
  name: 'd2-contextmenu',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },
  computed: {
    flag: {
      get: function get() {
        if (this.visible) {
          // 注册全局监听事件 [ 目前只考虑鼠标解除触发 ]
          window.addEventListener('mousedown', this.watchContextmenu);
        }

        return this.visible;
      },
      set: function set(newVal) {
        this.$emit('update:visible', newVal);
      }
    },
    style: function style() {
      return {
        left: this.x + 'px',
        top: this.y + 'px',
        display: this.visible ? 'block' : 'none '
      };
    }
  },
  methods: {
    watchContextmenu: function watchContextmenu(event) {
      if (!this.$el.contains(event.target) || event.button !== 0) this.flag = false;
      window.removeEventListener('mousedown', this.watchContextmenu);
    }
  },
  mounted: function mounted() {
    // 将菜单放置到body下
    document.querySelector('body').appendChild(this.$el);
  }
});
// CONCATENATED MODULE: ./src/layout/header-aside/components/contextmenu/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_contextmenuvue_type_script_lang_js_ = (contextmenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/header-aside/components/contextmenu/index.vue?vue&type=style&index=0&lang=css&
var contextmenuvue_type_style_index_0_lang_css_ = __webpack_require__("a887");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/layout/header-aside/components/contextmenu/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector









































































/* harmony default export */ var contextmenuvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/layout/header-aside/components/contextmenu/index.vue"
});

// CONCATENATED MODULE: ./src/layout/header-aside/components/contextmenu/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var components_contextmenuvue_type_custom_index_0_blockType_vue_filename_injector = (contextmenuvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/layout/header-aside/components/contextmenu/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_contextmenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof components_contextmenuvue_type_custom_index_0_blockType_vue_filename_injector === 'function') components_contextmenuvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var contextmenu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5a87":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a887":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5a87");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=chunk-d765ac6c.12ee96cb.js.map