import Link from "next/link";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { COMPANY_INFO, generateWhatsAppLink } from "@/data/company";

export function Topbar() {
  return (
    <div className="bg-navy-900 text-[#dcecff] text-xs py-2 px-4 border-b border-navy-800/60">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-cyan-brand font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-white/90 font-medium">Pan India Loan Assistance</span>
          </span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span className="hidden sm:inline text-slate-300">
            Assisting Salaried, Self-Employed &amp; Business Owners
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <a
            href={generateWhatsAppLink("Hello Fast Fincorp Services, I need loan assistance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-[#a8f0c6] hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp Us
          </a>
          <span className="hidden md:inline text-white/40">|</span>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-white hover:text-cyan-brand transition-colors font-bold"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-brand" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
