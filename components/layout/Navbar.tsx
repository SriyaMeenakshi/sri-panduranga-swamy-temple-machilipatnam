"use client";

import Link from "next/link";
import Container from "../common/Container";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Gallery", href: "/gallery" },
  { title: "History", href: "/history" },
  { title: "Visit", href: "/visit" },
];

export default function Navbar() {
  return (
    <header className="absolute top-0 z-50 w-full bg-gradient-to-b from-[#1a0f0a]/90 via-[#1a0f0a]/50 to-transparent pt-6 pb-16">
      <Container>
        <div className="flex items-center justify-between px-4 md:px-10">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group">
            {/* If you have a real logo, use next/image here instead of the emoji */}
            <div className="text-3xl drop-shadow-md transition-transform duration-500 group-hover:scale-105">
              🛕
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-xl md:text-2xl font-medium tracking-widest text-[#D4AF37] uppercase drop-shadow-sm">
                Sri Panduranga Swamy Temple
              </h2>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-200 mt-0.5">
                Keer Pandharpuram
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
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

        </div>
      </Container>
    </header>
  );
}