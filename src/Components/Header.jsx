// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import insta from "../assets/instagram.png";
// import fb from "../assets/facebook-app-symbol.png";
// import linkedin from "../assets/linkedin.png";
// import pinterest from "../assets/pinterest.png";
// import logo from "../assets/logo.svg";

// const Header = () => {
//   return (
//     <header className="w-full border-t border-b border-[#e3e3df] bg-[#f7f7f5]">
//       <div className="relative mx-auto flex h-[90px] max-w-[1350px] items-center justify-between px-8">
//         <div className="flex items-center gap-5">
//           <img
//             src={insta}
//             alt="Instagram"
//             className="h-[16px] w-[16px] opacity-80 hover:opacity-100 cursor-pointer"
//           />
//           <img
//             src={fb}
//             alt="Facebook"
//             className="h-[16px] w-[16px] opacity-80 hover:opacity-100 cursor-pointer"
//           />
//           <img
//             src={linkedin}
//             alt="LinkedIn"
//             className="h-[16px] w-[16px] opacity-80 hover:opacity-100 cursor-pointer"
//           />
//           <img
//             src={pinterest}
//             alt="Pinterest"
//             className="h-[16px] w-[16px] opacity-80 hover:opacity-100 cursor-pointer"
//           />
//         </div>

//         <div className="absolute left-1/2 -translate-x-1/2 text-[34px] font-extrabold tracking-tight">
//           <Link to="/">
//            <img
//             src={logo}
//             alt="The Congo Times"
//             className="h-[100px] w-[300px] cursor-pointer"
//           />
//           </Link>
//         </div>

//         <button className="bg-[#1a1a1a] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#333]">
//           Subscribe
//         </button>
//       </div>

//       <div className="border-t border-[#e3e3df]">
//         <div className="mx-auto flex h-[64px] max-w-[1350px] items-center justify-center gap-[42px]">
//           <NavLink
//             to="/health"
//             className={({ isActive }) =>
//               `text-[15px] font-medium transition-colors ${
//                 isActive ? "text-[#d45534]" : "text-[#111] hover:text-[#d45534]"
//               }`
//             }
//           >
//             Health
//           </NavLink>

//           <NavLink
//             to="/sports"
//             className={({ isActive }) =>
//               `text-[15px] font-medium transition-colors ${
//                 isActive ? "text-[#d45534]" : "text-[#111] hover:text-[#d45534]"
//               }`
//             }
//           >
//             Sports
//           </NavLink>

//            <NavLink
//             to="/politics"
//             className={({ isActive }) =>
//               `text-[15px] font-medium transition-colors ${
//                 isActive ? "text-[#d45534]" : "text-[#111] hover:text-[#d45534]"
//               }`
//             }
//           >
//             Politics
//           </NavLink>

//         <NavLink
//             to="/business"
//             className={({ isActive }) =>
//               `text-[15px] font-medium transition-colors ${
//                 isActive ? "text-[#d45534]" : "text-[#111] hover:text-[#d45534]"
//               }`
//             }
//           >
//             Buiness
//           </NavLink>
//            <NavLink
//             to="/art"
//             className={({ isActive }) =>
//               `text-[15px] font-medium transition-colors ${
//                 isActive ? "text-[#d45534]" : "text-[#111] hover:text-[#d45534]"
//               }`
//             }
//           >
//            Art
//           </NavLink>
//          <NavLink
//             to="/science"
//             className={({ isActive }) =>
//               `text-[15px] font-medium transition-colors ${
//                 isActive ? "text-[#d45534]" : "text-[#111] hover:text-[#d45534]"
//               }`
//             }
//           >
//            Science
//           </NavLink>
//           <NavLink
//             to="/world"
//             className={({ isActive }) =>
//               `text-[15px] font-medium transition-colors ${
//                 isActive ? "text-[#d45534]" : "text-[#111] hover:text-[#d45534]"
//               }`
//             }
//           >
//           World
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `text-[15px] font-medium transition-colors ${
//                 isActive ? "text-[#d45534]" : "text-[#111] hover:text-[#d45534]"
//               }`
//             }
//           >
//          About
//           </NavLink>
//          <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `text-[15px] font-medium transition-colors ${
//                 isActive ? "text-[#d45534]" : "text-[#111] hover:text-[#d45534]"
//               }`
//             }
//           >
//          Contact
//           </NavLink>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import insta from "../assets/instagram.png";
import fb from "../assets/facebook-app-symbol.png";
import linkedin from "../assets/linkedin.png";
import pinterest from "../assets/pinterest.png";
import logo from "../assets/logo.svg";

const navLinks = [
  { name: "Health", path: "/health" },
  { name: "Sports", path: "/sports" },
  { name: "Politics", path: "/politics" },
  { name: "Business", path: "/business" },
  { name: "Art", path: "/art" },
  { name: "Science", path: "/science" },
  { name: "World", path: "/world" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-[15px] font-medium transition-colors ${
      isActive ? "text-[#d45534]" : "text-[#111] hover:text-[#d45534]"
    }`;

  return (
    <header className="w-full border-t border-b border-[#e3e3df] bg-[#f7f7f5]">
      {/* Top Header */}
      <div className="relative mx-auto flex h-[90px] max-w-[1350px] items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Social Icons */}
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

        {/* Hamburger Mobile */}
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
              alt="The Congo Times"
              className="h-[75px] w-[210px] cursor-pointer sm:h-[90px] sm:w-[260px] lg:h-[100px] lg:w-[300px]"
            />
          </Link>
        </div>

        {/* Subscribe */}
        <button className="hidden sm:block bg-[#1a1a1a] px-4 py-2 text-[14px] font-semibold text-white hover:bg-[#333] lg:px-6 lg:py-3 lg:text-[15px]">
          Subscribe
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:block border-t border-[#e3e3df]">
        <div className="mx-auto flex h-[64px] max-w-[1350px] items-center justify-center gap-6 lg:gap-[42px] px-4">
          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
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

            <button className="mt-2 bg-[#1a1a1a] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#333] sm:hidden">
              Subscribe
            </button>

            <div className="flex items-center gap-5 pt-3 border-t border-[#e3e3df]">
              {[insta, fb, linkedin, pinterest].map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt="social"
                  className="h-[16px] w-[16px] opacity-80 hover:opacity-100 cursor-pointer"
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