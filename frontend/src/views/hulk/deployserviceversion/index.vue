<template>
    <el-container>
        <el-main>
            <!--            <el-button type="primary" round @click="newServiceVersion">{{$t("views.deploy.newServiceVersion")}}-->
            <!--            </el-button>-->
<!--            <el-button type="primary" round @click="repairServiceVersion" style="margin-right: 20px">-->
<!--                {{$t("views.deploy.repairServiceVersion")}}-->
<!--            </el-button>-->
<!--            <el-button type="primary" round @click="repairBaseJars" style="margin-right: 20px">-->
<!--                {{$t("views.deploy.repairBaseJar")}}-->
<!--            </el-button>-->
            <el-button type="primary" round @click="sureAddbaseJars">{{$t("views.deploy.AddBaseJars")}}
            </el-button>
            <el-table
                    :data="tableData"
                    border
                    style="width: 90%"
                    height="700px">
                <el-table-column
                        prop="serverType"
                        label="ServerType"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="groovyCloudType"
                        label="GroovyCloudType"
                        width="250">
                </el-table-column>
                <el-table-column
                        prop="serviceLength"
                        label="Number of services"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="baseJarLength"
                        label="Number of baseJars"
                        width="200">
                </el-table-column>
                <el-table-column
                        label="Operations"
                        width="400">
                    <template slot-scope="scope">
                        <el-button type="primary" size="medium" style="margin-right: 20px"
                                   @click="openServiceVersionDialog(scope.row)">
                            {{$t("views.deploy.serviceVersion")}}
                        </el-button>
                        <el-button type="primary" size="medium" style="margin-right: 5px"
                                   @click="openBaseJarsDialog(scope.row)">
                            {{$t("views.deploy.baseJars")}}
                        </el-button>
