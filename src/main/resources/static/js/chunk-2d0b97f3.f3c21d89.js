(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0b97f3"],{

/***/ "32ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/day/index.vue?vue&type=template&id=63f20993&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('template',{slot:"header"},[_vm._v("日期计算")]),_c('h1',{staticClass:"d2-mt-0"},[_vm._v("解析")]),_c('el-row',{staticClass:"d2-mt",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 当前时间\ndayjs()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs()))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 时间字符串\ndayjs('1995-12-25')"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs('1995-12-25')))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// Unix 时间戳 (毫秒)\ndayjs(1318781876406)"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs(1318781876406)))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// Date 对象\ndayjs(new Date(2018, 8, 18))"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs(new Date(2018, 8, 18))))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 复制\ndayjs().clone()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().clone()))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 检测是否是一个有效的时间\ndayjs().isValid()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().isValid()))],1)],1)],1),_c('h1',[_vm._v("获取")]),_c('el-row',{staticClass:"d2-mt",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 获取年\ndayjs().year()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().year()))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 获取月\ndayjs().month()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().month()))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 获取日\ndayjs().date()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().date()))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 获取星期\ndayjs().day()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().day()))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 获取小时\ndayjs().hour()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().hour()))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 获取分钟\ndayjs().minute()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().minute()))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 获取秒\ndayjs().second()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().second()))],1)],1),_c('el-col',{attrs:{"span":6}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 获取毫秒\ndayjs().millisecond()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().millisecond()))],1)],1)],1),_c('h1',[_vm._v("设置")]),_c('el-row',{staticClass:"d2-mt",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":8}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 设置月份\ndayjs().set('month', 6).month()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().set('month', 6).month()))],1)],1),_c('el-col',{attrs:{"span":8}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 设置秒\ndayjs().set('second', 30).second()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().set('second', 30).second()))],1)],1),_c('el-col',{attrs:{"span":8}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 设置小时\ndayjs().set('hour', 4).hour()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().set('hour', 4).hour()))],1)],1)],1),_c('h1',[_vm._v("操作")]),_c('el-row',{staticClass:"d2-mt",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 增加\ndayjs().add(1, 'day').format('YYYY年M月D日 HH:mm:ss')"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().add(1, 'day').format('YYYY年M月D日 HH:mm:ss')))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 减少\ndayjs().subtract(7, 'year').format('YYYY年M月D日 HH:mm:ss')"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().subtract(7, 'year').format('YYYY年M月D日 HH:mm:ss')))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 开头时间\ndayjs().startOf('year').format('YYYY年M月D日 HH:mm:ss')"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().startOf('year').format('YYYY年M月D日 HH:mm:ss')))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 末尾时间\ndayjs().endOf('month').format('YYYY年M月D日 HH:mm:ss')"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().endOf('month').format('YYYY年M月D日 HH:mm:ss')))],1)],1)],1),_c('h1',[_vm._v("显示")]),_c('el-row',{staticClass:"d2-mt",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 格式化\ndayjs().format('YYYY-M-D HH:mm:ss')"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().format('YYYY-M-D HH:mm:ss')))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 时间差\ndayjs().diff(dayjs().subtract(1, 'day'), 'days')"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().diff(_vm.dayjs().subtract(1, 'day'), 'days')))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// Unix 时间戳 (毫秒)\ndayjs().valueOf()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().valueOf()))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// Unix 时间戳 (秒)\ndayjs().unix()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().unix()))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 天数 (月)\ndayjs().daysInMonth()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().daysInMonth()))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// Date 对象\ndayjs().toDate()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().toDate()))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 序列化 Dayjs 对象时会返回 ISO 8601 格式的字符串\ndayjs().toJSON()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().toJSON()))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// ISO 8601 字符串\ndayjs().toISOString()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().toISOString()))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 字符串\ndayjs().toString()"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().toString()))],1)],1)],1),_c('h1',[_vm._v("查询")]),_c('el-row',{staticClass:"d2-mt",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 是否之前\ndayjs().isBefore(dayjs().add(1, 'day'))"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().isBefore(_vm.dayjs().add(1, 'day'))))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 是否之前\ndayjs().isBefore(dayjs().subtract(1, 'day'))"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().isBefore(_vm.dayjs().subtract(1, 'day'))))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 是否相同\ndayjs().isSame(dayjs())"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().isSame(_vm.dayjs())))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{staticClass:"d2-mb",attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 是否相同\ndayjs().isSame(dayjs().add(1, 'day'))"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().isSame(_vm.dayjs().add(1, 'day'))))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 是否之后\ndayjs().isAfter(dayjs().add(1, 'day'))"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().isAfter(_vm.dayjs().add(1, 'day'))))],1)],1),_c('el-col',{attrs:{"span":12}},[_c('el-card',{attrs:{"shadow":"never"}},[_c('d2-highlight',{attrs:{"slot":"header","code":"// 是否之后\ndayjs().isAfter(dayjs().subtract(1, 'day'))"},slot:"header"}),_vm._v(_vm._s(_vm.dayjs().isAfter(_vm.dayjs().subtract(1, 'day'))))],1)],1)],1),_c('d2-link-btn',{attrs:{"slot":"footer","title":"依赖","link":"https://github.com/iamkun/dayjs"},slot:"footer"})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/plugins/day/index.vue?vue&type=template&id=63f20993&

// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__("5a0c");
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/day/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var dayvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      dayjs: dayjs_min_default.a
    };
  }
});
// CONCATENATED MODULE: ./src/views/demo/plugins/day/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var plugins_dayvue_type_script_lang_js_ = (dayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/plugins/day/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector











































































/* harmony default export */ var dayvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/plugins/day/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/plugins/day/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var plugins_dayvue_type_custom_index_0_blockType_vue_filename_injector = (dayvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/plugins/day/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  plugins_dayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof plugins_dayvue_type_custom_index_0_blockType_vue_filename_injector === 'function') plugins_dayvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var day = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d0b97f3.f3c21d89.js.map