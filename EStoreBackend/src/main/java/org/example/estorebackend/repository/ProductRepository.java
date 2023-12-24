package org.example.estorebackend.repository;

import org.example.estorebackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository <Product, Long> {
    Product getProductById(Long id);

    List<Product> getProductsByCategory(String category);
}

