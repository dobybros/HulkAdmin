(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0f0fbf"],{

/***/ "9f62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/page-argu/send.vue?vue&type=template&id=1670cad2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',{attrs:{"type":"card"}},[_c('el-form',{ref:"sendForm",attrs:{"model":_vm.sendForm,"rules":_vm.rules,"label-position":"top"}},[_c('el-form-item',{attrs:{"label":"username 通过动态路由匹配发送","prop":"username"}},[_c('el-input',{staticStyle:{"width":"300px"},model:{value:(_vm.sendForm.username),callback:function ($$v) {_vm.$set(_vm.sendForm, "username", $$v)},expression:"sendForm.username"}})],1),_c('el-form-item',{attrs:{"label":"userid 通过参数发送","prop":"userid"}},[_c('el-input',{staticStyle:{"width":"300px"},model:{value:(_vm.sendForm.userid),callback:function ($$v) {_vm.$set(_vm.sendForm, "userid", $$v)},expression:"sendForm.userid"}})],1),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.handleSubmit('sendForm')}}},[_vm._v("跳转到接收页面")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/playground/page-argu/send.vue?vue&type=template&id=1670cad2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/page-argu/send.vue?vue&type=script&lang=js&
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
/* harmony default export */ var sendvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      sendForm: {
        username: 'FairyEver',
        userid: '001'
      },
      rules: {
        username: [{
          required: true,
          message: '请输入要发送的用户名',
          trigger: 'blur'
        }],
        userid: [{
          required: true,
          message: '请输入要发送的用户ID',
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    handleSubmit: function handleSubmit(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this.$router.push({
            name: 'demo-playground-page-argu-get',
            params: {
              username: _this.sendForm.username
            },
            query: {
              userid: _this.sendForm.userid
            }
          });
        } else {
          return false;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/playground/page-argu/send.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_argu_sendvue_type_script_lang_js_ = (sendvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/page-argu/send.vue?vue&type=custom&index=0&blockType=vue-filename-injector

























































/* harmony default export */ var sendvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/playground/page-argu/send.vue"
});

// CONCATENATED MODULE: ./src/views/demo/playground/page-argu/send.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var page_argu_sendvue_type_custom_index_0_blockType_vue_filename_injector = (sendvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/playground/page-argu/send.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_argu_sendvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof page_argu_sendvue_type_custom_index_0_blockType_vue_filename_injector === 'function') page_argu_sendvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var send = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0f0fbf.e5ef6bbc.js.map