package com.dobybros.hulkadmin.service

import com.dobybros.hulkadmin.data.DeployRecord

/**
 * Created by lick on 2020/6/3.
 * Description：
 */
interface DeployRecordService {
    public void addDeployRecord(DeployRecord deployRecord)

    public void updateDeployRecord(DeployRecord deployRecord)

    public void upateDeployRecordServer(String id, String server, String result)

    public DeployRecord getDeployRecord(String id)

    public List<DeployRecord> getDeployRecords()
}