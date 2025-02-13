"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link for routing
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/aboutPage" },
    { name: "Work", path: "/workPage" },
    { name: "People", path: "/people" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Backdrop for Sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-white bg-opacity-40 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white text-black shadow-xl transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-semibold tracking-wide">
            <Link
              href="/"
              className="block text-lg font-medium text-gray-700 transition hover:bg-black hover:text-white px-3 py-2 rounded-md"
            >
              ABAPOMON
            </Link>
          </div>
          <button
            className="text-gray-500 hover:text-black"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FiX size={28} />
          </button>
        </div>
        <ul className="mt-8 space-y-6 px-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="block text-lg font-medium text-gray-700 transition hover:text-white hover:bg-black px-3 py-2 rounded-md"
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow-md border-b border-gray-300">
        <div className="text-2xl font-bold text-black transition hover:bg-black hover:text-white">
          <Link href="/" className="px-3 py-2 rounded-md">
            ABAPOMON
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-lg font-medium text-gray-700 transition hover:bg-black hover:text-white px-3 py-2 rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-black"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FiMenu size={28} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
