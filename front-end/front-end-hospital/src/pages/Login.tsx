import { useState } from 'react'
import { userLogin } from '../hooks/userLogin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try{
        const userData = await userLogin(email, password);
        localStorage.setItem('user', JSON.stringify(userData));

        navigate('/dashboard');
    
        console.log("Login bem sucedido", userData);

    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response && err.response.data) {
                setError(String(err.response.data)); 
            } else {
                setError("Erro de rede. Verifique se o servidor está rodando.");
            }
        } else {
            setError("Ocorreu um erro inesperado na aplicação.");
            console.error(err);
        }
    } finally {
        setIsLoading(false);
    }
    
  }


 return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center p-4'>
      <div className='bg-white flex rounded-2xl shadow-lg max-w-5xl w-full overflow-hidden min-h-[550px]'>
        <div className='w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center'>
          <div className="max-w-md w-full mx-auto">
            
            <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
            <p className="text-sm mt-4 text-[#002D74]">
              Acesse sua conta para utilizar as funcionalidades do Brian's Medical Center
            </p>

            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              
              {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                      <span className="block sm:inline">{error}</span>
                  </div>
              )}

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email"
                  placeholder="digite seu email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002D74]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Senha</label>
                <input 
                  type="password" 
                  placeholder="Digite sua senha"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002D74]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required
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
                disabled={isLoading}
                className={`w-full text-white py-3 rounded-lg font-bold transition-colors mt-4 
                  ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-[#002D74] hover:bg-blue-900'}`}
              >
                {isLoading ? 'Entrando...' : 'Entrar'}
              </button>

            </form>
          </div>
        </div>

        <div className='hidden md:block w-1/2 bg-cyan-100'>
          <img src="/src/images/logoSistemaLogin.png" alt="Logo" className="w-full h-full object-cover" />
        </div>

      </div>
    </div>
  );
}

export default Login