import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalExpertise from "@/components/digital";
import WhyChooseUs from "@/components/digitalwhychooseus";



export default function DigitalPage() {
  return (
    <>
      <Navbar />

      <section
        className="relative h-[650px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/images/digital-banner.png')", 
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full">
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
                Digital Transformation Leaders
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-white font-bold leading-[1.1] text-[50px]">
              TRANSFORM IDEAS TO <span className="text-[#FE6B1F]">DIGITAL SOLUTIONS
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-white/90 text-xl leading-10 max-w-[700px]">
              At Unitive, we deliver smart software solutions that empower
              businesses to innovate, grow, and succeed. Our scalable
              technologies are designed to create lasting impact and
              long-term value.
            </p>

            {/* Buttons */}
            <div className="flex gap-5 mt-10">

              <button className="bg-[#FE6B1F] hover:bg-[#e85d15] text-white font-semibold px-8 py-4 rounded-xl transition">
                EXPLORE SERVICES
              </button>

              <button className="border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
                PARTNER WITH US
              </button>

            </div>

          </div>
        </div>
      </section>
       <DigitalExpertise />
    <WhyChooseUs />
   
      <Footer />
    </>
  );
}