import type { Metadata } from "next";
import { Figtree, Libre_Baskerville } from "next/font/google";
import "./globals.css";

// Corpo de texto da marca.
const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// TÍTULOS — placeholder temporário.
// A fonte da marca é a Sentient (Fontshare), que não está no Google Fonts.
// Para trocar quando os arquivos estiverem em public/fonts/:
//   1. import localFont from "next/font/local";
//   2. const sentient = localFont({
//        variable: "--font-heading",
//        src: [
//          { path: "../../public/fonts/Sentient-Regular.woff2", weight: "400", style: "normal" },
//          { path: "../../public/fonts/Sentient-Medium.woff2",  weight: "500", style: "normal" },
//          { path: "../../public/fonts/Sentient-Bold.woff2",    weight: "700", style: "normal" },
//        ],
//      });
//   3. troque `libreBaskerville.variable` por `sentient.variable` no <html>.
const libreBaskerville = Libre_Baskerville({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Thermopair — Climate Care | HVAC em Massachusetts",
  description:
    "Instalação e manutenção de aquecimento e climatização em Massachusetts. Atendimento humano, resposta rápida em emergências e transparência total em prazos e custos.",
  icons: {
    icon: "/sites/blivecleaning-com-9414df84/root-8a5edab2/images/logo-thermopair-horizontal-gradient.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
