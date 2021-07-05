package com.dobybros.hulkadmin.service.impl

import com.dobybros.hulkadmin.config.ApplicationConfig
import com.dobybros.hulkadmin.data.DeployRecord
import com.dobybros.hulkadmin.db.DeployRecordDao
import com.dobybros.hulkadmin.service.DeployRecordService
import com.docker.data.Lan
import com.docker.data.RepairData
import com.docker.storage.mongodb.MongoHelper
import com.mongodb.client.FindIterable
import com.mongodb.client.MongoCursor
import org.bson.Document
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component

/**
 * Created by lick on 2020/6/3.
 * Description：
 */
@Component
class DeployRecordServiceImpl implements DeployRecordService {
    @Autowired
    ApplicationConfig applicationConfig
    private DeployRecordDao deployRecordDao

    @Override
    void addDeployRecord(DeployRecord deployRecord) {
        getDeployRecordDao().add(deployRecord.toDocument())
    }

    @Override
    void updateDeployRecord(DeployRecord deployRecord) {
        getDeployRecordDao().updateOne(new Document(DeployRecord.FIELD_ID, deployRecord.id), deployRecord.toDocument(), false)
    }

    @Override
    void upateDeployRecordServer(String id, String server, String result) {
        server = server.replaceAll("\\.", "__")
        Document query = new Document(DeployRecord.FIELD_ID, id)
        Document update = new Document("\$set", new Document(DeployRecord.DEPLOY_ING_MAP + "." + server, result))
        getDeployRecordDao().updateOne(query, update, false)
    }

    @Override
    DeployRecord getDeployRecord(String id) {
        Document query = new Document(DeployRecord.FIELD_ID, id)
        return (DeployRecord)getDeployRecordDao().findOne(query)
    }

    @Override
    List<DeployRecord> getDeployRecords() {
        Document query = new Document();
        FindIterable<Document> iterable = getDeployRecordDao().query(query).limit(200);
        iterable.sort(new Document(DeployRecord.TIME, -1));
        MongoCursor<Document> cursor = iterable.iterator();
        List<DeployRecord> deployRecords = new ArrayList<>();
        while(cursor.hasNext()) {
            Document doc = cursor.next();
            DeployRecord deployRecord = new DeployRecord()
            deployRecord.fromDocument(doc);
            deployRecords.add(deployRecord);
        }
        return deployRecords;
    }

    private DeployRecordDao getDeployRecordDao() {
        if(deployRecordDao == null){
            MongoHelper helper = new MongoHelper();
            helper.setHost(applicationConfig.databaseHost);
            helper.setConnectionsPerHost(Integer.valueOf(applicationConfig.connectionsPerHost));
            helper.setDbName(applicationConfig.dockerStatusDBName);
            helper.setUsername(applicationConfig.mongoUserName);
            helper.setPassword(applicationConfig.mongoPassword);
            helper.init()
            deployRecordDao = new DeployRecordDao()
            deployRecordDao.setMongoHelper(helper)
            deployRecordDao.init()
        }
        return this.deployRecordDao
    }
}
