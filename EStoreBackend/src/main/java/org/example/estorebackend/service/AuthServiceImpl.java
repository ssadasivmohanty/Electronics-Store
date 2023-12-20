package org.example.estorebackend.service;
import org.example.estorebackend.model.User;
import org.example.estorebackend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.*;
@Service
public class AuthServiceImpl implements AuthService {

    // Simulated database (replace this with actual database logic)
    private static final Map<String, String> userCredentials = new HashMap<>();

    static {
        userCredentials.put("john", "password123"); // Replace with hashed password in production
        // Add more users as needed
    }

    @Override
    public User login(String username, String password) {
        // Simulated authentication logic (replace this with actual authentication logic)

        System.out.println("AuthServImp-------------------------");
        if (userCredentials.containsKey(username) && userCredentials.get(username).equals(password)) {
            User user = new User();
            System.out.println(user);
            user.setUsername(username);
            return user;
        } else {
            return null; // Authentication failed
        }
    }
}
