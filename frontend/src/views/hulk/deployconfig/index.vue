<template>
    <el-container>
        <el-main>
            <el-button type="primary" round @click="newServiceConfig">New Service Config</el-button>
            <el-table
                    :data="tableData"
                    border
                    style="width: 70%"
                    max-height="700">
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
                        <el-button type="primary" size="medium" @click="dialogTableVisible(scope.row)">Edit</el-button>
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
                title="Reminder"
                :visible.sync="deleteDialogVisible"
                width="30%">
            <span>Confirm delete <span style="color: #000fff">{{this.deleteConfigName}}</span> config?</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="cancelDelete">Cancel</el-button>
    <el-button type="primary" @click="sureDelete">Sure</el-button>
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
                this.dialogFormVisible = false
                for (let key in this.deleteDataCache) {
                    this.$set(this.everyData, key, this.deleteDataCache[key])
                }
                for (let key in this.addDataCache) {
                    this.$delete(this.everyData, key)
                }
                for (let i = 0; i < this.tableData.length; i++) {
                    let theData = this.tableData[i]
                    if (theData["_id"] === undefined || theData["_id"]["value"] === undefined || theData["_id"] === "" || theData["_id"]["value"] === "") {
                        this.tableData.splice(i, 1)
                    }
                }
                this.deleteDataCache = {}
                this.addDataCache = {}
                this.configName = ""
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
                }
            },
            openDeleteDialog(index, data, rows) {
                this.deleteDialogVisible = true
                this.deleteConfigName = data["_id"]["value"]
                this.index = index
            },
            sureDelete() {
                this.deleteDialogVisible = false
                this.removeConfig(this.deleteConfigName)
            }
        },
        data() {
            return {
                configName: "",
                index: -1,
                deleteConfigName: "",
                everyData: {},
                deleteDataCache: {},
                addDataCache: {},
                tableData: [],
                dialogFormVisible: false,
                deleteDialogVisible: false
            }
        },
        created() {
            GetAllServerConfigs()
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