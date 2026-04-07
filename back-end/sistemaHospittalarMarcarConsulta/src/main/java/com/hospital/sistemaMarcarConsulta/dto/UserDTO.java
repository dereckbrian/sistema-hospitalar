package com.hospital.sistemaMarcarConsulta.dto;

import com.hospital.sistemaMarcarConsulta.entity.Funcionarios;
import com.hospital.sistemaMarcarConsulta.enums.UserRole;

public record UserDTO(String email,
                      String nome,
                      String senha,
                      UserRole role) {

    public UserDTO(Funcionarios funcionarios){
        this(
                funcionarios.getEmail(),
                funcionarios.getNome(),
                funcionarios.getSenha(),
                funcionarios.getRole()
        );
    }
}
