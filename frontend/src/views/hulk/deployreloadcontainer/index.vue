<template>
    <el-container>
        <el-main>
            <div>
                <el-table
                        :data="tableData"
                        style="width: 100%;"
                        row-key="serviceName"
                        height="700"
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
                            prop="time"
                            label="reloadTime">
                    </el-table-column>
                    <el-table-column
                            label="Operations">
                        <template slot-scope="scope">
                            <el-button
                                    @click.native.prevent="dialogReload(scope.row)"
                                    type="primary"
                                    size="medium">
                                {{$t("views.deploy.reload")}}
                            </el-button>
                            <el-button
                                    @click.native.prevent="dialogDelete(scope.row)"
                                    type="danger"
                                    size="medium">
                                Delete In Database
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-main>
        <el-dialog
                :title="$t('views.deploy.reminder')"
                :visible.sync="deleteSureReloadContainer"
                width="30%">
            <span>{{this.remindNginx}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelReload">{{$t("views.deploy.cancel")}}</el-button>
                <el-button type="primary" @click="reload">{{$t("views.deploy.sure")}}</el-button>
             </span>
        </el-dialog>
        <el-dialog
                :title="$t('views.deploy.reminder')"
                :visible.sync="deleteSureDeleteContainer"
                width="30%">
            <span>{{this.reminddelete}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelDelete">{{$t("views.deploy.cancel")}}</el-button>
                <el-button type="danger" @click="deleteContainer">{{$t("views.deploy.delete")}}</el-button>
             </span>
        </el-dialog>
    </el-container>
</template>
<script>
    import {GetAllContainer,ReloadContainer,DeleteContainer} from "@api/deploy.api";
    export default {
        data() {
            return {
                tableData: [],
                deleteSureReloadContainer: false,
                deleteSureDeleteContainer: false,
                remindNginx: '',
                data: {},
                deleteData: {},
                reminddelete: ''
            }
        },
        methods:{
            reload() {
                ReloadContainer(this.data)
                    .then(resp => {
                        this.$message.success("Reload Success!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
                this.deleteSureReloadContainer = false
                this.data = {}
                this.remindNginx = ''
            },
            dialogReload(data){
                this.remindNginx = 'Confirm reload container? serverType: ' + data.serverType + '  , dockerName: ' + data.dockerName,
                this.deleteSureReloadContainer = true
                this.data = data
            },
            cancelReload(){
                this.deleteSureReloadContainer = false
                this.data = {}
                this.remindNginx = ''
            },
            deleteContainer(){
                DeleteContainer(this.deleteData.server)
                    .then(resp => {
                        for (let i = 0; i < this.tableData.length; i++) {
                            let theData = this.tableData[i]
                            if(theData["server"] === this.deleteData.server){
                                this.tableData.splice(i, 1)
                            }
                        }
                        this.deleteSureDeleteContainer = false
                        this.deleteData = {}
                        this.reminddelete = ''
                        this.$message.success("Delete container Success!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            dialogDelete(data){
                this.reminddelete = 'Confirm delete container? serverType: ' + data.serverType + '  , dockerName: ' + data.dockerName,
                this.deleteData = data
                this.deleteSureDeleteContainer = true
            },
            cancelDelete(){
                this.deleteSureDeleteContainer = false
                this.deleteData = {}
                this.reminddelete = ''
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