(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-34ff6c87","chunk-1011ab15"],{"28ba":function(e,t,r){},"2cdc":function(e,t,r){"use strict";r.r(t);r("7f7f");var s=r("cfab");t.default={props:{id:{type:String,required:!0}},data:function(){return{form:{name:"",address:""}}},methods:{resetFormData:function(){this.form={name:"",address:""}},getFormData:function(e){var n=this;return new Promise(function(a,t){n.resetFormData(),Object(s.a)(e).then(function(e){var t=e.name,r=e.address;n.form={name:t,address:r},n.$message.success("getFormData"),a()}).catch(function(e){t(e)})})},handleSubmit:function(){this.$notify({title:"Submit",message:"提交了表单",type:"info"})}}}},"33a8":function(e,t,r){"use strict";var a=r("28ba");r.n(a).a},cfab:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return s});var a=r("9bd2");function n(){return Object(a.a)({url:"/demo/business/issues/142/fetch",method:"get"})}function s(e){return Object(a.a)({url:"/demo/business/issues/142/detail",method:"get",params:{id:e}})}},e2b9:function(e,t,r){"use strict";r.r(t);var a={mixins:[r("2cdc").default],beforeRouteEnter:function(e,t,r){var a=e.params.id;r(a?function(e){e.resetFormData(),e.getFormData(a)}:new Error("未指定ID"))},beforeRouteUpdate:function(e,t,r){var a=e.params.id;a?(this.resetFormData(),this.getFormData(a),r()):r(new Error("未指定ID"))}},n=(r("33a8"),r("2877")),s=function(e){e.options.__source="src/views/demo/business/issues/142/edit.vue"},o=Object(n.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("d2-container",{staticClass:"page",attrs:{type:"card"}},[r("el-form",{ref:"form",staticClass:"page--form",attrs:{model:t.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"地址"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("修改")])],1)],1)],1)},[],!1,null,null,null);"function"==typeof s&&s(o);t.default=o.exports}}]);