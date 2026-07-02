"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
        className="relative h-[280px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/aboutbanner.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#7d1d1d]/70"></div>

        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white uppercase">
          ABOUT US
        </h1>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Identity Badge */}
              <span className="inline-flex items-center border border-orange-300 rounded-full px-4 py-1.5 text-xs font-semibold text-gray-700 mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                OUR IDENTITY
              </span>

              {/* Paragraph 1 */}
              <p className="text-gray-600 text-base leading-8 mb-6 text-justify">
                We at Unitive Technologies started solving challenging
                problems from 2017 in software development using future
                technologies such as Machine Learning, Deep Learning,
                Computer Vision, Data Science, etc. We provide accurate,
                innovative, and reliable solutions while extending our
                expertise into Embedded and Mechanical domains.
              </p>{/* Paragraph 2 */}
              <p className="text-gray-600 text-base leading-8 text-justify">
                We focus on challenging opportunities that help showcase
                our skills. We began our journey with just 2 people and
                have now grown into a team of 28 enthusiastic
                professionals from different domains, working together to
                create ingenious solutions.
              </p>
            </div>

            {/* Right Image */}
            <div>
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/images/ouridentity.png"
                  alt="About Us"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Mission Section */}
<section className="relative py-20 bg-white overflow-hidden">

  {/* Top Right Pattern */}
  <div className="absolute top-10 right-0 opacity-20">
    <Image
      src="/images/rightpattern.png"
      alt="pattern"
      width={180}
      height={180}
    />
  </div>

  {/* Bottom Left Pattern */}
  <div className="absolute bottom-8 left-8 opacity-20">
    <Image
      src="/images/Bottom.png"
      alt="pattern"
      width={180}
      height={180}
    
    />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-[#E97A4D]">
        OUR VISION & MISSION
      </h2>

      <p className="mt-4 text-gray-500 text-lg">
        We bridge the gap between creative digital experiences and robust technical engineering.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-10">

      {/* Mission */}
      <div className="group border border-gray-200 rounded-[30px] p-8 transition-all duration-500 hover:bg-[#EA7747] hover:shadow-xl">

        <div className="flex items-center gap-5 mb-6">

          <Image
            src="/images/ourvision.png"
            alt="mission"
            width={70}
            height={70}
            className="block group-hover:hidden"
          />

          <Image
            src="/images/hoverimage.svg"
            alt="mission"
            width={70}
            height={70}
            className="hidden group-hover:block"
          />

          <h3 className="text-4xl font-semibold text-[#E97A4D] group-hover:text-white">
            Our Mission
          </h3>

        </div>

        <p className="text-gray-700 leading-8 group-hover:text-white">
          We at unitive technologies, started to solve challenging problems from 2017 in software development 
          using future technologies such as Machine  Learning, Deep Learning, Computer Vision, Data Science etc., 
          that impress as well as provides best and accurate solution. 
          We extended our domain of expertise in Embedded and Mechanical too. 
        </p>

      </div>

      {/* Vision */}
      <div className="group border border-gray-200 rounded-[30px] p-8 transition-all duration-500 hover:bg-[#EA7747] hover:shadow-xl">

        <div className="flex items-center gap-5 mb-6">

          <Image
            src="/images/ourvision.png"
            alt="vision"
            width={70}
            height={70}
            className="block group-hover:hidden"
          />

          <Image
            src="/images/hoverimage.svg"
            alt="vision"
            width={70}
            height={70}
            className="hidden group-hover:block"
          />

          <h3 className="text-4xl font-semibold text-[#E97A4D] group-hover:text-white">
            Our Vision
          </h3>

        </div>

        <p className="text-gray-700 leading-8 group-hover:text-white">
         “Our main aim is to develop in a constant manner and become a leading performer in this
          competitive global marketplace. Fortunately, we have been able to gather a crew of professionals that can shape and mold their collective experiences,
          all of them posses outstanding talent that can help to accelerate your organization”
        </p>

      </div>

    </div>

  </div>

</section>
{/* Trusted By Industry Leaders */}
<section className="py-24 px-24 bg-white">

  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold">
      <span className="text-[#FE5800]">Trusted By</span>{" "}
      <span className="text-[#000000]">Industry Leaders</span>
    </h2>

    <p className="text-gray-500 text-xl mt-4 leading-9">
      Delivering reliable engineering solutions for OEMs and Tier-1 suppliers
      across global industries
    </p>
  </div>

  {/* Logo Grid */}
  <div className="grid grid-cols-5 gap-8">
    {logos.map((logo, index) => (
      <div
        key={index}
        className="
        h-40 rounded-3xl
        bg-[#FAFAFA]
        border border-[#ECECEC]
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        hover:bg-white
        hover:-translate-y-2
        hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]
        cursor-pointer"
      >
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={90}
          className="object-contain"
        />
      </div>
    ))}
  </div>

</section>

  <Footer /> 
      
    </>
  );
}