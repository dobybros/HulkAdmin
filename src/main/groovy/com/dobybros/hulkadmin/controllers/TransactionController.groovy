package com.dobybros.hulkadmin.controllers

import com.alibaba.fastjson.JSONObject
import com.dobybros.hulkadmin.remoteService.transaction.service.TransactionService
import com.docker.rpc.remote.stub.ServiceStubManager
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.PathVariable

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@RequestMapping("dts")
@CrossOrigin
@RestController
class TransactionController {
    private static final String TAG = TransactionController.class.getSimpleName()
    @Autowired
    ServiceStubManager serviceStubManager

    @GetMapping("transactions")
    def getTransactions() {
        TransactionService transactionService = serviceStubManager.getService(TransactionService.SERVICE, TransactionService.class)
        return transactionService.getTransactions()
    }

    //加载某个transaction下的事物信息
    @GetMapping('/transactioninfos')
    def getTransactionInfos(@RequestParam String transactiontype,
                            @RequestParam List<Integer> status,
                            @RequestParam Boolean loadSize,
                            @RequestParam Integer skip,
                            @RequestParam Integer size,
                            @RequestParam Long startTime,
                            @RequestParam Long endTime,
                            @RequestParam String stage,
                            @RequestParam String tid) {
        TransactionService transactionService = serviceStubManager.getService(TransactionService.SERVICE, TransactionService.class)
        return transactionService.getTransactionInfos(transactiontype, startTime, endTime, status, skip, size, loadSize, stage, tid)
    }
    @PostMapping('/transaction/{transactiontype}/retry')
    def retryTransaction(@PathVariable String transactiontype, @RequestBody List<String> ids) {
        try{
            TransactionService transactionService = serviceStubManager.getService(TransactionService.SERVICE, TransactionService.class)
            transactionService.retryFailedTansactions(transactiontype, ids)
        }catch(Throwable e) {
            e.printStackTrace()
        }
    }
}
