"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Mail,
  ArrowRight,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const solutions = ["Digital", "Engineering", "CAE"];

// 🔑 Replace these with your EmailJS credentials (from emailjs.com dashboard)
const EMAILJS_SERVICE_ID = "service_3ulb8xl";
const EMAILJS_TEMPLATE_ID = "template_vefu5wg";
const EMAILJS_PUBLIC_KEY = "Okxs_6Es2Bg3KD17F";

type Status = "idle" | "sending" | "success" | "error";

export default function Contactform() {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedSolution, setSelectedSolution] = useState<string | null>(
    null
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirements: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          client_name: formData.name,
          client_email: formData.email,
          solution_stream: selectedSolution ?? "Not specified",
          requirements: formData.requirements,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus("success");
      setFormData({ name: "", email: "", requirements: "" });
      setSelectedSolution(null);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
     

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 bg-gray-50 rounded-3xl p-4 sm:p-8">
        {/* Left Card */}
        <div className="lg:col-span-2 relative rounded-3xl lg:rounded-r-none p-8 flex flex-col justify-between text-white overflow-hidden bg-neutral-900">
          {/* warm glow, top-right corner, like Figma */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 bg-orange-600/30 rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex gap-1 mb-6">
              <span className="w-10 h-1 bg-orange-500 rounded-full" />
              <span className="w-4 h-1 bg-white rounded-full" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              CONNECT
              <br />
              WITH
              <br />
              <span className="text-orange-500">UNITIVE</span>
            </h3>
          </div>

          <div className="relative space-y-4 mt-10">
            <div className="group relative border border-white/15 rounded-2xl p-4 flex gap-3 items-start overflow-hidden transition-colors hover:border-orange-500/50">
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-orange-500/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative bg-orange-500 text-white rounded-xl p-2.5 shrink-0">
                <MapPin size={18} />
              </span>
              <div className="relative">
                <p className="text-xs tracking-wider text-gray-400 uppercase">
                  Location
                </p>
                <p className="text-sm font-semibold mt-1">
                  13, Customs Colony, Sakthi Nagar, Thoraipakkam, TN 600097
                </p>
              </div>
            </div>

            <div className="group relative border border-white/15 rounded-2xl p-4 flex gap-3 items-center overflow-hidden transition-colors hover:border-orange-500/50">
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-orange-500/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative bg-orange-500 text-white rounded-xl p-2.5 shrink-0">
                <Mail size={18} />
              </span>
              <div className="relative">
                <p className="text-xs tracking-wider text-gray-400 uppercase">
                  Email
                </p>
                <p className="text-sm font-semibold mt-1">info@unitive.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="lg:col-span-3 bg-white rounded-3xl lg:rounded-l-none p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="E.g. Rajesh Kumar"
                className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
                Work Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
            Subject
            </label>
            <div className="flex flex-wrap gap-3 mt-2">
              {solutions.map((solution) => (
                <button
                  type="button"
                  key={solution}
                  onClick={() => setSelectedSolution(solution)}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                    selectedSolution === solution
                      ? "bg-orange-500 text-white border-orange-500"
                      : "border-gray-200 text-gray-600 hover:border-orange-300"
                  }`}
                >
                  {solution}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <label className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
             Message
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Describe your technical challenges..."
              rows={4}
              className="mt-2 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2"
          >
            {status === "sending" ? (
              <>
                SENDING <Loader2 size={18} className="animate-spin" />
              </>
            ) : (
              <>
                SEND <ArrowRight size={18} />
              </>
            )}
          </button>

          {status === "success" && (
            <p className="mt-4 flex items-center gap-2 text-sm text-green-600">
              <CheckCircle2 size={16} />
              Thanks! Your message has been sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 flex items-center gap-2 text-sm text-red-600">
              <XCircle size={16} />
              Something went wrong. Please check the fields and try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}