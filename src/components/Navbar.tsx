
import ButtonNavBar from "./ButtonNavBar";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Iconos para el menú hamburguesa
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" w-full  p-4 flex justify-between items-center  bg-slate-200">
      <div className="text-[#0d1321] font-bold flex flex-row items-center ml-4">
        <img className="size-20 rounded-full shadow-md shadow-black" src="imagenes/augusto.jpg" alt="imgen mia" />
        <h6 className="pl-5 text-3xl">Bienvenidos</h6>
      </div>
      <button 
        className="md:hidden p-2 focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <div className=" hidden md:flex  justify-end w-1/2  font-normal space-x-20 pr-5 ">
        <ButtonNavBar 
        numero={1}
        titulo="Inicio"
        link="/"
        />
        <ButtonNavBar 
        numero={2}
        titulo="Sobre mi"
        link="/sobre-mi"
        />
      </div>
      {isOpen && (
        <div className="absolute top-16 right-5 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden">
          <ButtonNavBar numero={1} titulo="Inicio" link="/" />
          <ButtonNavBar numero={2} titulo="Sobre mí" link="/sobre-mi" />
        </div>
      )}
    </nav>
  );
};
