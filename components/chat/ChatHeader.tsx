"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, Download, Sparkles, Trash2, X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onClear: () => void;
  onDownload: () => void;
  hasConversation: boolean;
  /** Returns to the welcome screen. Omitted when already there. */
  onBack?: () => void;
}

export default function ChatHeader({
  onClose,
  onClear,
  onDownload,
  hasConversation,
  onBack,
}: ChatHeaderProps) {
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#FE5800] via-[#A63700] to-[#0B0B0C] px-5 pb-4 pt-4">
      {/* Soft radial bloom for depth */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-[#FF8A3D]/35 blur-3xl"
      />
      {/* Glass reflection along the top edge */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <AnimatePresence initial={false}>
            {onBack && (
              <motion.button
                type="button"
                onClick={onBack}
                aria-label="Back to menu"
                title="Back to menu"
                initial={{ opacity: 0, width: 0, x: -8 }}
                animate={{ opacity: 1, width: 28, x: 0 }}
                exit={{ opacity: 0, width: 0, x: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                whileTap={{ scale: 0.9 }}
                className="-ml-1 flex h-8 shrink-0 items-center justify-center overflow-hidden rounded-lg text-white/80 transition-colors duration-200 hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronLeft size={18} strokeWidth={2.4} />
              </motion.button>
            )}
          </AnimatePresence>

          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/15 backdrop-blur-md">
            <Sparkles size={17} className="text-white" strokeWidth={2.2} />
            {!reduceMotion && (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-xl border border-white/50"
                animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.28, 1] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </div>

          <div className="min-w-0">
            <h2 className="flex items-center gap-1.5 text-[15px] font-semibold tracking-tight text-white">
              <span aria-hidden className="text-[8px] leading-none text-white/90">
                ●
              </span>
              Unitive AI
            </h2>

            <p className="mt-0.5 truncate text-[11px] text-white/65">
              Engineering Solutions Assistant
            </p>

            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                {!reduceMotion && (
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-emerald-300"
                    animate={{ opacity: [0.8, 0, 0.8], scale: [1, 2.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                Online
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-0.5">
          {hasConversation && (
            <>
              <HeaderButton label="Download transcript" onClick={onDownload}>
                <Download size={14} />
              </HeaderButton>
              <HeaderButton label="Clear conversation" onClick={onClear}>
                <Trash2 size={14} />
              </HeaderButton>
            </>
          )}
          <HeaderButton label="Close chat" onClick={onClose}>
            <X size={16} />
          </HeaderButton>
        </div>
      </div>
    </header>
  );
}

function HeaderButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors duration-200 hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {children}
    </motion.button>
  );
}
