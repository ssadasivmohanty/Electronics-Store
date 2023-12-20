package org.example.estorebackend.service;

import org.example.estorebackend.model.User;

public interface AuthService {
    User login(String username, String password);
}
