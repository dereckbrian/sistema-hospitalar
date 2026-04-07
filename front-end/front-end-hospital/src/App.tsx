import { useState } from 'react'

function App() {

  const [email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');


  return (
    <div className='w-full h-screen flex bg-slate-400'>
      <div className='w-1/2 h-full flex flex-col bg-[#282c34] items-center justify-center'>
       <h4>Acceso ao Sistema</h4>
      </div>
    </div>
  )
}

export default App
