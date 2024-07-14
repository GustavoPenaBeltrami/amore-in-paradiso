import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="hero-desktop">
      <Image
        src="/hero-1.webp"
        alt="Hero"
        width={1000}
        height={1000}
        className="rounded-xl w-[500px] absolute translate-x-[375px]"
      />
      <Image
        src="/hero-2.webp"
        alt="Hero"
        width={1000}
        height={1000}
        className="rounded-xl w-[350px] absolute translate-x-[890px] translate-y-[230px]"
      />
      <Image
        src="/hero-3.jpg"
        alt="Hero"
        width={1000}
        height={1000}
        className="rounded-xl w-[400px] absolute translate-x-[475px] translate-y-[520px]"
      />
      <div className="absolute flex flex-col items-center translate-y-[60px] translate-x-[-12px]">
        <h1 className=" texto-rojo flex flex-col items-center font-[600] text-center w-fit text-5xl">
          <span className="py-3 pb-7 pr-3 bg-[#ffd5de] w-fit translate-y-[20px] rounded-xl">
            DESCUBRÍ LA
          </span>
          <span className="pr-3 py-3 bg-[#ffd5de] w-fit translate-y-[-5px] rounded-xl">
            RUTINA PERFECTA
          </span>
          <span className="py-3 pr-3 bg-[#ffd5de] w-fit translate-y-[-20px] rounded-xl">
            PARA TU PIEL
          </span>
        </h1>
        <p className="texto-rojo text-right w-[310px] font-medium text-md bg-[#ffd5de] translate-y-[-6px] translate-x-[-35px]">
          En Amore in Paradiso, valoramos profundamente el amor y la
          autenticidad. Creemos que el cuidado de la piel es una expresión de
          amor propio y queremos que cada persona se sienta única y segura en su
          propia piel. Nuestro compromiso es brindarte una experiencia única,
          donde cada recomendación y producto esté pensado para realzar tu
          belleza natural y tu autenticidad.
        </p>
      </div>
      <div className="absolute translate-x-[895px] translate-y-[100px]">
        <h2 className="texto-rojo font-bold">Asesoría cosmiatrica virtual</h2>
        <div className="bg-[#e7191f] h-1 w-[245px] mb-2"></div>
        <p className="texto-rojo font-medium text-md w-[200px]">
          Queremos acompañarte en cada paso de tu rutina de cuidado facial.
        </p>
      </div>
      <Link href="/" className="w-fit absolute translate-x-[1145px] translate-y-[80px]">
        <p className="texto-rojo font-bold absolute w-[110px] bg-[#ffd5de] p-1 translate-y-[-35px] translate-x-[50px]">
          Comenzá <br /> tu asesoría
        </p>
        <Image
          src="/boton-hero.png"
          width={500}
          height={500}
          className="w-[100px] h-[100px]"
        />
      </Link>
    </div>
  );
};
