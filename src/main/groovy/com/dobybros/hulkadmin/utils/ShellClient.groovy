package com.dobybros.hulkadmin.utils

import com.jcraft.jsch.ChannelExec
import com.jcraft.jsch.JSch
import com.jcraft.jsch.Session

/**
 * Created by lick on 2019/6/23.
 * Description：
 */
class ShellClient {
    private String host
    private String userName
    private String password
    private int port
    ShellClient(String host, String userName, String password, int port) throws Exception {
       this.host = host
        this.userName = userName
        this.password = password
        this.port = port
    }
    private Session createSession(JSch jsch, String host, String username, int port) throws Exception {
        Session session = null;
        if (port <= 0) {
            // 连接服务器，采用默认端口
            session = jsch.getSession(username, host);
        } else {
            // 采用指定的端口连接服务器
            session = jsch.getSession(username, host, port);
        }
        // 如果服务器连接不上，则抛出异常
        if (session == null) {
            throw new Exception(host + "session is null");
        }
        // 设置第一次登陆的时候提示，可选值：(ask | yes | no)
        session.setConfig("StrictHostKeyChecking", "no");
        return session;
    }
    public def excuteCommand(String command){
        List list = new ArrayList()
        String execCmd = command
        def returnCode = 0
        JSch jsch = new JSch()

        Session session = createSession(jsch, host, userName, port)
        session.setPassword(password)
        session.connect(2000)

        ChannelExec channel = (ChannelExec)session.openChannel("exec")
        channel.setCommand(execCmd)
        channel.setInputStream(null)
        BufferedReader input = new BufferedReader(new InputStreamReader(channel.getInputStream()))
        channel.connect()

        String line
        while ((line = input.readLine())) {
            list.add(line)
        }
        try {
            input.close()
        } catch (Throwable e) {
            e.printStackTrace()
        }

        if (channel.isClosed()) {
            returnCode = channel.getExitStatus()
        }
        channel.disconnect()
        session.disconnect()
        return list
    }
}
