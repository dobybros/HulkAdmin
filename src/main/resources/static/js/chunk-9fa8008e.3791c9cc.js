(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-9fa8008e","chunk-2d0b8eec","chunk-2d0b2917"],{

/***/ "2553":
/***/ (function(module, exports) {

module.exports = "通过给 `D2 Crud` 传入 `rowHandle` 可开启表格操作列，传入 `columnHeader` 可以自定义操作列的表头，传入 `edit` 对象可以开启编辑模式，需要传入 `edit-template` 来为编辑添加模板，通过 `ref` 调用 `D2 Crud` 的 `showDialog` 方法，并传入 `mode: 'edit'` 、`rowIndex` 属性和 `template`对象，可使用自定义模板编辑指定行，定义 `edit-title` 来修改编辑模态框的标题，向`form-options` 中传入 `labelWidth` 和 `labelPosition` 来控制表单中label的显示, `saveLoading` 则控制保存按钮的loading状态， `row-edit` 事件控制数据编辑，参数： `index` 是当前编辑行的索引， `row` 是当前编辑行的数据， `done` 用于控制编辑成功，可以在 `done()` 之前加入自己的逻辑代码，`done()`可以传入包含表单字段的对象来覆盖提交的数据，`done(false)` 可以取消编辑，通过 `ref` 调用 `D2 Crud` 的 `closeDialog` 方法可以关闭模态框。代码如下：\n"

/***/ }),

/***/ "3191":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      edit-title=\"\u6211\u7684\u4FEE\u6539\"\n      :edit-template=\"editTemplate\"\n      :form-options=\"formOptions\"\n      @dialog-open=\"handleDialogOpen\"\n      @row-edit=\"handleRowEdit\"\n      @dialog-cancel=\"handleDialogCancel\">\n        <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"editRowWithNewTemplate\">\u4F7F\u7528\u81EA\u5B9A\u4E49\u6A21\u677F\u7F16\u8F91\u7B2C\u4E09\u884C</el-button>\n      </d2-crud>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          forbidEdit: true,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',\n          forbidEdit: false,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',\n          forbidEdit: false,\n          showEditButton: false\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',\n          forbidEdit: false,\n          showEditButton: true\n        }\n      ],\n      rowHandle: {\n        columnHeader: '\u7F16\u8F91\u8868\u683C',\n        edit: {\n          icon: 'el-icon-edit',\n          text: '\u70B9\u6211\u8FDB\u884C\u7F16\u8F91',\n          size: 'small',\n          show (index, row) {\n            if (row.showEditButton) {\n              return true\n            }\n            return false\n          },\n          disabled (index, row) {\n            if (row.forbidEdit) {\n              return true\n            }\n            return false\n          }\n        }\n      },\n      editTemplate: {\n        date: {\n          title: '\u65E5\u671F',\n          value: ''\n        },\n        name: {\n          title: '\u59D3\u540D',\n          value: ''\n        },\n        address: {\n          title: '\u5730\u5740',\n          value: ''\n        },\n        forbidEdit: {\n          title: '\u7981\u7528\u6309\u94AE',\n          value: false,\n          component: {\n            show: false\n          }\n        },\n        showEditButton: {\n          title: '\u663E\u793A\u6309\u94AE',\n          value: true,\n          component: {\n            show: false\n          }\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      }\n    }\n  },\n  methods: {\n    handleDialogOpen ({ mode, row }) {\n      this.$message({\n        message: '\u6253\u5F00\u6A21\u6001\u6846\uFF0C\u6A21\u5F0F\u4E3A\uFF1A' + mode,\n        type: 'success'\n      })\n    },\n    editRowWithNewTemplate () {\n      this.$refs.d2Crud.showDialog({\n        mode: \"edit\",\n        rowIndex: 2,\n        template: {\n          date: {\n            title: '\u65E5\u671F',\n            value: ''\n          },\n          name: {\n            title: '\u59D3\u540D',\n            value: ''\n          }\n        }\n      })\n    },\n    handleRowEdit ({ index, row }, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '\u7F16\u8F91\u6210\u529F',\n          type: 'success'\n        })\n\n        // done\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\u6765\u4FEE\u6539\u63D0\u4EA4\u7684\u67D0\u4E2A\u5B57\u6BB5\n        done({\n          address: '\u6211\u662F\u901A\u8FC7done\u4E8B\u4EF6\u4F20\u5165\u7684\u6570\u636E\uFF01'\n        })\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '\u53D6\u6D88\u7F16\u8F91',\n        type: 'warning'\n      })\n      done()\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "c803":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo17/index.vue?vue&type=template&id=59b971c9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("修改数据")]),_c('d2-crud',{ref:"d2Crud",attrs:{"columns":_vm.columns,"data":_vm.data,"rowHandle":_vm.rowHandle,"edit-title":"我的修改","edit-template":_vm.editTemplate,"form-options":_vm.formOptions},on:{"dialog-open":_vm.handleDialogOpen,"row-edit":_vm.handleRowEdit,"dialog-cancel":_vm.handleDialogCancel}},[_c('el-button',{staticStyle:{"margin-bottom":"5px"},attrs:{"slot":"header"},on:{"click":_vm.editRowWithNewTemplate},slot:"header"},[_vm._v("使用自定义模板编辑第三行")])],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo17/index.vue?vue&type=template&id=59b971c9&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo17/doc.md
var doc = __webpack_require__("2553");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo17/code.js
var code = __webpack_require__("3191");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo17/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo17vue_type_script_lang_js_ = ({
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
      }],
      rowHandle: {
        columnHeader: '编辑表格',
        edit: {
          icon: 'el-icon-edit',
          text: '点我进行编辑',
          size: 'small',
          show: function show(index, row) {
            if (row.showEditButton) {
              return true;
            }

            return false;
          },
          disabled: function disabled(index, row) {
            if (row.forbidEdit) {
              return true;
            }

            return false;
          }
        }
      },
      editTemplate: {
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
        },
        forbidEdit: {
          title: '禁用按钮',
          value: false,
          component: {
            show: false
          }
        },
        showEditButton: {
          title: '显示按钮',
          value: true,
          component: {
            show: false
          }
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
      var mode = _ref.mode,
          row = _ref.row;
      this.$message({
        message: '打开模态框，模式为：' + mode,
        type: 'success'
      });
    },
    editRowWithNewTemplate: function editRowWithNewTemplate() {
      this.$refs.d2Crud.showDialog({
        mode: 'edit',
        rowIndex: 2,
        template: {
          date: {
            title: '日期',
            value: ''
          },
          name: {
            title: '姓名',
            value: ''
          }
        }
      });
    },
    handleRowEdit: function handleRowEdit(_ref2, done) {
      var _this = this;

      var index = _ref2.index,
          row = _ref2.row;
      this.formOptions.saveLoading = true;
      setTimeout(function () {
        console.log(index);
        console.log(row);

        _this.$message({
          message: '编辑成功',
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
        message: '取消编辑',
        type: 'warning'
      });
      done();
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo17/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo17vue_type_script_lang_js_ = (demo17vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo17/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector


























































































































































































/* harmony default export */ var demo17vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo17/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo17/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo17vue_type_custom_index_0_blockType_vue_filename_injector = (demo17vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo17/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo17vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo17vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo17vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo17 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-9fa8008e.3791c9cc.js.map