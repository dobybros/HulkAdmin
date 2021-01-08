(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4783d398","chunk-2d21eb94","chunk-2d21f119"],{

/***/ "6168":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo31/index.vue?vue&type=template&id=6611b192&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("CRUD事件")]),_c('d2-crud',{ref:"d2Crud",attrs:{"columns":_vm.columns,"data":_vm.data}},[_c('el-button',{staticStyle:{"margin-bottom":"5px"},attrs:{"slot":"header"},on:{"click":_vm.updateCell},slot:"header"},[_vm._v("更新第二行日期")]),_c('el-button',{staticStyle:{"margin-bottom":"5px"},attrs:{"slot":"header"},on:{"click":_vm.updateRow},slot:"header"},[_vm._v("更新第三行所有数据")]),_c('el-button',{staticStyle:{"margin-bottom":"5px"},attrs:{"slot":"header"},on:{"click":_vm.addRow},slot:"header"},[_vm._v("新增一行")]),_c('el-button',{staticStyle:{"margin-bottom":"5px"},attrs:{"slot":"header"},on:{"click":_vm.removeRow},slot:"header"},[_vm._v("删除最后一行")])],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo31/index.vue?vue&type=template&id=6611b192&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo31/doc.md
var doc = __webpack_require__("d7f6");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo31/code.js
var code = __webpack_require__("d77b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo31/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo31vue_type_script_lang_js_ = ({
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
        address: '上海市普陀区金沙江路 1518 弄',
        forbidEdit: true,
        showEditButton: true
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        forbidEdit: false,
        showEditButton: true
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        forbidEdit: false,
        showEditButton: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        forbidEdit: false,
        showEditButton: true
      }]
    };
  },
  methods: {
    updateCell: function updateCell() {
      this.$refs.d2Crud.updateCell(1, 'date', '2018-01-01');
    },
    updateRow: function updateRow() {
      this.$refs.d2Crud.updateRow(2, {
        date: '2018-01-01',
        name: '王小小',
        address: '上海市普陀区金沙江路 2333 弄'
      });
    },
    addRow: function addRow() {
      this.$refs.d2Crud.addRow({
        date: '2018-01-01',
        name: '王小二',
        address: '上海市普陀区金沙江路 7777 弄'
      });
    },
    removeRow: function removeRow() {
      this.$refs.d2Crud.removeRow(this.$refs.d2Crud.d2CrudData.length - 1);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo31/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo31vue_type_script_lang_js_ = (demo31vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo31/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector









































































































/* harmony default export */ var demo31vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo31/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo31/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo31vue_type_custom_index_0_blockType_vue_filename_injector = (demo31vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo31/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo31vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo31vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo31vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo31 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "d77b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\">\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"updateCell\">\u66F4\u65B0\u7B2C\u4E8C\u884C\u65E5\u671F</el-button>\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"updateRow\">\u66F4\u65B0\u7B2C\u4E09\u884C\u6240\u6709\u6570\u636E</el-button>\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"addRow\">\u65B0\u589E\u4E00\u884C</el-button>\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"removeRow\">\u5220\u9664\u6700\u540E\u4E00\u884C</el-button>\n    </d2-crud>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          forbidEdit: true,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',\n          forbidEdit: false,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',\n          forbidEdit: false,\n          showEditButton: false\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',\n          forbidEdit: false,\n          showEditButton: true\n        }\n      ]\n    }\n  },\n  methods: {\n    updateCell () {\n      this.$refs.d2Crud.updateCell(1, 'date', '2018-01-01')\n    },\n    updateRow () {\n      this.$refs.d2Crud.updateRow(2, {\n        date: '2018-01-01',\n        name: '\u738B\u5C0F\u5C0F',\n        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 2333 \u5F04'\n      })\n    },\n    addRow () {\n      this.$refs.d2Crud.addRow({\n        date: '2018-01-01',\n        name: '\u738B\u5C0F\u4E8C',\n        address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 7777 \u5F04'\n      })\n    },\n    removeRow () {\n      this.$refs.d2Crud.removeRow(this.$refs.d2Crud.d2CrudData.length - 1)\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "d7f6":
/***/ (function(module, exports) {

module.exports = "`D2 Crud` 向外部暴露了一些方法，除了之前介绍过的 `showDialog` 和 `closeDialog` 方法，还有以下几个常用方法：\n- updateCell\n  * 更新单元格\n  * 参数：rowIndex, key, value\n- updateRow\n  * 更新行\n  * 参数：index, row\n- addRow\n  * 新增一行\n  * 参数：row\n- removeRow\n  * 删除一行\n  * 参数：index   \n\n代码如下：\n"

/***/ })

}]);
//# sourceMappingURL=chunk-4783d398.21e693c3.js.map