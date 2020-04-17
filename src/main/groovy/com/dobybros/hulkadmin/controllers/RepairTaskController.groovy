package com.dobybros.hulkadmin.controllers

import chat.json.Result
import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.utils.CommonStants
import com.dobybros.hulkadmin.utils.TimeUtils
import com.docker.data.RepairData
import com.docker.storage.adapters.impl.RepairServiceImpl
import com.docker.utils.ScriptHttpUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import script.groovy.servlet.annotation.PathVariable

@RequestMapping("repair")
@CrossOrigin
@RestController
class RepairTaskController {
    @Autowired
    ApplicationConfig applicationConfig
    @Autowired
    RepairServiceImpl repairService

    @GetMapping("/all")
    def getPage() {
        List<RepairData> repairDatas = repairService.getAllRepairDatas()
        return repairDatas
    }

    @PostMapping("/{id}")
    def repair(@org.springframework.web.bind.annotation.PathVariable String id) {
        RepairData repairData = repairService.getRepairData(id)
        if (repairData != null) {
            String url = repairData.getServerUri() + "/base/repair/" + id
            Map header = new HashMap()
            header.put("key", CommonStants.internalKey)
            Result result = ScriptHttpUtils.post(null, url, header, Result.class)
            if (result != null && result.success()) {
                repairData.setExecuteResult(result.getData() == null ? "null" : result.getData())
            } else {
                if(result != null){
                    repairData.setExecuteResult(result.toString())
                }
            }
            repairData.setLastExecuteTime(TimeUtils.getDateString(System.currentTimeMillis(), "yyyy-MM-dd HH:mm:ss"))
            repairService.updateRepairData(repairData)
        } else {
            throw new GeneralException(5000, "id's repairData can find")
        }
    }
}
