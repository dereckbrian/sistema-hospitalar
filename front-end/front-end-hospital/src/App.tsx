import { useState } from 'react'
import './index.css'

function App() {

  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');


 return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center p-4'>
    
      <div className='bg-white flex rounded-2xl shadow-lg max-w-5xl w-full overflow-hidden min-h-[550px]'>

        <div className='w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center'>
          
          <div className="max-w-md w-full mx-auto">
            
            <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
            <p className="text-sm mt-4 text-[#002D74]">
              Acesse sua conta para utilizar as funcionalidades do Brian's Medical Center
            </p>

            <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  placeholder="digite seu email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002D74]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">
                  Senha
                </label>
                <input 
                  type="password" 
                  placeholder="Digite sua senha"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002D74]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 text-[#002D74] focus:ring-[#002D74]" /> 
                  Lembrar de mim
                </label>
                <a href="#" className="text-sm font-medium text-[#002D74] hover:underline">
                  Esqueceu a senha?
                </a>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#002D74] text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors mt-4"
              >
                Entrar
              </button>

            </form>
          </div>
        </div>

        {/* Lado direito imagem */}
        <div className='hidden md:block w-1/2 bg-cyan-100'>
          <img 
            src="/src/images/logoSistemaLogin.png" 
            alt="Logo" 
            className="w-full h-full object-cover" 
          />
        </div>

      </div>
    </div>
  );
}

export default App
