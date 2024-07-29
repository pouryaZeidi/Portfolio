import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import ScrollSection from "@/components/scrollsection/ScrollSection";
import Footer from "@/components/Footer";
import ScrollSection2 from "@/components/scrollsection/ScrollSection2";
import ScrollSection3 from "@/components/scrollsection/ScrollSection3";
import Experience from "@/components/scrollsection/experience/Experience";
import Projects from "@/components/scrollsection/projectscomponents/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
    
    <HeroSection/>
    <ScrollSection/>
    <Experience/>
    <ScrollSection2/>
    <Projects/>
    <ScrollSection3/>
    <Footer/>
    
    </main>
  );
}
