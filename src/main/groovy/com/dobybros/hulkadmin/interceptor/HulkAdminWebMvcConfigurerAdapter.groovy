package com.dobybros.hulkadmin.interceptor

import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Component
import org.springframework.web.servlet.config.annotation.InterceptorRegistry
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter

/**
 * Created by lick on 2019/6/28.
 * Description：
 */
@Configuration
class HulkAdminWebMvcConfigurerAdapter extends WebMvcConfigurerAdapter{
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new HulkAdminHandlerInterceptor())
                .addPathPatterns("/**").excludePathPatterns("/open/**");
        super.addInterceptors(registry);
    }

}
