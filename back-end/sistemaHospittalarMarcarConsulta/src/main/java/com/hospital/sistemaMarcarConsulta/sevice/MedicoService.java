package com.hospital.sistemaMarcarConsulta.sevice;

import com.hospital.sistemaMarcarConsulta.dto.AcharMedicosDTO;
import com.hospital.sistemaMarcarConsulta.dto.CadastroMedicoDTO;
import com.hospital.sistemaMarcarConsulta.entity.Medicos;
import com.hospital.sistemaMarcarConsulta.repository.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MedicoService {

    @Autowired
    MedicoRepository repository;

    public CadastroMedicoDTO cadastrarMedico(CadastroMedicoDTO body){
        Medicos medico = new Medicos();

        medico.setNome(body.nome());
        medico.setCpf(body.cpf());
        medico.setCrm(body.crm());
        medico.setEmail(body.email());
        medico.setDataNascimento(body.dataNascimento());
        medico.setEspecialidade(body.especialidade());
        medico.setTelefone(body.telefone());
        medico.setAtivo(true);

        repository.save(medico);

        return new CadastroMedicoDTO(medico);
    }

    public AcharMedicosDTO acharMedicos(AcharMedicosDTO body){

        Optional<Medicos> cpfCerto = this.repository.findByCpf(body.cpf());

        if (cpfCerto.isEmpty()){
            throw new IllegalArgumentException("Medico não existe ou cpf incorreto");
        }

        Medicos medicos = cpfCerto.get();

        return new AcharMedicosDTO(medicos);
    }
}
