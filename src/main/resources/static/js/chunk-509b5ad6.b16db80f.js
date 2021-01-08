(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-509b5ad6","chunk-2d0b2c99"],{

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

/***/ "53d1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "761b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_3862d06e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53d1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_3862d06e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_3862d06e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_3862d06e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7806":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/charts/list/map/demo1/index.vue?vue&type=template&id=3862d06e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("一般")]),_c('div',{staticClass:"inner"},[_c('ve-map',_vm._b({attrs:{"data":_vm.chartData,"settings":_vm.chartSettings}},'ve-map',_vm.pubSetting,false))],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"更多示例和文档","link":"https://v-charts.js.org"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/charts/list/map/demo1/index.vue?vue&type=template&id=3862d06e&scoped=true&

// EXTERNAL MODULE: ./src/views/demo/charts/list/_mixin/list.js
var list = __webpack_require__("2632");

// EXTERNAL MODULE: ./src/views/demo/charts/list/_data/china.json
var china = __webpack_require__("d914");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/charts/list/map/demo1/index.vue?vue&type=script&lang=js&
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
    return {
      chartSettings: {
        mapOrigin: china
      },
      chartData: {
        columns: ['位置', '税收', '人口', '面积'],
        rows: [{
          '位置': '吉林',
          '税收': 123,
          '人口': 123,
          '面积': 92134
        }, {
          '位置': '北京',
          '税收': 1223,
          '人口': 2123,
          '面积': 29234
        }, {
          '位置': '上海',
          '税收': 2123,
          '人口': 1243,
          '面积': 94234
        }, {
          '位置': '浙江',
          '税收': 4123,
          '人口': 5123,
          '面积': 29234
        }]
      }
    };
  }
});
// CONCATENATED MODULE: ./src/views/demo/charts/list/map/demo1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var map_demo1vue_type_script_lang_js_ = (demo1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/demo/charts/list/map/demo1/index.vue?vue&type=style&index=0&id=3862d06e&lang=scss&scoped=true&
var demo1vue_type_style_index_0_id_3862d06e_lang_scss_scoped_true_ = __webpack_require__("761b");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/charts/list/map/demo1/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector

















































/* harmony default export */ var demo1vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/charts/list/map/demo1/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/charts/list/map/demo1/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var map_demo1vue_type_custom_index_0_blockType_vue_filename_injector = (demo1vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/charts/list/map/demo1/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  map_demo1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3862d06e",
  null
  
)

/* custom blocks */

if (typeof map_demo1vue_type_custom_index_0_blockType_vue_filename_injector === 'function') map_demo1vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo1 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-509b5ad6.b16db80f.js.map