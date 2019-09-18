package com.dobybros.hulkadmin.utils

import chat.logs.LoggerEx
import net.lingala.zip4j.core.ZipFile
import net.lingala.zip4j.exception.ZipException
import net.lingala.zip4j.model.ZipParameters
import net.lingala.zip4j.util.Zip4jConstants
import org.apache.commons.lang.StringUtils

import java.util.zip.ZipEntry
import java.util.zip.ZipOutputStream

/**
 * Created by lick on 2019/8/9.
 * Description：
 */
class FileUtils {
    private static final String TAG = FileUtils.class.getSimpleName()

    public static void zipFiles(String filePath, String descDir) throws IOException {
        ZipOutputStream zos = null;
        try {
            //创建一个zip输出流
            zos = new ZipOutputStream(new FileOutputStream(descDir));
            //启动压缩
            startZip(zos, "", filePath);
        } catch (FileNotFoundException e) {
            //压缩失败，则删除创建的文件
            File zipFile = new File(descDir);
            if (zipFile.exists()) {
                zipFile.delete();
            }
            e.printStackTrace();
        } finally {
            if (zos != null) {
                try {
                    zos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    private static void startZip(ZipOutputStream zos, String oppositePath,
                                 String filePath) throws IOException {
        File file = new File(filePath);
        if (file.isDirectory()) {//如果是压缩目录
            File[] files = file.listFiles();//列出所有目录
            for (int i = 0; i < files.length; i++) {
                File aFile = files[i];
                if (aFile.isDirectory()) {//如果是目录，修改相对地址
                    String newoppositePath = oppositePath + aFile.getName() + "/";
                    //压缩目录，这是关键，创建一个目录的条目时，需要在目录名后面加多一个"/"
                    ZipEntry entry = new ZipEntry(newoppositePath);
                    zos.putNextEntry(entry);
                    zos.closeEntry();
                    startZip(zos, newoppositePath, aFile.getPath());
                } else {//如果不是目录，则进行压缩
                    zipFile(zos, oppositePath, aFile);
                }
            }
        } else {//如果是压缩文件，直接调用压缩方法进行压缩
            zipFile(zos, oppositePath, file);
        }

    }
    private static void zipFile(ZipOutputStream zos, String oppositePath, File file) {
        //创建一个zip条目，每个zip条目都必须是相对于跟路径
        InputStream is=null;

        try {
            ZipEntry entry=new ZipEntry(oppositePath+file.getName());
            //将条目保存到zip压缩文件当中
            zos.putNextEntry(entry);
            //从文件输入流当中读取数据，并将数据写到输出流当中
            is=new FileInputStream(file);
            //====这种压缩速度很快
            int length=0;
            int bufferSize=1024;
            byte[] buffer=new byte[bufferSize];

            while((length=is.read(buffer, 0, bufferSize))>=0){
                zos.write(buffer, 0, length);
            }
            zos.closeEntry();
        } catch (IOException e) {
            e.printStackTrace();
        }finally{
            if(is!=null){
                try {
                    is.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
