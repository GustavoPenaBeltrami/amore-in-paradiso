"use client";
import Image from "next/image";
import React, { useState } from "react";

export const Card2 = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`flip-container ${hover ? "hover" : ""}`}
      onClick={() => setHover(!hover)}
    >
      <div className="flipper  bg-[#f6aac1] h-[550px] w-[330px] rounded-3xl shadow-md p-10 cursor-pointer hover:shadow-xl">
        <div className="front flex flex-col items-center justify-between w-full h-full">
          <p className="font-bold texto-rojo text-4xl w-full">2</p>
          <div>
            <Image
              alt="corazon rojo"
              src="/heart.svg"
              width={300}
              height={300}
              className="w-[110px] mb-10"
            />
            <Image
              alt="corazon rojo"
              src="/heart.svg"
              width={300}
              height={300}
              className="w-[110px]"
            />
          </div>
          <p className="font-bold texto-rojo text-4xl rotate-180 w-full">2</p>
        </div>

        <div
          className={`back flex flex-col items-center justify-center w-full h-full`}
        >
          <h3 className="font-semibold text-lg texto-rojo text-center mb-5">
            Primera entrevista
          </h3>
          <p className="texto-rojo text-md text-center">
            Realizaremos una entrevista virtual para observar tu piel y reforzar
            la información obtenida.<br/><br/> Durante esta entrevista, haremos preguntas
            adicionales si es necesario, asegurándonos de comprender
            completamente tus necesidades y características.
            <br/><br/>
            Este servicio tiene un costo de <b>10.000 ARS</b>.
            <br/>(Incluye las otras entrevistas).
          </p>
        </div>
      </div>
    </div>
  );
};
