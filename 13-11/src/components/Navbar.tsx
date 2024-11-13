import React from 'react'

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#e0ddcf] p-4 flex justify-between">

  <div className="text-[#0d1321] font-bold flex flex-row" >
    Bienvenidos
    <img src="" alt="imgan mia" />
    
  </div>

  <div className="flex justify-around w-1/2 space-x-2 font-normal">
    <button className="text-[#0d1321]"><span className='font-bold'>1</span>-Inicio</button>
    <button className="text-[#0d1321] "><span className='font-bold'>2</span>-Sobre Mi</button>
    <button className="text-[#0d1321] "><span className='font-bold'>3</span>-Contacto</button>
    <button className="text-[#0d1321] "><span className='font-bold'>4</span>-Botón</button>
  </div>
</nav>

  )
}
