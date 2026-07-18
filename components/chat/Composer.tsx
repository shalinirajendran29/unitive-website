"use client";

import {
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

const MAX_TEXTAREA_HEIGHT = 120;

interface ComposerProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

const Composer = forwardRef<HTMLTextAreaElement, ComposerProps>(
  function Composer({ onSend, disabled = false }, forwardedRef) {
    const [value, setValue] = useState("");
    const innerRef = useRef<HTMLTextAreaElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLTextAreaElement | null) => {
        innerRef.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      },
      [forwardedRef],
    );

    // Grow with content up to a cap, then scroll internally.
    useLayoutEffect(() => {
      const el = innerRef.current;
      if (!el) return;
      el.style.height = "auto";
      el.style.height = `${Math.min(el.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`;
    }, [value]);

    const canSend = value.trim().length > 0 && !disabled;

    const submit = useCallback(() => {
      const text = value.trim();
      if (!text || disabled) return;
      onSend(text);
      setValue("");
    }, [value, disabled, onSend]);

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      // Enter sends; Shift+Enter inserts a newline.
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        submit();
      }
    };

    return (
      <div className="shrink-0 border-t border-white/10 bg-[#0B0B0C]/80 px-3 pb-3 pt-3 backdrop-blur-xl">
        <div className="flex items-end gap-2 rounded-2xl border border-white/12 bg-white/[0.05] p-1.5 transition-colors duration-300 focus-within:border-[#FE5800]/60 focus-within:bg-white/[0.07]">
          <label htmlFor="unitive-chat-input" className="sr-only">
            Message Unitive AI
          </label>

          <textarea
            id="unitive-chat-input"
            ref={setRefs}
            rows={1}
            value={value}
            disabled={disabled}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about our services…"
            className="max-h-[120px] flex-1 resize-none bg-transparent px-2.5 py-2 text-[13px] text-white placeholder:text-white/30 focus:outline-none disabled:opacity-50"
          />

          <motion.button
            type="button"
            onClick={submit}
            disabled={!canSend}
            aria-label="Send message"
            whileHover={canSend ? { scale: 1.06 } : undefined}
            whileTap={canSend ? { scale: 0.9 } : undefined}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE5800] ${
              canSend
                ? "bg-gradient-to-br from-[#FE5800] to-[#D14600] text-white shadow-lg shadow-[#FE5800]/30"
                : "cursor-not-allowed bg-white/[0.07] text-white/25"
            }`}
          >
            <ArrowUp size={17} strokeWidth={2.4} />
          </motion.button>
        </div>

        <p className="mt-2 text-center text-[9.5px] tracking-wide text-white/25">
          Unitive AI · Answers grounded in our engineering capabilities
        </p>
      </div>
    );
  },
);

export default Composer;
