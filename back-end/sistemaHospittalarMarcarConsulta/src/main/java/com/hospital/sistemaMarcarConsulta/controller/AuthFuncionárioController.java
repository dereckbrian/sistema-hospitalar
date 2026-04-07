package com.hospital.sistemaMarcarConsulta.controller;

import com.hospital.sistemaMarcarConsulta.dto.UserDTO;
import com.hospital.sistemaMarcarConsulta.dto.UserLoginDTO;
import com.hospital.sistemaMarcarConsulta.sevice.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthFuncionárioController {

    @Autowired
    private UserService service;
    
    @PostMapping("/registrar")
    public ResponseEntity registrar(@RequestBody UserDTO body){
        service.registrar(body);
        return ResponseEntity.ok(body.email());
    }

    @PostMapping("/login")
    public ResponseEntity login( @RequestBody UserLoginDTO body){
        service.login(body);
        return ResponseEntity.ok(body.email());
    }
}
