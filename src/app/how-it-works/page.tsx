import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  FileCheck2,
  Check,
  Compass,
} from "lucide-react";
import { COMPANY_INFO, generateWhatsAppLink } from "@/data/company";
import { LOAN_PRODUCTS } from "@/data/loans";
import { FAQS } from "@/data/faqs";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "How It Works | Loan Enquiry Process - Fast Fincorp Services",
  description:
    "Learn how our 4-step loan assistance journey works: from submitting your initial enquiry to reviewing options and proceeding with regulated lenders.",
};

export default function HowItWorksPage() {
  const whatsappUrl = generateWhatsAppLink(
    "Hello Fast Fincorp Services, I would like help with a loan enquiry."
  );

  const processSteps = [
    {
      step: "01",
      title: "Choose your loan type",
      description:
        "Explore the loan category that matches your exact need—whether it's personal expenses, business working capital, a new home, or car purchase.",
    },
    {
      step: "02",
      title: "Submit a basic enquiry",
      description:
        "Share your name, mobile number, loan requirement, approximate quantum, and city through our secure online enquiry form or WhatsApp.",
    },
    {
      step: "03",
      title: "Discuss possible options",
      description:
        "Our loan specialists contact you to understand your financial parameters and discuss suitable partner bank and NBFC alternatives.",
    },
    {
      step: "04",
      title: "Proceed with the lender",
      description:
        "If you choose to proceed, the lender guides you through its formal documentation, appraisal, verification checks, and final sanction.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f9ff] via-[#edf7ff] to-[#e5f7fc] py-14 lg:py-20 border-b border-surface-line">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-light text-[#087aa5] text-[11px] font-extrabold uppercase tracking-wider mb-5 border border-cyan-brand/20">
                <span className="w-2 h-2 rounded-full bg-cyan-brand animate-pulse" />
                <span>A Simple, Guided Journey</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-navy-900 tracking-tight leading-tight mb-5">
                Getting started is <span className="text-blue-brand">simple.</span>
              </h1>

              <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl mb-8">
                From sharing your requirement to understanding possible loan options, Fast Fincorp
                Services helps you navigate the enquiry journey with clear communication and
                step-by-step assistance.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Button variant="cyan" size="lg" href="#process-steps">
                  <span>See How It Works</span>
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
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85"
                  alt="How Fast Fincorp Services Works"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>

              <div className="absolute -top-3 -right-2 bg-white/95 rounded-xl p-3 shadow-floating border border-surface-line flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-light text-cyan-brand flex items-center justify-center font-bold">
                  01
                </div>
                <div>
                  <b className="block text-xs text-navy-900">Start With An Enquiry</b>
                  <small className="text-[10px] text-ink-muted">Tell us what you need</small>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-2 bg-white/95 rounded-xl p-3 shadow-floating border border-surface-line flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <b className="block text-xs text-navy-900">Understand Your Next Step</b>
                  <small className="text-[10px] text-ink-muted">Get assistance along the way</small>
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
            <strong className="text-cyan-brand mr-1">Simple</strong> Enquiry Process
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Personalised</strong> Assistance
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Multiple</strong> Loan Categories
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Pan India</strong> Enquiry Coverage
          </span>
        </div>
      </div>

      {/* 4 Steps Detailed */}
      <section className="py-16 sm:py-20 bg-white" id="process-steps">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="The Process"
            title="Your Loan Enquiry in Four Steps"
            subtitle="Our process begins with understanding your requirement. Any formal loan assessment and sanction is completed by the respective lender."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-surface-line bg-surface-pale/40 p-6 text-center hover:bg-white hover:shadow-card transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-display font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-base font-display font-bold text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 1 & 2 Deep Dive */}
      <section className="py-16 sm:py-20 bg-surface-pale border-y border-surface-line">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-card border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
                  alt="Initial loan enquiry parameters"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/30 to-transparent" />
              </div>

              <div className="absolute -bottom-5 -right-3 bg-white rounded-xl p-4 shadow-floating border border-surface-line max-w-[210px]">
                <b className="block text-xs text-navy-900">Start with the basics</b>
                <small className="text-[11px] text-ink-muted">
                  No sensitive documents needed in the initial enquiry form
                </small>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-brand mb-2.5 inline-block">
                Step 1 &amp; 2 · Your Enquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900 mb-4">
                Share a few details about what you need.
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                To help us understand your enquiry, you can provide basic contact information and
                select the loan product you are interested in. Please do not submit PAN, Aadhaar,
                bank statements or other sensitive documents through the initial public enquiry
                form.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Full name and mobile number</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Loan type and required quantum</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Employment type (Salaried / Business)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>City or location across India</span>
                </div>
              </div>

              <Button variant="blue" size="md" href="/#contact">
                <span>Start Your Enquiry →</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Requirements Loan Cards */}
      <section className="py-16 sm:py-20 bg-white" id="loan-options">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="Explore Your Requirement"
            title="Which Loan Are You Looking For?"
            subtitle="Choose from the loan categories we assist with. Product availability depends on lender policies and your eligibility."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOAN_PRODUCTS.slice(0, 6).map((loan) => (
              <div
                key={loan.id}
                className="rounded-2xl border border-surface-line p-6 bg-white hover:shadow-card hover:border-cyan-brand/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-navy-900 mb-2">
                    {loan.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mb-6">
                    {loan.shortDescription}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/loan-products#${loan.slug}`}
                    className="text-xs font-bold text-blue-brand hover:underline"
                  >
                    View details →
                  </Link>
                  <Button variant="blue" size="sm" href="/#contact">
                    Enquire
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Next - Lender Decides */}
      <section className="py-16 sm:py-20 bg-surface-pale border-t border-surface-line">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-brand mb-2.5 inline-block">
                What Happens Next
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900 mb-4">
                The lender makes the final lending decision.
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                Fast Fincorp Services assists with the enquiry journey. If you decide to apply, the
                respective lender will carry out its own eligibility assessment, verification and
                documentation process and will communicate its applicable rates, fees, terms, and
                decision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Lender-specific eligibility checks</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Terms &amp; charges explained by lender</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Formal application with lender</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Approval is not guaranteed</span>
                </div>
              </div>

              <Button variant="blue" size="md" href="/about">
                <span>Know About Us →</span>
              </Button>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-card border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85"
                  alt="Lender verification process"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-[#104b91] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
              Ready to take the first step?
            </h2>
            <p className="text-sm text-cyan-100 max-w-xl">
              Share your loan requirement with Fast Fincorp Services today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="cyan" size="md" href="/#contact">
              <span>Enquire Now →</span>
            </Button>
            <Button variant="outline" size="md" href={whatsappUrl} isExternal>
              <MessageCircle className="w-4 h-4 mr-1 text-cyan-brand" />
              <span>WhatsApp Us</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Process FAQs */}
      <section className="py-16 sm:py-20 bg-white" id="faq">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="Need Clarity?"
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about the loan enquiry and consultation process."
          />
          <FaqAccordion
            items={FAQS.filter(
              (f) =>
                f.id === "how-to-start-enquiry" ||
                f.id === "details-required" ||
                f.id === "approval-timeline" ||
                f.id === "credit-score-impact" ||
                f.id === "guarantee-approval"
            )}
          />
        </div>
      </section>
    </>
  );
}
