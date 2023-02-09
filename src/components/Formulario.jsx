import React from 'react'

const Formulario = ({nombre,setNombre,numero,setNumero, setMes, setAno, mes, ano}) => {

 function handleSubmit(e) {
    e.preventDefault()
    alert('Has introducido tus datos de la tarjeta. Pasamos a robarte.')
 }

  return (
    <form>
        <div>
            <label
                className='pr-5 font-normal'
            >NOMBRE DE LA TARJETA</label>
            <input
                type="text"
                className='mb-3 w-full'
                value={nombre}
                onChange={(e) => {
                    setNombre(e.target.value)
                }}
            />
        </div>
        <div>
            <label
            className='pr-5 font-normal'
            >NÚMERO DE LA TARJETA</label>
            <input
                type="number"
                className='mb-3 w-full'
                value={numero}
                onChange={(e) => {
                    setNumero(e.target.value)
                }}
            />
        </div>
        <div className='flex justify-center'>
                <div className='w-1/2'>
                <label
                className='flex justify-center font-normal'
                >MES DE CADUCIDAD</label>
                <div className='justify-center flex'>
                <select
                    onChange={(e) => {
                        setMes(e.target.value)
                    }}
                    >
                        <option>XX</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                        <option>07</option>
                        <option>08</option>
                        <option>09</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                </select>
            </div>
                </div>
                <div className='w-1/2'>
            <label
            className='flex justify-center font-normal'
            >AÑO DE CADUCIDAD</label>
            <div className='justify-center flex'>
                <select
                    onChange={(e) => {
                        setAno(e.target.value)
                    }}
                >
                        <option>XXXX</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                </select>
            </div>
            </div>
        </div>
        <input
            type="submit"
            className='bg-gradient-to-r from-red-500 to-red-700 rounded-lg w-full p-3 text-white uppercase font-bold mb-3 mt-3'
            onClick={handleSubmit}
        />

    </form>
  )
}

export default Formulario