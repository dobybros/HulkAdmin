(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-eab951e0","chunk-2d0d0018","chunk-2d2371bd"],{

/***/ "65ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      :edit-template=\"editTemplate\"\n      :form-options=\"formOptions\"\n      @row-edit=\"handleRowEdit\"\n      @dialog-cancel=\"handleDialogCancel\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'\n        }\n      ],\n      rowHandle: {\n        edit: {\n          icon: 'el-icon-edit',\n          text: '\u70B9\u6211\u67E5\u770B\u8868\u5355\u7EC4\u4EF6\u6E32\u67D3',\n          size: 'small',\n          fixed: 'right'\n        }\n      },\n      editTemplate: {\n        date: {\n          title: '\u65E5\u671F',\n          value: '',\n          component: {\n            name: 'el-date-picker',\n            span: 12\n          }\n        },\n        name: {\n          title: '\u59D3\u540D',\n          value: '',\n          component: {\n            name: 'el-select',\n            options: [\n              {\n                value: '\u738B\u5C0F\u864E',\n                label: '\u738B\u5C0F\u864E'\n              },\n              {\n                value: '\u738B\u4E2D\u864E',\n                label: '\u738B\u4E2D\u864E'\n              },\n              {\n                value: '\u738B\u8001\u864E',\n                label: '\u738B\u8001\u864E'\n              }\n            ],\n            span: 12\n          }\n        },\n        address: {\n          title: '\u5730\u5740',\n          value: '',\n          component: {\n            span: 18\n          }\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false,\n        gutter: 20\n      }\n    }\n  },\n  methods: {\n    handleRowEdit ({ index, row }, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '\u7F16\u8F91\u6210\u529F',\n          type: 'success'\n        })\n        done()\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '\u53D6\u6D88\u7F16\u8F91',\n        type: 'warning'\n      })\n      done()\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "c976":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo20/index.vue?vue&type=template&id=095800cf&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("表单组件渲染")]),_c('d2-crud',{attrs:{"columns":_vm.columns,"data":_vm.data,"rowHandle":_vm.rowHandle,"edit-template":_vm.editTemplate,"form-options":_vm.formOptions},on:{"row-edit":_vm.handleRowEdit,"dialog-cancel":_vm.handleDialogCancel}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo20/index.vue?vue&type=template&id=095800cf&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo20/doc.md
var doc = __webpack_require__("fa5a");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo20/code.js
var code = __webpack_require__("65ad");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo20/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo20vue_type_script_lang_js_ = ({
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
        edit: {
          icon: 'el-icon-edit',
          text: '点我查看表单组件渲染',
          size: 'small',
          fixed: 'right'
        }
      },
      editTemplate: {
        date: {
          title: '日期',
          value: '',
          component: {
            name: 'el-date-picker',
            span: 12
          }
        },
        name: {
          title: '姓名',
          value: '',
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
            span: 12
          }
        },
        address: {
          title: '地址',
          value: '',
          component: {
            span: 18
          }
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false,
        gutter: 20
      }
    };
  },
  methods: {
    handleRowEdit: function handleRowEdit(_ref, done) {
      var _this = this;

      var index = _ref.index,
          row = _ref.row;
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
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo20/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo20vue_type_script_lang_js_ = (demo20vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo20/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector






















































































































































/* harmony default export */ var demo20vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo20/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo20/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo20vue_type_custom_index_0_blockType_vue_filename_injector = (demo20vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo20/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo20vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo20vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo20vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo20 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "fa5a":
/***/ (function(module, exports) {

module.exports = "向 `add-template` 或 `edit-template` 的 `component` 对象传入 `name` 属性来控制渲染的组件，默认为 `el-input` ，支持的组件有 `el-input-number` `el-radio` `el-checkbox` `el-select` `el-cascader` `el-switch` `el-slider` `el-time-select` `el-time-picker` `el-date-picker` `el-rate` `el-color-picker` ，也可以使用 `render函数` 自己渲染组件，只需在 `component` 中传入 `renderFuntion` ，接收一个参数 `h`，[render函数使用方法](https://cn.vuejs.org/v2/guide/render-function.html)。代码如下：\n"

/***/ })

}]);
//# sourceMappingURL=chunk-eab951e0.95500546.js.map