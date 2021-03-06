package com.dobybros.hulkadmin.utils

import chat.logs.LoggerEx
import com.dobybros.hulkadmin.general.Logger
import com.jcraft.jsch.Channel
import com.jcraft.jsch.ChannelExec
import com.jcraft.jsch.ChannelSftp
import com.jcraft.jsch.JSch
import com.jcraft.jsch.JSchException
import com.jcraft.jsch.Session
import com.jcraft.jsch.SftpException

/**
 * Created by lick on 2019/6/23.
 * Description：
 */
class SftpClient {
    ChannelSftp sftp = null;
    Session session = null
    public static final String SFTP_PROTOCAL = "sftp";
    private final String TAG = SftpClient.class.getSimpleName()

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
            sftp.connect(50000);
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
            if (!file.exists()) {
                file.createNewFile()
            }
            sftp.get(srcfile, new FileOutputStream(file));
        } catch (Exception e) {
            e.printStackTrace()
            Logger.error(TAG, "download err, srcPath: ${srcPath} errMsg: ${e.getMessage()}")
        }finally{
//            close()
        }
    }
    public InputStream download(String srcPath) {
        try {
            return sftp.get(srcPath);
        } catch (Exception e) {
            e.printStackTrace()
            Logger.error(TAG, "Download err, srcPath: ${srcPath} errMsg: ${e.getMessage()}")
        }finally{
//            close()
        }
        return null
    }
    public void upload(String srcFile, String dest) {
        try {
            sftp.put(srcFile, dest);
        } catch (Exception e) {
            e.printStackTrace();
            Logger.error(TAG, "Upload err, srcFile: ${srcFile} dest: ${dest} errMsg: ${e.getMessage()}")
        }finally{
            close()
        }
    }

    public void uploadByStream(String directory, String sftpFileName, InputStream inputStream) {
        try {
            sftp.cd(directory);
            sftp.put(inputStream, sftpFileName);
        }catch (Exception e) {
            e.printStackTrace();
            Logger.error(TAG, "Upload byStream err, directory: ${directory} fileName: ${sftpFileName} errMsg: ${e.getMessage()}")
        }finally{
            close()
        }
    }

    public void close() {
        if (sftp != null) {
            sftp.disconnect()
        }
        if (session != null) {
            session.disconnect()
        }
    }
}
