import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import insta from "../assets/instagram.png";
import fb from "../assets/facebook-app-symbol.png";
import linkedin from "../assets/linkedin.png";
import pinterest from "../assets/pinterest.png";
import logo from "../assets/logo.svg";

const navLinks = [
  { name: "WORLD", path: "/world" },
  { name: "AFRICA", path: "/africa" },
  { name: "CONGO DRC", path: "/congo-drc" },
  { name: "POLITICS", path: "/politics" },
  { name: "SPORTS", path: "/sports" },
  { name: "BUSINESS", path: "/business" },
  { name: "TECHNOLOGY", path: "/technology" },
  { name: "OTHERS", path: "/others" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-[13px] font-extrabold tracking-wide transition-colors ${
      isActive ? "text-[#d45534]" : "text-[#111] hover:text-[#d45534]"
    }`;

  return (
    <header className="w-full border-t border-b border-[#e3e3df] bg-[#f7f7f5]">
      
      {/* TOP HEADER */}
      <div className="relative mx-auto flex h-[90px] max-w-[1350px] items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Social Icons (Desktop only) */}
        <div className="hidden md:flex items-center gap-5">
          {[insta, fb, linkedin, pinterest].map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="social"
              className="h-[16px] w-[16px] opacity-80 hover:opacity-100 cursor-pointer"
            />
          ))}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="flex md:hidden flex-col gap-[5px]"
        >
          <span className="h-[2px] w-7 bg-[#111]"></span>
          <span className="h-[2px] w-7 bg-[#111]"></span>
          <span className="h-[2px] w-7 bg-[#111]"></span>
        </button>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-[75px] w-[210px] sm:h-[90px] sm:w-[260px] lg:h-[100px] lg:w-[300px]"
            />
          </Link>
        </div>

        {/* Subscribe */}
        <button className="hidden sm:block bg-[#1a1a1a] px-4 py-2 text-[14px] font-semibold text-white hover:bg-[#333] lg:px-6 lg:py-3 lg:text-[15px]">
          Subscribe
        </button>
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:block border-t border-[#e3e3df]">
        <div className="mx-auto flex h-[60px] max-w-[1350px] items-center justify-center gap-6 lg:gap-10 px-4">
          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-[#e3e3df] bg-[#f7f7f5]">
          <div className="flex flex-col px-5 py-4 gap-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {item.name}
              </NavLink>
            ))}

            <button className="mt-2 bg-[#1a1a1a] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#333]">
              Subscribe
            </button>

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-5 pt-3 border-t border-[#e3e3df]">
              {[insta, fb, linkedin, pinterest].map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt="social"
                  className="h-[16px] w-[16px] opacity-80"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;