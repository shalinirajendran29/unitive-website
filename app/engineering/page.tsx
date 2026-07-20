import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EngineeringExpertise from "@/components/engineering";
import WhyChooseUs from "@/components/engineeringwhychooseus";
import IndustriesWeServe from "@/components/industries";
import Contactform from "@/components/engineeringcontact";
import AutodeskSection from "@/components/autodesk";
import Link from "next/link";


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
         ENGINEERING EXCELLENCE
        </span>
      </div>

      {/* Heading */}
  <h1 className="text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-[55px]">
            CREATING IMPACT THROUGH <span className="text-orange-500">ENGINEERING</span>
          </h1>

      {/* Description */}
      <p className="mt-5 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-lg text-gray-200 leading-7">
       At Unitive, we provide advanced engineering solutions that drive innovation, efficiency, and product excellence. 
       We help organizations accelerate development and bring high-quality products to market
      </p>

      {/* Buttons */}
       <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">

        <Link href="/digital">
       <button className="w-full sm:w-auto bg-[#FE6B1F] hover:bg-[#e85d15] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
          EXPLORE SERVICES
        </button>
        </Link>

        <Link href="/contact">
           <button className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300">
          Contact Us
        </button>
        </Link>
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