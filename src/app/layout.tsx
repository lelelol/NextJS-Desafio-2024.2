import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next reading",
  description: "Loja de livros com preços imbatíveis",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={OpenSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
