package org.example.estorebackend.controller;


import org.example.estorebackend.model.Product;
import org.example.estorebackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private  final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {this.productService = productService; }

    //Define CRUD operations

    @GetMapping
    public List<Product> getAllProducts() {return productService.getAllProducts(); }


    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {return productService.getProductById(id);}

    @GetMapping("/category/{category}")
    public List<Product> getProductsByCategory(@PathVariable String category) {return productService.getProductsByCategory(category);}

    @PostMapping
    public Product createProduct(@RequestBody Product product) {return productService.createProduct(product);}

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {return productService.updateProduct(id, product); }


    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {productService.deleteProduct(id); }


}
