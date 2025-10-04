import React, { useState } from "react";
import { ASSET_PATHS } from "../constants";
import logo from "../assets/Logo-Final-White 1.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-transparent   fixed top-0 left-0 z-50">
        <div className="mx-auto container-max px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Logo"
              className="w-[200px] h-auto object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#home" className="hover:underline">
              About
            </a>
            <a href="#home" className="hover:underline">
              Services
            </a>
            <a href="#home" className="hover:underline">
              Why Choose Us
            </a>
            <a href="#home" className="hover:underline">
              Portfolio
            </a>
            <a href="#home" className="hover:underline">
              Products
            </a>
            <a href="#home" className="hover:underline">
              Technologies
            </a>
            <a href="#home" className="hover:underline">
              Contact
            </a>
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <button className="ml-2 px-4 py-2 rounded-full border hover:bg-gray-50">
              Sign in
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="open menu"
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-md border hover:bg-gray-100"
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
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img
            src={ASSET_PATHS.logo}
            alt="Logo"
            className="w-28 h-auto object-contain"
          />
          <button
            aria-label="close menu"
            onClick={() => setMenuOpen(false)}
            className="text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 space-y-4 text-base font-medium">
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <button className="mt-4 px-4 py-2 rounded-full border w-fit hover:bg-gray-50">
            Sign in
          </button>
        </nav>
      </aside>
    </>
  );
}
