"use client";
import Image from "next/image";
import React, { useState } from "react";

export const Card4 = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`flip-container ${hover ? "hover" : ""}`}
      onClick={() => setHover(!hover)}
    >
      <div className="flipper  bg-[#f6aac1] h-[550px] w-[330px] rounded-3xl shadow-md p-10 cursor-pointer hover:shadow-xl">
        <div className="front flex flex-col items-center justify-between w-full h-full">
          <p className="font-bold texto-rojo text-4xl w-full">4</p>
          <div className="grid grid-cols-2 gap-[35px] gap-x-6">
            <Image
              alt="corazon rojo"
              src="/heart.svg"
              width={300}
              height={300}
              className="w-[90px]"
            />
            <Image
              alt="corazon rojo"
              src="/heart.svg"
              width={300}
              height={300}
              className="w-[90px]"
            />
            <Image
              alt="corazon rojo"
              src="/heart.svg"
              width={300}
              height={300}
              className="w-[90px]"
            />
            <Image
              alt="corazon rojo"
              src="/heart.svg"
              width={300}
              height={300}
              className="w-[90px]"
            />
          </div>
          <p className="font-bold texto-rojo text-4xl rotate-180 w-full">4</p>
        </div>

        <div
          className={`back flex flex-col items-center justify-center w-full h-full`}
        >
          <h3 className="font-semibold text-lg texto-rojo text-center mb-5">
            Tercer entrevista
          </h3>
          <p className="texto-rojo text-md text-center">
            Por último, realizamos una sesión de seguimiento para evaluar la
            evolución de tu piel y la efectividad de la rutina recomendada.<br/><br/> Este
            seguimiento nos permitirá ajustar cualquier aspecto necesario y
            asegurarnos de que estés obteniendo los mejores resultados posibles.
          </p>
        </div>
      </div>
    </div>
  );
};
