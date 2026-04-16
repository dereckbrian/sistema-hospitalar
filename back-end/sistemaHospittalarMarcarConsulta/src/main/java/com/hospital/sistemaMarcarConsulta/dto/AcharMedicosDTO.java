package com.hospital.sistemaMarcarConsulta.dto;

import com.hospital.sistemaMarcarConsulta.entity.Medicos;

public record AcharMedicosDTO(String cpf) {

    public AcharMedicosDTO(Medicos medicos){
        this(
          medicos.getCpf()
        );
    }
}
