(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-a589101a"],{

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

/***/ "7605":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"402e648a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/deployserviceversion/index.vue?vue&type=template&id=52f40bc5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-container',[_c('el-main',[_c('el-table',{staticStyle:{"width":"90%"},attrs:{"data":_vm.tableData,"border":"","height":"700px"}},[_c('el-table-column',{attrs:{"prop":"serverType","label":"ServerType","width":"250"}}),_c('el-table-column',{attrs:{"prop":"groovyCloudType","label":"GroovyCloudType","width":"250"}}),_c('el-table-column',{attrs:{"prop":"serviceLength","label":"Number of services","width":"200"}}),_c('el-table-column',{attrs:{"label":"Operations","width":"400"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{staticStyle:{"margin-right":"40px"},attrs:{"type":"primary","size":"medium"},on:{"click":function($event){return _vm.openServiceVersionDialog(scope.row)}}},[_vm._v("\n                            "+_vm._s(_vm.$t("views.deploy.serviceVersion"))+"\n                        ")]),_c('el-button',{attrs:{"type":"success","size":"medium"},on:{"click":function($event){return _vm.openReloadServerTypeDialog(scope.row)}}},[_vm._v("\n                            "+_vm._s(_vm.$t("views.deploy.reload"))+"\n                        ")])]}}])})],1)],1),_c('el-dialog',{attrs:{"width":"60%","visible":_vm.serviceVersionDialogVisible,"title":this.remindServerTypeService},on:{"update:visible":function($event){_vm.serviceVersionDialogVisible=$event}}},[_c('el-col',{staticStyle:{"margin-bottom":"5px"},attrs:{"span":8}},[_c('el-input',{attrs:{"placeholder":"Input service name"},model:{value:(_vm.addServiceName),callback:function ($$v) {_vm.addServiceName=$$v},expression:"addServiceName"}})],1),_c('el-col',{staticStyle:{"margin-left":"5px"},attrs:{"span":5}},[_c('el-button',{attrs:{"type":"primary","size":"medium"},on:{"click":function($event){return _vm.addService()}}},[_vm._v("add")])],1),_c('el-table',{attrs:{"data":_vm.serviceData.serviceVersions,"border":"","height":"700px"}},[_c('el-table-column',{attrs:{"prop":"service","label":"serviceName"}}),_c('el-table-column',{attrs:{"prop":"version","label":"version"}}),_c('el-table-column',{attrs:{"fixed":"right","label":"Operations","width":"150px"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"type":"danger","size":"medium"},on:{"click":function($event){return _vm.removeDeployService(scope.row)}}},[_vm._v("\n                            "+_vm._s(_vm.$t("views.deploy.delete"))+"\n                        ")])]}}])})],1)],1),_c('el-dialog',{attrs:{"title":_vm.$t('views.deploy.reminder'),"visible":_vm.deleteServiceVersionVisible,"width":"30%"},on:{"update:visible":function($event){_vm.deleteServiceVersionVisible=$event}}},[_c('span',[_vm._v(_vm._s(this.remindRemoveDeployServiceVersion))]),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancelDelete}},[_vm._v(_vm._s(_vm.$t("views.deploy.cancel")))]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.sureDelete}},[_vm._v(_vm._s(_vm.$t("views.deploy.sure")))])],1)]),_c('el-dialog',{attrs:{"title":_vm.$t('views.deploy.reminder'),"visible":_vm.reloadContainerDialog,"width":"30%"},on:{"update:visible":function($event){_vm.reloadContainerDialog=$event}}},[_c('span',[_vm._v(_vm._s(this.remindReloadServerType))]),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.cancelReload}},[_vm._v(_vm._s(_vm.$t("views.deploy.cancel")))]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.reload}},[_vm._v(_vm._s(_vm.$t("views.deploy.sure")))])],1)]),_c('el-dialog',{attrs:{"visible":_vm.addbaseJars,"title":"Upload Jars","width":"50%"},on:{"update:visible":function($event){_vm.addbaseJars=$event}}},[_c('span',{staticClass:"uploader"},[_c('el-upload',{ref:"upload",staticClass:"upload-demo",attrs:{"accept":".jar","action":_vm.uploadUrlData,"file-list":_vm.fileList,"on-success":_vm.uploadSuccess,"auto-upload":false}},[_c('el-button',{attrs:{"slot":"trigger","size":"medium","type":"primary"},slot:"trigger"},[_vm._v(_vm._s(_vm.$t("views.deploy.selectFile")))]),_c('el-button',{staticStyle:{"margin-left":"10px"},attrs:{"size":"medium","type":"success"},on:{"click":_vm.submitUpload}},[_vm._v(_vm._s(_vm.$t("views.deploy.upload")))]),_c('el-button',{staticStyle:{"margin-left":"200px"},attrs:{"size":"medium"},on:{"click":_vm.cancelbaseJars}},[_vm._v(_vm._s(_vm.$t("views.deploy.cancel")))])],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/hulk/deployserviceversion/index.vue?vue&type=template&id=52f40bc5&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./src/api/deploy.api.js
var deploy_api = __webpack_require__("587b");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/deployserviceversion/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var deployserviceversionvue_type_script_lang_js_ = ({
  methods: {
    openServiceVersionDialog: function openServiceVersionDialog(data) {
      var _this = this;

      Object(deploy_api["r" /* GetDeployServiceVersion */])(data.serverType).then(function (resp) {
        _this.$message.success("Get " + data.serverType + "'s serviceversions success!");

        _this.serviceData = resp;
        _this.remindServerTypeService = _this.serviceData.serverType + "'s service and version";
        _this.serviceVersionDialogVisible = true;
      }).catch(function (err) {
        _this.$message.error(err);
      });
    },
    openBaseJarsDialog: function openBaseJarsDialog(data) {
      var _this2 = this;

      Object(deploy_api["o" /* GetBaseJars */])(data.serverType).then(function (resp) {
        _this2.basePro = resp;
        _this2.remindBaseJars = _this2.basePro.serverType + "'s base jars and server";
        _this2.baseJarsVisible = true;
      }).catch(function (err) {
        _this2.$message.error(err);
      });
    },
    uploadBaseJars: function uploadBaseJars() {
      return this.downloadJarUrl + "/open/basejarszip";
    },
    uploadJarSuccess: function uploadJarSuccess(res, file, fileList) {
      if (res.code === 1) {
        this.$message.success("File " + file.name + " Upload Success!");
      } else {
        this.$message.error("File " + file.name + "Upload Failed! errMsg: " + res.message);
      }

      this.baseJarList = [];
    },
    openReloadServerTypeDialog: function openReloadServerTypeDialog(data) {
      this.remindReloadServerType = "Confirm reload container " + data.serverType + "?";
      this.reloadContainerDialog = true;
      this.everyData = data;
    },
    cancelReload: function cancelReload() {
      this.remindReloadServerType = "";
      this.reloadContainerDialog = false;
      this.everyData = {};
    },
    reload: function reload() {
      var _this3 = this;

      this.remindReloadServerType = "";
      this.reloadContainerDialog = false;
      Object(deploy_api["D" /* ReloadContainer */])(this.everyData.serverType).then(function (resp) {
        _this3.$message.success("Reload request send success");
      }).catch(function (err) {
        _this3.$message.error(err);
      });
    },
    sureAddbaseJars: function sureAddbaseJars() {
      this.fileList = [];
      this.addbaseJars = true;
    },
    cancelbaseJars: function cancelbaseJars() {
      this.addbaseJars = false;
      this.fileList = [];
    },
    submitUpload: function submitUpload() {
      if (this.$refs.upload.uploadFiles.length > 0) {
        this.$refs.upload.submit();
        this.addbaseJars = false;
      } else {
        this.$message.error('Please select a jar file to upload!');
      }
    },
    uploadSuccess: function uploadSuccess(res, file, fileList) {
      if (res.code === 1) {
        this.$message.success("Files " + file.name + " Upload Success!");
      } else {
        this.$message.error("Files " + file.name + "Upload Failed!");
      }

      for (var i = 0; i < fileList.length; i++) {
        if (fileList[i].name === file.name) {
          fileList.splice(i, 1);
          break;
        }
      }

      if (fileList.length === 0) {// this.$message.success("Upload all jars Success!")
      }
    },
    removeDeployService: function removeDeployService(data) {
      var _this4 = this;

      Object(deploy_api["G" /* RemoveDeployService */])(this.serviceData.serverType, data.service).then(function (resp) {
        _this4.$message.success("Remove " + data.service + " success!");

        _this4.serviceData = resp;
      }).catch(function (err) {
        _this4.$message.error(err);
      });
    },
    addService: function addService() {
      var _this5 = this;

      if (this.addServiceName === undefined || this.addServiceName === "") {
        this.$message.error("Please input serviceName");
      } else {
        Object(deploy_api["a" /* AddDeployService */])(this.serviceData.serverType, this.addServiceName).then(function (resp) {
          _this5.$message.success("Add " + _this5.addServiceName + "to " + _this5.serviceData.serverType + " success!");

          _this5.addServiceName = "";
          _this5.serviceData = resp;
        }).catch(function (err) {
          _this5.$message.error(err);
        });
      }
    },
    repairServiceVersion: function repairServiceVersion() {
      var _this6 = this;

      Object(deploy_api["L" /* RepairDployServiceVersions */])().then(function (resp) {
        _this6.$message.success("Repair service version success!");

        _this6.tableData = resp;
      }).catch(function (err) {
        _this6.$message.error(err);
      });
    },
    repairBaseJars: function repairBaseJars() {
      var _this7 = this;

      Object(deploy_api["J" /* RepairBaseJars */])().then(function (resp) {
        _this7.$message.success("Repair baseJar success!");
      }).catch(function (err) {
        _this7.$message.error(err);
      });
    },
    uuid: function uuid() {
      var s = [];
      var hexDigits = "0123456789abcdef";

      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }

      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010

      s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01

      var uuid = s.join("");
      return uuid;
    },
    cancelDelete: function cancelDelete() {
      this.deleteServiceVersionVisible = false;
      this.serviceVersionId = "";
      this.remindRemoveDeployServiceVersion = "";
    },
    openDeleteServiceVersionDialog: function openDeleteServiceVersionDialog(index, data) {
      this.deleteServiceVersionVisible = true;
      this.serviceVersionId = data["id"];
      this.remindRemoveDeployServiceVersion = "Confirm delete " + data.serverType + "'s serviceVersion";
    },
    sureDelete: function sureDelete() {
      var _this8 = this;

      this.deleteServiceVersionVisible = false;
      Object(deploy_api["I" /* RemoveServiceVersion */])(this.serviceVersionId).then(function (resp) {
        _this8.$message.success("Success!");

        _this8.tableData = resp;
        _this8.remindRemoveDeployServiceVersion = "";
        _this8.serviceVersionId = "";
      }).catch(function (err) {
        _this8.$message.error(err);
      });
      this.index = -1;
      this.serviceVersionId = "";
    }
  },
  data: function data() {
    return {
      serviceVersionDialogVisible: false,
      deleteServiceVersionVisible: false,
      baseJarsVisible: false,
      everyData: {},
      tableData: [],
      removeAServiceVersionCanche: [],
      addAServiceVersionCanche: [],
      serverType: "",
      type: "",
      serviceVersionId: "",
      serviceData: {},
      remindServerTypeService: "",
      remindBaseJars: "",
      addServiceName: "",
      remindRemoveDeployServiceVersion: "",
      basePro: {},
      reloadContainerDialog: false,
      remindReloadServerType: "",
      addbaseJars: false,
      fileList: [],
      uploadUrl: '/open/basejars',
      downloadJarUrl: '',
      jarinput: '',
      baseJarList: []
    };
  },
  created: function created() {
    var _this9 = this;

    Object(deploy_api["n" /* GetAllServiceVersions */])().then(function (resp) {
      _this9.$message.success("Updated!");

      _this9.tableData = resp;
      var uploadHost = '';

      if (true) {
        uploadHost = location.protocol + "//" + location.host;
      } else {}

      _this9.downloadJarUrl = uploadHost;
    }).catch(function (err) {
      _this9.$message.error(err);
    });
  },
  computed: {
    uploadUrlData: function uploadUrlData() {
      var uploadHost = '';

      if (true) {
        uploadHost = location.protocol + "//" + location.host;
      } else {}

      var param = uploadHost + this.uploadUrl;
      return param;
    }
  }
});
// CONCATENATED MODULE: ./src/views/hulk/deployserviceversion/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var hulk_deployserviceversionvue_type_script_lang_js_ = (deployserviceversionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./tools/vue-filename-injector/src/lib/loader.js!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./tools/vue-filename-injector/src/lib/injector.js??ref--0-2!./src/views/hulk/deployserviceversion/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector


























































































































































































































































































































































































































































/* harmony default export */ var deployserviceversionvue_type_custom_index_0_blockType_vue_filename_injector = (function (Component) {
  Component.options.__source = "src/views/hulk/deployserviceversion/index.vue"
});

// CONCATENATED MODULE: ./src/views/hulk/deployserviceversion/index.vue?vue&type=custom&index=0&blockType=vue-filename-injector
 /* harmony default export */ var hulk_deployserviceversionvue_type_custom_index_0_blockType_vue_filename_injector = (deployserviceversionvue_type_custom_index_0_blockType_vue_filename_injector); 
// CONCATENATED MODULE: ./src/views/hulk/deployserviceversion/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hulk_deployserviceversionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof hulk_deployserviceversionvue_type_custom_index_0_blockType_vue_filename_injector === 'function') hulk_deployserviceversionvue_type_custom_index_0_blockType_vue_filename_injector(component)

/* harmony default export */ var deployserviceversion = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=chunk-a589101a.ba6f9a25.js.map