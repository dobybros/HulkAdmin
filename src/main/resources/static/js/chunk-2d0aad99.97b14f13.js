(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0aad99"],{

/***/ "1389":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/mock/ajax.vue?vue&type=template&id=935d15a4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('el-button',{attrs:{"size":"mini","type":"primary"},on:{"click":_vm.ajax}},[_c('d2-icon',{attrs:{"name":"paper-plane"}}),_vm._v("\n      发送请求\n    ")],1)],1),_c('el-table',_vm._b({staticStyle:{"width":"100%"}},'el-table',_vm.table,false),_vm._l((_vm.table.columns),function(item,index){return _c('el-table-column',{key:index,attrs:{"prop":item.prop,"label":item.label}})}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/plugins/mock/ajax.vue?vue&type=template&id=935d15a4&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./src/plugin/axios/index.js
var axios = __webpack_require__("9bd2");

// CONCATENATED MODULE: ./src/api/demo.plugins.mocks.ajax.js

function PluginMocksAjax() {
  return Object(axios["a" /* default */])({
    url: '/demo/plugins/mock/ajax',
    method: 'get'
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/mock/ajax.vue?vue&type=script&lang=js&


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

/* harmony default export */ var ajaxvue_type_script_lang_js_ = ({
  name: 'demo-plugins-mock-ajax',
  data: function data() {
    return {
      table: {
        columns: [],
        data: [],
        size: 'mini',
        stripe: true,
        border: true
      }
    };
  },
  methods: {
    ajax: function ajax() {
      var _this = this;

      PluginMocksAjax().then(function (res) {
        _this.table.columns = Object.keys(res.list[0]).map(function (e) {
          return {
            label: e,
            prop: e
          };
        });
        _this.table.data = res.list;
      }).catch(function () {// 错误情况
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/plugins/mock/ajax.vue?vue&type=script&lang=js&
 /* harmony default export */ var mock_ajaxvue_type_script_lang_js_ = (ajaxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/mock/ajax.vue?vue&type=custom&index=0&blockType=vue-filename-injector


























































/* harmony default export */ var ajaxvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/plugins/mock/ajax.vue"
});

// CONCATENATED MODULE: ./src/views/demo/plugins/mock/ajax.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var mock_ajaxvue_type_custom_index_0_blockType_vue_filename_injector = (ajaxvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/plugins/mock/ajax.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mock_ajaxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof mock_ajaxvue_type_custom_index_0_blockType_vue_filename_injector === 'function') mock_ajaxvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var mock_ajax = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0aad99.97b14f13.js.map