import type { Message } from "./types";

/**
 * Tiny external store for the conversation, read through `useSyncExternalStore`.
 *
 * Keeping messages outside React means localStorage restoration happens at
 * module load rather than in an effect — no cascading render on mount, and the
 * server snapshot stays empty so hydration matches.
 */

const STORAGE_KEY = "unitive.chat.v1";
const MAX_PERSISTED = 60;

/** Stable identity: returning a new array each call would loop forever. */
const EMPTY: Message[] = [];

let messages: Message[] = EMPTY;
const listeners = new Set<() => void>();

function isMessage(value: unknown): value is Message {
  if (!value || typeof value !== "object") return false;
  const m = value as Message;
  return (
    typeof m.id === "string" &&
    typeof m.content === "string" &&
    (m.role === "user" || m.role === "assistant")
  );
}

function readStored(): Message[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;
    // Tolerate schema drift from older builds rather than crashing the widget.
    const valid = parsed.filter(isMessage);
    return valid.length > 0 ? valid : EMPTY;
  } catch {
    return EMPTY;
  }
}

function persist(next: Message[]): void {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(next.slice(-MAX_PERSISTED)),
    );
  } catch {
    // Private mode or quota exceeded — persistence is a nicety, not a requirement.
  }
}

// Restore synchronously on the client, before React first reads a snapshot.
if (typeof window !== "undefined") {
  messages = readStored();
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getSnapshot(): Message[] {
  return messages;
}

export function getServerSnapshot(): Message[] {
  return EMPTY;
}

export function setMessages(
  updater: (current: Message[]) => Message[],
): void {
  const next = updater(messages);
  if (next === messages) return;
  messages = next;
  persist(next);
  listeners.forEach((listener) => listener());
}
