import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Item } from "./ReviewCarousel";

export function Card({ data, highlight }: { data: Item; highlight?: boolean }) {
  return (
    <article
      className={cn(
        "relative h-full rounded-2xl border p-6 sm:p-7 md:p-8",
        "bg-gradient-to-b from-[#0f1117] to-[#0b0c12] border-white/10",
        "shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden"
      )}
    >
      <div className="rounded-xl bg-black/30 p-5 sm:p-6 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]">
        <Quote className="mb-3 size-6 text-white/30" />
        <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
          “{data.title}”
        </p>
      </div>

      <div className="mt-5">
        <div className="font-semibold">{data.body}</div>
        <div className="text-xs text-zinc-400">{data.id}</div>
      </div>

      {highlight && (
        <div className="pointer-events-none absolute -inset-8 -z-10 rounded-3xl bg-[radial-gradient(60%_60%_at_70%_0%,rgba(139,92,246,0.2),transparent_60%),radial-gradient(40%_40%_at_0%_100%,rgba(236,72,153,0.18),transparent_60%)] blur-2xl" />
      )}
    </article>
  );
}
