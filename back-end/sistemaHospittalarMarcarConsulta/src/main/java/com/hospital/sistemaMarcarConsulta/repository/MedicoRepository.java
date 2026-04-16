package com.hospital.sistemaMarcarConsulta.repository;

import com.hospital.sistemaMarcarConsulta.entity.Medicos;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MedicoRepository extends JpaRepository<Medicos, String> {
    Optional<Medicos> findByCpf(String cpf);
}
