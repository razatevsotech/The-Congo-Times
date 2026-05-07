import React from "react";
import { Link } from "react-router-dom";
import logoText from "../assets/logo.svg";
import flag from "../assets/flag.png";
import stripes from "../assets/headerLogo.png";
import { useCategories } from "../hooks/usePosts";

// Custom SVG for DRC Flag
const DRCFlag = () => (
  <img src={flag} alt="DRC Flag" className="w-[80px] lg:w-[120px]" />
);

const Footer2 = () => {
    // Fetch categories for dynamic links
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

  // Combine dynamic and static links
  const navLinks = [...dynamicNavLinks, ...staticNavLinks];

  return (
    <footer className="w-full bg-black text-white font-sans">
      {/* Top Stripes */}
      <div className="w-full h-2 overflow-hidden">
        <img src={stripes} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 mb-16">
          <DRCFlag />
          <Link to="/" className="flex justify-center items-center flex-1 max-w-[700px]">
            <img src={logoText} alt="The Congo Times" className="w-full invert" />
          </Link>
          <DRCFlag />
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* OUR VISION */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-wider">OUR VISION</h3>
            <div className="space-y-4 text-sm leading-relaxed opacity-90 font-light text-justify">
              <p>
                Founded in 2024, The Congo Times was born from a clear and vital mission: to showcase the Democratic Republic of the Congo in its truest, most vibrant light. For too long, global headlines have overlooked the incredible stories of growth and resilience within our borders. We are here to change that by spotlighting the positive progress, cultural richness, and innovative spirit that define our people.
              </p>
              <p>
                From the bustling energy of our cities to the groundbreaking achievements of our youth, we document the good things happening every single day. Our commitment is to provide the world with an authentic lens into the heart of Africa, celebrating the side of the Congo that inspires. We will continue to champion this image, today and always.
              </p>
            </div>
          </div>

          {/* IMPORTANT LINKS */}
          <div className="space-y-6 lg:pl-12">
            <h3 className="text-xl font-bold tracking-wider">IMPORTANT LINKS</h3>
            <ul className="space-y-2 text-[15px] font-bold opacity-90 italic">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-yellow-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OUR TEAM */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold tracking-wider">OUR TEAM</h3>
            <div className="space-y-5 text-xs lg:text-[14px] font-bold italic tracking-tight">
              <div>
                <p>CEO - MR. GEORGE KASINDI</p>
                <p className="not-italic opacity-80 underline uppercase">ADMIN@THECONGOTIMES.COM</p>
              </div>
              <div>
                <p>CFO - MR. JEAN JACQUE</p>
                <p className="not-italic opacity-80 underline uppercase">ACCOUNTS@THECONGOTIMES.COM</p>
              </div>
              <div>
                <p>COO - MR. KAZADI JERANT</p>
                <p className="not-italic opacity-80 underline uppercase">INFO@THECONGOTIMES.COM</p>
              </div>
              <div>
                <p>CMO - MR. USENI</p>
                <p className="not-italic opacity-80 underline uppercase">MARKETING@THECONGOTIMES.COM</p>
              </div>
              <div>
                <p>DIRECTOR NEWS - MR. MASAMPU</p>
                <p className="not-italic opacity-80 underline uppercase">NEWS@THECONGOTIMES.COM</p>
              </div>
              <div className="space-y-1">
                <p>DIRECTOR TRANSPORT - MR. KASONGO</p>
                <p>DIRECTOR INTERIOR - MR. USMAN</p>
                <p>DIRECTOR MEDIA - MR. ROY</p>
              </div>
            </div>
          </div>

          {/* GET SOCIAL WITH US! */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold tracking-wider">GET SOCIAL WITH US!</h3>

            {/* Social Icons Grid */}
            <div className="grid grid-cols-5 gap-y-6 gap-x-4 max-w-[200px]">
              {["facebook", "instagram", "twitter", "linkedin", "pinterest", "telegram", "threads", "tiktok", "dribbble", "snapchat"].map((icon, i) => (
                <Link key={i} to="#" className="hover:scale-110 transition-transform">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <SocialIcon name={icon} />
                  </div>
                </Link>
              ))}
            </div>

            {/* WhatsApp Section */}
            <div className="flex items-center gap-4 group cursor-pointer pt-4">
              <div className="w-10 h-10 flex items-center justify-center border border-white rounded-full group-hover:bg-green-600 transition-colors shrink-0">
                <WhatsAppIcon />
              </div>
              <div className="text-[10px] font-bold leading-tight uppercase">
                <p>JOIN OUR WHATSAPP CHANNEL</p>
                <p>FOR DAILY NEWS UPDATES</p>
              </div>
            </div>

            {/* App Badges */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
              </Link>
              <Link to="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 invert brightness-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 pt-8 text-center mt-12">
          <p className="text-xs lg:text-base font-light opacity-70 tracking-widest">
            Copyright @ 2024-2026 The Congo Times, Designed & Managed by DigiTechGorilla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Simple helper components for icons to keep it clean
const SocialIcon = ({ name }) => {
  const icons = {
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
    twitter: <path d="M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768 M13.232 10.768l6.768-6.768" />, // X logo
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    pinterest: <path d="M12 2c-5.52 0-10 4.48-10 10 0 4.17 2.55 7.73 6.2 9.2-.08-.77-.16-1.95.03-2.79.18-.78 1.14-4.83 1.14-4.83s-.29-.58-.29-1.44c0-1.35.78-2.36 1.76-2.36.83 0 1.23.62 1.23 1.36 0 .83-.53 2.08-.81 3.23-.23.96.48 1.75 1.42 1.75 1.7 0 3.01-1.8 3.01-4.39 0-2.29-1.65-3.89-4-3.89-2.72 0-4.32 2.04-4.32 4.15 0 .82.32 1.71.71 2.19.08.1.09.18.06.29-.07.28-.22.88-.25.99-.04.16-.13.19-.31.11-1.16-.54-1.88-2.23-1.88-3.59 0-2.92 2.12-5.6 6.12-5.6 3.21 0 5.71 2.29 5.71 5.35 0 3.19-2.01 5.76-4.8 5.76-1.12 0-2.18-.58-2.54-1.26 0 0-.55 2.1-.69 2.63-.25.96-.93 2.16-1.38 2.89.94.27 1.93.42 2.96.42 5.52 0 10-4.48 10-10s-4.48-10-10-10z" />,
    telegram: <><path d="M21.19 2.85a.997.997 0 0 0-.9-.08L2.3 8.35a1 1 0 0 0-.02 1.88l5.24 2.11 2.11 6.57a1 1 0 0 0 1.63.39l3.19-3.19 4.39 3.24a.998.998 0 0 0 1.58-.51l3.5-15.14c.05-.33-.05-.66-.26-.85zM8.35 11.23l10.22-6.52-8.08 8.08-.2 1.92-1.94-3.48z" /></>,
    snapchat: <path d="M12 2c-3.1 0-5.5 1.9-5.5 5.5 0 2.2.8 3.5 1.3 4.3.2.3.1.5-.1.7l-1.3.8c-.5.3-.6.6-.6.8 0 .4.4.7 1 .7.6 0 1.2-.2 1.8-.4.3-.1.5 0 .7.3l.9 1.5c.3.5.7.8 1.3.8s1-.3 1.3-.8l.9-1.5c.2-.3.4-.4.7-.3.6.2 1.2.4 1.8.4.6 0 1-.3 1-.7 0-.2-.1-.5-.6-.8l-1.3-.8c-.2-.2-.3-.4-.1-.7.5-.8 1.3-2.1 1.3-4.3 0-3.6-2.4-5.5-5.5-5.5z" />,
    threads: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />,
    tiktok: <path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5" />,
    dribbble: <><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-4.59 4.35-7.67 7.58-14.37 8.68m12.03 4.2c-5.61-4.9-9.39-6.26-14.09-2.25" /></>
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      {icons[name] || <circle cx="12" cy="12" r="10" />}
    </svg>
  );
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default Footer2;
