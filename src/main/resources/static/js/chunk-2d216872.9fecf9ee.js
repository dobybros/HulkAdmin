(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d216872"],{

/***/ "c39e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/page-cache/params.vue?vue&type=template&id=4960a20a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',{attrs:{"type":"card"}},[_c('template',{slot:"header"},[_vm._v("这个页面会被 keep-alive")]),_c('h2',{staticClass:"d2-mt-0"},[_vm._v("编号："+_vm._s(_vm.id))]),_c('p',{staticClass:"d2-mt-0"},[_vm._v("在下面的输入框输入任意字符后，切换到其它页面，再回到此页时输入框文字保留，证明被缓存")]),_c('el-input',{attrs:{"placeholder":"input here"},model:{value:(_vm.data.value),callback:function ($$v) {_vm.$set(_vm.data, "value", $$v)},expression:"data.value"}}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.data.value),expression:"data.value"}],attrs:{"placeholder":"input here"},domProps:{"value":(_vm.data.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.data, "value", $event.target.value)}}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/playground/page-cache/params.vue?vue&type=template&id=4960a20a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/page-cache/params.vue?vue&type=script&lang=js&
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

/**
 * 带参路由多组参数使用同一个组件实例，需要在组件内部对多个参数的情况进行统一处理
 * 这里简单演示如何根据 id 管理多组数据对象
 */
/* harmony default export */ var paramsvue_type_script_lang_js_ = ({
  name: 'demo-playground-page-cache-params',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      datas: [],
      data: {
        value: ''
      }
    };
  },
  methods: {
    switchData: function switchData(id) {
      var data = this.datas[id];

      if (!data) {
        data = {
          value: ''
        };
        this.datas[id] = data;
      }

      this.data = data;
    }
  },
  // 第一次进入或从其他组件对应路由进入时触发
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter => ', to);
    var id = to.params.id;

    if (id) {
      next(function (instance) {
        return instance.switchData(id);
      });
    } else {
      next(new Error('未指定ID'));
    }
  },
  // 在同一组件对应的多个路由间切换时触发
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate => ', to);
    var id = to.params.id;

    if (id) {
      this.switchData(id);
      next();
    } else {
      next(new Error('未指定ID'));
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/playground/page-cache/params.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_cache_paramsvue_type_script_lang_js_ = (paramsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/page-cache/params.vue?vue&type=custom&index=0&blockType=vue-filename-injector
































































/* harmony default export */ var paramsvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/playground/page-cache/params.vue"
});

// CONCATENATED MODULE: ./src/views/demo/playground/page-cache/params.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var page_cache_paramsvue_type_custom_index_0_blockType_vue_filename_injector = (paramsvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/playground/page-cache/params.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_cache_paramsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof page_cache_paramsvue_type_custom_index_0_blockType_vue_filename_injector === 'function') page_cache_paramsvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var params = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d216872.9fecf9ee.js.map