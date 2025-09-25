"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import supadata from "@/lib/supabaseclient";

export default function SignUpCard() {
  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [schoolID, setSchoolID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrorMsg("");
  setSuccessMsg("");

  if (password !== confirmPassword) {
    setErrorMsg("Passwords do not match");
    return;
  }

  setLoading(true);

  //Sign up in Supabase Auth
const { data, error } = await supadata.auth.signUp({
  email: email,
  password: password,
  options: {
    data: {
      first_name: firstName,
      last_name: lastName
    }
  }
});

if (error) {
  if(error.message == " Database error saving new user"){
  setErrorMsg("Signup failed: only cit emails are allowed");
  }else{
    console.log("error:", error.message);
  }
} else {
  console.log("user created:", data.user);
}

  // Insert into Profiles` table
  const user = data.user;
  if (user) {
    const { error: insertError } = await supadata.from("Profiles").insert([
      {
        id: user.id,
        student_id: schoolID,
        fname: firstName,
        lname: lastName,
        email: email,
        gender: gender,
        login_firstime: true,
      },
    ]);

    if (insertError) {
      console.log("sup insert error:");
      console.log(insertError.message);
    } else {
      setSuccessMsg("Registration successful!");
      setFirstName("");
      setLastName("");
      setSchoolID("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setGender("");
    }
  }

  setLoading(false);
};

  return (
    <div className="animate-fadeIn card-glow relative w-full max-w-sm md:max-w-md lg:max-w-lg bg-[#F9F3CF] rounded-2xl shadow p-6">

      {/* Logo and WildCart title at the top (same as SignInCard) */}
      <img
        src="/logo.svg"
        alt="WildCart Logo"
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-50 h-50"
      />

      <h1 className="pt-22 text-center text-4xl font-black bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
        WildCart
      </h1>

  <form onSubmit={handleSignUp} className="pt-5 items-center">
        {/* First Name & Last Name Side by Side */}
  <div className="flex gap-3 w-full max-w-[420px] mb-3 mx-auto">
          <div className="relative flex-1">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
              <FaUser />
            </span>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
              className="inner-shadow inner-shadow2 w-full p-3 pl-13 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] focus:outline-none"
            />
          </div>
          <div className="relative flex-1">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
              <FaUser />
            </span>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
              className="inner-shadow inner-shadow2 w-full p-3 pl-13 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] focus:outline-none"
            />
          </div>
        </div>

        {/* School ID + Gender Dropdown */}
  <div className="pt-5 w-full max-w-[420px] flex flex-wrap items-center gap-3 mx-auto">
          <div className="relative flex-1 min-w-[150px] sm:min-w-[160px]">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
              <HiIdentification size={24} />
            </span>
            <input
              type="text"
              value={schoolID}
              onChange={(e) => setSchoolID(e.target.value)}
              placeholder="School ID"
              required
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
  <div className="pt-5 relative w-full max-w-[420px] mx-auto">
          <span className="pt-5 absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
            <MdEmail size={23} />
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="inner-shadow inner-shadow2 w-full p-3 pl-14 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] focus:outline-none"
          />
        </div>

        {/* Password + Confirmation */}
  <div className="pt-5 w-full max-w-[420px] flex justify-center mx-auto">
          <div className="flex gap-3 w-full ">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
                <FaLock />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full p-3 pl-12 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] inner-shadow inner-shadow2 focus:outline-none"
              />
            </div>

            <div className="relative flex-1">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
                <FaLock />
              </span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmation"
                required
                className="w-full p-3 pl-13 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] inner-shadow inner-shadow2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Terms */}
  <div className="pt-4 w-full max-w-[420px] flex items-center gap-2 mx-auto">
          <input type="checkbox" id="terms" className="w-4 h-4 accent-yellow-500" required />
          <label htmlFor="terms" className="text-gray-700 text-sm">
            I agree to the{" "}
            <Link href="/terms" className="text-yellow-600 hover:underline">
              Terms and Conditions
            </Link>
          </label>
        </div>

        {/* Sign Up Button */}
  <div className="pt-9 relative w-full max-w-[420px] mx-auto">
          <button
            type="submit"
            disabled={loading}
            className="block w-full cursor-pointer bg-[#F4C411] hover:bg-yellow-500 hover:scale-105 hover:shadow-[0_0_10px_#F4C411] text-white font-bold py-2 rounded-full shadow-md transition text-center"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
        {/* Already have an account? Sign In */}
  <div className="pt-4 w-full max-w-[420px] text-center mx-auto">
          <span className="text-gray-700 text-sm">Already have an account? </span>
          <Link href="/auth/sign-in" className="text-yellow-600 hover:underline font-bold">Sign In</Link>
        </div>
      </form>

      {errorMsg && <p className="text-red-600 text-center mt-3">{errorMsg}</p>}
      {successMsg && <p className="text-green-600 text-center mt-3">{successMsg}</p>}
    </div>
  );
}
