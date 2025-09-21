"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

interface VerificationCodeCardProps {
  email: string;
}

export default function VerificationCodeCard({ email }: VerificationCodeCardProps) {
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
        Enter Verification Code
      </h2>
      <h3 className="text-center text-l font-medium text-[#000000]">
        Verification code was sent to {email}
      </h3>

      <button>
        <Link
          href="/auth/forgot-password"
          className="absolute top-6 left-4 text-[#7F170E] flex items-center gap-1 hover:text-red-600"
        >
          <IoIosArrowBack />
          <span className="font-medium">Back</span>
        </Link>
      </button>

      <form action="" className="flex flex-col items-center">
        <div className="pt-1 w-full max-w-[420px] flex justify-center gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="flex-1 min-w-[50px] sm:min-w-[60px] w-14 sm:w-16 h-16 sm:h-18 text-center text-3xl font-semibold rounded-2xl inner-shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          ))}
        </div>

        {/* Continue Button */}
        <div className="pt-10 relative w-full max-w-[420px] item-center">
          <Link href="/auth/reset-password" className="w-full">
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#F4C411] hover:bg-yellow-500 hover:scale-102 hover:shadow-[0_0_10px_#F4C411] text-white font-bold py-2 rounded-full shadow-md transition"
            >
              Continue
            </button>
          </Link>
        </div>
      </form>
      <div className="pt-10"></div>
    </div>
  );
}
