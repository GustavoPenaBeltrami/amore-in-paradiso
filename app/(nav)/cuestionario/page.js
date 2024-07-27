'use client';

import { useState } from 'react';

export default function Cuestionario() {
    const totalSteps = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [responses, setResponses] = useState({
        1: { nombre: '', apellido: '', edad: '', telefono: '', ocupacion: '', estiloVivienda: '', motivoConsulta: '' },
        2: { actividadFisica: '', tipoAlimentacion: '', consumeLacteos: '', consumeHarinas: '', consumeCarnes: '', consumeVerdurasFrutas: '', tomaAgua: '' },
        3: { rutina: '', detallesRutina: '', seMaquilla: '', seMaquillaTodosLosDias: '', seDesmaquilla: '' },
        4: { usaProtectorSolar: '', frecuenciaProtectorSolar: '', tomaSol: '', reaccionPielSol: '', reaccionCambioTemperatura: '' },
        5: { sentirPiel: '', reaccionJabon: '', reaccionDepilacion: '' },
        6: { tomaAnticonceptivo: '', embarazo: '', diabetes: '', herpes: '' },
        7: { alteracionHormonal: '', antecedentesGinecologicos: '', marcapasos: '', problemasRenales: '', problemasIntestinales: '', higadoGraso: '', colesterol: '', trigliceridos: '', cancerPiel: '', alergias: '' },
        8: { cirugiasEsteticas: '', cicatrizacionNormal: '', protesis: '', implantes: '', rellenoLabios: '', botox: '' },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponses(prevResponses => ({
            ...prevResponses,
            [currentPage]: {
                ...prevResponses[currentPage],
                [name]: value
            }
        }));
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalSteps) {

            setCurrentPage(currentPage + 1);

        };
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // Define las preguntas para cada paso
    const questions = {
        1: [
            { name: 'nombre', label: 'Nombre:' },
            { name: 'apellido', label: 'Apellido:' },
            { name: 'edad', label: 'Edad:' },
            { name: 'telefono', label: 'Teléfono:' },
            { name: 'ocupacion', label: 'Ocupación:' },
            { name: 'estiloVivienda', label: 'Estilo de vivienda (clima y ubicación):' },
            { name: 'motivoConsulta', label: 'Motivo de consulta:' },
        ],
        2: [
            { name: 'actividadFisica', label: 'Actividad física:', type: 'radio', options: ['Si', 'No'] },
            { name: 'espacioActividadFisica', label: '¿Cual es el entorno del entrenamiento? (Si marcó que si)', type: 'radio', options: ['Aire libre', 'Espacio cerrado'] },
            { name: 'tipoAlimentacion', label: '¿Tipo de alimentación?', type: 'radio', options: ['vegetarianismo', 'Veganismo', 'Sibo', 'Celiaquía', 'Diabetes', 'Omnívoros'] },
            { name: 'consumeLacteos', label: '¿Consume lácteos?', type: 'radio', options: ['Si', 'No'] },
            { name: 'consumeHarinas', label: '¿Consume harinas?', type: 'radio', options: ['Si', 'No'] },
            { name: 'consumeCarnes', label: '¿Consume carnes?', type: 'radio', options: ['Si', 'No'] },
            { name: 'consumeVerdurasFrutas', label: '¿Consume verduras y frutas?', type: 'radio', options: ['Si', 'No'] },
            { name: 'tomaAgua', label: '¿Cuanta agua toma por dia?' },
        ],
        3: [

            { name: 'rutina', label: '¿Haces rutina de cuidado facial?', type: 'radio', options: ['Si', 'No'] },
            { name: 'detallesRutina', label: 'Explique su rutina: (Si marcó que si)' },
            { name: 'seMaquilla', label: '¿Se maquilla?', type: 'radio', options: ['Si', 'No'] },
            { name: 'seMaquillaTodosLosDias', label: '¿Con cuanta frecuencia? (Si marcó que si)' },
            { name: 'seDesmaquilla', label: '¿Se desmaquilla siempre? (Si marcó que si)' },
        ],
        4: [
            { name: 'usaProtectorSolar', label: '¿Usa protector solar?', type: 'radio', options: ['Si', 'No'] },
            { name: 'frecuenciaProtectorSolar', label: '¿Con qué frecuencia? (Si marcó que si)' },
            { name: 'tomaSol', label: '¿Toma sol?', type: 'radio', options: ['Si', 'No'] },
            { name: 'reaccionPielSol', label: '¿Cómo reacciona al frente del sol su piel? (Si marcó que si)' },
            { name: 'reaccionCambioTemperatura', label: '¿Reacciona al cambio de temperatura?', type: 'radio', options: ['Si', 'No'] },
        ],
        5: [
            { name: 'sentirPiel', label: '¿Cómo sentís la piel durante el día?' },
            { name: 'reaccionJabon', label: '¿Qué reacción tiene al uso del jabón?' },
            { name: 'reaccionDepilacion', label: '¿Cómo reacciona su piel a la depilación?' },
        ],
        6: [
            { name: 'tomaAnticonceptivo', label: '¿Toma anticonceptivos?', type: 'radio', options: ['Si', 'No'] },
            { name: 'embarazo', label: '¿Estuvo/está embarazada?', type: 'radio', options: ['Si', 'No'] },
            { name: 'diabetes', label: '¿Padece diabetes?', type: 'radio', options: ['Si', 'No'] },
            { name: 'herpes', label: '¿Sufre herpes? Aclarar donde:' },
        ],
        7: [
            { name: 'alteracionHormonal', label: 'Alteración hormonal:' },
            { name: 'antecedentesGinecologicos', label: 'Antecedentes ginecológicos:' },
            { name: 'marcapasos', label: 'Marcapasos:' },
            { name: 'problemasRenales', label: 'Problemas renales:' },
            { name: 'problemasIntestinales', label: 'Intestinales:' },
            { name: 'higadoGraso', label: 'Hígado graso:' },
            { name: 'colesterol', label: 'Colesterol:' },
            { name: 'trigliceridos', label: 'Triglicéridos:' },
            { name: 'cancerPiel', label: 'Cáncer de piel:' },
            { name: 'alergias', label: 'Alergias' },
        ],
        8: [
            { name: 'cirugiasEsteticas', label: 'Cirugías estéticas:' },
            { name: 'cicatrizacionNormal', label: 'Cicatrización normal:' },
            { name: 'protesis', label: 'Prótesis:' },
            { name: 'implantes', label: 'Implantes: SI/NO Donde?', type: 'radio', options: ['SI', 'NO'] },
            { name: 'rellenoLabios', label: 'Relleno en labios:' },
            { name: 'botox', label: 'Bótox:' },
        ],
    };

    const titles = {
        1: 'Datos personales',
        2: 'Hábitos de vida',
        3: 'Cuidado facial',
        4: 'Cuidado facial',
        5: 'Cuidado facial',
        6: 'Alteración patológica',
        7: 'Trastornos hormonales',
        8: 'Antecedentes dermatológicos',
    };

    return (
        <form onSubmit={handleSubmit} className='w-[90%] max-w-[1000px] mx-auto mb-20'>
            <p className='mt-10 text-right texto-rojo font-bold mx-auto'>{currentPage}/{totalSteps}</p>
            <div className="w-full mx-auto max-w-[800px]">

                <h1 className='w-full text-center block texto-rojo font-bold text-[40px] md:text-6xl'>Cuestionario</h1>
                <h2 className='breathing w-full text-center block texto-rojo font-medium text-xl md:text-2xl mb-10'>
                    {titles[currentPage]}
                </h2>
                {questions[currentPage]?.map((question) => (
                    <div key={question.name} className="mb-4">
                        <div className="texto-rojo ml-3 font-medium">{question.label}</div>
                        {question.type === 'radio' ? (
                            <div className="flex flex-row gap-2">
                                {question.options.map(option => (
                                    <label key={option} className="ml-2 flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name={question.name}
                                            value={option}
                                            checked={responses[currentPage][question.name] === option}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <div
                                            className={`rounded-full py-1 px-3 ${responses[currentPage][question.name] === option
                                                ? 'bg-[#f6aac1] text-white transition-all duration-300'
                                                : 'texto-rosa transition-all duration-300 borde-rosa'
                                                }`}
                                        >
                                            {option}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        ) : (
                            <input
                                type="text"
                                name={question.name}
                                value={responses[currentPage][question.name] || ''}
                                onChange={handleChange}
                                className="pl-6 focus:outline-none p-2 rounded-full text-white font-medium w-full fondo-rosa-2"
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-10 md:mt-20 flex flex-row justify-between">
                <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`transition-all duration-300 py-4 px-4 mr-2 ${currentPage === 1 ? "opacity-0" : 'fondo-rosa-2 rounded-full text-white rotate-[-90deg] hover:bg-[#f6c1d1]'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#e7191f" d="M8.53 10.53a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72v9.69a.75.75 0 0 1-1.5 0V7.81z" /></svg>
                </button>
                <button
                    type="button"
                    onClick={handleNext}
                    disabled={currentPage === totalSteps}
                    className={`transition-all duration-300 py-4 px-4 ${currentPage === totalSteps ? "opacity-0" : 'fondo-rosa-2 rounded-full text-white rotate-90 hover:bg-[#f6c1d1]'}`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#e7191f" d="M8.53 10.53a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72v9.69a.75.75 0 0 1-1.5 0V7.81z" /></svg>

                </button>
                {currentPage === totalSteps && (
                    <button
                        type="submit"
                        className='fondo-rosa-2 rounded-full text-white py-4 px-8 hover:bg-[#f6c1d1] transition-all duration-300'
                    >
                        Enviar
                    </button>
                )}
            </div>
        </form>
    );
}
