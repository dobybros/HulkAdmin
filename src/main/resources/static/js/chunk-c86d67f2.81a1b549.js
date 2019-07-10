(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c86d67f2","chunk-2d0f0a33","chunk-2d0c73d2"],{5089:function(n,t){n.exports="在 `D2 Crud` 组件中传入 `pagination` 对象，即可开启分页。代码如下：\n"},"9ce8":function(n,t,a){"use strict";a.r(t),t.default="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :loading=\"loading\"\n      :pagination=\"pagination\"\n      @pagination-current-change=\"paginationCurrentChange\"/>\n  </div>\n</template>\n\n<script>\nimport { BusinessTable1List } from '@api/demo.business.table.1'\n\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '卡密',\n          key: 'key',\n          width: 320\n        },\n        {\n          title: '面值',\n          key: 'value'\n        },\n        {\n          title: '管理员',\n          key: 'admin'\n        },\n        {\n          title: '创建时间',\n          key: 'dateTimeCreat'\n        },\n        {\n          title: '使用时间',\n          key: 'dateTimeUse'\n        }\n      ],\n      data: [],\n      loading: false,\n      pagination: {\n        currentPage: 1,\n        pageSize: 5,\n        total: 0\n      }\n    }\n  },\n  mounted () {\n    this.fetchData()\n  },\n  methods: {\n    paginationCurrentChange (currentPage) {\n      this.pagination.currentPage = currentPage\n      this.fetchData()\n    },\n    fetchData () {\n      this.loading = true\n      BusinessTable1List({\n        ...this.pagination\n      }).then(res => {\n        this.data = res.list\n        this.pagination.total = res.page.total\n        this.loading = false\n      }).catch(err => {\n        console.log('err', err)\n        this.loading = false\n      })\n    }\n  }\n}\n<\/script>"},ef69:function(n,t,a){"use strict";a.d(t,"a",function(){return i});var e=a("9bd2");function i(n){return Object(e.a)({url:"/demo/business/table/1/fetch",method:"get",params:n})}},f083:function(n,t,a){"use strict";a.r(t);var e=a("cebc"),i=a("5089"),o=a.n(i),r=a("9ce8"),s=a("ef69"),c={data:function(){return{doc:o.a,code:r.default,columns:[{title:"卡密",key:"key",width:320},{title:"面值",key:"value"},{title:"管理员",key:"admin"},{title:"创建时间",key:"dateTimeCreat"},{title:"使用时间",key:"dateTimeUse"}],data:[],loading:!1,pagination:{currentPage:1,pageSize:5,total:0}}},mounted:function(){this.fetchData()},methods:{paginationCurrentChange:function(n){this.pagination.currentPage=n,this.fetchData()},fetchData:function(){var t=this;this.loading=!0,Object(s.a)(Object(e.a)({},this.pagination)).then(function(n){t.data=n.list,t.pagination.total=n.page.total,t.loading=!1}).catch(function(n){t.loading=!1})}}},d=a("2877"),l=function(n){n.options.__source="src/views/demo/d2-crud/demo29/index.vue"},u=Object(d.a)(c,function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("d2-container",[a("template",{slot:"header"},[n._v("分页")]),a("d2-crud",{attrs:{columns:n.columns,data:n.data,loading:n.loading,pagination:n.pagination},on:{"pagination-current-change":n.paginationCurrentChange}}),a("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[a("d2-markdown",{attrs:{source:n.doc}})],1),a("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[a("d2-highlight",{attrs:{code:n.code}})],1),a("template",{slot:"footer"},[a("d2-link-btn",{attrs:{title:"文档",link:"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)},[],!1,null,null,null);"function"==typeof l&&l(u);t.default=u.exports}}]);