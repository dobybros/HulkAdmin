(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d20ef28"],{

/***/ "b213":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/db/public/index.vue?vue&type=template&id=53b703c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_c('el-alert',{attrs:{"type":"success","closable":false,"title":"公用存储指所有用户共用的存储区域，\n        使用 await this.$store.dispatch('d2admin/db/database') 获得存储实例进行操作"}})],1),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('p',{staticClass:"d2-mt-0"},[_vm._v("增加不重复字段")]),_c('el-button',{on:{"click":_vm.handleSetRandom}},[_vm._v("增加")]),_c('p',[_vm._v("增加自定义字段")]),_c('el-input',{staticClass:"d2-mr-5",staticStyle:{"width":"100px"},attrs:{"placeholder":"字段名"},model:{value:(_vm.keyNameToSet),callback:function ($$v) {_vm.keyNameToSet=$$v},expression:"keyNameToSet"}}),_c('el-input',{staticClass:"d2-mr-5",staticStyle:{"width":"100px"},attrs:{"placeholder":"值"},model:{value:(_vm.valueToSet),callback:function ($$v) {_vm.valueToSet=$$v},expression:"valueToSet"}}),_c('el-button',{on:{"click":_vm.handleSet}},[_vm._v("增加")]),_c('p',[_vm._v("删除字段")]),_c('el-select',{attrs:{"placeholder":"请选择要删除的 key"},model:{value:(_vm.keyNameToDelete),callback:function ($$v) {_vm.keyNameToDelete=$$v},expression:"keyNameToDelete"}},_vm._l((_vm.keyNameList),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1),_c('p',[_vm._v("清空当前用户数据")]),_c('el-button',{on:{"click":_vm.handleClear}},[_vm._v("清空")])],1),_c('el-col',{attrs:{"span":12}},[_c('d2-highlight',{attrs:{"code":_vm.dataDisplay}})],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/playground/db/public/index.vue?vue&type=template&id=53b703c0&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("3b8d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/db/public/index.vue?vue&type=script&lang=js&





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
//
//
//
//
//


/* harmony default export */ var publicvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      dataDisplay: '',
      keyNameToSet: '',
      valueToSet: '',
      keyNameList: [],
      keyNameToDelete: ''
    };
  },
  watch: {
    keyNameToDelete: function keyNameToDelete(value) {
      if (value) {
        this.handleDelete(value);
      }
    }
  },
  mounted: function mounted() {
    this.load();
  },
  methods: Object(objectSpread["a" /* default */])({}, Object(vuex_esm["b" /* mapActions */])('d2admin/db', ['database', 'databaseClear']), {
    /**
     * 加载本地数据
     */
    load: function () {
      var _load = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var db;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.database();

              case 2:
                db = _context.sent;
                this.dataDisplay = JSON.stringify(db.value(), null, 2);
                this.keyNameList = Object.keys(db.value()).map(function (k) {
                  return {
                    value: k,
                    label: k
                  };
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }(),

    /**
     * 删除一个字段
     */
    handleDelete: function () {
      var _handleDelete = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(name) {
        var db;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.database();

              case 2:
                db = _context2.sent;
                db.unset(name).write();
                this.load();
                this.keyNameToDelete = '';

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleDelete(_x) {
        return _handleDelete.apply(this, arguments);
      }

      return handleDelete;
    }(),

    /**
     * 清空当前用户的数据
     */
    handleClear: function () {
      var _handleClear = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.databaseClear();

              case 2:
                this.load();

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleClear() {
        return _handleClear.apply(this, arguments);
      }

      return handleClear;
    }(),

    /**
     * 添加一个数据
     */
    handleSet: function () {
      var _handleSet = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var db;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(this.keyNameToSet === '')) {
                  _context4.next = 3;
                  break;
                }

                this.$message.error('字段名不能为空');
                return _context4.abrupt("return");

              case 3:
                _context4.next = 5;
                return this.database();

              case 5:
                db = _context4.sent;
                db.set(this.keyNameToSet, this.valueToSet).write();
                this.load();

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleSet() {
        return _handleSet.apply(this, arguments);
      }

      return handleSet;
    }(),

    /**
     * 添加一个随机数据
     */
    handleSetRandom: function () {
      var _handleSetRandom = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var id, db;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = Object(lodash["uniqueId"])();
                _context5.next = 3;
                return this.database();

              case 3:
                db = _context5.sent;
                db.set("uniqueKey".concat(id), "value".concat(id)).write();
                this.load();

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function handleSetRandom() {
        return _handleSetRandom.apply(this, arguments);
      }

      return handleSetRandom;
    }()
  })
});
// CONCATENATED MODULE: ./src/views/demo/playground/db/public/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var db_publicvue_type_script_lang_js_ = (publicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/db/public/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector





























































































































/* harmony default export */ var publicvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/playground/db/public/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/playground/db/public/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var db_publicvue_type_custom_index_0_blockType_vue_filename_injector = (publicvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/playground/db/public/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  db_publicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof db_publicvue_type_custom_index_0_blockType_vue_filename_injector === 'function') db_publicvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var db_public = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d20ef28.fb18c6d8.js.map