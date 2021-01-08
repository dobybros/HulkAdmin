(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-3b6a299e","chunk-2d0abc4e","chunk-744c9c7b"],{

/***/ "15ec3":
/***/ (function(module, exports) {

module.exports = "你可以点击每个演示卡片右上角的刷新按钮检查每次 `mock` 不同的结果\n\n官方演示页面 [http://mockjs.com/examples.html](http://mockjs.com/examples.html)\n\n官方 `Wiki` [https://github.com/nuysoft/Mock/wiki/Getting-Started](https://github.com/nuysoft/Mock/wiki/Getting-Started)"

/***/ }),

/***/ "174f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ([// 字符串
{
  title: "占位符演示",
  json: {
    "name": {
      first: '@FIRST',
      middle: '@FIRST',
      last: '@LAST',
      full: '@first @middle @last'
    }
  }
}]);

/***/ }),

/***/ "880e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/mock/dpd.vue?vue&type=template&id=10e7292c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("数据占位符")]),_c('d2-markdown',{staticClass:"d2-mb",attrs:{"source":_vm.doc}}),_vm._l((_vm.settingDPD),function(item,index){return _c('d2-demo-mock-card',{key:index,staticStyle:{"margin-bottom":"0px !important"},attrs:{"title":item.title,"code":JSON.stringify(item.json, null, 2),"mock":_vm.mockResult[index]},on:{"reload":function($event){return _vm.doMock(index)}}})})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/plugins/mock/dpd.vue?vue&type=template&id=10e7292c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");

// EXTERNAL MODULE: ./node_modules/mockjs/dist/mock.js
var mock = __webpack_require__("96eb");
var mock_default = /*#__PURE__*/__webpack_require__.n(mock);

// EXTERNAL MODULE: ./src/views/demo/plugins/mock/data/settingDPD.js
var settingDPD = __webpack_require__("174f");

// EXTERNAL MODULE: ./src/views/demo/plugins/mock/md/doc.md
var doc = __webpack_require__("15ec3");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/mock/dpd.vue?vue&type=script&lang=js&

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





/* harmony default export */ var dpdvue_type_script_lang_js_ = ({
  components: {
    'd2-demo-mock-card': function d2DemoMockCard() {
      return __webpack_require__.e(/* import() */ "chunk-2f62945f").then(__webpack_require__.bind(null, "1c81"));
    }
  },
  data: function data() {
    return {
      mockResult: [],
      settingDPD: settingDPD["default"],
      settingDPDClone: Object(lodash["cloneDeep"])(settingDPD["default"]),
      doc: doc_default.a
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.settingDPD.forEach(function (e, i) {
      _this.doMock(i);
    });
  },
  methods: {
    doMock: function doMock() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      vue_runtime_esm["default"].set(this.mockResult, n, JSON.stringify(mock_default.a.mock(this.settingDPDClone[n].json), null, 2));
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/plugins/mock/dpd.vue?vue&type=script&lang=js&
 /* harmony default export */ var mock_dpdvue_type_script_lang_js_ = (dpdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/mock/dpd.vue?vue&type=custom&index=0&blockType=vue-filename-injector
















































/* harmony default export */ var dpdvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/plugins/mock/dpd.vue"
});

// CONCATENATED MODULE: ./src/views/demo/plugins/mock/dpd.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var mock_dpdvue_type_custom_index_0_blockType_vue_filename_injector = (dpdvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/plugins/mock/dpd.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mock_dpdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof mock_dpdvue_type_custom_index_0_blockType_vue_filename_injector === 'function') mock_dpdvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var dpd = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-3b6a299e.d4d74595.js.map