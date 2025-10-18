"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

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
    <header className="bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 relative">
      <nav className="container mx-auto flex justify-between items-center px-6 py-5">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold transition-colors duration-300">
          <span className="text-gray-800">Abelle</span><span className="text-gray-800 hover:text-amber-600">Group</span>
        </Link>

        {/* Desktop Menu - Right Aligned */}
        <ul className="hidden md:flex gap-10 ml-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-600 hover:text-amber-600 transition-all duration-300 font-medium relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-700 transition-colors duration-300 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Drawer - Right Side */}
      {isOpen && (
        <div className="md:hidden absolute right-0 top-full w-64 bg-white/95 backdrop-blur-md shadow-xl border-l border-gray-100 px-6 py-6 space-y-4 animate-in slide-in-from-right-2 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-600 hover:text-gray-700 transition-colors duration-300 font-medium py-2 border-b border-gray-100 last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </header>
  );
}


