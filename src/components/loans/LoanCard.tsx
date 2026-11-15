"use client";

import Link from "next/link";
import {
  UserCheck,
  Briefcase,
  Home,
  Car,
  Building2,
  RefreshCw,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { LoanProduct } from "@/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface LoanCardProps {
  loan: LoanProduct;
  onSelectLoan?: (loanTitle: string) => void;
}

const iconMap = {
  UserCheck,
  Briefcase,
  Home,
  Car,
  Building2,
  RefreshCw,
  Layers,
};

export function LoanCard({ loan, onSelectLoan }: LoanCardProps) {
  const IconComponent = iconMap[loan.icon as keyof typeof iconMap] || UserCheck;

  const handleEnquireClick = () => {
    if (onSelectLoan) {
      onSelectLoan(loan.title);
    }
  };

  return (
    <article
      id={loan.slug}
      className={cn(
        "group relative rounded-2xl border p-6 transition-all duration-300 flex flex-col justify-between overflow-hidden",
        loan.featured
          ? "bg-gradient-to-br from-navy-900 via-navy-800 to-[#104b92] text-white border-navy-700 shadow-md"
          : "bg-white border-surface-line hover:border-cyan-brand/60 hover:shadow-card hover:-translate-y-1"
      )}
    >
      {/* Decorative top-right circle */}
      <div
        className={cn(
          "absolute -right-10 -top-10 w-28 h-28 rounded-full pointer-events-none transition-transform duration-300 group-hover:scale-125",
          loan.featured ? "bg-white/5" : "bg-cyan-light/70"
        )}
      />

      <div>
        {/* Top Header with Icon and Featured Badge */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-105",
              loan.featured
                ? "bg-white/10 text-cyan-brand border border-white/10"
                : "bg-blue-light text-blue-brand"
            )}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          {loan.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-brand/20 text-cyan-brand text-[10px] font-extrabold uppercase tracking-wide border border-cyan-brand/30">
              <Sparkles className="w-3 h-3" />
              Popular
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={cn(
            "text-lg font-display font-extrabold mb-2",
            loan.featured ? "text-white" : "text-navy-900"
          )}
        >
          {loan.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-xs sm:text-[13px] leading-relaxed mb-4 min-h-[56px]",
            loan.featured ? "text-slate-200" : "text-ink-muted"
          )}
        >
          {loan.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {loan.tags.map((tag) => (
            <Badge
              key={tag}
              variant={loan.featured ? "cyan" : "slate"}
              className={loan.featured ? "bg-white/10 text-cyan-200 border-white/10 text-[10px]" : "text-[10px]"}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-2 mt-auto">
        <Link
          href={`/loan-products#${loan.slug}`}
          className={cn(
            "text-xs font-extrabold inline-flex items-center gap-1 hover:underline",
            loan.featured ? "text-cyan-brand" : "text-blue-brand"
          )}
        >
          <span>Know More</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <Link
          href="/#contact"
          onClick={handleEnquireClick}
          className={cn(
            "px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs",
            loan.featured
              ? "bg-cyan-brand text-navy-950 hover:bg-cyan-hover"
              : "bg-blue-brand text-white hover:bg-navy-900"
          )}
        >
          Enquire Now
        </Link>
      </div>
    </article>
  );
}
