(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-38b52e04"],{

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1093":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/components/layout/grid.vue?vue&type=template&id=46960234&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',{staticClass:"page",attrs:{"type":"full"}},[_c('d2-grid-layout',_vm._b({on:{"layout-updated":_vm.layoutUpdatedHandler}},'d2-grid-layout',_vm.layout,false),_vm._l((_vm.layout.layout),function(item,index){return _c('d2-grid-item',_vm._b({key:index,on:{"resize":_vm.resizeHandler,"move":_vm.moveHandler,"resized":_vm.resizedHandler,"moved":_vm.movedHandler}},'d2-grid-item',item,false),[_c('el-card',{staticClass:"page_card",attrs:{"shadow":"never"}},[_c('el-tag',{attrs:{"slot":"header","size":"mini","type":"info"},slot:"header"},[_vm._v("Card "+_vm._s(item.i))]),(item.i === '0')?[_c('div',{staticClass:"d2-mb"},[_vm._v("拖拽卡片调整位置")]),_c('div',{staticClass:"d2-mb"},[_vm._v("拖拽卡片右下角的手柄调整卡片大小")]),_c('div',{staticClass:"d2-mb"},[_vm._v("在控制台打印出数据变化")])]:_vm._e()],2)],1)}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/components/layout/grid.vue?vue&type=template&id=46960234&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/components/layout/grid.vue?vue&type=script&lang=js&

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
//
//
//
//
//
//
//
//
//
/* harmony default export */ var gridvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      layout: {
        layout: [{
          'x': 0,
          'y': 0,
          'w': 4,
          'h': 10,
          'i': '0'
        }, {
          'x': 4,
          'y': 0,
          'w': 2,
          'h': 5,
          'i': '1'
        }, {
          'x': 6,
          'y': 0,
          'w': 4,
          'h': 5,
          'i': '2'
        }, {
          'x': 10,
          'y': 0,
          'w': 2,
          'h': 10,
          'i': '3'
        }, {
          'x': 4,
          'y': 5,
          'w': 4,
          'h': 5,
          'i': '4'
        }, {
          'x': 8,
          'y': 5,
          'w': 2,
          'h': 5,
          'i': '5'
        }, {
          'x': 0,
          'y': 10,
          'w': 8,
          'h': 5,
          'i': '6'
        }, {
          'x': 8,
          'y': 10,
          'w': 4,
          'h': 5,
          'i': '7'
        }],
        colNum: 12,
        rowHeight: 30,
        isDraggable: true,
        isResizable: true,
        isMirrored: false,
        verticalCompact: true,
        margin: [10, 10],
        useCssTransforms: true
      }
    };
  },
  mounted: function mounted() {
    // 加载完成后显示提示
    this.showInfo();
  },
  methods: {
    log: function log() {
      var arg1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'log';

      for (var _len = arguments.length, logs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        logs[_key - 1] = arguments[_key];
      }

      if (logs.length === 0) {
        console.log(arg1);
      } else {
        console.group(arg1);
        logs.forEach(function (e) {
          console.log(e);
        });
        console.groupEnd();
      }
    },
    // 显示提示
    showInfo: function showInfo() {
      this.$notify({
        title: '提示',
        message: '你可以按住卡片拖拽改变位置；或者在每个卡片的右下角拖动，调整卡片大小'
      });
    },
    // 测试代码
    layoutUpdatedHandler: function layoutUpdatedHandler(newLayout) {
      console.group('layoutUpdatedHandler');
      newLayout.forEach(function (e) {
        console.log("{'x': ".concat(e.x, ", 'y': ").concat(e.y, ", 'w': ").concat(e.w, ", 'h': ").concat(e.h, ", 'i': '").concat(e.i, "'},"));
      });
      console.groupEnd();
    },
    resizeHandler: function resizeHandler(i, newH, newW) {
      this.log('resizeHandler', "i: ".concat(i, ", newH: ").concat(newH, ", newW: ").concat(newW));
    },
    moveHandler: function moveHandler(i, newX, newY) {
      this.log('moveHandler', "i: ".concat(i, ", newX: ").concat(newX, ", newY: ").concat(newY));
    },
    resizedHandler: function resizedHandler(i, newH, newW, newHPx, newWPx) {
      this.log('resizedHandler', "i: ".concat(i, ", newH: ").concat(newH, ", newW: ").concat(newW, ", newHPx: ").concat(newHPx, ", newWPx: ").concat(newWPx));
    },
    movedHandler: function movedHandler(i, newX, newY) {
      this.log('movedHandler', "i: ".concat(i, ", newX: ").concat(newX, ", newY: ").concat(newY));
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/components/layout/grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_gridvue_type_script_lang_js_ = (gridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/demo/components/layout/grid.vue?vue&type=style&index=0&id=46960234&lang=scss&scoped=true&
var gridvue_type_style_index_0_id_46960234_lang_scss_scoped_true_ = __webpack_require__("1c85");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/components/layout/grid.vue?vue&type=custom&index=0&blockType=vue-filename-injector
























































































































/* harmony default export */ var gridvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/components/layout/grid.vue"
});

// CONCATENATED MODULE: ./src/views/demo/components/layout/grid.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var layout_gridvue_type_custom_index_0_blockType_vue_filename_injector = (gridvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/components/layout/grid.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_gridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "46960234",
  null
  
)

/* custom blocks */

if (typeof layout_gridvue_type_custom_index_0_blockType_vue_filename_injector === 'function') layout_gridvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var grid = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1c85":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_grid_vue_vue_type_style_index_0_id_46960234_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0366");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_grid_vue_vue_type_style_index_0_id_46960234_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_grid_vue_vue_type_style_index_0_id_46960234_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_grid_vue_vue_type_style_index_0_id_46960234_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=chunk-38b52e04.fad3bd11.js.map