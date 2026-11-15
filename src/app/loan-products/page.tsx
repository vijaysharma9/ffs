import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  UserCheck,
  Briefcase,
  Home,
  Car,
  Building2,
  RefreshCw,
  Layers,
} from "lucide-react";
import { LOAN_PRODUCTS } from "@/data/loans";
import { FAQS } from "@/data/faqs";
import { COMPANY_INFO, generateWhatsAppLink } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Loan Products | Personal, Business, Home, LAP & Overdraft Assistance",
  description:
    "Explore comprehensive loan assistance across Personal Loans, Business Loans, Home Loans, Car Loans, Loan Against Property, Overdraft, and Debt Consolidation.",
};

const iconMap = {
  UserCheck,
  Briefcase,
  Home,
  Car,
  Building2,
  RefreshCw,
  Layers,
};

export default function LoanProductsPage() {
  const whatsappUrl = generateWhatsAppLink(
    "Hello Fast Fincorp Services, I need loan assistance."
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f9ff] via-[#edf7ff] to-[#e5f7fc] py-14 lg:py-20 border-b border-surface-line">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-light text-[#087aa5] text-[11px] font-extrabold uppercase tracking-wider mb-5 border border-cyan-brand/20">
                <span className="w-2 h-2 rounded-full bg-cyan-brand" />
                <span>Explore Our Loan Products</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-navy-900 tracking-tight leading-tight mb-5">
                Find a loan option that fits{" "}
                <span className="text-blue-brand">your needs.</span>
              </h1>

              <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl mb-8">
                Whether you&apos;re planning a personal milestone, expanding your enterprise, or
                purchasing your dream home, Fast Fincorp Services provides guided assistance to
                help you explore suitable offers through multiple lender partners.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Button variant="cyan" size="lg" href="#products">
                  <span>Explore Loan Products</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="outline" size="lg" href={whatsappUrl} isExternal>
                  <MessageCircle className="w-4 h-4 mr-1 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-card border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85"
                  alt="Loan Products and Advisory - Fast Fincorp Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>

              <div className="absolute -top-3 -right-2 bg-white/95 rounded-xl p-3 shadow-floating border border-surface-line flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-light text-cyan-brand flex items-center justify-center font-bold">
                  ↗
                </div>
                <div>
                  <b className="block text-xs text-navy-900">Options Across Loan Needs</b>
                  <small className="text-[10px] text-ink-muted">Explore with guided support</small>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-2 bg-white/95 rounded-xl p-3 shadow-floating border border-surface-line flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <b className="block text-xs text-navy-900">Personalised Enquiry Support</b>
                  <small className="text-[10px] text-ink-muted">Pan India service coverage</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-navy-900 text-white py-4 px-4 border-b border-navy-800">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
          <span>
            <strong className="text-cyan-brand text-sm mr-1">7</strong> Loan Categories
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Pan India</strong> Enquiry Assistance
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">One-to-One</strong> Support
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Clear</strong> Next Steps
          </span>
        </div>
      </div>

      {/* Main Loan Products Detailed Grid */}
      <section className="py-16 sm:py-20 bg-white" id="products">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="Our Loan Products"
            title="Explore Loan Solutions for Every Milestone"
            subtitle="Choose a category to understand eligibility, indicative tenure, and required documentation before submitting your enquiry."
          />

          <div className="space-y-10">
            {LOAN_PRODUCTS.map((loan, index) => {
              const Icon = iconMap[loan.icon as keyof typeof iconMap] || UserCheck;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={loan.id}
                  id={loan.slug}
                  className="rounded-2xl border border-surface-line p-6 sm:p-8 bg-white hover:border-cyan-brand/40 shadow-xs hover:shadow-card transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-blue-light text-blue-brand flex items-center justify-center flex-shrink-0 shadow-xs">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h2 className="text-xl sm:text-2xl font-display font-extrabold text-navy-900">
                            {loan.title}
                          </h2>
                          {loan.featured && (
                            <Badge variant="cyan">Most Requested</Badge>
                          )}
                        </div>
                        <p className="text-sm text-ink-muted leading-relaxed max-w-2xl">
                          {loan.fullDescription}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      <Button
                        variant="blue"
                        size="md"
                        href={`/#contact?loan=${encodeURIComponent(loan.title)}`}
                      >
                        <span>Enquire for {loan.title}</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                    {/* Key Highlights */}
                    <div className="bg-surface-pale rounded-xl p-4">
                      <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-blue-brand" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2 text-xs text-ink-secondary">
                        {loan.keyBenefits.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Eligibility Criteria */}
                    <div className="bg-surface-pale rounded-xl p-4">
                      <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Indicative Eligibility
                      </h4>
                      <ul className="space-y-2 text-xs text-ink-secondary">
                        {loan.eligibility.map((e) => (
                          <li key={e} className="flex items-start gap-2">
                            <span className="text-blue-brand font-bold">•</span>
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Documents Needed */}
                    <div className="bg-surface-pale rounded-xl p-4">
                      <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5 text-cyan-brand" />
                        Typical Documents (With Lender)
                      </h4>
                      <ul className="space-y-2 text-xs text-ink-secondary">
                        {loan.documentsNeeded.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <span className="text-cyan-brand font-bold">›</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Quantum & Tenure bar */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-ink-muted">
                    <div className="flex items-center gap-4">
                      <span>
                        Loan Quantum:{" "}
                        <strong className="text-navy-900">
                          {loan.minAmount} to {loan.maxAmount}
                        </strong>
                      </span>
                      <span>•</span>
                      <span>
                        Tenure: <strong className="text-navy-900">{loan.indicativeTenure}</strong>
                      </span>
                    </div>

                    <a
                      href={generateWhatsAppLink(
                        `Hello Fast Fincorp Services, I would like to enquire about ${loan.title}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Instant WhatsApp Enquiry →</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section: Why Fast Fincorp Services */}
      <section className="py-16 sm:py-20 bg-surface-pale border-y border-surface-line">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-card border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85"
                  alt="Customer Guidance and Support"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/30 to-transparent" />
              </div>

              <div className="absolute -bottom-5 -right-3 bg-white rounded-xl p-4 shadow-floating border border-surface-line max-w-[210px]">
                <b className="block text-xs text-navy-900">Guidance at every step</b>
                <small className="text-[11px] text-ink-muted">
                  From initial enquiry to lender application
                </small>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-brand mb-2.5 inline-block">
                Why Fast Fincorp Services
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900 mb-4">
                Make your loan search simpler.
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                Understanding loan choices can take time. We help you share your requirement,
                understand possible next steps, and explore relevant options through available
                lending partners across India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Multiple loan categories</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>One-to-one enquiry support</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Clear application next steps</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Pan India enquiry coverage</span>
                </div>
              </div>

              <Button variant="blue" size="md" href="/#contact">
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 sm:py-20 bg-white" id="process">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="How It Works"
            title="Four Simple Steps to Get Started"
            subtitle="Begin with a basic enquiry. The lender's eligibility checks, terms, and approval process will apply."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Choose your loan</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Select the loan category that best matches your immediate requirement.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Share basic details</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Tell us about your requirement and preferred contact details.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Discuss available options</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Our team can help you understand relevant options, where available.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Apply with the lender</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                If you wish to proceed, complete the lender&apos;s formal application process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-[#104b91] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
              Not sure which loan is right for you?
            </h2>
            <p className="text-sm text-cyan-100 max-w-xl">
              Tell us what you need. Our loan guidance specialists will help you identify the next
              step.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="cyan"
              size="md"
              href={generateWhatsAppLink(
                "Hello Fast Fincorp Services, please help me choose a loan."
              )}
              isExternal
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              <span>WhatsApp Us</span>
            </Button>
            <Button variant="outline" size="md" href={`tel:${COMPANY_INFO.phoneRaw}`}>
              <Phone className="w-4 h-4 mr-1 text-cyan-brand" />
              <span>Call {COMPANY_INFO.phone}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 bg-[#f8fbfe]" id="faq">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="FAQs"
            title="Frequently Asked Questions"
            subtitle="Helpful information about our loan product enquiry process and requirements."
          />
          <FaqAccordion items={FAQS} />
        </div>
      </section>
    </>
  );
}
