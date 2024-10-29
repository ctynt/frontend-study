package top.ctynt.product.api.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import top.ctynt.product.api.entity.Product;

/**
 * @Author ctynt
 * @Date 2024/10/29
 * @Description
 */
@Mapper
public interface ProductMapper extends BaseMapper<Product> {
}
