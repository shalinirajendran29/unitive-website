"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import RichText from "./RichText";
import type { Message } from "@/lib/chat/types";

interface MessageBubbleProps {
  message: Message;
  onSuggestion: (text: string) => void;
  /** Suggestion chips only stay actionable on the newest assistant turn. */
  showSuggestions: boolean;
}

export default function MessageBubble({
  message,
  onSuggestion,
  showSuggestions,
}: MessageBubbleProps) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    },
    [],
  );

  const handleCopy = useCallback(async () => {
    // Strip the bold markers so the pasted text reads cleanly.
    const plain = message.content.replace(/\*\*/g, "");
    try {
      await navigator.clipboard.writeText(plain);
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked (insecure context or denied permission) — stay silent.
    }
  }, [message.content]);

  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.7 }}
      className={`group flex flex-col ${isUser ? "items-end" : "items-start"}`}
    >
      <div className={`flex max-w-[88%] gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}>
        {!isUser && (
          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#FE5800] to-[#B93E00] text-[10px] font-bold text-white shadow-lg shadow-[#FE5800]/20">
            U
          </div>
        )}

        <div className="min-w-0">
          <div
            className={
              isUser
                ? "rounded-2xl rounded-tr-md bg-gradient-to-br from-[#FE5800] to-[#D14600] px-4 py-3 text-[13.5px] text-white shadow-lg shadow-[#FE5800]/20"
                : "rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.06] px-4 py-3 text-[13.5px] text-white/85 backdrop-blur-sm"
            }
          >
            <RichText
              content={message.content}
              strongClassName={isUser ? "font-semibold text-white" : "font-semibold text-white"}
              bulletClassName={isUser ? "text-white/70" : "text-[#FE5800]"}
            />
          </div>

          {message.link && (
            <Link
              href={message.link.href}
              className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#FE5800]/40 bg-[#FE5800]/10 px-3.5 py-1.5 text-xs font-medium text-[#FF8A3D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FE5800] hover:bg-[#FE5800]/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE5800]"
            >
              {message.link.label}
              <ArrowUpRight size={13} />
            </Link>
          )}

          {!isUser && (
            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? "Message copied" : "Copy message"}
              className="mt-1.5 inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-[11px] text-white/35 opacity-0 transition-all duration-200 hover:text-white/80 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE5800] group-hover:opacity-100"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? "Copied" : "Copy"}
            </button>
          )}
        </div>
      </div>

      {!isUser && showSuggestions && message.suggestions && message.suggestions.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-2 pl-[38px]">
          {message.suggestions.map((suggestion, i) => (
            <motion.button
              key={suggestion}
              type="button"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.06, duration: 0.3 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSuggestion(suggestion)}
              className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-[11.5px] text-white/70 transition-colors duration-300 hover:border-[#FE5800]/50 hover:bg-[#FE5800]/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE5800]"
            >
              {suggestion}
            </motion.button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
