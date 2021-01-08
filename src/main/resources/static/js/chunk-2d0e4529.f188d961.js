(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0e4529"],{

/***/ "9073":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/table/1/componnets/BooleanControl/index.vue?vue&type=template&id=0146a7fb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-popover',{attrs:{"placement":_vm.popoverPlacement,"title":_vm.popoverTitle,"width":_vm.popoverWidth,"trigger":"hover"}},[_c('el-switch',{attrs:{"active-color":_vm.activeColor,"inactive-color":_vm.inactiveColor,"active-text":_vm.activeText,"inactive-text":_vm.inactiveText,"disabled":_vm.disabled},on:{"change":_vm.handleChange},model:{value:(_vm.currentValue),callback:function ($$v) {_vm.currentValue=$$v},expression:"currentValue"}}),_c('span',{attrs:{"slot":"reference"},slot:"reference"},[(_vm.value)?_vm._t("active"):_vm._t("inactive")],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/business/table/1/componnets/BooleanControl/index.vue?vue&type=template&id=0146a7fb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/table/1/componnets/BooleanControl/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BooleanControlvue_type_script_lang_js_ = ({
  props: {
    value: {
      default: false
    },
    popoverPlacement: {
      default: 'left'
    },
    popoverTitle: {
      default: '修改'
    },
    popoverWidth: {
      default: '150'
    },
    activeColor: {
      default: '#67C23A'
    },
    inactiveColor: {
      default: '#F56C6C'
    },
    activeText: {
      default: '正常'
    },
    inactiveText: {
      default: '禁用'
    }
  },
  data: function data() {
    return {
      currentValue: false,
      disabled: false
    };
  },
  watch: {
    value: {
      handler: function handler(val) {
        this.currentValue = val;
      },
      immediate: true
    }
  },
  methods: {
    handleChange: function handleChange(val) {
      var _this = this;

      this.disabled = true;
      this.$message({
        message: '正在发送请求',
        type: 'info'
      }); // 请将 setTimeout 修改为您的异步请求

      setTimeout(function () {
        _this.disabled = false;

        _this.$message({
          message: '修改成功',
          type: 'success'
        });

        _this.$emit('change', val); // 如果修改失败的话需要在这里手动将 currentValue 复原

      }, 1000);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/business/table/1/componnets/BooleanControl/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var componnets_BooleanControlvue_type_script_lang_js_ = (BooleanControlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/table/1/componnets/BooleanControl/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector























































































/* harmony default export */ var BooleanControlvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/business/table/1/componnets/BooleanControl/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/business/table/1/componnets/BooleanControl/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var componnets_BooleanControlvue_type_custom_index_0_blockType_vue_filename_injector = (BooleanControlvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/business/table/1/componnets/BooleanControl/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  componnets_BooleanControlvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof componnets_BooleanControlvue_type_custom_index_0_blockType_vue_filename_injector === 'function') componnets_BooleanControlvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var BooleanControl = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0e4529.f188d961.js.map