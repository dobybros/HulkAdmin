(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0b2d47"],{

/***/ "267d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/store/page/index.vue?vue&type=template&id=08d52c38&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',{attrs:{"type":"card"}},[_c('p',{staticClass:"d2-mt-0"},[_vm._v("在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存")]),_c('el-input',{attrs:{"placeholder":"input here"},model:{value:(_vm.value),callback:function ($$v) {_vm.value=$$v},expression:"value"}}),_c('p',[_vm._v("关闭标签页")]),_c('el-button-group',[_c('el-button',{on:{"click":_vm.handleCloseCurrent}},[_c('d2-icon',{attrs:{"name":"times"}}),_vm._v(" 当前\n    ")],1),_c('el-button',{on:{"click":_vm.handleCloseLeft}},[_c('d2-icon',{attrs:{"name":"arrow-left"}}),_vm._v(" 左侧\n    ")],1),_c('el-button',{on:{"click":_vm.handleCloseRight}},[_vm._v("\n      右侧 "),_c('d2-icon',{attrs:{"name":"arrow-right"}})],1),_c('el-button',{on:{"click":_vm.handleCloseOther}},[_vm._v("\n      其它 "),_c('d2-icon',{attrs:{"name":"times"}})],1),_c('el-button',{on:{"click":_vm.closeAll}},[_vm._v("\n      全部 "),_c('d2-icon',{attrs:{"name":"times-circle"}})],1)],1),_c('p',[_vm._v("刷新")]),_c('el-button-group',[_c('el-button',{on:{"click":_vm.handleCleanCacheAndRefreshCurrent}},[_c('d2-icon',{attrs:{"name":"refresh"}}),_vm._v("\n      清空当前页缓存并刷新\n    ")],1),_c('el-button',{on:{"click":_vm.handleCleanCacheAndRefreshAll}},[_c('d2-icon',{attrs:{"name":"refresh"}}),_vm._v("\n      清空所有缓存并刷新\n    ")],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/playground/store/page/index.vue?vue&type=template&id=08d52c38&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/store/page/index.vue?vue&type=script&lang=js&


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

/* harmony default export */ var pagevue_type_script_lang_js_ = ({
  name: 'demo-playground-store-page',
  data: function data() {
    return {
      value: ''
    };
  },
  methods: Object(objectSpread["a" /* default */])({}, Object(vuex_esm["d" /* mapMutations */])('d2admin/page', ['keepAliveRemove', 'keepAliveClean']), Object(vuex_esm["b" /* mapActions */])('d2admin/page', ['close', 'closeLeft', 'closeRight', 'closeOther', 'closeAll']), {
    // 关闭当前
    handleCloseCurrent: function handleCloseCurrent() {
      this.close({
        tagName: this.$route.fullPath
      });
    },
    // 关闭左侧
    handleCloseLeft: function handleCloseLeft() {
      this.closeLeft({
        tagName: this.$route.fullPath
      });
    },
    // 关闭右侧
    handleCloseRight: function handleCloseRight() {
      this.closeRight({
        tagName: this.$route.fullPath
      });
    },
    // 关闭其他
    handleCloseOther: function handleCloseOther() {
      this.closeOther({
        tagName: this.$route.fullPath
      });
    },
    // 清空当前页缓存并刷新此页面
    handleCleanCacheAndRefreshCurrent: function handleCleanCacheAndRefreshCurrent() {
      this.keepAliveRemove(this.$route.fullPath);
      this.$nextTick(this.$router.replace('/refresh'));
    },
    // 清空所有的缓存并刷新此页面
    handleCleanCacheAndRefreshAll: function handleCleanCacheAndRefreshAll() {
      this.keepAliveClean();
      this.$nextTick(this.$router.replace('/refresh'));
    }
  })
});
// CONCATENATED MODULE: ./src/views/demo/playground/store/page/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var store_pagevue_type_script_lang_js_ = (pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/store/page/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector


































































































/* harmony default export */ var pagevue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/playground/store/page/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/playground/store/page/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var store_pagevue_type_custom_index_0_blockType_vue_filename_injector = (pagevue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/playground/store/page/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  store_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof store_pagevue_type_custom_index_0_blockType_vue_filename_injector === 'function') store_pagevue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var page = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0b2d47.631e411b.js.map