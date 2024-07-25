'use client';

import Link from 'next/link';

export default function Contacto() {
    return (
        <div className="fondo-corazon mt-4 w-full h-[calc(100vh-117px)] flex justify-center md:items-center md:pt-0 pt-5">
            <div className="bg-[#ffe5ea] w-[95%] max-w-[600px] h-[300px] shadow-xl rounded-2xl p-10">
                <h1 className="texto-rojo font-bold md:text-6xl text-4xl text-center">Contacto</h1>
                <div className="mt-10 flex flex-col gap-5 md:ml-10 ml-2">
                    <a 
                        href="mailto:justinavigilgargani@gmail.com" 
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" className="translate-y-[3px]"><path fill="#e7191f" d="M10 9c-1.1 0-2 .92-2 2.05c0 .57.22 1.07.59 1.45L12 16l3.42-3.5c.36-.37.58-.89.58-1.45C16 9.92 15.1 9 14 9c-.54 0-1.05.23-1.41.6l-.59.6l-.58-.59A2 2 0 0 0 10 9m2-8.36l9.03 5.65c.58.35.97.98.97 1.71v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8c0-.73.39-1.36.97-1.71zM4 10v8h16v-8l-2 1.25v-.2c0-.55-.12-1.1-.33-1.6L20 8l-8-5l-8 5l2.33 1.45c-.21.5-.33 1.05-.33 1.6v.2z" /></svg>
                        <p className="texto-rojo font-semibold block md:hidden md:text-2xl text-lg">justinavigilgargani<br/>@gmail.com</p>
                        <p className="texto-rojo font-semibold hidden md:block md:text-2xl text-lg">justinavigilgargani@gmail.com</p>
                    </a>

                    <a 
                        href="https://wa.me/543516336716" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24"><path fill="#e7191f" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                        <p className="texto-rojo font-semibold md:text-2xl text-lg translate-x-[-3px]">+54 351 633-6716</p>
                    </a>
                </div>
            </div>
        </div>
    );
}