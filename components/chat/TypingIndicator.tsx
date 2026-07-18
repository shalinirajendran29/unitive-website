"use client";

import { motion, useReducedMotion } from "motion/react";

export default function TypingIndicator() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
      transition={{ type: "spring", stiffness: 460, damping: 34 }}
      className="flex items-center gap-2.5"
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#FE5800] to-[#B93E00] text-[10px] font-bold text-white">
        U
      </div>

      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.06] px-4 py-3.5">
        <span className="sr-only">Unitive AI is typing</span>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            className="block h-1.5 w-1.5 rounded-full bg-[#FE5800]"
            animate={
              reduceMotion
                ? { opacity: 0.6 }
                : { opacity: [0.25, 1, 0.25], y: [0, -3, 0] }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 1.1,
                    repeat: Infinity,
                    delay: i * 0.16,
                    ease: "easeInOut",
                  }
            }
          />
        ))}
      </div>
    </motion.div>
  );
}
