(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-1011ab15"],{

/***/ "2cdc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_demo_business_issues_142__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cfab");


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      form: {
        name: '',
        address: ''
      }
    };
  },
  methods: {
    // [业务逻辑] 重置表单
    resetFormData: function resetFormData() {
      this.form = {
        name: '',
        address: ''
      };
    },
    // [业务逻辑] 根据 id 获取数据
    getFormData: function getFormData(id) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        // 重置表单
        _this.resetFormData(); // 请求数据


        Object(_api_demo_business_issues_142__WEBPACK_IMPORTED_MODULE_1__[/* detail */ "a"])(id).then(function (res) {
          var name = res.name,
              address = res.address;
          _this.form = {
            name: name,
            address: address
          };

          _this.$message.success('getFormData');

          resolve();
        }).catch(function (err) {
          console.log('err', err);
          reject(err);
        });
      });
    },
    // [业务逻辑] 提交
    handleSubmit: function handleSubmit() {
      this.$notify({
        title: 'Submit',
        message: '提交了表单',
        type: 'info'
      });
    }
  }
});

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
//# sourceMappingURL=chunk-1011ab15.56aeddb1.js.map