import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";
import { AOSInit } from "@/components/hooks/aos";
import Whatsapp from "@/components/shared/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weero Digital",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <AOSInit />
      <body className={inter.className}>
        <Whatsapp />
        <Navbar />
        <div className="z-50 mb-[650px] sm:mb-[400px] md:mb-[300px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
