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

    public UserDTO registrar(UserDTO body){

        if (body.senha() == null || body.senha().isEmpty()){
            throw new IllegalArgumentException("Algo deu errado");
        }

        Funcionarios user = new Funcionarios();

        UserRole userRole = body.role();

        user.setNome(body.nome());
        user.setEmail(body.email());
        user.setRole(userRole);
        user.setSenha(body.senha());

        repository.save(user);

        return new UserDTO(user);

    }

    public UserLoginDTO login(UserLoginDTO body){
        Funcionarios user = this.repository.findByEmail(body.email()).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if (body.senha().equals(user.getSenha())){
            return new UserLoginDTO(user);
        }

        throw new IllegalArgumentException("E-mail ou senha invalidos");
    }
}
