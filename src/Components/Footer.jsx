import React from "react";
import { ChevronUp } from "lucide-react";
import logo from "../assets/logo.svg";

const Footer = () => {
  const icons = {
    instagram: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    linkedin: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
    pinterest: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
  };

  return (
    <footer className="relative border-t-[4px] border-t-[#e34b2f] bg-black text-white">
      <div className="mx-auto flex min-h-[140px] max-w-[1240px] flex-col items-center justify-center gap-6 px-5 py-6 sm:px-8 md:flex-row md:justify-between md:py-0 lg:px-12">
        <div className="text-[40px] font-extrabold">
          <img
            src={logo}
            alt="Nexus News"
            className="h-[80px] w-[230px] cursor-pointer brightness-0 invert sm:h-[100px] sm:w-[300px]"
          />
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[15px] font-semibold md:gap-10">
          <a href="#" className="hover:text-[#e34b2f]">
            Health
          </a>
          <a href="#" className="hover:text-[#e34b2f]">
            Sports
          </a>
          <a href="#" className="hover:text-[#e34b2f]">
            Politics
          </a>
          <a href="#" className="hover:text-[#e34b2f]">
            Business
          </a>
          <a href="#" className="hover:text-[#e34b2f]">
            Arts
          </a>
          <a href="#" className="hover:text-[#e34b2f]">
            Science
          </a>
          <a href="#" className="hover:text-[#e34b2f]">
            World
          </a>
        </nav>
      </div>

      <div className="border-t border-white/20"></div>

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-5 py-10 sm:px-8 md:grid-cols-3 md:gap-12 md:py-12 lg:px-12">
        <div>
          <h3 className="mb-5 text-[20px] font-bold md:mb-8">
            Subscribe Today!
          </h3>
          <p className="text-gray-500">Subscribe form goes here</p>
        </div>

        <div>
          <h3 className="mb-5 text-[20px] font-bold md:mb-8">Company</h3>
          <ul className="space-y-3 text-[16px]">
            <li>
              <a href="#" className="hover:text-[#e34b2f]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e34b2f]">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#e34b2f]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[20px] font-bold md:mb-8">Social Media</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <img src={icons.instagram} alt="Instagram" className="h-5 w-5" />
              <span className="hover:text-[#e34b2f]">Instagram</span>
            </li>

            <li className="flex items-center gap-3">
              <img src={icons.facebook} alt="Facebook" className="h-5 w-5" />
              <span className="hover:text-[#e34b2f]">Facebook</span>
            </li>

            <li className="flex items-center gap-3">
              <img src={icons.linkedin} alt="LinkedIn" className="h-5 w-5" />
              <span className="hover:text-[#e34b2f]">LinkedIn</span>
            </li>

            <li className="flex items-center gap-3">
              <img src={icons.pinterest} alt="Pinterest" className="h-5 w-5" />
              <span className="hover:text-[#e34b2f]">Pinterest</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20"></div>

      <div className="bg-[#050505] px-4 py-5 text-center">
        <p className="text-[14px] sm:text-[16px]">
          Copyright © 2026 Nexus News
        </p>
      </div>

      <button className="fixed bottom-5 right-5 flex h-8 w-8 items-center justify-center bg-[#e34b2f] sm:bottom-8 sm:right-8">
        <ChevronUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;