import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        {/* Left: Logo + Contact */}
        <div>
          <img src={logo} alt="Appicoders Logo" className="w-40 mb-4" />
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <div className="flex gap-3">
            <a href="#" className="hover:text-red-500">🌐</a>
            <a href="#" className="hover:text-red-500">🐦</a>
            <a href="#" className="hover:text-red-500">📘</a>
            <a href="#" className="hover:text-red-500">📸</a>
          </div>
        </div>

        {/* Middle: About */}
        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">About Us</a></li>
            <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Right: Services */}
        <div>
          <h4 className="font-semibold mb-3">Appicoders Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>iPhone Application Development</li>
            <li>Android Application Development</li>
            <li>Cross Platform Development</li>
            <li>Enterprise App Development</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs mt-6">
        © 2025 Appicoders. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
