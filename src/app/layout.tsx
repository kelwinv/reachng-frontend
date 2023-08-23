import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-montserrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ReachNG",
  description:
    "O ReachNG visa facilitar o acesso entre apoiadores, empresas e Organizações Não Governamentais (ONGs).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
