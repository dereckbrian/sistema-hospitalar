package com.hospital.sistemaMarcarConsulta.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.hospital.sistemaMarcarConsulta.enums.Especialidades;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Medicos")
public class Medicos {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @NotBlank
    private String nome;

    @NotBlank
    private String cpf;

    @NotBlank
    private String crm;

    @NotBlank
    private String dataNascimento;

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    @Enumerated(EnumType.STRING)
    @NotNull
    private Especialidades especialidade;

    @NotNull
    @Email
    private String email;

    @NotBlank
    private String telefone;

    private boolean ativo;
}
