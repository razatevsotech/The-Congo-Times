import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.svg";
import logo from "../assets/headerLogo.png";
import footerBg from '../assets/footer.png'
import insta from '../assets/instagram.png'
import fb from '../assets/facebook-app-symbol.png'
import linkedin from '../assets/linkedin.png'
import pinterest from '../assets/pinterest.png'

const footerNavLinks = [
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className="relative w-full text-white overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        {/* TOP SECTION: Logo and Main Nav */}
        <div className="mx-auto max-w-[1350px] px-6 lg:px-20 py-12 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link to="/">
                <img
                  src={logo}
                  alt="The Congo Times"
                  className="h-auto w-[250px] lg:w-[320px] mb-2"
                />
              </Link>
              <p className="text-[10px] lg:text-[11px] font-bold tracking-[0.1em] uppercase opacity-90">
                WELCOME TO THE CONGO TIMES THE NATION'S STORY, UNFILTERED.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
              {footerNavLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[13px] lg:text-[14px] hover:text-[#f7d117] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Full-width Divider */}
        <div className="border-t border-white/70 w-full"></div>

        {/* MIDDLE SECTION: 3 Columns */}
        <div className="mx-auto max-w-[1350px] px-6 lg:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Subscribe */}
            <div>
              <h3 className="text-[20px] lg:text-[22px] font-medium  mb-6 uppercase tracking-tight">Subscribe Today!</h3>
              <div className="bg-white/10 p-6 rounded-sm backdrop-blur-sm">
                <p className="text-[14px] text-white/80">Subscribe form goes here</p>
              </div>
            </div>

            {/* Company */}
            <div className="md:pl-10 lg:pl-20">
              <h3 className="text-[20px] lg:text-[22px] font-medium mb-6 uppercase tracking-tight">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/" className="text-[15px] hover:text-[#f7d117] transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-[15px] hover:text-[#f7d117] transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-[15px] hover:text-[#f7d117] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="md:pl-10 lg:pl-20">
              <h3 className="text-[20px] lg:text-[22px] font-medium mb-6 uppercase tracking-tight">Social Media</h3>
              <ul className="space-y-5">
                {[
                  { name: "Instagram", icon: insta },
                  { name: "Facebook", icon: fb },
                  { name: "Linkedin", icon: linkedin },
                  { name: "Pinterest", icon: pinterest }
                ].map((item) => (
                  <li key={item.name} className="flex items-center gap-4 group cursor-pointer">
                    <div className=" p-2 rounded-sm group-hover:text-[#f7d117] transition-colors">
                      <img src={item.icon} alt={item.name} className="h-4 w-4 invert" />
                    </div>
                    <span className="text-[15px] group-hover:text-[#f7d117] transition-colors">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Full-width Divider */}
        <div className="border-t border-white/70 w-full"></div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="mx-auto max-w-[1350px] px-6 lg:px-20 py-8 text-center">
          <p className="text-[14px] lg:text-[16px] font-bold opacity-80 uppercase tracking-widest">
            Copyright © 2026 The Congo Times
          </p>
        </div>
      </div>

      {/* SCROLL TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center bg-[#f7d117] text-black shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
      >
        <ChevronUp size={24} strokeWidth={3} />
      </button>
    </footer>
  );
};

export default Footer;