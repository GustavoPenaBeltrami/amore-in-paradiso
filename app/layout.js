import { Encode_Sans_Expanded } from "next/font/google";
import "./globals.css";
import { HeadbarDesktop } from "@/components/HeadbarDesktop";
import { HeadbarMobile } from "@/components/HeadbarMobile";

const inter = Encode_Sans_Expanded({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"]
});

export const metadata = {
  title: "Amore in Paradiso",
  description: "Asesoria cosmétrica virtual, personalizada y con seguimiento periodico.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} fondo-rosa`}>
        <HeadbarDesktop />
        <HeadbarMobile />
        {children}
        </body>
    </html>
  );
}
