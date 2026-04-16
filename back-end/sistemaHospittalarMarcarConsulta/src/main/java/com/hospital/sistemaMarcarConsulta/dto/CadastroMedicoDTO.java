package com.hospital.sistemaMarcarConsulta.dto;

import com.hospital.sistemaMarcarConsulta.entity.Medicos;
import com.hospital.sistemaMarcarConsulta.enums.Especialidades;

public record CadastroMedicoDTO(
        String nome,
        String cpf,
        String crm,
        String dataNascimento,
        Especialidades especialidade,
        String email,
        String telefone
) {

    public CadastroMedicoDTO(Medicos medicos){
        this(
                medicos.getNome(),
                medicos.getCpf(),
                medicos.getCrm(),
                medicos.getDataNascimento(),
                medicos.getEspecialidade(),
                medicos.getEmail(),
                medicos.getTelefone()
        );
    }
}