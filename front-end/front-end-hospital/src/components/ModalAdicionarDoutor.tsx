import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import axios from 'axios';
import { userCadastrarMedico } from '../hooks/userCadastrarMedico';
import toast, { Toaster } from 'react-hot-toast';

interface ModalProps {
    onClose: () => void; 
}

const estadoInicial = {
    nome: '',
    cpf: '',
    dataNascimento: '',
    crm: '',
    especialidade: '',
    email: '',
    telefone: '',
};

export default function ModalAdicionarDoutor({ onClose }: ModalProps) {
    
    const [formData, setFormData] = useState(estadoInicial);
    const[error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleCasdastrar = async (e: React.FormEvent<HTMLFormElement>) => {

        if (!formData.nome || !formData.cpf || !formData.especialidade || !formData.crm || !formData.dataNascimento || !formData.telefone || !formData.email) {
            toast.error('Por favor, preencha todos os campos obrigatórios!');
            return; 
        }

        e.preventDefault();
        setError('');
        setIsLoading(true);
        const toastId = toast.loading('Salvando médico...');

        try{
            const medicalData = await userCadastrarMedico(
                formData.nome, 
                formData.cpf, 
                formData.crm,            
                formData.dataNascimento,  
                formData.especialidade,   
                formData.email,           
                formData.telefone
            );

            toast.success('Médico cadastrado com sucesso!', { id: toastId }); 
            
            setFormData(estadoInicial);

            console.log("Medico cadastrado com sucesso!", medicalData);

        } catch (err) {
            toast.error('Erro ao cadastrar. Verifique os dados.', { id: toastId });
            console.error(err);
            
        } finally {
            setIsLoading(false);
        }
    
  }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

        <Toaster position="top-right" />
   
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                
                <h2 className="flex justify-center text-xl font-bold mb-4 text-gray-800">
                    Adicionar Novo Doutor
                </h2>
              
                <form onSubmit={handleCasdastrar} className="flex flex-col gap-5 pb-6">
                    
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm font-semibold text-gray-700">Nome Completo</label>
                        <input
                            required 
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Digite o nome completo" 
                            type="text" 
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 pl-4 pr-10 rounded-lg outline-none transition-colors border border-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm font-semibold text-gray-700">CPF</label>
                            <IMaskInput 
                                required
                                mask="000.000.000-00"
                                name="cpf"
                                value={formData.cpf}
                                onChange={handleChange}
                                placeholder="000.000.000-00" 
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 pl-4 pr-10 rounded-lg outline-none transition-colors focus:border-indigo-500 border border-transparent focus:ring-1 focus:ring-indigo-500 w-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm font-semibold text-gray-700">Data de Nascimento</label>
                            <input 
                                required
                                name="dataNascimento"
                                value={formData.dataNascimento}
                                onChange={handleChange}
                                type="date" 
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 pl-4 pr-10 rounded-lg outline-none transition-colors border border-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm font-semibold text-gray-700">CRM</label>
                            <IMaskInput 
                                required
                                mask="000000-aa"
                                prepare={(str) => str.toUpperCase()}
                                name="crm"
                                value={formData.crm}
                                onChange={handleChange}
                                placeholder="000000-UF" 
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 pl-4 pr-10 rounded-lg outline-none transition-colors border border-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm font-semibold text-gray-700">Especialidade</label>
                            <select 
                                required
                                name="especialidade"
                                value={formData.especialidade}
                                onChange={handleChange}
                                className="appearance-none cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 pl-4 pr-10 rounded-lg outline-none transition-colors border border-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full"
                            >
                                <option value="NEUROLOGISTA">Neurologista</option>
                                <option value="PSIQUIATRA">Psiquiatra</option>
                                <option value="DERMATOLOGISTA">Dermatologista</option>
                                <option value="PEDIATRA">Pediatra</option>
                                <option value="UROLOGISTA">Urologista</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm font-semibold text-gray-700">E-mail</label>
                            <input 
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="medico@hospital.com" 
                                type="email" 
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 pl-4 pr-10 rounded-lg outline-none transition-colors border border-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 text-sm font-semibold text-gray-700">Telefone</label>
                            <IMaskInput 
                                required
                                mask="(00) 00000-0000"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000" 
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 pl-4 pr-10 rounded-lg outline-none transition-colors border border-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-full"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center gap-3">
                        <button 
                            onClick={onClose}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors"
                        >
                            Cancelar
                        </button>
                        
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                        disabled={isLoading}
                        >
                            Salvar
                        </button>
                    </div>

                </form>

                

            </div>
        </div>
    );
}