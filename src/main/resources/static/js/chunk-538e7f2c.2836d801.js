(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-538e7f2c"],{

/***/ "a7e0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/issues/142/index.vue?vue&type=template&id=1c23b7e2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',{attrs:{"type":"card"}},[_c('d2-crud',_vm._b({staticStyle:{"margin":"-15px 0"},on:{"edit":function (ref) {
	var index = ref.index;
	var row = ref.row;

	return _vm.goToEditPage('demo-business-issues-142-edit', row.id);
},"edit-cache-db":function (ref) {
	var index = ref.index;
	var row = ref.row;

	return _vm.goToEditPage('demo-business-issues-142-edit-cache-db', row.id);
}}},'d2-crud',_vm.crud,false)),_c('template',{slot:"footer"},[_c('d2-link-btn',{attrs:{"title":"issue #142","link":"https://github.com/d2-projects/d2-admin/issues/142"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/business/issues/142/index.vue?vue&type=template&id=1c23b7e2&

// EXTERNAL MODULE: ./src/api/demo.business.issues.142.js
var demo_business_issues_142 = __webpack_require__("cfab");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/issues/142/index.vue?vue&type=script&lang=js&
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
// API

/* harmony default export */ var _142vue_type_script_lang_js_ = ({
  data: function data() {
    return {
      crud: {
        columns: [{
          title: '姓名',
          key: 'name',
          width: 100
        }, {
          title: '地址',
          key: 'address'
        }],
        data: [],
        options: {
          border: true,
          size: 'mini'
        },
        rowHandle: {
          align: 'center',
          width: 240,
          custom: [{
            text: '无缓存编辑',
            size: 'mini',
            emit: 'edit'
          }, {
            text: '带缓存编辑 DB',
            size: 'mini',
            emit: 'edit-cache-db'
          }]
        }
      }
    };
  },
  created: function created() {
    this.getTableData();
  },
  methods: {
    // 请求表格数据
    getTableData: function getTableData() {
      var _this = this;

      Object(demo_business_issues_142["b" /* fetch */])().then(function (res) {
        _this.crud.data = res.list;
      }).catch(function (err) {
        return console.log(err);
      });
    },
    // 跳转到编辑页面
    goToEditPage: function goToEditPage(name, id) {
      this.$router.push({
        name: name,
        params: {
          id: id
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/business/issues/142/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var issues_142vue_type_script_lang_js_ = (_142vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/business/issues/142/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector















































































/* harmony default export */ var _142vue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/business/issues/142/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/business/issues/142/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var issues_142vue_type_custom_index_0_blockType_vue_filename_injector = (_142vue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/business/issues/142/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  issues_142vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof issues_142vue_type_custom_index_0_blockType_vue_filename_injector === 'function') issues_142vue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var _142 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "cfab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return detail; });
/* harmony import */ var _plugin_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9bd2");

function fetch() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/demo/business/issues/142/fetch',
    method: 'get'
  });
}
function detail(id) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/demo/business/issues/142/detail',
    method: 'get',
    params: {
      id: id
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=chunk-538e7f2c.2836d801.js.map