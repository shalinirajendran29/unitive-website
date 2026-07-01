"use client";

import { useState } from "react";
import {
  ChevronRight,
  Cog,
  Crosshair,
} from "lucide-react";

export default function DigitalExpertise() {
  const services = [
    {
      title: "Web App Development",
      description:
        "Build scalable, secure, and high-performance web applications tailored to your business needs. Deliver seamless user experiences with modern technologies and responsive design.",
      offers: [
        "Custom Website Design & Development",
        "Responsive & Mobile-Optimized Experiences",
        "E-Commerce Solutions",
        "WordPress Development & CMS Management",
        "Landing Pages & Conversion-Focused Design",
        "API & Third-Party Integrations",
        "SEO & Performance Optimization",
        "Ongoing Maintenance & Technical Support",
      ],
    },
    {
      title: "Mobile App Development",
      description:
        "Create powerful Android and iOS applications with beautiful UI and smooth performance for your business.",
      offers: [
        "Android App Development",
        "iOS App Development",
        "Cross Platform Apps",
        "Flutter Development",
        "React Native Apps",
        "App Store Deployment",
        "API Integration",
        "App Maintenance",
      ],
    },
    {
      title: "Artificial Intelligence",
      description:
        "Leverage AI-powered solutions to automate business operations and improve customer experience.",
      offers: [
        "AI Chatbots",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Recommendation Systems",
        "Generative AI",
        "AI Consulting",
      ],
    },
    {
      title: "Robotic Process Automation",
      description:
        "Automate repetitive tasks and improve operational efficiency with intelligent automation.",
      offers: [
        "Workflow Automation",
        "Document Processing",
        "ERP Automation",
        "Invoice Automation",
        "Data Entry Automation",
        "Email Automation",
        "Bot Monitoring",
        "Support & Maintenance",
      ],
    },
    {
      title: "Data Analytics",
      description:
        "Transform raw data into valuable business insights through advanced analytics.",
      offers: [
        "Business Intelligence",
        "Power BI Dashboards",
        "Data Visualization",
        "Data Warehousing",
        "Reporting Solutions",
        "Forecasting",
        "KPI Tracking",
        "Data Consulting",
      ],
    },
    {
      title: "Internet Of Things",
      description:
        "Connect smart devices and enable real-time monitoring with IoT solutions.",
      offers: [
        "IoT Device Integration",
        "Smart Automation",
        "Sensor Monitoring",
        "Cloud Connectivity",
        "Industrial IoT",
        "Remote Monitoring",
        "Real-Time Alerts",
        "IoT Consulting",
      ],
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-orange-500">
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