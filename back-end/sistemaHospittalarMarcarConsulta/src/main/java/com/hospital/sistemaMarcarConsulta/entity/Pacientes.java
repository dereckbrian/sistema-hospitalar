package com.hospital.sistemaMarcarConsulta.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.hospital.sistemaMarcarConsulta.enums.Genero;
import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "paciente")
public class Pacientes {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @NotBlank
    private String nome;

    @NotBlank
    @Email
    private String email;

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    @Enumerated(EnumType.STRING)
    @NotNull
    private Genero genero;

    @NotBlank
    private String dataNascimento;

    @NotBlank
    private String telefone;

    private String nomePai;

    @NotBlank
    private String nomeMae;

    @NotBlank
    private String cpf;

    @NotNull
    @Positive
    private Double peso;

    @NotBlank
    private String medicoConsulta;

    @NotNull
    @FutureOrPresent
    private Date dataConsulta;

    @NotNull
    @Valid
    private Endereco endereco;

}
