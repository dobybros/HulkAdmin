(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6a73f5de"],{"4bf2":function(e,t,n){},cf5c:function(e,t,n){"use strict";var a=n("4bf2");n.n(a).a},d8dd:function(e,t,n){"use strict";n.r(t);var a=n("cebc"),r=n("2f62"),c={data:function(){return{table:{showHeader:!1,border:!0}}},computed:Object(a.a)({},Object(r.e)("d2admin/theme",["list","activeName"])),methods:Object(a.a)({},Object(r.b)("d2admin/theme",["set"]),{handleSelectTheme:function(e){this.set(e)}})},o=(n("cf5c"),n("2877")),l=function(e){e.options.__source="src/views/demo/playground/store/theme/index.vue"},s=Object(o.a)(c,function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("d2-container",{staticClass:"page",attrs:{type:"card"}},[a("template",{slot:"header"},[n._v("主题")]),a("el-table",n._b({attrs:{data:n.list}},"el-table",n.table,!1),[a("el-table-column",{attrs:{prop:"name",align:"center",width:"260"}}),a("el-table-column",{attrs:{label:"预览",width:"120"},scopedSlots:n._u([{key:"default",fn:function(e){return a("div",{staticClass:"theme-preview",style:{backgroundImage:"url("+n.$baseUrl+e.row.preview+")"}})}}])}),a("el-table-column",{attrs:{prop:"address",align:"center"},scopedSlots:n._u([{key:"default",fn:function(t){return[n.activeName===t.row.name?a("el-button",{attrs:{type:"success",icon:"el-icon-check",round:""}},[n._v("已激活")]):a("el-button",{attrs:{round:""},on:{click:function(e){return n.handleSelectTheme(t.row.name)}}},[n._v("使用")])]}}])})],1),a("div",[a("p",[n._v("尝试激活一个不存在的主题（主题不存在 "),a("d2-icon",{attrs:{name:"arrow-right"}}),n._v(" 默认主题）")],1),a("el-button",{attrs:{type:"danger"},on:{click:function(e){return n.handleSelectTheme("err-theme")}}},[a("d2-icon",{staticClass:"d2-mr-10",attrs:{name:"hand-o-right"}}),n._v("\n      尝试激活主题 'err-theme'\n    ")],1)],1),a("template",{slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"}},[n._v("当前激活主题 "+n._s(n.activeName))])],1)],2)},[],!1,null,"7fefdf68",null);"function"==typeof l&&l(s);t.default=s.exports}}]);