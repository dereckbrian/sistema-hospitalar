package com.hospital.sistemaMarcarConsulta.dto;
import com.hospital.sistemaMarcarConsulta.entity.Funcionarios;

public record UserLoginDTO(String email,
                           String senha) {
    public UserLoginDTO(Funcionarios funcionario) {
        // O "this" chama o construtor principal do record
        this(
                funcionario.getEmail(),
                funcionario.getSenha()
        );
    }
}
