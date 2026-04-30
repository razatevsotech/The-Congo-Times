// layouts/AdminLayout.jsx

import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/Untitled-1.png";
import {
  Bell,
  HelpCircle,
  BarChart3,
  Image,
  Film,
  Send,
  Play,
  ClipboardList,
  Folder,
  Users,
  Settings,
  Menu,
  LogOut,
} from "lucide-react";

const sidebarLinks = [

  {
    label: "BANNERS",
    items: [
      { name: "Header Slider", path: "/admin/header-slider", icon: Image,   },
      { name: "Mid Slider", path: "/admin/mid-slider", icon: Film,   },
      { name: "Right Mid Slider  ", path: "/admin/right-mid-slider", icon: Play },
      { name: "Bottom Slider ", path: "/admin/bottom-slider", icon: Play },
 
    ],
  },


];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-[#f5f6fa] overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-[230px]" : "w-[78px]"
        } bg-[#1b1b31] text-white transition-all duration-300 flex flex-col shrink-0`}
      >
        {/* Logo */}
        <div className="h-[70px] flex items-center gap-3 px-4 border-b border-white/5">
          <div className="w-8 h-8 rounded-lg  flex items-center justify-center font-bold">
           <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>

          {sidebarOpen && (
          <div className="flex items-center justify-center h-full">
  <h2 className="text-sm font-bold leading-none">
    Congo Ads Manager
  </h2>
</div>
          )}
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          {sidebarLinks.map((section) => (
            <div key={section.label} className="mb-6">
              {sidebarOpen && (
                <p className="px-2 mb-2 text-[10px] tracking-[2px] font-bold text-[#8585b5]">
                  {section.label}
                </p>
              )}

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      end={item.path === "/admin"}
                      className={({ isActive }) =>
                        `flex items-center justify-between gap-3 px-4 py-3 rounded-md text-sm transition ${
                          isActive
                            ? "bg-[#ef4265] text-white"
                            : "text-[#aaa9d4] hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={16} />
                        {sidebarOpen && <span>{item.name}</span>}
                      </div>

                      {sidebarOpen && item.badge && (
                        <span className="text-[10px] bg-[#ef4265]/70 text-white px-2 py-[2px] rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-3 border-t border-white/5">
          
          <button
            onClick={handleLogout}
            className="w-full mt-2 flex items-center gap-3 px-3 py-2 rounded-md text-[#aaa9d4] hover:bg-red-500 hover:text-white"
          >
            <LogOut size={5} />
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        {/* <header className="h-[50px] bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div>
            <h1 className="text-[16px] font-semibold text-[#17172f] leading-none">
              Dashboard
            </h1>
            <p className="text-[11px] text-[#5f6085] mt-2">
              Congo Ads Manager / Dashboard
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50">
              <Bell size={17} />
            </button>

            <button className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center hover:bg-gray-50">
              <HelpCircle size={17} />
            </button>

            <button className="bg-[#ef4265] hover:bg-[#dc3658] text-white text-sm px-4 py-2 rounded-md font-medium">
              + Add Banner
            </button>
          </div>
        </header> */}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#f5f6fa] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}