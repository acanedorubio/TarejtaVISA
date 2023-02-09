import React from 'react'
import visa from '../img/visa3.png'
import nfc from '../img/nfc3.png'

const Tarjeta = ({nombre,numero, mes, ano}) => {

  return (
    <div className='bg-gradient-to-r from-red-500 to-red-700 rounded-sm text-white p-7 absolute w-1/4 ml-20 h-1/4'>
        <div className='container flex justify-between pt-3'>
            <div><img src={nfc}
                className='w-20'
            ></img></div>
            <div><img src={visa}
                className='w-20'
            ></img></div>
        </div>
        <div className='py-3 font-bold'>
            {!numero ? <p>XXXX XXXX XXXX XXXX</p> : numero}
        </div>
        <div className='container flex uppercase'>
            <div className='w-3/4 font-light'>
                <p className='font-bold'>CARD HOLDER</p>
                {!nombre ? <p>NOMBRE COMPLETO</p> : nombre}
            </div>
            <div className='w-1/4 justify-end text-right font-light'>
                <p className='font-bold'>EXPIRES</p>
                <p>{!mes ? <span>MM</span> : mes}/{!ano ? <span>YY</span> : ano}</p>
            </div>

        </div>
       

    </div>
  )
}

export default Tarjeta