import Image from "next/image";

interface Industry {
  name: string;
  icon: string; // path in /public/icons/
}

// Row-wise grouping exactly like the Figma layout (4 - 3 - 2 - 1 pyramid)
const industryRows: Industry[][] = [
  [
    { name: "Aerospace & Defence", icon: "/images/aerospace&defence.svg" },
    { name: "Automotive", icon: "/images/automotive2.svg" },
    { name: "Industrial Machinery", icon: "/images/industries.svg" },
    { name: "Energy & Power", icon: "/images/energy.svg" },
  ],
  [
    { name: "Consumer Products", icon: "/images/customer.svg" },
    { name: "Medical Devices", icon: "/images/medical.svg" },
    { name: "Oil & Gas", icon: "/images/oil.svg" },
  ],
  [
    { name: "Packaging", icon: "/images/packing.svg" },
    { name: "Rail & Transportation", icon: "/images/rail.svg" },
  ],
  [{ name: "Heavy Equipment", icon: "/images/heavy.svg" }],
];

function IndustryCard({ name, icon }: Industry) {
  return (
    <div
      className="flex h-[140px] w-[190px] flex-col items-center justify-center gap-3 rounded-xl
                 border border-gray-200 bg-white px-4 py-5 text-center shadow-sm
                 transition-all duration-200 hover:-translate-y-1 hover:border-[#FE5800] hover:shadow-md"
    >
      <div className="relative h-40 w-40">
        <Image src={icon} alt={name} fill className="object-contain" />
      </div>
      <p className="text-sm font-medium leading-snug text-gray-900">{name}</p>
    </div>
  );
}

export default function IndustriesWeServe() {
  return (
    <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: heading + description */}
        <div className="max-w-sm shrink-0 text-left">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FE5800] to-[#3B3B3B] bg-clip-text text-transparent">
           Industries We Serve
      </h2>
          <p className="mt-4 text-base text-gray-500 md:text-lg">
            Trusted by engineering teams across high-stakes industries where
            simulation accuracy is non-negotiable.
          </p>
        </div>

        {/* Right: pyramid grid of industry cards */}
        <div className="flex flex-col items-center gap-4">
          {industryRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              {row.map((industry) => (
                <IndustryCard key={industry.name} {...industry} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}