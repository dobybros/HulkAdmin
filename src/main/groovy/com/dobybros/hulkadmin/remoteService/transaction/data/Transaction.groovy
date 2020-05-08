package com.dobybros.hulkadmin.remoteService.transaction.data


/**
 * Created by wenqi on 2018/12/6
 */
class Transaction {
    private Boolean isCompleted
    private List<TransactionTry> transactionTries
    private List<TransactionConfirm> transactionConfirms
    private List<TransactionCancel> transactionCancels
    private TransactionSummary transactionSummary
    private TransactionResultNotify transactionResultNotify


    Transaction() {
        transactionTries = new ArrayList<>()
        transactionConfirms = new ArrayList<>()
        transactionCancels = new ArrayList<>()
        isCompleted = false
    }

    Boolean getIsCompleted() {
        return isCompleted
    }

    void setIsCompleted(Boolean isCompleted) {
        this.isCompleted = isCompleted
    }

    List<TransactionTry> getTransactionTries() {
        return transactionTries
    }

    void setTransactionTries(List<TransactionTry> transactionTries) {
        this.transactionTries = transactionTries
    }

    List<TransactionConfirm> getTransactionConfirms() {
        return transactionConfirms
    }

    void setTransactionConfirms(List<TransactionConfirm> transactionConfirms) {
        this.transactionConfirms = transactionConfirms
    }

    List<TransactionCancel> getTransactionCancels() {
        return transactionCancels
    }

    void setTransactionCancels(List<TransactionCancel> transactionCancels) {
        this.transactionCancels = transactionCancels
    }

    TransactionSummary getTransactionSummary() {
        return transactionSummary
    }

    void setTransactionSummary(TransactionSummary transactionSummary) {
        this.transactionSummary = transactionSummary
    }

    TransactionResultNotify getTransactionResultNotify() {
        return transactionResultNotify
    }

    void setTransactionResultNotify(TransactionResultNotify transactionResultNotify) {
        this.transactionResultNotify = transactionResultNotify
    }
}
