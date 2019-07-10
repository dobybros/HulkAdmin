(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7c5d1940","chunk-2d0dae4a","chunk-2d0a3877"],{"0320":function(n,e){n.exports="在 `columns` 中设置 `sortable` 属性为 `true` ，即可实现以该列为基准的排序。可以通过 `options` 的 `defaultSort` 属性设置默认的排序列和排序顺序。代码如下：\n"},"6e16":function(n,e,t){"use strict";t.r(e),e.default="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          sortable: true\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      options: {\n        defaultSort: {\n          prop: 'date',\n          order: 'descending'\n        }\n      }\n    }\n  }\n}\n<\/script>"},b4f1:function(n,e,t){"use strict";t.r(e);var d=t("0320"),a=t.n(d),s=t("6e16"),o={data:function(){return{doc:a.a,code:s.default,columns:[{title:"日期",key:"date",sortable:!0},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],options:{defaultSort:{prop:"date",order:"descending"}}}}},r=t("2877"),c=function(n){n.options.__source="src/views/demo/d2-crud/demo11/index.vue"},l=Object(r.a)(o,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",[t("template",{slot:"header"},[n._v("排序")]),t("d2-crud",{attrs:{columns:n.columns,data:n.data,options:n.options}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:n.code}})],1),t("template",{slot:"footer"},[t("d2-link-btn",{attrs:{title:"文档",link:"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)},[],!1,null,null,null);"function"==typeof c&&c(l);e.default=l.exports}}]);