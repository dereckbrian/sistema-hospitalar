package com.hospital.sistemaMarcarConsulta.repository;

import com.hospital.sistemaMarcarConsulta.entity.Funcionarios;
import com.hospital.sistemaMarcarConsulta.entity.Pacientes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PacienteRepository extends JpaRepository<Pacientes, String> {
    Optional<Pacientes> findByCpf(String cpf);
}
