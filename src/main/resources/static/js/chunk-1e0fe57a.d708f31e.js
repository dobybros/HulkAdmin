(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-1e0fe57a","chunk-2d0cf38c","chunk-2d229632"],{

/***/ "5c2b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo24/index.vue?vue&type=template&id=0a403a21&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("表格slot")]),_c('d2-crud',{ref:"d2Crud",attrs:{"columns":_vm.columns,"data":_vm.data}},[_c('el-input',{staticStyle:{"margin-bottom":"5px"},attrs:{"slot":"header","placeholder":"请输入内容"},slot:"header"},[_c('template',{slot:"prepend"},[_vm._v("Http://")]),_c('template',{slot:"append"},[_vm._v(".com")])],2),_c('el-button',{staticStyle:{"margin-bottom":"5px"},attrs:{"slot":"header"},slot:"header"},[_vm._v("自定义按钮1")]),_c('el-button',{staticStyle:{"margin-bottom":"5px"},attrs:{"slot":"header","type":"primary","round":""},slot:"header"},[_vm._v("自定义按钮2")])],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo24/index.vue?vue&type=template&id=0a403a21&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo24/doc.md
var doc = __webpack_require__("dcda");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo24/code.js
var code = __webpack_require__("6392");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo24/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo24vue_type_script_lang_js_ = ({
  data: function data() {
    return {
      doc: doc_default.a,
      code: code["default"],
      columns: [{
        title: '日期',
        key: 'date',
        width: '180'
      }, {
        title: '姓名',
        key: 'name',
        width: '180'
      }, {
        title: '地址',
        key: 'address'
      }],
      data: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    };
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo24/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo24vue_type_script_lang_js_ = (demo24vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo24/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector












































































/* harmony default export */ var demo24vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo24/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo24/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo24vue_type_custom_index_0_blockType_vue_filename_injector = (demo24vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo24/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo24vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo24vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo24vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo24 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6392":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\">\n      <el-input slot=\"header\" placeholder=\"\u8BF7\u8F93\u5165\u5185\u5BB9\" style=\"margin-bottom: 5px\">\n        <template slot=\"prepend\">Http://</template>\n        <template slot=\"append\">.com</template>\n      </el-input>\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\">\u81EA\u5B9A\u4E49\u6309\u94AE1</el-button>\n      <el-button slot=\"header\" type=\"primary\" round style=\"margin-bottom: 5px\">\u81EA\u5B9A\u4E49\u6309\u94AE2</el-button>\n    </d2-crud>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'\n        }\n      ]\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "dcda":
/***/ (function(module, exports) {

module.exports = "`header` slot 可以在表头添加自定义内容。代码如下：\n"

/***/ })

}]);
//# sourceMappingURL=chunk-1e0fe57a.d708f31e.js.map