"use client";

import { useState } from "react";
import { HelpCircle, Plus, ChevronDown, CheckCircle2 } from "lucide-react";
import { FaqItem } from "@/types";
import { cn } from "@/lib/utils";

interface BlogFaqSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
}

export function BlogFaqSection({
  title = "Frequently Asked Questions",
  subtitle = "Quick answers to help you navigate this loan topic with confidence.",
  faqs,
}: BlogFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-surface-line shadow-xs">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-blue-light text-blue-brand flex items-center justify-center flex-shrink-0">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-brand block">
            Got Questions?
          </span>
          <h3 className="text-xl font-display font-extrabold text-navy-900 leading-tight">
            {title}
          </h3>
        </div>
      </div>

      <p className="text-xs text-ink-muted mb-6 max-w-xl">{subtitle}</p>

      {/* Accordion list */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.id || idx}
              className={cn(
                "rounded-xl border transition-all duration-200 overflow-hidden",
                isOpen
                  ? "bg-white border-blue-brand/40 shadow-xs"
                  : "bg-white/80 border-slate-200 hover:border-slate-300"
              )}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-navy-900 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="leading-snug">{faq.question}</span>
                <span
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200",
                    isOpen
                      ? "bg-blue-brand text-white rotate-45"
                      : "bg-slate-100 text-slate-500"
                  )}
                >
                  <Plus className="w-3.5 h-3.5" />
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100/80">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
