package org.example.estorebackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String pName;
    private String category;
    private String pType;
    private String pBrand;
    private Double pPrice;
    private String pDescription;
    private String pImage;
    private String pStatus;
    private String pQuantity;
    private String pDiscount;
    private String pRating;
}
