<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="8" style="margin-top: 20px">
                    <el-button type="primary" round @click="newServiceConfig">{{$t("views.deploy.newServiceConfig")}}
                    </el-button>
                </el-col>
                <el-col style="flex: 1;margin-top: 20px;margin-right: 120px" :span="4">
                    <el-upload
                            ref="upload"
                            :action="uploadConfig()"
                            :on-success="uploadSuccess"
                            :file-list="fileList"
                            :limit="1"
                            :auto-upload="true">
                        <el-button type="primary">{{$t("views.deploy.ImportConfig")}}<i
                                class="el-icon-upload el-icon--right"></i></el-button>
                    </el-upload>
                </el-col>
                <el-col :span="5" style="margin-top: 20px">
                    <a style="color: #0000cc;border-color: #000fff" target="_blank"
                       :href="downloadGroovyUrl + '/open/downconfigs'">
                        <el-button type="success">{{$t("views.deploy.ExportAllConfig")}}</el-button>
                    </a>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="14" style="margin-top: 5px;margin-bottom: 10px">
                    <el-input v-model="exportConfigs" placeholder="Please enter the config name, separated by commas"></el-input>
                </el-col>
                <el-col :span="5" style="margin-top: 5px;margin-bottom: 10px">
                    <a style="color: #0000cc;border-color: #000fff" target="_blank"
                       :href="downloadGroovyUrl + '/open/downconfigsinput/' + exportConfigs">
                        <el-button type="success">{{$t("views.deploy.ExportConfig")}}</el-button>
                    </a>
                </el-col>
            </el-row>
            <el-table
                    :data="tableData"
                    border
                    style="width: 70%"
                    max-height="600">
                <el-table-column
                        prop="_id.value"
                        label="ServiceName"
                        width="400">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="Operations"
                        width="400">
                    <template slot-scope="scope">
                        <el-button type="primary" size="medium" @click="dialogTableVisible(scope.row)">
                            {{$t("views.deploy.edit")}}
                        </el-button>
                        <el-button
                                @click.native.prevent="openDeleteDialog(scope.$index, scope.row, tableData)"
                                type="danger"
                                size="medium">
                            Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        <el-dialog :title="this.configName" width="80%" :visible.sync="dialogFormVisible">
            <el-row v-for="(val, key, i) in this.everyData">
                <el-col :span="6" v-if="val.key === '_id'">
                    <el-input :disabled="true" v-model="val.key" clearable
                              @change.native="onKey(val.key, val.value)"></el-input>
                </el-col>
                <el-col :span="6" v-else="val.key !== '_id'">
                    <el-input v-model="val.key" clearable @change.native="onKey(val.key, val.value)"></el-input>
                </el-col>
                <el-col style="text-align: center; line-height: 40px" :span="1">=</el-col>
                <el-col :span="16">
                    <el-input v-model="val.value" clearable @change.native="onKey(val.key, val.value)"></el-input>
                </el-col>
                <el-col :span="1" v-if="val.key !== '_id'">
                    <el-button icon="el-icon-delete" @click="removeConfigField(val.key)"></el-button>
                </el-col>
            </el-row>

            <div slot="footer" class="dialog-footer">
                <el-button style="float: left" type="primary" icon="el-icon-plus" circle
                           @click="addConfigField"></el-button>
                <el-button @click="cancelEdit">Cancel</el-button>
                <el-button type="primary" @click="saveConfig">Save</el-button>
            </div>
        </el-dialog>
        <el-dialog
                :title="$t('views.deploy.reminder')"
                :visible.sync="deleteDialogVisible"
                width="30%">
            <span>{{$t("views.deploy.confirmDelete")}}<span style="color: #000fff">{{this.deleteConfigName}}</span>{{$t("views.deploy.confirmConfig")}}</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="cancelDelete">{{$t("views.deploy.cancel")}}</el-button>
    <el-button type="primary" @click="sureDelete">{{$t("views.deploy.sure")}}</el-button>
  </span>
        </el-dialog>
    </el-container>
</template>

