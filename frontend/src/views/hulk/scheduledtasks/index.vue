<template>
    <el-container>
        <el-main>
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
                            prop="nextFireTime"
                            label="Next execution time"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="server"
                            label="Server"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="reason"
                            label="Reason"
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
                tableData: []
            }
        },
        created() {
            GetAllScheduletasks()
                .then(resp => {
                    this.$message.success("Reload scheduletasks success!")
                    this.tableData = resp
                })
                .catch(err => {
                    this.$message.error(err);
                })
        }
    }
</script>