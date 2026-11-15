import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { getBlogs } from "@/lib/blogs";
import { BlogList } from "@/components/blog/BlogList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog & Financial Insights | Loan Guidance - Fast Fincorp Services",
  description:
    "Expert articles on personal loans, business financing, home loan tax breaks, CIBIL score improvement, overdraft limits, and debt consolidation in India.",
};

export default function BlogPage() {
  const allBlogs = getBlogs();

  return (
    <>
      {/* Blog Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f9ff] via-[#edf7ff] to-[#e5f7fc] py-14 lg:py-18 border-b border-surface-line">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-light text-[#087aa5] text-[11px] font-extrabold uppercase tracking-wider mb-4 border border-cyan-brand/20">
            <span className="w-2 h-2 rounded-full bg-cyan-brand animate-pulse" />
            <span>Fast Fincorp Insights</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-navy-900 tracking-tight leading-tight mb-4 max-w-3xl mx-auto">
            Practical loan guidance &amp;{" "}
            <span className="text-blue-brand">financial tips.</span>
          </h1>

          <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto mb-2">
            Demystifying interest rates, eligibility criteria, credit bureau scores, and tax benefits
            so you can make confident borrowing decisions.
          </p>
        </div>
      </section>

      {/* Main Blog Catalog with Search & Filter */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <BlogList initialBlogs={allBlogs} />
        </div>
      </section>

      {/* Bottom CTA for Loan Enquiry */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-[#104b91] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
              Have questions about your loan requirement?
            </h2>
            <p className="text-sm text-cyan-100 max-w-xl">
              Our specialists are ready to discuss your financial goals and compare suitable lender
              options with you.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-cyan-brand text-navy-950 font-extrabold text-sm hover:bg-cyan-hover transition-transform hover:-translate-y-0.5 shadow-sm"
          >
            <span>Start Loan Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
