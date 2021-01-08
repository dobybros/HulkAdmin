(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-dca8126a","chunk-746f62b0","chunk-2d22d5f9"],{

/***/ "2d833":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :rowHandle=\"rowHandle\"\n      @row-remove=\"handleRowRemove\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u65E5\u671F',\n          key: 'date'\n        },\n        {\n          title: '\u59D3\u540D',\n          key: 'name'\n        },\n        {\n          title: '\u5730\u5740',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04',\n          forbidRemove: true,\n          showRemoveButton: true\n        },\n        {\n          date: '2016-05-04',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04',\n          forbidRemove: false,\n          showRemoveButton: true\n        },\n        {\n          date: '2016-05-01',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04',\n          forbidRemove: false,\n          showRemoveButton: false\n        },\n        {\n          date: '2016-05-03',\n          name: '\u738B\u5C0F\u864E',\n          address: '\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04',\n          forbidRemove: false,\n          showRemoveButton: true\n        }\n      ],\n      rowHandle: {\n        remove: {\n          icon: 'el-icon-delete',\n          size: 'small',\n          fixed: 'right',\n          confirm: true,\n          show (index, row) {\n            if (row.showRemoveButton) {\n              return true\n            }\n            return false\n          },\n          disabled (index, row) {\n            if (row.forbidRemove) {\n              return true\n            }\n            return false\n          }\n        }\n      }\n    }\n  },\n  methods: {\n    handleRowRemove ({ index, row }, done) {\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '\u5220\u9664\u6210\u529F',\n          type: 'success'\n        })\n        done()\n      }, 300)\n    }\n  }\n}\n</script>");

/***/ }),

/***/ "73fd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo18/index.vue?vue&type=template&id=5789025c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("删除数据")]),_c('d2-crud',{attrs:{"columns":_vm.columns,"data":_vm.data,"rowHandle":_vm.rowHandle},on:{"row-remove":_vm.handleRowRemove}}),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-markdown',{attrs:{"source":_vm.doc}})],1),_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"code":_vm.code}})],1),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"文档","link":"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo18/index.vue?vue&type=template&id=5789025c&

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo18/doc.md
var doc = __webpack_require__("f6e8");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// EXTERNAL MODULE: ./src/views/demo/d2-crud/demo18/code.js
var code = __webpack_require__("2d833");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo18/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var demo18vue_type_script_lang_js_ = ({
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
        forbidRemove: true,
        showRemoveButton: true
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        forbidRemove: false,
        showRemoveButton: true
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        forbidRemove: false,
        showRemoveButton: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        forbidRemove: false,
        showRemoveButton: true
      }],
      rowHandle: {
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true,
          show: function show(index, row) {
            if (row.showRemoveButton) {
              return true;
            }

            return false;
          },
          disabled: function disabled(index, row) {
            if (row.forbidRemove) {
              return true;
            }

            return false;
          }
        }
      }
    };
  },
  methods: {
    handleRowRemove: function handleRowRemove(_ref, done) {
      var _this = this;

      var index = _ref.index,
          row = _ref.row;
      setTimeout(function () {
        console.log(index);
        console.log(row);

        _this.$message({
          message: '删除成功',
          type: 'success'
        });

        done();
      }, 300);
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo18/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var d2_crud_demo18vue_type_script_lang_js_ = (demo18vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/d2-crud/demo18/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector

















































































































/* harmony default export */ var demo18vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/d2-crud/demo18/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo18/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var d2_crud_demo18vue_type_custom_index_0_blockType_vue_filename_injector = (demo18vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/d2-crud/demo18/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  d2_crud_demo18vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof d2_crud_demo18vue_type_custom_index_0_blockType_vue_filename_injector === 'function') d2_crud_demo18vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var demo18 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f6e8":
/***/ (function(module, exports) {

module.exports = "通过给 `D2 Crud` 传入 `rowHandle` 可开启表格操作列，传入 `remove` 对象可以开启删除模式，`confirm` 属性的值为 `Boolean` 类型，控制删除前是否弹出confirm框进行提示， `row-remove` 事件控制数据删除，参数： `index` 是当前删除行的索引， `row` 是当前删除行的数据， `done` 用于控制删除成功，可以在 `done()` 之前加入自己的逻辑代码。代码如下：\n"

/***/ })

}]);
//# sourceMappingURL=chunk-dca8126a.6f335cb9.js.map