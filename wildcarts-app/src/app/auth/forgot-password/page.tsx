"use client"

import ProvideEmailCard from "@/components/auth/ProvideEmailCard";
import SignInCard from "@/components/auth/SignInCard";
import LightRays from "@/components/LightRays"; 

export default function SignInPage() {
  return (
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <ProvideEmailCard />
      </div>
  );
}
