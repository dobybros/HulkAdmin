<template>
    <el-container>
        <el-main>
            <div>
                <el-col :span="1" style="margin-bottom: 20px;">
                    <el-input style="width: 300px" v-model="searchInput" placeholder="input serverType or deployer" @change="search" suffix-icon="el-icon-search"></el-input>
                </el-col>
                <el-table
                        :data="tableData"
                        style="width: 100%;"
                        height="700px"
                        border>
                    <el-table-column
                            prop="id"
                            label="id"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="serverType"
                            label="serverType"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="deployer"
                            label="deployer">
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="reloadTime">
                    </el-table-column>
                    <el-table-column
                            width="400"
                            label="Operations">
                        <template slot-scope="scope">
                            <el-button
                                    @click.native.prevent="openServices(scope.row)"
                                    type="primary"
                                    size="medium">
                                {{$t("views.deploy.seeServices")}}
                            </el-button>
<!--                            <el-button-->
<!--                                    @click.native.prevent="openJars(scope.row)"-->
<!--                                    type="primary"-->
<!--                                    size="medium">-->
<!--                                {{$t("views.deploy.seeJars")}}-->
<!--                            </el-button>-->
                            <el-button
                                    @click.native.prevent="openServers(scope.row)"
                                    type="primary"
                                    size="medium">
                                {{$t("views.deploy.serversStatus")}}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-main>
        <el-dialog width="60%" :visible.sync="serviceDialogView" :title="this.remindService">
            <el-table
                    :data="services.serviceVersions"
                    border
                    height="700px">
                <el-table-column
                        prop="serviceName"
                        label="serviceName">
                </el-table-column>
                <el-table-column
                        prop="version"
                        label="version">
                </el-table-column>
            </el-table>
        </el-dialog>
<!--        <el-dialog width="60%" :visible.sync="jarDialogView" :title="this.remindJars">-->
<!--            <el-table-->
<!--                    :data="jars.baseJarVersions"-->
<!--                    border-->
<!--                    height="700px">-->
<!--                <el-table-column-->
<!--                        prop="jarName"-->
<!--                        label="jarName">-->
<!--                </el-table-column>-->
<!--                <el-table-column-->
<!--                        prop="version"-->
<!--                        label="version">-->
<!--                </el-table-column>-->
<!--            </el-table>-->
<!--        </el-dialog>-->
        <el-dialog width="60%" :visible.sync="serversDialogView" :title="this.remindServers">
            <el-table
                    :data="servers.deployServers"
                    border
                    height="700px">
                <el-table-column
                        prop="server"
                        label="serverName">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="status">
                </el-table-column>
            </el-table>
        </el-dialog>
    </el-container>
</template>
<script>
    import {GetDeployRecords, GetThisServiceVersions, GetThisBaseJars, GetDeployServers} from "@api/deploy.api";

    export default {
        data() {
            return {
                tableData: [],
                serviceDialogView: false,
                services: {},
                remindService: '',
                jarDialogView: false,
                jars: {},
                remindJars: '',
                serversDialogView: false,
                servers: {},
                remindServers: '',
                searchInput: '',
                serverTimer: ''
            }
        },
        methods: {
            search(){
                GetDeployRecords(this.searchInput)
                    .then(resp => {
                        this.$message.success("Updated!")
                        this.tableData = resp
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            openServices(data){
                GetThisServiceVersions(data.id)
                    .then(resp => {
                        this.services = resp
                        this.remindService = this.services.serverType + "'s deploy serviceVersions"
                        this.serviceDialogView = true
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            openServers(data){
                GetDeployServers(data.id)
                    .then(resp => {
                        this.servers = resp
                        this.remindServers = this.servers.serverType + "'s servers's status"
                        this.serversDialogView = true
                        if(this.serverTimer !== ''){
                            console.log("Close timer success")
                            window.clearInterval(this.serverTimer)
                        }
                        this.serverTimer = window.setInterval(this.refreshServers, 4000, data)
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            openJars(data){
                GetThisBaseJars(data.id)
                    .then(resp => {
                        this.jars = resp
                        this.remindJars = this.jars.serverType + "'s deploy jarsVersion"
                        this.jarDialogView = true
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            refreshServers(data){
                if(this.serversDialogView){
                    GetDeployServers(data.id)
                        .then(resp => {
                            this.servers = resp
                            this.$message.success("Refresh again!")
                        })
                        .catch(err => {
                            this.$message.error(err);
                        })
                }else {
                    if(this.serverTimer !== ''){
                        window.clearInterval(this.serverTimer)
                        this.serverTimer = ''
                    }
                }
            }
        },
        created() {
            GetDeployRecords(this.searchInput)
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