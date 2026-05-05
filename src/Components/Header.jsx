import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import insta from "../assets/instagram.png";
import fb from "../assets/facebook-app-symbol.png";
import linkedin from "../assets/linkedin.png";
import pinterest from "../assets/pinterest.png";
import logo from "../assets/headerLogo.png";
import HeaderBg from "../assets/frame.png";
import banner from "../assets/banner.png";
import star from "../assets/Star.png";



import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";

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



const Header = ({ showSlider = true }) => {
  const [open, setOpen] = useState(false);

  const banners = [
    { src: banner, alt: "Cosmetic Advertisement 1" },
    { src: banner, alt: "Cosmetic Advertisement 2" },
    { src: banner, alt: "Cosmetic Advertisement 3" },
  ];

  const linkClass = ({ isActive }) =>
    `text-[14px] font-bold tracking-tight text-white transition-colors  font-[Arial] font-bold leading-[100%] tracking-[0%]${isActive ? "text-[#f7d117]" : "text-white hover:text-[#f7d117] "
    }`;

  return (
    <>
      <header
        className="w-full relative overflow-hidden bg-[#007fff]"
        style={{
          backgroundImage: `url(${HeaderBg})`,
          backgroundSize: 'cover',
          backgroundPosition: '107px center'
        }}
      >
        <div className="absolute inset-0 bg-blue-600/10 pointer-events-none"></div>

        {/* TOP HEADER */}
        <div className="relative mx-auto flex min-h-[140px] w-full flex-col justify-between px-4 py-6 sm:px-6 lg:px-20">

          <div className="flex items-center justify-between w-full">
            {/* Left Section: Star and Logo */}
            <div className="flex items-center gap-6 sm:gap-10">
              {/* Star */}
              <div className="hidden sm:block w-[15%] mt-[-26px]">
                <img src={star} alt="star" className="h-full w-full object-cover" />
              </div>

              {/* Title and Tagline */}
              <div className="flex flex-col">
                <Link to="/">
                  <img src={logo} alt="logo" className="h-full w-[72%] object-cover " />
                </Link>
                {/* <div className="h-[1px] w-full bg-white/60 my-2"></div>
                <p className="text-white text-[10px] sm:text-[11px] lg:text-[13px] font-bold tracking-[0.15em] uppercase opacity-95">
                  WELCOME TO THE CONGO TIMES THE NATION'S STORY, UNFILTERED.
                </p> */}
              </div>
            </div>

            {/* Right Section: Social and Subscribe */}
            <div className="flex items-center gap-6 lg:gap-10">
              {/* Social Icons (Desktop) */}
              <div className="hidden lg:flex items-center gap-5">
                {[insta, fb, linkedin, pinterest].map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt="social"
                    className="h-[20px] w-[20px] invert brightness-200 hover:scale-125 transition-all duration-300 cursor-pointer"
                  />
                ))}
              </div>

              {/* Hamburger (Mobile) */}
              <button
                onClick={() => setOpen(!open)}
                className="flex md:hidden flex-col gap-[5px] invert"
              >
                <span className="h-[2px] w-7 bg-white"></span>
                <span className="h-[2px] w-7 bg-white"></span>
                <span className="h-[2px] w-7 bg-white"></span>
              </button>

              {/* Subscribe Button */}
              <button className="hidden sm:block bg-[#f7d117] px-8 py-3 text-[15px] lg:text-[17px] font-black text-black hover:bg-yellow-400 hover:scale-105 transition-all duration-300 uppercase">
                Subscribe
              </button>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:block mt-10">
            <div className="flex items-center justify-end gap-[25px] lg:gap-[25px]">
              {navLinks.map((item) => (
                <NavLink key={item.path} to={item.path} className={linkClass}>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-blue-900/95 backdrop-blur-md text-white border-t border-white/10">
            <div className="flex flex-col px-5 py-6 gap-5">
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

              <button className="mt-4 bg-[#f7d117] px-6 py-3 text-[16px] font-black text-black hover:bg-yellow-400 uppercase rounded-sm">
                Subscribe
              </button>

              {/* Mobile Social Icons */}
              <div className="flex items-center gap-6 pt-4 border-t border-white/20">
                {[insta, fb, linkedin, pinterest].map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt="social"
                    className="h-[20px] w-[20px] invert brightness-200"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </header>


      {showSlider && (
        <section className="pt-6 pb-5">
          <div className="mx-auto w-full mt-[50px]" >
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false, // keeps autoplay after user swipe
              }}
              loop={true}
              className="relative h-[150px] w-full overflow-hidden md:h-[517px]"
            >
              {banners.map((ban, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={ban.src}
                    alt={ban.alt}
                    className="h-full w-full "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

    </>

  );
};


export default Header;