package com.hospital.sistemaMarcarConsulta.repository;

import com.hospital.sistemaMarcarConsulta.entity.Funcionarios;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Funcionarios, String> {
    Optional<Funcionarios> findByEmail(String email);
}
