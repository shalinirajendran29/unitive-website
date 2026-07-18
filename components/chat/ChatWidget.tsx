"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import ChatLauncher from "./ChatLauncher";
import ChatWindow from "./ChatWindow";
import { useChat } from "@/lib/chat/useChat";

const NUDGE_DELAY_MS = 6000;
const NUDGE_SEEN_KEY = "unitive.chat.nudge-seen";
const MOBILE_BREAKPOINT = 640;

export default function ChatWidget() {
  const { messages, isTyping, hasConversation, send, clear, downloadTranscript } =
    useChat();

  const [open, setOpen] = useState(false);
  const [showNudge, setShowNudge] = useState(false);
  const [view, setView] = useState<"home" | "chat">("home");
  // Set once the visitor engages, so a pending timer never resurrects the nudge.
  const nudgeCancelled = useRef(false);

  const dismissNudge = useCallback(() => {
    nudgeCancelled.current = true;
    setShowNudge(false);
    try {
      window.sessionStorage.setItem(NUDGE_SEEN_KEY, "1");
    } catch {
      // Session storage unavailable — the nudge simply may reappear next load.
    }
  }, []);

  // Proactive greeting, once per session, and never over an existing conversation.
  useEffect(() => {
    if (hasConversation) return;

    let alreadySeen = false;
    try {
      alreadySeen = window.sessionStorage.getItem(NUDGE_SEEN_KEY) === "1";
    } catch {
      alreadySeen = false;
    }
    if (alreadySeen) return;

    const timer = setTimeout(() => {
      // The visitor may have engaged with the widget while we waited.
      if (!nudgeCancelled.current) setShowNudge(true);
    }, NUDGE_DELAY_MS);

    return () => clearTimeout(timer);
  }, [hasConversation]);

  // Lock background scroll while the full-screen mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  /**
   * On the first open of the session, a conversation restored from storage
   * should land on the transcript rather than the menu. Afterwards we respect
   * wherever the visitor navigated to.
   */
  const viewInitialised = useRef(false);
  const openPanel = useCallback(() => {
    if (!viewInitialised.current) {
      viewInitialised.current = true;
      if (hasConversation) setView("chat");
    }
    setOpen(true);
    dismissNudge();
  }, [hasConversation, dismissNudge]);

  const close = useCallback(() => setOpen(false), []);

  const toggle = useCallback(() => {
    if (open) close();
    else openPanel();
  }, [open, close, openPanel]);

  const handleSend = useCallback(
    (text: string) => {
      dismissNudge();
      setView("chat");
      send(text);
    },
    [dismissNudge, send],
  );

  const handleClear = useCallback(() => {
    clear();
    setView("home");
  }, [clear]);

  const openFromNudge = openPanel;

  return (
    <>
      <AnimatePresence>
        {open && (
          <ChatWindow
            messages={messages}
            isTyping={isTyping}
            hasConversation={hasConversation}
            view={view}
            onSend={handleSend}
            onClose={close}
            onClear={handleClear}
            onDownload={downloadTranscript}
            onBack={() => setView("home")}
            onResume={() => setView("chat")}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNudge && !open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 12, scale: 0.94, filter: "blur(6px)" }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="fixed bottom-[88px] right-5 z-[75] w-[248px] sm:right-6 sm:w-[264px]"
          >
            <div className="relative rounded-2xl border border-white/10 bg-[#0B0B0C]/95 p-3.5 pr-8 shadow-[0_20px_50px_-16px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FE5800]/70 to-transparent"
              />

              <button
                type="button"
                onClick={dismissNudge}
                aria-label="Dismiss"
                className="absolute right-2 top-2 rounded-md p-1 text-white/35 transition-colors hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE5800]"
              >
                <X size={13} />
              </button>

              <button
                type="button"
                onClick={openFromNudge}
                className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE5800]"
              >
                <p className="text-[12.5px] font-semibold text-white">
                  👋 Need help exploring Unitive?
                </p>
                <p className="mt-1 text-[11.5px] leading-snug text-white/50">
                  Ask me about our Engineering, Digital or CAE capabilities.
                </p>
                <span className="mt-2 inline-block text-[11px] font-medium text-[#FF8A3D]">
                  Start a conversation →
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ChatLauncher open={open} onToggle={toggle} showBadge={showNudge} />
    </>
  );
}
