(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d2213d9"],{

/***/ "ca05":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/store/menu/index.vue?vue&type=template&id=6fa6969b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('d2-container',[_c('el-tabs',[_c('el-tab-pane',{attrs:{"label":"顶栏菜单"}},[_c('el-button-group',{staticClass:"d2-mb"},[_c('el-button',{on:{"click":_vm.handleHeaderSet}},[_vm._v("设置顶栏空菜单")]),_c('el-button',{on:{"click":_vm.headerReset}},[_vm._v("恢复顶栏菜单")])],1),_c('d2-highlight',{attrs:{"code":JSON.stringify(_vm.header, null, 2)}})],1),_c('el-tab-pane',{attrs:{"label":"侧栏菜单"}},[_c('el-button-group',{staticClass:"d2-mb"},[_c('el-button',{on:{"click":_vm.handleAsideSet}},[_vm._v("设置侧栏空菜单")]),_c('el-button',{on:{"click":_vm.asideReset}},[_vm._v("恢复侧栏菜单")])],1),_c('d2-highlight',{attrs:{"code":JSON.stringify(_vm.aside, null, 2)}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/playground/store/menu/index.vue?vue&type=template&id=6fa6969b&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/store/menu/index.vue?vue&type=script&lang=js&

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


/* harmony default export */ var menuvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      menuEmpty: [{
        title: '空菜单演示',
        icon: 'folder-o',
        children: [{
          title: '空菜单 1',
          children: [{
            title: '空菜单 1-1'
          }, {
            title: '空菜单 1-2'
          }]
        }, {
          title: '空菜单 2'
        }, {
          title: '空菜单 3'
        }]
      }],
      headerChanged: false,
      asideChanged: false,
      headerBak: [],
      asideBak: []
    };
  },
  computed: Object(objectSpread["a" /* default */])({}, Object(vuex_esm["e" /* mapState */])('d2admin/menu', ['header', 'aside'])),
  created: function created() {
    this.headerBak = Object(lodash["cloneDeep"])(this.header);
    this.asideBak = Object(lodash["cloneDeep"])(this.aside);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.headerChanged && this.asideChanged) {
      this.headerSet(this.headerBak);
      this.asideSet(this.asideBak);
      this.$notify({
        title: '菜单恢复',
        message: '对侧边栏和顶栏菜单的修改已经复原',
        type: 'success'
      });
      return;
    }

    if (this.headerChanged) {
      this.headerSet(this.headerBak);
      this.$notify({
        title: '菜单恢复',
        message: '对顶栏菜单的修改已经复原',
        type: 'success'
      });
      return;
    }

    if (this.asideChanged) {
      this.asideSet(this.asideBak);
      this.$notify({
        title: '菜单恢复',
        message: '对侧边栏菜单的修改已经复原',
        type: 'success'
      });
    }
  },
  methods: Object(objectSpread["a" /* default */])({}, Object(vuex_esm["d" /* mapMutations */])('d2admin/menu', ['headerSet', 'asideSet']), {
    /**
     * 修改顶栏菜单
     */
    handleHeaderSet: function handleHeaderSet() {
      this.headerChanged = true;
      this.headerSet(this.menuEmpty);
      this.$notify({
        title: '菜单修改',
        message: '对顶栏菜单的修改已经生效',
        type: 'success'
      });
    },

    /**
     * 修改侧边栏菜单
     */
    handleAsideSet: function handleAsideSet() {
      this.asideChanged = true;
      this.asideSet(this.menuEmpty);
      this.$notify({
        title: '菜单修改',
        message: '对侧边栏菜单的修改已经生效',
        type: 'success'
      });
    },

    /**
     * 恢复顶栏菜单
     */
    headerReset: function headerReset() {
      this.headerSet(this.headerBak);
      this.$notify({
        title: '菜单恢复',
        message: '对顶栏菜单的修改已经复原',
        type: 'success'
      });
    },

    /**
     * 恢复侧边栏菜单
     */
    asideReset: function asideReset() {
      this.asideSet(this.asideBak);
      this.$notify({
        title: '菜单恢复',
        message: '对侧边栏菜单的修改已经复原',
        type: 'success'
      });
    }
  })
});
// CONCATENATED MODULE: ./src/views/demo/playground/store/menu/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var store_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/demo/playground/store/menu/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector

















































































































































/* harmony default export */ var menuvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/demo/playground/store/menu/index.vue"
});

// CONCATENATED MODULE: ./src/views/demo/playground/store/menu/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var store_menuvue_type_custom_index_0_blockType_vue_filename_injector = (menuvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/demo/playground/store/menu/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  store_menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof store_menuvue_type_custom_index_0_blockType_vue_filename_injector === 'function') store_menuvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var menu = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-2d2213d9.fdf4aae2.js.map