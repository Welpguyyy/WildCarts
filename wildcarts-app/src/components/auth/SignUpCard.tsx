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
  const [username, setUsername] = useState("");
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
      display_name: username
    }
  }
});

if (error) {
  console.log("error:", error.message);
} else {
  console.log("user created:", data.user);
}

  // Insert into your `Profiles` table
  const user = data.user;
  if (user) {
    const { error: insertError } = await supadata.from("Profiles").insert([
      {
        id: user.id,        
        student_id: schoolID,   
        fname: username,        
        email: email,
        gender: gender,
      },
    ]);

    if (insertError) {
      console.log("sup insert error:");
      console.log(insertError.message);
      
    } else {
      setSuccessMsg("Registration successful!");
    }
  }

  setLoading(false);
};

  return (
    <div className="animate-fadeIn card-glow relative w-full max-w-sm md:max-w-md lg:max-w-lg bg-[#F9F3CF] rounded-2xl shadow p-6">
      {/* ... logo + title ... */}

      <form onSubmit={handleSignUp} className="pt-5 flex flex-col items-center">
        {/* Username Input */}
        <div className="relative w-full max-w-[420px]">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#515050]">
            <FaUser />
          </span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="inner-shadow inner-shadow2 w-full p-3 pl-13 rounded-2xl placeholder:font-medium placeholder:text-[#7F7F7F] focus:outline-none"
          />
        </div>

        {/* School ID + Gender Dropdown */}
        <div className="pt-5 w-full max-w-[420px] flex flex-wrap items-center gap-3">
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
        <div className="pt-5 relative w-full max-w-[420px]">
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
        <div className="pt-5 w-full max-w-[420px] flex justify-center">
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
        <div className="pt-4 w-full max-w-[420px] flex items-center gap-2">
          <input type="checkbox" id="terms" className="w-4 h-4 accent-yellow-500" required />
          <label htmlFor="terms" className="text-gray-700 text-sm">
            I agree to the{" "}
            <Link href="/terms" className="text-yellow-600 hover:underline">
              Terms and Conditions
            </Link>
          </label>
        </div>

        {/* Sign Up Button */}
        <div className="pt-9 relative w-full max-w-[420px]">
          <button
            type="submit"
            disabled={loading}
            className="block w-full cursor-pointer bg-[#F4C411] hover:bg-yellow-500 hover:scale-105 hover:shadow-[0_0_10px_#F4C411] text-white font-bold py-2 rounded-full shadow-md transition text-center"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </form>

      {errorMsg && <p className="text-red-600 text-center mt-3">{errorMsg}</p>}
      {successMsg && <p className="text-green-600 text-center mt-3">{successMsg}</p>}
    </div>
  );
}
