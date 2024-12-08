import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/compnents/header'
import Navbar from '@/app/compnents/navbar'
import Footer from '@/app/compnents/footer';
import Topbar from '@/app/compnents/topbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
      <Topbar />
        <Header />
        <Navbar />
        
        {children}
        <Footer />
        </body>
    </html>
  );
}
