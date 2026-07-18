import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/digitalwhychooseus";
import ExpertiseSection from "@/components/caeexpertise";
import Contactform from "@/components/contactform";



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
  <div className="relative z-10 max-w-7xl mx-auto w-full px-8 lg:px-12">
    <div className="max-w-[650px]">

      {/* Badge */}
      <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-gray-500 bg-black/40 mb-8">
        <Image
          src="/images/digitalbannericon.png"
          alt="icon"
          width={18}
          height={18}
        />
        <span className="text-white text-sm font-semibold uppercase">
         ADVANCE SIMULATION EXPERTS
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-white text-[50px] font-bold leading-tight">NEXT-GEN<span className="block text-[#FE6B1F]">CAE</span>
        CONSULTING SERVICES
      </h1>

      {/* Description */}
      <p className="mt-8 text-white text-lg leading-8">
       Unitive leads the way in virtual engineering. From automotive 
       crash simulations to complex aerospace fluid dynamics, we provide data-driven insights
      </p>

      {/* Buttons */}
      <div className="flex gap-5 mt-10">
        <button className="bg-[#FE6B1F] hover:bg-[#e85d15] text-white px-8 py-4 rounded-xl font-semibold">
          EXPLORE SERVICES
        </button>

        <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black">
          PARTNER WITH US
        </button>
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