"use client"

import VerificationCodeCard from "@/components/auth/VerificationCode";
import LightRays from "@/components/LightRays"; 

export default function SignInPage() {
  return (
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <VerificationCodeCard email="testing@cit.edu"/>
      </div>
  );
}
