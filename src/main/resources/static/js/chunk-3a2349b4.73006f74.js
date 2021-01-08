(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-3a2349b4"],{

/***/ "9014":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_55294b9d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b735");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_55294b9d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_55294b9d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_55294b9d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b735":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d55d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/components/d2-highlight/index.vue?vue&type=template&id=55294b9d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{staticClass:"d2-highlight hljs",domProps:{"innerHTML":_vm._s(_vm.highlightHTML)}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/d2-highlight/index.vue?vue&type=template&id=55294b9d&scoped=true&

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__("1487");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/components/highlight-styles/github-gist.css
var github_gist = __webpack_require__("fb1d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./src/components/d2-highlight/libs/htmlFormat.js




/* eslint-disable */
// 功能
// 将HTML字符串格式化
var format = function () {
  function style_html(html_source, indent_size, indent_character, max_char) {
    var Parser, multi_parser;

    function Parser() {
      this.pos = 0;
      this.token = '';
      this.current_mode = 'CONTENT';
      this.tags = {
        parent: 'parent1',
        parentcount: 1,
        parent1: ''
      };
      this.tag_type = '';
      this.token_text = this.last_token = this.last_text = this.token_type = '';
      this.Utils = {
        whitespace: "\n\r\t ".split(''),
        single_token: 'br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed'.split(','),
        extra_liners: 'head,body,/html'.split(','),
        in_array: function in_array(what, arr) {
          for (var i = 0; i < arr.length; i++) {
            if (what === arr[i]) {
              return true;
            }
          }

          return false;
        }
      };

      this.get_content = function () {
        var char = '';
        var content = [];
        var space = false;

        while (this.input.charAt(this.pos) !== '<') {
          if (this.pos >= this.input.length) {
            return content.length ? content.join('') : ['', 'TK_EOF'];
          }

          char = this.input.charAt(this.pos);
          this.pos++;
          this.line_char_count++;

          if (this.Utils.in_array(char, this.Utils.whitespace)) {
            if (content.length) {
              space = true;
            }

            this.line_char_count--;
            continue;
          } else if (space) {
            if (this.line_char_count >= this.max_char) {
              content.push('\n');

              for (var i = 0; i < this.indent_level; i++) {
                content.push(this.indent_string);
              }

              this.line_char_count = 0;
            } else {
              content.push(' ');
              this.line_char_count++;
            }

            space = false;
          }

          content.push(char);
        }

        return content.length ? content.join('') : '';
      };

      this.get_script = function () {
        var char = '';
        var content = [];
        var reg_match = new RegExp('\<\/script' + '\>', 'igm');
        reg_match.lastIndex = this.pos;
        var reg_array = reg_match.exec(this.input);
        var end_script = reg_array ? reg_array.index : this.input.length;

        while (this.pos < end_script) {
          if (this.pos >= this.input.length) {
            return content.length ? content.join('') : ['', 'TK_EOF'];
          }

          char = this.input.charAt(this.pos);
          this.pos++;
          content.push(char);
        }

        return content.length ? content.join('') : '';
      };

      this.record_tag = function (tag) {
        if (this.tags[tag + 'count']) {
          this.tags[tag + 'count']++;
          this.tags[tag + this.tags[tag + 'count']] = this.indent_level;
        } else {
          this.tags[tag + 'count'] = 1;
          this.tags[tag + this.tags[tag + 'count']] = this.indent_level;
        }

        this.tags[tag + this.tags[tag + 'count'] + 'parent'] = this.tags.parent;
        this.tags.parent = tag + this.tags[tag + 'count'];
      };

      this.retrieve_tag = function (tag) {
        if (this.tags[tag + 'count']) {
          var temp_parent = this.tags.parent;

          while (temp_parent) {
            if (tag + this.tags[tag + 'count'] === temp_parent) {
              break;
            }

            temp_parent = this.tags[temp_parent + 'parent'];
          }

          if (temp_parent) {
            this.indent_level = this.tags[tag + this.tags[tag + 'count']];
            this.tags.parent = this.tags[temp_parent + 'parent'];
          }

          delete this.tags[tag + this.tags[tag + 'count'] + 'parent'];
          delete this.tags[tag + this.tags[tag + 'count']];

          if (this.tags[tag + 'count'] == 1) {
            delete this.tags[tag + 'count'];
          } else {
            this.tags[tag + 'count']--;
          }
        }
      };

      this.get_tag = function () {
        var char = '';
        var content = [];
        var space = false;

        do {
          if (this.pos >= this.input.length) {
            return content.length ? content.join('') : ['', 'TK_EOF'];
          }

          char = this.input.charAt(this.pos);
          this.pos++;
          this.line_char_count++;

          if (this.Utils.in_array(char, this.Utils.whitespace)) {
            space = true;
            this.line_char_count--;
            continue;
          }

          if (char === "'" || char === '"') {
            if (!content[1] || content[1] !== '!') {
              char += this.get_unformatted(char);
              space = true;
            }
          }

          if (char === '=') {
            space = false;
          }

          if (content.length && content[content.length - 1] !== '=' && char !== '>' && space) {
            if (this.line_char_count >= this.max_char) {
              this.print_newline(false, content);
              this.line_char_count = 0;
            } else {
              content.push(' ');
              this.line_char_count++;
            }

            space = false;
          }

          content.push(char);
        } while (char !== '>');

        var tag_complete = content.join('');
        var tag_index;

        if (tag_complete.indexOf(' ') != -1) {
          tag_index = tag_complete.indexOf(' ');
        } else {
          tag_index = tag_complete.indexOf('>');
        }

        var tag_check = tag_complete.substring(1, tag_index).toLowerCase();

        if (tag_complete.charAt(tag_complete.length - 2) === '/' || this.Utils.in_array(tag_check, this.Utils.single_token)) {
          this.tag_type = 'SINGLE';
        } else if (tag_check === 'script') {
          this.record_tag(tag_check);
          this.tag_type = 'SCRIPT';
        } else if (tag_check === 'style') {
          this.record_tag(tag_check);
          this.tag_type = 'STYLE';
        } else if (tag_check.charAt(0) === '!') {
          if (tag_check.indexOf('[if') != -1) {
            if (tag_complete.indexOf('!IE') != -1) {
              var comment = this.get_unformatted('-->', tag_complete);
              content.push(comment);
            }

            this.tag_type = 'START';
          } else if (tag_check.indexOf('[endif') != -1) {
            this.tag_type = 'END';
            this.unindent();
          } else if (tag_check.indexOf('[cdata[') != -1) {
            var comment = this.get_unformatted(']]>', tag_complete);
            content.push(comment);
            this.tag_type = 'SINGLE';
          } else {
            var comment = this.get_unformatted('-->', tag_complete);
            content.push(comment);
            this.tag_type = 'SINGLE';
          }
        } else {
          if (tag_check.charAt(0) === '/') {
            this.retrieve_tag(tag_check.substring(1));
            this.tag_type = 'END';
          } else {
            this.record_tag(tag_check);
            this.tag_type = 'START';
          }

          if (this.Utils.in_array(tag_check, this.Utils.extra_liners)) {
            this.print_newline(true, this.output);
          }
        }

        return content.join('');
      };

      this.get_unformatted = function (delimiter, orig_tag) {
        if (orig_tag && orig_tag.indexOf(delimiter) != -1) {
          return '';
        }

        var char = '';
        var content = '';
        var space = true;

        do {
          char = this.input.charAt(this.pos);
          this.pos++;

          if (this.Utils.in_array(char, this.Utils.whitespace)) {
            if (!space) {
              this.line_char_count--;
              continue;
            }

            if (char === '\n' || char === '\r') {
              content += '\n';

              for (var i = 0; i < this.indent_level; i++) {
                content += this.indent_string;
              }

              space = false;
              this.line_char_count = 0;
              continue;
            }
          }

          content += char;
          this.line_char_count++;
          space = true;
        } while (content.indexOf(delimiter) == -1);

        return content;
      };

      this.get_token = function () {
        var token;

        if (this.last_token === 'TK_TAG_SCRIPT') {
          var temp_token = this.get_script();

          if (typeof temp_token !== 'string') {
            return temp_token;
          } //token = js_beautify(temp_token, this.indent_size, this.indent_character, this.indent_level);
          //return [token, 'TK_CONTENT'];


          return [temp_token, 'TK_CONTENT'];
        }

        if (this.current_mode === 'CONTENT') {
          token = this.get_content();

          if (typeof token !== 'string') {
            return token;
          } else {
            return [token, 'TK_CONTENT'];
          }
        }

        if (this.current_mode === 'TAG') {
          token = this.get_tag();

          if (typeof token !== 'string') {
            return token;
          } else {
            var tag_name_type = 'TK_TAG_' + this.tag_type;
            return [token, tag_name_type];
          }
        }
      };

      this.printer = function (js_source, indent_character, indent_size, max_char) {
        this.input = js_source || '';
        this.output = [];
        this.indent_character = indent_character || ' ';
        this.indent_string = '';
        this.indent_size = indent_size || 2;
        this.indent_level = 0;
        this.max_char = max_char || 70;
        this.line_char_count = 0;

        for (var i = 0; i < this.indent_size; i++) {
          this.indent_string += this.indent_character;
        }

        this.print_newline = function (ignore, arr) {
          this.line_char_count = 0;

          if (!arr || !arr.length) {
            return;
          }

          if (!ignore) {
            while (this.Utils.in_array(arr[arr.length - 1], this.Utils.whitespace)) {
              arr.pop();
            }
          }

          arr.push('\n');

          for (var i = 0; i < this.indent_level; i++) {
            arr.push(this.indent_string);
          }
        };

        this.print_token = function (text) {
          this.output.push(text);
        };

        this.indent = function () {
          this.indent_level++;
        };

        this.unindent = function () {
          if (this.indent_level > 0) {
            this.indent_level--;
          }
        };
      };

      return this;
    }

    multi_parser = new Parser();
    multi_parser.printer(html_source, indent_character, indent_size);

    while (true) {
      var t = multi_parser.get_token();
      multi_parser.token_text = t[0];
      multi_parser.token_type = t[1];

      if (multi_parser.token_type === 'TK_EOF') {
        break;
      }

      switch (multi_parser.token_type) {
        case 'TK_TAG_START':
        case 'TK_TAG_SCRIPT':
        case 'TK_TAG_STYLE':
          multi_parser.print_newline(false, multi_parser.output);
          multi_parser.print_token(multi_parser.token_text);
          multi_parser.indent();
          multi_parser.current_mode = 'CONTENT';
          break;

        case 'TK_TAG_END':
          multi_parser.print_newline(true, multi_parser.output);
          multi_parser.print_token(multi_parser.token_text);
          multi_parser.current_mode = 'CONTENT';
          break;

        case 'TK_TAG_SINGLE':
          multi_parser.print_newline(false, multi_parser.output);
          multi_parser.print_token(multi_parser.token_text);
          multi_parser.current_mode = 'CONTENT';
          break;

        case 'TK_CONTENT':
          if (multi_parser.token_text !== '') {
            multi_parser.print_newline(false, multi_parser.output);
            multi_parser.print_token(multi_parser.token_text);
          }

          multi_parser.current_mode = 'TAG';
          break;
      }

      multi_parser.last_token = multi_parser.token_type;
      multi_parser.last_text = multi_parser.token_text;
    }

    return multi_parser.output.join('');
  }

  return function (data) {
    var dataHolder = ['__dataHolder_', [Math.random(), Math.random(), Math.random(), Math.random()].join('_').replace(/[^0-9]/g, '_'), '_'].join('_');
    var dataHolders = {};
    var index = 0;
    data = data.replace(/(\")(data:[^\"]*)(\")/g, function ($0, $1, $2, $3) {
      var name = dataHolder + index++;
      dataHolders[name] = $2;
      return $1 + name + $3;
    });
    data = style_html(data, 2, ' ', 0x10000000);
    data = data.replace(new RegExp(dataHolder + '[0-9]+', 'g'), function ($0) {
      return dataHolders[$0];
    });
    return data;
  };
}();

/* harmony default export */ var htmlFormat = (format);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/components/d2-highlight/index.vue?vue&type=script&lang=js&
//
//
//
//
// 相关文档
// https://highlightjs.org/usage/
// http://highlightjs.readthedocs.io/en/latest/api.html#configure-options



/* harmony default export */ var d2_highlightvue_type_script_lang_js_ = ({
  name: 'd2-highlight',
  props: {
    code: {
      type: String,
      required: false,
      default: ''
    },
    formatHtml: {
      type: Boolean,
      required: false,
      default: false
    },
    lang: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: function data() {
    return {
      highlightHTML: ''
    };
  },
  mounted: function mounted() {
    this.highlight();
  },
  watch: {
    code: function code() {
      this.highlight();
    }
  },
  methods: {
    highlight: function highlight() {
      var code = this.formatHtml ? htmlFormat(this.code) : this.code;
      this.highlightHTML = lib_default.a.highlightAuto(code, [this.lang, 'html', 'javascript', 'json', 'css', 'scss', 'less']).value;
    }
  }
});
// CONCATENATED MODULE: ./src/components/d2-highlight/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_d2_highlightvue_type_script_lang_js_ = (d2_highlightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/d2-highlight/index.vue?vue&type=style&index=0&id=55294b9d&lang=scss&scoped=true&
var d2_highlightvue_type_style_index_0_id_55294b9d_lang_scss_scoped_true_ = __webpack_require__("9014");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/components/d2-highlight/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector




































































/* harmony default export */ var d2_highlightvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/components/d2-highlight/index.vue"
});

// CONCATENATED MODULE: ./src/components/d2-highlight/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var components_d2_highlightvue_type_custom_index_0_blockType_vue_filename_injector = (d2_highlightvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/components/d2-highlight/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_d2_highlightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "55294b9d",
  null
  
)

/* custom blocks */

if (typeof components_d2_highlightvue_type_custom_index_0_blockType_vue_filename_injector === 'function') components_d2_highlightvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var d2_highlight = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-3a2349b4.73006f74.js.map