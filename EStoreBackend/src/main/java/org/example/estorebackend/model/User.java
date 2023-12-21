package org.example.estorebackend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String user_type;
    private String phone;
    private String gender;
    private String dob;


    // Constructors, getters, setters
}