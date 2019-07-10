(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-34dcabb0","chunk-2d225890","chunk-2d0d9fe1"],{"0760":function(n,t,o){"use strict";o.r(t);var e=o("6a66"),a=o.n(e),u=o("e58b"),d={data:function(){return{doc:a.a,code:u.default,columns:[{title:"ID",key:"id"},{title:"姓名",key:"name"},{title:"数值 1",key:"amount1"},{title:"数值 2",key:"amount2"},{title:"数值 3",key:"amount3"}],data:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}],options:{border:!0,spanMethod:function(n){n.row,n.column;var t=n.rowIndex,o=n.columnIndex;if(t%2==0){if(0===o)return[1,2];if(1===o)return[0,0]}}}}}},m=o("2877"),i=function(n){n.options.__source="src/views/demo/d2-crud/demo14/index.vue"},r=Object(m.a)(d,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("d2-container",[o("template",{slot:"header"},[n._v("合并行")]),o("d2-crud",{attrs:{columns:n.columns,data:n.data,options:n.options}}),o("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[o("d2-markdown",{attrs:{source:n.doc}})],1),o("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[o("d2-highlight",{attrs:{code:n.code}})],1),o("template",{slot:"footer"},[o("d2-link-btn",{attrs:{title:"文档",link:"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)},[],!1,null,null,null);"function"==typeof i&&i(r);t.default=r.exports},"6a66":function(n,t){n.exports="通过给 `options` 传入 `spanMethod` 方法可以实现合并行，方法的参数是一个对象，里面包含当前行 `row` 、当前列 `column` 、当前行号 `rowIndex` 、当前列号 `columnIndex` 四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表 `rowspan` ，第二个元素代表 `colspan` 。代码如下：\n"},e58b:function(n,t,o){"use strict";o.r(t),t.default="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: 'ID',\n          key: 'id'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '数值 1',\n          key: 'amount1'\n        },\n        {\n          title: '数值 2',\n          key: 'amount2'\n        },\n        {\n          title: '数值 3',\n          key: 'amount3'\n        }\n      ],\n      data: [\n        {\n          id: '12987122',\n          name: '王小虎',\n          amount1: '234',\n          amount2: '3.2',\n          amount3: 10\n        },\n        {\n          id: '12987123',\n          name: '王小虎',\n          amount1: '165',\n          amount2: '4.43',\n          amount3: 12\n        },\n        {\n          id: '12987124',\n          name: '王小虎',\n          amount1: '324',\n          amount2: '1.9',\n          amount3: 9\n        },\n        {\n          id: '12987125',\n          name: '王小虎',\n          amount1: '621',\n          amount2: '2.2',\n          amount3: 17\n        },\n        {\n          id: '12987126',\n          name: '王小虎',\n          amount1: '539',\n          amount2: '4.1',\n          amount3: 15\n        }\n      ],\n      options: {\n        border: true,\n        spanMethod ({ row, column, rowIndex, columnIndex }) {\n          if (rowIndex % 2 === 0) {\n            if (columnIndex === 0) {\n              return [1, 2]\n            } else if (columnIndex === 1) {\n              return [0, 0]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n<\/script>"}}]);