(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6b272632"],{"54d2":function(t,e,i){"use strict";i.r(e);i("456d"),i("7f7f"),i("ac6a");var l=i("9bd2");var a=[{value:"ios_apn"},{value:"android_fcm"},{value:"android_mi"}],n={data:function(){return{resPath:Object({NODE_ENV:"production",VUE_APP_API:"/",VUE_APP_BUILD_TIME:"2019-7-1 15:27:28",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"zh-chs",VUE_APP_REPO:"https://github.com/d2-projects/d2-admin",VUE_APP_RESOURCE_PATH:"",VUE_APP_TITLE:"D2Admin",VUE_APP_VERSION:"1.7.0",BASE_URL:"/"}).VUE_APP_RESOURCE_HOST+"rest/resource/upload",filesMap:{},editingApp:{appId:"",platforms:[]},apps:[],dialogVisible:!1}},created:function(){var i=this;Object(l.a)({url:"/noti/apps",method:"get"}).then(function(t){i.$message.success("Updated!");var e=[];t.forEach(function(t){e.push(function(t){var i={};return i.appId=t.appId,i.platforms=[],t.platforms.forEach(function(t){var e={};e.file=t.fileFullName,e.type=t.platform,e.bundle=t.namespace,i.platforms.push(e)}),i}(t))}),i.apps=e}).catch(function(t){i.$message.error(t)})},methods:{newApp:function(){this.editingApp={appId:"",platforms:[]}},showDetail:function(t){this.editingApp=t,this.showModal()},checkValidity:function(){var a=this,n={},t=this.editingApp;if(!t.appId)throw new Error("App Id can not be null");if(!t.platforms||!t.platforms.length)throw new Error("One platform at least");return n.appId=t.appId,n.platforms=[],t.platforms.forEach(function(t){var e={};if(!t.type)throw new Error("Platform type is required");if(!t.file)throw new Error("Keychain file is required");var i=a.filesMap[t.file];if(!i)throw new Error("No updated keychain is found");e.namespace=t.bundle,e.platform=t.type,e.fileFullName=t.file;var l=Object({NODE_ENV:"production",VUE_APP_API:"/",VUE_APP_BUILD_TIME:"2019-7-1 15:27:28",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_I18N_LOCALE:"zh-chs",VUE_APP_REPO:"https://github.com/d2-projects/d2-admin",VUE_APP_RESOURCE_PATH:"",VUE_APP_TITLE:"D2Admin",VUE_APP_VERSION:"1.7.0",BASE_URL:"/"}).VUE_APP_RESOURCE_HOST+"rest/resource/"+a.filesMap[t.file];e.keychainUri=l,e.keychainRid=i,n.platforms.push(e)}),n},showModal:function(){this.dialogVisible=!0},fileChanged:function(t,e){this.$delete(this.filesMap,t.name)},uploadedFile:function(t,e,i){this.$set(this.filesMap,e.name,t.data.file.rid)},uploadedFileFilter:function(e,t){var i=Object.keys(this.filesMap).map(function(t){return{value:t}});t(e?i.filter(function(t){return-1!==t.value.indexOf(e)}):i)},suggestions:function(e,t){t(e?a.filter(function(t){return-1!==t.value.indexOf(e)}):a)},addPlatform:function(){this.editingApp.platforms.push({bundle:"",type:"",file:null,id:(Math.random()+"").substring(2)})},removePlatform:function(t){this.editingApp.platforms.splice(t,1)},saveApp:function(){var e=this;try{(function(t){return Object(l.a)({url:"/noti/app",method:"post",data:t})})(this.checkValidity()).then(function(){e.dialogVisible=!1}).catch(function(t){e.$message.error(t)})}catch(t){this.$message.error(t.message)}}}},s=(i("b13f"),i("2877")),o=function(t){t.options.__source="src/views/hulk/pushnotification/index.vue"},r=Object(s.a)(n,function(){var l=this,t=l.$createElement,a=l._self._c||t;return a("el-container",[a("el-header",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){l.newApp(),l.showModal()}}},[a("i",{staticClass:"el-icon-plus el-icon--left"}),l._v("\n      "+l._s(l.$t("views.pushnoti.new-app"))+"\n    ")])],1),a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:l.apps}},[a("el-table-column",{attrs:{prop:"appId",label:l.$t("views.pushnoti.title.app-id"),width:"180"}}),a("el-table-column",{attrs:{type:"expand"},scopedSlots:l._u([{key:"default",fn:function(t){return[a("el-table",{attrs:{data:t.row.platforms}},[a("el-table-column",{attrs:{prop:"type",label:l.$t("views.pushnoti.title.platform")}}),a("el-table-column",{attrs:{prop:"bundle",label:l.$t("views.pushnoti.title.bundle-id")}}),a("el-table-column",{attrs:{prop:"file",label:l.$t("views.pushnoti.title.keychain")}})],1)]}}])}),a("el-table-column",{attrs:{label:l.$t("views.pushnoti.title.platforms")},scopedSlots:l._u([{key:"default",fn:function(t){return[l._v("\n          "+l._s(t.row.platforms.length)+"\n        ")]}}])}),a("el-table-column",{attrs:{width:"180",label:l.$t("views.pushnoti.title.actions")},scopedSlots:l._u([{key:"default",fn:function(e){return[a("el-button",{on:{click:function(t){return l.showDetail(e.row)}}},[l._v(l._s(l.$t("views.pushnoti.detail")))])]}}])})],1)],1),a("el-dialog",{attrs:{visible:l.dialogVisible},on:{"update:visible":function(t){l.dialogVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-upload",{attrs:{action:l.resPath,drag:"","on-remove":l.fileChanged,"on-success":l.uploadedFile,multiple:""}},[a("i",{staticClass:"el-icon-upload"}),a("div",[l._v(l._s(l.$t("views.pushnoti.uploadFileHere")))])])],1),a("el-row",[a("el-col",{staticClass:"model-title"},[l._v(l._s(l.$t("views.pushnoti.title.app-id")))]),a("el-col",[a("el-input",{attrs:{clearable:""},model:{value:l.editingApp.appId,callback:function(t){l.$set(l.editingApp,"appId",t)},expression:"editingApp.appId"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"space-between"}},[a("el-col",{staticClass:"model-title",attrs:{span:6}},[l._v(l._s(l.$t("views.pushnoti.title.platforms")))])],1),l._l(l.editingApp.platforms,function(e,i){return a("el-card",{key:e.id,staticStyle:{"margin-top":"5px"}},[a("el-row",[a("el-col",{attrs:{span:6}},[l._v(l._s(l.$t("views.pushnoti.title.platform")))]),a("el-col",{attrs:{span:18}},[a("el-autocomplete",{attrs:{"fetch-suggestions":l.suggestions,clearable:""},model:{value:e.type,callback:function(t){l.$set(e,"type",t)},expression:"platform.type"}})],1)],1),a("el-row",[a("el-col",{staticClass:"model-title",attrs:{span:6}},[l._v(l._s(l.$t("views.pushnoti.title.bundle-id")))]),a("el-col",{attrs:{span:18}},[a("el-input",{attrs:{clearable:""},model:{value:e.bundle,callback:function(t){l.$set(e,"bundle",t)},expression:"platform.bundle"}})],1)],1),a("el-row",[a("el-col",{attrs:{span:6}},[l._v(l._s(l.$t("views.pushnoti.title.keychain")))]),a("el-col",{attrs:{span:18}},[a("el-autocomplete",{attrs:{"fetch-suggestions":l.uploadedFileFilter,clearable:""},model:{value:e.file,callback:function(t){l.$set(e,"file",t)},expression:"platform.file"}})],1)],1),a("el-row",[a("el-button",{staticStyle:{width:"100%"},attrs:{size:"mini",type:"danger",round:"",icon:"el-icon-delete"},on:{click:function(t){return l.removePlatform(i)}}})],1)],1)}),a("el-row",{staticClass:"add-btn"},[a("el-button",{staticStyle:{"margin-top":"10px"},attrs:{icon:"el-icon-plus",circle:""},on:{click:l.addPlatform}})],1),a("el-row",[a("el-button",{staticStyle:{width:"100%","margin-top":"15px"},attrs:{type:"primary",round:""},on:{click:l.saveApp}},[l._v("\n        "+l._s(l.$t("views.pushnoti.title.save"))+"\n      ")])],1)],2)],1)},[],!1,null,"1380a438",null);"function"==typeof o&&o(r);e.default=r.exports},"95c4":function(t,e,i){},b13f:function(t,e,i){"use strict";var l=i("95c4");i.n(l).a}}]);