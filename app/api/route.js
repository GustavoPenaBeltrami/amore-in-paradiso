import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { Buffer } from "buffer";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'justinavigilgargani@gmail.com',
        pass: process.env.GMAIL_PASSWORD
    }
});

const formatResponses = (responses) => {
    let formattedString = "";
    for (const [key, value] of Object.entries(responses)) {
        formattedString += `Carta ${key}:\n`;
        for (const [subKey, subValue] of Object.entries(value)) {
            formattedString += `${subKey.charAt(0).toUpperCase() + subKey.slice(1)}: ${subValue}\n`;
        }
        formattedString += "\n";
    }
    return formattedString;
};

export async function POST(request) {
    try {
        const body = await request.json();  // Lee el cuerpo de la solicitud
        const userEmail = body["1"].email;

        const formattedBody = formatResponses(body);

        // Manejo de la imagen base64 en memoria
        let imageAttachment = null;
        if (body["10"] && body["10"].foto) {
            const base64Image = body["10"].foto.split(';base64,').pop();
            const buffer = Buffer.from(base64Image, 'base64');
            imageAttachment = {
                filename: 'image.png', // Puedes cambiar el nombre y la extensión según sea necesario
                content: buffer,
                encoding: 'base64'
            };
        }

        const mailOptions = {
            from: 'justinavigilgargani@gmail.com',
            to: 'justinavigilgargani@gmail.com',
            subject: 'Amore in paradiso - Formulario completado',
            text: `Alguien completó un formulario:\n\n${formattedBody}`,
            attachments: imageAttachment ? [imageAttachment] : [], // Adjunta la imagen solo si existe
        };

        const mailToUser = {
            from: 'justinavigilgargani@gmail.com',
            to: userEmail,
            subject: 'Amore in paradiso',
            text: `
            Hola ${body["1"].nombre},
            
            Gracias por completar el formulario. Nos pondremos en contacto contigo pronto mediante whatsapp o email.
            
            Amore in paradiso
            `,
        };

        await transporter.sendMail(mailOptions);
        await transporter.sendMail(mailToUser);

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Error reading request body or sending email:', error);
        return NextResponse.json({ status: "error", message: error.message });
    }
}
