(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-1d3645ec","chunk-2d210591","chunk-2d0b5f37"],{

/***/ "1aa2":
/***/ (function(module, exports) {

module.exports = "通过 `ref` 调用 `D2 Crud` 的 `showDialog` 方法，并传入 `mode: 'add'`属性，可开启新增模式，需要定义 `add-template` 来为新增的表单添加模板，也可以向 `showDialog` 中传入 `template`对象来灵活定义新的模板，定义 `add-title` 来修改新增模态框的标题，向`form-options` 中传入 `labelWidth` 和 `labelPosition` 来控制表单中label的显示, `saveLoading` 则控制保存按钮的loading状态， `row-add` 事件控制数据新增，接收两个参数： `row` 是当前新增行的数据， `done` 用于控制保存成功，可以在 `done()` 之前加入自己的逻辑代码，`done()`可以传入包含表单字段的对象来覆盖提交的数据，`done(false)` 可以取消新增，通过 `ref` 调用 `D2 Crud` 的 `closeDialog` 方法可以关闭模态框。代码如下：\n"

/***/ }),

/***/ "66e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo16/index.vue?vue&type=template&id=7de05450&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("新增数据")]),_c('d2-crud',{ref:"d2Crud",attrs:{"columns":_vm.columns,"data":_vm.data,"add-title":"我的新增","add-template":_vm.addTemplate,"form-options":_vm.formOptions},on:{"dialog-open":_vm.handleDialogOpen,"row-add":_vm.handleRowAdd,"dialog-cancel":_vm.handleDialogCancel}},[_c('el-button',{staticStyle:{"margin-bottom":"5px"},attrs:{"slot":"header"},on:{"click":_vm.addRow},slot:"header"},[_vm._v("新增")]),_c('el-button',{staticStyle:{"margin-bottom":"5px"},attrs:{"slot":"header"},on:{"click":_vm.addRowWithNewTemplate},slot:"header"},[_vm._v("使用自定义模板新增")])],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo16/index.vue?vue&type=template&id=7de05450&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo16/doc.md
var doc = __webpack_require__("1aa2");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo16/code.js
var code = __webpack_require__("b805");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo16/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo16vue_type_script_lang_js_ = ({
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
      addTemplate: {
        date: {
          title: '日期',
          value: '2016-05-05'
        },
        name: {
          title: '姓名',
          value: '王小虎'
        },
        address: {
          title: '地址',
          value: '上海市普陀区金沙江路 1520 弄'
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false
      }
    };
  },
  methods: {
    handleDialogOpen: function handleDialogOpen(_ref) {
      var mode = _ref.mode;
      this.$message({
        message: '打开模态框，模式为：' + mode,
        type: 'success'
      });
    },
    addRow: function addRow() {
      this.$refs.d2Crud.showDialog({
        mode: 'add'
      });
    },
    addRowWithNewTemplate: function addRowWithNewTemplate() {
      this.$refs.d2Crud.showDialog({
        mode: 'add',
        template: {
          name: {
            title: '姓名',
            value: ''
          },
          value1: {
            title: '新属性1',
            value: ''
          },
          value2: {
            title: '新属性2',
            value: ''
          }
        }
      });
    },
    handleRowAdd: function handleRowAdd(row, done) {
      var _this = this;

      this.formOptions.saveLoading = true;
      setTimeout(function () {
        console.log(row);

        _this.$message({
          message: '保存成功',
          type: 'success'
        });

        done({
          address: '我是通过done事件传入的数据！'
        });
        _this.formOptions.saveLoading = false;
      }, 300);
    },
    handleDialogCancel: function handleDialogCancel(done) {
      this.$message({
        message: '取消保存',
        type: 'warning'
      });
      done();
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo16/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo16vue_type_script_lang_js_ = (demo16vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo16/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector























































































































































/* harmony default export */ var demo16vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo16/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo16/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo16vue_type_custom_index_0_blockType_vue_filename_injector = (demo16vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo16/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo16vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo16vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo16vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo16 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b805":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      add-title=\"\u6211\u7684\u65B0\u589E\"\n      :add-template=\"addTemplate\"\n      :form-options=\"formOptions\"\n      @dialog-open=\"handleDialogOpen\"\n      @row-add=\"handleRowAdd\"\n      @dialog-cancel=\"handleDialogCancel\">\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"addRow\">\u65B0\u589E</el-button>\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"addRowWithNewTemplate\">\u4F7F\u7528\u81EA\u5B9A\u4E49\u6A21\u677F\u65B0\u589E</el-button>\n    </d2-crud>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        }\n      ],\n      data: [\n          {\n            date: '2016-05-02',\n            name: '\u738B\u5C0F\u864E',\n            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'\n          },\n          {\n            date: '2016-05-04',\n            name: '\u738B\u5C0F\u864E',\n            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'\n          },\n          {\n            date: '2016-05-01',\n            name: '\u738B\u5C0F\u864E',\n            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'\n          },\n          {\n            date: '2016-05-03',\n            name: '\u738B\u5C0F\u864E',\n            address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'\n          }\n      ],\n      addTemplate: {\n        date: {\n          title: '\u65E5\u671F',\n          value: '2016-05-05'\n        },\n        name: {\n          title: '\u59D3\u540D',\n          value: '\u738B\u5C0F\u864E'\n        },\n        address: {\n          title: '\u5730\u5740',\n          value: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1520 \u5F04'\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      }\n    }\n  },\n  methods: {\n    handleDialogOpen ({ mode }) {\n      this.$message({\n        message: '\u6253\u5F00\u6A21\u6001\u6846\uFF0C\u6A21\u5F0F\u4E3A\uFF1A' + mode,\n        type: 'success'\n      })\n    },\n    // \u666E\u901A\u7684\u65B0\u589E\n    addRow () {\n      this.$refs.d2Crud.showDialog({\n        mode: 'add'\n      })\n    },\n    // \u4F20\u5165\u81EA\u5B9A\u4E49\u6A21\u677F\u7684\u65B0\u589E\n    addRowWithNewTemplate () {\n      this.$refs.d2Crud.showDialog({\n        mode: 'add',\n        template: {\n          name: {\n            title: '\u59D3\u540D',\n            value: ''\n          },\n          value1: {\n            title: '\u65B0\u5C5E\u60271',\n            value: ''\n          },\n          value2: {\n            title: '\u65B0\u5C5E\u60272',\n            value: ''\n          }\n        }\n      })\n    },\n    handleRowAdd (row, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(row)\n        this.$message({\n          message: '\u4FDD\u5B58\u6210\u529F',\n          type: 'success'\n        });\n\n        // done\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u6765\u4FEE\u6539\u63D0\u4EA4\u7684\u67D0\u4E2A\u5B57\u6BB5\n        done({\n          address: '\u6211\u662F\u901A\u8FC7done\u4E8B\u4EF6\u4F20\u5165\u7684\u6570\u636E\uFF01'\n        })\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '\u53D6\u6D88\u4FDD\u5B58',\n        type: 'warning'\n      });\n      done()\n    }\n  }\n}\n</script>");

/***/ })

}]);
//# sourceMappingURL=chunk-1d3645ec.0af73540.js.map