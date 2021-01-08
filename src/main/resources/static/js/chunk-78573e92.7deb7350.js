(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-78573e92","chunk-2d0d03f7","chunk-2d0e19d2"],{

/***/ "0a3c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo30/index.vue?vue&type=template&id=3297ee8a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("表单事件监听")]),_c('d2-crud',{ref:"d2Crud",attrs:{"columns":_vm.columns,"data":_vm.data,"rowHandle":_vm.rowHandle,"edit-template":_vm.editTemplate,"form-options":_vm.formOptions},on:{"row-edit":_vm.handleRowEdit,"dialog-cancel":_vm.handleDialogCancel,"form-data-change":_vm.handleFormDataChange}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo30/index.vue?vue&type=template&id=3297ee8a&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo30/doc.md
var doc = __webpack_require__("7ad6");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo30/code.js
var code = __webpack_require__("66bc");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo30/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo30vue_type_script_lang_js_ = ({
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
          size: 'small'
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
    handleFormDataChange: function handleFormDataChange(_ref) {
      var key = _ref.key,
          value = _ref.value;
      console.log(key);
      console.log(value);
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

        done();
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
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo30/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo30vue_type_script_lang_js_ = (demo30vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo30/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector























































































































































/* harmony default export */ var demo30vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo30/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo30/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo30vue_type_custom_index_0_blockType_vue_filename_injector = (demo30vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo30/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo30vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo30vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo30vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo30 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "66bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      :edit-template=\"editTemplate\"\n      :form-options=\"formOptions\"\n      @row-edit=\"handleRowEdit\"\n      @dialog-cancel=\"handleDialogCancel\"\n      @form-data-change=\"handleFormDataChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          forbidEdit: true,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',\n          forbidEdit: false,\n          showEditButton: true\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',\n          forbidEdit: false,\n          showEditButton: false\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',\n          forbidEdit: false,\n          showEditButton: true\n        }\n      ],\n      rowHandle: {\n        columnHeader: '\u7F16\u8F91\u8868\u683C',\n        edit: {\n          icon: 'el-icon-edit',\n          text: '\u70B9\u6211\u8FDB\u884C\u7F16\u8F91',\n          size: 'small'\n        }\n      },\n      editTemplate: {\n        date: {\n          title: '\u65E5\u671F',\n          value: ''\n        },\n        name: {\n          title: '\u59D3\u540D',\n          value: ''\n        },\n        address: {\n          title: '\u5730\u5740',\n          value: ''\n        },\n        forbidEdit: {\n          title: '\u7981\u7528\u6309\u94AE',\n          value: false,\n          component: {\n            show: false\n          }\n        },\n        showEditButton: {\n          title: '\u663E\u793A\u6309\u94AE',\n          value: true,\n          component: {\n            show: false\n          }\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      }\n    }\n  },\n  methods: {\n    handleFormDataChange ({ key, value }) {\n      console.log(key)\n      console.log(value)\n    },\n    handleRowEdit ({ index, row }, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '\u7F16\u8F91\u6210\u529F',\n          type: 'success'\n        })\n        done()\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '\u53D6\u6D88\u7F16\u8F91',\n        type: 'warning'\n      })\n      done()\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "7ad6":
/***/ (function(module, exports) {

module.exports = "通过 `form-data-change` 事件可以监听表单内的数据变化，监听在crud内部是通过change事件触发的（这意味着input类组件失去焦点才会触发事件，单纯输入不会触发），接收一个对象参数 {key, value}，`key` 为改变的字段，`value` 为改变后的值。代码如下：\n"

/***/ })

}]);
//# sourceMappingURL=chunk-78573e92.7deb7350.js.map