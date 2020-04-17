<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="9">
                    <el-button type="primary" round @click="sureAddbaseJars">{{$t("views.deploy.AddBaseJars")}}
                    </el-button>
                </el-col>
            </el-row>
            <div>
                <el-table
                        :data="tableData"
                        style="width: 100%;"
                        row-key="serviceName"
                        height="700px"
                        border>
                    <el-table-column
                            prop="serverType"
                            label="serverType"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="ip"
                            label="ip"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="dockerName"
                            label="dockerName">
                    </el-table-column>
                    <el-table-column
                            prop="server"
                            label="server">
                    </el-table-column>
                    <el-table-column
                            prop="time"
                            label="reloadTime">
                    </el-table-column>
                    <el-table-column
                            label="Operations">
                        <template slot-scope="scope">
                            <el-button
                                    @click.native.prevent="dialogReload(scope.row)"
                                    type="primary"
                                    size="medium">
                                {{$t("views.deploy.reload")}}
                            </el-button>
                            <el-button
                                    @click.native.prevent="dialogDelete(scope.row)"
                                    type="danger"
                                    size="medium">
                                Delete In Database
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-main>
        <el-dialog
                :title="$t('views.deploy.reminder')"
                :visible.sync="deleteSureReloadContainer"
                width="30%">
            <span>{{this.remindNginx}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelReload">{{$t("views.deploy.cancel")}}</el-button>
                <el-button type="primary" @click="reload">{{$t("views.deploy.sure")}}</el-button>
             </span>
        </el-dialog>
        <el-dialog
                :title="$t('views.deploy.reminder')"
                :visible.sync="deleteSureDeleteContainer"
                width="30%">
            <span>{{this.reminddelete}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelDelete">{{$t("views.deploy.cancel")}}</el-button>
                <el-button type="danger" @click="deleteContainer">{{$t("views.deploy.delete")}}</el-button>
             </span>
        </el-dialog>
        <el-dialog
                :visible.sync="addbaseJars"
                width="50%"
        >
            <el-row>
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Select
                    All
                </el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </el-row>
            <span slot="footer" class="dialog-footer">
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
                    </el-upload>
                        <el-button style="margin-left: 200px" size="medium" @click="cancelbaseJars">{{$t("views.deploy.cancel")}}</el-button>
                </span>
  </span>
        </el-dialog>
    </el-container>
</template>
<script>
    import {GetAllContainer, ReloadContainer, DeleteContainer, GetServerIps, UploadAllJars} from "@api/deploy.api";

    export default {
        data() {
            return {
                tableData: [],
                deleteSureReloadContainer: false,
                deleteSureDeleteContainer: false,
                addbaseJars: false,
                remindNginx: '',
                data: {},
                deleteData: {},
                reminddelete: '',
                checkAll: false,
                checkedCities: [],
                cities: [],
                isIndeterminate: true,
                fileList: [],
                uploadUrl: '/open/basejars'
            }
        },
        methods: {
            reload() {
                ReloadContainer(this.data)
                    .then(resp => {
                        this.$message.success("Reload Success!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
                this.deleteSureReloadContainer = false
                this.data = {}
                this.remindNginx = ''
            },
            dialogReload(data) {
                this.remindNginx = 'Confirm reload container? serverType: ' + data.serverType + '  , dockerName: ' + data.dockerName
                this.deleteSureReloadContainer = true
                this.data = data
            },
            cancelReload() {
                this.deleteSureReloadContainer = false
                this.data = {}
                this.remindNginx = ''
            },
            sureAddbaseJars() {
                this.fileList = []
                GetServerIps()
                    .then(resp => {
                        this.cities = resp
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
                this.addbaseJars = true
            },
            cancelbaseJars() {
                this.addbaseJars = false
                this.fileList = []
                this.checkedCities = []
                this.checkAll = false
            },
            handleCheckAllChange(val) {
                this.checkedCities = val ? this.cities : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            submitUpload() {
                if (this.$refs.upload.uploadFiles.length > 0) {
                    if (this.checkedCities.length > 0) {
                        this.$refs.upload.submit();
                    } else {
                        this.$message.error('Please select server ip!');
                    }
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
                    this.uploadAllJars()
                }
            },
            uploadAllJars() {
                UploadAllJars()
                    .then(resp => {
                        this.$message.success("Upload all container Success!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
                this.fileList = []
                this.checkedCities = []
                this.checkAll = false
            },
            deleteContainer() {
                DeleteContainer(this.deleteData.server)
                    .then(resp => {
                        for (let i = 0; i < this.tableData.length; i++) {
                            let theData = this.tableData[i]
                            if (theData["server"] === this.deleteData.server) {
                                this.tableData.splice(i, 1)
                            }
                        }
                        this.deleteSureDeleteContainer = false
                        this.deleteData = {}
                        this.reminddelete = ''
                        this.$message.success("Delete container Success!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            dialogDelete(data) {
                this.reminddelete = 'Confirm delete container? serverType: ' + data.serverType + '  , dockerName: ' + data.dockerName,
                    this.deleteData = data
                this.deleteSureDeleteContainer = true
            },
            cancelDelete() {
                this.deleteSureDeleteContainer = false
                this.deleteData = {}
                this.reminddelete = ''
            }
        },
        created() {
            GetAllContainer()
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
                let param = uploadHost + this.uploadUrl + "?i=" + this.checkedCities
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