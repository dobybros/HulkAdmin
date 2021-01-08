(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-cfcce916","chunk-2d0b2c99"],{

/***/ "19e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_6e35f780_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f29b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_6e35f780_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_6e35f780_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_6e35f780_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2632":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pubSetting: {
        height: '100%'
      }
    };
  }
});

/***/ }),

/***/ "3ea2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/charts/list/sankey/demo1/index.vue?vue&type=template&id=6e35f780&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("一般")]),_c('div',{staticClass:"inner"},[_c('ve-sankey',_vm._b({attrs:{"data":_vm.chartData,"settings":_vm.chartSettings}},'ve-sankey',_vm.pubSetting,false))],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"更多示例和文档","link":"https://v-charts.js.org"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/charts/list/sankey/demo1/index.vue?vue&type=template&id=6e35f780&scoped=true&

// EXTERNAL MODULE: ./src/views/demo/charts/list/_mixin/list.js
var list = __webpack_require__("2632");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/charts/list/sankey/demo1/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var demo1vue_type_script_lang_js_ = ({
  mixins: [list["default"]],
  data: function data() {
    this.chartSettings = {
      links: [{
        source: '首页',
        target: '列表页a',
        value: 0.5
      }, {
        source: '首页',
        target: '列表页b',
        value: 0.5
      }, {
        source: '列表页a',
        target: '内容页a-1',
        value: 0.1
      }, {
        source: '列表页a',
        target: '内容页a-2',
        value: 0.4
      }, {
        source: '列表页b',
        target: '内容页b-1',
        value: 0.2
      }, {
        source: '列表页b',
        target: '内容页b-2',
        value: 0.3
      }]
    };
    return {
      chartData: {
        columns: ['页面', '访问量'],
        rows: [{
          '页面': '首页',
          '访问量': 100000
        }, {
          '页面': '列表页a',
          '访问量': 20000
        }, {
          '页面': '列表页b',
          '访问量': 80000
        }, {
          '页面': '内容页a-1',
          '访问量': 10000
        }, {
          '页面': '内容页a-2',
          '访问量': 10000
        }, {
          '页面': '内容页b-1',
          '访问量': 60000
        }, {
          '页面': '内容页b-2',
          '访问量': 20000
        }]
      }
    };
  }
});
// CONCATENATED MODULE: ./src/views/demo/charts/list/sankey/demo1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var sankey_demo1vue_type_script_lang_js_ = (demo1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/demo/charts/list/sankey/demo1/index.vue?vue&type=style&index=0&id=6e35f780&lang=scss&scoped=true&
var demo1vue_type_style_index_0_id_6e35f780_lang_scss_scoped_true_ = __webpack_require__("19e3");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/charts/list/sankey/demo1/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector


























































/* harmony default export */ var demo1vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/charts/list/sankey/demo1/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/charts/list/sankey/demo1/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var sankey_demo1vue_type_custom_index_0_blockType_vue_filename_injector = (demo1vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/charts/list/sankey/demo1/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sankey_demo1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6e35f780",
  null
  
)

/* custom blocks */

if (typeof sankey_demo1vue_type_custom_index_0_blockType_vue_filename_injector === 'function') sankey_demo1vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f29b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=chunk-cfcce916.59146524.js.map