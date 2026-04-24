import React from "react";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const footerLinks = [
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

const Footer = () => {
  const icons = {
    instagram: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    linkedin: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
    pinterest: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
  };

  return (
    <footer className="relative border-t-[4px] border-t-[#e34b2f] bg-black text-white">
      
      {/* TOP SECTION */}
      <div className="mx-auto flex min-h-[140px] max-w-[1240px] flex-col items-center justify-center gap-6 px-5 py-6 sm:px-8 md:flex-row md:justify-between md:py-0 lg:px-12">
        
        {/* LOGO */}
        <Link to="/">
          <img
            src={logo}
            alt="Nexus News"
            className="h-[80px] w-[230px] cursor-pointer brightness-0 invert sm:h-[100px] sm:w-[300px]"
          />
        </Link>

        {/* NAV LINKS */}
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-[12px] font-extrabold tracking-wide md:gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-[#e34b2f] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/20"></div>

      {/* MIDDLE SECTION */}
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-5 py-10 sm:px-8 md:grid-cols-3 md:gap-12 md:py-12 lg:px-12">
        
        {/* SUBSCRIBE */}
        <div>
          <h3 className="mb-5 text-[20px] font-bold md:mb-8">
            Subscribe Today!
          </h3>
          <p className="text-gray-500">Subscribe form goes here</p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="mb-5 text-[20px] font-bold md:mb-8">Company</h3>
          <ul className="space-y-3 text-[16px]">
            <li>
              <Link to="/" className="hover:text-[#e34b2f]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#e34b2f]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#e34b2f]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="mb-5 text-[20px] font-bold md:mb-8">Social Media</h3>
          <ul className="space-y-4">
            {Object.entries(icons).map(([name, src]) => (
              <li key={name} className="flex items-center gap-3">
                <img src={src} alt={name} className="h-5 w-5" />
                <span className="capitalize hover:text-[#e34b2f] cursor-pointer">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20"></div>

      {/* COPYRIGHT */}
      <div className="bg-[#050505] px-4 py-5 text-center">
        <p className="text-[14px] sm:text-[16px]">
          Copyright © 2026 Nexus News
        </p>
      </div>

      {/* SCROLL TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 flex h-8 w-8 items-center justify-center bg-[#e34b2f] sm:bottom-8 sm:right-8"
      >
        <ChevronUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;