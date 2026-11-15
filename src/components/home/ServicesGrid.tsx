import Link from "next/link";
import { HelpCircle, ArrowRight, PhoneCall } from "lucide-react";
import { LOAN_PRODUCTS } from "@/data/loans";
import { LoanCard } from "@/components/loans/LoanCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          kicker="Our Loan Services"
          title="Explore Loan Options That Fit Your Goals"
          subtitle="Tell us what you are looking for. Our team can help you understand available options and the next steps for your enquiry."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LOAN_PRODUCTS.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}

          {/* 8th interactive card: Not sure what you need */}
          <article className="rounded-2xl border border-dashed border-blue-300 bg-surface-pale p-6 flex flex-col justify-between text-left hover:border-blue-brand transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-brand flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-extrabold text-navy-900 mb-2">
                Not sure what you need?
              </h3>
              <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed mb-4">
                Share your financial requirement and let our advisory team guide you to the most
                suitable loan category.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 mt-auto">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-brand hover:text-navy-900 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Talk to our team</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </article>
        </div>

        {/* Bottom banner link */}
        <div className="mt-12 text-center">
          <Link
            href="/loan-products"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-brand hover:text-navy-900 bg-blue-50 px-5 py-2.5 rounded-full hover:bg-blue-100 transition-colors"
          >
            <span>Compare all 7 loan categories, requirements and tenure options</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
