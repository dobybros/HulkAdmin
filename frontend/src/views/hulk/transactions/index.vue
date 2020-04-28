<template>
    <el-container>
        <el-main>
            <el-table
                    :data="transactionData"
                    stripe
                    height="700"
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="ID"
                        align="center">
                </el-table-column>
                <el-table-column
                        label="Status"
                        align="center">
                    <template slot-scope="scope">
                        <div v-if="scope.row.isCompleted">Completed</div>
                        <div v-if="!scope.row.isCompleted">Uncompleted</div>
                    </template>
                </el-table-column>
                <el-table-column
                        label="transactionCancels"
                        align="center">
                    <template slot-scope="scope">
                        <el-popover
                                placement="top-start"
                                width="200"
                                trigger="hover"
                                :content="toJsonString(scope.row.transactionCancels)">
                            <a slot="reference" style="cursor: pointer">TransactionCancels</a>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                        label="transactionConfirms"
                        align="center">
                    <template slot-scope="scope">
                        <el-popover
                                placement="top-start"
                                width="200"
                                trigger="hover"
                                :content="toJsonString(scope.row.transactionConfirms)">
                            <a slot="reference" style="cursor: pointer">transactionConfirms</a>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                        label="transactionResultNotify"
                        align="center">
                    <template slot-scope="scope">
                        <el-popover
                                placement="top-start"
                                width="200"
                                trigger="hover"
                                :content="toJsonString(scope.row.transactionResultNotify)">
                            <a slot="reference" style="cursor: pointer">transactionResultNotify</a>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                        label="transactionSummary"
                        align="center">
                    <template slot-scope="scope">
                        <el-popover
                                placement="top-start"
                                width="200"
                                trigger="hover"
                                :content="toJsonString(scope.row.transactionSummary)">
                            <a slot="reference" style="cursor: pointer">transactionSummary</a>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                        label="transactionTries"
                        align="center">
                    <template slot-scope="scope">
                        <el-popover
                                placement="top-start"
                                width="200"
                                trigger="hover"
                                :content="toJsonString(scope.row.transactionTries)">
                            <a slot="reference" style="cursor: pointer">transactionTries</a>
                        </el-popover>
                    </template>
                </el-table-column>
                <el-table-column
                        label="Operations"
                        align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" @click="toTransactionInfos(scope.row.id)">Transaction Infos
                        </el-button>
                        <el-button type="primary" @click="retryFailedTransaction(scope.row.id)">Retry</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog title="TransactionInfos" :visible.sync="dialogTableVisible" width="80%"
                       :before-close="handleClose">
                <el-row>
                    <el-button @click="allTransactionInfo" :class="{active : transactionInfoFilter.transactionType == ''}">All</el-button>
                    <el-button @click="currentTransactionInfo" :class="{active : transactionInfoFilter.transactionType != ''}">Current</el-button>
                </el-row>
                <el-table :data="transactionInfos"
                          :loading="transactionInfoLoading"
                          ref="transactionInfoTable"
                          stripe
                          @filter-change="handleOperationFilterChange">
                    <el-table-column property="transactionType" label="TransactionType"></el-table-column>
                    <el-table-column property="stage" label="Stage"
                                     columnKey="stage"
                                     :filters="transactionInfoStage"
                                     :filter-multiple="false">

                    </el-table-column>
                    <el-table-column property="step" label="Step"></el-table-column>
                    <el-table-column label="Status"
                                     columnKey="status"
                                     :filters="transactionInfoStatus"
                                     :filter-multiple="false">
                        <template slot-scope="scope">
                            <div v-if="scope.row.status == 0">Uncomplete</div>
                            <div v-if="scope.row.status == 1">Confirmed</div>
                            <div v-if="scope.row.status == 2">Canceled</div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="errorMessage" label="Error Message">
                    </el-table-column>
                    <el-table-column label="Execute Time">
                        <template slot-scope="scope">
                            <div>{{timeFormat(scope.row.executeTime)}}</div>
                        </template>
                    </el-table-column>
                    <el-table-column label="Info">
                        <template slot-scope="scope">
                            <el-popover
                                    placement="top-start"
                                    width="200"
                                    trigger="hover"
                                    :content="toJsonString(scope.row.info)">
                                <el-button slot="reference">Info</el-button>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column label="Operations">
                        <template slot-scope="scope">
                            <el-button type="primary" v-if="scope.row.status == 0"
                                       @click="retryFailedTransaction(transactionInfoFilter.transactionType, [scope.row.id])">
                                Retry
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: center;margin-top: 10px;">
                    <el-pagination
                            :page-size="transactionInfoPage.limit" @current-change="currentChange"
                            :current-page="transactionInfoPage.currentPage"
                            background
                            layout="prev, pager, next"
                            :total="transactionInfoPage.total">
                    </el-pagination>
                </div>
            </el-dialog>
        </el-main>
    </el-container>
</template>

