package com.dobybros.hulkadmin.utils

import chat.logs.LoggerEx
import com.jcraft.jsch.Channel
import com.jcraft.jsch.ChannelExec
import com.jcraft.jsch.ChannelSftp
import com.jcraft.jsch.JSch
import com.jcraft.jsch.JSchException
import com.jcraft.jsch.Session

/**
 * Created by lick on 2019/6/23.
 * Description：
 */
class SftpClient {
    ChannelSftp sftp = null;
    Session session = null
    public static final String SFTP_PROTOCAL = "sftp";

    SftpClient(String host, String username, String password, int port) throws Exception {
        Channel channel = null;
        JSch jsch = new JSch();
        session = createSession(jsch, host, username, port);
        // 设置登陆主机的密码
        session.setPassword(password);
        // 设置登陆超时时间
        session.connect(15000);
        try {
            // 创建sftp通信通道
            sftp = session.openChannel(SFTP_PROTOCAL);
            sftp.connect(1000);
        } catch (JSchException e) {
            e.printStackTrace()
        }
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

    public void download(String srcPath, String srcfile, String saveFile) {
        try {
            sftp.cd(srcPath);
            File file = new File(saveFile);
            if(!file.exists()){
                file.createNewFile()
            }
            sftp.get(srcfile, new FileOutputStream(file));
        } catch (Exception e) {
            e.printStackTrace()
        }
    }
    public void upload(String srcFile, String dest) {
        try {
            sftp.put(srcFile, dest);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public void close(){
        if(sftp != null){
            sftp.disconnect()
        }
        if(exec != null){
            exec.disconnect()
        }
        if(session != null){
            session.disconnect()
        }
    }
}
