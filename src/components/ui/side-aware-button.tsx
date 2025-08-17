"use client";
import { useRef, MouseEvent, ButtonHTMLAttributes } from "react";
import { Button } from "./button";

type SideAwareButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: React.ReactNode | string;
};

export default function SideAwareButton({
  children = "GET STARTED",
  className = "",
  ...props
}: SideAwareButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const animRef = useRef<number | null>(null);

  const setVars = (x: number | string, y: number | string) => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--x", typeof x === "number" ? `${x}px` : x);
    el.style.setProperty("--y", typeof y === "number" ? `${y}px` : y);
  };

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    setVars(x, y);
  };

  // Smoothly interpolate current (--x,--y) back to target using rAF
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;

    const style = getComputedStyle(el);
    const curX = parseFloat(style.getPropertyValue("--x")) || 20;
    const curY =
      parseFloat(style.getPropertyValue("--y")) || 0.5 * el.clientHeight;

    const targetX = 20; // px
    const targetY = 0.5 * el.clientHeight; // 50%

    const duration = 320; // ms
    const start = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const k = easeOutCubic(t);
      const nx = curX + (targetX - curX) * k;
      const ny = curY + (targetY - curY) * k;
      setVars(nx, ny);
      if (t < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        animRef.current = null;
      }
    };

    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(tick);
  };

  return (
    <Button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={[
        "cursor-pointer",
        "relative inline-flex items-center justify-center",
        "h-9 px-6 rounded-full select-none",
        "font-semibold tracking-wide text-accent-foreground hover:text-accent",
        "bg-[#0d0d0d]",
        "ring-1 ring-white/10",
        // top bevel
        "before:absolute before:inset-px before:rounded-[999px] before:pointer-events-none",
        "before:[background:linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_30%)]",
        // moving glow
        "after:absolute after:inset-0 after:rounded-[999px] after:pointer-events-none",
        "after:[background:radial-gradient(38px_56px_at_var(--x,20px)_var(--y,50%),rgba(255,144,0,0.6),rgba(255,144,0,0.15)_55%,rgba(0,0,0,0)_70%)]",
        "after:will-change:background",
        "shadow-[0_8px_24px_-8px_rgba(0,0,0,0.65)]",
        className,
      ].join(" ")}
      style={
        {
          ["--x" as any]: "20px",
          ["--y" as any]: "50%",
        } as React.CSSProperties
      }
      {...props}
    >
      <span className="relative z-[1]">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-[999px] ring-1 ring-white/5" />
    </Button>
  );
}
