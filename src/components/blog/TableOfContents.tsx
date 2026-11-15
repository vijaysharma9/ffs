"use client";

import { useState, useEffect } from "react";
import { List, ChevronDown, ChevronRight, Hash } from "lucide-react";
import { TableOfContentItem } from "@/lib/blogFormatter";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  items: TableOfContentItem[];
  className?: string;
  isInlineMobile?: boolean;
}

export function TableOfContents({ items, className, isInlineMobile = false }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(!isInlineMobile);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0% -60% 0%",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        "rounded-2xl border border-surface-line bg-white shadow-xs overflow-hidden transition-all",
        className
      )}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left bg-slate-50/70 hover:bg-slate-100/70 transition-colors border-b border-surface-line cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-light text-blue-brand flex items-center justify-center flex-shrink-0">
            <List className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display font-extrabold text-sm text-navy-900 leading-snug">
              Table of Contents
            </h4>
            <span className="text-[11px] text-ink-muted">
              {items.length} key sections in this guide
            </span>
          </div>
        </div>

        <span className="text-slate-400">
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </span>
      </button>

      {/* Items list */}
      {isOpen && (
        <div className="p-4 sm:p-5 space-y-1 max-h-[420px] overflow-y-auto text-xs">
          {items.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={cn(
                  "group flex items-start gap-2 py-1.5 px-2.5 rounded-lg transition-all leading-relaxed",
                  item.level === 3 ? "ml-4 text-[11px]" : "text-xs font-semibold",
                  isActive
                    ? "bg-blue-50 text-blue-brand font-bold border-l-2 border-blue-brand pl-2"
                    : "text-slate-600 hover:text-navy-900 hover:bg-slate-50"
                )}
              >
                <span
                  className={cn(
                    "text-[10px] mt-0.5 flex-shrink-0",
                    isActive ? "text-blue-brand font-bold" : "text-slate-400"
                  )}
                >
                  {item.level === 3 ? "›" : `${index + 1}.`}
                </span>
                <span className="line-clamp-2">{item.text}</span>
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
