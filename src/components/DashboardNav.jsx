import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  IoHomeOutline,
  IoDocumentOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import { PiImageSquare } from "react-icons/pi";
import { LuComponent } from "react-icons/lu";
import { VscSymbolInterface } from "react-icons/vsc";
import { logOut } from "../api/firebaseAuth";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authSlice";

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await logOut();
      dispatch(logout());

      navigate("/login");
    } catch (error) {}
  };

  return (
    <header className="mx-auto bg-[#ffffff] ">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center px-4 py-4 border-b ">
          <div className="flex items-center space-x-2">
            <img
              src="/Tabler_Logo.png"
              className="w-10 h-10"
              alt="Tabler Logo"
            />
            <p className="text-2xl font-semibold">tabler</p>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center space-x-6 text-lg">
              <li
                className="rounded text-[#3B82F6] px-4 py-2 border border-[#3B82F6] text-sm md:text-base font-medium cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
              <li></li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  {" "}
                  <IoMdNotificationsOutline size={28} />
                </NavLink>
              </li>
              <div className="flex items-center gap-x-4">
                <img
                  src="/avatar.png"
                  className="w-10 h-10 rounded-full"
                  alt="Tabler Logo"
                />
                <div className="text-base ">
                  <p className="font-medium">User</p>
                  <p>Guest</p>
                </div>
              </div>
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
          <div className="absolute top-20 mt-1 rounded-tl-lg rounded-br-lg  right-3 bg-[#ffffff] shadow-lg md:hidden">
            <ul className="flex flex-col space-y-4 p-4 text-center">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-1"
                >
                  {" "}
                  <IoHomeOutline />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-2"
                >
                  <VscSymbolInterface />
                  <span>Interface</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-2"
                >
                  <LuComponent /> <span>Component</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-1"
                >
                  <CiFileOn /> <span>Pages</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-2"
                >
                  Form
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-1"
                >
                  <PiImageSquare /> <span>Gallery</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 flex items-center gap-x-1transition-colors"
                >
                  <IoDocumentOutline /> <span>Documentation</span>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <div className="hidden lg:flex  justify-between items-center px-4 py-4 w-full">
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8 text-lg ">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-1"
                >
                  {" "}
                  <IoHomeOutline />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-2"
                >
                  <VscSymbolInterface />
                  <span>Interface</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-2"
                >
                  <LuComponent /> <span>Component</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-1"
                >
                  <CiFileOn /> <span>Pages</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-2"
                >
                  Form
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 transition-colors flex items-center gap-x-1"
                >
                  <PiImageSquare /> <span>Gallery</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  className="hover:text-blue-600 flex items-center gap-x-1transition-colors"
                >
                  <IoDocumentOutline /> <span>Documentation</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
