import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
   



<footer className=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-around md:p-6 dark:bg-gray-800 dark:border-gray-600 transition-all">
    {/* <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> CONTACTOS
    </span> */}
    <ul className="flex flex-wrap items-center mt-3  font-medium text-gray-500 dark:text-gray-400 sm:mt-0 text-2xl space-x-5">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6 hover:text-red-600 "><BiLogoGmail/></a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6 hover:text-orange-600"><FaInstagram/></a>
        </li>

        <li>
            <a href="#" className="hover:underline me-4 md:me-6 hover:text-gray-800"><FaGithub /></a>
        </li>

    </ul>
</footer>


  )
}
