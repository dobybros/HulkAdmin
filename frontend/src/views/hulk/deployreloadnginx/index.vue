<template>
    <el-container>
        <el-main style="    overflow-y: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;">
            <el-row>
                <el-col :span="15">
                    <div class="grid-content bg-purple-dark font-style" style="">{{$t("views.deploy.server")}}</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <span class="font-style">{{$t("views.deploy.serviceName")}}</span>
                </el-col>
                <el-col :span="8">
                    <span class="font-style">{{$t("views.deploy.version")}}</span>
                </el-col>
            </el-row>
            <el-row v-for="server in this.servers">
                <el-col :span="12">
                    <el-input v-model="server.serviceName" clearable placeholder="Input service name"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-select v-model="server.currentVersion" @click.native="getServerVersions(server.serviceName)"
                               placeholder="Select version">
                        <el-option
                                v-for="version in server.versions"
                                :key="version"
                                :label="version"
                                :value="version">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row style="margin: 15px 0;">
                <el-col>
                    <el-button type="primary" icon="el-icon-plus" round @click="addServer"></el-button>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="15">
                    <div class="grid-content bg-purple-dark font-style" style="">{{$t("views.deploy.web")}}</div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <span class="font-style">{{$t("views.deploy.webName")}}</span>
                </el-col>
                <el-col :span="6">
                    <span class="font-style">{{$t("views.deploy.projectName")}}</span>
                </el-col>
                <el-col :span="6">
                    <span class="font-style">{{$t("views.deploy.version")}}</span>
                </el-col>
            </el-row>
            <el-row v-for="web in this.webs">
                <el-col :span="6">
                    <el-input v-model="web.webName" clearable clearable placeholder="Input web name"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="web.projectName" clearable clearable placeholder="Input project name"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-select v-model="web.currentVersion" @click.native="getWebVersions(web.webName, web.projectName)"
                               placeholder="Select version">
                        <el-option
                                v-for="version in web.versions"
                                :key="version"
                                :label="version"
                                :value="version">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col>
                    <el-button type="primary" icon="el-icon-plus" round @click="addWeb"
                               style="margin: 15px 0px;"></el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="15">
                    <div class="grid-content bg-purple-dark font-style" style="">{{$t("views.deploy.nginx")}}</div>
                </el-col>
            </el-row>
            <el-row v-for="nginx in this.nginx" style="margin-top: 20px;">
                <el-col :span="12" style="margin-right: 50px;">
                    <el-input v-model="nginx.ip" disabled="true"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-button type="primary" round @click="dialogReload(nginx.ip)">{{$t("views.deploy.reloadNginx")}}
                    </el-button>
                </el-col>
            </el-row>

        </el-main>
        <el-dialog
                :title="$t('views.deploy.reminder')"
                :visible.sync="deleteSureReloadNginxVisible"
                width="30%">
            <span>{{this.remindNginx}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelReload">{{$t("views.deploy.cancel")}}</el-button>
                <el-button type="primary" @click="reload">{{$t("views.deploy.sure")}}</el-button>
             </span>
        </el-dialog>
    </el-container>
</template>
<script>
    import {GetAllServerWebs, ReloadNginx, GetServerVersions, GetWebVersions} from "@api/deploy.api";

    export default {
        data() {
            return {
                servers: [],
                webs: [],
                nginx: [],
                nginxIp: '',
                deleteSureReloadNginxVisible: false,
                remindNginx: ''
            }
        },
        methods: {
            reload() {
                this.deleteSureReloadNginxVisible = false
                this.remindNginx = ''
                ReloadNginx({"servers": this.servers, "webs": this.webs, "ip": this.nginxIp})
                    .then(resp => {
                        this.$message.success("Success reload nginx " + this.nginxIp + "!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            dialogReload(ip) {
                this.nginxIp = ip,
                    this.remindNginx = 'Confirm reload nginx ' + ip + '?',
                    this.deleteSureReloadNginxVisible = true
            },
            cancelReload() {
                this.deleteSureReloadNginxVisible = false,
                    this.remindNginx = ''
                this.nginxIp = ''
            },
            addServer() {
                if (this.servers === undefined) {
                    this.servers = []
                }
                this.servers.push({"currentVersion": "", "serviceName": "", "versions": []})
            },
            addWeb() {
                if (this.webs === undefined) {
                    this.webs = []
                }
                this.webs.push({"currentVersion": "", "webName": "", "versions": []})
            },
            getServerVersions(serviceName) {
                if (serviceName === undefined || serviceName === '') {
                    this.$message.error('Please input service name');
                } else {
                    GetServerVersions(serviceName)
                        .then(resp => {
                            for (let i = 0; i < this.servers.length; i++) {
                                if (this.servers[i]["serviceName"] === serviceName) {
                                    this.servers[i]["versions"] = resp
                                }
                            }
                        })
                        .catch(err => {
                            this.$message.error(err);
                        })
                }
            },
            getWebVersions(webName, projectName) {
                if (webName === undefined || webName === '' || projectName === undefined || projectName === '') {
                    this.$message.error('Please input web name or projectName');
                } else {
                    GetWebVersions(webName, projectName)
                        .then(resp => {
                            for (let i = 0; i < this.webs.length; i++) {
                                if (this.webs[i]["webName"] === webName && this.webs[i]["projectName"] === projectName) {
                                    this.webs[i]["versions"] = resp
                                }
                            }
                        })
                        .catch(err => {
                            this.$message.error(err);
                        })
                }
            }
        },
        created() {
            GetAllServerWebs()
                .then(resp => {
                    this.$message.success("Loaded!")
                    this.servers = resp["servers"]
                    this.webs = resp["webs"]
                    this.nginx = resp["nginx"]
                })
                .catch(err => {
                    this.$message.error(err);
                })
        },
        computed: {
            currentVersion(data) {
                let currentVersion = data["currentVersion"]
                return currentVersion
            }
        }
    }
</script>
<style>
    .bg-purple-dark {
        background: #99a9bf;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        text-align: center;
    }

    .font-style {
        font-family: 微软雅黑;
    }
</style>