"use client";

import { motion } from "motion/react";
import {
  Bot,
  Briefcase,
  ChevronRight,
  Cog,
  FileText,
  History,
  Phone,
  Rocket,
  type LucideIcon,
} from "lucide-react";

interface QuickAction {
  icon: LucideIcon;
  title: string;
  description: string;
  /** The question sent to the assistant when the card is chosen. */
  prompt: string;
}

const QUICK_ACTIONS: QuickAction[] = [
  {
    icon: Rocket,
    title: "Explore Services",
    description: "Digital, Engineering & CAE",
    prompt: "What services do you offer?",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "ML, vision & automation",
    prompt: "Tell me about AI solutions",
  },
  {
    icon: Cog,
    title: "Engineering",
    description: "CAD, CAE & product design",
    prompt: "Tell me about engineering services",
  },
  {
    icon: FileText,
    title: "Company Profile",
    description: "Who we are since 2017",
    prompt: "Tell me about Unitive",
  },
  {
    icon: Briefcase,
    title: "Careers",
    description: "Roles & internships",
    prompt: "What careers are available?",
  },
  {
    icon: Phone,
    title: "Talk to an Expert",
    description: "Reach our team directly",
    prompt: "How can I contact you?",
  },
];

const CAPABILITIES = [
  "Engineering Services",
  "Digital Transformation",
  "AI Solutions",
  "CAD / CAE",
  "Product Development",
  "Careers & Internships",
];

interface WelcomeScreenProps {
  onSelect: (prompt: string) => void;
  /** Present when an earlier conversation is still available to return to. */
  resume?: {
    preview: string;
    count: number;
    onResume: () => void;
  };
}

export default function WelcomeScreen({ onSelect, resume }: WelcomeScreenProps) {
  return (
    <div className="px-1 pb-2">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="text-[19px] font-semibold tracking-tight text-white">
          <span className="mr-1.5">👋</span> Welcome to Unitive
        </h3>

        <p className="mt-2 text-[13px] leading-relaxed text-white/55">
          I&apos;m your AI Engineering Assistant. I can help you with:
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {CAPABILITIES.map((capability, i) => (
            <motion.span
              key={capability}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.045, duration: 0.3 }}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10.5px] font-medium text-white/50"
            >
              {capability}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {resume && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, type: "spring", stiffness: 320, damping: 28 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.985 }}
          onClick={resume.onResume}
          className="group mt-4 flex w-full items-center gap-3 rounded-2xl border border-[#FE5800]/30 bg-[#FE5800]/[0.07] p-3 text-left transition-colors duration-300 hover:border-[#FE5800]/60 hover:bg-[#FE5800]/[0.12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE5800]"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#FE5800]/30 bg-[#FE5800]/15 text-[#FF8A3D]">
            <History size={15} strokeWidth={2} />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-[12px] font-semibold text-white/90">
              Continue where you left off
            </span>
            <span className="mt-0.5 block truncate text-[10.5px] text-white/45">
              {resume.preview}
            </span>
          </span>

          <span className="flex shrink-0 items-center gap-1 text-[10px] font-medium text-white/35">
            {resume.count}
            <ChevronRight
              size={14}
              className="text-[#FF8A3D] transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </motion.button>
      )}

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {QUICK_ACTIONS.map((action, i) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.title}
              type="button"
              initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.2 + i * 0.06,
                type: "spring",
                stiffness: 320,
                damping: 28,
              }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.975 }}
              onClick={() => onSelect(action.prompt)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-3.5 text-left transition-colors duration-300 hover:border-[#FE5800]/45 hover:bg-white/[0.07] hover:shadow-[0_12px_30px_-12px_rgba(254,88,0,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FE5800]"
            >
              {/* Glass sheen that sweeps across on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.09] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />

              <span className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-[#FE5800]/25 bg-[#FE5800]/10 text-[#FF8A3D] transition-all duration-300 group-hover:border-[#FE5800]/60 group-hover:bg-[#FE5800] group-hover:text-white">
                <Icon size={15} strokeWidth={2} />
              </span>

              <span className="relative mt-2.5 block text-[12.5px] font-semibold text-white/90">
                {action.title}
              </span>

              <span className="relative mt-0.5 block text-[10.5px] leading-snug text-white/40">
                {action.description}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
