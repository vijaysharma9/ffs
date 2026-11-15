import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSteps() {
  const steps = [
    {
      step: "01",
      title: "Share your requirement",
      description: "Choose a loan category and tell us what loan amount and purpose you are looking for.",
    },
    {
      step: "02",
      title: "Connect with our team",
      description: "Our loan assistance specialists connect with you to understand your basic details.",
    },
    {
      step: "03",
      title: "Explore available options",
      description: "Review relevant options and terms from participating regulated lenders.",
    },
    {
      step: "04",
      title: "Proceed with the lender",
      description: "Complete formal lender checks, verification, and appraisal for final disbursal.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" id="process">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          kicker="How It Works"
          title="Your Loan Enquiry in Four Simple Steps"
          subtitle="Start with a basic enquiry. The lender's eligibility checks, documentation, and approval process will apply."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-surface-line bg-surface-pale/40 p-6 text-center hover:bg-white hover:shadow-card transition-all duration-300"
            >
              {/* Step number badge */}
              <div className="w-14 h-14 rounded-2xl bg-cyan-light text-blue-brand font-display font-extrabold text-lg flex items-center justify-center mx-auto mb-4 shadow-xs">
                {item.step}
              </div>

              <h3 className="text-base font-display font-bold text-navy-900 mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-ink-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
