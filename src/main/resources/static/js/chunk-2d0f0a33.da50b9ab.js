(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0f0a33"],{

/***/ "9ce8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :loading=\"loading\"\n      :pagination=\"pagination\"\n      @pagination-current-change=\"paginationCurrentChange\"/>\n  </div>\n</template>\n\n<script>\nimport { BusinessTable1List } from '@api/demo.business.table.1'\n\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '\u5361\u5BC6',\n          key: 'key',\n          width: 320\n        },\n        {\n          title: '\u9762\u503C',\n          key: 'value'\n        },\n        {\n          title: '\u7BA1\u7406\u5458',\n          key: 'admin'\n        },\n        {\n          title: '\u521B\u5EFA\u65F6\u95F4',\n          key: 'dateTimeCreat'\n        },\n        {\n          title: '\u4F7F\u7528\u65F6\u95F4',\n          key: 'dateTimeUse'\n        }\n      ],\n      data: [],\n      loading: false,\n      pagination: {\n        currentPage: 1,\n        pageSize: 5,\n        total: 0\n      }\n    }\n  },\n  mounted () {\n    this.fetchData()\n  },\n  methods: {\n    paginationCurrentChange (currentPage) {\n      this.pagination.currentPage = currentPage\n      this.fetchData()\n    },\n    fetchData () {\n      this.loading = true\n      BusinessTable1List({\n        ...this.pagination\n      }).then(res => {\n        this.data = res.list\n        this.pagination.total = res.page.total\n        this.loading = false\n      }).catch(err => {\n        console.log('err', err)\n        this.loading = false\n      })\n    }\n  }\n}\n</script>");

/***/ })

}]);
//# sourceMappingURL=chunk-2d0f0a33.da50b9ab.js.map