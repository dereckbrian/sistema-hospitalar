import axios, { type AxiosPromise } from "axios"

const API_URL = 'http://localhost:8080'

export const userCadastrarMedico = async (nome: String, cpf: string, crm: string, dataNascimento: String, especialidade: String, email: String, telefone: String) => {
    const response = await axios.post(`${API_URL}/medico/cadastrar`, {
        nome: nome,
        cpf: cpf,
        crm: crm,
        dataNascimento: dataNascimento,
        especialidade: especialidade,
        email: email,
        telefone: telefone
    });
    return response.data;
}