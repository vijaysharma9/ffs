"use client";

import { useState } from "react";
import { MessageCircle, Copy, Check, Share2 } from "lucide-react";
import { generateWhatsAppLink } from "@/data/company";

interface ShareProps {
  title: string;
  slug: string;
}

export function ShareAndReadingTools({ title, slug }: ShareProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${slug}`
      : `https://www.fastfincorpservices.com/blog/${slug}`;

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Read this insightful financial guide on Fast Fincorp Services: "${title}"\n${fullUrl}`
  )}`;

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline-block mr-1">
        Share:
      </span>

      {/* WhatsApp Share Button */}
      <a
        href={whatsappShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share this article on WhatsApp"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition-colors"
      >
        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
        <span>WhatsApp</span>
      </a>

      {/* Copy link button */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy article link"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-slate-500" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
