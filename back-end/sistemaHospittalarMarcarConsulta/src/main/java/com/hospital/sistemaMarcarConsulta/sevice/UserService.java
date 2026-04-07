package com.hospital.sistemaMarcarConsulta.sevice;

import com.hospital.sistemaMarcarConsulta.dto.UserDTO;
import com.hospital.sistemaMarcarConsulta.dto.UserLoginDTO;
import com.hospital.sistemaMarcarConsulta.entity.Funcionarios;
import com.hospital.sistemaMarcarConsulta.enums.UserRole;
import com.hospital.sistemaMarcarConsulta.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public ResponseEntity registrar(UserDTO body){

        if (body.senha() == null || body.senha().isEmpty()){
            return ResponseEntity.badRequest().build();
        }

        Funcionarios user = new Funcionarios();

        UserRole userRole = body.role();

        user.setNome(body.nome());
        user.setEmail(body.email());
        user.setRole(userRole);
        user.setSenha(body.senha());

        repository.save(user);

        return ResponseEntity.ok().build();

    }

    public UserDTO login(UserLoginDTO body){
        System.out.println("email é " +body.email());
        Funcionarios user = this.repository.findByEmail(body.email()).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if (body.senha().equals(user.getSenha())){
            return user;
        }

        return ResponseEntity.badRequest().build();
    }
}
