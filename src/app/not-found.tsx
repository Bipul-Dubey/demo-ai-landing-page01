"use client";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <BackgroundAnimation />

      {/* Foreground content */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-16 text-center">
        <div className="relative select-none">
          <h1
            className="glitch text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight leading-none"
            data-text="404"
          >
            404
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-300">
            Page not found. The link may be broken, or the page may have been
            moved.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white text-black px-5 py-3 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:translate-y-[-1px]"
          >
            Go Home
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}

function BackgroundAnimation() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Aurora sheets */}
      <div className="absolute inset-0 aurora" />
      {/* Warp grid */}
      <div className="absolute inset-0 grid-warp" />
      {/* Particles */}
      <div className="absolute inset-0 particles" />
    </div>
  );
}
