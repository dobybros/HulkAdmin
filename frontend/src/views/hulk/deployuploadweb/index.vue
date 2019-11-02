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
                <el-col :style=newwebDisplay>
                    <el-button type="primary" round @click="openWebDialog">{{$t("views.deploy.newWeb")}}</el-button>
                </el-col>
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
                                       placeholder="Select version">
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
    </el-container>
</template>
<script>
    import {GetAllNginx, DeleteWebProjectVersion, DownloadWebProjectVersion, GetWebsByNginx} from "@api/deploy.api";

    export default {
        data() {
            return {
                webs: [],
                uploadUrl: "/open/web",
                fileList: [],
                param: {},
                dialogUploadWeb: false,
                webName: '',
                projectName: '',
                selectVersion: '',
                downloadGroovyUrl: '',
                newwebDisplay: "display: none",
                nginxName: '',
                nginxList: [],
                loading: false
            }
        },
        watch: {
            nginxName() {
                this.getwebs()
            }
        },
        methods: {
            getwebs() {
                if(this.nginxName === null || this.nginxName === undefined || this.nginxName === ''){
                    this.$message.error('Please select nginx');
                }else {
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
                const results =this.nginxList
                callback(results)
            },
            uploadSuccess(res, file, fileList) {
                if (res.code === 1) {
                    this.$message.success("File " + file.name + " Upload Success!")
                } else {
                    this.$message.success("File " + file.name + "Upload Failed!")
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
            openWebDialog() {
                this.dialogUploadWeb = true
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