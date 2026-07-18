"use client";

import { useState } from "react";
import {
  ChevronRight,
  Cog,
  Crosshair,
} from "lucide-react";

export default function Expertise() {
  const services = [
    {
      title: "Product Data Management ",
      description:
        "Product Data Management enables organizations to efficiently manage, control, and collaborate on product-related engineering data throughout the product lifecycle. By centralizing CAD files, BOMs, and design documents into a secure platform, PDM improves data visibility, streamlines workflows, enhances version control, and accelerates product development. starting vera.",
      offers: [
        "PDM Implementation & Configuration",
        "PDM Implementation & Configuration",
        "ERP, PLM & System Integration",
        "Workflow Automation & Customization",
        "Custom Plugin Development",
        "Disaster Recovery Planning",
        "SQL Performance Optimization",
        "Consultation, Support & Engineering Resources",
      ],
    },
    {
      title: "Product Lifecycle Management",
      description:
        "Streamline product development and improve collaboration across engineering, manufacturing, and business teams with advanced PLM solutions. Our expertise in PTC Windchill helps organizations centralize product data, optimize processes, enhance change management, and accelerate product innovation throughout the product lifecycle.What We Offer.",
      offers: [
        "Windchill PLM Consulting & Strategy",
        "Windchill Implementation & Deployment",
        "ERP, MES & Enterprise Integration",
        "Custom Application Development",
        "Training & User Enablement",
        "Technical Support & Maintenance",
    
      ],
    },
    {
      title: "Mechanical Design",
      description:
        "Transform ideas into innovative, manufacturable products with our comprehensive mechanical design services. We help organizations accelerate product development, improve design accuracy, and optimize engineering workflows through advanced CAD modeling, product design, and manufacturing-ready documentation..",
      offers: [
        "Product Design & Development",
        "3D CAD Modeling",
        "Sheet Metal Design",
        "Reverse Engineering",
        "ERP, MES & Enterprise Integration",
        "Custom Application Development",
        "CAD Support & Design Optimization",
       
      ],
    },
    {
      title: "Design Automation",
      description:
        "Enhance engineering efficiency with intelligent design automation solutions that streamline product configuration, eliminate repetitive tasks, and accelerate design cycles. Our solutions leverage rule-based automation, parametric modeling, and CAD customization to improve accuracy, standardization, and productivity while reducing engineering effort and operational costs..",
      offers: [
        "Product Configurator Development",
        "CAD Automation Solutions",
        "Automated Drawing Generation",
        "BOM Automation & Management",
        "CAD Customization & API Development",
        "Engineering Workflow Automation",
        "Support, Maintenance & Optimization",
      
      ],
    },
    {
      title: "CAD Customization",
      description:
        "Our CAD Customization Services improve engineering productivity by automating and customizing tools in AutoCAD, Inventor, Revit, Plant 3D, and Vault. We help reduce manual work, improve accuracy, and speed up design and development through tailored automation and workflows.",
      offers: [
        "CAD API Development",
        "Knowledge-Based Engineering (KBE)",
        "Custom Workbench Development",
        "Third-Party Software Integration",
        "Macro & Script Development",
       
      ],
    },
    {
      title: "Resource Deputation",
      description:
        "Our CAD Customization Services improve engineering productivity by automating and customizing tools in AutoCAD, Inventor, Revit, Plant 3D, and Vault. We help reduce manual work, improve accuracy, and speed up design and development through tailored automation and workflows.",
      offers: [
        "CAD API Development",
        "Knowledge-Based Engineering (KBE)",
        "Custom Workbench Development",
        "Third-Party Software Integration",
        "Macro & Script Development",
       
      ],
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-12">
          <h2 className="inline-block text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#FE5800] to-[#3B3B3B] bg-clip-text text-transparent">
       Our Digital Expertise
      </h2>


          <p className="text-gray-600 mt-5 text-lg">
            Transforming ideas into intelligent digital experiences.
            <br />
            From web and mobile apps to AI, Robotics and IoT solutions.
          </p>
        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left Menu */}

          <div className="space-y-5">

            {services.map((service, index) => (

              <button
                key={index}
                onClick={() => setActive(index)}
               className={`w-full rounded-[20px] h-[90px] px-6 flex items-center justify-between transition-all duration-300 border
             ${
            active === index
            ? "bg-[#162334] text-white border-[#FFD8CC] shadow-lg"
            : "bg-[#F7F7F7] text-[#1F2937] border-[#ECECEC] hover:bg-white hover:shadow-md"
           }`}
              >

                <span className="font-semibold text-xl">
                  {service.title}
                </span>

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center

                  ${
                    active === index
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  <ChevronRight size={22} />
                </div>

              </button>

            ))}

          </div>

          {/* Right Card */}

       <div className="lg:col-span-2 bg-[#FFFCFB] border border-[#EDEDED] rounded-[24px] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

            <div className="flex items-center gap-4">

              <Cog className="text-orange-500" />

              <h2 className="text-4xl font-bold">
                {services[active].title}
              </h2>

            </div>

            <p className="text-gray-600 mt-8 text-lg leading-8">
              {services[active].description}
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-8">
              What We Offer
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              {services[active].offers.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <Crosshair
                    className="text-orange-500 mt-1"
                    size={18}
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}