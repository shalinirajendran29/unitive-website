"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MessageSquare, X } from "lucide-react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface ChatLauncherProps {
  open: boolean;
  onToggle: () => void;
  /** Shows the attention dot when the assistant has an unseen greeting. */
  showBadge: boolean;
}

let rippleId = 0;

export default function ChatLauncher({
  open,
  onToggle,
  showBadge,
}: ChatLauncherProps) {
  const reduceMotion = useReducedMotion();
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const ripple: Ripple = {
        id: rippleId++,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      setRipples((prev) => [...prev, ripple]);
      const timer = setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 650);
      timers.current.push(timer);

      onToggle();
    },
    [onToggle],
  );

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[80] sm:bottom-6 sm:right-6">
      <motion.div
        className="pointer-events-auto relative"
        animate={reduceMotion || open ? { y: 0 } : { y: [0, -6, 0] }}
        transition={
          reduceMotion || open
            ? undefined
            : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
        }
      >
        {/* Breathing halo */}
        {!reduceMotion && !open && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-2xl bg-[#FE5800]"
            animate={{ opacity: [0.4, 0, 0.4], scale: [1, 1.55, 1] }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1.6,
            }}
          />
        )}

        {/* Static outer glow */}
        <span
          aria-hidden
          className="absolute -inset-2 rounded-3xl bg-[#FE5800]/25 blur-xl"
        />

        <motion.button
          type="button"
          onClick={handleClick}
          aria-label={open ? "Close Unitive AI assistant" : "Open Unitive AI assistant"}
          aria-expanded={open}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", stiffness: 480, damping: 20 }}
          className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-[#FE5800] to-[#C24200] shadow-[0_14px_38px_-8px_rgba(254,88,0,0.7)] backdrop-blur-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FE5800]"
        >
          {/* Glass reflection */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/25 to-transparent"
          />

          {/* Click ripples */}
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              aria-hidden
              className="pointer-events-none absolute rounded-full bg-white/45"
              style={{ left: ripple.x, top: ripple.y }}
              initial={{ width: 0, height: 0, x: 0, y: 0, opacity: 0.55 }}
              animate={{
                width: 140,
                height: 140,
                x: -70,
                y: -70,
                opacity: 0,
              }}
              transition={{ duration: 0.62, ease: "easeOut" }}
            />
          ))}

          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: open ? -80 : 80, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: open ? 80 : -80, scale: 0.6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative text-white"
            >
              {open ? (
                <X size={22} strokeWidth={2.3} />
              ) : (
                <MessageSquare size={21} strokeWidth={2.1} />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Unseen-message dot */}
        <AnimatePresence>
          {showBadge && !open && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 520, damping: 18 }}
              className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-[#FE5800] text-[9px] font-bold text-white shadow-md"
            >
              1
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
