"use client";

import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/data/company";

export function WhatsAppButton() {
  const whatsappUrl = generateWhatsAppLink(
    "Hello Fast Fincorp Services, I would like to enquire about loan options."
  );

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-lg bg-navy-950 text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with our Loan Team
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Fast Fincorp Services on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
}
