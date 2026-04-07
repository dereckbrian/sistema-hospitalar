package com.hospital.sistemaMarcarConsulta.dto;

import com.hospital.sistemaMarcarConsulta.enums.UserRole;

public record UserDTO(String email,
                      String nome,
                      String senha,
                      UserRole role) {
}
