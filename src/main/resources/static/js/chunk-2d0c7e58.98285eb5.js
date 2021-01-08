(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0c7e58"],{

/***/ "5326":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/js-cookie/index.vue?vue&type=template&id=bf210e22&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_c('div',{staticClass:"d2-mb"},[_vm._v("Cookie 读写")]),_c('el-alert',{attrs:{"title":"建议","type":"warning","description":"建议使用 util 内的 cookies 对象，这样会在存储和读取时统一增加前缀，方便对 cookie 统一管理","show-icon":""}})],1),_c('p',{staticClass:"d2-mt-0"},[_vm._v("基本读写删")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.set('demo-user-name', 'demo-user')}}},[_vm._v("set('demo-user-name', 'normalValue')")]),_c('el-button',{attrs:{"type":"info"},on:{"click":function($event){return _vm.get('demo-user-name')}}},[_vm._v("get('demo-user-name')")]),_c('el-button',{attrs:{"type":"error"},on:{"click":function($event){return _vm.remove('demo-user-name')}}},[_vm._v("remove('demo-user-name')")]),_c('p',[_vm._v("设置有效期")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.setExpires('demo-user-pwd', '123456789', 1)}}},[_vm._v("设置 'demo-user-pwd' 有效期为一天")]),_c('el-button',{attrs:{"type":"info"},on:{"click":function($event){return _vm.get('demo-user-pwd')}}},[_vm._v("get('demo-user-pwd')")]),_c('el-button',{attrs:{"type":"error"},on:{"click":function($event){return _vm.remove('demo-user-pwd')}}},[_vm._v("remove('demo-user-pwd')")]),_c('p',[_vm._v("获取所有可以获得的数据")]),_c('el-button',{attrs:{"type":"info"},on:{"click":_vm.getAll}},[_vm._v("getAll")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/plugins/js-cookie/index.vue?vue&type=template&id=bf210e22&

// EXTERNAL MODULE: ./src/libs/util.js + 3 modules
var util = __webpack_require__("c276");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/js-cookie/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var js_cookievue_type_script_lang_js_ = ({
  methods: {
    set: function set() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default-name';
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default-value';
      util["a" /* default */].cookies.set(name, value);
      this.$message.info("\u8BBE\u7F6E\u6570\u636E ".concat(name, " = ").concat(value));
    },
    setExpires: function setExpires() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default-name';
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default-value';
      var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      util["a" /* default */].cookies.set(name, value, {
        expires: expires
      });
      this.$message.info("\u8BBE\u7F6E\u6570\u636E ".concat(name, " = ").concat(value, " \u6709\u6548\u671F ").concat(expires, " \u5929"));
    },
    get: function get() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default-name';
      var value = util["a" /* default */].cookies.get(name);
      this.$message.info("\u83B7\u53D6\u6570\u636E ".concat(name, " = ").concat(value));
    },
    getAll: function getAll() {
      var value = util["a" /* default */].cookies.getAll();
      console.log(value);
      this.$message.info('结果已经打印到控制台');
    },
    remove: function remove() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default-name';
      util["a" /* default */].cookies.remove(name);
      this.$message.info("\u5220\u9664\u6570\u636E ".concat(name));
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/plugins/js-cookie/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_js_cookievue_type_script_lang_js_ = (js_cookievue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/js-cookie/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
























































/* harmony default export */ var js_cookievue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/plugins/js-cookie/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/plugins/js-cookie/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var plugins_js_cookievue_type_custom_index_0_blockType_vue_filename_injector = (js_cookievue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/plugins/js-cookie/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_js_cookievue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof plugins_js_cookievue_type_custom_index_0_blockType_vue_filename_injector === 'function') plugins_js_cookievue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var js_cookie = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0c7e58.98285eb5.js.map