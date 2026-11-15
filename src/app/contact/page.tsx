import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import { COMPANY_INFO, generateWhatsAppLink } from "@/data/company";
import { Button } from "@/components/ui/Button";
import { EnquirySection } from "@/components/home/EnquirySection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us | Fast Fincorp Services - Speak With Our Loan Team",
  description:
    "Get in touch with Fast Fincorp Services for personal, business, home, and property loan assistance. Call +91 93540 37175 or chat with us on WhatsApp.",
};

export default function ContactPage() {
  const whatsappUrl = generateWhatsAppLink(
    "Hello Fast Fincorp Services, I would like to make a loan enquiry."
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
                <span>We&apos;re Here to Help</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-navy-900 tracking-tight leading-tight mb-5">
                Let&apos;s talk about your{" "}
                <span className="text-blue-brand">loan requirement.</span>
              </h1>

              <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl mb-8">
                Have a question or want to explore loan options? Get in touch with Fast Fincorp
                Services. Our team can help you understand the enquiry process and possible next
                steps.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Button variant="cyan" size="lg" href={`tel:${COMPANY_INFO.phoneRaw}`}>
                  <Phone className="w-4 h-4 mr-1 text-navy-950" />
                  <span>Call Us Now</span>
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
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                  alt="Contact Fast Fincorp Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
              </div>

              <div className="absolute -top-3 -right-2 bg-white/95 rounded-xl p-3 shadow-floating border border-surface-line flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-light text-blue-brand flex items-center justify-center font-bold">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <b className="block text-xs text-navy-900">Speak With Our Team</b>
                  <small className="text-[10px] text-ink-muted">Call {COMPANY_INFO.phone}</small>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-2 bg-white/95 rounded-xl p-3 shadow-floating border border-surface-line flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <b className="block text-xs text-navy-900">Pan India Enquiries</b>
                  <small className="text-[10px] text-ink-muted">Serving customers across India</small>
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
            <strong className="text-cyan-brand mr-1">Direct</strong> Enquiry Assistance
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Phone</strong> Support
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">WhatsApp</strong> Quick Contact
          </span>
          <span>
            <strong className="text-cyan-brand mr-1">Pan India</strong> Coverage
          </span>
        </div>
      </div>

      {/* 3 Channels Section */}
      <section className="py-16 sm:py-20 bg-white" id="channels">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="Get In Touch"
            title="Choose How You'd Like to Connect"
            subtitle="Reach Fast Fincorp Services by phone, WhatsApp, or through our quick online loan enquiry form."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Channel 1: Phone */}
            <article className="rounded-2xl border border-surface-line p-7 bg-white hover:border-blue-brand/50 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-light text-blue-brand flex items-center justify-center mb-5">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-extrabold text-navy-900 mb-2">
                  Call Us Directly
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed mb-6">
                  Speak directly with a loan advisor regarding loan requirements, interest rate
                  benchmarks, and documentation.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    Phone Support
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    Loan Enquiries
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-xs font-bold text-blue-brand hover:underline"
                >
                  {COMPANY_INFO.phone}
                </a>
                <Button variant="blue" size="sm" href={`tel:${COMPANY_INFO.phoneRaw}`}>
                  Call Now
                </Button>
              </div>
            </article>

            {/* Channel 2: WhatsApp */}
            <article className="rounded-2xl border border-surface-line p-7 bg-white hover:border-emerald-500/50 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-extrabold text-navy-900 mb-2">
                  WhatsApp Us
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed mb-6">
                  Send us a quick message with your requirement and our team will follow up
                  promptly on WhatsApp.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    Quick Response
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    Direct Chat
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  Start a conversation
                </a>
                <Button variant="cyan" size="sm" href={whatsappUrl} isExternal>
                  Message Us
                </Button>
              </div>
            </article>

            {/* Channel 3: Service Coverage */}
            <article className="rounded-2xl border border-surface-line p-7 bg-white hover:border-cyan-brand/50 hover:shadow-card transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-light text-[#078db7] flex items-center justify-center mb-5">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-extrabold text-navy-900 mb-2">
                  Service Coverage
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed mb-6">
                  Fast Fincorp Services accepts loan enquiries across India, partnering with
                  leading banks and non-banking finance companies.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    Pan India
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    7 Loan Categories
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/loan-products"
                  className="text-xs font-bold text-blue-brand hover:underline"
                >
                  Explore Products →
                </Link>
                <Button variant="outline" size="sm" href="/loan-products">
                  View Loans
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Embedded Complete Interactive Enquiry Form */}
      <EnquirySection />

      {/* What Happens Next Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-surface-line" id="next-steps">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="What Happens Next"
            title="From Your Message to the Next Step"
            subtitle="Here's what you can generally expect after you contact Fast Fincorp Services."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Contact our team</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Call or WhatsApp us and tell us briefly about your loan requirement.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Share basic details</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Provide the non-sensitive parameters needed to understand your loan requirement.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Discuss possible options</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Our specialists review relevant options available through participating lenders.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-line p-6 text-center bg-surface-pale/30">
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-bold text-lg flex items-center justify-center mx-auto mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-navy-900 mb-2">Understand lender steps</h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                If you choose to proceed, the lender conducts formal checks and makes the sanction
                decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-[#104b91] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
              Have a loan enquiry? We&apos;re ready to listen.
            </h2>
            <p className="text-sm text-cyan-100 max-w-xl">
              Call or message Fast Fincorp Services to discuss your loan enquiry and possible next
              steps.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="cyan" size="md" href={whatsappUrl} isExternal>
              <MessageCircle className="w-4 h-4 mr-1" />
              <span>WhatsApp Us</span>
            </Button>
            <Button variant="outline" size="md" href={`tel:${COMPANY_INFO.phoneRaw}`}>
              <Phone className="w-4 h-4 mr-1 text-cyan-brand" />
              <span>Call Now</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
