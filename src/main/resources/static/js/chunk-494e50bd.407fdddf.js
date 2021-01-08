(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-494e50bd","chunk-2d224ac5","chunk-2d0e2545","chunk-2d225fe3","chunk-2d0e95a5","chunk-2d0c54fe"],{

/***/ "3f0e":
/***/ (function(module, exports) {

module.exports = "向 `addTemplate` 或 `editTemplate` 中需要渲染自定义组件的 `component` 对象 `name` 中传入自定义组件来进行渲染，如果是[全局注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)的自定义组件，只需传入组件名即可；如果是[局部注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)的组件，则需要传入`import` 的那个组件对象。自定义组件的写法需要符合[自定义组件使用v-model](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)的写法，代码如下：\n"

/***/ }),

/***/ "7ddf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div style=\"cursor: pointer\">\n    <el-tag :type=\"type\" @click.native=\"handleClick\">{{ text }}</el-tag>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    value: {\n      type: Boolean,\n      require: true\n    }\n  },\n  computed: {\n    type () {\n      return this.value ? 'success' : 'danger'\n    },\n    text () {\n      return this.value ? '\u662F' : '\u5426'\n    }\n  },\n  methods: {\n    handleClick () {\n      this.$emit('input', !this.value)\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "8cbf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      :edit-template=\"editTemplate\"\n      @d2-data-change=\"handleDataChange\"\n      @row-edit=\"handleRowEdit\"\n      @dialog-cancel=\"handleDialogCancel\"/>\n  </div>\n</template>\n\n<script>\nimport MyTag from './MyTag'\n\nexport default {\n  components: {\n    MyTag\n  },\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        },\n        {\n          title: '\u68C0\u67E5\u72B6\u6001\uFF08\u70B9\u51FB\u53EF\u4FEE\u6539\uFF09',\n          key: 'check',\n          component: {\n            name: MyTag\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          check: true\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',\n          check: false\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',\n          check: true\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',\n          check: true\n        }\n      ],\n      rowHandle: {\n        columnHeader: '\u7F16\u8F91\u8868\u683C',\n        edit: {\n          icon: 'el-icon-edit',\n          text: '\u70B9\u6211\u7F16\u8F91\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6',\n          size: 'small'\n        }\n      },\n      editTemplate: {\n        date: {\n          title: '\u65E5\u671F',\n          value: ''\n        },\n        name: {\n          title: '\u59D3\u540D',\n          value: ''\n        },\n        address: {\n          title: '\u5730\u5740',\n          value: ''\n        },\n        check: {\n          title: '\u68C0\u67E5\u72B6\u6001\uFF08\u70B9\u51FB\u8FDB\u884C\u4FEE\u6539\uFF09',\n          value: false,\n          component: {\n            name: MyTag\n          }\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      }\n    }\n  },\n  methods: {\n    handleDataChange (data) {\n      console.log(data)\n    },\n    handleRowEdit ({ index, row }, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '\u7F16\u8F91\u6210\u529F',\n          type: 'success'\n        })\n        done()\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '\u53D6\u6D88\u7F16\u8F91',\n        type: 'warning'\n      })\n      done()\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "e0ae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=template&id=4d24e76b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"cursor":"pointer"}},[_c('el-tag',{attrs:{"type":_vm.type},nativeOn:{"click":function($event){return _vm.handleClick($event)}}},[_vm._v(_vm._s(_vm.text))])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=template&id=4d24e76b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var MyTagvue_type_script_lang_js_ = ({
  props: {
    value: {
      type: Boolean,
      require: true
    }
  },
  computed: {
    type: function type() {
      return this.value ? 'success' : 'danger';
    },
    text: function text() {
      return this.value ? '是' : '否';
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('input', !this.value);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=script&lang=js&
 /* harmony default export */ var demo26_MyTagvue_type_script_lang_js_ = (MyTagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=custom&index=0&blockType=vue-filename-injector































/* harmony default export */ var MyTagvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo26/MyTag.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/MyTag.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var demo26_MyTagvue_type_custom_index_0_blockType_vue_filename_injector = (MyTagvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/MyTag.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  demo26_MyTagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof demo26_MyTagvue_type_custom_index_0_blockType_vue_filename_injector === 'function') demo26_MyTagvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var MyTag = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "e783":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      :edit-template=\"editTemplate\"\n      @d2-data-change=\"handleDataChange\"\n      @row-edit=\"handleRowEdit\"\n      @dialog-cancel=\"handleDialogCancel\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        },\n        {\n          title: '\u68C0\u67E5\u72B6\u6001\uFF08\u70B9\u51FB\u53EF\u4FEE\u6539\uFF09',\n          key: 'check',\n          component: {\n            name: 'my-tag'\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          check: true\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',\n          check: false\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',\n          check: true\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',\n          check: true\n        }\n      ],\n      rowHandle: {\n        columnHeader: '\u7F16\u8F91\u8868\u683C',\n        edit: {\n          icon: 'el-icon-edit',\n          text: '\u70B9\u6211\u7F16\u8F91\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6',\n          size: 'small'\n        }\n      },\n      editTemplate: {\n        date: {\n          title: '\u65E5\u671F',\n          value: ''\n        },\n        name: {\n          title: '\u59D3\u540D',\n          value: ''\n        },\n        address: {\n          title: '\u5730\u5740',\n          value: ''\n        },\n        check: {\n          title: '\u68C0\u67E5\u72B6\u6001\uFF08\u70B9\u51FB\u8FDB\u884C\u4FEE\u6539\uFF09',\n          value: false,\n          component: {\n            name: 'my-tag'\n          }\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      }\n    }\n  },\n  methods: {\n    handleDataChange (data) {\n      console.log(data)\n    },\n    handleRowEdit ({ index, row }, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '\u7F16\u8F91\u6210\u529F',\n          type: 'success'\n        })\n        done()\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '\u53D6\u6D88\u7F16\u8F91',\n        type: 'warning'\n      })\n      done()\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "ea6f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo26/index.vue?vue&type=template&id=0544c370&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("表单自定义组件")]),_c('d2-crud',{ref:"d2Crud",attrs:{"columns":_vm.columns,"data":_vm.data,"rowHandle":_vm.rowHandle,"edit-template":_vm.editTemplate},on:{"d2-data-change":_vm.handleDataChange,"row-edit":_vm.handleRowEdit,"dialog-cancel":_vm.handleDialogCancel}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('h4',[_vm._v("全局注册写法：")]),_c('d2-highlight',{attrs:{"code":_vm.codeOverall}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('h4',[_vm._v("局部注册写法：")]),_c('d2-highlight',{attrs:{"code":_vm.codePart}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('h4',[_vm._v("自定义组件 MyTag 代码：")]),_c('d2-highlight',{attrs:{"code":_vm.codeComponent}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/index.vue?vue&type=template&id=0544c370&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo26/doc.md
var doc = __webpack_require__("3f0e");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo26/codeOverall.js
var codeOverall = __webpack_require__("e783");

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo26/codePart.js
var codePart = __webpack_require__("8cbf");

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo26/codeComponent.js
var codeComponent = __webpack_require__("7ddf");

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo26/MyTag.vue + 6 modules
var MyTag = __webpack_require__("e0ae");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo26/index.vue?vue&type=script&lang=js&
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





/* harmony default export */ var demo26vue_type_script_lang_js_ = ({
  components: {
    MyTag: MyTag["default"]
  },
  data: function data() {
    return {
      doc: doc_default.a,
      codeOverall: codeOverall["default"],
      codePart: codePart["default"],
      codeComponent: codeComponent["default"],
      columns: [{
        title: '日期',
        key: 'date',
        width: '180'
      }, {
        title: '姓名',
        key: 'name',
        width: '180'
      }, {
        title: '地址',
        key: 'address'
      }, {
        title: '检查状态（点击可修改）',
        key: 'check',
        component: {
          name: MyTag["default"]
        }
      }],
      data: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        check: true
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        check: false
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        check: true
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        check: true
      }],
      rowHandle: {
        columnHeader: '编辑表格',
        edit: {
          icon: 'el-icon-edit',
          text: '点我编辑自定义表单组件',
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
        check: {
          title: '检查状态（点击进行修改）',
          value: false,
          component: {
            name: MyTag["default"]
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
    handleDataChange: function handleDataChange(data) {
      console.log(data);
    },
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
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo26vue_type_script_lang_js_ = (demo26vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo26/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector




































































































































































/* harmony default export */ var demo26vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo26/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo26vue_type_custom_index_0_blockType_vue_filename_injector = (demo26vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo26/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo26vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo26vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo26vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo26 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-494e50bd.407fdddf.js.map