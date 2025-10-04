import React, { useState, useEffect } from "react";
import { logo } from "../assets";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Products", href: "#products" },
    { label: "Technologies", href: "#technologies" },
    { label: "Contact", href: "#contact" },
  ];

  // 🔥 Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? "bg-red-600 shadow-md" : "bg-transparent"
          }`}
      >
        <div className="mx-auto container-max px-4 sm:px-6 md:px-10 lg:px-16 py-4 gap-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Logo"
              className="w-[25%] sm:w-[20%] md:w-[15%] lg:w-[5%] max-w-[180px] min-w-[200px] h-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden  lg:flex items-center  gap-8 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={` hover:underline  whitespace-nowrap transition-colors ${scrolled ? "text-white" : "text-white"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              aria-label="open menu"
              onClick={() => setMenuOpen(true)}
              className={`p-2 px-4 rounded-md border ${scrolled ? "bg-white text-black" : "text-white border-white"
                }`}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed  overflow-auto top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center bg-[#20222D] justify-between px-6 py-[26px] border-b">
          <img
            src={logo}
            alt="Logo"
            className="w-28 h-auto object-contain"
          />
          <button
            aria-label="close menu"
            onClick={() => setMenuOpen(false)}
            className="text-2xl leading-none text-white"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 space-y-4 text-base font-medium">
          {links.map((link) => (
            <a
              onClick={() => setMenuOpen(false)}
              key={link.label}
              href={link.href}
              className="hover:underline transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
