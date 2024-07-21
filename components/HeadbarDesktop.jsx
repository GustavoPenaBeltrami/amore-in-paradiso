import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeadbarDesktop = () => {
  return (
    <nav className="headbar-desktop texto-rojo flex justify-between items-center px-[10%] mt-10">
      <Link href="/">
        <h2 className="breathing text-[35px] mt-2 cursor-pointer">amore in paradiso</h2>
      </Link>
      <ul className="flex text-lg gap-5 font-bold p-0 items-center">
        <Link className="hover:text-white transition-all duration-300" href="/asesoria">
          Asesoría
        </Link>
        <Link className="hover:text-white transition-all duration-300" href="/">
          Sobre mi
        </Link>
        <Link className="hover:text-white transition-all duration-300" href="/contacto">
          Contacto
        </Link>
        {/* <Link className='fondo-rosa-2 main-button p-2 rounded-md transition-all duration-300' href='/'>Agenda tu sesión!</Link> */}
      </ul>
    </nav>
  );
};
