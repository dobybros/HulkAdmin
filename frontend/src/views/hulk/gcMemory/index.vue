<template>
    <div>
        <el-container>
            <div class="block">
                <el-cascader style="width: 500px"
                             v-model="value"
                             :options="options"
                             @change="handleChange"></el-cascader>
            </div>
        </el-container>
        <el-container v-show="showGws" style="width: 80%">
            <el-table
                    :data="tableData"
                    border
                    style="width: 70%"
                    height="200px">
                <el-table-column
                        prop="userId"
                        label="userId"
                        width="400">
                </el-table-column>
                <el-table-column
                        prop="service"
                        label="service"
                        width="400">
                </el-table-column>
                <el-table-column
                        label="Operations"
                        width="400">
                    <template slot-scope="scope">
                        <el-button
                                @click="deleteUser(scope.row)"
                                type="danger"
                                size="medium">
                            Destroy onlineUser
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-container>
        <el-container style="height: 700px;max-width: 1600px ;overflow-y: scroll;overflow-x: scroll;">
            <el-row>
                <el-button @click="refreshMemory">
                    <i class="el-icon-refresh"></i>
                </el-button>
            </el-row>
            <el-row style="margin-top: 5px">
                <pre style="font-family: Courier">{{memoryData}}</pre>
            </el-row>

        </el-container>
    </div>
</template>
<script>
    import {GetGroovyCloud, GetGroovyCloudData, DeleteGwsUser} from "@api/deploy.api";

    export default {
        data() {
            return {
                value: [],
                options: [],
                memoryData: [],
                showGws: false,
                tableData: []
            };
        },//{"key":1,"value":1}, {"key":1,"value":1}, {"key":1,"value":1}, {"key":1,"value":1}
        methods: {
            handleChange() {
                GetGroovyCloudData(this.value)
                    .then(resp => {
                        this.$message.success("Updated!")
                        this.memoryData = resp.data
                        if (resp.tableList !== undefined) {
                            this.tableData = resp.tableList
                            this.showGws = true
                        } else {
                            this.tableData = []
                            this.showGws = false
                        }
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            refreshMemory(){
                GetGroovyCloudData(this.value)
                    .then(resp => {
                        this.$message.success("Updated!")
                        this.memoryData = resp.data
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            deleteUser(userId) {
                DeleteGwsUser(this.value, userId.userId)
                    .then(resp => {
                        this.$message.success("Delete onlineUser  " + userId.userId + "  success!")
                        this.memoryData = resp.data
                        if (resp.tableList !== undefined) {
                            this.tableData = resp.tableList
                            this.showGws = true
                        } else {
                            this.tableData = []
                            this.showGws = false
                        }
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            }
        },
        created() {
            GetGroovyCloud()
                .then(resp => {
                    this.options = resp
                })
                .catch(err => {
                    this.$message.error(err);
                })
        }
    };
</script>