"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { resolveAnswer } from "./knowledge";
import {
  getServerSnapshot,
  getSnapshot,
  setMessages,
  subscribe,
} from "./store";
import type { Message } from "./types";

/** Typing delay scales with answer length so longer replies feel considered. */
const TYPING_MIN_MS = 550;
const TYPING_MAX_MS = 1600;
const TYPING_MS_PER_CHAR = 5.5;

let idCounter = 0;
const nextId = () => `m${Date.now().toString(36)}-${idCounter++}`;

const createMessage = (
  role: Message["role"],
  content: string,
  extra?: Pick<Message, "suggestions" | "link">,
): Message => ({
  id: nextId(),
  role,
  content,
  createdAt: Date.now(),
  ...extra,
});

export function useChat() {
  const messages = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [isTyping, setIsTyping] = useState(false);
  const replyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (replyTimer.current) clearTimeout(replyTimer.current);
    },
    [],
  );

  const send = useCallback((raw: string) => {
    const text = raw.trim();
    if (!text) return;

    if (replyTimer.current) clearTimeout(replyTimer.current);

    setMessages((prev) => [...prev, createMessage("user", text)]);
    setIsTyping(true);

    const answer = resolveAnswer(text);
    const delay = Math.min(
      TYPING_MAX_MS,
      Math.max(TYPING_MIN_MS, answer.content.length * TYPING_MS_PER_CHAR),
    );

    replyTimer.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        createMessage("assistant", answer.content, {
          suggestions: answer.suggestions,
          link: answer.link,
        }),
      ]);
      setIsTyping(false);
      replyTimer.current = null;
    }, delay);
  }, []);

  const clear = useCallback(() => {
    if (replyTimer.current) {
      clearTimeout(replyTimer.current);
      replyTimer.current = null;
    }
    setIsTyping(false);
    setMessages(() => []);
  }, []);

  /** Downloads the conversation as a plain-text transcript. */
  const downloadTranscript = useCallback(() => {
    if (messages.length === 0) return;

    const stamp = new Date();
    const body = messages
      .map((m) => {
        const who = m.role === "user" ? "You" : "Unitive AI";
        const time = new Date(m.createdAt).toLocaleTimeString();
        return `[${time}] ${who}:\n${m.content}\n`;
      })
      .join("\n");

    const header = `Unitive AI — Conversation Transcript\n${stamp.toLocaleString()}\n${"=".repeat(48)}\n\n`;
    const blob = new Blob([header + body], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `unitive-chat-${stamp.toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }, [messages]);

  return {
    messages,
    isTyping,
    hasConversation: messages.length > 0,
    send,
    clear,
    downloadTranscript,
  };
}
