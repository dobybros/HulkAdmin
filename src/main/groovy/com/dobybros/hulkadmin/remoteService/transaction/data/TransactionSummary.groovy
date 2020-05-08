package com.dobybros.hulkadmin.remoteService.transaction.data

/**
 * Created by wenqi on 2018/12/6
 */
class TransactionSummary {
    private Integer maxTry
    private Integer maxConfirm
    private Integer maxCancel

    TransactionSummary() {
    }

    TransactionSummary(Integer maxTry, Integer maxConfirm, Integer maxCancel) {
        this.maxTry = maxTry
        this.maxConfirm = maxConfirm
        this.maxCancel = maxCancel
    }

    Integer getMaxTry() {
        return maxTry
    }

    void setMaxTry(Integer maxTry) {
        this.maxTry = maxTry
    }

    Integer getMaxConfirm() {
        return maxConfirm
    }

    void setMaxConfirm(Integer maxConfirm) {
        this.maxConfirm = maxConfirm
    }

    Integer getMaxCancel() {
        return maxCancel
    }

    void setMaxCancel(Integer maxCancel) {
        this.maxCancel = maxCancel
    }
}
