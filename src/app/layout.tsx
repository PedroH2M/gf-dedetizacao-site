import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GF Dedetização | Proteção e Segurança",
  description: "Empresa especializada em controle de pragas: formigas, baratas, mosquitos, ratos, cupins, escorpiões, aranhas, traças e carrapatos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}
