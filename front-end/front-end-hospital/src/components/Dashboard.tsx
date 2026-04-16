import { useState } from "react";
import ModalAdicionarDoutor from "./ModalAdicionarDoutor";

export const Dashboard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div>
            <h1 className="text-2xl font-bold pl-6 pt-6">Visão Geral</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 pl-6 pt-4 gap-4">

                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 shadow-lg rounded-lg border border-transparent dark:border-gray-700 transition-colors">
                    <h2 className="text-xl font-bold">Total de Doutores</h2>
                    <p className="text-lg p-1 text-gray-700 dark:text-gray-300">
                        Sla 2
                    </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 shadow-lg rounded-lg border border-transparent dark:border-gray-700 transition-colors">
                    <h2 className="text-xl font-bold">Total de Pacientes</h2>
                    <p className="text-lg p-1 text-gray-700 dark:text-gray-300">
                        Sla 5
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 shadow-lg rounded-lg border border-transparent dark:border-gray-700 transition-colors">
                    <h2 className="text-xl font-bold">Total de Consultas</h2>
                    <p className="text-lg p-1 text-gray-700 dark:text-gray-300">
                        Sla 7
                    </p>
                </div>

            </div>

           
            <div className="flex justify-between items-center px-6 pt-6">

                <h1 className="text-2xl font-bold">Doutores</h1>

                <div className="flex justify-end gap-3 pr-6">
                   
                   
                    <div className="relative">
                        <select 
                            id="filters" 
                            defaultValue=""
                            className="appearance-none bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 pl-4 pr-10 rounded-lg cursor-pointer outline-none transition-colors border border-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-44"
                        >
                            <option value="" disabled>Filtrar</option>
                            <option value="A-B">A - Z</option>
                            <option value="B-A">Z - A</option>
                        </select>
                        
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                        <div className="bg-white rounded-full p-1 flex items-center justify-center">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4 text-indigo-600" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor" 
                                strokeWidth={3}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        Adicionar Doutor
                    </button>

                    {isModalOpen && (
                        <ModalAdicionarDoutor onClose={() => setIsModalOpen(false)} />
                    )}
                 
                </div>
            </div>
                
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 pl-6 pt-4 gap-4">

            

            </div>
        </div>
        
    )
};