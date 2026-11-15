"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
}

export function Logo({ variant = "light", className, showTagline = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Fast Fincorp Services Home"
      className={cn("group inline-flex items-center gap-2 transition-transform hover:opacity-95", className)}
    >
      {variant === "dark" ? (
        <div className="flex items-center gap-2 rounded-xl bg-white/95 px-3 py-1.5 shadow-sm transition group-hover:bg-white">
          <Image
            src="/images/logo.png"
            alt="Fast Fincorp Services - Your Trusted Loan Partner (Pan India)"
            width={210}
            height={70}
            priority
            className="h-10 w-auto object-contain"
          />
        </div>
      ) : (
        <Image
          src="/images/logo.png"
          alt="Fast Fincorp Services - Your Trusted Loan Partner (Pan India)"
          width={240}
          height={80}
          priority
          className="h-11 md:h-12 w-auto object-contain"
        />
      )}
    </Link>
  );
}
