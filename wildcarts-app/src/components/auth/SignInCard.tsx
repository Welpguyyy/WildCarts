"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

export default function SignInCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="animate-fadeIn card-glow relative w-full max-w-sm md:max-w-md lg:max-w-lg bg-[#F9F3CF] rounded-2xl shadow p-6">
      <img
        src="/logo.svg"
        alt="WildCart Logo"
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-50 h-50"
      />

      <h1 className="pt-22 text-center text-4xl font-black bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
        WildCart
      </h1>

      <form action="" className="pt-7 flex flex-col items-center">
        {/* Username Input */}
        <div className="relative w-full max-w-[420px]">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
            <FaUser />
          </span>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="inner-shadow inner-shadow2 w-full p-3 pl-13 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="pt-5 relative w-full max-w-[420px]">
          <span className="pt-5 absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
            <FaLock />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="inner-shadow inner-shadow2 w-full p-3 pl-13 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] focus:outline-none"
          />

          {/* Show/Hide Password Button */}
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="cursor-pointer pt-5 absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-center text-[#515050] focus:outline-none"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        </div>

        {/* Login Button */}
        <div className="pt-7 relative w-full max-w-[420px] item-center">
          <Link
            href="/sign-in" //here ibutang ang destination url kung aha mudirect once mupislit ug sign up
            className="block w-full cursor-pointer bg-[#F4C411] hover:bg-yellow-500 hover:scale-105 hover:shadow-[0_0_10px_#F4C411] text-white font-bold py-2 rounded-full shadow-md transition text-center"
          >
              Login
          </Link>
        </div>
      </form>

      {/* Links for Forgot Password and Sign Up */}
      <h3 className="text-black text-center mt-4">
        <Link
          href="/auth/forgot-password"
          className="text-[#464646] hover:text-yellow-600 font-medium"
        >
          Forgot Password?
        </Link>
        <span className="mx-2 text-black">or</span>
        <Link
          href="/auth/sign-up"
          className="text-[#464646] hover:text-yellow-600 font-medium"
        >
          Sign Up
        </Link>
      </h3>

      {/* Bottom Padding */}
      <div className="pt-7"></div>
    </div>
  );
}
