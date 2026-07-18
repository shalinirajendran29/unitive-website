export type Role = "assistant" | "user";

export interface ChatLink {
  label: string;
  href: string;
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  createdAt: number;
  /** Follow-up prompts rendered as chips beneath an assistant message. */
  suggestions?: string[];
  /** Deep link into the site, surfaced as a CTA beneath the message. */
  link?: ChatLink;
}

/** A resolved answer from the knowledge engine, before it becomes a Message. */
export interface Answer {
  content: string;
  suggestions?: string[];
  link?: ChatLink;
}
