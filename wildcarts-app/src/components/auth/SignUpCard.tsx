"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";

export default function SignUpCard() {
  const [gender, setGender] = useState("");

  return (
    <div className="animate-fadeIn card-glow relative w-full max-w-sm md:max-w-md lg:max-w-lg bg-[#F9F3CF] rounded-2xl shadow p-6">
      <img
        src="/logo.svg"
        alt="WildCart Logo"
        className="absolute -top-18 left-1/2 -translate-x-1/2 w-40 h-40"
      />
      <h1 className="pt-15 text-center text-4xl font-black bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
        WildCart
      </h1>

      <form action="" className="pt-5 flex flex-col items-center">
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

        {/* School ID + Gender Dropdown */}
        <div className="pt-5 w-full max-w-[420px] flex flex-wrap items-center gap-3">
        {/* School ID Input */}
          <div className="relative flex-1 min-w-[150px] sm:min-w-[160px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
                <HiIdentification size={24} />
              </span>
              <input
                type="text"
                name="schoolID"
                placeholder="School ID"
                className="w-full p-3 pl-13 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] inner-shadow inner-shadow2 focus:outline-none"
              />
          </div>

        {/* Gender Dropdown */}
          <div className="relative w-[150px] flex-shrink-0">
              <div className="paste-button w-full">
                <div className="relative w-full">
                    <button
                      type="button"
                      className="w-full pl-4 pr-10 py-2 bg-[#F4C411] text-white font-bold rounded-full"
                    >
                      {gender || "Gender"}
                    </button>
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-white pointer-events-none">
                      <RiArrowDropDownLine />
                    </span>
                </div>
                <div className="dropdown-content">
                  <a href="#" onClick={(e) => { e.preventDefault(); setGender("Male"); }}>Male</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); setGender("Female"); }}>Female</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); setGender("Other"); }}>Other</a>
                </div>
              </div>
           </div>
          </div>

        {/* Email Input */}
          <div className="pt-5 relative w-full max-w-[420px]">
              <span className="pt-5 absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
                  <MdEmail size={23} />
              </span>
              <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="inner-shadow inner-shadow2 w-full p-3 pl-14 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] focus:outline-none"
              />
          </div>

        {/* Password + Confirmation */}
          <div className="pt-5 w-full max-w-[420px] flex justify-center">
            <div className="flex gap-3 w-full ">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
                  <FaLock />
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 pl-12 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] inner-shadow inner-shadow2 focus:outline-none"
                />
              </div>

              <div className="relative flex-1">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
                  <FaLock />
                </span>
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirmation"
                  className="w-full p-3 pl-13 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] inner-shadow inner-shadow2 focus:outline-none"
                />
              </div>
            </div>
          </div>
        {/* Terms & Conditions */}
        <div className="pt-4 w-full max-w-[420px] flex items-center gap-2">
          <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 accent-yellow-500"
        />
          <label htmlFor="terms" className="text-gray-700 text-sm">
              I agree to the{" "}
              <Link href="/terms" className="text-yellow-600 hover:underline">
                  Terms and Conditions
              </Link>
          </label>
        </div>

        {/* Sign Up Button */}
        <div className="pt-9 relative w-full max-w-[420px]">
          <Link
            href="/sign-up" //here ibutang ang destination url kung aha mudirect once mupislit ug sign up
            className="block w-full cursor-pointer bg-[#F4C411] hover:bg-yellow-500 hover:scale-105 hover:shadow-[0_0_10px_#F4C411] text-white font-bold py-2 rounded-full shadow-md transition text-center"
          >
              Sign Up
          </Link>
          
        </div>
      </form>

      <p className="text-center mt-3 text-gray-700">
        Already have an account?{" "}
        <Link
          href="/auth/sign-in"
          className="text-[#464646] hover:text-yellow-600 font-medium"
        >
          Log In
        </Link>
      </p>
      <div className="pt-7"></div>
    </div>
  );
}
