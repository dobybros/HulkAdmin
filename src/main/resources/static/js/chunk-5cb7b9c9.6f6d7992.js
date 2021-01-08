(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-5cb7b9c9"],{

/***/ "07f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "27bb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/versions/index.vue?vue&type=template&id=65c73e5c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-row',[_c('el-col',{staticStyle:{"margin":"10px"},attrs:{"span":4}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addNewApp}},[_vm._v(_vm._s(_vm.$t("views.versions.title.add")))])],1)],1),_vm._l((_vm.apps),function(appList,project){return _c('el-row',[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":appList,"title":project,"border":""}},[_c('el-table-column',{attrs:{"label":project,"align":"center"}},[_c('el-table-column',{attrs:{"prop":"name","label":_vm.$t('views.versions.title.name'),"width":"140"}}),_c('el-table-column',{attrs:{"prop":"appId","label":_vm.$t('views.versions.title.appId'),"width":"250"}}),_c('el-table-column',{attrs:{"prop":"minBuild","label":_vm.$t('views.versions.title.minBuild')}}),_c('el-table-column',{attrs:{"label":_vm.$t('views.versions.title.actions')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini"},on:{"click":function($event){return _vm.editAppInfo(scope.row)}}},[_vm._v(_vm._s(_vm.$t('views.versions.title.editApp'))+"\n            ")])]}}],null,true)})],1)],1)],1)}),_c('el-dialog',{ref:"editDialog",attrs:{"size":"medium","title":_vm.isCreate ? _vm.$t('views.versions.title.create') : _vm.currentEditApp.name,"visible":_vm.showEditModal},on:{"update:visible":function($event){_vm.showEditModal=$event}}},[_c('el-form',{ref:"form",attrs:{"model":_vm.currentEditApp,"label-width":"130px"}},[_c('el-tabs',[_c('el-tab-pane',{attrs:{"label":_vm.$t('views.versions.title.infos')}},[_c('el-form-item',{attrs:{"label":_vm.$t('views.versions.title.appNumber')}},[_c('el-input',{model:{value:(_vm.currentEditApp.appNumber),callback:function ($$v) {_vm.$set(_vm.currentEditApp, "appNumber", $$v)},expression:"currentEditApp.appNumber"}})],1),_c('el-form-item',{attrs:{"label":_vm.$t('views.versions.title.name')}},[_c('el-input',{model:{value:(_vm.currentEditApp.name),callback:function ($$v) {_vm.$set(_vm.currentEditApp, "name", $$v)},expression:"currentEditApp.name"}})],1),_c('el-form-item',{attrs:{"label":_vm.$t('views.versions.title.appId')}},[_c('el-input',{model:{value:(_vm.currentEditApp.appId),callback:function ($$v) {_vm.$set(_vm.currentEditApp, "appId", $$v)},expression:"currentEditApp.appId"}})],1),_c('el-form-item',{attrs:{"label":_vm.$t('views.versions.title.project')}},[_c('el-input',{model:{value:(_vm.currentEditApp.project),callback:function ($$v) {_vm.$set(_vm.currentEditApp, "project", $$v)},expression:"currentEditApp.project"}})],1),_c('el-form-item',{attrs:{"label":_vm.$t('views.versions.title.deviceType')}},[_c('el-input',{model:{value:(_vm.currentEditApp.deviceType),callback:function ($$v) {_vm.$set(_vm.currentEditApp, "deviceType", $$v)},expression:"currentEditApp.deviceType"}})],1),_c('el-form-item',{attrs:{"label":_vm.$t('views.versions.title.deviceReg')}},[_c('el-input',{model:{value:(_vm.currentEditApp.deviceRegular),callback:function ($$v) {_vm.$set(_vm.currentEditApp, "deviceRegular", $$v)},expression:"currentEditApp.deviceRegular"}})],1),_c('el-form-item',{attrs:{"label":_vm.$t('views.versions.title.minBuild')}},[_c('el-input',{model:{value:(_vm.currentEditApp.minBuild),callback:function ($$v) {_vm.$set(_vm.currentEditApp, "minBuild", $$v)},expression:"currentEditApp.minBuild"}})],1)],1),_c('el-tab-pane',{attrs:{"label":_vm.$t('views.versions.title.builds')}},[_c('div',{staticStyle:{"text-align":"center","margin-bottom":"10px"}},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-plus","circle":""},on:{"click":_vm.addBuild}})],1),_vm._l((_vm.currentEditApp.builds),function(build,idx){return _c('el-card',{staticClass:"box-card",staticStyle:{"margin-bottom":"15px"}},[_c('el-form',{attrs:{"label-width":"130px","model":build}},[_c('el-form-item',{attrs:{"label":_vm.$t('views.versions.title.version')}},[_c('el-input',{model:{value:(build.version),callback:function ($$v) {_vm.$set(build, "version", $$v)},expression:"build.version"}})],1),_c('el-form-item',{attrs:{"label":_vm.$t('views.versions.title.buildNumber')}},[_c('el-input',{model:{value:(build.buildNumber),callback:function ($$v) {_vm.$set(build, "buildNumber", $$v)},expression:"build.buildNumber"}})],1),_c('el-form-item',{attrs:{"label":_vm.$t('views.versions.title.type')}},[_c('el-input',{model:{value:(build.type),callback:function ($$v) {_vm.$set(build, "type", $$v)},expression:"build.type"}})],1),_c('el-form-item',{attrs:{"label":_vm.$t('views.versions.title.releaseNotes')}},[_c('el-select',{staticStyle:{"width":"100%"},attrs:{"no-data-text":_vm.$t('views.versions.title.inputReleaseNotes'),"multiple":"","filterable":"","default-first-option":"","allow-create":"","placeholder":_vm.$t('views.versions.title.inputReleaseNotes')},model:{value:(build.releaseNotes),callback:function ($$v) {_vm.$set(build, "releaseNotes", $$v)},expression:"build.releaseNotes"}})],1),(!build.resourceId)?_c('el-upload',{staticClass:"upload-demo",staticStyle:{"text-align":"center"},attrs:{"drag":"","action":_vm.uploadUrl,"limit":1,"auto-upload":true,"on-success":_vm.uploadSuccess(build),"multiple":""}},[_c('i',{staticClass:"el-icon-upload"})]):_vm._e(),_c('div',{staticStyle:{"text-align":"center"}},[_c('el-button',{attrs:{"type":"danger","icon":"el-icon-delete","circle":""},on:{"click":function($event){return _vm.$delete(_vm.currentEditApp.builds, idx)}}})],1)],1)],1)})],2)],1)],1),_c('el-button',{staticStyle:{"position":"fixed","right":"20%","width":"60px","height":"60px","bottom":"150px"},attrs:{"type":"success","icon":"el-icon-check","circle":""},on:{"click":_vm.save}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/hulk/versions/index.vue?vue&type=template&id=65c73e5c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./src/plugin/axios/index.js
var axios = __webpack_require__("9bd2");

// CONCATENATED MODULE: ./src/api/versions.api.js

function GetAllApp() {
  return Object(axios["a" /* default */])({
    url: '/version/app/all',
    method: 'get'
  });
}
function PutApp(app) {
  return Object(axios["a" /* default */])({
    url: '/version/app',
    method: 'put',
    data: app
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/versions/index.vue?vue&type=script&lang=js&

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

/* harmony default export */ var versionsvue_type_script_lang_js_ = ({
  name: "Version",
  data: function data() {
    return {
      showEditModal: false,
      currentEditApp: {},
      apps: {},
      isCreate: false
    };
  },
  created: function created() {
    this.updateAllApps();
  },
  computed: {
    uploadUrl: function uploadUrl() {
      // return process.env.VUE_APP_RESOURCE_HOST + 'rest/resource/upload'
      return "https://res.wonderchats.com/" + 'rest/resource/upload';
    }
  },
  methods: {
    updateAllApps: function updateAllApps() {
      var _this = this;

      GetAllApp().then(function (resp) {
        var newApp = {};
        resp.forEach(function (app) {
          var project = app.project || 'others';

          if (!newApp[project]) {
            newApp[project] = [];
          }

          newApp[project].push(app);
        });
        _this.apps = newApp;
      });
    },
    editAppInfo: function editAppInfo(app) {
      this.isCreate = false;
      this.currentEditApp = JSON.parse(JSON.stringify(app));
      this.showEditModal = true;
    },
    addNewApp: function addNewApp() {
      this.isCreate = true;
      this.currentEditApp = {};
      this.showEditModal = true;
    },
    addBuild: function addBuild() {
      if (!this.currentEditApp.builds) {
        this.$set(this.currentEditApp, 'builds', []);
      }

      var newBuild = {
        buildNumber: 0
      };

      if (this.currentEditApp.builds.length) {
        var latest = this.currentEditApp.builds[0];
        newBuild.buildNumber = latest.buildNumber || 0 + 1;
        newBuild.type = latest.type;
      }

      this.currentEditApp.builds.unshift(newBuild);
    },
    uploadSuccess: function uploadSuccess(build) {
      var _this2 = this;

      return function (resp) {
        if (resp.code === 1) {
          _this2.$set(build, 'resourceId', resp.data.file.rid);
        }
      };
    },
    save: function save() {
      var _this3 = this;

      var app = this.currentEditApp;
      PutApp(app).finally(function () {
        _this3.updateAllApps();

        _this3.showEditModal = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/hulk/versions/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var hulk_versionsvue_type_script_lang_js_ = (versionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/hulk/versions/index.vue?vue&type=style&index=0&id=65c73e5c&scoped=true&lang=css&
var versionsvue_type_style_index_0_id_65c73e5c_scoped_true_lang_css_ = __webpack_require__("8391");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/versions/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector




















































































































































































































/* harmony default export */ var versionsvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/hulk/versions/index.vue"
});

// CONCATENATED MODULE: ./src/views/hulk/versions/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var hulk_versionsvue_type_custom_index_0_blockType_vue_filename_injector = (versionsvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/hulk/versions/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hulk_versionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "65c73e5c",
  null
  
)

/* custom blocks */

if (typeof hulk_versionsvue_type_custom_index_0_blockType_vue_filename_injector === 'function') hulk_versionsvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var versions = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "8391":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_65c73e5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("07f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_65c73e5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_65c73e5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_65c73e5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=chunk-5cb7b9c9.6f6d7992.js.map