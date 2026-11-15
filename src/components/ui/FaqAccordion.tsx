"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FaqItem } from "@/types";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className="border border-surface-line rounded-xl bg-white overflow-hidden transition-all duration-200 shadow-sm hover:border-slate-300"
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-navy-900 transition-colors"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  "flex-shrink-0 w-7 h-7 rounded-full bg-blue-50 text-blue-brand flex items-center justify-center transition-transform duration-200",
                  isOpen && "rotate-45 bg-navy-50 text-navy-900"
                )}
              >
                <Plus className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-slate-50 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
