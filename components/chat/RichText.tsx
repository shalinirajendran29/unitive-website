"use client";

import { Fragment, type ReactNode } from "react";

/**
 * Renders the small formatting subset used by knowledge-base answers:
 * `**bold**`, `• ` bullets and blank-line paragraph breaks.
 *
 * Deliberately builds React nodes rather than setting innerHTML, so answer
 * content can never inject markup.
 */

function renderInline(text: string, strongClassName: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i} className={strongClassName}>
          {part.slice(2, -2)}
        </strong>
      ) : (
        <Fragment key={i}>{part}</Fragment>
      ),
    );
}

interface RichTextProps {
  content: string;
  /** Styling for `**bold**` runs — differs between assistant and user bubbles. */
  strongClassName?: string;
  bulletClassName?: string;
}

export default function RichText({
  content,
  strongClassName = "font-semibold text-white",
  bulletClassName = "text-[#FE5800]",
}: RichTextProps) {
  const lines = content.split("\n");
  const blocks: ReactNode[] = [];

  let bullets: string[] = [];

  const flushBullets = () => {
    if (bullets.length === 0) return;
    const items = bullets;
    bullets = [];
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5">
            <span aria-hidden className={`mt-px select-none ${bulletClassName}`}>
              •
            </span>
            <span className="flex-1">{renderInline(item, strongClassName)}</span>
          </li>
        ))}
      </ul>,
    );
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("• ")) {
      bullets.push(trimmed.slice(2));
      continue;
    }

    flushBullets();

    if (trimmed === "") continue;

    blocks.push(
      <p key={`p-${blocks.length}`}>{renderInline(trimmed, strongClassName)}</p>,
    );
  }

  flushBullets();

  return <div className="space-y-2.5 leading-relaxed">{blocks}</div>;
}
