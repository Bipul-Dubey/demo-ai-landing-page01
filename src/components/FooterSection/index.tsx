"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const cols = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Integration", href: "/integrations" },
    { label: "Contact", href: "/contact" },
  ],
  docs: [
    { label: "Blogs", href: "/blog" },
    { label: "Changelog", href: "/changelog" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "T and C", href: "/terms" },
  ],
  other: [
    { label: "Coming Soon…", href: "/coming-soon" },
    { label: "404", href: "/404" },
  ],
  social: [
    { label: "Linkedin", href: "https://linkedin.com", ext: true },
    { label: "Instagram", href: "https://instagram.com", ext: true },
    { label: "X/twitter", href: "https://twitter.com", ext: true },
    { label: "Github", href: "https://github.com", ext: true },
  ],
};

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(126,87,255,0.50)_0%,rgba(216,112,255,0.30)_22%,rgba(126,87,255,0.16)_40%,rgba(0,0,0,0)_72%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_12%_0%,rgba(255,153,102,0.30)_0%,rgba(255,153,102,0)_55%)]" />
        <div className="absolute inset-0 opacity-[0.45] [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] [background-image:radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:12px_12px]" />
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_40%)] bg-black/30" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pt-12 sm:pt-16">
        <div className="relative rounded-3xl">
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[55%] -z-10 h-[120px] w-[65%] rounded-[120px] bg-[radial-gradient(60%_50%_at_50%_50%,rgba(255,153,102,0.38),transparent_70%)] blur-2xl"
          />
          <div className="py-8 sm:py-10 md:py-12 lg:py-14">
            <div className="max-w-4xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight">
                Grow Globally with
                <br className="hidden sm:block" /> Our Platform
              </h2>

              <p className="mt-6 max-w-2xl text-sm sm:text-base text-zinc-300 leading-relaxed">
                Seamlessly manage inventory, optimize operations, and
                <br className="hidden sm:block" />
                scale your business worldwide.
              </p>

              <div className="mt-8">
                <CTAButton>Get Started</CTAButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20" />

        {/* LINK COLUMNS: 2 cols (sm/md) → 4 cols (lg+) */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:gap-x-12 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-4 md:gap-14">
          <FooterColumn title="Navigation" items={cols.navigation} />
          <FooterColumn title="Documentation" items={cols.docs} />
          <FooterColumn title="Other Pages" items={cols.other} />
          <FooterColumn title="Social Connect" items={cols.social} />
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 py-6 text-xs text-zinc-400">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link className="hover:text-white transition" href="/privacy">
                Privacy
              </Link>
              <Link className="hover:text-white transition" href="/terms">
                Terms
              </Link>
              <Link className="hover:text-white transition" href="/security">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---- UI bits ---- */

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block">
      {/* warm under-glow under the pill */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-3 -bottom-2 -z-10 h-7 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,132,89,0.55),transparent_70%)] blur-xl"
      />
      <button
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-5 sm:px-6 py-3",
          "bg-neutral-100 text-black hover:bg-white transition",
          "text-sm sm:text-[15px] font-semibold"
        )}
      >
        {children}
        <ArrowUpRight className="size-4" />
      </button>
    </div>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string; ext?: boolean }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-zinc-200">{title}</h4>
      <ul className="mt-5 space-y-4 text-zinc-400">
        {items.map((it, i) => {
          const isExternal = it.ext;
          const content = (
            <>
              <span className="group-hover:text-white transition">
                {it.label}
              </span>
              <ArrowUpRight
                className="size-3.5 translate-y-[1px] text-zinc-500 group-hover:text-white transition"
                strokeWidth={1.8}
              />
            </>
          );
          return (
            <li key={i}>
              {isExternal ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2"
                >
                  {content}
                </a>
              ) : (
                <Link
                  href={it.href}
                  className="group inline-flex items-center gap-2"
                >
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
