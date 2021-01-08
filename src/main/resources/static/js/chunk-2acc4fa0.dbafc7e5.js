(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2acc4fa0","chunk-2d0c8f8a","chunk-2d0c9594"],{

/***/ "2442":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo13/index.vue?vue&type=template&id=7f76ed3d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("表尾合计行")]),_c('d2-crud',{attrs:{"columns":_vm.columns,"data":_vm.data,"options":_vm.options}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo13/index.vue?vue&type=template&id=7f76ed3d&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo13/doc.md
var doc = __webpack_require__("5982");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo13/code.js
var code = __webpack_require__("56c6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo13/index.vue?vue&type=script&lang=js&


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


/* harmony default export */ var demo13vue_type_script_lang_js_ = ({
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
        showSummary: true,
        summaryMethod: function summaryMethod(param) {
          var columns = param.columns,
              data = param.data;
          var sums = [];
          columns.forEach(function (column, index) {
            if (index === 0) {
              sums[index] = '总价';
              return;
            }

            var values = data.map(function (item) {
              return Number(item[column.property]);
            });

            if (!values.every(function (value) {
              return isNaN(value);
            })) {
              sums[index] = values.reduce(function (prev, curr) {
                var value = Number(curr);

                if (!isNaN(value)) {
                  return prev + curr;
                } else {
                  return prev;
                }
              }, 0);
              sums[index] += ' 元';
            } else {
              sums[index] = 'N/A';
            }
          });
          return sums;
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo13/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo13vue_type_script_lang_js_ = (demo13vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo13/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector



























































































































/* harmony default export */ var demo13vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo13/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo13/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo13vue_type_custom_index_0_blockType_vue_filename_injector = (demo13vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo13/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo13vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo13vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo13vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo13 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "56c6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: 'ID',\n          key: 'id'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name'\n        },\n        {\n          title: '\u6570\u503C 1',\n          key: 'amount1'\n        },\n        {\n          title: '\u6570\u503C 2',\n          key: 'amount2'\n        },\n        {\n          title: '\u6570\u503C 3',\n          key: 'amount3'\n        }\n      ],\n      data: [\n        {\n          id: '12987122',\n          name: '\u738B\u5C0F\u864E',\n          amount1: '234',\n          amount2: '3.2',\n          amount3: 10\n        },\n        {\n          id: '12987123',\n          name: '\u738B\u5C0F\u864E',\n          amount1: '165',\n          amount2: '4.43',\n          amount3: 12\n        },\n        {\n          id: '12987124',\n          name: '\u738B\u5C0F\u864E',\n          amount1: '324',\n          amount2: '1.9',\n          amount3: 9\n        },\n        {\n          id: '12987125',\n          name: '\u738B\u5C0F\u864E',\n          amount1: '621',\n          amount2: '2.2',\n          amount3: 17\n        },\n        {\n          id: '12987126',\n          name: '\u738B\u5C0F\u864E',\n          amount1: '539',\n          amount2: '4.1',\n          amount3: 15\n        }\n      ],\n      options: {\n        showSummary: true,\n        summaryMethod (param) {\n          const { columns, data } = param\n          const sums = []\n          columns.forEach((column, index) => {\n            if (index === 0) {\n              sums[index] = '\u603B\u4EF7'\n              return\n            }\n            const values = data.map(item => Number(item[column.property]))\n            if (!values.every(value => isNaN(value))) {\n              sums[index] = values.reduce((prev, curr) => {\n                const value = Number(curr)\n                if (!isNaN(value)) {\n                  return prev + curr\n                } else {\n                  return prev\n                }\n              }, 0)\n              sums[index] += ' \u5143'\n            } else {\n              sums[index] = 'N/A'\n            }\n          })\n\n          return sums\n        }\n      }\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "5982":
/***/ (function(module, exports) {

module.exports = "将 `options` 中的 `showSummary` 设置为 `true` 就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过 `sumText` 配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用 `summaryMethod` 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中。代码如下：\n"

/***/ })

}]);
//# sourceMappingURL=chunk-2acc4fa0.dbafc7e5.js.map