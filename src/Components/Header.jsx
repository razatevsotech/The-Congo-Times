import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import insta from "../assets/instagram.png";
import fb from "../assets/facebook-app-symbol.png";
import linkedin from "../assets/linkedin.png";
import pinterest from "../assets/pinterest.png";
import logo from "../assets/headerLogo.png";
import HeaderBg from "../assets/Frame.png";
import banner from "../assets/banner.png";

import star from "../assets/Star.png";



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";
import { useAdvertisementsByPlacement } from "../hooks/useAdvertisements";
import { useCategories } from "../hooks/usePosts";
import { AD_PLACEMENTS } from "../utils/categoryUtils";




const Header = ({ showSlider = true }) => {
  const [open, setOpen] = useState(false);
  const { data: slideAds, loading: slideAdsLoading } = useAdvertisementsByPlacement(
    AD_PLACEMENTS.HEADER_TOP
  );

  const { data: categoriesData } = useCategories();

  // Map dynamic categories to nav links, followed by static pages
  const dynamicNavLinks = categoriesData ? categoriesData.map(cat => ({
    name: cat.name.toUpperCase(),
    path: `/${cat.slug}`
  })) : [];

  const staticNavLinks = [
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const navLinks = [...dynamicNavLinks, ...staticNavLinks];



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
        <section className=" pt-[20px] pb-5">
          <div className="mx-auto w-full mt-[-8px]">
            {slideAdsLoading ? (
              <div className="flex h-[150px] w-full items-center justify-center bg-gray-100 md:h-[517px]">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
              </div>
            ) : (() => {
              const now = new Date();
              const activeAds = (slideAds?.items || [])
                .filter(ad => {
                  if (!ad.starts_at && !ad.ends_at) return true;
                  const start = ad.starts_at ? new Date(ad.starts_at) : null;
                  const end = ad.ends_at ? new Date(ad.ends_at) : null;
                  return (!start || now >= start) && (!end || now <= end);
                })
                .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));

              if (activeAds.length === 0) return null;

              const isSlider = activeAds.length > 1;

              return (
                <Swiper
                  modules={[Autoplay]}
                  autoplay={isSlider ? {
                    delay: 3000,
                    disableOnInteraction: false,
                  } : false}
                  loop={isSlider}
                  className="relative h-[150px] w-full overflow-hidden md:h-[517px]"
                >
                  {activeAds.map((ad) => {
                    const hasButton = !!ad.button_text;
                    const adContent = (
                      <div className="relative h-full w-full group overflow-hidden">
                        <img
                          src={ad.image}
                          alt={ad.title || "Advertisement"}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Text Overlay */}
                        {(ad.heading || ad.subheading || ad.button_text) && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-12 text-left">
                            {ad.heading && (
                              <h3 className="text-white text-xl md:text-4xl font-black mb-2 leading-tight transform transition-transform duration-500 group-hover:translate-x-2">
                                {ad.heading}
                              </h3>
                            )}
                            {ad.subheading && (
                              <p className="text-white/90 text-sm md:text-lg max-w-2xl mb-6 transform transition-transform duration-500 delay-75 group-hover:translate-x-2">
                                {ad.subheading}
                              </p>
                            )}
                            {ad.button_text && (
                              <a
                                href={ad.link_url}
                                target={ad.open_in_new_tab ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="inline-block w-fit bg-[#f7d117] px-8 py-3 text-sm md:text-base font-black text-black hover:bg-yellow-400 transition-all uppercase"
                              >
                                {ad.button_text}
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    );

                    return (
                      <SwiperSlide
                        key={ad.id}
                        className="bg-gray-50 flex items-center justify-center"
                        data-swiper-autoplay={(ad.transition_duration || 3) * 1000}
                      >
                        {!hasButton && ad.link_url ? (
                          <a
                            href={ad.link_url}
                            target={ad.open_in_new_tab ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="block h-full w-full cursor-pointer"
                          >
                            {adContent}
                          </a>
                        ) : (
                          <div className="h-full w-full">
                            {adContent}
                          </div>
                        )}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              );
            })()}
          </div>
        </section>
      )}

    </>

  );
};


export default Header;