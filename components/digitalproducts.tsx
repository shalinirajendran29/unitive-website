import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Jewellery Retail ERP",
    image: "/images/product1.jpg",
    desc: "Transform the way you manage your jewellery business.",
  },
  {
    id: 2,
    title: "Manufacturing Jewellery ERP",
    image: "/images/product2.jpg",
    desc: "Transform the way you manage your jewellery business.",
  },
  {
    id: 3,
    title: "Gate Management System",
    image: "/images/product3.jpg",
    desc: "Transform the way you manage your business.",
  },
  {
    id: 4,
    title: "Task Management System",
    image: "/images/product4.jpg",
    desc: "Transform the way you manage your business.",
  },
  {
    id: 5,
    title: "Accounting Software",
    image: "/images/product5.jpg",
    desc: "Transform the way you manage your business.",
  },
];

export default function DigitalProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#FF6B00]">
            Our Digital Products
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Innovative software solutions designed to streamline operations
            and accelerate business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>

                <button className="mt-5 text-[#FF6B00] font-semibold hover:translate-x-1 transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}