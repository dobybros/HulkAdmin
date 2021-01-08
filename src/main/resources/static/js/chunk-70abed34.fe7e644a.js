(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-70abed34"],{

/***/ "54d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/pushnotification/index.vue?vue&type=template&id=03e05d3c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-container',[_c('el-header',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.newApp();_vm.showModal()}}},[_c('i',{staticClass:"el-icon-plus el-icon--left"}),_vm._v("\n      "+_vm._s(_vm.$t("views.pushnoti.new-app"))+"\n    ")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.update}},[_vm._v("\n      "+_vm._s(_vm.$t("views.pushnoti.update"))+"\n    ")])],1),_c('el-main',[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.apps}},[_c('el-table-column',{attrs:{"prop":"appId","label":_vm.$t('views.pushnoti.title.app-id'),"width":"180"}}),_c('el-table-column',{attrs:{"type":"expand"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-table',{attrs:{"data":scope.row.platforms}},[_c('el-table-column',{attrs:{"prop":"type","label":_vm.$t('views.pushnoti.title.platform')}}),_c('el-table-column',{attrs:{"prop":"bundle","label":_vm.$t('views.pushnoti.title.bundle-id')}}),_c('el-table-column',{attrs:{"prop":"file","label":_vm.$t('views.pushnoti.title.keychain')}})],1)]}}])}),_c('el-table-column',{attrs:{"label":_vm.$t('views.pushnoti.title.platforms')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n          "+_vm._s(scope.row.platforms.length)+"\n        ")]}}])}),_c('el-table-column',{attrs:{"width":"180","label":_vm.$t('views.pushnoti.title.actions')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{on:{"click":function($event){return _vm.showDetail(scope.row)}}},[_vm._v(_vm._s(_vm.$t("views.pushnoti.detail")))])]}}])})],1)],1),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('el-row',{attrs:{"type":"flex","justify":"center"}},[_c('el-upload',{attrs:{"action":_vm.resPath,"drag":"","on-remove":_vm.fileChanged,"on-success":_vm.uploadedFile,"multiple":""}},[_c('i',{staticClass:"el-icon-upload"}),_c('div',[_vm._v(_vm._s(_vm.$t('views.pushnoti.uploadFileHere')))])])],1),_c('el-row',[_c('el-col',{staticClass:"model-title"},[_vm._v(_vm._s(_vm.$t('views.pushnoti.title.app-id')))]),_c('el-col',[_c('el-input',{attrs:{"clearable":""},model:{value:(_vm.editingApp.appId),callback:function ($$v) {_vm.$set(_vm.editingApp, "appId", $$v)},expression:"editingApp.appId"}})],1)],1),_c('el-row',{attrs:{"type":"flex","justify":"space-between"}},[_c('el-col',{staticClass:"model-title",attrs:{"span":6}},[_vm._v(_vm._s(_vm.$t('views.pushnoti.title.platforms')))])],1),_vm._l((_vm.editingApp.platforms),function(platform,index){return _c('el-card',{key:platform.id,staticStyle:{"margin-top":"5px"}},[_c('el-row',[_c('el-col',{attrs:{"span":6}},[_vm._v(_vm._s(_vm.$t('views.pushnoti.title.platform')))]),_c('el-col',{attrs:{"span":18}},[_c('el-autocomplete',{attrs:{"fetch-suggestions":_vm.suggestions,"clearable":""},model:{value:(platform.type),callback:function ($$v) {_vm.$set(platform, "type", $$v)},expression:"platform.type"}})],1)],1),_c('el-row',[_c('el-col',{staticClass:"model-title",attrs:{"span":6}},[_vm._v(_vm._s(_vm.$t('views.pushnoti.title.bundle-id')))]),_c('el-col',{attrs:{"span":18}},[_c('el-input',{attrs:{"clearable":""},model:{value:(platform.bundle),callback:function ($$v) {_vm.$set(platform, "bundle", $$v)},expression:"platform.bundle"}})],1)],1),_c('el-row',[_c('el-col',{attrs:{"span":6}},[_vm._v(_vm._s(_vm.$t('views.pushnoti.title.keychain')))]),_c('el-col',{attrs:{"span":18}},[_c('el-autocomplete',{attrs:{"fetch-suggestions":_vm.uploadedFileFilter,"clearable":""},model:{value:(platform.file),callback:function ($$v) {_vm.$set(platform, "file", $$v)},expression:"platform.file"}})],1)],1),_c('el-row',[_c('el-button',{staticStyle:{"width":"100%"},attrs:{"size":"mini","type":"danger","round":"","icon":"el-icon-delete"},on:{"click":function($event){return _vm.removePlatform(index)}}})],1)],1)}),_c('el-row',{staticClass:"add-btn"},[_c('el-button',{staticStyle:{"margin-top":"10px"},attrs:{"icon":"el-icon-plus","circle":""},on:{"click":_vm.addPlatform}})],1),_c('el-row',[_c('el-button',{staticStyle:{"width":"100%","margin-top":"15px"},attrs:{"type":"primary","round":""},on:{"click":_vm.saveApp}},[_vm._v("\n        "+_vm._s(_vm.$t('views.pushnoti.title.save'))+"\n      ")])],1)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/hulk/pushnotification/index.vue?vue&type=template&id=03e05d3c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./src/plugin/axios/index.js
var axios = __webpack_require__("9bd2");

// CONCATENATED MODULE: ./src/api/noti.api.js

