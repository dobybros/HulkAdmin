(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-7da85ec4","chunk-2d0f069e","chunk-2d22fc97","chunk-2d2245b0","chunk-744c9c7b"],{

/***/ "15ec3":
/***/ (function(module, exports) {

module.exports = "你可以点击每个演示卡片右上角的刷新按钮检查每次 `mock` 不同的结果\n\n官方演示页面 [http://mockjs.com/examples.html](http://mockjs.com/examples.html)\n\n官方 `Wiki` [https://github.com/nuysoft/Mock/wiki/Getting-Started](https://github.com/nuysoft/Mock/wiki/Getting-Started)"

/***/ }),

/***/ "9bed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ([// 字符串
{
  title: "复制1-10次固定字符串",
  json: {
    "string|1-10": "★"
  }
}, {
  title: "复制3次",
  json: {
    "string|3": "Ha"
  }
}, // 数字
{
  title: "范围随机取值",
  json: {
    "number|1-100": 50
  }
}, {
  title: "累加1",
  json: {
    "number|+1": 10
  }
}, {
  title: "累加2",
  json: {
    "number|+2": 10
  }
}, {
  title: "浮点数",
  json: {
    "number1|1-100.1-10": 1,
    "number2|123.1-10": 1,
    "number3|123.3": 1,
    "number4|123.10": 1.123
  }
}, // 布尔值
{
  title: "true 的概率是 1/2",
  json: {
    "boolean|1": true
  }
}, // 对象
{
  title: '随机选择3个属性',
  json: {
    "obj|3": {
      name: 'FairyEver',
      use: 'vue.js',
      sex: 1,
      qq: '1711467488',
      tel: '123-4567-8910',
      city: 'beijing',
      mail: '1711467488liyang@gmail.com',
      github: 'https://github.com/d2-projects',
      blog: 'http://www.fairyever.com/',
      creatDate: '2018-1-1',
      updateDate: '2018-1-2',
      delFlag: 0
    }
  }
}, {
  title: '随机选择4-8个属性',
  json: {
    "obj|4-8": {
      name: 'FairyEver',
      use: 'vue.js',
      sex: 1,
      qq: '1711467488',
      tel: '123-4567-8910',
      city: 'beijing',
      mail: '1711467488liyang@gmail.com',
      github: 'https://github.com/FairyEver',
      blog: 'http://www.fairyever.com/',
      creatDate: '2018-1-1',
      updateDate: '2018-1-2',
      delFlag: 0
    }
  }
}, // 数组
{
  title: '随机选1个',
  json: {
    "arr|1": ['1-vue', '2-react', '3-angular', '4-node', '5-java']
  }
}, {
  title: '顺序选1个',
  json: {
    "arr|+1": ['1-vue', '2-react', '3-angular', '4-node', '5-java']
  }
}, {
  title: '重复3次',
  json: {
    "arr|3": ['o', 'o - o', 'o - o - o']
  }
}, {
  title: '重复2-10次',
  json: {
    "arr|2-10": ['-', '----']
  }
}]);

/***/ }),

/***/ "ae2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/mock/dtd.vue?vue&type=template&id=95eb068e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("数据模板")]),_c('d2-markdown',{staticClass:"d2-mb",attrs:{"source":_vm.doc}}),_vm._l((_vm.settingDTD),function(item,index){return _c('d2-demo-mock-card',{key:index,attrs:{"title":item.title,"code":JSON.stringify(item.json, null, 2),"mock":_vm.mockResult[index]},on:{"reload":function($event){return _vm.doMock(index)}}})}),_c('d2-demo-mock-card',{attrs:{"title":_vm.fn.title,"code":_vm.fn.code,"mock":_vm.fn.mocked},on:{"reload":function($event){return _vm.fnMock()}}}),_c('d2-demo-mock-card',{staticStyle:{"margin-bottom":"0px !important"},attrs:{"title":_vm.regexp.title,"code":_vm.regexp.code,"mock":_vm.regexp.mocked},on:{"reload":function($event){return _vm.regexpMock()}}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/plugins/mock/dtd.vue?vue&type=template&id=95eb068e&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");

