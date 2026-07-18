"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contactform from "@/components/contactus";


export default function About() {
   const logos = [
    "/images/lt.png",
    "/images/autosys.png",
    "/images/blackveatch.png",
    "/images/nadi.png",
    "/images/rev.png",
    "/images/celeros.png",
    "/images/suzuki.jpg",
    "/images/birlasoft.png",
    "/images/honeywell.png",
    "/images/pollrich.jpg",
  ];
  return (
    <>
    <Navbar />
      {/* Banner */}
      <section
        className="relative h-[200px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/aboutbanner.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#7d1d1d]/70"></div>

        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white uppercase">
          Contact US
        </h1>
      </section>
  

  <Contactform /> 
  <Footer /> 
      
    </>
  );
}