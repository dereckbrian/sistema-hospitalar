package com.hospital.sistemaMarcarConsulta.dto;

import com.hospital.sistemaMarcarConsulta.entity.Endereco;
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
) {}
