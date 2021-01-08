(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0c934d"],{

/***/ "57c8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/db/page-snapshot-user/index.vue?vue&type=template&id=45c562fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_c('el-alert',{attrs:{"type":"success","closable":false,"title":"私有路由快照相当于私有路由存储一种快捷操作，\n        会将传入的 vue instance 携带的 $data 全部根据用户区分持久化，\n        下面的表单来自 Element 的表单示例，\n        在 D2Admin 的本页示例中你可以随意填写这个表单，\n        表单内容会自动实时持久化，\n        无论是切换标签页、重新打开标签页、刷新浏览器、重开浏览器、重开浏览器标签页等，\n        该页面数据都会自动恢复到上次填写的状态，\n        这些都只需要你使用 D2Admin 提供的两个方法，\n        总共只需要多写十几行代码"}})],1),_c('el-form',{ref:"form",staticStyle:{"max-width":"600px","margin":"0px auto"},attrs:{"model":_vm.form,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"活动名称"}},[_c('el-input',{model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_c('el-form-item',{attrs:{"label":"活动区域"}},[_c('el-select',{attrs:{"placeholder":"请选择活动区域"},model:{value:(_vm.form.region),callback:function ($$v) {_vm.$set(_vm.form, "region", $$v)},expression:"form.region"}},[_c('el-option',{attrs:{"label":"区域一","value":"shanghai"}}),_c('el-option',{attrs:{"label":"区域二","value":"beijing"}})],1)],1),_c('el-form-item',{attrs:{"label":"活动时间"}},[_c('el-col',{attrs:{"span":11}},[_c('el-date-picker',{staticStyle:{"width":"100%"},attrs:{"type":"date","placeholder":"选择日期"},model:{value:(_vm.form.date1),callback:function ($$v) {_vm.$set(_vm.form, "date1", $$v)},expression:"form.date1"}})],1),_c('el-col',{staticStyle:{"text-align":"center"},attrs:{"span":2}},[_vm._v("-")]),_c('el-col',{attrs:{"span":11}},[_c('el-time-picker',{staticStyle:{"width":"100%"},attrs:{"type":"fixed-time","placeholder":"选择时间"},model:{value:(_vm.form.date2),callback:function ($$v) {_vm.$set(_vm.form, "date2", $$v)},expression:"form.date2"}})],1)],1),_c('el-form-item',{attrs:{"label":"即时配送"}},[_c('el-switch',{model:{value:(_vm.form.delivery),callback:function ($$v) {_vm.$set(_vm.form, "delivery", $$v)},expression:"form.delivery"}})],1),_c('el-form-item',{attrs:{"label":"活动性质"}},[_c('el-checkbox-group',{model:{value:(_vm.form.type),callback:function ($$v) {_vm.$set(_vm.form, "type", $$v)},expression:"form.type"}},[_c('el-checkbox',{attrs:{"label":"线上活动","name":"type"}}),_c('el-checkbox',{attrs:{"label":"地推活动","name":"type"}}),_c('el-checkbox',{attrs:{"label":"线下活动","name":"type"}}),_c('el-checkbox',{attrs:{"label":"品牌曝光","name":"type"}})],1)],1),_c('el-form-item',{attrs:{"label":"特殊资源"}},[_c('el-radio-group',{model:{value:(_vm.form.resource),callback:function ($$v) {_vm.$set(_vm.form, "resource", $$v)},expression:"form.resource"}},[_c('el-radio',{attrs:{"label":"线上品牌商赞助"}}),_c('el-radio',{attrs:{"label":"线下场地免费"}})],1)],1),_c('el-form-item',{attrs:{"label":"活动形式"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.form.desc),callback:function ($$v) {_vm.$set(_vm.form, "desc", $$v)},expression:"form.desc"}})],1),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"}},[_vm._v("立即创建")]),_c('el-button',[_vm._v("取消")])],1)],1),_c('el-button',{attrs:{"slot":"footer","type":"danger"},on:{"click":_vm.handleClear},slot:"footer"},[_c('d2-icon',{attrs:{"name":"trash-o"}}),_vm._v("\n    删除当前页面快照\n  ")],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/playground/db/page-snapshot-user/index.vue?vue&type=template&id=45c562fa&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("3b8d");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/db/page-snapshot-user/index.vue?vue&type=script&lang=js&



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

/* harmony default export */ var page_snapshot_uservue_type_script_lang_js_ = ({
  data: function data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  created: function () {
    var _created = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var data, key;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.pageGet({
                instance: this,
                user: true
              });

            case 2:
              data = _context.sent;

              for (key in data) {
                if (data.hasOwnProperty(key)) this[key] = data[key];
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  watch: {
    $data: {
      handler: function handler() {
        this.pageSet({
          instance: this,
          user: true
        });
      },
      deep: true
    }
  },
  methods: Object(objectSpread["a" /* default */])({}, Object(vuex_esm["b" /* mapActions */])('d2admin/db', ['pageSet', 'pageGet', 'pageClear']), {
    handleClear: function () {
      var _handleClear = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.pageClear({
                  instance: this,
                  user: true
                });

              case 2:
                this.$message.success('此页面快照已经删除，请重新进入该页面或者关闭选项卡重新打开');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleClear() {
        return _handleClear.apply(this, arguments);
      }

      return handleClear;
    }()
  })
});
// CONCATENATED MODULE: ./src/views/demo/playground/db/page-snapshot-user/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var db_page_snapshot_uservue_type_script_lang_js_ = (page_snapshot_uservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/db/page-snapshot-user/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector




















































































































/* harmony default export */ var page_snapshot_uservue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/playground/db/page-snapshot-user/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/playground/db/page-snapshot-user/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var db_page_snapshot_uservue_type_custom_index_0_blockType_vue_filename_injector = (page_snapshot_uservue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/playground/db/page-snapshot-user/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  db_page_snapshot_uservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof db_page_snapshot_uservue_type_custom_index_0_blockType_vue_filename_injector === 'function') db_page_snapshot_uservue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var page_snapshot_user = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0c934d.046466be.js.map