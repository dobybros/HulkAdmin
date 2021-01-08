(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-795edd94"],{

/***/ "587b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GetAllServerConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return GetServiceConfigs; });
/* unused harmony export GetServiceConfigsByType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return SaveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return SaveWithLastConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return RemoveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CheckServiceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return RepairConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GetAllGroovyInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DeleteServiceVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return RemoveService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GetAllServiceVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GetDeployServiceVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDeployService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return RemoveDeployService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return RepairDployServiceVersions; });
/* unused harmony export SaveServiceVersion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return RemoveServiceVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GetDeployRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return GetThisServiceVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return GetThisBaseJars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GetDeployServers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GetAllServerWebs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ReloadNginx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return GetServerVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return GetWebVersions; });
/* unused harmony export GetAllContainer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return ReloadContainer; });
/* unused harmony export GetServerIps */
/* unused harmony export UploadAllJars */
/* unused harmony export DeleteContainer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GetAllNginx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return GetWebsByNginx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DownloadAllGroovy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DeleteWebProjectVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GetGroovyCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GetGroovyCloudData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DeleteGwsUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GetKibanaUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GetAllGCRepairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GCRepair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return RepairBaseJars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GetBaseJars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return GetTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return GetTransactionInfos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return RetryTransaction; });
/* harmony import */ var _plugin_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9bd2");
/* harmony import */ var _libs_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c276");


function GetAllServerConfigs(searchInput) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/serverconfig?s=' + searchInput,
    method: 'get'
  });
}
function GetServiceConfigs(service, version) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/serviceconfig/' + service + '/' + version,
    method: 'get'
  });
}
function GetServiceConfigsByType() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/configs/type',
    method: 'get'
  });
}
function SaveConfig(data) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/serverconfig',
    method: 'post',
    data: data
  });
}
function SaveWithLastConfig(data) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/serverconfig/withlast',
    method: 'post',
    data: data
  });
}
function RemoveConfig(id) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/serverconfig/' + id,
    method: 'delete'
  });
}
function CheckServiceConfig(service, version) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/serviceconfig/healthy?s=' + service + '&v=' + version,
    method: 'get'
  });
}
function RepairConfig() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/repairconfig',
    method: 'get'
  });
}
function GetAllGroovyInfo(searchInput) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/groovyzips?s=' + searchInput,
    method: 'get'
  });
}
function DeleteServiceVersion(service, version) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/groovyzip?s=' + service + '&v=' + version,
    method: 'delete'
  });
}
function RemoveService(service) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/groovyzips?s=' + service,
    method: 'delete'
  });
}
function GetAllServiceVersions() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/deployserviceversions',
    method: 'get'
  });
}
function GetDeployServiceVersion(id) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/deployserviceversions/services/' + id,
    method: 'get'
  });
}
function AddDeployService(id, serviceName) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/deployserviceversions/services/' + id + "/service/" + serviceName,
    method: 'post'
  });
}
function RemoveDeployService(id, serviceName) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/deployserviceversions/services/' + id + "/service/" + serviceName,
    method: 'delete'
  });
}
function RepairDployServiceVersions() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/repairdeployserviceversion',
    method: 'get'
  });
}
function SaveServiceVersion(data) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/serviceversion',
    method: 'post',
    data: data
  });
}
function RemoveServiceVersion(id) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/deployserviceversion?i=' + id,
    method: 'delete'
  });
}
function GetDeployRecords(searchInput) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/deployrecords?s=' + searchInput,
    method: 'get'
  });
}
function GetThisServiceVersions(id) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/thisserviceversions/' + id,
    method: 'get'
  });
}
function GetThisBaseJars(id) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/newbaseJars/' + id,
    method: 'get'
  });
}
function GetDeployServers(id) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/deployserver/' + id,
    method: 'get'
  });
}
function GetAllServerWebs(data) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/serverweb/' + data,
    method: 'get'
  });
}
function ReloadNginx(data) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/serverweb',
    method: 'post',
    data: data
  });
}
function GetServerVersions(data) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/serverweb/server/' + data,
    method: 'get'
  });
}
function GetWebVersions(nginxName, webName, projectName) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/serverweb/web/' + nginxName + '/' + webName + '/' + projectName,
    method: 'get'
  });
}
function GetAllContainer() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/containers',
    method: 'get'
  });
}
function ReloadContainer(id) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/container/' + id,
    method: 'get'
  });
}
function GetServerIps() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/container/serverips',
    method: 'get'
  });
}
function UploadAllJars() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/open/allbasejars',
    method: 'post'
  });
}
function DeleteContainer(server) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/container/' + server,
    method: 'delete'
  });
}
function GetAllNginx() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/allnginx',
    method: 'get'
  });
}
function GetWebsByNginx(data) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/webs/' + data,
    method: 'get'
  });
}
function DownloadAllGroovy(directoryStr) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/downloadgroovys',
    method: 'post',
    data: directoryStr
  });
}
function DeleteWebProjectVersion(nginxName, webName, projectName, version) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/web/' + nginxName + '/' + webName + '/' + projectName + '/' + version,
    method: 'delete'
  });
}
function GetGroovyCloud() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/gc/init',
    method: 'get'
  });
}
function GetGroovyCloudData(data) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/gc/data',
    method: 'post',
    data: data
  });
}
function DeleteGwsUser(data, userId) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/gc/gws/delete/' + userId,
    method: 'post',
    data: data
  });
}
function GetKibanaUrl() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/log/page',
    method: 'get'
  });
}
function GetAllGCRepairs() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/repair/all',
    method: 'get'
  });
}
function GCRepair(id) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/repair/' + id,
    method: 'post'
  });
}
function RepairBaseJars() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/repairbaseJars',
    method: 'get'
  });
}
function GetBaseJars(id) {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/deploy/baseJars/' + id,
    method: 'get'
  });
}
function GetTransactions() {
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/dts/transactions',
    method: 'get'
  });
}
function GetTransactionInfos(transactionType) {
  var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 1, 2];
  var loadSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var skip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var size = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
  var startTime = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  var endTime = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
  var stage = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
  var tid = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : '';
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: "/dts/transactioninfos?transactiontype=".concat(transactionType, "&status=").concat(status, "&loadSize=").concat(loadSize, "&skip=").concat(skip, "&size=").concat(size, "&startTime=").concat(startTime, "&endTime=").concat(endTime, "&stage=").concat(stage, "&tid=").concat(tid),
    method: 'get'
  });
}
function RetryTransaction(transactionType) {
  var ids = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object(_plugin_axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: "/dts/transaction/".concat(transactionType, "/retry"),
    method: 'post',
    data: ids
  });
}

