package com.hospital.sistemaMarcarConsulta.dto;

import com.hospital.sistemaMarcarConsulta.entity.Endereco;
import com.hospital.sistemaMarcarConsulta.entity.Pacientes;
import com.hospital.sistemaMarcarConsulta.enums.Genero;

import java.util.Date;

public record CadastroPacienteDTO(
        String nome,
        String email,
        Genero genero,
        String dataNascimento,
        String telefone,
        String nomePai,
        String nomeMae,
        String cpf,
        double peso,
        String medicoConsulta,
        Date dataConsulta,
        Endereco endereco
) {
    public CadastroPacienteDTO(Pacientes pacientes){
        this(
          pacientes.getNome(),
          pacientes.getEmail(),
          pacientes.getGenero(),
          pacientes.getDataNascimento(),
          pacientes.getTelefone(),
          pacientes.getNomePai(),
          pacientes.getNomeMae(),
          pacientes.getCpf(),
          pacientes.getPeso(),
          pacientes.getMedicoConsulta(),
          pacientes.getDataConsulta(),
          pacientes.getEndereco()
        );
    }
}
