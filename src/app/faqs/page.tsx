import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  HelpCircle,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileQuestion,
} from "lucide-react";
import { FAQS } from "@/data/faqs";
import { COMPANY_INFO, generateWhatsAppLink } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { FaqBrowser } from "@/components/faqs/FaqBrowser";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Fast Fincorp Services",
  description:
    "Explore answers to common questions about personal, business, and home loans, eligibility criteria, credit bureau checks, document requirements, and our intermediary assistance.",
};

export default function FaqsPage() {
  const whatsappUrl = generateWhatsAppLink(
    "Hello Fast Fincorp Services, I have a question about loan assistance."
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4f9ff] via-[#edf7ff] to-[#e5f7fc] py-14 lg:py-20 border-b border-surface-line">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-light text-[#087aa5] text-[11px] font-extrabold uppercase tracking-wider mb-5 border border-cyan-brand/20">
                <span className="w-2 h-2 rounded-full bg-cyan-brand animate-pulse" />
                <span>Help &amp; Information</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-navy-900 tracking-tight leading-tight mb-5">
                Questions? We&apos;ve got{" "}
                <span className="text-blue-brand">answers.</span>
              </h1>

              <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl mb-8">
                Find clear, helpful information about Fast Fincorp Services, the 7 loan categories
                we assist with, the enquiry process, credit score rules, and what to expect when
                exploring loan options.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Button variant="cyan" size="lg" href="#faq-list">
                  <span>Browse FAQs</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="outline" size="lg" href={whatsappUrl} isExternal>
                  <MessageCircle className="w-4 h-4 mr-1 text-emerald-600" />
                  <span>Ask Us on WhatsApp</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-card border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85"
                  alt="Frequently asked questions about loans"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>

              <div className="absolute -top-3 -right-2 bg-white/95 rounded-xl p-3 shadow-floating border border-surface-line flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-light text-cyan-brand flex items-center justify-center font-bold">
                  ?
                </div>
                <div>
                  <b className="block text-xs text-navy-900">Clear Information</b>
                  <small className="text-[10px] text-ink-muted">Understand the enquiry journey</small>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-2 bg-white/95 rounded-xl p-3 shadow-floating border border-surface-line flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-light text-blue-brand flex items-center justify-center font-bold">
                  ☎
                </div>
                <div>
                  <b className="block text-xs text-navy-900">Need More Help?</b>
                  <small className="text-[10px] text-ink-muted">Speak with our team</small>
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
            <strong className="text-cyan-brand mr-1">Helpful</strong> Loan Information
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Simple</strong> Enquiry Guidance
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">7</strong> Loan Categories
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Pan India</strong> Enquiry Coverage
          </span>
        </div>
      </div>

      {/* Main FAQs with Filter & Search */}
      <section className="py-16 sm:py-20 bg-white" id="faq-list">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="Frequently Asked Questions"
            title="Everything You May Want to Know"
            subtitle="Browse answers to common questions about eligibility, interest rates, timelines, and the application process."
          />

          <FaqBrowser initialFaqs={FAQS} />
        </div>
      </section>

      {/* Still Have a Question? Info Banner */}
      <section className="py-16 sm:py-20 bg-surface-pale border-y border-surface-line">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-card border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85"
                  alt="Customer advisory"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent" />
              </div>

              <div className="absolute -bottom-5 -right-3 bg-white rounded-xl p-4 shadow-floating border border-surface-line max-w-[210px]">
                <b className="block text-xs text-navy-900">We&apos;re here to help</b>
                <small className="text-[11px] text-ink-muted">
                  Contact our team about your loan enquiry
                </small>
              </div>
            </div>

            <div className="lg:col-span-7">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-brand mb-2.5 inline-block">
                Still Have a Question?
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900 mb-4">
                Let&apos;s talk about your requirement.
              </h2>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">
                If you cannot find the information you need, contact Fast Fincorp Services. Our team
                can help you understand the enquiry process, lender criteria, and the next steps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Call our advisory desk directly</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Connect quickly on WhatsApp</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Explore all 7 loan categories</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-[11px]">
                    ✓
                  </span>
                  <span>Submit a basic enquiry online</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button variant="blue" size="md" href={`tel:${COMPANY_INFO.phoneRaw}`}>
                  <Phone className="w-4 h-4 mr-1 text-cyan-brand" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </Button>
                <Button variant="outline" size="md" href="/contact">
                  <span>Go to Contact Page →</span>
                </Button>
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
              Ready to explore your loan options?
            </h2>
            <p className="text-sm text-cyan-100 max-w-xl">
              Share your requirement and let our team guide you through the loan enquiry process.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="cyan" size="md" href="/#contact">
              <span>Enquire Now →</span>
            </Button>
            <Button
              variant="outline"
              size="md"
              href={generateWhatsAppLink(
                "Hello Fast Fincorp Services, I have a loan question."
              )}
              isExternal
            >
              <MessageCircle className="w-4 h-4 mr-1 text-cyan-brand" />
              <span>WhatsApp Us</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