function GetAllApps() {
  return Object(axios["a" /* default */])({
    url: '/noti/apps',
    method: 'get'
  });
}
function UpdateAllApps() {
  return Object(axios["a" /* default */])({
    url: "/noti/apps/update",
    method: 'post'
  });
}
function SaveApp(app) {
  return Object(axios["a" /* default */])({
    url: '/noti/app',
    method: 'post',
    data: app
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/pushnotification/index.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var platforms = [{
  value: "ios_apn"
}, {
  value: "android_fcm"
}, {
  value: "android_mi"
}];

var emptyPlatform = function emptyPlatform() {
  return {
    bundle: "",
    type: "",
    file: null,
    id: (Math.random() + '').substring(2)
  };
};

var emptyApp = function emptyApp() {
  return {
    appId: "",
    platforms: []
  };
};

var transToUiObject = function transToUiObject(app) {
  var tempA = {};
  tempA.appId = app.appId;
  tempA.platforms = [];
  app.platforms.forEach(function (plt) {
    var tempP = {};
    tempP.file = plt.fileFullName;
    tempP.type = plt.platform;
    tempP.bundle = plt.namespace;
    tempA.platforms.push(tempP);
  });
  return tempA;
};

/* harmony default export */ var pushnotificationvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      resPath: "https://res.wonderchats.com/" + 'rest/resource/upload',
      filesMap: {},
      editingApp: emptyApp(),
      apps: [],
      dialogVisible: false
    };
  },
  created: function created() {
    var _this = this;

    GetAllApps().then(function (resp) {
      _this.$message.success("Updated!");

      var apps = [];
      resp.forEach(function (app) {
        apps.push(transToUiObject(app));
      });
      _this.apps = apps;
    }).catch(function (err) {
      _this.$message.error(err);
    });
  },
  methods: {
    update: function update() {
      var _this2 = this;

      UpdateAllApps().then(function (resp) {
        _this2.$message.success("OK!");
      }).catch(function (err) {
        _this2.$message.error(err);
      });
    },
    newApp: function newApp() {
      this.editingApp = emptyApp();
    },
    showDetail: function showDetail(app) {
      this.editingApp = app;
      this.showModal();
    },
    checkValidity: function checkValidity() {
      var _this3 = this;

      var checkedApp = {};
      var editing = this.editingApp;
      if (!editing.appId) throw new Error("App Id can not be null");
      if (!editing.platforms || !editing.platforms.length) throw new Error("One platform at least");
      checkedApp.appId = editing.appId;
      checkedApp.platforms = [];
      editing.platforms.forEach(function (p) {
        var tempP = {};
        if (!p.type) throw new Error("Platform type is required");
        if (!p.file) throw new Error("Keychain file is required");
        var fileRid = _this3.filesMap[p.file];
        if (!fileRid) throw new Error("No updated keychain is found");
        tempP.namespace = p.bundle;
        tempP.platform = p.type;
        tempP.fileFullName = p.file;
        var uri = "https://res.wonderchats.com/" + 'rest/resource/' + _this3.filesMap[p.file];
        tempP.keychainUri = uri;
        tempP.keychainRid = fileRid;
        checkedApp.platforms.push(tempP);
      });
      return checkedApp;
    },
    showModal: function showModal() {
      this.dialogVisible = true;
    },
    fileChanged: function fileChanged(file, fileList) {
      this.$delete(this.filesMap, file.name);
    },
    uploadedFile: function uploadedFile(response, file, fileList) {
      this.$set(this.filesMap, file.name, response.data.file.rid);
    },
    uploadedFileFilter: function uploadedFileFilter(str, cb) {
      var files = Object.keys(this.filesMap).map(function (filename) {
        return {
          value: filename
        };
      });
      var result = str ? files.filter(function (f) {
        return f.value.indexOf(str) !== -1;
      }) : files;
      cb(result);
    },
    suggestions: function suggestions(str, cb) {
      var results = str ? platforms.filter(function (p) {
        return p.value.indexOf(str) !== -1;
      }) : platforms;
      cb(results);
    },
    addPlatform: function addPlatform() {
      this.editingApp.platforms.push(emptyPlatform());
    },
    removePlatform: function removePlatform(index) {
      this.editingApp.platforms.splice(index, 1);
    },
    saveApp: function saveApp() {
      var _this4 = this;

      try {
        SaveApp(this.checkValidity()).then(function () {
          _this4.dialogVisible = false;
        }).catch(function (err) {
          _this4.$message.error(err);
        });
      } catch (e) {
        this.$message.error(e.message);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/hulk/pushnotification/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var hulk_pushnotificationvue_type_script_lang_js_ = (pushnotificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/hulk/pushnotification/index.vue?vue&type=style&index=0&id=03e05d3c&lang=scss&scoped=true&
var pushnotificationvue_type_style_index_0_id_03e05d3c_lang_scss_scoped_true_ = __webpack_require__("e329");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/pushnotification/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector










































































































































































































































































































/* harmony default export */ var pushnotificationvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/hulk/pushnotification/index.vue"
});

// CONCATENATED MODULE: ./src/views/hulk/pushnotification/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var hulk_pushnotificationvue_type_custom_index_0_blockType_vue_filename_injector = (pushnotificationvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/hulk/pushnotification/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hulk_pushnotificationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "03e05d3c",
  null
  
)

/* custom blocks */

if (typeof hulk_pushnotificationvue_type_custom_index_0_blockType_vue_filename_injector === 'function') hulk_pushnotificationvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var pushnotification = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9ea4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e329":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_03e05d3c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9ea4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_03e05d3c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_03e05d3c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_id_03e05d3c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=chunk-70abed34.fe7e644a.js.map