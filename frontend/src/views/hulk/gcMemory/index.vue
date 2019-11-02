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
        <el-container style="height: 700px;max-width: 1600px ;overflow-y: scroll;overflow-x: scroll;">
            <pre style="font-family: Courier">{{memoryData}}</pre>
        </el-container>
    </div>
</template>
<script>
    import {GetGroovyCloud, GetGroovyCloudData} from "@api/deploy.api";

    export default {
        data() {
            return {
                value: [],
                options: [],
                memoryData: []
            };
        },//{"key":1,"value":1}, {"key":1,"value":1}, {"key":1,"value":1}, {"key":1,"value":1}
        methods: {
            handleChange() {
                GetGroovyCloudData(this.value)
                    .then(resp => {
                        this.$message.success("Updated!")
                        this.memoryData = resp
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