import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalExpertise from "@/components/digital";
import WhyChooseUs from "@/components/digitalwhychooseus";
import DigitalProducts from "@/components/digitalproducts";
import Contactform from "@/components/contactform";


export default function DigitalPage() {
  return (
    <>
      <Navbar />

 <section className="relative h-[520px] overflow-hidden flex items-center">

  {/* Background Video */}
  <video
    autoPlay
    loop
    playsInline
     muted
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover scale-110"
  >
    <source src="/video/digitalvideo.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 w-full pl-8 sm:pl-10 md:pl-16 lg:pl-24 pr-6">
    <div className="max-w-[700px]">

      {/* Badge */}
      <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-gray-500 bg-black/40 mb-8">
        <Image
          src="/images/digitalbannericon.png"
          alt="icon"
          width={18}
          height={18}
        />
        <span className="text-white text-sm font-semibold uppercase">
          Digital Transformation Leaders
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-white text-[55px] font-bold leading-tight">
        TRANSFORM IDEAS TO
        <span className="block text-[#FE6B1F]">
          DIGITAL SOLUTIONS
        </span>
      </h1>

      {/* Description */}
      <p className="mt-8 text-white text-lg leading-8">
        At Unitive, we deliver smart software solutions that empower
        businesses to innovate, grow, and succeed. Our scalable
        technologies are designed to create lasting impact and
        long-term value.
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
       <DigitalExpertise />
    <WhyChooseUs />
    <DigitalProducts />
    <Contactform />
      <Footer />
    </>
  );
}