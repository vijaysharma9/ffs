"use client";

import { useState, useMemo } from "react";
import { Search, HelpCircle, Layers, CheckCircle2, ShieldCheck } from "lucide-react";
import { FaqItem } from "@/types";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { cn } from "@/lib/utils";

interface FaqBrowserProps {
  initialFaqs: FaqItem[];
}

export function FaqBrowser({ initialFaqs }: FaqBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "about", label: "About Fast Fincorp" },
    { id: "loans", label: "Loan Categories & Terms" },
    { id: "eligibility", label: "Eligibility & Credit Score" },
    { id: "general", label: "Enquiry & Process" },
  ];

  const filteredFaqs = useMemo(() => {
    return initialFaqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialFaqs, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Category Filter Bar */}
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. documents, interest rate, timeline)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-xl border border-surface-line bg-white text-sm text-ink outline-hidden focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/20 transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded-sm"
            >
              Clear
            </button>
          )}
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer",
                selectedCategory === c.id
                  ? "bg-blue-brand text-white shadow-xs"
                  : "bg-surface-pale text-slate-600 hover:bg-slate-200"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* FAQs List */}
      {filteredFaqs.length > 0 ? (
        <FaqAccordion items={filteredFaqs} defaultOpenIndex={0} />
      ) : (
        <div className="text-center py-12 bg-surface-pale rounded-2xl max-w-lg mx-auto">
          <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
          <p className="text-sm font-bold text-navy-900">No matching questions found</p>
          <p className="text-xs text-ink-muted mt-1 mb-4">
            Try a different search term or connect with our team directly.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-xs font-bold text-blue-brand hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
