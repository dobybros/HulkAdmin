(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-56c19b22","chunk-2d0efc47","chunk-2d0e9559"],{

/***/ "8ca9":
/***/ (function(module, exports) {

module.exports = "通过给 `options` 传入 `spanMethod` 方法可以实现合并行，方法的参数是一个对象，里面包含当前行 `row` 、当前列 `column` 、当前行号 `rowIndex` 、当前列号 `columnIndex` 四个属性。该函数可以返回一个键名为 `rowspan` 和 `colspan` 的对象。代码如下：\n"

/***/ }),

/***/ "8f81":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo15/index.vue?vue&type=template&id=491bccc4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("合并列")]),_c('d2-crud',{attrs:{"columns":_vm.columns,"data":_vm.data,"options":_vm.options}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo15/index.vue?vue&type=template&id=491bccc4&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo15/doc.md
var doc = __webpack_require__("8ca9");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo15/code.js
var code = __webpack_require__("9a09");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo15/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo15vue_type_script_lang_js_ = ({
  data: function data() {
    return {
      doc: doc_default.a,
      code: code["default"],
      columns: [{
        title: 'ID',
        key: 'id'
      }, {
        title: '姓名',
        key: 'name'
      }, {
        title: '数值 1',
        key: 'amount1'
      }, {
        title: '数值 2',
        key: 'amount2'
      }, {
        title: '数值 3',
        key: 'amount3'
      }],
      data: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '王小虎',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '王小虎',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }],
      options: {
        border: true,
        spanMethod: function spanMethod(_ref) {
          var row = _ref.row,
              column = _ref.column,
              rowIndex = _ref.rowIndex,
              columnIndex = _ref.columnIndex;

          if (columnIndex === 0) {
            if (rowIndex % 2 === 0) {
              return {
                rowspan: 2,
                colspan: 1
              };
            } else {
              return {
                rowspan: 0,
                colspan: 0
              };
            }
          }
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo15/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo15vue_type_script_lang_js_ = (demo15vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo15/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
















































































































/* harmony default export */ var demo15vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo15/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo15/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo15vue_type_custom_index_0_blockType_vue_filename_injector = (demo15vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo15/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo15vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo15vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo15vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo15 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9a09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: 'ID',\n          key: 'id'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name'\n        },\n        {\n          title: '\u6570\u503C 1',\n          key: 'amount1'\n        },\n        {\n          title: '\u6570\u503C 2',\n          key: 'amount2'\n        },\n        {\n          title: '\u6570\u503C 3',\n          key: 'amount3'\n        }\n      ],\n      data: [\n        {\n          id: '12987122',\n          name: '\u738B\u5C0F\u864E',\n          amount1: '234',\n          amount2: '3.2',\n          amount3: 10\n        },\n        {\n          id: '12987123',\n          name: '\u738B\u5C0F\u864E',\n          amount1: '165',\n          amount2: '4.43',\n          amount3: 12\n        },\n        {\n          id: '12987124',\n          name: '\u738B\u5C0F\u864E',\n          amount1: '324',\n          amount2: '1.9',\n          amount3: 9\n        },\n        {\n          id: '12987125',\n          name: '\u738B\u5C0F\u864E',\n          amount1: '621',\n          amount2: '2.2',\n          amount3: 17\n        },\n        {\n          id: '12987126',\n          name: '\u738B\u5C0F\u864E',\n          amount1: '539',\n          amount2: '4.1',\n          amount3: 15\n        }\n      ],\n      options: {\n        border: true,\n        spanMethod ({ row, column, rowIndex, columnIndex }) {\n          if (columnIndex === 0) {\n            if (rowIndex % 2 === 0) {\n              return {\n                rowspan: 2,\n                colspan: 1\n              }\n            } else {\n              return {\n                rowspan: 0,\n                colspan: 0\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n</script>");

/***/ })

}]);
//# sourceMappingURL=chunk-56c19b22.7ae8ea87.js.map