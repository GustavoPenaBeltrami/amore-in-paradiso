"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";


export const HeadbarMobile = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="headbar-mobile texto-rojo flex flex-col items-end px-[30px] mt-10 pb-10 max-w-[100vw] overflow-hidden z-0">
      <div className="flex flex-row justify-between items-center w-full">
        <Link href="/">
          <Image
            src="/mobile.png"
            className={`${isOpen ? "hidden" : "block cursor-pointer"}`}
            width={75}
            height={75}
            alt="Logo"
          />
          <Image
            src="/mobile-corazon.png"
            className={`${isOpen ? "block cursor-pointer" : "hidden"}`}
            width={74.5}
            height={74.5}
            alt="Logo alternativo"
          />
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45px"
          height="45px"
          viewBox="0 0 24 24"
          className="cursor-pointer"
          onClick={handleMenu}
        >
          <path
            fill="currentColor"
            d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
          />
        </svg>
      </div>
      <ul
        ref={menuRef}
        className={`${
          isOpen ? "translate-x-[30px]" : "translate-x-[-110%]"
        } absolute bg-[#ffd5dee4] w-full flex flex-col ${pathname === '/contacto' ? "md:mt-[164px] mt-[130px]" : "mt-[110px]"}   text-lg gap-y-5 font-bold p-0 items-center transition-all duration-700 py-3 pt-5 z-50 shadow-xl `}
      >
        <Link className="hover:text-white transition-all duration-300" href="/asesoria" onClick={handleLinkClick}>
          Asesoría
        </Link>
        <Link className="hover:text-white transition-all duration-300" href="/sobre-mi" onClick={handleLinkClick}>
          Sobre mi
        </Link>
        <Link className="hover:text-white transition-all duration-300" href="/contacto" onClick={handleLinkClick}>
          Contacto
        </Link>
      </ul>
    </nav>
  );
};
