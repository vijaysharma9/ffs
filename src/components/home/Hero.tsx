import Image from "next/image";
import { CheckCircle2, ArrowRight, MessageCircle, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { generateWhatsAppLink } from "@/data/company";

export function Hero() {
  const whatsappUrl = generateWhatsAppLink(
    "Hello Fast Fincorp Services, I want to enquire about a loan."
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f5faff] via-[#f2f8ff] to-[#e8f6fc] py-14 lg:py-20 border-b border-surface-line">
      {/* Decorative background circle */}
      <div
        className="absolute -right-24 -top-32 w-[520px] h-[520px] rounded-full border border-cyan-brand/20 pointer-events-none"
        style={{
          boxShadow:
            "0 0 0 50px rgba(24, 185, 232, 0.04), 0 0 0 100px rgba(24, 185, 232, 0.02)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-light text-[#087aa5] text-[11px] font-extrabold uppercase tracking-wider mb-5 border border-cyan-brand/20">
              <span className="w-2 h-2 rounded-full bg-cyan-brand animate-pulse" />
              <span>Loan Assistance • Pan India</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-extrabold text-navy-900 tracking-tight leading-[1.12] mb-5">
              Find the right loan <br className="hidden sm:inline" />
              for <span className="text-blue-brand">your next step.</span>
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl mb-8">
              Whether you are planning a big purchase, expanding your business, or managing planned
              expenses, explore loan options with dedicated guidance from our assistance team.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-9">
              <Button variant="blue" size="lg" href="#contact">
                <span>Explore Loan Options</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="cyan" size="lg" href={whatsappUrl} isExternal>
                <MessageCircle className="w-4 h-4 mr-1 text-navy-950" />
                <span>WhatsApp Us</span>
              </Button>
            </div>

            {/* Trust checkmarks */}
            <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs font-bold text-ink-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Multiple Loan Categories</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Guided Enquiry Process</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Pan India Assistance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual photo with floating badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Box */}
              <div className="relative h-80 sm:h-[390px] w-full rounded-2xl overflow-hidden shadow-card border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85"
                  alt="Loan Consultation and Assistance - Fast Fincorp Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-base sm:text-lg font-bold font-display leading-snug">
                    Move forward with a clearer financial path.
                  </p>
                  <p className="text-xs text-slate-200 mt-1">
                    Connecting your enquiry with leading banks &amp; NBFC options.
                  </p>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-sm border border-surface-line rounded-xl p-3 sm:p-4 shadow-floating flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-light text-cyan-brand flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#0798c3]" />
                </div>
                <div>
                  <b className="block text-xs sm:text-sm text-navy-900 font-bold leading-tight">
                    Explore Your Options
                  </b>
                  <small className="text-[11px] text-ink-muted">Loan assistance made simpler</small>
                </div>
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="absolute -bottom-5 -left-2 sm:-left-4 bg-white/95 backdrop-blur-sm border border-surface-line rounded-xl p-3 sm:p-4 shadow-floating flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-light text-blue-brand flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-xs sm:text-sm text-navy-900 font-bold leading-tight">
                    Personalised Guidance
                  </b>
                  <small className="text-[11px] text-ink-muted">Support across the journey</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
