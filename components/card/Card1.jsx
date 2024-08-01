"use client";
import Image from "next/image";
import React, { useState } from "react";

export const Card1 = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`flip-container ${hover ? "hover" : ""}`}
      onClick={() => setHover(!hover)}
    >
      <div className="flipper bg-[#f6aac1] h-[550px] w-[330px] rounded-3xl shadow-md p-10 cursor-pointer hover:shadow-xl">
       
        <div
          className="front flex flex-col items-center justify-between w-full h-full"
        >
          <p className="font-bold texto-rojo text-4xl w-full">1</p>
          <Image
            alt="corazon rojo"
            src="/heart.svg"
            width={300}
            height={300}
            className="w-[150px]"
          />
          <p className="font-bold texto-rojo text-4xl rotate-180 w-full">1</p>
        </div>

        <div
          className={`back flex flex-col items-center justify-center w-full h-full`}
        >
          <h3 className="font-semibold text-lg texto-rojo text-center mb-5">
            Cuestionario informativo
          </h3>
          <p className="texto-rojo text-md text-center">
            Se trata de una encuesta donde recopilaremos infromacion valiosa
            sobre tu rutina diaria, hábitos, enfermedades y otros aspectos que
            influyen en el cuidado de tu piel.<br/><br/> Hacer el formualrio es <b>gratis</b>. <br/><br/>No te tomara mas de 5 minutos ♥
          </p>
        </div>

      </div>
    </div>
  );
};