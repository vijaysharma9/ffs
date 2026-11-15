import Link from "next/link";
import { Phone, Mail, Globe, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { COMPANY_INFO, generateWhatsAppLink } from "@/data/company";
import { LOAN_NAV_LINKS, QUICK_LINKS } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t border-navy-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" />
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm pt-2">
              Helping individuals, salaried professionals, self-employed professionals, and
              businesses explore loan options with guided enquiry assistance. Pan-India service
              coverage.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={generateWhatsAppLink("Hello Fast Fincorp Services")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#128c7e]/30 border border-[#25d366]/40 text-[#25d366] text-xs font-bold hover:bg-[#128c7e]/50 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-brand" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Loan Products */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-sm tracking-wide mb-4">
              Loan Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {LOAN_NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-cyan-brand transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-display font-bold text-sm tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-cyan-brand transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-sm tracking-wide mb-4">
              Contact &amp; Assistance
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-brand flex-shrink-0" />
                  <span className="font-semibold text-white">{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={generateWhatsAppLink("Hello Fast Fincorp Services")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25d366] flex-shrink-0" />
                  <span>WhatsApp Assistance</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.website}
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4 text-cyan-brand flex-shrink-0" />
                  <span>www.fastfincorpservices.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-brand flex-shrink-0 mt-0.5" />
                <span>Pan India Assistance · Serving All Major Cities &amp; States</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 mt-4 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] text-slate-400 leading-relaxed">
          <div className="max-w-3xl">
            <p>
              <strong className="text-slate-200">Disclaimer: </strong>
              {COMPANY_INFO.disclaimer}
            </p>
          </div>
          <div className="flex-shrink-0 text-slate-400">
            © {new Date().getFullYear()} Fast Fincorp Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
