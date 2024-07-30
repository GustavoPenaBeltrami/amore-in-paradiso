'use client';

import { useState } from 'react';

const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

export default function Cuestionario() {
    const totalSteps = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState("");
    const [responses, setResponses] = useState({
        1: { nombre: '', apellido: '', telefono: '', email: '' },
        2: { edad: '', ocupacion: '', estiloVivienda: '', motivoConsulta: '' },
        3: { actividadFisica: '', tipoAlimentacion: '', consumeLacteos: '', consumeHarinas: '', consumeCarnes: '', consumeVerdurasFrutas: '', tomaAgua: '' },
        4: { rutina: '', detallesRutina: '', productos: '', seMaquilla: '', seMaquillaTodosLosDias: '', seDesmaquilla: '' },
        5: { usaProtectorSolar: '', frecuenciaProtectorSolar: '', tomaSol: '', reaccionPielSol: '', reaccionCambioTemperatura: '' },
        6: { sentirPiel: '', reaccionJabon: '', reaccionDepilacion: '' },
        7: { tomaAnticonceptivo: '', embarazo: '', diabetes: '', herpes: '' },
        8: { alteracionHormonal: '', antecedentesGinecologicos: '', antecedentesCardiacos: '', problemasRenales: '', problemasDigestivos: '', cancerPiel: '', alergias: '' },
        9: { cirugiasEsteticas: '', cicatrizacionNormal: '', rellenoLabios: '', botox: '' },
        10: { foto: null }
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
        setError('');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            responses[1].apellido === '' ||
            responses[1].nombre === '' ||
            responses[1].telefono === '' ||
            responses[1].email === ''
        ) {
            setError('¡Por favor complete todos los campos!');
            return;
        } else if (!emailRegex.test(responses[1].email)) {
            setError('¡Por favor ingrese un email válido!');
            return;
        } else {
            if (currentPage < totalSteps) {
                setCurrentPage(currentPage + 1);
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(responses, null, 2),
            });

            const result = await response.json();

            if (result.ok) {
                console.log('Respuesta correcta');
                alert('¡Gracias por completar el cuestionario');
            } else {
                console.log('Respuesta incorrecta');
                // Realiza las acciones necesarias para una respuesta incorrecta
            }
        } catch (error) {
            console.error('Error:', error);
            // Maneja el error adecuadamente
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const base64 = await convertBlobToBase64(file);
            setResponses(prevResponses => ({
                ...prevResponses,
                [currentPage]: {
                    ...prevResponses[currentPage],
                    foto: base64
                }
            }));
        }
    };

    const handleCameraClick = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            const video = document.createElement('video');
            video.srcObject = stream;
            video.autoplay = true;
            video.style.width = '100%';
            video.style.height = 'auto';
    
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.style.display = 'none'; // Oculta el canvas
    
            // Crear el modal
            const modal = document.createElement('div');
            modal.className = 'modal';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
    
            // Agregar el video y canvas al contenido del modal
            modalContent.appendChild(video);
            modalContent.appendChild(canvas);
    
            // Botón para capturar la imagen
            const captureButton = document.createElement('button');
            captureButton.textContent = 'Capturar';
            captureButton.onclick = () => {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageUrl = canvas.toDataURL('image/png');
                setResponses(prevResponses => ({
                    ...prevResponses,
                    [currentPage]: {
                        ...prevResponses[currentPage],
                        foto: imageUrl
                    }
                }));
                // Limpiar el modal
                document.body.removeChild(modal);
                stream.getTracks().forEach(track => track.stop()); // Detener el stream de video
            };
            modalContent.appendChild(captureButton);
    
            // Botón para cerrar el modal
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Cerrar';
            closeButton.onclick = () => {
                document.body.removeChild(modal);
                stream.getTracks().forEach(track => track.stop()); // Detener el stream de video
            };
            modalContent.appendChild(closeButton);
    
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
        } catch (error) {
            console.error('Error al acceder a la cámara:', error);
        }
    };

    const questions = {
        1: [
            { name: 'nombre', label: 'Nombre:' },
            { name: 'apellido', label: 'Apellido:' },
            { name: 'telefono', label: 'Teléfono:' },
            { name: 'email', label: 'Email:' },
        ],
        2: [
            { name: 'edad', label: 'Edad:' },
            { name: 'ocupacion', label: 'Ocupación:' },
            { name: 'estiloVivienda', label: 'Estilo de vivienda (clima y ubicación):' },
            { name: 'motivoConsulta', label: 'Motivo de consulta:' },
        ],
        3: [
            { name: 'actividadFisica', label: 'Describa si hace actividad fisica y el entorno donde se realiza.' },
            { name: 'tipoAlimentacion', label: '¿Tipo de alimentación?', type: 'radio', options: ['Vegetarianismo', 'Veganismo', 'Sibo', 'Celiaquía', 'Diabetes', 'Omnívoros'] },
            { name: 'consumeLacteos', label: '¿Consume lácteos?', type: 'radio', options: ['Si', 'No'] },
            { name: 'consumeHarinas', label: '¿Consume harinas?', type: 'radio', options: ['Si', 'No'] },
            { name: 'consumeCarnes', label: '¿Consume carnes?', type: 'radio', options: ['Si', 'No'] },
            { name: 'consumeVerdurasFrutas', label: '¿Consume verduras y frutas?', type: 'radio', options: ['Si', 'No'] },
            { name: 'tomaAgua', label: '¿Cuanta agua toma por dia?' },
        ],
        4: [
            { name: 'rutina', label: '¿Haces rutina de cuidado facial?', type: 'radio', options: ['Si', 'No'] },
            { name: 'detallesRutina', label: 'Explique su rutina: (Si marcó que si)' },
            { name: 'productos', label: '¿Que productos usa y de que marca? (Si marcó que si)' },
            { name: 'seMaquilla', label: '¿Se maquilla?', type: 'radio', options: ['Si', 'No'] },
            { name: 'seMaquillaTodosLosDias', label: '¿Con cuanta frecuencia? (Si marcó que si)' },
            { name: 'seDesmaquilla', label: '¿Se desmaquilla siempre? (Si marcó que si)' },
        ],
        5: [
            { name: 'usaProtectorSolar', label: '¿Usa protector solar?', type: 'radio', options: ['Si', 'No'] },
            { name: 'frecuenciaProtectorSolar', label: '¿Con qué frecuencia? (Si marcó que si)' },
            { name: 'tomaSol', label: '¿Toma sol?', type: 'radio', options: ['Si', 'No'] },
            { name: 'reaccionPielSol', label: '¿Cómo reacciona su piel al frente del sol? (Si marcó que si)' },
            { name: 'reaccionCambioTemperatura', label: '¿Su piel cómo reacciona al cambio de temperatura?' },
        ],
        6: [
            { name: 'sentirPiel', label: '¿Cómo sentís la piel durante el día?' },
            { name: 'reaccionJabon', label: '¿Qué reacción tiene al uso del jabón?' },
            { name: 'reaccionDepilacion', label: '¿Cómo reacciona su piel a la depilación?' },
        ],
        7: [
            { name: 'tomaAnticonceptivo', label: '¿Toma anticonceptivos?', type: 'radio', options: ['Si', 'No'] },
            { name: 'embarazo', label: '¿Estuvo/está embarazada?', type: 'radio', options: ['Si', 'No'] },
            { name: 'diabetes', label: '¿Padece diabetes?', type: 'radio', options: ['Si', 'No'] },
            { name: 'herpes', label: '¿Sufre herpes? Aclarar donde:' },
        ],
        8: [
            { name: 'alteracionHormonal', label: 'Alteración hormonal:', type: 'radio', options: ['Si', 'No'] },
            { name: 'antecedentesGinecologicos', label: 'Antecedentes ginecológicos:', type: 'radio', options: ['Si', 'No'] },
            { name: 'antecedentesCardiacos', label: 'Antecedentes cardiacos:', type: 'radio', options: ['Si', 'No'] },
            { name: 'problemasRenales', label: 'Problemas renales:', type: 'radio', options: ['Si', 'No'] },
            { name: 'problemasDigestivos', label: 'Problemas digestivos:', type: 'radio', options: ['Si', 'No'] },
            { name: 'cancerPiel', label: 'Cáncer de piel:', type: 'radio', options: ['Si', 'No'] },
            { name: 'alergias', label: '¿Tiene alergias? Detalle.', },
        ],
        9: [
            { name: 'cirugiasEsteticas', label: 'Cirugías estéticas:', type: 'radio', options: ['Si', 'No'] },
            { name: 'cicatrizacionNormal', label: 'Cicatrización normal:', type: 'radio', options: ['Si', 'No'] },
            { name: 'rellenoLabios', label: 'Relleno en labios:', type: 'radio', options: ['Si', 'No'] },
            { name: 'botox', label: 'Bótox:', type: 'radio', options: ['Si', 'No'] },
        ],
        10: [
            { name: 'foto', label: 'Sube una foto o toma una con tu cámara:' }
        ]
    };

    const titles = {
        1: 'Datos de contacto',
        2: 'Datos personales',
        3: 'Hábitos de vida',
        4: 'Cuidado facial',
        5: 'Cuidado facial',
        6: 'Cuidado facial',
        7: 'Alteración patológica',
        8: 'Trastornos hormonales',
        9: 'Antecedentes dermatológicos',
        10: 'Foto de perfil'
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
                            currentPage === 10 ? (
                                <div>
                                    <div className='flex items-center mt-2 ml-2'>

                                        <div className="file-upload">
                                            <input
                                                id="file-upload"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                className="file-input"
                                            />
                                            <label htmlFor="file-upload" className="cursor-pointer file-label fondo-rosa-2 rounded-full text-white p-1 pb-2 px-2 hover:bg-[#f6c1d1] transition-all duration-300">Seleccionar Foto</label>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleCameraClick}
                                            className="fondo-rosa-2 rounded-full text-white p-1 px-2 ml-3 hover:bg-[#f6c1d1] transition-all duration-300"
                                        >
                                            Tomar Foto
                                        </button>
                                    </div>
                                    {responses[10].foto && (
                                        <div className="mt-4 mx-auto w-fit">
                                            <img
                                                src={responses[10].foto}
                                                alt="Foto"
                                                className="w-full max-w-[400px] rounded-lg"
                                            />
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <input
                                    type="text"
                                    name={question.name}
                                    value={responses[currentPage][question.name] || ''}
                                    onChange={handleChange}
                                    className="pl-6 focus:outline-none p-2 rounded-full text-white font-medium w-full fondo-rosa-2"
                                />
                            )
                        )}
                    </div>
                ))}
            </div>
            <span className='texto-rojo p-4 rounded-lg italic font-medium text-center w-full block'>{error}</span>
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
