import { FC } from "react";
import { Link } from "react-router";
import { IButtonNavBar } from "../type/IButtonNavBar";

const ButtonNavBar:FC<IButtonNavBar>=({numero,titulo,link})=> {
  return (
    <div className="group">
      <Link to={link} className="text-[#0d1321] flex flex-row space-x-2 pb-1 text-2xl">
        <span className="font-bold">{numero}</span>
        <p>{titulo}</p>
      </Link>
      <div className="w-0 h-1 group-hover:bg-red-500 group-hover:w-full transition-all rounded-3xl  "></div>
    </div>
  );
}

export default ButtonNavBar;
