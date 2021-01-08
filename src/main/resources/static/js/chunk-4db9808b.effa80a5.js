(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4db9808b"],{

/***/ "7636":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/table/1/index.vue?vue&type=template&id=4166ae28&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('demo-page-header',{ref:"header",attrs:{"slot":"header"},on:{"submit":_vm.handleSubmit},slot:"header"}),_c('demo-page-main',{attrs:{"table-data":_vm.table,"loading":_vm.loading}}),_c('demo-page-footer',{attrs:{"slot":"footer","current":_vm.page.pageCurrent,"size":_vm.page.pageSize,"total":_vm.page.pageTotal},on:{"change":_vm.handlePaginationChange},slot:"footer"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/business/table/1/index.vue?vue&type=template&id=4166ae28&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./src/api/demo.business.table.1.js
var demo_business_table_1 = __webpack_require__("ef69");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/table/1/index.vue?vue&type=script&lang=js&

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

/* harmony default export */ var _1vue_type_script_lang_js_ = ({
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: 'demo-business-table-1',
  components: {
    'DemoPageHeader': function DemoPageHeader() {
      return __webpack_require__.e(/* import() */ "chunk-2d0abab8").then(__webpack_require__.bind(null, "15ec"));
    },
    'DemoPageMain': function DemoPageMain() {
      return __webpack_require__.e(/* import() */ "chunk-01eba039").then(__webpack_require__.bind(null, "b124"));
    },
    'DemoPageFooter': function DemoPageFooter() {
      return __webpack_require__.e(/* import() */ "chunk-2d0f0690").then(__webpack_require__.bind(null, "9bf7"));
    }
  },
  data: function data() {
    return {
      table: [],
      loading: false,
      page: {
        pageCurrent: 1,
        pageSize: 10,
        pageTotal: 0
      }
    };
  },
  methods: {
    handlePaginationChange: function handlePaginationChange(val) {
      var _this = this;

      this.$notify({
        title: '分页变化',
        message: "\u5F53\u524D\u7B2C".concat(val.current, "\u9875 \u5171").concat(val.total, "\u6761 \u6BCF\u9875").concat(val.size, "\u6761")
      });
      this.page = val; // nextTick 只是为了优化示例中 notify 的显示

      this.$nextTick(function () {
        _this.$refs.header.handleFormSubmit();
      });
    },
    handleSubmit: function handleSubmit(form) {
      var _this2 = this;

      this.loading = true;
      this.$notify({
        title: '开始请求模拟表格数据'
      });
      Object(demo_business_table_1["a" /* BusinessTable1List */])(Object(objectSpread["a" /* default */])({}, form, this.page)).then(function (res) {
        _this2.loading = false;

        _this2.$notify({
          title: '模拟表格数据请求完毕'
        });

        _this2.table = res.list;
        _this2.page.pageTotal = res.page.total;
      }).catch(function (err) {
        _this2.loading = false;

        _this2.$notify({
          title: '模拟表格数据请求异常'
        });

        console.log('err', err);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/business/table/1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_1vue_type_script_lang_js_ = (_1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/table/1/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector

















































































/* harmony default export */ var _1vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/business/table/1/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/business/table/1/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var table_1vue_type_custom_index_0_blockType_vue_filename_injector = (_1vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/business/table/1/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  table_1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof table_1vue_type_custom_index_0_blockType_vue_filename_injector === 'function') table_1vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var _1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ef69":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessTable1List; });
/* harmony import */ var _plugin_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9bd2");

function BusinessTable1List(params) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/demo/business/table/1/fetch',
    method: 'get',
    params: params
  });
}

/***/ })

}]);
//# sourceMappingURL=chunk-4db9808b.effa80a5.js.map