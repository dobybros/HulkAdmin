package com.dobybros.hulkadmin.remoteService.transaction.data

/**
 * Created by wenqi on 2018/12/14
 */
class TransactionResult {
    public static final Integer SUCCESS = 1
    public static final Integer CANCEL = 10
    public static final Integer CANCELRETRY = 20
    public static final Integer CANCELD = 30
    public static final Integer CONFIRMRETRY = 50
    public static final Integer FAILED = 100
    private String transactionId
    private String stage
    private Integer step
    private String errorMsg
    private String errorClass
    private Integer errorCode
    private Integer status

    TransactionResult(){}

//    TransactionResult(String transactionId, String stage, Integer step, String errorMsg, String errorClass, Integer status) {
//        this.transactionId = transactionId
//        this.stage = stage
//        this.step = step
//        this.errorMsg = errorMsg
//        this.errorClass = errorClass
//        this.status = status
//    }

    String getTransactionId() {
        return transactionId
    }

    void setTransactionId(String transactionId) {
        this.transactionId = transactionId
    }

    String getStage() {
        return stage
    }

    void setStage(String stage) {
        this.stage = stage
    }

    Integer getStep() {
        return step
    }

    void setStep(Integer step) {
        this.step = step
    }

    String getErrorMsg() {
        return errorMsg
    }

    void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg
    }

    String getErrorClass() {
        return errorClass
    }

    void setErrorClass(String errorClass) {
        this.errorClass = errorClass
    }

    Integer getStatus() {
        return status
    }

    void setStatus(Integer status) {
        this.status = status
    }

    Integer getErrorCode() {
        return errorCode
    }

    void setErrorCode(Integer errorCode) {
        this.errorCode = errorCode
    }
//1 is success, 10 is in cancel, 20 is in cancel retry, 30 is canceled, 50 is in confirm retry, 100 is failed
}
