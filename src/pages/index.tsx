import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import ScrollSection from "@/components/ScrollSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import BackButton from "@/components/BackButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
    <HeroSection/>
    <ScrollSection/>
    <Footer/>
    <BackButton/>
    </main>
  );
}
