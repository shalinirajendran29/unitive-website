import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/caewhychooseus";
import ExpertiseSection from "@/components/caeexpertise";
import Contactform from "@/components/contactform";
import Link from "next/link";



export default function CaePage() {
  return (
    <>
      <Navbar />

 <section className="relative h-[520px] overflow-hidden flex items-center">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover scale-110"
  >
    <source src="/video/caevideo.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
   <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-3xl">

      {/* Badge */}
       <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-3 rounded-full border border-gray-500 bg-black/40 mb-6 sm:mb-8">
        <Image
          src="/images/digitalbannericon.png"
          alt="icon"
          width={18}
          height={18}
        />
         <span className="text-[11px] sm:text-sm font-semibold uppercase text-white">
         ADVANCE SIMULATION EXPERTS
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-[55px]">
  <span className="block">
    NEXT-GEN <span className="text-[#FE6B1F]">CAE</span>
  </span>
  <span className="block">CONSULTING SERVICES</span>
</h1>

      {/* Description */}
       <p className="mt-5 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-lg text-gray-200 leading-7">
       Unitive leads the way in virtual engineering. From automotive 
       crash simulations to complex aerospace fluid dynamics, we provide data-driven insights
      </p>

      {/* Buttons */}
       <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">
        <Link href="/cae">
         <button className="w-full sm:w-auto bg-[#FE6B1F] hover:bg-[#e85d15] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
          EXPLORE SERVICES
        </button>
        </Link>
          <Link href="/contact">
           <button className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
          PARTNER WITH US
        </button>
         </Link>
      </div>
      

    </div>
  </div>

</section>
       <ExpertiseSection />
    <WhyChooseUs />
    
    <Contactform />
      <Footer />
    </>
  );
}