<script>
    import {GetAllServerConfigs, SaveConfig, RemoveConfig} from "@api/deploy.api";

    export default {
        methods: {
            deleteRow(index, rows) {
                let theData = rows[index]
                this.removeConfig(theData._id.value)
                rows.splice(index, 1);
            },
            dialogTableVisible(data) {
                this.dialogFormVisible = true
                this.everyData = data
                if (this.everyData["_id"] !== undefined && this.everyData["_id"]["value"] !== undefined) {
                    this.configName = this.everyData["_id"]["value"] + " config"
                }
            },
            saveConfig() {
                SaveConfig(this.everyData)
                    .then(resp => {
                        this.$message.success("Success!")
                        this.deleteDataCache = {}
                        this.addDataCache = {}
                        this.dialogFormVisible = false
                        this.configName = ""
                        this.everyData = {}
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            addConfigField() {
                this.$set(this.everyData, "", {key: "", value: ""})
            },
            removeConfigField(key) {
                this.$set(this.deleteDataCache, key, this.everyData[key])
                this.$delete(this.everyData, key)
            },
            removeConfig(id) {
                RemoveConfig(id)
                    .then(resp => {
                        this.$message.success("Success!")
                        this.tableData.splice(this.index, 1)
                        this.deleteConfigName = ""
                        this.index = -1
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            newServiceConfig() {
                this.tableData.push({"_id": {key: "_id", value: ""}})
                this.$set(this.addDataCache, "_id", {key: "_id", value: ""})
                this.dialogTableVisible(this.tableData[this.tableData.length - 1])
            },
            cancelEdit() {
                location.reload()
                // this.dialogFormVisible = false
                // for (let key in this.deleteDataCache) {
                //     this.$set(this.everyData, key, this.deleteDataCache[key])
                // }
                // for (let key in this.addDataCache) {
                //     this.$delete(this.everyData, key)
                // }
                // for (let i = 0; i < this.tableData.length; i++) {
                //     let theData = this.tableData[i]
                //     if (theData["_id"] === undefined || theData["_id"]["value"] === undefined || theData["_id"] === "" || theData["_id"]["value"] === "") {
                //         this.tableData.splice(i, 1)
                //     }
                // }
                // this.deleteDataCache = {}
                // this.addDataCache = {}
                // this.configName = ""
            },
            cancelDelete() {
                this.deleteDialogVisible = false
                this.deleteConfigName = ""
                this.index = -1
            },
            onKey(key, value) {
                if (key !== "" && value !== "") {
                    this.$set(this.everyData, key, {key: key, value: value})
                    this.$set(this.addDataCache, key, {key: key, value: value})
                    this.$delete(this.everyData, "")
                    let keyData = this.everyData[key]["key"]
                    for (let name in this.everyData) {
                        if (this.everyData[name]["key"] === keyData) {
                            if (name !== keyData) {
                                this.$delete(this.everyData, name)
                            }
                        }
                    }
                }
            },
            openDeleteDialog(index, data, rows) {
                this.deleteDialogVisible = true
                this.deleteConfigName = data["_id"]["value"]
                this.index = index
            },
            uploadConfig: function () {
                let param = this.downloadGroovyUrl + this.uploadUrl
                return param
            },
            uploadSuccess(res, file, fileList) {
                if (res.code === 1) {
                    this.$message.success("Import config success!")
                } else {
                    this.$message.error("Import config failed!")
                }
            },
            sureDelete() {
                this.deleteDialogVisible = false
                this.removeConfig(this.deleteConfigName)
            }
        },
        data() {
            return {
                uploadUrl: '/open/config',
                configName: "",
                index: -1,
                deleteConfigName: "",
                everyData: {},
                deleteDataCache: {},
                addDataCache: {},
                tableData: [],
                dialogFormVisible: false,
                deleteDialogVisible: false,
                downloadGroovyUrl: '',
                fileList: [],
                exportConfigs: ''
            }
        },
        created() {
            GetAllServerConfigs()
                .then(resp => {
                    this.$message.success("Get all config success!")
                    this.tableData = resp
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