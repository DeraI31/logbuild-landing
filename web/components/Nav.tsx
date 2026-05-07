"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-green/96 backdrop-blur-md shadow-[0_1px_0_rgba(124,179,66,0.15)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center">
        {/* Logo — always visible */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/Logbuild_logo_transparent.png"
            alt="LogBuild"
            width={915}
            height={202}
            className="h-[72px] w-auto"
            priority
          />
        </Link>

        {/* Desktop: centered links + right CTA */}
        <div className="hidden md:flex flex-1 items-center">
          <ul className="flex flex-1 items-center justify-center gap-8">
            {[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Demo", href: "#demo" },
            ].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-heading text-[13px] tracking-wider text-brand-white/80 hover:text-brand-lime transition-colors duration-200 cursor-pointer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href="/enquiry"
            className="font-heading text-[13px] tracking-wider px-5 py-2.5 bg-brand-lime text-brand-green-dark font-bold rounded hover:bg-brand-lime-hover transition-colors duration-200 cursor-pointer active:scale-[0.98]"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-brand-white transition-transform duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-brand-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-brand-white transition-transform duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-brand-green-dark border-t border-brand-lime/20 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Demo", href: "#demo" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-xs tracking-wider text-brand-white/80 hover:text-brand-lime transition-colors py-1 cursor-pointer"
            >
              {label}
            </a>
          ))}
          <Link
            href="/enquiry"
            onClick={() => setMenuOpen(false)}
            className="font-heading text-xs tracking-wider mt-2 px-5 py-3 bg-brand-lime text-brand-green-dark font-bold rounded text-center transition-colors duration-200 cursor-pointer"
          >
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
