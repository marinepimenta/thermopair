import type { Metadata } from "next";
import { Sofia_Sans, Sofia_Sans_Semi_Condensed, Work_Sans } from "next/font/google";
import "./globals.css";

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sofiaSansSemiCondensed = Sofia_Sans_Semi_Condensed({
  variable: "--font-sofia-sans-semi-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blive House Cleaning Service: MA & NH Home & Office Cleaning Near Me",
  description:
    "Blive Cleaning provides professional home and business cleaning in Massachusetts and New Hampshire. We handle the cleaning so you can relax in a beautifully maintained space.",
  icons: {
    icon: "/sites/blivecleaning-com-9414df84/root-8a5edab2/images/blive-favico.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sofiaSans.variable} ${sofiaSansSemiCondensed.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
