"use client";

import { usePathname } from "next/navigation";
import { Topbar } from "@/components/layout/Topbar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <main className="min-h-screen w-full bg-[#f8fafc]">{children}</main>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
