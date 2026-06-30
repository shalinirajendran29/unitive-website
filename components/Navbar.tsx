import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b bg-white">

      {/* Logo */}
      <Link
        href="/"
        className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_#FE5800]"
      >
        <Image
          src="/images/unitivelogo.png"   // unga logo image path
          alt="Unitive"
          width={180}
          height={60}
          priority
        />
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-8 text-gray-600 font-medium">

        <Link
          href="/"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          Home
        </Link>

        <Link
          href="/about"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          About Us
        </Link>

        <Link
          href="/digital"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          Digital
        </Link>

        <Link
          href="/engineering"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          Engineering
        </Link>

        <Link
          href="/cae"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          CAE
        </Link>

        <Link
          href="/contact"
          className="hover:text-orange-500 transition-colors duration-300"
        >
          Contact Us
        </Link>

      </div>
    </nav>
  );
}