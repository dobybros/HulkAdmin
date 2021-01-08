(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-fccc9bc2","chunk-2d230668","chunk-2d0db23a"],{

/***/ "65a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo19/index.vue?vue&type=template&id=9d93e0c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("自定义操作列")]),_c('d2-crud',{attrs:{"columns":_vm.columns,"data":_vm.data,"rowHandle":_vm.rowHandle},on:{"custom-emit-1":_vm.handleCustomEvent}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo19/index.vue?vue&type=template&id=9d93e0c0&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo19/doc.md
var doc = __webpack_require__("6f1e");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo19/code.js
var code = __webpack_require__("ebb7");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo19/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo19vue_type_script_lang_js_ = ({
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
      }],
      rowHandle: {
        custom: [{
          text: '自定义按钮',
          type: 'warning',
          size: 'small',
          emit: 'custom-emit-1'
        }]
      }
    };
  },
  methods: {
    handleCustomEvent: function handleCustomEvent(_ref) {
      var index = _ref.index,
          row = _ref.row;
      console.log(index);
      console.log(row);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo19/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo19vue_type_script_lang_js_ = (demo19vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo19/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
























































































/* harmony default export */ var demo19vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo19/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo19/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo19vue_type_custom_index_0_blockType_vue_filename_injector = (demo19vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo19/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo19vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo19vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo19vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo19 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6f1e":
/***/ (function(module, exports) {

module.exports = "通过给 `D2 Crud` 传入 `rowHandle` 可开启表格操作列，传入 `custom` 数组对象可以自定义模式，数组中每一个对象定义一个自定义按钮，对象属性支持所有的 `el-button` 属性， `emit` 属性定义了监听的事件，例如 `emit` 的值为 `custom-emit-1`，就在 `D2 Crud` 中监听 `custom-emit-1` 事件 监听的事件参数： `index` 是当前行的索引， `row` 是当前行的数据。代码如下：\n"

/***/ }),

/***/ "ebb7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      @custom-emit-1=\"handleCustomEvent\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'\n        }\n      ],\n      rowHandle: {\n        custom: [\n          {\n            text: '\u81EA\u5B9A\u4E49\u6309\u94AE',\n            type: 'warning',\n            size: 'small',\n            emit: 'custom-emit-1'\n          }\n        ]\n      }\n    }\n  },\n  methods: {\n    handleCustomEvent ({index, row}) {\n      console.log(index)\n      console.log(row)\n    }\n  }\n}\n</script>");

/***/ })

}]);
//# sourceMappingURL=chunk-fccc9bc2.c34e1b29.js.map