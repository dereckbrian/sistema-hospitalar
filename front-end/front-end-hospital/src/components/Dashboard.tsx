export const Dashboard = () => {
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
        </div>
        
    )
};