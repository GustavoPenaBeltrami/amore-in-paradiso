"use client";
import Image from "next/image";
import React, { useState } from "react";

export const Card3 = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`flip-container ${hover ? "hover" : ""}`}
      onClick={() => setHover(!hover)}
    >
      <div className="flipper  bg-[#f6aac1] h-[550px] w-[330px] rounded-3xl shadow-md p-10 cursor-pointer hover:shadow-xl">
        <div className="front flex flex-col items-center justify-between w-full h-full">
          <p className="font-bold texto-rojo text-4xl w-full">3</p>
          <div>
            <Image
              alt="corazon rojo"
              src="/heart.svg"
              width={300}
              height={300}
              className="w-[95px] mb-6"
            />
            <Image
              alt="corazon rojo"
              src="/heart.svg"
              width={300}
              height={300}
              className="w-[95px] mb-6"
            />
            <Image
              alt="corazon rojo"
              src="/heart.svg"
              width={300}
              height={300}
              className="w-[95px]"
            />
          </div>
          <p className="font-bold texto-rojo text-4xl rotate-180 w-full">3</p>
        </div>

        <div
          className={`back flex flex-col items-center justify-center w-full h-full`}
        >
          <h3 className="font-semibold text-lg texto-rojo text-center mb-5">
            Segunda entrevista
          </h3>
          <p className="texto-rojo text-md text-center">
            En el tercer paso, brindamos el apoyo domiciliario y proporcionamos
            indicaciones personalizadas para tu rutina de cuidado de la piel.
            <br/><br/>Esta sesión asegurará que tengas todas las herramientas y
            conocimientos necesarios para mantener tu piel saludable y radiante
            desde la comodidad de tu hogar.
          </p>
        </div>
      </div>
    </div>
  );
};
