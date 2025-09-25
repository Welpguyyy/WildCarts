"use client";

import LightRays from "@/components/LightRays";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative w-screen h-screen bg-[radial-gradient(circle_at_50%,_#7F170E_0%,_#7F170E_10%,_#3F0B06_70%,_#000000_130%)]">
      {/* Persistent Background */}
      <div className="absolute inset-0 w-full h-full z-0">
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

      {/* Foreground Page Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {children}
      </div>
    </main>
  );
}
