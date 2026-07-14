"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/unitivelogo.png"
            alt="Unitive"
            width={180}
            height={60}
            priority
            className="w-32 sm:w-40 lg:w-44 h-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-orange-500 transition">
            About Us
          </Link>

          <Link href="/digital" className="hover:text-orange-500 transition">
            Digital
          </Link>

          <Link href="/engineering" className="hover:text-orange-500 transition">
            Engineering
          </Link>

          <Link href="/cae" className="hover:text-orange-500 transition">
            CAE
          </Link>

          <Link href="/contact" className="hover:text-orange-500 transition">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-6 py-5 space-y-5 text-gray-700 font-medium">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About Us
            </Link>

            <Link href="/digital" onClick={() => setOpen(false)}>
              Digital
            </Link>

            <Link href="/engineering" onClick={() => setOpen(false)}>
              Engineering
            </Link>

            <Link href="/cae" onClick={() => setOpen(false)}>
              CAE
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}