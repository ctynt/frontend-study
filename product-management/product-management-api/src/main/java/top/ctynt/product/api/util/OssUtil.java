package top.ctynt.product.api.util;

import com.aliyun.oss.OSS;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import top.ctynt.product.api.config.OssConfig;

import java.io.InputStream;
import java.util.UUID;

/**
 * @Author ctynt
 * @Date 2024/9/23
 * @Description
 */
@Component
public class OssUtil {
    @Resource
    private OSS ossClient;

    @Resource
    private OssConfig ossConfig;

    public String uploadFile(MultipartFile file) {
        try {
            // 获取⽂件的原始名称
            String originalFilename = file.getOriginalFilename();
            if (originalFilename == null) {
                throw new IllegalArgumentException("⽂件名称不能为空");
            }
            // ⽣成唯⼀⽂件名，防⽌覆盖
            String fileName = UUID.randomUUID().toString() + "_" + originalFilename;
            // 获取⽂件输⼊流
            InputStream inputStream = file.getInputStream();
            // 上传⽂件到OSS
            ossClient.putObject(ossConfig.getBucketName(), fileName, inputStream);
            // 构建⽂件的URL路径
            return "https://" + ossConfig.getBucketName() + "." + ossConfig.getEndpoint().replace("https://", "") + "/" + fileName;
        } catch (Exception e) {
            throw new RuntimeException("⽂件上传失败", e);
        }
    }
}
