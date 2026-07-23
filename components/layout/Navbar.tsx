"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../common/Container";
import Image from "next/image";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Gallery", href: "/gallery" },
  { title: "History", href: "/history" },
  { title: "Visit", href: "/visit" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      className={`absolute top-0 z-50 w-full transition-all duration-300 ${
        isOpen 
          ? "bg-[#1a0f0a] pb-6 pt-6 shadow-xl" // Solid background when menu is open on mobile
          : "bg-gradient-to-b from-[#1a0f0a]/90 via-[#1a0f0a]/50 to-transparent pt-6 pb-16"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between px-4 md:px-10">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group">
            <Image 
              src="/favicon.ico"
              alt="Temple Logo"
              width={40}
              height={40}
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-widest text-[#D4AF37] uppercase drop-shadow-sm">
                Sri Panduranga Swamy Temple
              </h2>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-200 mt-0.5">
                Keer Pandharpuram
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-12">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-serif text-[15px] tracking-wider text-white/90 transition-all duration-300 hover:text-[#D4AF37] hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="text-[#D4AF37] transition-transform hover:scale-110 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                // "X" close icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <nav className="mt-8 flex flex-col items-center gap-6 border-t border-[#D4AF37]/20 pt-6 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
                className="font-serif text-lg tracking-widest text-white/90 uppercase transition-all duration-300 hover:text-[#D4AF37]"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}