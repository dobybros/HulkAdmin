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
}
