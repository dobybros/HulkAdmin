package com.dobybros.hulkadmin.remoteService.discovery

import com.docker.storage.mongodb.CleanDocument
import org.bson.Document

/**
 * Created by lick on 2019/5/30.
 * Description：
 */
public class ServiceVersion{
    public static final String FIELD_SERVERTYPE = "serverType";
    public static final String FIELD_TYPE = "type";
    public static final String FIELD_SERVICEVERSIONS = "serviceVersions";
    public Document toUpdateDocument() {
        Document document = new CleanDocument();
        document.append(FIELD_SERVERTYPE, serverType)
                .append(FIELD_TYPE, type)
                .append(FIELD_SERVICEVERSIONS, serviceVersions);
        return document;
    }
    private List<String> serverType;
    private String type;
    private String _id
    private Document serviceVersions;
    List<String> getServerType() {
        return serverType
    }

    void setServerType(List<String> serverType) {
        this.serverType = serverType
    }

    Document getServiceVersions() {
        return serviceVersions
    }

    void setServiceVersions(Document serviceVersions) {
        this.serviceVersions = serviceVersions
    }

    String getType() {
        return type
    }

    void setType(String type) {
        this.type = type
    }

    String get_id() {
        return _id
    }

    void set_id(String _id) {
        this._id = _id
    }
}
