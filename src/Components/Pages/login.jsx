import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("loggedInRole", "admin");

    // ✅ redirect to header slider (THIS FIXES YOUR ISSUE)
    navigate("/admin/header-slider");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1c1f39] to-[#0f3458] flex items-center justify-center px-4">
      <div className="w-full max-w-[380px] rounded-[14px] bg-white px-9 py-10 shadow-2xl">
        
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ef4562] text-sm font-bold text-white">
            B
          </div>
          <span className="text-xs text-[#74708d]">Admin Panel</span>
        </div>

        <h1 className="text-[22px] font-bold text-[#050516]">
          Welcome back
        </h1>

        <p className="mt-1 text-[13px] text-[#5e5a7d]">
          Sign in to manage your visual content
        </p>

        <form onSubmit={handleLogin} className="mt-7">

          {/* Email */}
          <div>
            <label className="mb-2 block text-[13px] text-[#39375d]">
              Email address
            </label>
            <input
              type="email"
              defaultValue="admin@example.com"
              className="h-10 w-full rounded-md border border-[#dddde7] px-3 text-sm outline-none focus:border-[#ef4562]"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="mb-2 block text-[13px] text-[#39375d]">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                defaultValue="123456789"
                className="h-10 w-full rounded-md border border-[#dddde7] px-3 pr-10 text-sm outline-none focus:border-[#ef4562]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#56506f]"
              >
                {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {/* Remember */}
          <label className="mt-4 flex cursor-pointer items-center gap-2 text-[13px] text-[#5e5a7d]">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="h-3.5 w-3.5 accent-[#1677ff]"
            />
            Remember me for 30 days
          </label>

          {/* Button */}
          <button
            type="submit"
            className="mt-5 h-[42px] w-full rounded-md bg-[#ef4562] text-sm font-bold text-white transition hover:bg-[#df3654]"
          >
            Sign in
          </button>

          <button
            type="button"
            className="mt-4 w-full text-center text-xs text-[#ef4562] hover:underline"
          >
            Forgot password?
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;