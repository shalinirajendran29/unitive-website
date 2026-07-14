
"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import WhyChooseUs from "@/components/digitalwhychooseus";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation} from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
export default function Home() {
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
   <section className="min-h-screen px-5 sm:px-6 md:px-10 lg:px-16 xl:px-24">

  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop={true}
    className="heroSwiper"
  >

    {/* Slide 1 - DIGITAL (உங்க existing content) */}
    <SwiperSlide>
     <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen gap-10 lg:gap-20 py-10">

        <div className="w-full lg:w-[45%] text-center lg:text-left">
          <p className="inline-block border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-xs sm:text-sm mb-6">
            DIGITAL TRANSFORMATION LEADERS
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            TRANSFORM IDEAS INTO <br />
            DIGITAL <span className="text-orange-500">SOLUTIONS</span>
          </h1>

         <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-xl mx-auto lg:mx-0">
          At Unitive, we deliver smart software solutions that empower businesses to innovate, grow, and succeed. 
          Our scalable technologies are designed to create lasting impact and long-term value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
              Explore Our Solutions
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Talk To Us
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[55%] flex justify-center">
          <Image
            src="/images/heroimage.png"
            alt="Hero"
            width={500}
            height={500}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
          />
        </div>

      </div>
    </SwiperSlide>

    {/* Slide 2 - ENGINEERING (NEW ADD) */}
    <SwiperSlide>
      <div className="flex items-center justify-between min-h-[85vh] gap-20">

        <div className="w-[45%]">
          <p className="inline-block border border-orange-500 text-orange-500 px-4 py-2 rounded-full text-sm mb-6">
         ENGINEERING EXCELLENCE
          </p>

          <h1 className="text-4xl font-bold leading-tight mb-6">
          ENGINEERING EXCELLENCE THROUGH 
            <span className="text-orange-500"> INNOVATION</span> 
          </h1>

          <p className="text-gray-600 mb-8 max-w-xl">
           At Unitive, we provide advanced engineering solutions that drive innovation, efficiency, and product excellence. 
           We help organizations accelerate development and bring high-quality products to market
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
               Explore Our Solutions
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>

        <div className="w-[55%] flex justify-center">
          <Image
            src="/images/banner2.png"
            alt="Engineering"
            width={500}
            height={500}
           className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
          />
        </div>

      </div>
    </SwiperSlide>

  </Swiper>

</section>
    {/* section 2 */}
     <div className="border-y border-orange-200 py-4 mb-16">
  <div className="flex overflow-x-auto whitespace-nowrap gap-8 px-4 no-scrollbar">
    <span className="bg-gradient-to-r from-[#FE5800] to-[#5B5B5B] bg-clip-text text-transparent text-3xl font-light">
      OUR EXPERTISE
    </span>

    <span className="bg-gradient-to-r from-[#FE5800] to-[#3B3B3B] bg-clip-text text-transparent text-3xl font-light">
      OUR EXPERTISE
    </span>

    <span className="bg-gradient-to-r from-[#FE5800] to-[#5B5B5B] bg-clip-text text-transparent text-3xl font-light">
      OUR EXPERTISE
    </span>

    <span className="bg-gradient-to-r from-[#FE5800] to-[#5B5B5B] bg-clip-text text-transparent text-3xl font-light">
      OUR EXPERTISE
    </span>
    <span className="bg-gradient-to-r from-[#FE5800] to-[#5B5B5B] bg-clip-text text-transparent text-3xl font-light">
      OUR EXPERTISE
    </span>
    
  </div>
</div>
      {/* About Us Section */}
<section className="relative py-24 px-24 bg-[#F5F5F5] overflow-hidden">

  {/* Left Bottom Pattern */}
  <div className="absolute left-0 bottom-0 opacity-20">
    <Image
      src="/images/dot2.png"
      alt="Dot Pattern"
      width={180}
      height={180}
    />
  </div>

  {/* Right Top Pattern */}
  <div className="absolute right-0 top-0 opacity-20">
    <Image
      src="/images/dotpattern.png"
      alt="Dot Pattern"
      width={180}
      height={180}
    />
  </div>

  <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

    {/* Left Image */}
    <div>
      <Image
        src="/images/aboutus.png"
        alt="About Us"
        width={600}
        height={500}
        className="rounded-3xl w-full"
      />
    </div>

    {/* Right Content */}
    <div>
    <h2 className="inline-block text-5xl font-bold mb-4 bg-gradient-to-r from-[#FE5800]  to-[#3B3B3B] bg-clip-text text-transparent">
  ABOUT US
</h2>

      <h3 className="text-2xl text-gray-700 mb-6">
        We Build What Matters
      </h3>

      <p className="text-gray-600 leading-8 mb-4">
       We believe <strong>great ideas</strong> deserve exceptional execution. Through innovative software and
        advanced engineering solutions, we help businesses transform challenges into opportunities, 
        accelerate growth, and achieve sustainable success. Driven by innovation
        and a commitment to excellence, we deliver solutions that create measurable impact and lasting value
      </p>

     
 <Link href="/about">
  <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
    Learn More →
  </button>
</Link>
    </div>

  </div>

</section>
{/* Smart Business Products Section */}
<section className="py-24 px-24 max-w-7xl mx-auto bg-white">

  {/* Heading */}
  <div className="flex justify-between items-center mb-16">

    <div>
     
      <h2 className="inline-block text-5xl font-bold mb-4 bg-gradient-to-r from-[#FE5800] to-[#3B3B3B] bg-clip-text text-transparent">
 SMART BUSINESS PRODUCTS
</h2>

      <p className="text-gray-500 mt-3 text-lg">
        Secure, integrated software solutions built for modern businesses
      </p>
    </div>

    {/* Navigation Buttons */}
    <div className="flex gap-3">

      <button className="custom-prev w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center ">
        <Image
          src="/images/slidericon.png"
          alt="Previous"
          width={20}
          height={20}
        />
      </button>

      <button className="custom-next w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center ">
        <Image
          src="/images/sliderrighticon.png"
          alt="Next"
          width={18}
          height={18}
        />
      </button>

    </div>

  </div>

  {/* Swiper */}
  <Swiper
    modules={[Navigation]}
    navigation={{
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    }}
    spaceBetween={30}
    slidesPerView={3}
  >

    {/* Card 1 */}
    <SwiperSlide>
      <div className="group relative overflow-hidden rounded-3xl shadow-lg">
        <Image
          src="/images/Retailerp.png"
          alt="Jewellery Retail ERP"
          width={350}
          height={450}
          className="w-full h-auto object-contain"
        />

        <div className="absolute bottom-0 left-0 w-full bg-[#101828] text-white p-6 h-24 group-hover:h-56 transition-all duration-500">

          <h3 className="text-2xl font-bold">
            JEWELLERY RETAIL ERP
          </h3>

          <div className="opacity-0 group-hover:opacity-100 transition duration-500 mt-4">

            <div className="w-16 h-1 bg-orange-500 mb-4"></div>

            <p className="text-gray-300 mb-4">
              Transform the way you manage your jewellery business.
            </p>

            <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full">
              Know More →
            </button>

          </div>

        </div>
      </div>
    </SwiperSlide>

    {/* Card 2 */}
    <SwiperSlide>
      <div className="group relative overflow-hidden rounded-3xl shadow-lg">
        <Image
          src="/images/ERP.png"
          alt="Jewellery Manufacturing ERP"
          width={350}
          height={450}
          className="w-full h-auto object-contain"
        />

        <div className="absolute bottom-0 left-0 w-full bg-[#101828] text-white p-6 h-24 group-hover:h-56 transition-all duration-500">

          <h3 className="text-2xl font-bold">
            JEWELLERY MANUFACTURING ERP
          </h3>

          <div className="opacity-0 group-hover:opacity-100 transition duration-500 mt-4">

            <div className="w-16 h-1 bg-orange-500 mb-4"></div>

            <p className="text-gray-300 mb-4">
              Streamline manufacturing and production workflows.
            </p>

            <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full">
              Know More →
            </button>

          </div>

        </div>
      </div>
    </SwiperSlide>

    {/* Card 3 */}
    <SwiperSlide>
      <div className="group relative overflow-hidden rounded-3xl shadow-lg">
        <Image
          src="/images/ERP.png"
          alt="Gate Management System"
          width={350}
          height={450}
          className="w-full h-auto object-contain"
         

        />

        <div className="absolute bottom-0 left-0 w-full bg-[#101828] text-white p-6 h-24 group-hover:h-56 transition-all duration-500">

          <h3 className="text-2xl font-bold">
            GATE MANAGEMENT SYSTEM
          </h3>

          <div className="opacity-0 group-hover:opacity-100 transition duration-500 mt-4">

            <div className="w-16 h-1 bg-orange-500 mb-4"></div>

            <p className="text-gray-300 mb-4">
              Monitor and manage visitor access efficiently.
            </p>

            <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full">
              Know More →
            </button>

          </div>

        </div>
      </div>
    </SwiperSlide>

    {/* Card 4 */}
    <SwiperSlide>
      <div className="group relative overflow-hidden rounded-3xl shadow-lg">
        <Image
          src="/images/ERP.png"
          alt="Product"
          width={350}
          height={450}
          className="w-full h-auto object-contain"
        />


        <div className="absolute bottom-0 left-0 w-full bg-[#101828] text-white p-6 h-24 group-hover:h-56 transition-all duration-500">

          <h3 className="text-2xl font-bold">
            INVENTORY MANAGEMENT
          </h3>

          <div className="opacity-0 group-hover:opacity-100 transition duration-500 mt-4">

            <div className="w-16 h-1 bg-orange-500 mb-4"></div>

            <p className="text-gray-300 mb-4">
              Manage inventory efficiently and improve business operations.
            </p>

            <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-full">
              Know More →
            </button>

          </div>

        </div>
      </div>
    </SwiperSlide>

  </Swiper>

</section>
{/* Trusted By Industry Leaders */}
<section className="py-24  bg-white">
   <div className="max-w-7xl mx-auto px-6">

  {/* Heading */}
 <div className="text-center mb-16 ">
  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FE5800] to-[#3B3B3B] bg-clip-text text-transparent">
    Trusted By Industry Leaders
  </h2>

    <p className="text-gray-500 text-xl mt-4 leading-9">
      Delivering reliable engineering solutions for OEMs and Tier-1 suppliers
      across <br/>global industries
    </p>
  </div>
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
{/* Contact Banner */}
<section className="px-6 lg:px-10 py-16">
  <div
    className="relative min-h-[200px] rounded-[30px] overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10"
    style={{
      backgroundImage:"url('/images/home bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="relative z-10">
      <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
        We’d Love to hear from you!
      </h2>

      <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mt-2">
        Feel free to say hello
      </h2>
    </div>

    <button className="relative z-10 mt-8 md:mt-0 border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white hover:text-[#6B1010] transition-all duration-300">
      Get Started Today
    </button>
  </div>
</section>
<WhyChooseUs/>
<Footer />


    </>
  );
}


 
