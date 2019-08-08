package com.dobybros.hulkadmin.utils

import com.alibaba.fastjson.JSONObject
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm

/**
 * Created by lick on 2019/6/27.
 * Description：
 */
class JWTUtils {
    public static final String secretkey = "hulkadminacl123456"
    public static String createToken(String account, Long expireTime) throws Exception {
        Map<String, Object> map = new HashMap<>();
        map.put("alg", "HS256");
        map.put("typ", "JWT");
        JSONObject jsonObject = new JSONObject()
        jsonObject.put("account", account)
        String token = Jwts.builder().setHeader(map)
                        .setClaims(jsonObject)
                        .setIssuedAt(new Date())
                        .setExpiration(new Date(System.currentTimeMillis() + expireTime))
                        .signWith(SignatureAlgorithm.HS256, secretkey)
                        .compact()
        return token
    }
}
