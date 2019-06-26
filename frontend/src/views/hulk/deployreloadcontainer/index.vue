<template>
    <el-container>
        <el-main>
            <div>
                <el-table
                        :data="tableData"
                        style="width: 90%;"
                        row-key="serviceName"
                        height="550"
                        border>
                    <el-table-column
                            prop="serverType"
                            label="serverType"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="ip"
                            label="ip"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="dockerName"
                            label="dockerName">
                    </el-table-column>
                    <el-table-column
                            prop="server"
                            label="server">
                    </el-table-column>
                    <el-table-column
                            label="Operations">
                        <template slot-scope="scope">
                            <el-button
                                    @click.native.prevent="reload(scope.row)"
                                    type="primary"
                                    size="medium">
                                Reload
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-main>

        <el-dialog
                title="Reminder"
                :visible.sync="deleteGroovyDialogVisible"
                width="30%">
            <span>Confirm delete service <span style="color: #000fff">{{this.deleteServiceName}}</span>?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelDelete">Cancel</el-button>
                <el-button type="primary" @click="sureDelete">Sure</el-button>
             </span>
        </el-dialog>

    </el-container>
</template>
<script>
    import {GetAllContainer,ReloadContainer} from "@api/deploy.api";
    export default {
        data() {
            return {
                tableData: []
            }
        },
        methods:{
            reload(data) {
                ReloadContainer(data)
                    .then(resp => {
                        this.$message.success("Success!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            }
        },
        created() {
            GetAllContainer()
                .then(resp => {
                    this.$message.success("Updated!")
                    this.tableData = resp
                })
                .catch(err => {
                    this.$message.error(err);
                })
        }
    }
</script>