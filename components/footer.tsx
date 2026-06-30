import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white px-24 py-16 border-t border-gray-300">
      <div className="grid grid-cols-4 gap-12">

        {/* Logo + Social Icons */}
        <div>
          <Image
            src="/images/unitivelogo.png"
            alt="Unitive Logo"
            width={220}
            height={100}
          />

          <div className="flex gap-6 mt-8">

            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={50}
              height={50}
              className="cursor-pointer"
            />

            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={50}
              height={50}
              className="cursor-pointer"
            />

            <Image
              src="/images/twitter.png"
              alt="Twitter"
              width={50}
              height={50}
              className="cursor-pointer"
            />

          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-2xl mb-5">Service</h3>

          <ul className="space-y-4 text-gray-600">
            <li>Digital</li>
            <li>Engineering</li>
            <li>CAE</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-2xl mb-5">Company</h3>

          <ul className="space-y-4 text-gray-600">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
       <div>
  <h3 className="font-bold text-2xl mb-5">Contact Us</h3>

  <div className="space-y-6">

    {/* Phone Section */}
    <div className="flex items-start gap-4">
      <Image
        src="/images/phone.png"
        alt="Phone"
        width={24}
        height={24}
      />

      <div className="space-y-2 text-gray-700">
        <p>+91 44-4855 6006</p>
        <p>+91 90032 26006</p>
        <p>+91 73973 06006</p>
      </div>
    </div>

    {/* Mail Section */}
    <div className="flex items-center gap-4">
      <Image
        src="/images/mail.png"
        alt="Mail"
        width={24}
        height={24}
      />

      <p className="text-gray-700">
        info@unitive.in
      </p>
    </div>

  </div>
</div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-500">
        Copyright © 2026 Unitive
      </div>
    </footer>
  );
}