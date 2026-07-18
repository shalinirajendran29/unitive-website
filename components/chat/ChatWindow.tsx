"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import ChatHeader from "./ChatHeader";
import Composer from "./Composer";
import MessageBubble from "./MessageBubble";
import ParticleField from "./ParticleField";
import TypingIndicator from "./TypingIndicator";
import WelcomeScreen from "./WelcomeScreen";
import type { Message } from "@/lib/chat/types";

interface ChatWindowProps {
  messages: Message[];
  isTyping: boolean;
  hasConversation: boolean;
  /** "home" shows the welcome screen; "chat" shows the transcript. */
  view: "home" | "chat";
  onSend: (text: string) => void;
  onClose: () => void;
  onClear: () => void;
  onDownload: () => void;
  onBack: () => void;
  onResume: () => void;
}

export default function ChatWindow({
  messages,
  isTyping,
  hasConversation,
  view,
  onSend,
  onClose,
  onClear,
  onDownload,
  onBack,
  onResume,
}: ChatWindowProps) {
  const reduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  // Keep the newest turn in view as the conversation grows, and when resuming.
  useEffect(() => {
    if (view !== "chat") return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [messages, isTyping, reduceMotion, view]);

  // Escape closes the panel from anywhere inside it.
  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  // Focus the composer once the opening animation has settled.
  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 350);
    return () => clearTimeout(timer);
  }, []);

  const showChat = view === "chat" && hasConversation;

  const lastAssistantId = [...messages]
    .reverse()
    .find((m) => m.role === "assistant")?.id;

  const lastMessage = messages[messages.length - 1];
  const resumePreview = lastMessage
    ? lastMessage.content.replace(/\*\*/g, "").replace(/\s+/g, " ").trim()
    : "";

  return (
    <motion.div
      role="dialog"
      aria-label="Unitive AI assistant"
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.9, y: 28, filter: "blur(12px)" }
      }
      animate={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
      }
      exit={
        reduceMotion
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.94, y: 20, filter: "blur(8px)" }
      }
      transition={{ type: "spring", stiffness: 260, damping: 26, mass: 0.9 }}
      style={{ transformOrigin: "bottom right" }}
      className="pointer-events-auto fixed inset-0 z-[70] flex flex-col overflow-hidden border-white/10 bg-[#0B0B0C]/95 shadow-[0_32px_90px_-20px_rgba(0,0,0,0.85)] backdrop-blur-2xl sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[min(640px,calc(100vh-8rem))] sm:w-[398px] sm:rounded-[24px] sm:border"
    >
      {/* Ambient orange bloom */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-56 w-56 rounded-full bg-[#FE5800]/16 blur-[80px]"
      />

      <ChatHeader
        onClose={onClose}
        onClear={onClear}
        onDownload={onDownload}
        hasConversation={hasConversation}
        onBack={showChat ? onBack : undefined}
      />

      <div
        ref={scrollRef}
        className="unitive-chat-scroll relative flex-1 overflow-y-auto overscroll-contain px-4 py-4"
      >
        <ParticleField />

        <div className="relative space-y-4">
          {!showChat && (
            <WelcomeScreen
              onSelect={onSend}
              resume={
                hasConversation
                  ? {
                      preview: resumePreview,
                      count: messages.length,
                      onResume,
                    }
                  : undefined
              }
            />
          )}

          {showChat && (
            <div aria-live="polite" aria-atomic="false" className="space-y-4">
              <AnimatePresence initial={false} mode="popLayout">
                {messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    onSuggestion={onSend}
                    showSuggestions={message.id === lastAssistantId && !isTyping}
                  />
                ))}
              </AnimatePresence>

              <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>
            </div>
          )}
        </div>
      </div>

      <Composer ref={inputRef} onSend={onSend} />
    </motion.div>
  );
}
