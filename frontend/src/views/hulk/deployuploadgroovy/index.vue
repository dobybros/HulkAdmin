<template>
    <el-container>
        <el-main>
            <el-button type="primary" round @click="newServiceVersion">{{$t("views.deploy.addNewService")}}</el-button>
            <div>
                <el-table
                        :data="tableData"
                        style="width: 90%;"
                        row-key="serviceName"
                        height="550"
                        border
                        :tree-props="{children: 'allVersion'}">
                    <el-table-column
                            prop="serviceName"
                            label="service"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="version"
                            label="version"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="Upload time">
                    </el-table-column>
                    <el-table-column
                            label="Operations">
                        <template slot-scope="scope" v-if="scope.row.version === scope.row.maxVersion">
                            <el-button
                                    @click.native.prevent="openUploadDialog(scope.row)"
                                    type="primary"
                                    size="medium"
                                    style="margin-right: 20px">
                                {{$t("views.deploy.edit")}}
                            </el-button>
                            <el-button
                                    @click.native.prevent="openDeleteDialog(scope.$index, scope.row)"
                                    type="danger"
                                    size="medium"
                                    style="margin-right: 20px">
                                {{$t("views.deploy.delete")}}
                            </el-button>
                            <el-button
                                    @click.native.prevent="openDownloadDialog(scope.row)"
                                    type="primary"
                                    size="medium">
                                {{$t("views.deploy.download")}}
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-main>
        <el-dialog
                :visible.sync="dialogVisible"
                width="50%"
        >
            <el-row>
                <el-col :span="10">
                    <el-input v-model="serviceName" placeholder="Input service name">
                        <template slot="prepend">{{$t("views.deploy.serviceName")}}</template>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-input :disabled="true" placeholder="version"></el-input>
                </el-col>
                <el-col :span="5">
                    <el-autocomplete
                            v-model="value"
                            placeholder="Select version"
                            :fetch-suggestions="selectVersion"
                            clearable/>
                </el-col>
            </el-row>

            <span slot="footer" class="dialog-footer">
                <span class="uploader">
                    <el-upload
                            accept=".zip"
                            class="upload-demo"
                            ref="upload"
                            :action="uploadUrlData"
                            :file-list="fileList"
                            :limit="1"
                            :auto-upload="false">
                <el-button slot="trigger" size="medium" type="primary">{{$t("views.deploy.selectFile")}}</el-button>
                <el-button style="margin-left: 10px;" size="medium" type="success"
                           @click="submitUpload">{{$t("views.deploy.upload")}}</el-button>
                    </el-upload>
                </span>

                <span class="cancel-delete">
                    <el-button size="medium" @click="cancelEdit">{{$t("views.deploy.cancel")}}</el-button>
                    <el-button size="medium" type="danger"
                               @click="deleteServiceVersion">{{$t("views.deploy.delete")}}</el-button>
                </span>

  </span>
        </el-dialog>
        <el-dialog
                :title="$t('views.deploy.reminder')"
                :visible.sync="deleteGroovyDialogVisible"
                width="30%">
            <span>{{$t("views.deploy.confrimDeleteService")}}<span
                    style="color: #000fff">{{this.deleteServiceName}}</span>?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelDelete">{{$t("views.deploy.cancel")}}</el-button>
                <el-button type="primary" @click="sureDelete">{{$t("views.deploy.sure")}}</el-button>
             </span>
        </el-dialog>
        <el-dialog
                :visible.sync="downDialogVisible"
                width="50%"
        >
            <el-row>
                <el-col :span="10">
                    <el-input v-model="downloadServiceName" :disabled="true">
                        <template slot="prepend">{{$t("views.deploy.serviceName")}}</template>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-input :disabled="true" placeholder="version"></el-input>
                </el-col>
                <el-col :span="5">
                    <el-select v-model="downValue" placeholder="Select Version">
                        <el-option
                                v-for="item in this.downloadData.versions"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>

            <span slot="footer">
                <span >
                    <el-button size="medium" @click="cancelDownoad" style="margin-right: 10px">{{$t("views.deploy.cancel")}}</el-button>
                    <a style="color: #0000cc;border-color: #000fff" target="_blank" @click="downDialogVisible=false" :href="downloadGroovyUrl + '/open/downzip?s='+ downloadServiceName + '&v=' + downValue" ><el-button type="success">{{$t("views.deploy.download")}}</el-button></a>
                </span>

  </span>
        </el-dialog>
    </el-container>
