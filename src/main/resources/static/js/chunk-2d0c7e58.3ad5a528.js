(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0c7e58"],{5326:function(e,t,o){"use strict";o.r(t);var r=o("c276"),n={methods:{set:function(e,t){var o=0<arguments.length&&void 0!==e?e:"default-name",n=1<arguments.length&&void 0!==t?t:"default-value";r.a.cookies.set(o,n),this.$message.info("设置数据 ".concat(o," = ").concat(n))},setExpires:function(e,t,o){var n=0<arguments.length&&void 0!==e?e:"default-name",s=1<arguments.length&&void 0!==t?t:"default-value",i=2<arguments.length&&void 0!==o?o:1;r.a.cookies.set(n,s,{expires:i}),this.$message.info("设置数据 ".concat(n," = ").concat(s," 有效期 ").concat(i," 天"))},get:function(e){var t=0<arguments.length&&void 0!==e?e:"default-name",o=r.a.cookies.get(t);this.$message.info("获取数据 ".concat(t," = ").concat(o))},getAll:function(){r.a.cookies.getAll();this.$message.info("结果已经打印到控制台")},remove:function(e){var t=0<arguments.length&&void 0!==e?e:"default-name";r.a.cookies.remove(t),this.$message.info("删除数据 ".concat(t))}}},s=o("2877"),i=function(e){e.options.__source="src/views/demo/plugins/js-cookie/index.vue"},c=Object(s.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("d2-container",[o("template",{slot:"header"},[o("div",{staticClass:"d2-mb"},[t._v("Cookie 读写")]),o("el-alert",{attrs:{title:"建议",type:"warning",description:"建议使用 util 内的 cookies 对象，这样会在存储和读取时统一增加前缀，方便对 cookie 统一管理","show-icon":""}})],1),o("p",{staticClass:"d2-mt-0"},[t._v("基本读写删")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.set("demo-user-name","demo-user")}}},[t._v("set('demo-user-name', 'normalValue')")]),o("el-button",{attrs:{type:"info"},on:{click:function(e){return t.get("demo-user-name")}}},[t._v("get('demo-user-name')")]),o("el-button",{attrs:{type:"error"},on:{click:function(e){return t.remove("demo-user-name")}}},[t._v("remove('demo-user-name')")]),o("p",[t._v("设置有效期")]),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.setExpires("demo-user-pwd","123456789",1)}}},[t._v("设置 'demo-user-pwd' 有效期为一天")]),o("el-button",{attrs:{type:"info"},on:{click:function(e){return t.get("demo-user-pwd")}}},[t._v("get('demo-user-pwd')")]),o("el-button",{attrs:{type:"error"},on:{click:function(e){return t.remove("demo-user-pwd")}}},[t._v("remove('demo-user-pwd')")]),o("p",[t._v("获取所有可以获得的数据")]),o("el-button",{attrs:{type:"info"},on:{click:t.getAll}},[t._v("getAll")])],2)},[],!1,null,null,null);"function"==typeof i&&i(c);t.default=c.exports}}]);