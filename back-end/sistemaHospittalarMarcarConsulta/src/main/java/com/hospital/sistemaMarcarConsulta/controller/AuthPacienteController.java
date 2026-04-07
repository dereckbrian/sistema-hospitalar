package com.hospital.sistemaMarcarConsulta.controller;

import com.hospital.sistemaMarcarConsulta.dto.AcharPacienteDTO;
import com.hospital.sistemaMarcarConsulta.dto.CadastroPacienteDTO;
import com.hospital.sistemaMarcarConsulta.entity.Pacientes;
import com.hospital.sistemaMarcarConsulta.sevice.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pacientes")
public class AuthPacienteController {

    @Autowired
    private PacienteService service;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrarPaciente(@RequestBody CadastroPacienteDTO body){
        service.cadastrarPaciente(body);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/buscar")
    public ResponseEntity<?> acharPaciente(@RequestBody AcharPacienteDTO body){
        service.acharPaciente(body);
        return ResponseEntity.ok(body);
    }
}
