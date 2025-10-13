"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Demos", href: "/demos" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-gray-700">
          AbelleGroup
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-amber-700 transition font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action
        <Link
          href="mailto:abellepatrice@gmail.com"
          className="hidden md:block px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition"
        >
          Hire Me
        </Link> */}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-amber-700 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="mailto:abellepatrice@gmail.com"
            className="block mt-3 px-4 py-2 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition text-center"
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
}


