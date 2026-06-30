import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Banner */}
      <section
        className="relative h-[280px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/banner2.png')",
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

     <div className="group bg-white border border-[#E8E8E8] rounded-[20px] p-8 transition-all duration-500 hover:bg-gradient-to-r hover:from-[#F46A2A] hover:to-[#D94A16] hover:shadow-xl">

  {/* Icon + Title */}
  <div className="flex items-center gap-4 mb-6">

    <div className="relative w-14 h-14">
      {/* Normal Icon */}
      <Image
        src="/images/ourvision.png"
        alt="Vision"
        fill
        className="object-contain transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Hover Icon */}
      <Image
        src="/images/ourvision-hover.png"
        alt="Vision"
        fill
        className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>

    <h3 className="text-[36px] font-bold text-[#E84E1B] group-hover:text-white transition-all duration-300">
      Our Vision
    </h3>

  </div>

  <p className="text-[20px] leading-10 text-[#555] group-hover:text-white transition-all duration-300">
    We strive to become a trusted technology partner by delivering innovative engineering and digital transformation solutions that empower businesses to achieve sustainable growth.
  </p>

</div>
      
    </>
  );
}