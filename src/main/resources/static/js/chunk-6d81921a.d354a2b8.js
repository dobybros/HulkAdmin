(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-6d81921a","chunk-2d0b2c99"],{

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

/***/ "3fcf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/charts/list/candle/demo2/index.vue?vue&type=template&id=18e329e5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("显示 MA VOL")]),_c('div',{staticClass:"inner"},[_c('ve-candle',_vm._b({attrs:{"data":_vm.chartData,"settings":_vm.chartSettings}},'ve-candle',_vm.pubSetting,false))],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"更多示例和文档","link":"https://v-charts.js.org"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/charts/list/candle/demo2/index.vue?vue&type=template&id=18e329e5&scoped=true&

// EXTERNAL MODULE: ./src/views/demo/charts/list/_mixin/list.js
var list = __webpack_require__("2632");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/charts/list/candle/demo2/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var demo2vue_type_script_lang_js_ = ({
  mixins: [list["default"]],
  data: function data() {
    this.chartSettings = {
      showMA: true,
      showVol: true
    };
    return {
      chartData: {
        columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
        rows: [{
          '日期': '2004-01-05',
          open: 10411.85,
          close: 10544.07,
          lowest: 10411.85,
          highest: 10575.92,
          vol: 221290000
        }, {
          '日期': '2004-01-06',
          open: 10543.85,
          close: 10538.66,
          lowest: 10454.37,
          highest: 10584.07,
          vol: 191460000
        }, {
          '日期': '2004-01-07',
          open: 10535.46,
          close: 10529.03,
          lowest: 10432.12,
          highest: 10587.55,
          vol: 225490000
        }, {
          '日期': '2004-01-08',
          open: 10530.07,
          close: 10592.44,
          lowest: 10480.59,
          highest: 10651.99,
          vol: 237770000
        }, {
          '日期': '2004-01-09',
          open: 10589.25,
          close: 10458.89,
          lowest: 10420.52,
          highest: 10603.48,
          vol: 223250000
        }, {
          '日期': '2004-01-12',
          open: 10461.55,
          close: 10485.18,
          lowest: 10389.85,
          highest: 10543.03,
          vol: 197960000
        }, {
          '日期': '2004-01-13',
          open: 10485.18,
          close: 10427.18,
          lowest: 10341.19,
          highest: 10539.25,
          vol: 197310000
        }, {
          '日期': '2004-01-14',
          open: 10428.67,
          close: 10538.37,
          lowest: 10426.89,
          highest: 10573.85,
          vol: 186280000
        }, {
          '日期': '2004-01-15',
          open: 10534.52,
          close: 10553.85,
          lowest: 10454.52,
          highest: 10639.03,
          vol: 260090000
        }, {
          '日期': '2004-01-16',
          open: 10556.37,
          close: 10600.51,
          lowest: 10503.71,
          highest: 10666.88,
          vol: 254170000
        }, {
          '日期': '2004-01-20',
          open: 10601.42,
          close: 10528.66,
          lowest: 10447.92,
          highest: 10676.96,
          vol: 224300000
        }, {
          '日期': '2004-01-21',
          open: 10522.77,
          close: 10623.62,
          lowest: 10453.11,
          highest: 10665.72,
          vol: 214920000
        }, {
          '日期': '2004-01-22',
          open: 10624.22,
          close: 10623.18,
          lowest: 10545.03,
          highest: 10717.41,
          vol: 219720000
        }, {
          '日期': '2004-01-23',
          open: 10625.25,
          close: 10568.29,
          lowest: 10490.14,
          highest: 10691.77,
          vol: 234260000
        }, {
          '日期': '2004-01-26',
          open: 10568.12,
          close: 10702.51,
          lowest: 10510.44,
          highest: 10725.18,
          vol: 186170000
        }, {
          '日期': '2004-01-27',
          open: 10701.11,
          close: 10609.92,
          lowest: 10579.33,
          highest: 10748.81,
          vol: 206560000
        }, {
          '日期': '2004-01-28',
          open: 10610.07,
          close: 10468.37,
          lowest: 10412.44,
          highest: 10703.25,
          vol: 247660000
        }, {
          '日期': '2004-01-29',
          open: 10467.41,
          close: 10510.29,
          lowest: 10369.92,
          highest: 10611.56,
          vol: 273970000
        }, {
          '日期': '2004-01-30',
          open: 10510.22,
          close: 10488.07,
          lowest: 10385.56,
          highest: 10551.03,
          vol: 208990000
        }, {
          '日期': '2004-02-02',
          open: 10487.78,
          close: 10499.18,
          lowest: 10395.55,
          highest: 10614.44,
          vol: 224800000
        }, {
          '日期': '2004-02-03',
          open: 10499.48,
          close: 10505.18,
          lowest: 10414.15,
          highest: 10571.48,
          vol: 183810000
        }, {
          '日期': '2004-02-04',
          open: 10503.11,
          close: 10470.74,
          lowest: 10394.81,
          highest: 10567.85,
          vol: 227760000
        }, {
          '日期': '2004-02-05',
          open: 10469.33,
          close: 10495.55,
          lowest: 10399.92,
          highest: 10566.37,
          vol: 187810000
        }, {
          '日期': '2004-02-06',
          open: 10494.89,
          close: 10593.03,
          lowest: 10433.74,
          highest: 10634.81,
          vol: 182880000
        }, {
          '日期': '2004-02-09',
          open: 10592.41,
          close: 10579.03,
          lowest: 10433.72,
          highest: 10634.81,
          vol: 160720000
        }, {
          '日期': '2004-02-10',
          open: 10578.74,
          close: 10613.85,
          lowest: 10511.18,
          highest: 10667.03,
          vol: 160590000
        }, {
          '日期': '2004-02-11',
          open: 10605.48,
          close: 10737.72,
          lowest: 10561.55,
          highest: 10779.41,
          vol: 277850000
        }, {
          '日期': '2004-02-12',
          open: 10735.18,
          close: 10694.07,
          lowest: 10636.44,
          highest: 10775.03,
          vol: 197560000
        }, {
          '日期': '2004-02-13',
          open: 10696.22,
          close: 10627.85,
          lowest: 10578.66,
          highest: 10755.47,
          vol: 208340000
        }, {
          '日期': '2004-02-17',
          open: 10628.88,
          close: 10714.88,
          lowest: 10628.88,
          highest: 10762.07,
          vol: 169730000
        }, {
          '日期': '2004-02-18',
          open: 10706.68,
          close: 10671.99,
          lowest: 10623.62,
          highest: 10764.36,
          vol: 164370000
        }, {
          '日期': '2004-02-19',
          open: 10674.59,
          close: 10664.73,
          lowest: 10626.44,
          highest: 10794.95,
          vol: 219890000
        }, {
          '日期': '2004-02-20',
          open: 10666.29,
          close: 10619.03,
          lowest: 10559.11,
          highest: 10722.77,
          vol: 220560000
        }, {
          '日期': '2004-02-23',
          open: 10619.55,
          close: 10609.62,
          lowest: 10508.89,
          highest: 10711.84,
          vol: 229950000
        }, {
          '日期': '2004-02-24',
          open: 10609.55,
          close: 10566.37,
          lowest: 10479.33,
          highest: 10681.41,
          vol: 225670000
        }, {
          '日期': '2004-02-25',
          open: 10566.59,
          close: 10601.62,
          lowest: 10509.42,
          highest: 10660.73,
          vol: 192420000
        }, {
          '日期': '2004-02-26',
          open: 10598.14,
          close: 10580.14,
          lowest: 10493.71,
          highest: 10652.96,
          vol: 223230000
        }, {
          '日期': '2004-02-27',
          open: 10581.55,
          close: 10583.92,
          lowest: 10519.03,
          highest: 10689.55,
          vol: 200050000
        }]
      }
    };
  }
});
// CONCATENATED MODULE: ./src/views/demo/charts/list/candle/demo2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var candle_demo2vue_type_script_lang_js_ = (demo2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/demo/charts/list/candle/demo2/index.vue?vue&type=style&index=0&id=18e329e5&lang=scss&scoped=true&
var demo2vue_type_style_index_0_id_18e329e5_lang_scss_scoped_true_ = __webpack_require__("cbb6");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/charts/list/candle/demo2/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector



















































































/* harmony default export */ var demo2vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/charts/list/candle/demo2/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/charts/list/candle/demo2/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var candle_demo2vue_type_custom_index_0_blockType_vue_filename_injector = (demo2vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/charts/list/candle/demo2/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  candle_demo2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "18e329e5",
  null
  
)

/* custom blocks */

if (typeof candle_demo2vue_type_custom_index_0_blockType_vue_filename_injector === 'function') candle_demo2vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7836":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cbb6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_18e329e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7836");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_18e329e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_18e329e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_18e329e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=chunk-6d81921a.d354a2b8.js.map