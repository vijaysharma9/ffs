import { User, Briefcase, Store } from "lucide-react";

export function AudienceSection() {
  const categories = [
    {
      icon: User,
      title: "Salaried Professionals",
      description: "Employees in Private Limited companies, MNCs, public sector, and government departments.",
    },
    {
      icon: Briefcase,
      title: "Self-Employed Individuals",
      description: "Doctors, CAs, advocates, consultants, freelancers, and independent service providers.",
    },
    {
      icon: Store,
      title: "Business Owners & MSMEs",
      description: "Proprietorship firms, partnerships, manufacturing units, traders, and corporate entities.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-[#104b91] text-white py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-brand block mb-2">
              Pan-India Eligibility Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Who Can Submit an Enquiry?
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              We assist customers across diverse employment categories and financial backgrounds.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-xl bg-white/10 border border-white/15 p-6 backdrop-blur-xs hover:bg-white/15 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-brand/20 text-cyan-brand flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-display text-white mb-2">{c.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{c.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