<!--                        <el-button-->
<!--                                @click.native.prevent="openDeleteServiceVersionDialog(scope.$index, scope.row)"-->
<!--                                type="danger"-->
<!--                                size="medium">-->
<!--                            {{$t("views.deploy.delete")}}-->
<!--                        </el-button>-->
                    </template>
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="Operations"
                        width="200">
                    <template slot-scope="scope">
                        <el-button type="primary" size="medium" @click="openReloadServerTypeDialog(scope.row)">
                            {{$t("views.deploy.reload")}}
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        <el-dialog width="60%" :visible.sync="serviceVersionDialogVisible" :title="this.remindServerTypeService">
            <el-col :span="8" style="margin-bottom: 5px">
                <el-input v-model="addServiceName" placeholder="Input service name">
                </el-input>
            </el-col>
            <el-col :span="5" style="margin-left: 5px">
                <el-button type="primary" size="medium" @click="addService()">add</el-button>
            </el-col>
            <el-table
                    :data="serviceData.serviceVersions"
                    border
                    height="700px">
                <el-table-column
                        prop="service"
                        label="serviceName">
                </el-table-column>
                <el-table-column
                        prop="version"
                        label="version">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="Operations"
                        width="150px">
                    <template slot-scope="scope">
                        <el-button
                                type="danger"
                                size="medium"
                                @click="removeDeployService(scope.row)">
                            {{$t("views.deploy.delete")}}
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
        <el-dialog width="60%" :visible.sync="baseJarsVisible" :title="this.remindBaseJars">
            <el-table
                    :data="basePro.baseJarVersions"
                    border
                    height="600px">
                <el-table-column
                        prop="jarName"
                        label="jarName">
                </el-table-column>
                <el-table-column
                        prop="version"
                        label="version">
                </el-table-column>
            </el-table>
            <el-divider></el-divider>
            <el-table
                    :data="basePro.servers"
                    border
                    height="200px">
                <el-table-column
                        prop="ip"
                        label="ip">
                </el-table-column>
                <el-table-column
                        prop="dockerNames"
                        label="dockerNames">
                </el-table-column>
            </el-table>
        </el-dialog>

        <el-dialog
                :title="$t('views.deploy.reminder')"
                :visible.sync="deleteServiceVersionVisible"
                width="30%">
            <span>{{this.remindRemoveDeployServiceVersion}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelDelete">{{$t("views.deploy.cancel")}}</el-button>
                <el-button type="primary" @click="sureDelete">{{$t("views.deploy.sure")}}</el-button>
             </span>
        </el-dialog>
        <el-dialog
                :title="$t('views.deploy.reminder')"
                :visible.sync="reloadContainerDialog"
                width="30%">
            <span>{{this.remindReloadServerType}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelReload">{{$t("views.deploy.cancel")}}</el-button>
                <el-button type="primary" @click="reload">{{$t("views.deploy.sure")}}</el-button>
             </span>
        </el-dialog>
        <el-dialog
                :visible.sync="addbaseJars"
                title="Upload Jars"
                width="50%"
        >
            <span class="uploader">
                    <el-upload
                            accept=".jar"
                            class="upload-demo"
                            ref="upload"
                            :action="uploadUrlData"
                            :file-list="fileList"
                            :on-success="uploadSuccess"
                            :auto-upload="false">
                <el-button slot="trigger" size="medium" type="primary">{{$t("views.deploy.selectFile")}}</el-button>
                <el-button style="margin-left: 10px;" size="medium" type="success"
                           @click="submitUpload">{{$t("views.deploy.upload")}}</el-button>
                        <el-button style="margin-left: 200px" size="medium" @click="cancelbaseJars">{{$t("views.deploy.cancel")}}</el-button>
                    </el-upload>
                </span>
        </el-dialog>
    </el-container>
</template>

<script>
    import {
        GetAllServiceVersions, SaveServiceVersion, RemoveServiceVersion, RepairBaseJars,
        RepairDployServiceVersions, GetDeployServiceVersion, AddDeployService, RemoveDeployService,
        GetBaseJars, ReloadContainer
    } from "@api/deploy.api";

    export default {
        methods: {
            openServiceVersionDialog(data) {
                GetDeployServiceVersion(data.serverType)
                    .then(resp => {
                        this.$message.success("Get " + data.serverType + "'s serviceversions success!")
                        this.serviceData = resp
                        this.remindServerTypeService = this.serviceData.serverType + "'s service and version"
                        this.serviceVersionDialogVisible = true
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            openBaseJarsDialog(data) {
                GetBaseJars(data.serverType)
                    .then(resp => {
                        this.basePro = resp
                        this.remindBaseJars = this.basePro.serverType + "'s base jars and server"
                        this.baseJarsVisible = true
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            openReloadServerTypeDialog(data) {
                this.remindReloadServerType = "Confirm reload container " + data.serverType + "?"
                this.reloadContainerDialog = true
                this.everyData = data
            },
            cancelReload() {
                this.remindReloadServerType = ""
                this.reloadContainerDialog = false
                this.everyData = {}
            },
            reload() {
                this.remindReloadServerType = ""
                this.reloadContainerDialog = false
                ReloadContainer(this.everyData.serverType)
                    .then(resp => {
                        this.$message.success("Reload request send success")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            sureAddbaseJars() {
                this.fileList = []
                this.addbaseJars = true
            },
            cancelbaseJars() {
                this.addbaseJars = false
                this.fileList = []
            },
            submitUpload() {
                if (this.$refs.upload.uploadFiles.length > 0) {
                    this.$refs.upload.submit();
                    this.addbaseJars = false
                } else {
                    this.$message.error('Please select a jar file to upload!');
                }
            },
            uploadSuccess(res, file, fileList) {
                if (res.code === 1) {
                    this.$message.success("Files " + file.name + " Upload Success!")
                } else {
                    this.$message.error("Files " + file.name + "Upload Failed!")
                }
                for (let i = 0; i < fileList.length; i++) {
                    if (fileList[i].name === file.name) {
                        fileList.splice(i, 1)
                        break
                    }
                }
                if (fileList.length === 0) {
                    // this.$message.success("Upload all jars Success!")
                }
            },

            removeDeployService(data) {
                RemoveDeployService(this.serviceData.serverType, data.service)
                    .then(resp => {
                        this.$message.success("Remove " + data.service + " success!")
                        this.serviceData = resp
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            addService() {
                if (this.addServiceName === undefined || this.addServiceName === "") {
                    this.$message.error("Please input serviceName");
                } else {
                    AddDeployService(this.serviceData.serverType, this.addServiceName)
                        .then(resp => {
                            this.$message.success("Add " + this.addServiceName + "to " + this.serviceData.serverType + " success!")
                            this.addServiceName = ""
                            this.serviceData = resp
                        })
                        .catch(err => {
                            this.$message.error(err);
                        })
                }
            },
            repairServiceVersion() {
                RepairDployServiceVersions()
                    .then(resp => {
                        this.$message.success("Repair service version success!")
                        this.tableData = resp
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            repairBaseJars() {
                RepairBaseJars()
                    .then(resp => {
                        this.$message.success("Repair baseJar success!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            uuid() {
                var s = [];
                var hexDigits = "0123456789abcdef";
                for (var i = 0; i < 36; i++) {
                    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
                }
                s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
                s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
                var uuid = s.join("");
                return uuid
            },
            cancelDelete() {
                this.deleteServiceVersionVisible = false
                this.serviceVersionId = ""
                this.remindRemoveDeployServiceVersion = ""
            },
            openDeleteServiceVersionDialog(index, data) {
                this.deleteServiceVersionVisible = true
                this.serviceVersionId = data["id"]
                this.remindRemoveDeployServiceVersion = "Confirm delete " + data.serverType + "'s serviceVersion"
            },
            sureDelete() {
                this.deleteServiceVersionVisible = false
                RemoveServiceVersion(this.serviceVersionId)
                    .then(resp => {
                        this.$message.success("Success!")
                        this.tableData = resp
                        this.remindRemoveDeployServiceVersion = ""
                        this.serviceVersionId = ""
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
                this.index = -1
                this.serviceVersionId = ""
            }
        },
        data() {
            return {
                serviceVersionDialogVisible: false,
                deleteServiceVersionVisible: false,
                baseJarsVisible: false,
                everyData: {},
                tableData: [],
                removeAServiceVersionCanche: [],
                addAServiceVersionCanche: [],
                serverType: "",
                type: "",
                serviceVersionId: "",
                serviceData: {},
                remindServerTypeService: "",
                remindBaseJars: "",
                addServiceName: "",
                remindRemoveDeployServiceVersion: "",
                basePro: {},
                reloadContainerDialog: false,
                remindReloadServerType: "",
                addbaseJars: false,
                fileList: [],
                uploadUrl: '/open/basejars'
            }
        },
        created() {
            GetAllServiceVersions()
                .then(resp => {
                    this.$message.success("Updated!")
                    this.tableData = resp
                })
                .catch(err => {
                    this.$message.error(err);
                })
        },
        computed: {
            uploadUrlData: function () {
                let uploadHost = ''
                if (process.env.VUE_APP_API === "/" || process.env.VUE_APP_API === '' || process.env.VUE_APP_API === undefined) {
                    uploadHost = location.protocol + "//" + location.host
                } else {
                    uploadHost = process.env.VUE_APP_API
                }
                let param = uploadHost + this.uploadUrl
                return param
            }
        }
    }
</script>