package top.ctynt.product.api.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;
import top.ctynt.product.api.entity.Product;
import top.ctynt.product.api.mapper.ProductMapper;
import top.ctynt.product.api.service.ProductService;

/**
 * @Author ctynt
 * @Date 2024/10/29
 * @Description
 */
@Service
public class ProductServiceImpl  extends ServiceImpl<ProductMapper, Product> implements ProductService {
}
