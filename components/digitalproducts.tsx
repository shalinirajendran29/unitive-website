import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Jewellery Retail ERP",
    description:
      "Transform the way you manage your jewellery business.",
    image: "/images/products/retail-erp.jpg",
  },
  {
    title: "Manufacturing Jewellery ERP",
    description:
      "Transform the way you manage your jewellery business.",
    image: "/images/products/manufacturing-erp.jpg",
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#4A2B3C]">
            Our Digital Products
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Innovative software solutions designed to streamline
            operations and accelerate business growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {products.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={320}
                  className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-5 flex justify-between items-start">

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>

                <div className="ml-4 mt-2">
                  <ArrowRight
                    size={20}
                    className="text-gray-700 transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}