</template>
<script>
    import {GetAllGroovyInfo, DeleteServiceVersion, RemoveService} from "@api/deploy.api";
    import util from '@/libs/util'

    export default {
        data() {
            return {
                uploadUrl: "/open/groovyzip",
                tableData: [],
                serviceName: '',
                value: '',
                dialogVisible: false,
                deleteGroovyDialogVisible: false,
                downDialogVisible: false,
                everyData: {},
                fileList: [],
                param: {},
                deleteServiceName: '',
                downloadData: {},
                downValue: '',
                downloadServiceName: '',
                downloadGroovyUrl: ''
            }
        },
        created() {
            GetAllGroovyInfo()
                .then(resp => {
                    this.$message.success("Updated!")
                    this.tableData = resp
                })
                .catch(err => {
                    this.$message.error(err);
                })
        },
        methods: {
            openUploadDialog(data) {
                this.dialogVisible = true
                this.value = ''
                if (data !== undefined) {
                    this.everyData = data
                    this.serviceName = data.serviceName
                } else {
                    this.everyData = {}
                    this.serviceName = ""
                }
            },
            submitUpload() {
                if (this.value !== null && this.serviceName !== null && this.value !== '' && this.serviceName !== '') {
                    if (this.$refs.upload.uploadFiles.length > 0) {
                        this.$refs.upload.submit();
                        let thisValue = ''
                        if (this.value.split(":")[1] !== undefined) {
                            thisValue = this.value.split(":")[1].trim()
                        } else {
                            thisValue = this.value
                        }
                        if (this.everyData["maxVersion"] !== undefined) {
                            if (thisValue > this.everyData["maxVersion"].trim()) {
                                let oldVersion = this.everyData["version"]
                                let oldDate = this.everyData["date"]
                                this.everyData["allVersion"].unshift({
                                    "serviceName": this.serviceName,
                                    "version": oldVersion,
                                    "date": oldDate
                                })
                                this.everyData["versions"].unshift({"value": "version: " + thisValue})
                                this.everyData["maxVersion"] = thisValue
                                this.everyData["version"] = thisValue
                                this.everyData["date"] = this.timeFormat(new Date().getTime())
                            } else if (thisValue === this.everyData["maxVersion"].trim()) {
                                this.everyData["date"] = this.timeFormat(new Date().getTime())
                            } else if (thisValue < this.everyData["maxVersion"].trim()) {
                                let existItem = false
                                for (let i = 0; i < this.everyData["allVersion"].length; i++) {
                                    let data3 = this.everyData["allVersion"][i]
                                    if (data3["version"] === thisValue) {
                                        existItem = true
                                        data3["date"] = this.timeFormat(new Date().getTime())
                                    }
                                }
                                if (!existItem) {
                                    for (let i = 0; i < this.everyData["allVersion"].length; i++) {
                                        let data3 = this.everyData["allVersion"][i]
                                        if (thisValue > data3["version"]) {
                                            existItem = true
                                            this.everyData["versions"].splice(i + 1, 0, {"value": "version: " + thisValue})
                                            this.everyData["allVersion"].splice(i, 0, {
                                                "version": thisValue,
                                                "serviceName": this.serviceName,
                                                "date": this.timeFormat(new Date().getTime())
                                            })
                                            break
                                        }
                                    }
                                }
                                if (!existItem) {
                                    this.everyData["versions"].push({"value": "version: " + thisValue})
                                    this.everyData["allVersion"].push({
                                        "version": thisValue,
                                        "serviceName": this.serviceName,
                                        "date": this.timeFormat(new Date().getTime())
                                    })
                                }
                            }
                        } else {
                            this.tableData.push({
                                "maxVersion": thisValue,
                                "version": thisValue,
                                "serviceName": this.serviceName,
                                "date": this.timeFormat(new Date().getTime()),
                                "versions": [{"value": "version: " + thisValue}],
                                "allVersion": []
                            })
                        }
                        this.dialogVisible = false
                        this.$refs.upload.uploadFiles = []
                        this.value = ''
                        this.uploadUrlData = ''
                        this.serviceName = ''
                    } else {
                        this.$message.error('Please select a file to upload!');
                    }
                } else {
                    this.$message.error('Please make sure that neither service name nor version is empty!');
                }
            },
            selectVersion(str, callback) {
                const results = str ? this.everyData.versions.filter(p => p.value.indexOf(str) !== -1) : this.everyData.versions
                callback(results)
            },
            cancelEdit() {
                this.dialogVisible = false
                this.everyData = {}
                this.value = ''
                this.uploadUrlData = ''
                this.serviceName = ''
                this.$refs.upload.uploadFiles = []
            },
            deleteServiceVersion() {
                this.dialogVisible = false
                DeleteServiceVersion(this.serviceName, this.value)
                    .then(resp => {
                        this.$message.success("Success!")
                        let deleteValue = ''
                        if (this.value.split(":")[1] !== undefined) {
                            deleteValue = this.value.split(":")[1].trim()
                        } else {
                            deleteValue = this.value.trim()
                        }
                        if (deleteValue === this.everyData["maxVersion"].trim()) {
                            let data = this.everyData["allVersion"][0]
                            if (data !== undefined) {
                                this.everyData["maxVersion"] = data["version"]
                                this.everyData["version"] = data["version"]
                                this.everyData["date"] = data["date"]
                            }
                            this.everyData["allVersion"].splice(0, 1)
                            this.everyData["versions"].splice(0, 1)
                        } else {
                            for (let i = 0; i < this.everyData["allVersion"].length; i++) {
                                let containMao = ''
                                if (this.value.split(":")[1] !== undefined) {
                                    containMao = this.value.split(":")[1].trim()
                                } else {
                                    containMao = this.value
                                }
                                let data1 = this.everyData["allVersion"][i]
                                if (data1["version"] === containMao) {
                                    this.everyData["allVersion"].splice(i, 1)
                                }
                            }
                            for (let i = 0; i < this.everyData["versions"].length; i++) {
                                let versionVlue = ''
                                if (this.value.split(":")[1] !== undefined) {
                                    versionVlue = this.value
                                } else {
                                    versionVlue = "version: " + this.value
                                }
                                let data2 = this.everyData["versions"][i]
                                if (data2["value"] === versionVlue) {
                                    this.everyData["versions"].splice(i, 1)
                                }
                            }
                        }
                        this.dialogVisible = false
                        this.deleteServiceName = ''
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            newServiceVersion() {
                this.openUploadDialog()
            },
            timeFormat(timeStamp) {
                let year = new Date(timeStamp).getFullYear();
                let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1;
                let date = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
                let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp).getHours();
                let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes();
                let ss = new Date(timeStamp).getSeconds() < 10 ? "0" + new Date(timeStamp).getSeconds() : new Date(timeStamp).getSeconds();
                return year + "-" + month + "-" + date + " " + hh + ":" + mm + ":" + ss;
            },
            openDeleteDialog(index, data) {
                this.deleteGroovyDialogVisible = true
                this.deleteServiceName = data["serviceName"]
            },
            cancelDelete() {
                this.deleteGroovyDialogVisible = false
                this.deleteServiceName = ""
            },
            removeService(service) {
                RemoveService(service)
                    .then(resp => {
                        this.$message.success("Success!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            sureDelete() {
                this.deleteGroovyDialogVisible = false
                for (let i = 0; i < this.tableData.length; i++) {
                    if (this.tableData[i]["serviceName"] === this.deleteServiceName) {
                        this.tableData.splice(i, 1)
                    }
                }
                this.removeService(this.deleteServiceName)
                this.deleteServiceName = ""
            },
            cancelDownoad(){
                this.downDialogVisible = false
                this.downloadData = {}
                this.downValue = ''
                this.downloadServiceName = ''
            },
            openDownloadDialog(data){
                this.downDialogVisible = true
                this.downloadData = data
                this.downloadServiceName = data.serviceName
                this.downValue = ''
                let uploadHost = ''
                if (process.env.VUE_APP_API === "/" || process.env.VUE_APP_API === '' || process.env.VUE_APP_API === undefined) {
                    uploadHost = location.protocol + "//" + location.host
                } else {
                    uploadHost = process.env.VUE_APP_API
                }
                this.downloadGroovyUrl = uploadHost
            }
        },
        computed: {
            uploadUrlData: function () {
                let uploadHost = ''
                if (process.env.VUE_APP_API === "/" || process.env.VUE_APP_API === '' || process.env.VUE_APP_API === undefined) {
                    uploadHost = location.protocol + "//" + location.host
                } else {
                    uploadHost = process.env.VUE_APP_API
                }
                let param = uploadHost + this.uploadUrl + "?s=" + this.serviceName + "&v=" + this.value
                return param
            }
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