"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-surface-line shadow-xs">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold text-ink-secondary">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href) && !item.href.includes("#");

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-blue-brand relative py-1",
                  isActive && "text-blue-brand after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-brand"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-extrabold text-navy-900 hover:text-blue-brand transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-brand" />
            <span>{COMPANY_INFO.phone}</span>
          </a>

          <Button variant="blue" size="sm" href="/#contact">
            <span>Apply for Loan</span>
            <ArrowUpRight className="w-4 h-4 ml-0.5" />
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="blue" size="sm" href="/#contact" className="sm:hidden px-3 py-1.5 text-xs">
            Apply
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-surface-pale text-navy-900 hover:bg-slate-200 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-28 bg-navy-950/40 backdrop-blur-xs z-50">
          <div className="bg-white border-b border-surface-line px-6 py-6 shadow-xl max-h-[calc(100vh-7rem)] overflow-y-auto">
            <nav className="flex flex-col gap-4">
              {MAIN_NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-navy-900 hover:text-blue-brand py-2 border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-slate-400 text-sm">→</span>
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-surface-pale text-navy-900 font-bold text-sm"
                >
                  <Phone className="w-4 h-4 text-blue-brand" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>

                <Button
                  variant="blue"
                  size="md"
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center"
                >
                  <span>Apply for Loan Assistance</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
