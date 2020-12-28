<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="3">
                    <el-button type="primary" round @click="newServiceConfig">{{$t("views.deploy.newServiceConfig")}}
                    </el-button>
                </el-col>
                <el-col style="flex: 1;margin-right: 120px" :span="1">
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
                <el-col :span="3" style="margin-bottom: 10px">
                    <el-button type="primary" @click="repairConfig">{{$t("views.deploy.repairConfig")}}</el-button>
                </el-col>
                <el-col :span="7" style="margin-bottom: 10px">
                    <el-cascader
                            style="width: 500px"
                            placeholder="select or search configs to download"
                            :options="servicesData"
                            :props="{multiple: true}"
                            v-model="cascaderValue"
                            filterable></el-cascader>
                </el-col>
                <el-col :span="3" style="margin-bottom: 10px;margin-right: 1px">
                    <a style="color: #0000cc;border-color: #000fff" target="_blank"
                       :href="downloadGroovyUrl + '/open/downconfigs/' + cascaderValue">
                        <el-button type="success">{{$t("views.deploy.ExportConfig")}}</el-button>
                    </a>
                </el-col>
                <el-col :span="1" style="margin-bottom: 20px;">
                    <el-input style="width: 300px" v-model="searchInput" placeholder="input serverType or serviceName" @change="search" suffix-icon="el-icon-search"></el-input>
                </el-col>
            </el-row>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    row-key="id"
                    :tree-props="{children: 'children', hasChildren: true}"
                    height="600px">
                <el-table-column
                        prop="service"
                        label="service">
                </el-table-column>
                <el-table-column
                        prop="version"
                        label="version">
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
                <el-button type="primary" @click="saveWithLastConfig">Save with last version</el-button>
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
    import {
        GetAllServerConfigs,
        SaveConfig,
        SaveWithLastConfig,
        RemoveConfig,
        RepairConfig,
        GetServiceConfigs
    } from "@api/deploy.api";

    export default {
        methods: {
            deleteRow(index, rows) {
                let theData = rows[index]
                this.removeConfig(theData._id.value)
                rows.splice(index, 1);
            },
            dialogTableVisible(data) {
                GetServiceConfigs(data.service, data.version)
                    .then(resp => {
                        this.everyData = resp
                        this.dialogFormVisible = true
                        if (this.everyData["_id"] !== undefined && this.everyData["_id"]["value"] !== undefined) {
                            this.configName = this.everyData["_id"]["value"] + " config"
                        }
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            saveConfig() {
                if (this.newConfig === false) {
                    if (!this.configName.includes(this.everyData._id.value)) {
                        this.newConfig = true
                    }
                }
                SaveConfig(this.everyData)
                    .then(resp => {
                        this.$message.success("Success!")
                        this.dialogFormVisible = false
                        this.configName = ""
                        this.everyData = {}
                        if (this.newConfig === true) {
                            location.reload()
                        }
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            search(){
                GetAllServerConfigs(this.searchInput)
                    .then(resp => {
                        this.$message.success("update!")
                        this.tableData = resp.list
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            saveWithLastConfig() {
                if (this.newConfig === false) {
                    if (!this.configName.includes(this.everyData._id.value)) {
                        this.newConfig = true
                    }
                }
                SaveWithLastConfig(this.everyData)
                    .then(resp => {
                        this.$message.success("Success!")
                        this.dialogFormVisible = false
                        this.configName = ""
                        this.everyData = {}
                        if (this.newConfig === true) {
                            location.reload()
                        }
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            repairConfig() {
                RepairConfig()
                    .then(resp => {
                        location.reload()
                        this.$message.success("Success!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            addConfigField() {
                this.$set(this.everyData, "", {key: "", value: ""})
            },
            removeConfigField(key) {
                this.$delete(this.everyData, key)
            },
            removeConfig(id) {
                RemoveConfig(id)
                    .then(resp => {
                        this.$message.success("Success!")
                        this.deleteConfigName = ""
                        this.index = -1
                        location.reload()
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            newServiceConfig() {
                this.newConfig = true
                this.dialogFormVisible = true
                this.everyData = {"_id": {key: "_id", value: ""}}
                this.configName = "new config"
            },
            cancelEdit() {
                // location.reload()
                this.configName = ""
                this.dialogFormVisible = false
                this.everyData = {}
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

            },
            cancelDelete() {
                this.deleteDialogVisible = false
                this.deleteConfigName = ""
                this.index = -1
            },
            onKey(key, value) {
                if (key !== "" && value !== "") {
                    this.$set(this.everyData, key, {key: key, value: value})
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
                this.deleteConfigName = data["service"] + "_v" + data["version"]
                this.index = index
            },
            uploadConfig: function () {
                let param = this.downloadGroovyUrl + this.uploadUrl
                return param
            },
            uploadSuccess(res, file, fileList) {
                if (res.code === 1) {
                    this.$message.success("Import config success!")
                    this.fileList=[]
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
                tableData: [],
                dialogFormVisible: false,
                deleteDialogVisible: false,
                downloadGroovyUrl: '',
                fileList: [],
                exportConfigs: '',
                newConfig: false,
                servicesData: [],
                cascaderValue: [],
                searchInput: ''
            }
        },
        created() {
            GetAllServerConfigs()
                .then(resp => {
                    this.$message.success("Get all config success!")
                    this.tableData = resp.list
                    this.servicesData = resp.downList
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