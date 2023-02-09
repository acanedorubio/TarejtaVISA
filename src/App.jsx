import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Formulario from './components/Formulario'
import Tarjeta from './components/Tarjeta'

function App() {
  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');

  return (
    <div className=''>
    <div className='container flex-col align-middle justify-center bg-slate-700 h-screen pt-20'>
      <div className='pb-3 pt-3 justify-center flex align-middle w-2/6 ml-80'><Tarjeta 
        nombre={nombre}
        numero={numero}
        mes={mes}
        ano={ano}
      /></div>
      <div className='mb-3 bg-slate-300 w-2/5 justify-center p-8 rounded-xl flex ml-80 shadow pt-60'><Formulario 
      nombre={nombre}
      setNombre={setNombre}
      numero={numero}
      setNumero={setNumero}
      mes={mes}
      ano={ano}
      setAno={setAno}
      setMes={setMes}
      /></div>

    </div>
    </div>
  )
}

export default App
