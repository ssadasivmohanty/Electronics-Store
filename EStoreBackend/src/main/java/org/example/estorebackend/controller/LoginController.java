package org.example.estorebackend.controller;

import org.example.estorebackend.model.User;
import org.example.estorebackend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/api/auth")
public class LoginController {

    private final AuthService authService;

    @Autowired
    public LoginController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        String password = credentials.get("password");
        User authenticatedUser = authService.login(username, password);
        if (authenticatedUser != null) {
            // Authentication successful
            return ResponseEntity.ok().body(Map.of("user", authenticatedUser, "status", 200));
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("status", 401));
        }
    }
}
