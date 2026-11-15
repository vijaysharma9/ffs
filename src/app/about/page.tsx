import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  HelpCircle,
  Search,
  Check,
  ShieldCheck,
  Compass,
  FileCheck2,
} from "lucide-react";
import { COMPANY_INFO, generateWhatsAppLink } from "@/data/company";
import { FAQS } from "@/data/faqs";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | Fast Fincorp Services - Your Trusted Loan Partner",
  description:
    "Learn about Fast Fincorp Services, our customer-centric loan advisory approach, pan-India presence, and commitment to transparent, responsible loan enquiry assistance.",
};

export default function AboutPage() {
  const whatsappUrl = generateWhatsAppLink(
    "Hello Fast Fincorp Services, I would like to know more about your loan assistance."
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
                <span>About Fast Fincorp Services</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-navy-900 tracking-tight leading-tight mb-5">
                Your trusted partner for{" "}
                <span className="text-blue-brand">loan assistance.</span>
              </h1>

              <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl mb-8">
                Fast Fincorp Services helps individuals, salaried professionals, self-employed
                individuals, and business owners explore suitable loan options through multiple
                regulated lender options, with guidance throughout the enquiry and application
                process.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Button variant="cyan" size="lg" href="#our-approach">
                  <span>Discover Our Approach</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="outline" size="lg" href={whatsappUrl} isExternal>
                  <MessageCircle className="w-4 h-4 mr-1 text-emerald-600" />
                  <span>Talk to Our Team</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-card border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                  alt="Team collaboration at Fast Fincorp Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>

              <div className="absolute -top-3 -right-2 bg-white/95 rounded-xl p-3 shadow-floating border border-surface-line flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-light text-cyan-brand flex items-center justify-center font-bold">
                  ◎
                </div>
                <div>
                  <b className="block text-xs text-navy-900">Customer-focused Support</b>
                  <small className="text-[10px] text-ink-muted">Guidance around your needs</small>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-2 bg-white/95 rounded-xl p-3 shadow-floating border border-surface-line flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  ↗
                </div>
                <div>
                  <b className="block text-xs text-navy-900">Serving Across India</b>
                  <small className="text-[10px] text-ink-muted">Pan India enquiry assistance</small>
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
            <strong className="text-cyan-brand mr-1">Pan India</strong> Service Coverage
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Multiple</strong> Loan Categories
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Customer-First</strong> Approach
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Guided</strong> Enquiry Process
          </span>
        </div>
      </div>

      {/* Section: Who We Are */}
      <section className="py-16 sm:py-20 bg-surface-pale" id="about">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-card border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
                  alt="Who we are - Fast Fincorp Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-3 bg-white rounded-xl p-4 shadow-floating border border-surface-line max-w-[210px]">
                <b className="block text-xs text-navy-900">Transparent Advisory</b>
                <small className="text-[11px] text-ink-muted">Empowering informed decisions</small>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-brand mb-2.5 inline-block">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
                Making the loan enquiry journey easier to navigate.
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed mb-4">
                Fast Fincorp Services is a loan DSA / financial service provider offering loan
                assistance to people with different financial requirements. We help customers
                explore suitable options through multiple lender options and provide assistance
                throughout the loan application process.
              </p>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                From personal and business requirements to home and vehicle financing, our aim is to
                make it easier to understand the next steps and connect an enquiry with relevant
                available options.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Individuals and salaried professionals</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Self-employed individuals</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Business owners &amp; MSMEs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Enquiries from across India</span>
                </div>
              </div>

              <Button variant="blue" size="md" href="/loan-products">
                <span>Explore Loan Products</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What We Do / Our Approach */}
      <section className="py-16 sm:py-20 bg-white" id="our-approach">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="What We Do"
            title="Loan Assistance Built Around Your Requirement"
            subtitle="We help you explore the loan category that may fit your requirement and understand the steps involved in making an application."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="rounded-2xl border border-surface-line p-6 hover:shadow-card hover:border-cyan-brand/40 transition-all bg-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-light text-blue-brand flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-extrabold text-navy-900 mb-2">
                  Understand your needs
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed mb-6">
                  We begin by understanding the purpose of your enquiry, the type of finance you are
                  exploring, and your basic eligibility parameters.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  Your requirement
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  Initial discussion
                </span>
              </div>
            </article>

            <article className="rounded-2xl border border-surface-line p-6 hover:shadow-card hover:border-cyan-brand/40 transition-all bg-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-light text-cyan-brand flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-[#078db7]" />
                </div>
                <h3 className="text-lg font-display font-extrabold text-navy-900 mb-2">
                  Explore available options
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed mb-6">
                  We help you explore relevant loan options through multiple lender options, where
                  available, applicable, and best suited to your profile.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  Loan categories
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  Lender options
                </span>
              </div>
            </article>

            <article className="rounded-2xl border border-surface-line p-6 hover:shadow-card hover:border-cyan-brand/40 transition-all bg-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-extrabold text-navy-900 mb-2">
                  Guide the next steps
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed mb-6">
                  We provide assistance through the enquiry and application journey. Formal checks
                  and sanction decisions remain with the respective lender.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  Application guidance
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  Lender assessment
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section: Our Commitment */}
      <section className="py-16 sm:py-20 bg-surface-pale border-y border-surface-line">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-brand mb-2.5 inline-block">
                Our Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900 mb-4">
                Clear communication. Responsible loan assistance.
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                Financial decisions deserve careful consideration. We aim to make the enquiry
                process clear, explain the role of the lender, and help customers understand what
                happens next without misleading claims.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Understandable enquiry process</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Support based on your stated need</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Clear intermediary role</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>No guaranteed approval claims</span>
                </div>
              </div>

              <Button variant="blue" size="md" href={`tel:${COMPANY_INFO.phoneRaw}`}>
                <Phone className="w-4 h-4 mr-1 text-cyan-brand" />
                <span>Speak With Our Team</span>
              </Button>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-card border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1000&q=85"
                  alt="Responsible loan assistance"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-white" id="process">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="Our Process"
            title="How We Assist You"
            subtitle="A straightforward enquiry journey, from sharing your requirement to understanding the lender's application process."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Share your enquiry</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Tell us which type of loan you are looking for and share your basic contact details.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Discuss your requirement</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Our team connects with you to understand your stated requirement and financial
                parameters.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Explore possible options</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Review relevant options that may be available through participating lending
                partners.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Proceed with the lender</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                If you choose to proceed, the lender conducts its checks and makes the final
                sanction decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-gradient-to-r from-navy-900 via-navy-800 to-[#104b91] text-white py-14"
        id="enquire"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
              Let&apos;s understand your loan requirement.
            </h2>
            <p className="text-sm text-cyan-100 max-w-xl">
              Connect with Fast Fincorp Services to discuss your enquiry and possible next steps.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="cyan"
              size="md"
              href={generateWhatsAppLink(
                "Hello Fast Fincorp Services, I have a loan enquiry."
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
            kicker="A Little More About Us"
            title="Frequently Asked Questions"
            subtitle="Learn more about Fast Fincorp Services and the assistance we provide."
          />
          <FaqAccordion items={FAQS.filter((f) => f.category === "general" || f.category === "about")} />
        </div>
      </section>
    </>
  );
}
