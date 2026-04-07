package com.hospital.sistemaMarcarConsulta.sevice;

import com.hospital.sistemaMarcarConsulta.dto.AcharPacienteDTO;
import com.hospital.sistemaMarcarConsulta.dto.CadastroPacienteDTO;
import com.hospital.sistemaMarcarConsulta.entity.Pacientes;
import com.hospital.sistemaMarcarConsulta.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public class PacienteService {

    @Autowired
    PacienteRepository repository;

    public ResponseEntity cadastrarPaciente(CadastroPacienteDTO body){

        Pacientes paciente = new Pacientes();

        paciente.setNome(body.nome());
        paciente.setEmail(body.email());
        paciente.setGenero(body.genero());
        paciente.setDataNascimento(body.dataNascimento());
        paciente.setTelefone(body.telefone());
        paciente.setNomePai(body.nomePai());
        paciente.setNomeMae(body.nomeMae());
        paciente.setCpf(body.cpf());
        paciente.setPeso(body.peso());
        paciente.setMedicoConsulta(body.medicoConsulta());
        paciente.setDataConsulta(body.dataConsulta());
        paciente.setEndereco(body.endereco());

        repository.save(paciente);

        return ResponseEntity.ok().build();
    }

    public ResponseEntity acharPaciente(AcharPacienteDTO body){

        Optional<Pacientes> cpfCerto = this.repository.findByCpf(body.cpf());

        if (cpfCerto.isEmpty()){
            return ResponseEntity.badRequest().body("Usuário não existe ou cpf incorreto");
        }

        Pacientes pacientes = cpfCerto.get();

        return ResponseEntity.ok(pacientes);
    }
}