<script>
    import {GetTransactions, GetTransactionInfos, RetryTransaction} from "@api/deploy.api";

    export default {
        name: "index",
        data() {
            return {
                transactionData: [],
                transactionInfos: [],
                dialogTableVisible: false,
                transactionInfoFilter: {
                    transactionType: '',
                    status: [0, 1, 2],
                    loadSize: true,
                    startTime: '',
                    endTime: '',
                    stage: ''
                },
                transactionInfoPage: {
                    total: 0,
                    currentPage: 1,
                    limit: 8
                },
                transactionInfoStatus: [
                    {
                        text: 'Uncomplete', value: 0
                    },
                    {
                        text: 'Confirmed', value: 1
                    },
                    {
                        text: 'Canceled', value: 2
                    }
                ],
                transactionInfoStage: [
                    {
                        text: 'TRY', value: 'TRY'
                    },
                    {
                        text: 'CANCEL', value: 'CANCEL'
                    },
                    {
                        text: 'CONFIRM', value: 'CONFIRM'
                    }
                ],
                transactionInfoLoading: false,
                currentTransaction: ''

            }
        },
        mounted() {
        },
        created() {
            GetTransactions().then(resp => {
                console.log(resp)
                this.transactionData = this.transactionDataAdaptor(resp)
            })
                .catch(err => {
                    this.$message.error(err);
                })
        },
        computed: {},
        methods: {
            toJsonString(json) {
                if (json) {
                    return JSON.stringify(json, null, 4)
                } else {
                    return ''
                }
            },
            handleClose() {
                this.$refs.transactionInfoTable.clearFilter();
                this.dialogTableVisible = false
            },
            initTransactionInfoFilter() {
                this.transactionInfoFilter.status = [0, 1, 2]
                this.transactionInfoFilter.stage = ''
                this.transactionInfoPage.currentPage = 1
            },
            transactionDataAdaptor(data) {
                let newTransactionData = []
                let keys = Object.keys(data)
                keys.forEach((key, index) => {
                    let item = data[key]
                    let tempItem = {
                        id: key
                    }
                    Object.assign(tempItem, item)
                    newTransactionData.push(tempItem)
                })
                return newTransactionData
            },
            retryFailedTransaction(transactiontype, ids) {
                var tips = ''
                if (ids) {
                    tips = 'Do you want to retry the current transaction'
                } else {
                    tips = 'Do you want to retry the current transaction group'
                }
                this.$confirm(tips, 'Tips', {
                    confirmButtonText: 'Done',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    RetryTransaction(transactiontype, ids).then(res => {
                        if (ids) {
                            this.refreshTransactionInfos()
                        }
                        this.$message.success('Successfully')
                    }).catch(err => {
                        this.$message.error(err);
                    })
                })

            },
            timeFormat(timeStamp) {
                if (!timeStamp) {
                    return ''
                }
                let year = new Date(timeStamp).getFullYear();
                let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1;
                let date = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
                let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp).getHours();
                let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes();
                let ss = new Date(timeStamp).getSeconds() < 10 ? "0" + new Date(timeStamp).getSeconds() : new Date(timeStamp).getSeconds();
                return year + "-" + month + "-" + date + " " + hh + ":" + mm + ":" + ss;
            },
            toTransactionInfos(id) {
                this.currentTransaction = id
                this.transactionInfoFilter.transactionType = id
                this.initTransactionInfoFilter();
                this.dialogTableVisible = true
                this.refreshTransactionInfos()
            },
            handleOperationFilterChange(filters) {
                this.transactionInfoPage.currentPage = 1
                var filters = this.getFilterInfo(filters)
                var row = filters[0].row
                var value = filters[0].value[0]
                if (row == 'stage') {
                    if (value)
                        this.transactionInfoFilter.stage = value
                    else
                        this.transactionInfoFilter.stage = ''
                } else if (row == 'status') {
                    if (value == undefined) {
                        this.transactionInfoFilter.status = [0, 1, 2]
                    } else {
                        this.transactionInfoFilter.status = [value]
                    }
                }

                this.refreshTransactionInfos()
            },
            currentChange(current) {
                this.transactionInfoPage.currentPage = current
                this.refreshTransactionInfos()
            },
            refreshTransactionInfos() {
                this.transactionInfoLoading = true
                GetTransactionInfos(this.transactionInfoFilter.transactionType, this.transactionInfoFilter.status, this.transactionInfoFilter.loadSize, (this.transactionInfoPage.currentPage - 1) * this.transactionInfoPage.limit, this.transactionInfoPage.limit, this.transactionInfoFilter.startTime, this.transactionInfoFilter.endTime, this.transactionInfoFilter.stage)
                    .then(res => {
                        this.transactionInfoLoading = false
                        this.transactionInfoPage.total = res.total
                        this.transactionInfos = res.otlist
                    })
                    .catch(err => {
                        this.transactionInfoLoading = false
                        this.$message.error(err);
                    })
            },
            getFilterInfo(filters) {
                //  console.log(filters)
                // console.log('筛选条件发生变化')
                let row = null
                let val = null
                // 拷贝filters的值。
                for (const i in filters) {
                    row = i // 保存 column-key的值，如果事先没有为column-key赋值，系统会自动生成一个唯一且恒定的名称
                    val = filters[i]
                }
                const filter = [{
                    row: row,
                    op: 'contains',
                    value: val
                }]
                // console.log(filter)
                return filter
            },
            allTransactionInfo(){
                this.transactionInfoFilter.transactionType = ''
                this.refreshTransactionInfos()
            },
            currentTransactionInfo() {
                this.transactionInfoFilter.transactionType = this.currentTransaction
                this.refreshTransactionInfos()
            }
        }
    }
</script>

<style scoped>
    .active{
        background-color: #409EFF;
        color: #FFFFFF;
    }
</style>