"use client"

import SignUpCard from "@/components/auth/SignUpCard";
import LightRays from "@/components/LightRays"; 

export default function SignUpPage() {
  return (
    <main className="relative w-screen h-screen bg-[radial-gradient(circle_at_50%,_#7F170E_0%,_#7F170E_10%,_#3F0B06_70%,_#000000_130%)]">
      <div className="absolute inset-0 w-full h-full">
        <LightRays
          raysOrigin="top-right"
          raysColor="#860404"
          raysSpeed={0.1}
          lightSpread={5}
          rayLength={5}
          followMouse={false}
          mouseInfluence={0.0}
          noiseAmount={0.0}
          distortion={0.5}
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
            <SignUpCard />
      </div>
    </main>
  );
}