"use client";

import { useState } from "react";
import {
  ChevronRight,
  Cog,
  Crosshair,
} from "lucide-react";

// ---- Data for each tab ----
interface ExpertiseItem {
  id: string;
  title: string;
  highlight: string; // part shown in red/orange e.g. "(FEA)"
  description: string;
  images: string[]; // put your image paths in /public and reference here
}

const expertiseData: ExpertiseItem[] = [
  {
    id: "fea",
    title: "Finite Element Analysis",
    highlight: "(FEA)",
    description:
      "Structural and durability simulation for chassis, body panels, suspension components, and crash safety systems. Ensuring strict compliance with NCAP-aligned testing protocols.",
    images: [
      "/images/fae1.png",
      "/images/fae2.png",
      "/images/fae3.png",
      "/images/fae4.png",
    ],
  },
  {
    id: "cfd",
    title: "Computational Fluid Dynamics",
    highlight: "(CFD)",
    description:
      "Aerodynamics, thermal management, and cooling system simulations to optimize airflow, reduce drag, and improve overall vehicle efficiency.",
    images: [
      "/images/fae1.png",
      "/images/fae2.png",
      "/images/fae3.png",
      "/images/fae4.png",
    ],
  },
  {
    id: "moldflow",
    title: "Moldflow Solutions",
    highlight: "",
    description:
      "Plastic injection molding simulation to optimize part design, reduce defects, and shorten time-to-market for polymer components.",
    images: [
        "/images/fae1.png",
      "/images/fae2.png",
      "/images/fae3.png",
      "/images/fae4.png",
    ],
  },
];

export default function ExpertiseSection() {
  const [activeId, setActiveId] = useState<string>(expertiseData[0].id);

  const activeItem =
    expertiseData.find((item) => item.id === activeId) ?? expertiseData[0];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
       <h2 className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#FE5800] to-[#3B3B3B] bg-clip-text text-transparent">
        Our specialized expertise
      </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Delivering high-fidelity virtual engineering solutions to accelerate
          your product development cycle and optimize manufacturing
        </p>
      </div>

      {/* Content grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 items-start">
        {/* Left: Tab buttons */}
        <div className="flex flex-col gap-4">
          {expertiseData.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
               className={`flex items-center justify-between h-[92px] px-8 rounded-[24px] border transition-all duration-300
              ${
              isActive
            ? "bg-[#101828] text-white border-transparent shadow-xl"
            : "bg-white text-[#111827] border-[#ECECEC]"
          }`}
              >
                <span>
                  {item.title} {item.highlight}
                </span>
              {isActive ? (
  <div className="w-14 h-14 rounded-full bg-[#F36A3D] flex items-center justify-center">
    <ChevronRight
      size={28}
      strokeWidth={2.5}
      className="text-white"
    />
  </div>
) : (
  <ChevronRight
    size={24}
    strokeWidth={2.5}
    className="text-[#111827]"
  />
)}
              </button>
            );
          })}
        </div>

        {/* Right: Active content */}
        <div className="bg-[#FFF9F7] rounded-[28px] border border-[#F6E8E3] p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
  <Cog
    size={28}
    strokeWidth={2}
    className="text-[#FE6B1F]"
  />

  <h3 className="text-2xl md:text-3xl font-bold text-[#111827]">
    {activeItem.title}{" "}
    {activeItem.highlight && (
      <span className="text-[#FE6B1F]">
        {activeItem.highlight}
      </span>
    )}
  </h3>
</div>

          <p className="text-gray-600 leading-relaxed mb-6">
            {activeItem.description}
          </p>

         <h4 className="text-[22px] font-bold text-[#1F2937] mb-6">
  What We Offer
</h4>

<div className="grid grid-cols-2 md:grid-cols-4 gap-5">
  {activeItem.images.map((src, idx) => (
    <div
      key={idx}
      className="bg-white border border-[#ECECEC] rounded-[20px] h-[150px] flex items-center justify-center p-4 hover:shadow-md transition-all duration-300"
    >
      <img
        src={src}
        alt={`${activeItem.title} ${idx + 1}`}
        className="w-full h-full object-contain"
      />
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}