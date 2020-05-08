package com.dobybros.hulkadmin.remoteService.transaction.service

import com.dobybros.hulkadmin.remoteService.transaction.data.Transaction
import com.dobybros.hulkadmin.remoteService.transaction.data.TransactionInfo
import com.dobybros.hulkadmin.remoteService.transaction.data.TransactionResult

/**
 * Created by liujie on 2020/04/27
 */
interface TransactionService {
    String SERVICE = "distributetransaction"

    /***
     *
     * @param transactionType
     * @param info
     * @param transactionId transactionId
     * @return
     */
    public TransactionResult execute(String transactionType, def info, String transactionId)

    public TransactionInfo check(String transactionId)

    public Boolean deleteTransactionInfo(String transactionId)

    public def getTransactionInfos(String transactionType, Long startTime, Long endTime, List<Integer> status, Integer skip, Integer size, Boolean loadSize, String stage, String transactionInfoId)

    public void retryFailedTansactions(String transactiontype, List<String> ids)

    public Map<String, Transaction> getTransactions()
}
