(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0a3d05"],{

/***/ "047b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table16/index.vue?vue&type=template&id=2b6b1904&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.tableData6,"border":"","show-summary":""}},[_c('el-table-column',{attrs:{"prop":"id","label":"ID","width":"180"}}),_c('el-table-column',{attrs:{"prop":"name","label":"姓名"}}),_c('el-table-column',{attrs:{"prop":"amount1","sortable":"","label":"数值 1"}}),_c('el-table-column',{attrs:{"prop":"amount2","sortable":"","label":"数值 2"}}),_c('el-table-column',{attrs:{"prop":"amount3","sortable":"","label":"数值 3"}})],1),_c('el-table',{staticStyle:{"width":"100%","margin-top":"20px"},attrs:{"data":_vm.tableData6,"border":"","height":"200","summary-method":_vm.getSummaries,"show-summary":""}},[_c('el-table-column',{attrs:{"prop":"id","label":"ID","width":"180"}}),_c('el-table-column',{attrs:{"prop":"name","label":"姓名"}}),_c('el-table-column',{attrs:{"prop":"amount1","label":"数值 1（元）"}}),_c('el-table-column',{attrs:{"prop":"amount2","label":"数值 2（元）"}}),_c('el-table-column',{attrs:{"prop":"amount3","label":"数值 3（元）"}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table16/index.vue?vue&type=template&id=2b6b1904&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table16/index.vue?vue&type=script&lang=js&


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
/* harmony default export */ var table16vue_type_script_lang_js_ = ({
  title: '表尾合计行',
  index: 16,
  data: function data() {
    return {
      tableData6: [{
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
      }]
    };
  },
  methods: {
    getSummaries: function getSummaries(param) {
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
});
// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table16/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_table16vue_type_script_lang_js_ = (table16vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/element/data-table/components/table16/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector






































































































































/* harmony default export */ var table16vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/element/data-table/components/table16/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table16/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var components_table16vue_type_custom_index_0_blockType_vue_filename_injector = (table16vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/element/data-table/components/table16/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_table16vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof components_table16vue_type_custom_index_0_blockType_vue_filename_injector === 'function') components_table16vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var table16 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0a3d05.2da89246.js.map