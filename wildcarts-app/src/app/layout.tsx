import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "@/components/sessionprovider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WildCart",
  description:
    "A shopping web application where CIT-U students can buy and sell products.",
  icons: {
    icon: "/logo-icon.ico",
    shortcut: "/logo-icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {/* 👇 wrap the app with session context */}
       <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
