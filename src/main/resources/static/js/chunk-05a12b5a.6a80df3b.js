(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-05a12b5a","chunk-2d209ade","chunk-2d22c114"],{

/***/ "6fb9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo6/index.vue?vue&type=template&id=7f36249a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("固定列")]),_c('d2-crud',{attrs:{"columns":_vm.columns,"data":_vm.data}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo6/index.vue?vue&type=template&id=7f36249a&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo6/doc.md
var doc = __webpack_require__("f23e");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo6/code.js
var code = __webpack_require__("a9a1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo6/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo6vue_type_script_lang_js_ = ({
  data: function data() {
    return {
      doc: doc_default.a,
      code: code["default"],
      columns: [{
        title: '日期',
        key: 'date',
        width: '180',
        fixed: true
      }, {
        title: '姓名',
        key: 'name',
        width: '180'
      }, {
        title: '省份',
        key: 'province',
        width: '300'
      }, {
        title: '市区',
        key: 'city',
        width: '300'
      }, {
        title: '地址',
        key: 'address',
        width: '300'
      }, {
        title: '邮编',
        key: 'zip',
        fixed: 'right'
      }],
      data: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    };
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo6/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo6vue_type_script_lang_js_ = (demo6vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo6/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector




































































































/* harmony default export */ var demo6vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo6/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo6/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo6vue_type_custom_index_0_blockType_vue_filename_injector = (demo6vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo6/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo6vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo6vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo6vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo6 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "a9a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date',\n          width: '180',\n          fixed: true\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '\u7701\u4EFD',\n          key: 'province',\n          width: '300'\n        },\n        {\n          title: '\u5E02\u533A',\n          key: 'city',\n          width: '300'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address',\n          width: '300'\n        },\n        {\n          title: '\u90AE\u7F16',\n          key: 'zip',\n          fixed: 'right'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          province: '\u4E0A\u6D77',\n          city: '\u666E\u9640\u533A',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          zip: 200333\n        },\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          province: '\u4E0A\u6D77',\n          city: '\u666E\u9640\u533A',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          zip: 200333\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          province: '\u4E0A\u6D77',\n          city: '\u666E\u9640\u533A',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          zip: 200333\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          province: '\u4E0A\u6D77',\n          city: '\u666E\u9640\u533A',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          zip: 200333\n        }\n      ]\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "f23e":
/***/ (function(module, exports) {

module.exports = "固定列需要在 `columns` 对象数组中给需要固定的列传入 `fixed` 属性，它接受 `Boolean` 值或者 `left` `right` ，表示左边固定还是右边固定。代码如下：\n"

/***/ })

}]);
//# sourceMappingURL=chunk-05a12b5a.6a80df3b.js.map