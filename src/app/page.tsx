import { Hero } from "@/components/home/Hero";
import { QuickStrip } from "@/components/home/QuickStrip";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { AudienceSection } from "@/components/home/AudienceSection";
import { EnquirySection } from "@/components/home/EnquirySection";
import { EmiCalculator } from "@/components/loans/EmiCalculator";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQS } from "@/data/faqs";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Quick category strip */}
      <QuickStrip />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Interactive EMI Calculator Section */}
      <section className="py-14 sm:py-18 bg-surface-pale border-t border-surface-line">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="Planning Tools"
            title="Calculate Your Estimated Loan EMI"
            subtitle="Adjust loan principal, interest rate, and tenure to visualize your monthly instalments before starting the enquiry."
          />
          <EmiCalculator />
        </div>
      </section>

      {/* Why Choose Fast Fincorp Services */}
      <WhyChooseUs />

      {/* Process Steps */}
      <ProcessSteps />

      {/* Audience Section */}
      <AudienceSection />

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 bg-[#f8fbfe] border-t border-surface-line" id="faq">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            kicker="Frequently Asked Questions"
            title="Questions? We Can Help."
            subtitle="Quick, transparent answers about our loan assistance process, partner banks, and documentation."
          />
          <FaqAccordion items={FAQS.slice(0, 6)} />
        </div>
      </section>

      {/* Loan Enquiry / Application Section */}
      <EnquirySection />
    </>
  );
}
