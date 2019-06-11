package com.dobybros.hulkadmin.general;

public class GeneralException extends Exception{
    public Integer code = -1;

    public GeneralException(int code, String msg) {
        super(msg);
        this.code = code;
    }
}
