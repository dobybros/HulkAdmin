<template>
  <div>

    <d2-crud
            ref="d2Crud"
            :columns="columns"
            :data="data"
            :rowHandle="rowHandle"
            edit-title="我的修改"
            :edit-template="editTemplate"
            :form-options="formOptions"
            @dialog-open="handleDialogOpen"
            @row-edit="handleRowEdit"
            @dialog-cancel="handleDialogCancel">
      <el-button slot="header" style="margin-bottom: 5px" @click="editRowWithNewTemplate">使用自定义模板编辑第三行</el-button>
    </d2-crud>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        title: 'key',
                        key: 'key',
                        component: {
                            name: 'el-input',
                            size: 'small'
                        }
                    },
                    {
                        title: 'value',
                        key: 'vaue',
                        component: {
                            name: 'el-input',
                            size: 'small'
                        }
                    }
                ],
                data: [
                    {
                        key: 'ServiceName',
                        value : 'tcadmin',
                        forbidEdit: true,
                        showEditButton: true
                    },
                    {
                       key: 'time',
                        value : '10000',
                        forbidEdit: true,
                        showEditButton: true
                    },
                    {
                        key: 'time',
                        value : '10000',
                        forbidEdit: false,
                        showEditButton: true
                    },
                    {
                        key: 'time',
                        value : '10000',
                        forbidEdit: false,
                        showEditButton: false
                    },
                    {
                        key: 'time',
                        value : '10000',
                        forbidEdit: false,
                        showEditButton: true
                    }
                ],
                rowHandle: {
                    columnHeader: '编辑表格',
                    edit: {
                        icon: 'el-icon-edit',
                        text: '点我进行编辑',
                        size: 'small',
                        show (index, row) {
                            if (row.showEditButton) {
                                return true
                            }
                            return false
                        },
                        disabled (index, row) {
                            if (row.forbidEdit) {
                                return true
                            }
                            return false
                        }
                    }
                },
                editTemplate: {
                    date: {
                        title: '日期',
                        value: ''
                    },
                    name: {
                        title: '姓名',
                        value: ''
                    },
                    address: {
                        title: '地址',
                        value: ''
                    },
                    forbidEdit: {
                        title: '禁用按钮',
                        value: false,
                        component: {
                            show: false
                        }
                    },
                    showEditButton: {
                        title: '显示按钮',
                        value: true,
                        component: {
                            show: false
                        }
                    }
                },
                formOptions: {
                    labelWidth: '80px',
                    labelPosition: 'left',
                    saveLoading: false
                }
            }
        },
        methods: {
            handleDialogOpen ({ mode, row }) {
                this.$message({
                    message: '打开模态框，模式为：' + mode,
                    type: 'success'
                })
            },
            editRowWithNewTemplate () {
                this.$refs.d2Crud.showDialog({
                    mode: "edit",
                    rowIndex: 2,
                    template: {
                        date: {
                            title: '日期',
                            value: ''
                        },
                        name: {
                            title: '姓名',
                            value: ''
                        }
                    }
                })
            },
            handleRowEdit ({ index, row }, done) {
                this.formOptions.saveLoading = true
                setTimeout(() => {
                    console.log(index)
                    console.log(row)
                    this.$message({
                        message: '编辑成功',
                        type: 'success'
                    })

                    // done可以传入一个对象来修改提交的某个字段
                    done({
                        address: '我是通过done事件传入的数据！'
                    })
                    this.formOptions.saveLoading = false
                }, 300)
            },
            handleDialogCancel (done) {
                this.$message({
                    message: '取消编辑',
                    type: 'warning'
                })
                done()
            }
        }
    }
</script>