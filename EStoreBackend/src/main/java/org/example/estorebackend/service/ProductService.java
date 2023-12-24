package org.example.estorebackend.service;

import org.example.estorebackend.model.Product;
import org.example.estorebackend.model.User;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();

    Product getProductById(Long id);

    Product createProduct(Product product);

    Product updateProduct(Long id, Product product);

    void deleteProduct(Long id);

    List<Product> getProductsByCategory(String category);
}
