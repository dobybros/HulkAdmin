<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="6" style="margin-top: 5px;margin-bottom: 10px">
                    <el-input v-model="url" placeholder="Please enter url"></el-input>
                </el-col>
                <el-col :span="5" style="margin-top: 5px;margin-bottom: 10px">
                    <el-button type="success" @click="GetScheduletasks">Get</el-button>
                </el-col>
                <el-col :span="9">
                    <el-input v-model="count" disabled>
                        <template slot="prepend">count</template>
                    </el-input>
                </el-col>
            </el-row>
            <div>
                <el-table
                        :data="tableData"
                        style="width: 100%;"
                        height="550"
                        border>
                    <el-table-column
                            prop="taskId"
                            label="Id"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="state"
                            label="State"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="preFireTime"
                            label="Pre execution time"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="nextFireTime"
                            label="Next execution time"
                    >
                    </el-table-column>
                </el-table>
            </div>
        </el-main>
    </el-container>
</template>
<script>
    import {GetAllScheduletasks} from "@api/deploy.api";

    export default {
        data() {
            return {
                tableData: [],
                url: '',
                count: ''
            }
        },
        created() {

        },
        methods:{
            GetScheduletasks(){
                let protocol = ''
                let addr = ''
                let port = ''
                if(this.url === null || this.url === ''){
                    this.$message.error('url cant be null');
                    return;
                }else {
                    let urlSPlits = this.url.split(':');
                    if(urlSPlits.length === 3){
                        protocol = urlSPlits[0]
                        let addrs = urlSPlits[1]
                        addr = addrs.split('//')[1]
                        port = urlSPlits[2]
                    }else {
                        this.$message.error('url is invalid');
                        return;
                    }
                }
                GetAllScheduletasks(protocol, addr, port)
                    .then(resp => {
                        this.$message.success("Reload scheduletasks success!")
                        this.tableData= resp
                        if(resp == null){
                            this.count = 0
                        }else {
                            this.count = this.tableData.length
                        }
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            }
        }
    }
</script>