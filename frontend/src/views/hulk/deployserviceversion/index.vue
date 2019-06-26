<template>
    <el-container>
        <el-main>
            <el-button type="primary" round @click="newServiceVersion">New Service Version</el-button>
            <el-table
                    :data="tableData"
                    border
                    style="width: 80%"
                    max-height="700">
                <el-table-column
                        prop="serverType"
                        label="ServerType"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="GrayType"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="serviceLength"
                        label="Number of services"
                        width="300">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="Operations"
                        width="300">
                    <template slot-scope="scope">
                        <el-button type="primary" size="medium" @click="openServiceVersionDialog(scope.row)">Edit</el-button>
                        <el-button
                                @click.native.prevent="openDeleteServiceVersionDialog(scope.$index, scope.row)"
                                type="danger"
                                size="medium">
                            Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        <el-dialog width="50%" :visible.sync="serviceVersionDialogVisible">
            <el-row>
                <el-col :span="22">
                    <el-input v-model="serverType" placeholder="Input Server Types">
                        <template slot="prepend">ServerType</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="22">
                    <el-input v-model="type" placeholder="Input Gray type">
                        <template slot="prepend">GrayType</template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row v-for="(val, key, i) in this.everyData.serviceVersions">
                <el-col :span="14" >
                    <el-input v-model="val.key" clearable
                              @change.native="onKey(val.key, val.value)"></el-input>
                </el-col>
                <el-col style="text-align: center; line-height: 40px" :span="1">=</el-col>
                <el-col :span="7">
                    <el-input v-model="val.value" clearable @change.native="onKey(val.key, val.value)"></el-input>
                </el-col>
                <el-col :span="1">
                    <el-button icon="el-icon-delete" @click="removeAServiceVersion(val.key)"></el-button>
                </el-col>
            </el-row>

            <div slot="footer" class="dialog-footer">
                <el-button style="float: left" type="primary" icon="el-icon-plus" circle
                           @click="addServiceVersion"></el-button>
                <el-button @click="cancelEditServiceVersion">Cancel</el-button>
                <el-button type="primary" @click="saveServiceVersion">Save</el-button>
            </div>
        </el-dialog>
        <el-dialog
                title="Reminder"
                :visible.sync="deleteServiceVersionVisible"
                width="30%">
            <span>Confirm delete this serviceVersion?</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelDelete">Cancel</el-button>
                <el-button type="primary" @click="sureDelete">Sure</el-button>
             </span>
        </el-dialog>
    </el-container>
</template>

<script>
    import {GetAllServiceVersions, SaveServiceVersion, RemoveServiceVersion} from "@api/deploy.api";

    export default {
        methods: {
            openServiceVersionDialog(data){
                this.serviceVersionDialogVisible = true
                if(data !== undefined){
                    this.everyData = data
                    if(this.everyData["serviceVersions"] === undefined){
                        this.$set(this.everyData, "serviceVersions", {})
                    }
                    this.serverType = data.serverType
                    this.type = data.type
                }else {
                    this.everyData = {"serviceVersions":{}}
                    this.serverType =""
                    this.type = ""
                }
            },
            removeAServiceVersion(service){
                this.$set(this.removeAServiceVersionCanche, service, this.everyData["serviceVersions"][service])
                this.$delete(this.everyData["serviceVersions"], service)
            },
            cancelEditServiceVersion(){
                this.serviceVersionDialogVisible = false
                this.$delete(this.everyData["serviceVersions"], "")
                for (let key in this.removeAServiceVersionCanche) {
                    this.$set(this.everyData["serviceVersions"], key, this.removeAServiceVersionCanche[key])
                }
                this.removeAServiceVersionCanche = {}
                for (let key in this.addAServiceVersionCanche) {
                    this.$delete(this.everyData["serviceVersions"], key, this.addAServiceVersionCanche[key])
                }
                this.addAServiceVersionCanche = {}
            },
            onKey(key, value) {
                if (key !== "" && value !== "") {
                    this.$set(this.everyData["serviceVersions"], key, {key: key, value: value})
                    this.$set(this.addAServiceVersionCanche, key, {key: key, value: value})
                    this.$delete(this.everyData["serviceVersions"], "")
                }
            },
            addServiceVersion(){
                this.$set(this.everyData["serviceVersions"], "", {key: "", value: ""})
            },
            saveServiceVersion(){
                if(this.serverType === "" || this.serverType === undefined){
                    this.$message.error("ServerType must not be null");
                }else {
                    if(this.type === "" || this.type === undefined){
                        this.type = "default"
                    }
                    this.$delete(this.everyData["serviceVersions"], "")
                    this.everyData["serverType"] = this.serverType
                    this.everyData["type"] = this.type
                    this.everyData["serviceLength"] = Object.keys(this.everyData["serviceVersions"]).length
                    let containService = true
                    if(this.everyData["_id"] === undefined){
                        this.everyData["_id"] = this.uuid()
                        containService = false
                    }
                    SaveServiceVersion(this.everyData)
                        .then(resp => {
                            this.$message.success("Success!")
                            if(!containService){
                                this.tableData.push({
                                    "serverType": this.everyData["serverType"],
                                     "type":this.everyData["type"],
                                     "serviceVersions": this.everyData["serviceVersions"],
                                    "_id": this.everyData["_id"],
                                    "serviceLength": this.everyData["serviceLength"]
                                })
                            }
                            this.removeAServiceVersionCanche = {}
                            this.addAServiceVersionCanche = {}
                            this.serviceVersionDialogVisible = false
                            this.everyData = {}
                        })
                        .catch(err => {
                            this.$message.error(err);
                        })
                }
            },
            newServiceVersion(){
                this.openServiceVersionDialog()
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
                this.index = -1
                this.serviceVersionId=""
            },
            openDeleteServiceVersionDialog(index, data){
                this.deleteServiceVersionVisible = true
                this.index = index
                this.serviceVersionId = data["_id"]
            },
            sureDelete(){
                this.deleteServiceVersionVisible = false
                RemoveServiceVersion(this.serviceVersionId)
                    .then(resp => {
                        this.$message.success("Success!")
                        this.tableData.splice(this.index, 1)
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
                everyData: {},
                tableData: [],
                removeAServiceVersionCanche:[],
                addAServiceVersionCanche:[],
                serverType:"",
                type:"",
                serviceVersionId:"",
                index:-1
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
        }
    }
</script>