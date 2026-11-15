import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LOAN_NAV_LINKS } from "@/data/navigation";

export function QuickStrip() {
  return (
    <div className="bg-navy-900 text-white py-4 px-4 border-b border-navy-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-brand"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-200">
            Explore loan solutions for your needs
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {LOAN_NAV_LINKS.slice(0, 5).map((loan) => (
            <Link
              key={loan.label}
              href={loan.href}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/20 text-[11px] font-semibold text-slate-200 hover:text-white hover:border-cyan-brand hover:bg-white/5 transition-all"
            >
              <span>{loan.label}</span>
              <ArrowUpRight className="w-3 h-3 text-cyan-brand" />
            </Link>
          ))}
          <Link
            href="/loan-products"
            className="text-[11px] font-bold text-cyan-brand hover:underline ml-1"
          >
            View All →
          </Link>
        </div>
      </div>
    </div>
  );
}
