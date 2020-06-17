package com.dobybros.hulkadmin.aspects;

import com.dobybros.hulkadmin.general.GeneralException
import com.dobybros.hulkadmin.general.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class GeneralAspects {
    private final String TAG = GeneralAspects.class.getSimpleName()
    @Around(value = "execution(* com.dobybros.hulkadmin.controllers..*.*(..))) || execution(* com.dobybros.hulkadmin.interceptor..*.*(..)))")
    public Object around(ProceedingJoinPoint joinPoint) {
        Object result = null;
        Integer code = 1;
        String message = null;

        try {
            result = joinPoint.proceed();
        } catch (Throwable e) {
            e.printStackTrace();
            if (e instanceof GeneralException) {
                code = ((GeneralException) e).code;
            } else {
                code = -1;
            }
            message = e.getMessage();
        }
        Map<String, Object> response = new HashMap<>();
        response.put("code", code);
        if (code == 1) {
            if (result != null) {
                response.put("data", result);
            }
        } else {
            Logger.error(TAG, "Find some err, errMsg: ${message}")
            response.put("message", message);
        }
        return response;
    }
}
