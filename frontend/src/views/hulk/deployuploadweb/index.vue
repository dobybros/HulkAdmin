<template>
    <el-container>
        <el-main>
            <el-row style="margin-bottom: 20px;display: flex">
                <el-col :span="2">
                    <el-button type="info">Select Nginx</el-button>
                </el-col>
                <el-col :span="4">
                    <el-autocomplete
                            v-model="nginxName"
                            placeholder="Select Nginx"
                            :fetch-suggestions="selectNginx"
                            clearable/>
                </el-col>
            </el-row>
            <el-scrollbar style="height: 700px" v-loading="loading">
                <el-row>
                    <el-col :style=newwebDisplay :span="2" style="margin-right: 5px">
                        <el-button type="primary" round @click="openWebDialog">{{$t("views.deploy.newWeb")}}</el-button>
                    </el-col>
                    <el-col :style=newwebDisplay :span="2">
                        <el-button type="primary" round @click="openWebVersionDialog">
                            {{$t("views.deploy.reloadNginx")}}
                        </el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="18" style="margin-top: 20px;" v-for="web in this.webs">
                        <el-row>
                            <el-col>
                                <div class="grid-content bg-purple-dark font-style" style="">{{web.webName}}</div>
                            </el-col>
                        </el-row>
                        <el-row v-for="project in web.projectNames" style="display: flex;">
                            <el-col style="margin-top: 20px;margin-right: 40px">
                                <el-input v-model="project.projectName" placeholder="Input service name">
                                    <template slot="prepend">{{$t("views.deploy.projectName")}}</template>
                                </el-input>
                            </el-col>
                            <el-col style="flex: 1;margin-top: 20px;margin-right: 120px">
                                <el-upload
                                        accept=".zip"
                                        ref="upload"
                                        :action="uploadWebData(web.webName, project.projectName)"
                                        :on-success="uploadSuccess"
                                        :file-list="fileList"
                                        :limit="1"
                                        :auto-upload="true">
                                    <el-button type="primary">{{$t("views.deploy.upload")}}<i
                                            class="el-icon-upload el-icon--right"></i></el-button>
                                </el-upload>
                            </el-col>
                            <el-col :span="20" style="margin-right: 40px;margin-top: 20px">
                                <el-select v-model="project.selectVersion"
                                           placeholder="Select version"
                                           @click.native="getWebVersions(web.webName, project.projectName)">
                                    <el-option
                                            v-for="version in project.versions"
                                            :key="version"
                                            :label="version"
                                            :value="version">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col style="margin-top: 20px">
                                <el-button
                                        type="danger"
                                        size="medium"
                                        @click="deleteWebProjectVersion(web.webName, project.projectName, project.selectVersion)">
                                    {{$t("views.deploy.delete")}}
                                </el-button>
                                <el-button size="medium" type="success"
                                           @click="downloadThis(downloadGroovyUrl + '/open/web/' + nginxName + '/' + web.webName + '/' + project.projectName + '/' + project.selectVersion)">
                                    {{$t("views.deploy.download")}}
                                </el-button>
                            </el-col>
                        </el-row>
                        <el-row style="margin: 15px 0;">
                            <el-col>
                                <el-button type="primary" icon="el-icon-plus" round
                                           @click="addProject(web.webName)"></el-button>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-scrollbar>
        </el-main>

        <el-dialog
                :title="$t('views.deploy.newWeb')"
                :visible.sync="dialogUploadWeb"
                width="40%">
            <el-row style="display: flex;">
                <el-col>
                    <el-input v-model="webName" placeholder="Input web name">
                        <template slot="prepend">{{$t("views.deploy.webName")}}</template>
                    </el-input>
                </el-col>
                <el-col>
                    <el-input v-model="projectName" placeholder="Input project name">
                        <template slot="prepend">{{$t("views.deploy.projectName")}}</template>
                    </el-input>
                </el-col>
            </el-row>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary"
                           @click="addWeb">{{$t("views.deploy.add")}}
                </el-button>
                <el-button @click="cancelAdd">{{$t("views.deploy.cancel")}}</el-button>
            </div>
        </el-dialog>
        <el-dialog
                :visible.sync="dialogWebVersion"
                width="60%">
            <el-scrollbar style="height: 700px" v-loading="loading">
                <el-row>
                    <el-col :span="20">
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
                    <el-col :span="8">
                        <span class="font-style">{{$t("views.deploy.version")}}</span>
                    </el-col>
                </el-row>
                <el-row v-for="web in this.nginxwebs">
                    <el-col :span="6">
                        <el-input v-model="web.webName" clearable clearable placeholder="Input web name"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <el-input v-model="web.projectName" clearable clearable
                                  placeholder="Input project name"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-select v-model="web.currentVersion"
                                   @click.native="getNginxWebVersions(web.webName, web.projectName)"
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
                    <el-col :span="20">
                        <div class="grid-content bg-purple-dark font-style" style="">{{$t("views.deploy.nginx")}}</div>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 20px;">
                    <el-col :span="8">
                        <el-button type="primary" round @click="dialogReload">{{$t("views.deploy.reloadNginx")}}
                        </el-button>
                    </el-col>
                </el-row>
            </el-scrollbar>
        </el-dialog>
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
    import {
        GetAllNginx,
        DeleteWebProjectVersion,
        DownloadWebProjectVersion,
        GetWebsByNginx,
        GetWebVersions,
        GetAllServerWebs,
        ReloadNginx
    } from "@api/deploy.api";

    export default {
        data() {
            return {
                webs: [],
                nginxwebs: [],
                uploadUrl: "/open/web",
                fileList: [],
                param: {},
                dialogUploadWeb: false,
                dialogWebVersion: false,
                webName: '',
                projectName: '',
                selectVersion: '',
                downloadGroovyUrl: '',
                newwebDisplay: "display: none",
                nginxName: '',
                nginxList: [],
                loading: false,
                deleteSureReloadNginxVisible: false,
                remindNginx: ''
            }
        },
        watch: {
            nginxName() {
                this.getwebs()
            }
        },
        methods: {
            getwebs() {
                if (this.nginxName === null || this.nginxName === undefined || this.nginxName === '') {
                    this.$message.error('Please select nginx');
                } else {
                    this.loading = true
                    GetWebsByNginx(this.nginxName)
                        .then(resp => {
                            this.loading = false
                            this.$message.success("Success!")
                            this.webs = resp
                            this.newwebDisplay = "display: block"
                        })
                        .catch(err => {
                            this.loading = false
                            this.$message.error(err);
                        })
                }
            },
            selectNginx(str, callback) {
                const results = this.nginxList
                callback(results)
            },
            uploadSuccess(res, file, fileList) {
                if (res.code === 1) {
                    this.$message.success("File " + file.name + " Upload Success!")
                } else {
                    this.$message.error("File " + file.name + "Upload Failed!")
                }
                this.fileList = []
            },
            downloadThis(href) {
                let a = document.createElement('a')
                a.setAttribute('href', href)
                a.click()
            },
            uploadWebData: function (webName, projectName) {
                let uploadHost = ''
                if (process.env.VUE_APP_API === "/" || process.env.VUE_APP_API === '' || process.env.VUE_APP_API === undefined) {
                    uploadHost = location.protocol + "//" + location.host
                } else {
                    uploadHost = process.env.VUE_APP_API
                }
                let param = uploadHost + this.uploadUrl + '/' + this.nginxName + "?w=" + webName + "&p=" + projectName
                return param
            },
            cancelReload() {
                this.deleteSureReloadNginxVisible = false
            },
            reload() {
                this.deleteSureReloadNginxVisible = false
                this.remindNginx = ''
                ReloadNginx({"webs": this.nginxwebs, "nginxName": this.nginxName})
                    .then(resp => {
                        this.$message.success("Success reload nginx " + this.nginxName + "!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            openWebDialog() {
                this.dialogUploadWeb = true
            },
            dialogReload() {
                this.remindNginx = 'Confirm reload nginx ' + this.nginxName + '?',
                    this.deleteSureReloadNginxVisible = true
            },
            getNginxWebVersions(webName, projectName) {
                if (webName === undefined || webName === '' || projectName === undefined || projectName === '') {
                    this.$message.error('Please input web name or projectName');
                } else {
                    GetWebVersions(this.nginxName, webName, projectName)
                        .then(resp => {
                            for (let i = 0; i < this.nginxwebs.length; i++) {
                                if (this.nginxwebs[i]["webName"] === webName && this.nginxwebs[i]["projectName"] === projectName) {
                                    this.nginxwebs[i]["versions"] = resp
                                }
                            }
                        })
                        .catch(err => {
                            this.$message.error(err);
                        })
                }
            },
            getWebVersions(webName, projectName) {
                GetWebVersions(this.nginxName, webName, projectName)
                    .then(resp => {
                        for (let i = 0; i < this.webs.length; i++) {
                            if (this.webs[i]["webName"] === webName) {
                                let projectNames = this.webs[i]["projectNames"]
                                if (projectNames !== undefined) {
                                    for (let j = 0; j < projectNames.length; j++) {
                                        if (projectNames[i]["projectName"] === projectName) {
                                            projectNames[i]["versions"] = resp
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            openWebVersionDialog() {
                GetAllServerWebs(this.nginxName)
                    .then(resp => {
                        // this.loading = false
                        // this.display = "display: block"
                        this.$message.success("Loaded!")
                        // this.servers = resp["servers"]
                        this.nginxwebs = resp
                        // this.nginx = resp["nginx"]
                        this.dialogWebVersion = true
                    })
                    .catch(err => {
                        this.loading = false
                        this.$message.error(err);
                    })
            },
            addWeb() {
                this.webs.push({
                    "webName": this.webName,
                    "projectNames": [{"projectName": this.projectName, "versions": []}]
                })
                this.webName = '',
                    this.projectName = ''
                this.dialogUploadWeb = false
            },
            cancelAdd() {
                this.webName = '',
                    this.projectName = ''
                this.dialogUploadWeb = false
            },
            addProject(webName) {
                for (let i = 0; i < this.webs.length; i++) {
                    let web = this.webs[i]
                    if (web["webName"] === webName) {
                        let projectNames = web["projectNames"]
                        if (projectNames === undefined) {
                            projectNames = []
                        }
                        projectNames.push({"projectName": '', "lastUploadTime": ''})
                    }
                }
            },
            deleteWebProjectVersion(webName, projectName, version) {
                DeleteWebProjectVersion(this.nginxName, webName, projectName, version)
                    .then(resp => {
                        this.$message.success("Success delete " + webName + " " + projectName + " " + version)
                        for (let i = 0; i < this.webs.length; i++) {
                            let web = this.webs[i]
                            if (web["webName"] === webName) {
                                let projectNames = web["projectNames"]
                                for (let j = 0; j < projectNames.length; j++) {
                                    let project = projectNames[j]
                                    if (project["projectName"] === projectName) {
                                        let versions = project["versions"]
                                        for (let k = 0; k < versions.length; k++) {
                                            if (versions[k] === version) {
                                                versions.splice(k, 1)
                                                project["selectVersion"] = ''
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            downloadWebProjectVersion(webName, projectName, version) {
                DownloadWebProjectVersion(webName, projectName, version)
                    .then(resp => {

                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            }
        },
        created() {
            GetAllNginx()
                .then(resp => {
                    this.$message.success("Updated!")
                    this.nginxList = resp
                    let uploadHost = ''
                    if (process.env.VUE_APP_API === "/" || process.env.VUE_APP_API === '' || process.env.VUE_APP_API === undefined) {
                        uploadHost = location.protocol + "//" + location.host
                    } else {
                        uploadHost = process.env.VUE_APP_API
                    }
                    this.downloadGroovyUrl = uploadHost
                })
                .catch(err => {
                    this.$message.error(err);
                })
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