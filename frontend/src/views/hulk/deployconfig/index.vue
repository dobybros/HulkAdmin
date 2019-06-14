<template>
    <el-container>
        <el-main>
            <el-table
                    :data="tableData"
                    border
                    style="width: 70%"
                    max-height="2000">
                <el-table-column
                        prop="_id"
                        label="ServiceName"
                        width="300">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="Operations"
                        width="250">
                    <template slot-scope="scope">
                        <el-button type="text" size="medium" @click="dialogTableVisible">Edit</el-button>
                        <el-button
                                @click.native.prevent="deleteRow(scope.$index, tableData)"
                                type="text"
                                size="medium">
                            Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        <el-dialog title="config" :visible.sync="dialogFormVisible">
        <el-row>
            <el-col :span="6">
                <el-input v-model="form.name" clearable></el-input>
            </el-col >
            <el-col style="text-align: center; line-height: 40px" :span="1">=</el-col>
            <el-col :span="17">
                <el-input v-model="form.name" clearable></el-input>
            </el-col>
        </el-row>

        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">OK</el-button>
        </div>
    </el-dialog>
    </el-container>
</template>

<script>
    import {GetAllServerConfigs} from "@api/deploy.api";
    export default {
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            dialogTableVisible(){
                this.dialogFormVisible = true
            }
        },
        data() {
            return {
                tableData: [],
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
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