import Image from "next/image";

const cards = [
  {
    id: "01",
    icon: "/images/whychooseusicon.png",
    title: "Strategic Business Solutions",
    points: [
      "Tailored Software Aligned with Business Objectives",
      "Industry-Specific Expertise and Best Practices",
      "Data-Driven Approach to Operational Excellence",
    ],
  },
  {
    id: "02",
    icon: "/images/whychooseusicon.png",
    title: "Innovation & Technology",
    points: [
      "Modern, Scalable, and Future-Ready Solutions",
      "Secure Architecture with High Performance Standards",
      "Seamless Integration Across Business Ecosystems",
    ],
  },
  {
    id: "03",
    icon:"/images/whychooseusicon.png",
    title: "Reliability & Long-Term Partnership",
      points: [
      "End-to-End Project Ownership and Support",
      "Transparent Communication and Timely Delivery",
      "Continuous Innovation, Maintenance and Growth Enablement",
    ],
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20">
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
      src="/images/vector 4.png"
      alt="pattern"
      width={180}
      height={180}
    
    />
  </div>
      <div className="container mx-auto px-6">

        <div className="mb-14 text-center">
          <h2 className="inline-block text-5xl font-bold mb-4 bg-gradient-to-r from-[#FE5800]  to-[#3B3B3B] bg-clip-text text-transparent">
  Why Choose Us
      </h2>


          <p className="mx-auto mt-4 max-w-2xl text-[#494141]">
            Delivering innovative solutions, exceptional quality, and measurable
            business value.
          </p>
        </div>
<div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {cards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="absolute right-6 top-5 text-5xl font-bold text-gray-100">
                {card.id}
              </span>

              <Image
                src={card.icon}
                alt={card.title}
                width={48}
                height={48}
                className="mb-6"
              />

              <h3 className="mb-5 text-xl font-semibold text-[#FE5800]">
                {card.title}
              </h3>

              <ul className="space-y-3">
                {card.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1 text-[#FE5800]">✔</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}