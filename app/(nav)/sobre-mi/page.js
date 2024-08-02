import Image from "next/image";

export default function Contacto() {

    return (
        <div className="w-[90%] max-w-[1200px] mx-auto mt-5 mb-10 md:mb-0">
            <Image src="/sobre-mi.png" width={2000} height={1000} alt="Sobre mí" className="max-w-[500px] w-[90%] mx-auto" />
            <div className="texto-rojo flex lg:flex-row flex-col gap-10 mt-10 font-semibold text-lg items-center bg-[#ffe5ea] p-10 rounded-xl shadow-inner">
                <Image src="/justina.jpeg" width={1300} height={1500} alt="Justina Vigil Gargani" className="rounded-xl w-[400px] shadow-xl" />
                <div className="flex flex-col gap-3 h-full items-center">
                    <p className="lg:text-lg md:text-md text-sm">Hola! Soy Justina Vigil, tengo 22 años y soy una futura cosmiatra apasionada por el cuidado de la piel. Desde siempre, creí en la importancia que tiene cuidar la piel y en cómo esto puede influir positivamente en nuestra autoestima y bienestar general.</p>
                    <p className="lg:text-lg md:text-md text-sm">Mi objetivo es concientizar a las personas sobre la importancia del cuidado facial y ayudarlas a disfrutar del proceso tanto como yo lo hago. A través de mis conocimientos y experiencia, quiero inspirarte a adoptar rutinas de cuidado facial que no solo mejoren tu piel, sino que también se conviertan en un momento de autocuidado y amor propio.</p>
                    <p className="lg:text-lg md:text-md text-sm">En "Amore in Paradiso", mi misión es ofrecerte asesoría personalizada, compartir conocimientos valiosos y proporcionarte los mejores productos para que logres una piel radiante y saludable. En conjunto vamos a hacer que cada paso en tu rutina de cuidado facial sea un mimo al alma.</p>
                </div>
            </div>
        </div>
    );
}
