import React from "react";
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
  return (
    <header className="w-full border-t border-b border-[#e3e3df] bg-[#f7f7f5]">
      <div className="relative mx-auto flex h-[90px] max-w-[1350px] items-center justify-between px-8">
        <div className="flex items-center gap-5">
          <img src={insta} alt="Instagram" className="h-[16px] w-[16px]" />
          <img src={fb} alt="Facebook" className="h-[16px] w-[16px]" />
          <img src={linkedin} alt="LinkedIn" className="h-[16px] w-[16px]" />
          <img src={pinterest} alt="Pinterest" className="h-[16px] w-[16px]" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/">
            <img
              src={logo}
              alt="The Congo Times"
              className="h-[55px] w-auto cursor-pointer"
            />
          </Link>
        </div>

        <button className="bg-[#1a1a1a] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#333]">
          Subscribe
        </button>
      </div>

      <nav className="bg-black">
        <div className="mx-auto flex h-[48px] max-w-[1350px] items-center justify-center gap-[28px] px-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[12px] font-extrabold tracking-wide transition-colors ${
                  isActive ? "text-[#d45534]" : "text-white hover:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;