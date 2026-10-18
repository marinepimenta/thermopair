import type { Metadata } from "next";
import localFont from "next/font/local";
import { Figtree } from "next/font/google";
import "./globals.css";

// Corpo de texto — Figtree.
// Servida pelo Google Fonts (mesmo desenho dos .ttf enviados, porém em woff2
// já subsetado). Para passar a usar os arquivos locais, troque por localFont
// apontando para public/fonts/Figtree-VariableFont_wght.ttf.
const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Títulos — Sentient (Fontshare), auto-hospedada a partir de public/fonts.
// Usa os arquivos variáveis: um só arquivo cobre os pesos 200–700.
const sentient = localFont({
  variable: "--font-heading",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/Sentient-Variable.woff2",
      weight: "200 700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sentient-VariableItalic.woff2",
      weight: "200 700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Thermopair — Climate Care | HVAC in Massachusetts",
  description:
    "Heating and cooling installation and maintenance across Massachusetts. Human service, fast emergency response, and clear pricing before we start.",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/sites/blivecleaning-com-9414df84/root-8a5edab2/images/logo-thermopair-horizontal-gradient.svg`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${sentient.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
