"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Ambient drifting particles behind the conversation.
 *
 * Values are hardcoded rather than randomised so server and client markup match
 * exactly — no hydration mismatch, and the layout stays stable between renders.
 */
const PARTICLES = [
  { left: "12%", top: "18%", size: 3, duration: 11, delay: 0, drift: -18 },
  { left: "78%", top: "12%", size: 2, duration: 14, delay: 1.4, drift: 14 },
  { left: "34%", top: "62%", size: 4, duration: 16, delay: 0.6, drift: 22 },
  { left: "88%", top: "48%", size: 2, duration: 12, delay: 2.2, drift: -12 },
  { left: "22%", top: "84%", size: 3, duration: 15, delay: 1.1, drift: 16 },
  { left: "62%", top: "76%", size: 2, duration: 13, delay: 0.3, drift: -20 },
  { left: "50%", top: "32%", size: 2, duration: 17, delay: 2.8, drift: 10 },
  { left: "8%", top: "48%", size: 2, duration: 12.5, delay: 1.9, drift: 18 },
  { left: "68%", top: "92%", size: 3, duration: 14.5, delay: 0.9, drift: -14 },
];

export default function ParticleField() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[#FE5800]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.55, 0],
            y: [0, -34, 0],
            x: [0, p.drift, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
