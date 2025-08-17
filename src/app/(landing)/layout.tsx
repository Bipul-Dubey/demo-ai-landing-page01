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
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
