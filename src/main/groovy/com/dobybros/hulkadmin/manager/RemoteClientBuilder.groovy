package com.dobybros.hulkadmin.manager

import com.dobybros.hulkadmin.utils.SftpClient
import com.dobybros.hulkadmin.utils.ShellClient
import org.springframework.stereotype.Component

/**
 * Created by lick on 2020/6/5.
 * Description：
 */
@Component
class RemoteClientBuilder {
    public ShellClient buildShellClient(String host, String userName, String password, int port){
        return new ShellClient(host, userName, password, port)
    }

    public SftpClient buildSftpClient(String host, String username, String password, int port){
        return new SftpClient(host, username, password, port)
    }
}
