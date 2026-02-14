import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/echo-logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Echo Solar" className="h-12 w-auto" />
            <span className="text-gray-800 font-semibold text-base">
              Echo Solar
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10 text-gray-800 text-lg font-medium">
            <NavItem text="About Echo Solar" />
            <NavItem text="Product" />
            <NavItem text="Career" />
            <NavItem text="Contact Us" />
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center gap-6 py-6 text-gray-800 text-lg font-medium">
            <NavItem text="About Echo Solar" />
            <NavItem text="Product" />
            <NavItem text="Career" />
            <NavItem text="Contact Us" />
          </nav>
        </div>
      )}
    </header>
  );
}

const NavItem = ({ text }) => (
  <div className="cursor-pointer hover:text-green-600">
    {text}
  </div>
);
