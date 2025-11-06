"use client";

import Link from "next/link";
import React from "react";

// --- SVG Icon ---
const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0V4.75a.75.75 0 00-.75-.75H7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    />
  </svg>
);

// --- Navigation Links ---
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#studio", label: "Studio" },
  { href: "#team", label: "Team" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

// --- Footer Component ---
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#02061a] text-gray-400 overflow-hidden py-16 md:py-24">
      {/* === Animated Background Gradients === */}
      <div className="absolute inset-0 z-0 opacity-40" aria-hidden="true">
        <div className="absolute top-0 left-[5%] w-[40rem] h-[40rem] bg-gradient-radial from-[hsl(var(--secondary))] to-transparent rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-[50rem] h-[50rem] bg-gradient-radial from-[hsl(var(--background))] to-transparent rounded-full filter blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-0 right-[10%] w-[30rem] h-[30rem] bg-gradient-radial from-[hsl(var(--primary))] to-transparent rounded-full filter blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-between min-h-[60vh] gap-24">
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: Quote */}
          <div className="w-full md:w-2/3 lg:w-1/2">
            <span className="flex items-center gap-1 text-sm text-blue-400 mb-2">
              <ArrowUpRightIcon />
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Interested in working together? Contact Us & Make Your Music Dreams
              Reality
            </h2>
          </div>

          {/* Right: Quick Links */}
          <nav className="w-full md:w-auto">
            <h3 className="font-semibold text-white tracking-wider mb-4 md:text-right">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href} className="md:text-right">
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="relative">
          {/* Marquee Section */}
          <div className="w-full overflow-hidden">
            <div className="marquee-track flex items-center gap-12">
              {[...Array(6)].map((_, i) => (
                <h1
                  key={i}
                  className="text-7xl sm:text-9xl md:text-[12rem] lg:text-[14rem] xl:text-[17rem] font-extrabold text-white leading-none tracking-tighter whitespace-nowrap"
                >
                  MEMO MUSIC
                </h1>
              ))}
            </div>
          </div>

          {/* Copyright & Socials */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
            <div className="text-sm text-gray-500 order-2 sm:order-1 text-center sm:text-left">
              &copy; {currentYear} MEMO MUSIC. All rights reserved.
            </div>

            <div className="flex items-center gap-6 order-1 sm:order-2">
              <a
                href="https://www.instagram.com/memomusiclabel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 font-medium transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 font-medium transition-colors hover:text-white"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === Custom Styles === */}
      <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll-left 40s linear infinite;
        }
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </footer>
  );
}
