
import Experience from '../Experiencie';


function SobreMi() {
  const experiences = [
    {
      title: "Gestión Tecnológica - UTN Mendoza",
      company: "UTN",
      location: "Mendoza",
      startDate: "Septiembre 2024",
      endDate: "Actual",

      description: [

        "Actualización y mantenimiento de la página web usando HTML, CSS, Python, y Django.",
      ]
    },
    {
      title: "Invernadero Automatizado - Mendoza Futura",
      company: "Mendoza Futura",
      location: "Mendoza",
      startDate: "Marzo 2023",
      endDate: "Junio 2023",

      description: [
        "Diseñamos y programamos  con compañeros  utilizando  Arduino un sistema con sensor de humedad para controlar automáticamente una bomba de agua y ventiladores.",
      ]
    },
  ];

  return (

    <main className='bg-gray-100'>

      <div className="bg-gray-100 min-h-screen p-6">


        <section className="max-w-4xl mx-auto mt-8 mb-11">
        
            <p className="text-gray-600 text-2xl leading-relaxed">
              Soy <span className="font-semibold text-gray-800">Augusto Nicolás Riquelme</span>, estudiante de la
              carrera <span className="font-semibold text-gray-800">Tecnicatura Universitaria en Programación </span>
               en la <span className="font-semibold text-gray-800">UTN de Mendoza</span>.
            </p>
            <p className="mt-4 text-gray-600 text-2xl leading-relaxed mb-5">
              Me dedico principalmente al desarrollo <span className="font-semibold text-gray-800">frontend</span>.
              Disfruto aprender algo nuevo cada día y poner en práctica mis conocimientos y habilidades en proyectos desafiantes.
            </p>
       
          <Experience experiences={experiences}></Experience>

        </section>
        <footer className="text-center mt-8 text-gray-600">
          &copy; 2024 Augusto Riquelme
        </footer>
      </div>
    </main>
  )
}

export default SobreMi