/***/ }),

/***/ "8271":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e6fb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tools_vue_filename_injector_src_lib_injector_js_ref_0_2_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9680":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/deployuploadweb/index.vue?vue&type=template&id=1c555a4c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-container',[_c('el-main',[_c('el-row',{staticStyle:{"margin-bottom":"20px","display":"flex"}},[_c('el-col',{attrs:{"span":2}},[_c('el-button',{attrs:{"type":"info"}},[_vm._v("Select Nginx")])],1),_c('el-col',{attrs:{"span":4}},[_c('el-autocomplete',{attrs:{"placeholder":"Select Nginx","fetch-suggestions":_vm.selectNginx,"clearable":""},model:{value:(_vm.nginxName),callback:function ($$v) {_vm.nginxName=$$v},expression:"nginxName"}})],1)],1),_c('el-scrollbar',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"height":"700px"}},[_c('el-row',[_c('el-col',{staticStyle:{"margin-right":"5px"},style:(_vm.newwebDisplay),attrs:{"span":2}},[_c('el-button',{attrs:{"type":"primary","round":""},on:{"click":_vm.openWebDialog}},[_vm._v(_vm._s(_vm.$t("views.deploy.newWeb")))])],1),_c('el-col',{style:(_vm.newwebDisplay),attrs:{"span":2}},[_c('el-button',{attrs:{"type":"primary","round":""},on:{"click":_vm.openWebVersionDialog}},[_vm._v("\n                        "+_vm._s(_vm.$t("views.deploy.reloadNginx"))+"\n                    ")])],1)],1),_c('el-row',_vm._l((this.webs),function(web){return _c('el-col',{staticStyle:{"margin-top":"20px"},attrs:{"span":18}},[_c('el-row',[_c('el-col',[_c('div',{staticClass:"grid-content bg-purple-dark font-style"},[_vm._v(_vm._s(web.webName))])])],1),_vm._l((web.projectNames),function(project){return _c('el-row',{staticStyle:{"display":"flex"}},[_c('el-col',{staticStyle:{"margin-top":"20px","margin-right":"40px"}},[_c('el-input',{attrs:{"placeholder":"Input service name"},model:{value:(project.projectName),callback:function ($$v) {_vm.$set(project, "projectName", $$v)},expression:"project.projectName"}},[_c('template',{slot:"prepend"},[_vm._v(_vm._s(_vm.$t("views.deploy.projectName")))])],2)],1),_c('el-col',{staticStyle:{"flex":"1","margin-top":"20px","margin-right":"120px"}},[_c('el-upload',{ref:"upload",refInFor:true,attrs:{"accept":".zip","action":_vm.uploadWebData(web.webName, project.projectName),"on-success":_vm.uploadSuccess,"file-list":_vm.fileList,"limit":1,"auto-upload":true}},[_c('el-button',{attrs:{"type":"primary"}},[_vm._v(_vm._s(_vm.$t("views.deploy.upload"))),_c('i',{staticClass:"el-icon-upload el-icon--right"})])],1)],1),_c('el-col',{staticStyle:{"margin-right":"40px","margin-top":"20px"},attrs:{"span":20}},[_c('el-select',{attrs:{"placeholder":"Select version"},nativeOn:{"click":function($event){return _vm.getWebVersions(web.webName, project.projectName)}},model:{value:(project.selectVersion),callback:function ($$v) {_vm.$set(project, "selectVersion", $$v)},expression:"project.selectVersion"}},_vm._l((project.versions),function(version){return _c('el-option',{key:version,attrs:{"label":version,"value":version}})}),1)],1),_c('el-col',{staticStyle:{"margin-top":"20px"}},[_c('el-button',{attrs:{"type":"danger","size":"medium"},on:{"click":function($event){return _vm.deleteWebProjectVersion(web.webName, project.projectName, project.selectVersion)}}},[_vm._v("\n                                "+_vm._s(_vm.$t("views.deploy.delete"))+"\n                            ")]),_c('el-button',{attrs:{"size":"medium","type":"success"},on:{"click":function($event){return _vm.downloadThis(_vm.downloadGroovyUrl + '/open/web/' + _vm.nginxName + '/' + web.webName + '/' + project.projectName + '/' + project.selectVersion)}}},[_vm._v("\n                                "+_vm._s(_vm.$t("views.deploy.download"))+"\n                            ")])],1)],1)}),_c('el-row',{staticStyle:{"margin":"15px 0"}},[_c('el-col',[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-plus","round":""},on:{"click":function($event){return _vm.addProject(web.webName)}}})],1)],1)],2)}),1)],1)],1),_c('el-dialog',{attrs:{"title":_vm.$t('views.deploy.newWeb'),"visible":_vm.dialogUploadWeb,"width":"40%"},on:{"update:visible":function($event){_vm.dialogUploadWeb=$event}}},[_c('el-row',{staticStyle:{"display":"flex"}},[_c('el-col',[_c('el-input',{attrs:{"placeholder":"Input web name"},model:{value:(_vm.webName),callback:function ($$v) {_vm.webName=$$v},expression:"webName"}},[_c('template',{slot:"prepend"},[_vm._v(_vm._s(_vm.$t("views.deploy.webName")))])],2)],1),_c('el-col',[_c('el-input',{attrs:{"placeholder":"Input project name"},model:{value:(_vm.projectName),callback:function ($$v) {_vm.projectName=$$v},expression:"projectName"}},[_c('template',{slot:"prepend"},[_vm._v(_vm._s(_vm.$t("views.deploy.projectName")))])],2)],1)],1),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addWeb}},[_vm._v(_vm._s(_vm.$t("views.deploy.add"))+"\n            ")]),_c('el-button',{on:{"click":_vm.cancelAdd}},[_vm._v(_vm._s(_vm.$t("views.deploy.cancel")))])],1)],1),_c('el-dialog',{attrs:{"visible":_vm.dialogWebVersion,"width":"60%"},on:{"update:visible":function($event){_vm.dialogWebVersion=$event}}},[_c('el-scrollbar',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticStyle:{"height":"700px"}},[_c('el-row',[_c('el-button',{on:{"click":_vm.refreshWebVersion}},[_c('i',{staticClass:"el-icon-refresh"})])],1),_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('div',{staticClass:"grid-content bg-purple-dark font-style"},[_vm._v(_vm._s(_vm.$t("views.deploy.web")))])])],1),_c('el-row',[_c('el-col',{attrs:{"span":6}},[_c('span',{staticClass:"font-style"},[_vm._v(_vm._s(_vm.$t("views.deploy.webName")))])]),_c('el-col',{attrs:{"span":6}},[_c('span',{staticClass:"font-style"},[_vm._v(_vm._s(_vm.$t("views.deploy.projectName")))])]),_c('el-col',{attrs:{"span":8}},[_c('span',{staticClass:"font-style"},[_vm._v(_vm._s(_vm.$t("views.deploy.version")))])])],1),_vm._l((this.nginxwebs),function(web){return _c('el-row',[_c('el-col',{attrs:{"span":6}},[_c('el-input',{attrs:{"clearable":"","clearable":"","placeholder":"Input web name"},model:{value:(web.webName),callback:function ($$v) {_vm.$set(web, "webName", $$v)},expression:"web.webName"}})],1),_c('el-col',{attrs:{"span":6}},[_c('el-input',{attrs:{"clearable":"","clearable":"","placeholder":"Input project name"},model:{value:(web.projectName),callback:function ($$v) {_vm.$set(web, "projectName", $$v)},expression:"web.projectName"}})],1),_c('el-col',{attrs:{"span":8}},[_c('el-select',{attrs:{"placeholder":"Select version"},nativeOn:{"click":function($event){return _vm.getNginxWebVersions(web.webName, web.projectName)}},model:{value:(web.currentVersion),callback:function ($$v) {_vm.$set(web, "currentVersion", $$v)},expression:"web.currentVersion"}},_vm._l((web.versions),function(version){return _c('el-option',{key:version,attrs:{"label":version,"value":version}})}),1)],1)],1)}),_c('el-row',[_c('el-col',[_c('el-button',{staticStyle:{"margin":"15px 0px"},attrs:{"type":"primary","icon":"el-icon-plus","round":""},on:{"click":_vm.addWeb}})],1)],1),_c('el-row',[_c('el-col',{attrs:{"span":20}},[_c('div',{staticClass:"grid-content bg-purple-dark font-style"},[_vm._v(_vm._s(_vm.$t("views.deploy.nginx")))])])],1),_c('el-row',{staticStyle:{"margin-top":"20px"}},[_c('el-col',{attrs:{"span":8}},[_c('el-button',{attrs:{"type":"primary","round":""},on:{"click":_vm.dialogReload}},[_vm._v(_vm._s(_vm.$t("views.deploy.reloadNginx"))+"\n                    ")])],1)],1)],2)],1),_c('el-dialog',{attrs:{"title":_vm.$t('views.deploy.reminder'),"visible":_vm.deleteSureReloadNginxVisible,"width":"30%"},on:{"update:visible":function($event){_vm.deleteSureReloadNginxVisible=$event}}},[_c('span',[_vm._v(_vm._s(this.remindNginx))]),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancelReload}},[_vm._v(_vm._s(_vm.$t("views.deploy.cancel")))]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.reload}},[_vm._v(_vm._s(_vm.$t("views.deploy.sure")))])],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/hulk/deployuploadweb/index.vue?vue&type=template&id=1c555a4c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./src/api/deploy.api.js
var deploy_api = __webpack_require__("587b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/deployuploadweb/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var deployuploadwebvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      webs: [],
      nginxwebs: [],
      uploadUrl: "/open/web",
      fileList: [],
      param: {},
      dialogUploadWeb: false,
      dialogWebVersion: false,
      webName: '',
      projectName: '',
      selectVersion: '',
      downloadGroovyUrl: '',
      newwebDisplay: "display: none",
      nginxName: '',
      nginxList: [],
      loading: false,
      deleteSureReloadNginxVisible: false,
      remindNginx: ''
    };
  },
  watch: {
    nginxName: function nginxName() {
      this.getwebs();
    }
  },
  methods: {
    getwebs: function getwebs() {
      var _this = this;

      if (this.nginxName === null || this.nginxName === undefined || this.nginxName === '') {
        this.$message.error('Please select nginx');
      } else {
        this.loading = true;
        Object(deploy_api["C" /* GetWebsByNginx */])(this.nginxName).then(function (resp) {
          _this.loading = false;

          _this.$message.success("Success!");

          _this.webs = resp;
          _this.newwebDisplay = "display: block";
        }).catch(function (err) {
          _this.loading = false;

          _this.$message.error(err);
        });
      }
    },
    selectNginx: function selectNginx(str, callback) {
      var results = this.nginxList;
      callback(results);
    },
    uploadSuccess: function uploadSuccess(res, file, fileList) {
      if (res.code === 1) {
        this.$message.success("File " + file.name + " Upload Success!");
      } else {
        this.$message.error("File " + file.name + "Upload Failed!");
      }

      this.fileList = [];
    },
    downloadThis: function downloadThis(href) {
      var a = document.createElement('a');
      a.setAttribute('href', href);
      a.click();
    },
    uploadWebData: function uploadWebData(webName, projectName) {
      var uploadHost = '';

      if (true) {
        uploadHost = location.protocol + "//" + location.host;
      } else {}

      var param = uploadHost + this.uploadUrl + '/' + this.nginxName + "?w=" + webName + "&p=" + projectName;
      return param;
    },
    cancelReload: function cancelReload() {
      this.deleteSureReloadNginxVisible = false;
    },
    reload: function reload() {
      var _this2 = this;

      this.deleteSureReloadNginxVisible = false;
      this.remindNginx = '';
      Object(deploy_api["E" /* ReloadNginx */])({
        "webs": this.nginxwebs,
        "nginxName": this.nginxName
      }).then(function (resp) {
        _this2.$message.success("Success reload nginx " + _this2.nginxName + "!");

        _this2.dialogWebVersion = false;
      }).catch(function (err) {
        _this2.$message.error(err);

        _this2.dialogWebVersion = false;
      });
    },
    openWebDialog: function openWebDialog() {
      this.dialogUploadWeb = true;
    },
    dialogReload: function dialogReload() {
      this.remindNginx = 'Confirm reload nginx ' + this.nginxName + '?', this.deleteSureReloadNginxVisible = true;
    },
    getNginxWebVersions: function getNginxWebVersions(webName, projectName) {
      var _this3 = this;

      if (webName === undefined || webName === '' || projectName === undefined || projectName === '') {
        this.$message.error('Please input web name or projectName');
      } else {
        Object(deploy_api["B" /* GetWebVersions */])(this.nginxName, webName, projectName).then(function (resp) {
          for (var i = 0; i < _this3.nginxwebs.length; i++) {
            if (_this3.nginxwebs[i]["webName"] === webName && _this3.nginxwebs[i]["projectName"] === projectName) {
              _this3.nginxwebs[i]["versions"] = resp;
            }
          }
        }).catch(function (err) {
          _this3.$message.error(err);
        });
      }
    },
    getWebVersions: function getWebVersions(webName, projectName) {
      var _this4 = this;

      Object(deploy_api["B" /* GetWebVersions */])(this.nginxName, webName, projectName).then(function (resp) {
        for (var i = 0; i < _this4.webs.length; i++) {
          if (_this4.webs[i]["webName"] === webName) {
            var projectNames = _this4.webs[i]["projectNames"];

            if (projectNames !== undefined) {
              for (var j = 0; j < projectNames.length; j++) {
                if (projectNames[i]["projectName"] === projectName) {
                  projectNames[i]["versions"] = resp;
                  break;
                }
              }
            }
          }
        }
      }).catch(function (err) {
        _this4.$message.error(err);
      });
    },
    refreshWebVersion: function refreshWebVersion() {
      var _this5 = this;

      Object(deploy_api["m" /* GetAllServerWebs */])(this.nginxName).then(function (resp) {
        _this5.$message.success("Loaded!");

        _this5.nginxwebs = resp;
      }).catch(function (err) {
        _this5.loading = false;

        _this5.$message.error(err);
      });
    },
    openWebVersionDialog: function openWebVersionDialog() {
      var _this6 = this;

      Object(deploy_api["m" /* GetAllServerWebs */])(this.nginxName).then(function (resp) {
        // this.loading = false
        // this.display = "display: block"
        _this6.$message.success("Loaded!"); // this.servers = resp["servers"]


        _this6.nginxwebs = resp; // this.nginx = resp["nginx"]

        _this6.dialogWebVersion = true;
      }).catch(function (err) {
        _this6.loading = false;

        _this6.$message.error(err);
      });
    },
    addWeb: function addWeb() {
      this.webs.push({
        "webName": this.webName,
        "projectNames": [{
          "projectName": this.projectName,
          "versions": []
        }]
      });
      this.webName = '', this.projectName = '';
      this.dialogUploadWeb = false;
    },
    cancelAdd: function cancelAdd() {
      this.webName = '', this.projectName = '';
      this.dialogUploadWeb = false;
    },
    addProject: function addProject(webName) {
      for (var i = 0; i < this.webs.length; i++) {
        var web = this.webs[i];

        if (web["webName"] === webName) {
          var projectNames = web["projectNames"];

          if (projectNames === undefined) {
            projectNames = [];
          }

          projectNames.push({
            "projectName": '',
            "lastUploadTime": ''
          });
        }
      }
    },
    deleteWebProjectVersion: function deleteWebProjectVersion(webName, projectName, version) {
      var _this7 = this;

      Object(deploy_api["e" /* DeleteWebProjectVersion */])(this.nginxName, webName, projectName, version).then(function (resp) {
        _this7.$message.success("Success delete " + webName + " " + projectName + " " + version);

        for (var i = 0; i < _this7.webs.length; i++) {
          var web = _this7.webs[i];

          if (web["webName"] === webName) {
            var projectNames = web["projectNames"];

            for (var j = 0; j < projectNames.length; j++) {
              var project = projectNames[j];

              if (project["projectName"] === projectName) {
                var versions = project["versions"];

                for (var k = 0; k < versions.length; k++) {
                  if (versions[k] === version) {
                    versions.splice(k, 1);
                    project["selectVersion"] = '';
                  }
                }
              }
            }
          }
        }
      }).catch(function (err) {
        _this7.$message.error(err);
      });
    },
    downloadWebProjectVersion: function downloadWebProjectVersion(webName, projectName, version) {
      var _this8 = this;

      Object(deploy_api["DownloadWebProjectVersion"])(webName, projectName, version).then(function (resp) {}).catch(function (err) {
        _this8.$message.error(err);
      });
    }
  },
  created: function created() {
    var _this9 = this;

    Object(deploy_api["k" /* GetAllNginx */])().then(function (resp) {
      _this9.$message.success("Updated!");

      _this9.nginxList = resp;
      var uploadHost = '';

      if (true) {
        uploadHost = location.protocol + "//" + location.host;
      } else {}

      _this9.downloadGroovyUrl = uploadHost;
    }).catch(function (err) {
      _this9.$message.error(err);
    });
  }
});
// CONCATENATED MODULE: ./src/views/hulk/deployuploadweb/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var hulk_deployuploadwebvue_type_script_lang_js_ = (deployuploadwebvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/hulk/deployuploadweb/index.vue?vue&type=style&index=0&lang=css&
var deployuploadwebvue_type_style_index_0_lang_css_ = __webpack_require__("8271");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/deployuploadweb/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector










































































































































































































































































































































































































































































/* harmony default export */ var deployuploadwebvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/hulk/deployuploadweb/index.vue"
});

// CONCATENATED MODULE: ./src/views/hulk/deployuploadweb/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var hulk_deployuploadwebvue_type_custom_index_0_blockType_vue_filename_injector = (deployuploadwebvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/hulk/deployuploadweb/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hulk_deployuploadwebvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof hulk_deployuploadwebvue_type_custom_index_0_blockType_vue_filename_injector === 'function') hulk_deployuploadwebvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var deployuploadweb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "e6fb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=chunk-795edd94.fc9a5d6f.js.map