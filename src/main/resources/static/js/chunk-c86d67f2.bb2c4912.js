(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-c86d67f2","chunk-2d0f0a33","chunk-2d0c73d2"],{

/***/ "5089":
/***/ (function(module, exports) {

module.exports = "在 `D2 Crud` 组件中传入 `pagination` 对象，即可开启分页。代码如下：\n"

/***/ }),

/***/ "9ce8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :loading=\"loading\"\n      :pagination=\"pagination\"\n      @pagination-current-change=\"paginationCurrentChange\"/>\n  </div>\n</template>\n\n<script>\nimport { BusinessTable1List } from '@api/demo.business.table.1'\n\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u5361\u5BC6',\n          key: 'key',\n          width: 320\n        },\n        {\n          title: '\u9762\u503C',\n          key: 'value'\n        },\n        {\n          title: '\u7BA1\u7406\u5458',\n          key: 'admin'\n        },\n        {\n          title: '\u521B\u5EFA\u65F6\u95F4',\n          key: 'dateTimeCreat'\n        },\n        {\n          title: '\u4F7F\u7528\u65F6\u95F4',\n          key: 'dateTimeUse'\n        }\n      ],\n      data: [],\n      loading: false,\n      pagination: {\n        currentPage: 1,\n        pageSize: 5,\n        total: 0\n      }\n    }\n  },\n  mounted () {\n    this.fetchData()\n  },\n  methods: {\n    paginationCurrentChange (currentPage) {\n      this.pagination.currentPage = currentPage\n      this.fetchData()\n    },\n    fetchData () {\n      this.loading = true\n      BusinessTable1List({\n        ...this.pagination\n      }).then(res => {\n        this.data = res.list\n        this.pagination.total = res.page.total\n        this.loading = false\n      }).catch(err => {\n        console.log('err', err)\n        this.loading = false\n      })\n    }\n  }\n}\n</script>");

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

/***/ }),

/***/ "f083":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo29/index.vue?vue&type=template&id=9318b3aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("分页")]),_c('d2-crud',{attrs:{"columns":_vm.columns,"data":_vm.data,"loading":_vm.loading,"pagination":_vm.pagination},on:{"pagination-current-change":_vm.paginationCurrentChange}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo29/index.vue?vue&type=template&id=9318b3aa&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo29/doc.md
var doc = __webpack_require__("5089");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo29/code.js
var code = __webpack_require__("9ce8");

// EXTERNAL MODULE: ./src/api/demo.business.table.1.js
var demo_business_table_1 = __webpack_require__("ef69");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo29/index.vue?vue&type=script&lang=js&

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



/* harmony default export */ var demo29vue_type_script_lang_js_ = ({
  data: function data() {
    return {
      doc: doc_default.a,
      code: code["default"],
      columns: [{
        title: '卡密',
        key: 'key',
        width: 320
      }, {
        title: '面值',
        key: 'value'
      }, {
        title: '管理员',
        key: 'admin'
      }, {
        title: '创建时间',
        key: 'dateTimeCreat'
      }, {
        title: '使用时间',
        key: 'dateTimeUse'
      }],
      data: [],
      loading: false,
      pagination: {
        currentPage: 1,
        pageSize: 5,
        total: 0
      }
    };
  },
  mounted: function mounted() {
    this.fetchData();
  },
  methods: {
    paginationCurrentChange: function paginationCurrentChange(currentPage) {
      this.pagination.currentPage = currentPage;
      this.fetchData();
    },
    fetchData: function fetchData() {
      var _this = this;

      this.loading = true;
      Object(demo_business_table_1["a" /* BusinessTable1List */])(Object(objectSpread["a" /* default */])({}, this.pagination)).then(function (res) {
        _this.data = res.list;
        _this.pagination.total = res.page.total;
        _this.loading = false;
      }).catch(function (err) {
        console.log('err', err);
        _this.loading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo29/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo29vue_type_script_lang_js_ = (demo29vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo29/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector

























































































/* harmony default export */ var demo29vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo29/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo29/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo29vue_type_custom_index_0_blockType_vue_filename_injector = (demo29vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo29/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo29vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo29vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo29vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo29 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-c86d67f2.bb2c4912.js.map