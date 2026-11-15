import Image from "next/image";
import { Layers, Users, Compass, Globe2, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Layers,
      title: "Multiple Loan Categories",
      description: "Explore diverse financing solutions for both personal and business milestones.",
    },
    {
      icon: Users,
      title: "One-to-One Assistance",
      description: "Receive customized guidance centered on the exact financial details you share.",
    },
    {
      icon: Compass,
      title: "Clear Next Steps",
      description: "Understand the end-to-end enquiry and lender application journey with zero ambiguity.",
    },
    {
      icon: Globe2,
      title: "Pan India Reach",
      description: "Reliable enquiry assistance accessible for salaried and business clients across India.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-surface-pale border-y border-surface-line" id="why">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-80 sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-card border border-white">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85"
                alt="Advisory and partnership at Fast Fincorp Services"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 via-transparent to-cyan-500/10" />
            </div>

            {/* Floating Info Badge */}
            <div className="absolute -bottom-6 right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-floating border border-surface-line max-w-[220px]">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <strong className="block text-xs font-bold text-navy-900">
                  Guidance at Every Step
                </strong>
              </div>
              <small className="text-[11px] text-ink-muted leading-tight block">
                From initial enquiry to lender documentation
              </small>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-brand mb-2.5 inline-block">
              Why Fast Fincorp Services
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-display font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
              A simpler way to explore your loan options.
            </h2>
            <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-8">
              Choosing a loan can feel complicated. We help make the initial process easier by
              understanding your requirement and assisting you in exploring options from relevant
              lending partners across the country.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-light text-[#078db7] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-900 mb-1 leading-snug">
                        {b.title}
                      </h4>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
