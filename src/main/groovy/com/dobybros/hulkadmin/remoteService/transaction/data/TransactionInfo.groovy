package com.dobybros.hulkadmin.remoteService.transaction.data

import com.docker.storage.mongodb.CleanDocument
import connectors.mongodb.annotations.DBDocument
import connectors.mongodb.annotations.DocumentField
import connectors.mongodb.codec.DataObject
import org.bson.Document

/**
 * Created by wenqi on 2018/12/12
 */
@DBDocument(collectionClass = "dts.db.TransactionCollection")
class TransactionInfo extends DataObject{
    public static final Integer STATUS_UNCOMPLETED = 0
    public static final Integer STATUS_CONFIRMED = 1
    public static final Integer STATUS_CANCELED = 2

    public static final String FIELD_TRANSACTIONTYPE = "transactionType"
    public static final String FIELD_SERVICE = "service"
    public static final String FIELD_STEP = "step"
    public static final String FIELD_STAGE = "stage"
    public static final String FIELD_INFO = "info"
    public static final String FIELD_STATUS = "status"
    public static final String FIELD_ERRORMESSAGE = "errorMsg"
    public static final String FIELD_ERRORCLASS = "errorClass"
    public static final String FIELD_ERRORCODE = "errorCode"
    public static final String FIELD_CREATETIME = "ctime"
    public static final String FIELD_EXECUTETIME = "etime"

    @DocumentField(key = "transactionType")
    private String transactionType

    @DocumentField(key = "service")
    private String service

    @DocumentField(key = "step")
    private Integer step

    @DocumentField(key = "stage")
    private String stage

    @DocumentField(key = "info")
    private Document info

    @DocumentField(key = "status")
    private Integer status

    @DocumentField(key = "errorMsg")
    private String errorMessage

    @DocumentField(key = "errorClass")
    private String errorClass

    @DocumentField(key = "errorCode")
    private Integer errorCode

    @DocumentField(key = "ctime")
    private Long createTime

    @DocumentField(key = "etime")
    private Long executeTime

    Document toDocument(){
        Document document = new CleanDocument()
        document.append(FIELD_TRANSACTIONTYPE, transactionType)
                .append(FIELD_SERVICE, service)
                .append(FIELD_STEP, step)
                .append(FIELD_STAGE, stage)
                .append(FIELD_INFO, info)
                .append(FIELD_STATUS, status)
                .append(FIELD_ERRORMESSAGE, errorMessage)
                .append(FIELD_ERRORCLASS, errorClass)
                .append(FIELD_ERRORCODE, errorCode)
                .append(FIELD_CREATETIME, createTime)
                .append(FIELD_EXECUTETIME, executeTime)
    }

    String getTransactionType() {
        return transactionType
    }

    void setTransactionType(String transactionType) {
        this.transactionType = transactionType
    }

    String getService() {
        return service
    }

    void setService(String service) {
        this.service = service
    }

    Integer getStep() {
        return step
    }

    void setStep(Integer step) {
        this.step = step
    }

    String getStage() {
        return stage
    }

    void setStage(String stage) {
        this.stage = stage
}

    Document getInfo() {
        return info
    }

    void setInfo(Document info) {
        this.info = info
    }

    Integer getStatus() {
        return status
    }

    void setStatus(Integer status) {
        this.status = status
    }

    String getErrorMessage() {
        return errorMessage
    }

    void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage
    }

    String getErrorClass() {
        return errorClass
    }

    void setErrorClass(String errorClass) {
        this.errorClass = errorClass
    }

    Integer getErrorCode() {
        return errorCode
    }

    void setErrorCode(Integer errorCode) {
        this.errorCode = errorCode
    }

    Long getCreateTime() {
        return createTime
    }

    void setCreateTime(Long createTime) {
        this.createTime = createTime
    }

    Long getExecuteTime() {
        return executeTime
    }

    void setExecuteTime(Long executeTime) {
        this.executeTime = executeTime
    }
}
