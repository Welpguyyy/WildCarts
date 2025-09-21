"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

export default function ResetPasswordCard() {
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
      <h2 className="pt-5 text-center text-xl font-bold text-[#000000]">
        Set your new password
      </h2>
      <h3 className=" text-center text-l font-medium text-[#000000]">
        Please enter and confirm your new password.
      </h3>

      {/* Back Button */}
      <Link
        href="/auth/verify-code"
        className="absolute top-6 left-4 text-[#7F170E] flex items-center gap-1 hover:text-red-600"
      >
        <IoIosArrowBack />
        <span className="font-medium">Back</span>
      </Link>

      <form className="flex flex-col items-center">
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
        <div className="pt-5 relative w-full max-w-[420px]">
            <span className="pt-5 absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
                <FaLock />
            </span>
            <input
                type="password"
                name="password"
                placeholder="Confirm password"
                className="inner-shadow inner-shadow2 w-full p-3 pl-13 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] focus:outline-none"
            />
        </div>

        {/* Continue Button */}
        <div className="pt-10 w-full max-w-[420px]">
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#F4C411] hover:bg-yellow-500 hover:scale-102 hover:shadow-[0_0_10px_#F4C411] text-white font-bold py-2 rounded-full shadow-md transition"
          >
            Continue
          </button>
        </div>
      </form>

      {/* Bottom Padding */}
      <div className="pt-10"></div>
    </div>
  );
}
