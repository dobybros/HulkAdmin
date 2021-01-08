(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0c81da"],{

/***/ "5405":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/form-checkbox/index.vue?vue&type=template&id=6f3c56a8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('h1',{staticClass:"d2-mt-0"},[_vm._v("基础用法")]),_c('el-row',[_c('el-checkbox',{model:{value:(_vm.checked1),callback:function ($$v) {_vm.checked1=$$v},expression:"checked1"}},[_vm._v("备选项1")]),_c('el-checkbox',{model:{value:(_vm.checked2),callback:function ($$v) {_vm.checked2=$$v},expression:"checked2"}},[_vm._v("备选项2")])],1),_c('h1',[_vm._v("禁用状态")]),_c('el-row',[_c('el-checkbox',{attrs:{"disabled":""},model:{value:(_vm.checked1),callback:function ($$v) {_vm.checked1=$$v},expression:"checked1"}},[_vm._v("备选项1")]),_c('el-checkbox',{attrs:{"disabled":""},model:{value:(_vm.checked2),callback:function ($$v) {_vm.checked2=$$v},expression:"checked2"}},[_vm._v("备选项2")])],1),_c('h1',[_vm._v("多选框组")]),_c('el-checkbox-group',{model:{value:(_vm.checkList),callback:function ($$v) {_vm.checkList=$$v},expression:"checkList"}},[_c('el-checkbox',{attrs:{"label":"复选框 A"}}),_c('el-checkbox',{attrs:{"label":"复选框 B"}}),_c('el-checkbox',{attrs:{"label":"复选框 C"}}),_c('el-checkbox',{attrs:{"label":"禁用","disabled":""}}),_c('el-checkbox',{attrs:{"label":"选中且禁用","disabled":""}})],1),_c('h1',[_vm._v("indeterminate 状态")]),_c('el-checkbox',{attrs:{"indeterminate":true,"label":"复选框"}}),_c('h1',[_vm._v("可选项目数量的限制")]),_c('el-checkbox-group',{attrs:{"min":1,"max":2},model:{value:(_vm.checkedCities),callback:function ($$v) {_vm.checkedCities=$$v},expression:"checkedCities"}},_vm._l((_vm.cities),function(city){return _c('el-checkbox',{key:city,attrs:{"label":city}},[_vm._v(_vm._s(city))])}),1)],1),_c('el-col',{attrs:{"span":12}},[_c('h1',[_vm._v("按钮样式")]),_c('div',[_c('el-checkbox-group',{model:{value:(_vm.checkboxGroup1),callback:function ($$v) {_vm.checkboxGroup1=$$v},expression:"checkboxGroup1"}},_vm._l((_vm.cities),function(city){return _c('el-checkbox-button',{key:city,attrs:{"label":city}},[_vm._v(_vm._s(city))])}),1)],1),_c('div',{staticStyle:{"margin-top":"20px"}},[_c('el-checkbox-group',{attrs:{"size":"medium"},model:{value:(_vm.checkboxGroup1),callback:function ($$v) {_vm.checkboxGroup1=$$v},expression:"checkboxGroup1"}},_vm._l((_vm.cities),function(city){return _c('el-checkbox-button',{key:city,attrs:{"label":city}},[_vm._v(_vm._s(city))])}),1)],1),_c('div',{staticStyle:{"margin-top":"20px"}},[_c('el-checkbox-group',{attrs:{"size":"small"},model:{value:(_vm.checkboxGroup1),callback:function ($$v) {_vm.checkboxGroup1=$$v},expression:"checkboxGroup1"}},_vm._l((_vm.cities),function(city){return _c('el-checkbox-button',{key:city,attrs:{"label":city,"disabled":city === '北京'}},[_vm._v(_vm._s(city))])}),1)],1),_c('div',{staticStyle:{"margin-top":"20px"}},[_c('el-checkbox-group',{attrs:{"size":"mini","disabled":""},model:{value:(_vm.checkboxGroup1),callback:function ($$v) {_vm.checkboxGroup1=$$v},expression:"checkboxGroup1"}},_vm._l((_vm.cities),function(city){return _c('el-checkbox-button',{key:city,attrs:{"label":city}},[_vm._v(_vm._s(city))])}),1)],1),_c('h1',[_vm._v("带有边框")]),_c('div',[_c('el-checkbox',{attrs:{"label":"备选项1","border":""},model:{value:(_vm.checked1),callback:function ($$v) {_vm.checked1=$$v},expression:"checked1"}}),_c('el-checkbox',{attrs:{"label":"备选项2","border":""},model:{value:(_vm.checked2),callback:function ($$v) {_vm.checked2=$$v},expression:"checked2"}})],1),_c('div',{staticStyle:{"margin-top":"20px"}},[_c('el-checkbox',{attrs:{"label":"备选项1","border":"","size":"medium"},model:{value:(_vm.checked1),callback:function ($$v) {_vm.checked1=$$v},expression:"checked1"}}),_c('el-checkbox',{attrs:{"label":"备选项2","border":"","size":"medium"},model:{value:(_vm.checked2),callback:function ($$v) {_vm.checked2=$$v},expression:"checked2"}})],1),_c('div',{staticStyle:{"margin-top":"20px"}},[_c('el-checkbox-group',{attrs:{"size":"small"},model:{value:(_vm.checkboxGroup2),callback:function ($$v) {_vm.checkboxGroup2=$$v},expression:"checkboxGroup2"}},[_c('el-checkbox',{attrs:{"label":"备选项1","border":""}}),_c('el-checkbox',{attrs:{"label":"备选项2","border":"","disabled":""}})],1)],1),_c('div',{staticStyle:{"margin-top":"20px"}},[_c('el-checkbox-group',{attrs:{"size":"mini","disabled":""},model:{value:(_vm.checkboxGroup2),callback:function ($$v) {_vm.checkboxGroup2=$$v},expression:"checkboxGroup2"}},[_c('el-checkbox',{attrs:{"label":"备选项1","border":""}}),_c('el-checkbox',{attrs:{"label":"备选项2","border":""}})],1)],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/element/form-checkbox/index.vue?vue&type=template&id=6f3c56a8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/form-checkbox/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var form_checkboxvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      checked1: true,
      checked2: false,
      checkList: ['选中且禁用', '复选框 A'],
      checkedCities: ['上海', '北京'],
      cities: ['上海', '北京', '广州', '深圳'],
      checkboxGroup1: ['上海'],
      checkboxGroup2: []
    };
  }
});
// CONCATENATED MODULE: ./src/views/demo/element/form-checkbox/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var element_form_checkboxvue_type_script_lang_js_ = (form_checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/form-checkbox/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector










































































































/* harmony default export */ var form_checkboxvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/element/form-checkbox/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/element/form-checkbox/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var element_form_checkboxvue_type_custom_index_0_blockType_vue_filename_injector = (form_checkboxvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/element/form-checkbox/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  element_form_checkboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof element_form_checkboxvue_type_custom_index_0_blockType_vue_filename_injector === 'function') element_form_checkboxvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var form_checkbox = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0c81da.3752a036.js.map