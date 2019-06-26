<template>
    <el-main>
        <el-row>
            <el-col :span="13"><div class="grid-content bg-purple-dark font-style" style="">Server</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <span class="font-style">ServerName</span>
            </el-col>
            <el-col :span="7">
                <span class="font-style">Version</span>
            </el-col>
        </el-row>
        <el-row v-for="server in this.servers">
            <el-col :span="10">
                <el-input v-model="server.serviceName" clearable></el-input>
            </el-col>
            <el-col :span="13">
                <el-select  v-model="server.currentVersion" @click.native="getServerVersions(server.serviceName)" placeholder="Select version">
                    <el-option
                            v-for="version in server.versions"
                            :key="version"
                            :label="version"
                            :value="version">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row>
            <el-col><el-button type="primary" icon="el-icon-plus" round @click="addServer"></el-button></el-col>
        </el-row>
        <el-row>
            <el-col :span="13"><div class="grid-content bg-purple-dark font-style" style="">Web</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                <span class="font-style">WebName</span>
            </el-col>
            <el-col :span="7">
                <span class="font-style">Version</span>
            </el-col>
        </el-row>
        <el-row v-for="web in this.webs">
            <el-col :span="10">
                <el-input v-model="web.webName" clearable></el-input>
            </el-col>
            <el-col :span="14">
                <el-select v-model="web.currentVersion" @click.native="getWebVersions(web.webName)" placeholder="Select version">
                    <el-option
                            v-for="version in web.versions"
                            :key="version"
                            :label="version"
                            :value="version">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row>
            <el-col><el-button type="primary" icon="el-icon-plus" round @click="addWeb"></el-button></el-col>
        </el-row>
        <el-row>
            <el-col :span="10" :offset="5"><el-button type="primary" round @click="reload">Reload Nginx</el-button></el-col>
        </el-row>
    </el-main>
</template>
<script>
    import {GetAllServerWebs, ReloadNginx, GetServerVersions, GetWebVersions} from "@api/deploy.api";
    export default {
        data() {
            return {
                servers:[],
                webs:[]
            }
        },
        methods:{
            reload(){
                ReloadNginx({"servers": this.servers, "webs": this.webs})
                    .then(resp => {
                        this.$message.success("Success!")
                    })
                    .catch(err => {
                        this.$message.error(err);
                    })
            },
            addServer(){
                this.servers.push({"currentVersion":"","serviceName":"","versions":[]})
            },
            addWeb(){
                this.webs.push({"currentVersion":"","webName":"","versions":[]})
            },
            getServerVersions(serviceName){
                if(serviceName === undefined || serviceName === ''){
                    this.$message.error('Please input service name');
                }else {
                    GetServerVersions(serviceName)
                        .then(resp => {
                            this.$message.success("Success!")
                            for (let i=0;i < this.servers.length; i++){
                                if(this.servers[i]["serviceName"] === serviceName){
                                    this.servers[i]["versions"] = resp
                                }
                            }
                        })
                        .catch(err => {
                            this.$message.error(err);
                        })
                }
            },
            getWebVersions(webName){
                if(webName === undefined || webName === ''){
                    this.$message.error('Please input web name');
                }else {
                    GetWebVersions(webName)
                        .then(resp => {
                            this.$message.success("Success!")
                            for (let i=0;i < this.webs.length; i++){
                                if(this.webs[i]["webName"] === webName){
                                    this.webs[i]["versions"] = resp
                                }
                            }
                        })
                        .catch(err => {
                            this.$message.error(err);
                        })
                }
            }
        },
        created() {
            GetAllServerWebs()
                .then(resp => {
                    this.$message.success("Updated!")
                    this.servers = resp["servers"]
                    this.webs = resp["webs"]
                })
                .catch(err => {
                    this.$message.error(err);
                })
        },
        computed: {
            currentVersion(data){
                let currentVersion = data["currentVersion"]
                return currentVersion
            }
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
    .font-style{
        font-family: 微软雅黑;
    }
</style>