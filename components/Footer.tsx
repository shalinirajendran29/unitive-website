import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo + Social Icons */}
          <div>
            <Image
              src="/images/unitivelogo.png"
              alt="Unitive Logo"
              width={220}
              height={100}
              className="w-40 sm:w-48 lg:w-56 h-auto"
            />

            <div className="flex gap-4 mt-6">
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={45}
                height={45}
                className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer"
              />

              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={45}
                height={45}
                className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer"
              />

              <Image
                src="/images/twitter.png"
                alt="Twitter"
                width={45}
                height={45}
                className="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer"
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl lg:text-2xl mb-5">
              Service
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
              <li>Digital</li>
              <li>Engineering</li>
              <li>CAE</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-xl lg:text-2xl mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl lg:text-2xl mb-5">
              Contact Us
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Image
                  src="/images/phone.png"
                  alt="Phone"
                  width={24}
                  height={24}
                  className="w-5 h-5 lg:w-6 lg:h-6 mt-1"
                />

                <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <p>+91 44-4855 6006</p>
                  <p>+91 90032 26006</p>
                  <p>+91 73973 06006</p>
                </div>
              </div>

              {/* Mail */}
              <div className="flex items-center gap-4">
                <Image
                  src="/images/mail.png"
                  alt="Mail"
                  width={24}
                  height={24}
                  className="w-5 h-5 lg:w-6 lg:h-6"
                />

                <p className="text-gray-700 text-sm sm:text-base break-all">
                  info@unitive.in
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-10 lg:mt-12 pt-6 text-center text-gray-500 text-sm sm:text-base">
          Copyright © 2026 Unitive. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}