package com.dobybros.hulkadmin.interceptor

import com.alibaba.fastjson.JSON
import com.dobybros.hulkadmin.utils.JWTUtils
import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts
import org.apache.commons.lang.StringUtils
import org.springframework.lang.Nullable
import org.springframework.web.servlet.HandlerInterceptor
import org.springframework.web.servlet.ModelAndView

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

/**
 * Created by lick on 2019/6/28.
 * Description：
 */
class HulkAdminHandlerInterceptor implements HandlerInterceptor {
    boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String url = request.getServletPath();
        if ("OPTIONS".equals(request.getMethod()) || pass(url)) {
            return true
        } else {
            String token = request.getHeader("X-Token")
            Map map = null
            if (StringUtils.isEmpty(token)) {
                map = new HashMap()
                map.put("code", 4001)
                map.put("message", "Token is null")
                response.setContentType("application/json");
                response.getOutputStream().write(JSON.toJSONString(map).getBytes("utf-8"))
                return false
            }

            try {
                final Claims claims = Jwts.parser().setSigningKey(JWTUtils.secretkey).parseClaimsJws(token).getBody();
                request.setAttribute("claims", claims);
            } catch (final Exception e) {
                map = new HashMap()
                map.put("code", 4001)
                map.put("message", "Token is expired")
                response.setContentType("application/json");
                response.getOutputStream().write(JSON.toJSONString(map).getBytes("utf-8"));
                return false
            }
            return true;
        }
    }

    void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable ModelAndView modelAndView) throws Exception {
    }

    void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable Exception ex) throws Exception {
    }
    private Boolean pass(String url){
        if(url.contains("css") || url.contains("js") || url.contains("icon") || url.contains("image") || url.contains("fonts") || url.contains("img") || url.contains("html") || url.contains("markdown") || url.contains("lib")){
            return true
        }
        return false
    }
}
