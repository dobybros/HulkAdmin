<template>
    <el-container>
        <el-main>
            <div>
                <el-table
                        :data="tableData"
                        style="width: 100%;"
                        row-key="serviceName"
                        height="700px"
                        border>
                    <el-table-column
                            prop="id"
                            label="id"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="description"
                            label="description"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="type">
                    </el-table-column>
                    <el-table-column
                            prop="lastExecuteTime"
                            label="lastExecuteTime">
                    </el-table-column>
                    <el-table-column
                            prop="executeResult"
                            label="executeResult">
                    </el-table-column>
                    <el-table-column
                            prop="createTime"
                            label="createTime">
                    </el-table-column>
                    <el-table-column
                            label="Operations">
                        <template slot-scope="scope">
                            <el-button
                                    @click.native.prevent="dialogRepair(scope.row)"
                                    type="primary"
                                    size="medium">
                                {{$t("views.deploy.repair")}}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-main>
        <el-dialog
                :title="$t('views.deploy.reminder')"
                :visible.sync="sureRepair"
                width="30%">
            <span>{{this.remindRepair}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelRepair">{{$t("views.deploy.cancel")}}</el-button>
                <el-button type="primary" @click="repair">{{$t("views.deploy.sure")}}</el-button>
             </span>
        </el-dialog>
    </el-container>
</template>
<script>
    import {GetAllGCRepairs, GCRepair} from "@api/deploy.api";

    export default {
        data() {
            return {
                tableData: [],
                sureRepair: false,
                remindRepair: "",
                everyData: {}
            }
        },
        methods: {
            dialogRepair(data){
                this.sureRepair = true
                this.remindRepair = 'confirm repair ' + data.id
                this.everyData = data
            },
            cancelRepair(){
                this.sureRepair = false
                this.remindRepair = ""
                this.everyData = {}
            },
            repair(){
                GCRepair(this.everyData.id)
                    .then(resp => {
                        location.reload()
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            }
        },
        created() {
            GetAllGCRepairs()
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
<style scoped>
    /*.dialog-footer {*/
    /*display: flex;*/
    /*}*/

    .uploader {
        flex: 1;
        display: flex;
        align-items: center;
    }

    .cancel-delete {
        flex: 0 0 180px;
        align-items: center;
    }

    .upload-demo {
        display: flex;
        align-items: center;
    }
</style>