(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4c285be4","chunk-2d21726c","chunk-2d0d9f63"],{

/***/ "6a24":
/***/ (function(module, exports) {

module.exports = "向 `columns` 的 `component` 对象传入 `name` 属性来控制渲染的组件，默认为 `el-input` ，支持的组件有 `el-input-number` `el-radio` `el-checkbox` `el-select` `el-cascader` `el-switch` `el-slider` `el-time-select` `el-time-picker` `el-date-picker` `el-rate` `el-color-picker` ，也可以使用 `render函数` 自己渲染组件，只需在 `component` 中传入 `renderFuntion` ，接收两个参数： `h`是render函数的固定参数， `scope` 是单元格中的数据，[render函数使用方法](https://cn.vuejs.org/v2/guide/render-function.html)。通过 `cell-data-change`事件可以监听单元格内的数据变化，监听在crud内部是通过change事件触发的（这意味着input类组件失去焦点才会触发事件，单纯输入不会触发），接收一个对象参数 `{rowIndex, key, value, row}`， `rowIndex` 为改变所在行，`key` 为改变的字段，`value` 为改变后的值，`row` 是改变所在行的所有数据。代码如下：\n"

/***/ }),

/***/ "6dd7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo23/index.vue?vue&type=template&id=c7df3a8c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("表格内编辑")]),_c('d2-crud',{attrs:{"columns":_vm.columns,"data":_vm.data},on:{"cell-data-change":_vm.handleCellDataChange}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo23/index.vue?vue&type=template&id=c7df3a8c&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo23/doc.md
var doc = __webpack_require__("6a24");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo23/code.js
var code = __webpack_require__("c603");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo23/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo23vue_type_script_lang_js_ = ({
  data: function data() {
    return {
      doc: doc_default.a,
      code: code["default"],
      columns: [{
        title: '日期',
        key: 'date',
        component: {
          name: 'el-date-picker',
          size: 'small'
        }
      }, {
        title: '姓名',
        key: 'name',
        component: {
          name: 'el-select',
          options: [{
            value: '王小虎',
            label: '王小虎'
          }, {
            value: '王中虎',
            label: '王中虎'
          }, {
            value: '王老虎',
            label: '王老虎'
          }],
          size: 'small'
        }
      }, {
        title: '地址',
        key: 'address',
        component: {
          name: 'el-input',
          size: 'small'
        }
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
  },
  methods: {
    handleCellDataChange: function handleCellDataChange(_ref) {
      var rowIndex = _ref.rowIndex,
          key = _ref.key,
          value = _ref.value,
          row = _ref.row;
      console.log(rowIndex);
      console.log(key);
      console.log(value);
      console.log(row);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo23/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo23vue_type_script_lang_js_ = (demo23vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo23/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector








































































































/* harmony default export */ var demo23vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo23/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo23/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo23vue_type_custom_index_0_blockType_vue_filename_injector = (demo23vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo23/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo23vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo23vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo23vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo23 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c603":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      @cell-data-change=\"handleCellDataChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date',\n          component: {\n            name: 'el-date-picker',\n            size: 'small'\n          }\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name',\n          component: {\n            name: 'el-select',\n            options: [\n              {\n                value: '\u738B\u5C0F\u864E',\n                label: '\u738B\u5C0F\u864E'\n              },\n              {\n                value: '\u738B\u4E2D\u864E',\n                label: '\u738B\u4E2D\u864E'\n              },\n              {\n                value: '\u738B\u8001\u864E',\n                label: '\u738B\u8001\u864E'\n              }\n            ],\n            size: 'small'\n          }\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address',\n          component: {\n            name: 'el-input',\n            size: 'small'\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'\n        }\n      ]\n    }\n  },\n  methods: {\n    handleCellDataChange ({ rowIndex, key, value, row }) {\n      console.log(rowIndex)\n      console.log(key)\n      console.log(value)\n      console.log(row)\n    }\n  }\n}\n</script>");

/***/ })

}]);
//# sourceMappingURL=chunk-4c285be4.e0a2f170.js.map