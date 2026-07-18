import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalExpertise from "@/components/digital";
import WhyChooseUs from "@/components/digitalwhychooseus";
import DigitalProducts from "@/components/digitalproducts";
import Contactform from "@/components/digitalcontact";
import Link from "next/link";


export default function DigitalPage() {
  return (
    <>
      <Navbar />

<section className="relative min-h-[550px] sm:min-h-[600px] lg:h-[520px] overflow-hidden flex items-center">

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
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>

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
          Digital Transformation Leaders
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-[55px]">
        TRANSFORM IDEAS TO
        <span className="block text-[#FE6B1F]">
          DIGITAL SOLUTIONS
        </span>
      </h1>

      {/* Description */}
      <p className="mt-5 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-lg text-gray-200 leading-7">
        At Unitive, we deliver smart software solutions that empower
        businesses to innovate, grow, and succeed. Our scalable
        technologies are designed to create lasting impact and
        long-term value.
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
            PARTNER WITH US
          </button>
        </Link>

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