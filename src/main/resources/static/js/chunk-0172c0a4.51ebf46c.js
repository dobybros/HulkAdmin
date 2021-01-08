(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0172c0a4","chunk-2d237d15","chunk-2d0d7468"],{

/***/ "75b6":
/***/ (function(module, exports) {

module.exports = "通过给 `D2 Crud` 传入 `add-rules` 或 `edit-rules` 可开启新增/修改表单校验，校验规则参见：[async-validator](https://github.com/yiminghe/async-validator)。代码如下：\n"

/***/ }),

/***/ "aa61":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo22/index.vue?vue&type=template&id=25c7e473&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("表单校验")]),_c('d2-crud',{ref:"d2Crud",attrs:{"columns":_vm.columns,"data":_vm.data,"add-template":_vm.addTemplate,"form-options":_vm.formOptions,"add-rules":_vm.addRules},on:{"row-add":_vm.handleRowAdd,"dialog-cancel":_vm.handleDialogCancel}},[_c('el-button',{staticStyle:{"margin-bottom":"5px"},attrs:{"slot":"header"},on:{"click":_vm.addRow},slot:"header"},[_vm._v("新增")])],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo22/index.vue?vue&type=template&id=25c7e473&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo22/doc.md
var doc = __webpack_require__("75b6");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo22/code.js
var code = __webpack_require__("fd78");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo22/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo22vue_type_script_lang_js_ = ({
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
      addButton: {
        text: '点我查看表单校验',
        icon: 'el-icon-plus',
        size: 'small'
      },
      addTemplate: {
        date: {
          title: '日期',
          value: ''
        },
        name: {
          title: '姓名',
          value: ''
        },
        address: {
          title: '地址',
          value: ''
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false
      },
      addRules: {
        date: [{
          required: true,
          message: '请输入日期',
          trigger: 'blur'
        }],
        name: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }],
        address: [{
          required: true,
          message: '请输入地址',
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    addRow: function addRow() {
      this.$refs.d2Crud.showDialog({
        mode: 'add'
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

        done();
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
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo22/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo22vue_type_script_lang_js_ = (demo22vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo22/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector




































































































































/* harmony default export */ var demo22vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo22/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo22/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo22vue_type_custom_index_0_blockType_vue_filename_injector = (demo22vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo22/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo22vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo22vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo22vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo22 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "fd78":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      :add-template=\"addTemplate\"\n      :form-options=\"formOptions\"\n      :add-rules=\"addRules\"\n      @row-add=\"handleRowAdd\"\n      @dialog-cancel=\"handleDialogCancel\">\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"addRow\">\u65B0\u589E</el-button>\n    </d2-crud>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'\n        }\n      ],\n      addButton: {\n        text: '\u70B9\u6211\u67E5\u770B\u8868\u5355\u6821\u9A8C',\n        icon: 'el-icon-plus',\n        size: 'small'\n      },\n      addTemplate: {\n        date: {\n          title: '\u65E5\u671F',\n          value: ''\n        },\n        name: {\n          title: '\u59D3\u540D',\n          value: ''\n        },\n        address: {\n          title: '\u5730\u5740',\n          value: ''\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      },\n      addRules: {\n        date: [ { required: true, message: '\u8BF7\u8F93\u5165\u65E5\u671F', trigger: 'blur' } ],\n        name: [ { required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D', trigger: 'blur' } ],\n        address: [ { required: true, message: '\u8BF7\u8F93\u5165\u5730\u5740', trigger: 'blur' } ]\n      }\n    }\n  },\n  methods: {\n    addRow () {\n      this.$refs.d2Crud.showDialog({\n        mode: 'add'\n      })\n    },\n    handleRowAdd (row, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(row)\n        this.$message({\n          message: '\u4FDD\u5B58\u6210\u529F',\n          type: 'success'\n        });\n        done()\n        this.formOptions.saveLoading = false\n      }, 300);\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '\u53D6\u6D88\u4FDD\u5B58',\n        type: 'warning'\n      });\n      done()\n    }\n  }\n}\n</script>");

/***/ })

}]);
//# sourceMappingURL=chunk-0172c0a4.51ebf46c.js.map