package org.example.estorebackend.service;
import org.example.estorebackend.model.User;
import org.example.estorebackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class AuthServiceImpl implements AuthService {
    @Autowired
    UserRepository userRepository;

    // Simulated database (replace this with actual database logic)
    private static final Map<String, String> userCredentials = new HashMap<>();

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
}
