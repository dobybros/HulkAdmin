(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0f0c8c"],{"9e9c":function(t,e,n){"use strict";n.r(e);var a=n("c276"),o={data:function(){return{dbData:""}},mounted:function(){this.load()},methods:{load:function(){this.dbData=JSON.stringify(a.a.db.value(),null,2)}}},l=n("2877"),c=function(t){t.options.__source="src/views/demo/playground/db/all/index.vue"},i=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",[n("template",{slot:"header"},[n("el-alert",{attrs:{type:"success",closable:!1,title:"这个页面展示的是全部数据的存储结构，包括系统区域和存储区域，涵盖所有用户，也就是整个 D2Admin 的数据存储结构"}})],1),n("d2-highlight",{attrs:{code:t.dbData}}),n("template",{slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:t.load}},[t._v("\n      重新获取本地数据\n    ")])],1)],2)},[],!1,null,null,null);"function"==typeof c&&c(i);e.default=i.exports}}]);