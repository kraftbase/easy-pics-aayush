"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="fixed top-4 lg:left-[80px] lg:right-[80px] left-[20px] right-[20px] z-50 backdrop-blur-sm border-b border-stroke/60 bg-[#0D232F0A] shadow-[0_0_156px_#0D232F14] rounded-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-[60px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center">
            <span className="font-[590] font-[SF Pro] font-semibold text-[12px] leading-[100%] tracking-[0] text-center py-[6.5px] text-blue">
              Logo
            </span>
          </div>
          <span className="text-color font-geist font-semibold text-[16px] leading-[100%] tracking-[0] text-center">
            EasyPix
          </span>
        </Link>

        {/* Desktop Nav – centered */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`transition-colors font-geist text-[16px] leading-[100%] tracking-[0.01em] align-middle [font-variant-numeric:'lining-nums_proportional-nums'] capitalize ${
                active === link.label
                  ? "font-bold text-color"
                  : "font-normal text-gray hover:text-color"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block shrink-0">
          <Link
            href="#download"
            className="bg-dark-blue text-white font-geist font-semibold text-[14px] leading-[100%] tracking-[0.01em] align-middle [font-variant-numeric:'lining-nums_proportional-nums'] capitalize px-4 py-3 rounded-full hover:bg-blue transition-colors"
          >
            Download App
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[22px] h-0.5 bg-color rounded-full transition-transform duration-300 origin-center ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-color rounded-full transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-0.5 bg-color rounded-full transition-transform duration-300 origin-center ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-stroke px-6 pt-4 pb-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMenuOpen(false);
              }}
              className={`py-2.5 text-[14px] transition-colors ${
                active === link.label
                  ? "font-bold text-color"
                  : "font-medium text-gray hover:text-color"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#download"
            className="mt-3 bg-dark-blue text-white text-[13px] font-semibold px-5 py-3 rounded-full text-center hover:bg-blue transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Download App
          </Link>
        </div>
      </div>
    </header>
  );
}
