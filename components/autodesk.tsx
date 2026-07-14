import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AutodeskSection() {
  return (
    <section className="w-full bg-gray-100 py-10 px-4 md:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border-2 border-orange-500 bg-white">

        {/* Background pattern image */}
        {/* Left orange border line */}
<div className="absolute inset-y-0 left-0 w-1 bg-[#FE5800] z-0 pointer-events-none" />
{/* Right orange border line */}
<div className="absolute inset-y-0 right-0 w-1 bg-[#FE5800] z-0 pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/autodeskpattern.png"
            alt="autodesk"
            fill
            sizes="100%"
            className="object-cover opacity-50"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-10">

          {/* Left side - Badge + Text */}
          <div className="flex items-start gap-6">

            {/* Badge image box with orange border */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border-2 border-orange-400 bg-white p-2">
              <Image
                src="/images/tick.png"
                alt="Autodesk Badge"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>

            {/* Text block */}
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium text-gray-600">
                Authorized Service
              </p>
              <h3 className="text-4xl font-extrabold text-orange-500 tracking-tight leading-tight">
                AUTODESK
              </h3>
              <p className="text-sm font-semibold text-gray-800">
                Certified Service Provider
              </p>

              {/* Divider */}
              <div className="my-3 border-t border-gray-200 w-72" />

              {/* Checkmarks */}
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {["Genuine Support.", "Genuine Support.", "Genuine Support."].map(
                  (item: string, i: number) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-px h-28 bg-gray-200 mx-8" />

          {/* Right side - Autodesk Logo image */}
          <div className="flex flex-col items-center md:items-center gap-2 shrink-0">
            <div className="relative h-20 w-80">
              <Image
                src="/images/autodesklogo.png"
                alt="Autodesk Logo"
                fill
                sizes="350px"
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}