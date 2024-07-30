import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="z-50 overflow-hidden">
      <div className="hero-desktop">
        <Image
          src="/hero-1.webp"
          alt="Hero"
          width={1000}
          height={1000}
          className="shadow-custom rounded-xl w-[500px] absolute translate-x-[375px]"
        />
        <Image
          src="/hero-2.webp"
          alt="Hero"
          width={1000}
          height={1000}
          className="shadow-custom rounded-xl w-[350px] absolute translate-x-[890px] translate-y-[230px]"
        />
        <Image
          src="/hero-3.jpg"
          alt="Hero"
          width={1000}
          height={1000}
          className="shadow-custom rounded-xl w-[400px] absolute translate-x-[475px] translate-y-[520px]"
        />
        <div className="absolute flex flex-col items-center translate-y-[60px] translate-x-[-45px]">
          <h1 className=" texto-rojo flex flex-col items-center font-[700] text-center w-fit text-5xl uppercase mb-7 leading-[55px]">
            Descubrí la <br />{" "}
            <span className="translate-x-[-20px]">rutina perfecta</span>para tu
            piel
          </h1>
          <p className="texto-rojo text-right w-[310px] font-medium text-md bg-[#ffd5de] translate-y-[-6px] translate-x-[-15px] ">
            En Amore in Paradiso, valoramos profundamente el amor y la
            autenticidad. Creemos que el cuidado de la piel es una expresión de
            amor propio y queremos que cada persona se sienta única y segura en
            su propia piel. Nuestro compromiso es brindarte una experiencia
            única, donde cada recomendación y producto esté pensado para realzar
            tu belleza natural y tu autenticidad.
          </p>
        </div>
        <div className="absolute translate-x-[895px] translate-y-[100px]">
          <h2 className="texto-rojo font-bold">Asesoría cosmiatrica virtual</h2>
          <div className="bg-[#e7191f] h-1 w-[245px] mb-2"></div>
          <p className="texto-rojo font-medium text-md w-[200px]">
            Queremos acompañarte en cada paso de tu rutina de cuidado facial.
          </p>
        </div>
        <Link
          href="/asesoria"
          className="w-fit absolute translate-x-[1155px] translate-y-[80px] hover:rotate-[5deg] transition-all duration-300"
        >
          <p className="texto-rojo font-bold absolute w-[110px] bg-[#ffd5de] p-1 translate-y-[-35px] translate-x-[50px]">
            Comenzá <br /> tu asesoría
          </p>
          <Image
            src="/boton-hero.png"
            width={500}
            height={500}
            className="w-[100px] h-[100px]"
            alt="Botón"
          />
        </Link>
      </div>

      <div className="hero-mobile w-[100vw] max-w-full absolute left-0 top-[150px] min-h-[85.5vh] p-3">
        <h1 className="text-right font-bold texto-rojo md:text-4xl text-3xl uppercase mt-24">Descubrí <br/> la rutina perfecta <br/> para tu piel</h1>
        <h2 className="font-semibold md:text-lg text-md texto-rojo text-right mt-10  max-w-[420px] ml-auto">
          {" "}
          En Amore in Paradiso, valoramos profundamente el amor y la
          autenticidad. Creemos que el cuidado de la piel es una expresión de
          amor propio y queremos que cada persona se sienta única y segura en su
          propia piel.
        </h2>
        <h2 className="font-semibold md:text-lg text-md texto-rojo text-right mt-5 max-w-[420px] ml-auto">
          Nuestro compromiso es brindarte una experiencia única, donde cada
          recomendación y producto esté pensado para realzar tu belleza natural
          y tu autenticidad.{" "}
        </h2>
        <Link href="/asesoria" className="block w-fit mt-20 mx-auto fondo-rosa p-3 shadow-lg rounded-xl md:text-3xl text-xl font-bold texto-rojo hover:bg-[#ffe1ea] transition-all duration-300">Comenzá tu asesoría</Link>
      </div>
    </div>
  );
};
