import { Card1, Card2, Card3, Card4 } from "@/components/card";
import Link from "next/link";


export default function Home() {

    return (
        <div className="w-[90%] max-w-[1500px] mx-auto">
            <h1 className="texto-rojo font-bold text-center mt-14 text-4xl">
                Asesoría cosmiatrica virtual
            </h1>

            <div className="mt-20 flex flex-row justify-center flex-wrap gap-8">

                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />

            </div>

            <Link href="/cuestionario" className="fondo-rosa-2 block w-fit mx-auto my-20 py-5 px-10 rounded-full texto-rojo font-bold uppercase text-lg hover:bg-[#f6c1d1] text-center transition-all duration-300"> Iniciar cuestionario personalizado</Link>
        </div>
    );
}
