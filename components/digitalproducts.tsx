import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Jewellery Retail ERP",
    description:
      "Transform the way you manage your jewellery business.",
    image: "/images/digitailretailerp.png",
  },
  {
    title: "Manufacturing Jewellery ERP",
    description:
      "Transform the way you manage your jewellery business.",
    image: "/images/ERP.png",
  },
  {
    title: "Gate Management System",
    description:
      "Transform the way you manage your jewellery business.",
    image: "/images/products/gate-management.jpg",
  },
  {
    title: "Task Management System",
    description:
      "Transform the way you manage your jewellery business.",
    image: "/images/products/task-management.jpg",
  },
  {
    title: "Accounting Software",
    description:
      "Transform the way you manage your jewellery business.",
    image: "/images/products/accounting.jpg",
  },
];

export default function DigitalProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FE5800]">
            Our Digital Products
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Innovative software solutions designed to streamline
            operations and accelerate business growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={380}
                  className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">

                <h3 className="text-[18px] font-semibold text-[#1F2937] leading-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-[15px] texxt-gray-600 leading-6">
                  {item.description}
                </p>

                <div className="flex justify-end mt-3">
                  <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FE6B1F] group-hover:border-[#FE6B1F]">
                    <ArrowRight
                      size={20}
                      className="text-gray-700 group-hover:text-white transition-colors"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}