import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative bg-[#ffffff] shadow-sm top-0 z-50">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center px-4 py-4">
          <div className="flex items-center space-x-2">
            <img
              src="/Tabler_Logo.png"
              className="w-10 h-10"
              alt="Tabler Logo"
            />
            <p className="text-2xl font-semibold">tabler</p>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center space-x-8 text-lg ">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-blue-600 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded transition-colors"
                  to="/login"
                >
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>

          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <IoCloseOutline size={30} />
            ) : (
              <HiOutlineMenuAlt2 size={30} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full mt-1 rounded-tl-lg rounded-br-lg  right-3 bg-[#ffffff] shadow-lg md:hidden">
            <ul className="flex flex-col space-y-4 p-4 text-center">
              <li>
                <NavLink
                  to="/"
                  className="block hover:text-blue-600 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="block hover:text-blue-600 transition-colors"
                >
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="block hover:text-blue-600 transition-colors"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="block hover:text-blue-600 transition-colors"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="inline-block text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded transition-colors"
                  to="/login"
                >
                  Sign In
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
