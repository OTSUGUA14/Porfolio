import React from 'react'
import { FC } from 'react'
import { IDatosProyect } from '../type/IDatosProyect'
import { Link } from 'react-router'


const Proyect:FC<IDatosProyect> = ({descripcion, imagen, tecnologias, titulo,link}) => {
  return (
    
    <Link to={link} target="_blank" className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-56 flex flex-col items-center text-center">
        <img className="rounded-t-lg size-32" src={imagen} alt="" />
 
    <div className='w-32'>
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descripcion}</p>
     
    
    </div>
    </Link>

  )
}

export default Proyect