// EXTERNAL MODULE: ./node_modules/mockjs/dist/mock.js
var mock = __webpack_require__("96eb");
var mock_default = /*#__PURE__*/__webpack_require__.n(mock);

// EXTERNAL MODULE: ./src/views/demo/plugins/mock/data/settingDTD.js
var settingDTD = __webpack_require__("9bed");

// EXTERNAL MODULE: ./src/views/demo/plugins/mock/mixins/regexp.js
var regexp = __webpack_require__("e07f");

// EXTERNAL MODULE: ./src/views/demo/plugins/mock/mixins/function.js
var mixins_function = __webpack_require__("ea05");

// EXTERNAL MODULE: ./src/views/demo/plugins/mock/md/doc.md
var doc = __webpack_require__("15ec3");
var doc_default = /*#__PURE__*/__webpack_require__.n(doc);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/mock/dtd.vue?vue&type=script&lang=js&

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







/* harmony default export */ var dtdvue_type_script_lang_js_ = ({
  mixins: [regexp["default"], mixins_function["default"]],
  components: {
    'd2-demo-mock-card': function d2DemoMockCard() {
      return __webpack_require__.e(/* import() */ "chunk-2f62945f").then(__webpack_require__.bind(null, "1c81"));
    }
  },
  data: function data() {
    return {
      mockResult: [],
      settingDTD: settingDTD["default"],
      settingDTDClone: Object(lodash["cloneDeep"])(settingDTD["default"]),
      doc: doc_default.a
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.settingDTD.forEach(function (e, i) {
      _this.doMock(i);
    });
    this.fnMock();
    this.regexpMock();
  },
  methods: {
    doMock: function doMock() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      vue_runtime_esm["default"].set(this.mockResult, n, JSON.stringify(mock_default.a.mock(this.settingDTDClone[n].json), null, 2));
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/plugins/mock/dtd.vue?vue&type=script&lang=js&
 /* harmony default export */ var mock_dtdvue_type_script_lang_js_ = (dtdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/mock/dtd.vue?vue&type=custom&index=0&blockType=vue-filename-injector




































































/* harmony default export */ var dtdvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/plugins/mock/dtd.vue"
});

// CONCATENATED MODULE: ./src/views/demo/plugins/mock/dtd.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var mock_dtdvue_type_custom_index_0_blockType_vue_filename_injector = (dtdvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/plugins/mock/dtd.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mock_dtdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof mock_dtdvue_type_custom_index_0_blockType_vue_filename_injector === 'function') mock_dtdvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var dtd = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "e07f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("96eb");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // 测试正则表达式
      regexp: {
        title: '正则表达式',
        code: "{\n  'regexp1': /[a-z][A-Z][0-9]/,\n  'regexp2': /wWsSdD/,\n  'regexp3': /d{5,10}/\n}",
        json: {
          'regexp1': /[a-z][A-Z][0-9]/,
          'regexp2': /\w\W\s\S\d\D/,
          'regexp3': /\d{5,10}/
        },
        mocked: ''
      }
    };
  },
  methods: {
    regexpMock: function regexpMock() {
      this.regexp.mocked = JSON.stringify(mockjs__WEBPACK_IMPORTED_MODULE_0___default.a.mock(this.regexp.json), null, 2);
    }
  }
});

/***/ }),

/***/ "ea05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("96eb");
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable */

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // 测试函数
      fn: {
        title: '函数',
        code: "{\n  \"name\": \"FairyEver\",\n  \"say\": function() {\n    return 'I AM ' + this.name\n  }\n}",
        json: {
          "name": "FairyEver",
          "say": function say() {
            return 'I AM ' + this.name;
          }
        },
        mocked: ''
      }
    };
  },
  methods: {
    fnMock: function fnMock() {
      this.fn.mocked = JSON.stringify(mockjs__WEBPACK_IMPORTED_MODULE_1___default.a.mock(this.fn.json), null, 2);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=chunk-7da85ec4.34710d54.js.map