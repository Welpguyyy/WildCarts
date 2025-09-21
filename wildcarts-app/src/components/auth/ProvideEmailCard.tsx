"use client";

import { useState } from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

export default function ProvideEmailCard() {
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

      <div className="max-w-[420px] mx-auto">
        <h3 className="pt-5 text-center text-l font-medium text-[#000000]">
          Enter your registered school email to receive a verification code.
        </h3>
      </div>

      {/* Back Button */}
      <button>
        <Link
          href="/auth/sign-in"
          className="absolute top-6 left-4 text-[#7F170E] flex items-center gap-1 hover:text-red-600"
        >
          <IoIosArrowBack />
          <span className="font-medium">Back</span>
        </Link>
      </button>

      <form className="flex flex-col items-center">

        {/* Email Input */}
        <div className="relative w-full max-w-[420px]">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
            <MdEmail size={23} />
          </span>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="inner-shadow inner-shadow2 w-full p-3 pl-14 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] focus:outline-none"
          />
        </div>

        {/* Continue Button */}
        <div className="pt-8 relative w-full max-w-[420px]">
          <Link href="/auth/verify-code" className="w-full">
            <button
              type="button"
              className="w-full cursor-pointer bg-[#F4C411] hover:bg-yellow-500 hover:scale-102 hover:shadow-[0_0_10px_#F4C411] text-white font-bold py-2 rounded-full shadow-md transition"
            >
              Continue
            </button>
          </Link>
        </div>
      </form>

      {/* Bottom Padding */}
      <div className="pt-7"></div>
    </div>
  );
}
