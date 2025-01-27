
export const Hero = () => {
  const handleDownload = () => {
    const enlace = document.createElement('a');
    enlace.href = '/pdf/CV.AugustoRiquelmeM.pdf';  // URL de tu archivo
    enlace.download = 'CV.AugustoRiquelme.pdf';  // Nombre del archivo descargado
    enlace.click();
  };
  return (
    <>
    <div className="h-[50vh] p-12 flex flex-row w-full justify-around items-center bg-cover bg-fixed"
    style={{backgroundImage:"url('/imagenes/fondo.jpg')"}}>
      <div className='bg-black/20 px-4 py-2  rounded '>

        <h3 className='text-2xl text-[#e63946] font-Jaro'>Me llamo Augusto</h3>
        <h1 className='text-4xl text-[#457b9d] font-bold'>Soy desarrollador web </h1>
        <h4 className='text-lg text-rose-50' >Me especializo en el front-end soy de Argentina</h4>
      </div>
      <div>
        <button  className="shadow px-2 py-1 rounded-md bg-red-200 hover:bg-red-900  hover: text-whitetext-white transition-all" onClick={handleDownload}>MI CV📄</button>
      </div>
    </div>
   
    </>
    
  )
}
