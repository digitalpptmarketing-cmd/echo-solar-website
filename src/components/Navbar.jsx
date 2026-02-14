import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/echo-logo.jpg";

export default function Navbar() {
  return (
    <>
      {/* TOP BAR */}
      

      {/* MAIN NAVBAR */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-24">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Prestinepeak Technologies" className="h-14 w-auto" />
              <span className="text-gray-800 font-semibold text-sm md:text-base">
                Echo Solar
              </span>
            </Link>

            {/* MENU */}
            <nav className="flex items-center gap-10 text-gray-800 text-lg font-medium">
              <NavItem text="About Echo Solar" />
              <NavItem text="Product" />
             
              <NavItem text="Career" />
              <NavItem text="Contact Us" />
            </nav>

          </div>
        </div>
      </header>
    </>
  );
}

const NavItem = ({ text }) => (
  <div className="cursor-pointer hover:text-green-600">
    {text} <span className="text-sm">▾</span>
  </div>
);
