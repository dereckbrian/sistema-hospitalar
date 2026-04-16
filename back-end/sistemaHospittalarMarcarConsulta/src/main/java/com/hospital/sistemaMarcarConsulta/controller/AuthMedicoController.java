package com.hospital.sistemaMarcarConsulta.controller;

import com.hospital.sistemaMarcarConsulta.dto.AcharMedicosDTO;
import com.hospital.sistemaMarcarConsulta.dto.CadastroMedicoDTO;
import com.hospital.sistemaMarcarConsulta.sevice.MedicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/medico")
public class AuthMedicoController {

    @Autowired
    private MedicoService service;

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrarMedico(@RequestBody CadastroMedicoDTO body){
        service.cadastrarMedico(body);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/achar")
    public ResponseEntity<?> acharMedicos(@RequestBody AcharMedicosDTO body){
        service.acharMedicos(body);
        return ResponseEntity.ok().build();
    }
}
