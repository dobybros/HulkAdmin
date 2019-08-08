<template>
    <el-container>
        <el-main>
            <el-scrollbar style="height: 700px">
                <el-col>
                    <el-button type="primary" round @click="openWebDialog">{{$t("views.deploy.newWeb")}}</el-button>
                </el-col>
                <el-col :span="18" style="margin-top: 20px;" v-for="web in this.webs">
                    <el-row>
                        <el-col>
                            <div class="grid-content bg-purple-dark font-style" style="">{{web.webName}}</div>
                        </el-col>
                    </el-row>
                    <el-row v-for="project in web.projectNames" style="display: flex;">
                        <el-col style="flex: 1;margin-top: 20px;margin-right: 80px">
                            <el-input v-model="project.projectName" placeholder="Input service name">
                                <template slot="prepend">{{$t("views.deploy.projectName")}}</template>
                            </el-input>
                        </el-col>
                        <el-col style="flex: 1;margin-top: 20px;margin-right: 80px">
                            <el-input :disabled="true" v-model="project.lastUploadTime" size="medium">
                                <template slot="prepend">{{$t("views.deploy.lastUploadTime")}}</template>
                            </el-input>
                        </el-col>
                        <el-col style="flex: 1;margin-top: 20px;">
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
    import {GetAllWebs} from "@api/deploy.api";

    export default {
        data() {
            return {
                webs: [],
                uploadUrl: "/open/web",
                fileList: [],
                param: {},
                dialogUploadWeb: false,
                webName: '',
                projectName: ''
            }
        },
        methods: {
            uploadSuccess(res, file, fileList) {
                if (res.code === 1) {
                    this.$message.success("File " + file.name + " Upload Success!")
                } else {
                    this.$message.success("File " + file.name + "Upload Failed!")
                }
            },
            uploadWebData: function (webName, projectName) {
                let uploadHost = ''
                if (process.env.VUE_APP_API === "/" || process.env.VUE_APP_API === '' || process.env.VUE_APP_API === undefined) {
                    uploadHost = location.protocol + "//" + location.host
                } else {
                    uploadHost = process.env.VUE_APP_API
                }
                let param = uploadHost + this.uploadUrl + "?w=" + webName + "&p=" + projectName
                return param
            },
            openWebDialog() {
                this.dialogUploadWeb = true
            },
            addWeb() {
                this.webs.push({
                    "webName": this.webName,
                    "projectNames": [{"projectName": this.projectName, "lastUploadTime": ''}]
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
            }
        },
        created() {
            GetAllWebs()
                .then(resp => {
                    this.$message.success("Updated!")
                    this.webs = resp
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