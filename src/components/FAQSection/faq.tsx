"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* One item */
function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
      className="relative"
    >
      {/* soft halo like reference */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -inset-[1px] -z-10 rounded-2xl",
          "bg-[radial-gradient(120%_140%_at_100%_-20%,rgba(67,56,202,0.18),transparent_60%),radial-gradient(120%_140%_at_0%_120%,rgba(2,6,23,0.25),transparent_60%)]",
          "blur-[6px]"
        )}
      />

      <div
        className={cn(
          "group rounded-2xl border border-white/10",
          "bg-[linear-gradient(180deg,rgba(16,18,24,0.85),rgba(10,11,16,0.85))]",
          "shadow-[0_20px_60px_rgba(0,0,0,0.45),inset_0_0_0_1px_rgba(255,255,255,0.04)]",
          "transition-colors"
        )}
      >
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5"
        >
          <h3
            className={cn(
              "text-left text-[15px] sm:text-base font-medium",
              "text-zinc-200 group-hover:text-white"
            )}
          >
            {question}
          </h3>

          <motion.span
            animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.06 : 1 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={cn(
              "grid size-7 place-items-center rounded-full",
              "bg-white/5 text-zinc-300 group-hover:text-white"
            )}
          >
            <ChevronDown className="size-4" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: { duration: 0.35, ease: [0.2, 0.7, 0.2, 1] },
                  opacity: { duration: 0.2, delay: 0.05 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.28, ease: "easeInOut" },
                  opacity: { duration: 0.2 },
                },
              }}
            >
              <div className="border-t border-white/10 px-5 sm:px-6 pb-5 pt-2 sm:pt-3">
                <motion.p
                  initial={{ y: -6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -6, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="text-sm text-zinc-400 leading-relaxed"
                >
                  {answer}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* List */
export default function FaqComponents() {
  const faqs = [
    {
      question: "What pricing plans do you offer?",
      answer:
        "We offer flexible plans for different stages—start simple and scale as you grow.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, we provide 24/7 support to assist with setup, troubleshooting, and any other queries.",
    },
    {
      question: "Is my data secure on this platform?",
      answer:
        "Security is built-in: encryption at rest and in transit, access controls, and continuous monitoring.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try all core features during the trial to evaluate fit before subscribing.",
    },
    {
      question: "Can I set up automated reorder alerts?",
      answer:
        "Absolutely. Configure thresholds and we’ll notify or auto-create POs when stock dips.",
    },
  ];

  return (
    <section className="relative">
      {/* Decorative background dots/halos like reference */}
      <div className="pointer-events-none absolute -inset-6 -z-10 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="pointer-events-none absolute -top-16 -left-24 -z-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-24 -z-10 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto max-w-2xl space-y-3 sm:space-y-4">
        {faqs.map((f, i) => (
          <FAQItem key={i} question={f.question} answer={f.answer} index={i} />
        ))}
      </div>
    </section>
  );
}
