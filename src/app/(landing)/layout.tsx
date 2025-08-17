import Header from "@/components/Header";
import React from "react";

export default function LandingRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black h-screen text-white overflow-y-auto">
      <Header />
      <div className="py-16">{children}</div>
    </div>
  );
}
