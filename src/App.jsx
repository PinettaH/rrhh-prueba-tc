import React from 'react'
import logotc from './images/logotc.png'
const App = () => {
    return (
        <div className='flex justify-between h-full w-full'>
            <div className='w-full h-full '>
                Lado izquierdo
                <img
                    src={logotc}
                />
            </div>
            <div className='h-full w-full bg-white rounded-xl p-4 m-4'>
                <div className='flex flex-col p-4'>

                    <input
                        className='p-4 mb-4'
                        type='text'
                        placeholder='Nombre'
                    />

                    <input
                        className='p-4 mb-4'
                        type='text'
                        placeholder='Apellido'
                    />
                    <input
                        className='p-4 mb-4'
                        type='text'
                        placeholder='Dni'
                    />
                    <input
                        className='p-4 mb-4'
                        type='text'
                        placeholder='Motivo'
                    />
                    <input
                        className='p-4 mb-4'
                        type='File'
                        placeholder='Nombre'
                    />
                    <button className=''>Solicitar</button>
                </div>

                <div className=' h-full w-full'>

                </div>
            </div>
        </div>
    )
}

export default App