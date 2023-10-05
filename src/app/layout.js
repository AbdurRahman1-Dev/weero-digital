import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";
import { AOSInit } from "@/components/hooks/aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weero Digital",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <AOSInit />
      <body cla ssName={inter.className}>
        <Navbar />
        <div className="z-50 mb-[600px] sm:mb-[250px]">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
