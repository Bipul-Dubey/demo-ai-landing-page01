"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import SideAwareButton from "../ui/side-aware-button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "Changelog", href: "#changelog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close mobile menu when resizing above md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <nav
        className={cn(
          "flex items-center justify-between px-6 md:px-10 py-2",
          "backdrop-blur-[3px]"
        )}
      >
        {/* Logo and Brand */}
        <Logo />

        {/* Navigation - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-gray-300 font-medium transition-colors
                         hover:text-white
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 
                         after:h-[2px] after:w-0 after:bg-white 
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Get Started Button Desktop */}
        <SideAwareButton>GET STARTED</SideAwareButton>

        {/* Mobile Dropdown - Hamburger */}
        <div className="md:hidden flex items-center">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              side="bottom"
              align="end"
              className="mt-2 bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg min-w-[180px] px-4 py-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-gray-300 text-base font-medium transition-colors
                             hover:text-white
                             after:content-[''] after:absolute after:left-0 after:-bottom-1 
                             after:h-[2px] after:w-0 after:bg-white 
                             after:transition-all after:duration-500 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className={cn(
                  "rounded-full px-4 py-2 font-semibold text-white mt-2",
                  "bg-white/10 border border-white/20",
                  "hover:bg-white/20 transition shadow-md"
                )}
              >
                GET STARTED
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
}
