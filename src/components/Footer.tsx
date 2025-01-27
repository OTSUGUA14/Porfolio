
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router';
export default function Footer() {
  const handleCopyToClipboard = () => {
    const email = 'augusto.nicolas.riquelme@gmail.com';  // El texto que deseas copiar
    navigator.clipboard.writeText(email)
      .then(() => {
        alert('Correo copiado al portapapeles');
      })
      .catch((err) => {
        alert('Error al copiar al portapapeles: ' + err);
      });
  };
  return (
   


<footer className=" bottom-0 left-0 z-20 w-full p-4 mt-10 bg-slate-950 border-t border-gray-200 shadow md:flex md:items-center md:justify-around md:p-8 dark:bg-gray-800 dark:border-gray-600 transition-all h-11">
    {/* <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> CONTACTOS
    </span> */}
    <ul className="flex flex-wrap items-center justify-center mt-3  text-3xl font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-5">
       
            <Link to="#" className="hover:underline  hover:text-red-600"  onClick={handleCopyToClipboard}><BiLogoGmail/></Link>
       
        
            <Link to="#" target="_blank" className="hover:underline  hover:text-orange-600"><FaInstagram/></Link>
       

      
            <Link to="https://github.com/OTSUGUA14" target="_blank" className="hover:underline  hover:text-gray-800"><FaGithub /></Link>
      

    </ul>
</footer>


  )
}
