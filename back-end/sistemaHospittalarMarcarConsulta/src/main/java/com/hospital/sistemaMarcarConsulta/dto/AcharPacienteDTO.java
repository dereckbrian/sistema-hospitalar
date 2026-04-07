package com.hospital.sistemaMarcarConsulta.dto;

import com.hospital.sistemaMarcarConsulta.entity.Pacientes;

public record AcharPacienteDTO(String cpf) {

    public AcharPacienteDTO(Pacientes pacientes){
        this(
          pacientes.getCpf()
        );
    }
}
