(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-51314b13","chunk-2d0d2b70","chunk-2d0d3320"],{

/***/ "5a4b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        },\n        {\n          title: '\u6807\u7B7E',\n          key: 'tag',\n          filters: [\n            { text: '\u5BB6', value: '\u5BB6' },\n            { text: '\u516C\u53F8', value: '\u516C\u53F8' }\n          ],\n          filterMethod (value, row) {\n            return row.tag === value\n          },\n          filterPlacement: 'bottom-end'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          tag: '\u5BB6'\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',\n          tag: '\u516C\u53F8'\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',\n          tag: '\u5BB6'\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',\n          tag: '\u516C\u53F8'\n        }\n      ]\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "5c73":
/***/ (function(module, exports) {

module.exports = "在 `columns` 中设置 `filters` `filterMethod` 属性即可开启该列的筛选，`filters` 是一个数组， `filterMethod` 是一个方法，它用于决定某些数据是否显示，会传入三个参数：`value`, `row` 和 `column`。代码如下：\n"

/***/ }),

/***/ "964d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo12/index.vue?vue&type=template&id=20a484e1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("筛选")]),_c('d2-crud',{attrs:{"columns":_vm.columns,"data":_vm.data}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo12/index.vue?vue&type=template&id=20a484e1&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo12/doc.md
var doc = __webpack_require__("5c73");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo12/code.js
var code = __webpack_require__("5a4b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo12/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo12vue_type_script_lang_js_ = ({
  data: function data() {
    return {
      doc: doc_default.a,
      code: code["default"],
      columns: [{
        title: '日期',
        key: 'date'
      }, {
        title: '姓名',
        key: 'name'
      }, {
        title: '地址',
        key: 'address'
      }, {
        title: '标签',
        key: 'tag',
        filters: [{
          text: '家',
          value: '家'
        }, {
          text: '公司',
          value: '公司'
        }],
        filterMethod: function filterMethod(value, row) {
          return row.tag === value;
        },
        filterPlacement: 'bottom-end'
      }],
      data: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '家'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
      }]
    };
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo12/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo12vue_type_script_lang_js_ = (demo12vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo12/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector






















































































/* harmony default export */ var demo12vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo12/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo12/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo12vue_type_custom_index_0_blockType_vue_filename_injector = (demo12vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo12/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo12vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo12vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo12vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo12 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-51314b13.e3b9c12b.js.map