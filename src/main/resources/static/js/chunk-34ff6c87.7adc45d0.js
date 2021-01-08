(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-34ff6c87","chunk-1011ab15"],{

/***/ "28ba":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2cdc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_demo_business_issues_142__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cfab");


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      form: {
        name: '',
        address: ''
      }
    };
  },
  methods: {
    // [业务逻辑] 重置表单
    resetFormData: function resetFormData() {
      this.form = {
        name: '',
        address: ''
      };
    },
    // [业务逻辑] 根据 id 获取数据
    getFormData: function getFormData(id) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        // 重置表单
        _this.resetFormData(); // 请求数据


        Object(_api_demo_business_issues_142__WEBPACK_IMPORTED_MODULE_1__[/* detail */ "a"])(id).then(function (res) {
          var name = res.name,
              address = res.address;
          _this.form = {
            name: name,
            address: address
          };

          _this.$message.success('getFormData');

          resolve();
        }).catch(function (err) {
          console.log('err', err);
          reject(err);
        });
      });
    },
    // [业务逻辑] 提交
    handleSubmit: function handleSubmit() {
      this.$notify({
        title: 'Submit',
        message: '提交了表单',
        type: 'info'
      });
    }
  }
});

/***/ }),

/***/ "33a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("28ba");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cfab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return detail; });
/* harmony import */ var _plugin_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9bd2");

function fetch() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/demo/business/issues/142/fetch',
    method: 'get'
  });
}
function detail(id) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/demo/business/issues/142/detail',
    method: 'get',
    params: {
      id: id
    }
  });
}

/***/ }),

/***/ "e2b9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/issues/142/edit.vue?vue&type=template&id=1b3a540e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',{staticClass:"page",attrs:{"type":"card"}},[_c('el-form',{ref:"form",staticClass:"page--form",attrs:{"model":_vm.form,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"姓名"}},[_c('el-input',{model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_c('el-form-item',{attrs:{"label":"地址"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.form.address),callback:function ($$v) {_vm.$set(_vm.form, "address", $$v)},expression:"form.address"}})],1),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleSubmit}},[_vm._v("修改")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/business/issues/142/edit.vue?vue&type=template&id=1b3a540e&

// EXTERNAL MODULE: ./src/views/demo/business/issues/142/mixins/index.js
var mixins = __webpack_require__("2cdc");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/issues/142/edit.vue?vue&type=script&lang=js&
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

/* harmony default export */ var editvue_type_script_lang_js_ = ({
  mixins: [mixins["default"]],
  // 第一次进入或从其他组件对应路由进入时触发
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    var id = to.params.id;

    if (id) {
      next(function (instance) {
        instance.resetFormData();
        instance.getFormData(id);
      });
    } else {
      next(new Error('未指定ID'));
    }
  },
  // 在同一组件对应的多个路由间切换时触发
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var id = to.params.id;

    if (id) {
      this.resetFormData();
      this.getFormData(id);
      next();
    } else {
      next(new Error('未指定ID'));
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/business/issues/142/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var _142_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/demo/business/issues/142/edit.vue?vue&type=style&index=0&lang=scss&
var editvue_type_style_index_0_lang_scss_ = __webpack_require__("33a8");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/issues/142/edit.vue?vue&type=custom&index=0&blockType=vue-filename-injector































































/* harmony default export */ var editvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/business/issues/142/edit.vue"
});

// CONCATENATED MODULE: ./src/views/demo/business/issues/142/edit.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var _142_editvue_type_custom_index_0_blockType_vue_filename_injector = (editvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/business/issues/142/edit.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _142_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _142_editvue_type_custom_index_0_blockType_vue_filename_injector === 'function') _142_editvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-34ff6c87.7adc45d0.js.map