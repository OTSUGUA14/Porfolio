import React from "react";
import { Link } from "react-router";
import ButtonNavBar from "./ButtonNavBar";

export const Navbar = () => {
  return (
    <nav className=" w-full  p-4 flex justify-between items-center shadow">
      <div className="text-[#0d1321] font-bold flex flex-row items-center ml-4">
        <img className="size-16 rounded-full shadow-md shadow-black" src="public/imagenes/augusto.jpg" alt="imgen mia" />
        <h6 className="pl-5">Bienvenidos</h6>
      </div>

      <div className="flex justify-end w-1/2  font-normal space-x-20 pr-5 ">
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
        <ButtonNavBar 
        numero={3}
        titulo="Contacto"
        link="/"
        />
        



      </div>
    </nav>
  );
};
