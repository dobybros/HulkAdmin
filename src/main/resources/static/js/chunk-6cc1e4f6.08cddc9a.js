(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-6cc1e4f6","chunk-2d0cc614","chunk-2d21a44e","chunk-2d0dd87a","chunk-2d0b9fa2","chunk-2d0ce7f2"],{

/***/ "34f1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      @d2-data-change=\"handleDataChange\"/>\n  </div>\n</template>\n\n<script>\nimport MyTag from './MyTag'\n\nexport default {\n  components: {\n    MyTag\n  },\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        },\n        {\n          title: '\u68C0\u67E5\u72B6\u6001\uFF08\u70B9\u51FB\u53EF\u4FEE\u6539\uFF09',\n          key: 'check',\n          component: {\n            name: MyTag,\n            props: {\n              myProps: '\u6211\u662F\u901A\u8FC7props\u4F20\u8FC7\u6765\u7684\u6570\u636E\uFF01'\n            }\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          check: true\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',\n          check: false\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',\n          check: true\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',\n          check: true\n        }\n      ]\n    }\n  },\n  methods: {\n    handleDataChange (data) {\n      console.log(data)\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "4e4a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo25/MyTag.vue?vue&type=template&id=9d8bda74&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"cursor":"pointer"}},[_c('el-tag',{attrs:{"type":_vm.type},nativeOn:{"click":function($event){return _vm.handleClick($event)}}},[_vm._v(_vm._s(_vm.text))])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo25/MyTag.vue?vue&type=template&id=9d8bda74&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo25/MyTag.vue?vue&type=script&lang=js&
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
    },
    scope: {
      default: null
    },
    myProps: {
      default: null
    }
  },
  computed: {
    type: function type() {
      return this.value ? 'success' : 'danger';
    },
    text: function text() {
      if (this.scope.$index === 1) {
        return this.myProps;
      } else if (this.scope.$index === 3) {
        return '通过scope拿到了当前行日期：' + this.scope.row.date;
      }

      return this.value ? '是' : '否';
    }
  },
  mounted: function mounted() {
    console.log(this.scope);
    console.log(this.myProps);
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('input', !this.value);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo25/MyTag.vue?vue&type=script&lang=js&
 /* harmony default export */ var demo25_MyTagvue_type_script_lang_js_ = (MyTagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo25/MyTag.vue?vue&type=custom&index=0&blockType=vue-filename-injector














































/* harmony default export */ var MyTagvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo25/MyTag.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo25/MyTag.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var demo25_MyTagvue_type_custom_index_0_blockType_vue_filename_injector = (MyTagvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo25/MyTag.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  demo25_MyTagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof demo25_MyTagvue_type_custom_index_0_blockType_vue_filename_injector === 'function') demo25_MyTagvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var MyTag = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6068":
/***/ (function(module, exports) {

module.exports = "向 `columns` 的 `component` 对象的 `name` 传入自定义组件来进行渲染，如果是[全局注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)的自定义组件，只需传入组件名即可；如果是[局部注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)的组件，则需要传入`import` 的那个组件对象。自定义组件的写法需要符合[自定义组件使用v-model](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)的写法，可以在 `component` 中传入 `props` 字段，传入的字段可以在自定义组件中通过 `props` 接收，自定义组件还可以通过在 `props` 中定义 `scope` 字段来拿到当前行的所有数据，代码如下：\n"

/***/ }),

/***/ "827a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      @d2-data-change=\"handleDataChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        },\n        {\n          title: '\u68C0\u67E5\u72B6\u6001\uFF08\u70B9\u51FB\u53EF\u4FEE\u6539\uFF09',\n          key: 'check',\n          component: {\n            name: 'my-tag',\n            props: {\n              myProps: '\u6211\u662F\u901A\u8FC7props\u4F20\u8FC7\u6765\u7684\u6570\u636E\uFF01'\n            }\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          check: true\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',\n          check: false\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',\n          check: true\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',\n          check: true\n        }\n      ]\n    }\n  },\n  methods: {\n    handleDataChange (data) {\n      console.log(data)\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "bb91":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div style=\"cursor: pointer\">\n    <el-tag :type=\"type\" @click.native=\"handleClick\">{{ text }}</el-tag>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    value: {\n      type: Boolean,\n      require: true\n    },\n    // \u672C\u884C\u7684\u6240\u6709\u6570\u636E\uFF0C\u6B64\u5B57\u6BB5\u4E0D\u9700\u8981\u989D\u5916\u914D\u7F6E\n    scope: {\n      default: null\n    },\n    // \u901A\u8FC7 component \u4E2D props \u5B57\u6BB5\u4F20\u8FC7\u6765\u7684\u6570\u636E\uFF0C\u6B64\u5B57\u6BB5\u9700\u8981\u5148\u5728 component \u4E2D\u914D\u7F6E\n    myProps: {\n      default: null\n    }\n  },\n  computed: {\n    type () {\n      return this.value ? 'success' : 'danger'\n    },\n    text () {\n      if (this.scope.$index === 1) {\n        return this.myProps\n      } else if (this.scope.$index === 3) {\n        return '\u901A\u8FC7scope\u62FF\u5230\u4E86\u5F53\u524D\u884C\u65E5\u671F\uFF1A' + this.scope.row.date\n      }\n      return this.value ? '\u662F' : '\u5426'\n    }\n  },\n  mounted () {\n    console.log(this.scope)\n    console.log(this.myProps)\n  },\n  methods: {\n    handleClick () {\n      this.$emit('input', !this.value)\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "eb3e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo25/index.vue?vue&type=template&id=08ff9640&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("表格自定义组件")]),_c('d2-crud',{ref:"d2Crud",attrs:{"columns":_vm.columns,"data":_vm.data},on:{"d2-data-change":_vm.handleDataChange}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('h4',[_vm._v("全局注册写法：")]),_c('d2-highlight',{attrs:{"code":_vm.codeOverall}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('h4',[_vm._v("局部注册写法：")]),_c('d2-highlight',{attrs:{"code":_vm.codePart}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('h4',[_vm._v("自定义组件 MyTag 代码：")]),_c('d2-highlight',{attrs:{"code":_vm.codeComponent}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo25/index.vue?vue&type=template&id=08ff9640&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo25/doc.md
var doc = __webpack_require__("6068");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo25/codeOverall.js
var codeOverall = __webpack_require__("827a");

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo25/codePart.js
var codePart = __webpack_require__("34f1");

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo25/codeComponent.js
var codeComponent = __webpack_require__("bb91");

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo25/MyTag.vue + 6 modules
var MyTag = __webpack_require__("4e4a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo25/index.vue?vue&type=script&lang=js&
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





/* harmony default export */ var demo25vue_type_script_lang_js_ = ({
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
          name: MyTag["default"],
          props: {
            myProps: '我是通过props传过来的数据！'
          }
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
      }]
    };
  },
  methods: {
    handleDataChange: function handleDataChange(data) {
      console.log(data);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo25/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo25vue_type_script_lang_js_ = (demo25vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo25/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector













































































































/* harmony default export */ var demo25vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo25/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo25/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo25vue_type_custom_index_0_blockType_vue_filename_injector = (demo25vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo25/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo25vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo25vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo25vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo25 = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-6cc1e4f6.08cddc9a.js.map