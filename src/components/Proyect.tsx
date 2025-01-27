import { useState } from 'react'
import { FC } from 'react'
import { IDatosProyect } from '../type/IDatosProyect'
import { Link } from 'react-router'


const Proyect: FC<IDatosProyect> = ({ descripcion, imagen, tecnologias, titulo, link }) => {

  const link2 = link ? link : '/'


  const [hover, setHover] = useState<boolean>(false)

  return (
    <div className='flex flex-col items-center'>
      <Link to={link2} target="_blank" className="max-w-sm m-4 hover:scale-105 transition-all duration-300 bg-white border border-gray-200 rounded-2xl shadow-2xl w-56 
      bg-cover bg-center   h-auto"
        style={{ backgroundImage: `url(${imagen})` }}
      >

        <div className={`w-full h-full p-5 flex transition-all flex-col rounded-2xl items-center text-center ${hover ? 'bg-black/70' : 'bg-none'}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >


          {/* <img className="rounded-t-lg size-32" src={imagen} alt="" /> */}

          <div className='w-50 h-48'>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">{hover && titulo}</h5>

            <p className="mb-3 font-normal text-white ">{hover && descripcion}</p>


          </div>
        </div>



      </Link>
      <div className='text-3xl flex flex-row flex-wrap justify-around w-1/2 '>


        {
          tecnologias?.map((tecnologia) => (
            <div className='hover:underline  hover:text-blue-800 '>

              {tecnologia}
            </div>

            
          )
          )
        }
      </div>
    </div>
  )
}

export default Proyect

