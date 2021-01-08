(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-5ec9c03f"],{

/***/ "2c46":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/components/d2-markdown/index.vue?vue&type=template&id=5ac33cfd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"component-markdown"},[(!_vm.markedHTML)?_c('div',{staticClass:"spin-group"},[_c('div',[_vm._v("正在加载")])]):_vm._e(),_c('div',{staticClass:"markdown-body",domProps:{"innerHTML":_vm._s(_vm.markedHTML)}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/d2-markdown/index.vue?vue&type=template&id=5ac33cfd&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("3b8d");

// EXTERNAL MODULE: ./node_modules/marked/lib/marked.js
var lib_marked = __webpack_require__("0e54");
var marked_default = /*#__PURE__*/__webpack_require__.n(lib_marked);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__("1487");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/components/highlight-styles/github-gist.css
var github_gist = __webpack_require__("fb1d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./src/components/d2-markdown/plugin/baidupan.js


/* harmony default export */ var baidupan = (function (quote, assetsPublicPath) {
  var _quote = quote.replace(/<[^<>]+>/g, '').trim();

  var bdPanUrl = /^https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+$/i;
  var bdPanUrlPwd = /^链接: https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+ 密码: [a-z0-9]{4}$/i;

  if (bdPanUrl.test(_quote)) {
    return "<div class=\"baidupan\">\n      <a href=\"".concat(_quote, "\" class=\"container\">\n        <div class=\"icon\">\n          <img src=\"").concat(assetsPublicPath, "image/baidu-pan-logo.png\" style=\"background-color: transparent;\">\n        </div>\n        <div class=\"url\">").concat(_quote, "</div>\n      </a>\n    </div>");
  } else if (bdPanUrlPwd.test(_quote)) {
    var url = _quote.match(/https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+/i);

    var pwd = _quote.match(/[a-z0-9]{4}$/i);

    return "<div class=\"baidupan\">\n      <div class=\"container\">\n        <a href=\"".concat(url[0], "\">\n          <div class=\"icon\">\n            <img src=\"").concat(assetsPublicPath, "image/baidu-pan-logo.png\" style=\"background-color: transparent;\">\n          </div>\n          <div class=\"url\">").concat(url[0], "</div>\n        </a>\n        <div class=\"line\"></div>\n        <div class=\"pwd\">\n          \u5BC6\u7801\n          <span>").concat(pwd[0], "</span>\n        </div>\n      </div>\n    </div>");
  } else {
    return false;
  }
});
// EXTERNAL MODULE: ./node_modules/github-markdown-css/github-markdown.css
var github_markdown = __webpack_require__("e4cb");

// EXTERNAL MODULE: ./src/plugin/axios/index.js
var axios = __webpack_require__("9bd2");

// CONCATENATED MODULE: ./src/api/components.markdown.js

function ComponentsMarkdownBase(url) {
  return Object(axios["a" /* default */])({
    baseURL: "/",
    url: url,
    method: 'get'
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/components/d2-markdown/index.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//






/* harmony default export */ var d2_markdownvue_type_script_lang_js_ = ({
  name: 'd2-markdown',
  props: {
    url: {
      type: String,
      required: false,
      default: ''
    },
    source: {
      type: String,
      required: false,
      default: ''
    },
    highlight: {
      type: Boolean,
      required: false,
      default: false
    },
    // 百度网盘分享链接特殊样式
    baidupan: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data: function data() {
    return {
      getReadmePublicPath: '',
      markedHTML: ''
    };
  },
  mounted: function mounted() {
    if (this.url) {
      this.initWithUrl();
    } else if (this.source) {
      this.initWithMd();
    } else {
      console.log('not mounted init');
    }
  },
  methods: {
    // 使用 md 初始化
    initWithMd: function initWithMd() {
      this.markedHTML = this.marked(this.source);
    },
    // 使用 url 初始化
    initWithUrl: function () {
      var _initWithUrl = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getReadme(this.url);

              case 2:
                this.markedHTML = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function initWithUrl() {
        return _initWithUrl.apply(this, arguments);
      }

      return initWithUrl;
    }(),
    // 从 url 加载原始数据
    getReadme: function () {
      var _getReadme = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(url) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return ComponentsMarkdownBase(url);

              case 2:
                data = _context2.sent;
                return _context2.abrupt("return", this.marked(data));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getReadme(_x) {
        return _getReadme.apply(this, arguments);
      }

      return getReadme;
    }(),
    marked: function marked(data) {
      var _this = this;

      var renderer = new marked_default.a.Renderer();

      renderer.blockquote = function (quote) {
        // 百度网盘
        return _this.baidupan && baidupan(quote, _this.$baseUrl) || "<blockquote>".concat(quote, "</blockquote>");
      };

      return marked_default()(data, Object(objectSpread["a" /* default */])({}, this.highlight ? {
        highlight: function highlight(code) {
          return lib_default.a.highlightAuto(code).value;
        }
      } : {}, {
        renderer: renderer
      }));
    }
  }
});
// CONCATENATED MODULE: ./src/components/d2-markdown/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_d2_markdownvue_type_script_lang_js_ = (d2_markdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/d2-markdown/index.vue?vue&type=style&index=0&lang=scss&
var d2_markdownvue_type_style_index_0_lang_scss_ = __webpack_require__("3153");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/components/d2-markdown/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector




















































































































































/* harmony default export */ var d2_markdownvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/components/d2-markdown/index.vue"
});

// CONCATENATED MODULE: ./src/components/d2-markdown/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var components_d2_markdownvue_type_custom_index_0_blockType_vue_filename_injector = (d2_markdownvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/components/d2-markdown/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_d2_markdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof components_d2_markdownvue_type_custom_index_0_blockType_vue_filename_injector === 'function') components_d2_markdownvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var d2_markdown = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3153":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b32b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b32b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e4cb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=chunk-5ec9c03f.b3b0ebe6.js.map