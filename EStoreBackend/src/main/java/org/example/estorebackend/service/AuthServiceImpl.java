package org.example.estorebackend.service;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.example.estorebackend.model.User;
import org.example.estorebackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.*;
@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    UserRepository userRepository;

    // Simulated database (replace this with actual database logic)
    private static final Map<String, String> userCredentials = new HashMap<>();
    private static final long TOKEN_EXPIRATION_TIME = 86400000; // 24 hours in milliseconds
//    private static final String SECRET_KEY = "souravapplication";
    static {
        userCredentials.put("john", "password123"); // Replace with hashed password in production
        // Add more users as needed
    }

    @Override
    public User login(String username, String password) {
        // Simulated authentication logic (replace this with actual authentication logic)
        User user= userRepository.getUserByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
         return  null;
    }

    @Override
    public String generateToken(User user) {
        // You can customize the token signing process based on your requirements
        // Here's a basic example using JJWT library
        SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);
        return Jwts.builder()
                .setSubject(user.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + TOKEN_EXPIRATION_TIME))
                .signWith(secretKey)
                .compact();
    }
}
