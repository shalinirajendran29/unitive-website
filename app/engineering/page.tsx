import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EngineeringExpertise from "@/components/engineering";
import WhyChooseUs from "@/components/digitalwhychooseus";
import IndustriesWeServe from "@/components/industries";
import Contactform from "@/components/contactform";
import AutodeskSection from "@/components/autodesk";


export default function EngineeringPage() {
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
    <source src="/video/ENG Banner Video.mp4" type="video/mp4" />
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
         ENGINEERING EXCELLENCE
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-white text-[55px] font-bold leading-tight">
        Engineering Excellence Through <span className="block text-[#FE6B1F]">
          Innovation
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 text-white text-lg leading-8">
       At Unitive, we provide advanced engineering solutions that drive innovation, efficiency, and product excellence. 
       We help organizations accelerate development and bring high-quality products to market
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
      <AutodeskSection />
       <EngineeringExpertise />
    <WhyChooseUs />
    <IndustriesWeServe />
    <Contactform />
      <Footer />
    </>
  );
}