"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HeadbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);

    console.log(isOpen);
  };

  return (
    <nav className="headbar-mobile texto-rojo flex flex-col items-end px-[30px] mt-10 pb-10 max-w-[100vw] overflow-hidden">
      <div className="flex flex-row justify-between items-center w-full">
        <Link href="/">
          <Image
            src="/mobile.png"
            className={`${isOpen ? "hidden" : "block cursor-pointer"}`}
            width={75}
            height={75}
          />
          <Image
            src="/mobile-corazon.png"
            className={`${isOpen ? "block cursor-pointer" : "hidden"}`}
            width={74.5}
            height={74.5}
          />
        </Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 24 24" className="cursor-pointer" onClick={handleMenu}><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"/></svg>
      </div>
      <ul
        className={`${
          isOpen ? "translate-x-[30px]" : "translate-x-[-110%]"
        } absolute bg-[#ffd5de] w-full flex flex-col mt-36 text-lg gap-y-5 font-bold p-0 items-center transition-all duration-700 pb-5`}
      >
        <Link className="hover:text-white transition-all duration-300" href="/asesoria">
          Asesoría
        </Link>
        <Link className="hover:text-white transition-all duration-300" href="/">
          Sobre mi
        </Link>
        <Link className="hover:text-white transition-all duration-300" href="/contacto">
          Contacto
        </Link>
      </ul>
    </nav>
  );
};
