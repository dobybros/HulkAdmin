package com.dobybros.hulkadmin.data

/**
 * Created by lick on 2020/6/1.
 * Description：
 */
class User {
    private String account
    private String passwd
    private Integer role

    String getAccount() {
        return account
    }

    void setAccount(String account) {
        this.account = account
    }

    String getPasswd() {
        return passwd
    }

    void setPasswd(String passwd) {
        this.passwd = passwd
    }

    Integer getRole() {
        return role
    }

    void setRole(Integer role) {
        this.role = role
    }
}
