package com.dobybros.hulkadmin.db

import com.dobybros.hulkadmin.data.DeployRecord
import com.docker.data.DataObject
import com.docker.storage.mongodb.BaseDAO
import org.bson.Document
import org.springframework.stereotype.Component

/**
 * Created by lick on 2020/6/3.
 * Description：
 */
class DeployRecordDao extends BaseDAO{
    public static final String COLLECTION = "deployrecords"
    public DeployRecordDao(){
        setCollectionName(COLLECTION)
    }

    @Override
    Class<? extends DataObject> getDataObjectClass(Document obj) {
        return DeployRecord.class
    }

    @Override
    Document[] getIndexes() {
        return new Document[0]
    }

    @Override
    Document getShardKeys() {
        return null
    }
}
