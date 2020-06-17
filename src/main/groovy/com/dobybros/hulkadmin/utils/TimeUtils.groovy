package com.dobybros.hulkadmin.utils

import java.text.SimpleDateFormat

/**
 * Created by lick on 2019/6/16.
 * Description：
 */
class TimeUtils {
    public static String getDateString(Long anyTime, String pattern) {
        if (anyTime != null) {
            Date time = new Date(anyTime);
            SimpleDateFormat format = new SimpleDateFormat(pattern);
            format.setTimeZone(TimeZone.getTimeZone("Asia/Shanghai"));
            String timeStr = format.format(time);
            return timeStr
        }
        return null
    }
    public static String getDateString(String anyTime, String pattern) {
        if (anyTime != null) {
            SimpleDateFormat format = new SimpleDateFormat(pattern);
            format.setTimeZone(TimeZone.getTimeZone("Asia/Shanghai"));
            Long time = format.parse(anyTime).getTime()
            return getDateString(time, "yyyy-MM-dd HH:mm:ss,SSS")
        }
        return null
    }
    public static getDateLong(String dateTime, String pattern){
        if(dateTime != null){
            SimpleDateFormat format = new SimpleDateFormat(pattern);
            format.setTimeZone(TimeZone.getTimeZone("Asia/Shanghai"));
            Date time = format.parse(dateTime)
            return time.getTime()
        }
    }
}
