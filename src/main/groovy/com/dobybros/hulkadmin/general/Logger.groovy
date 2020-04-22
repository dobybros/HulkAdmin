package com.dobybros.hulkadmin.general

import chat.utils.ChatUtils
import org.slf4j.LoggerFactory

/**
 * Created by lick on 2020/4/17.
 * Description：
 */
class Logger {
    final static org.slf4j.Logger log = LoggerFactory.getLogger("");
    public static void info(String tag,String message){
        log.info(getMessage(tag, message))
    }
    public static void error(String tag, String message){
        log.error(getMessage(tag, message))
    }
    public static void warn(String tag, String message){
        log.warn(getMessage(tag, message))
    }
    private static String getMessage(String tag, String message){
        StringBuilder builder = new StringBuilder();
        builder.append("\$\$time:: " + ChatUtils.dateString()).
                append(" \$\$tag:: " + tag).
                append(" [" + message + "]")
    }
}
