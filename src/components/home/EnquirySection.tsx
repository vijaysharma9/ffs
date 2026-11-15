"use client";

import { useState } from "react";
import { Phone, MessageCircle, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { COMPANY_INFO, generateWhatsAppLink } from "@/data/company";

export function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    loan: "Personal Loan",
    amount: "₹5–10 Lakhs",
    employment: "Salaried",
    city: "",
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappHref, setWhatsappHref] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedMessage = `Hello Fast Fincorp Services, I would like to enquire about a loan.
• Full Name: ${formData.name}
• Mobile: ${formData.mobile}
• Loan Type: ${formData.loan}
• Required Amount: ${formData.amount || "Not specified"}
• Employment Type: ${formData.employment}
• City: ${formData.city}`;

    const link = generateWhatsAppLink(formattedMessage);
    setWhatsappHref(link);
    setSubmitted(true);

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-br from-[#eaf7ff] via-[#f4f9ff] to-[#f8fcff] border-t border-surface-line"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-brand mb-2.5 inline-block">
              Get Started Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
              Let&apos;s understand your loan requirement.
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed mb-8">
              Share a few basic details and our team can contact you to discuss your enquiry,
              check available partner options, and outline the next steps.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-surface-line shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-blue-light text-blue-brand flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-xs text-navy-900 font-bold">Speak with our team</b>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-sm font-extrabold text-blue-brand hover:underline"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-surface-line shadow-xs">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <b className="block text-xs text-navy-900 font-bold">WhatsApp assistance</b>
                  <a
                    href={generateWhatsAppLink(
                      "Hello Fast Fincorp Services, I have a loan enquiry."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-extrabold text-emerald-700 hover:underline"
                  >
                    Chat with Fast Fincorp Services →
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 text-amber-600 mt-0.5" />
              <p>
                <strong>Security Notice:</strong> Details are collected solely to respond to your
                enquiry. Never share original identity cards, OTPs, or passwords here.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-surface-line">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="text-xl font-display font-extrabold text-navy-900">
                  Apply for Loan Assistance
                </h3>
                <p className="text-xs text-ink-muted mt-1">
                  Fill in your basic details. Fields marked * are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-ink-secondary mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded-lg border border-[#dfe8f1] text-xs sm:text-sm text-ink outline-hidden focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/20 transition-all bg-white"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="mobile"
                      className="block text-xs font-bold text-ink-secondary mb-1.5"
                    >
                      Mobile Number *
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      inputMode="numeric"
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      required
                      placeholder="10-digit mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded-lg border border-[#dfe8f1] text-xs sm:text-sm text-ink outline-hidden focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/20 transition-all bg-white"
                    />
                  </div>

                  {/* Loan Type */}
                  <div>
                    <label
                      htmlFor="loan"
                      className="block text-xs font-bold text-ink-secondary mb-1.5"
                    >
                      Loan Type *
                    </label>
                    <select
                      id="loan"
                      name="loan"
                      required
                      value={formData.loan}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded-lg border border-[#dfe8f1] text-xs sm:text-sm text-ink outline-hidden focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/20 transition-all bg-white"
                    >
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Car Loan">Car Loan</option>
                      <option value="Loan Against Property">Loan Against Property</option>
                      <option value="Overdraft Facility">Overdraft Facility</option>
                      <option value="Debt Consolidation">Debt Consolidation</option>
                    </select>
                  </div>

                  {/* Loan Amount */}
                  <div>
                    <label
                      htmlFor="amount"
                      className="block text-xs font-bold text-ink-secondary mb-1.5"
                    >
                      Required Loan Amount
                    </label>
                    <select
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded-lg border border-[#dfe8f1] text-xs sm:text-sm text-ink outline-hidden focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/20 transition-all bg-white"
                    >
                      <option value="Below ₹1 Lakh">Below ₹1 Lakh</option>
                      <option value="₹1–5 Lakhs">₹1–5 Lakhs</option>
                      <option value="₹5–10 Lakhs">₹5–10 Lakhs</option>
                      <option value="₹10–25 Lakhs">₹10–25 Lakhs</option>
                      <option value="₹25–50 Lakhs">₹25–50 Lakhs</option>
                      <option value="Above ₹50 Lakhs">Above ₹50 Lakhs</option>
                    </select>
                  </div>

                  {/* Employment Type */}
                  <div>
                    <label
                      htmlFor="employment"
                      className="block text-xs font-bold text-ink-secondary mb-1.5"
                    >
                      Employment Type *
                    </label>
                    <select
                      id="employment"
                      name="employment"
                      required
                      value={formData.employment}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded-lg border border-[#dfe8f1] text-xs sm:text-sm text-ink outline-hidden focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/20 transition-all bg-white"
                    >
                      <option value="Salaried">Salaried</option>
                      <option value="Self-employed">Self-employed Professional</option>
                      <option value="Business Owner">Business Owner / Trader</option>
                    </select>
                  </div>

                  {/* City */}
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-xs font-bold text-ink-secondary mb-1.5"
                    >
                      City / Location *
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      placeholder="e.g. New Delhi, Mumbai, Bengaluru"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded-lg border border-[#dfe8f1] text-xs sm:text-sm text-ink outline-hidden focus:border-cyan-brand focus:ring-2 focus:ring-cyan-brand/20 transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Consent checkbox */}
                <label className="flex items-start gap-2.5 pt-2 cursor-pointer text-[11px] text-ink-muted leading-relaxed">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-0.5 rounded-sm border-slate-300 text-blue-brand focus:ring-blue-brand"
                  />
                  <span>
                    I agree to be contacted regarding my loan enquiry and acknowledge that Fast
                    Fincorp Services acts as a loan assistance intermediary.
                  </span>
                </label>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-blue-brand text-white font-bold text-sm tracking-wide hover:bg-navy-900 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer mt-4"
                >
                  <span>Submit Enquiry &amp; Chat on WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>

                <p className="text-[10px] text-center text-slate-400 pt-1">
                  Your details are requested only to respond to this enquiry. No advance fees
                  required.
                </p>

                {/* Success feedback */}
                {submitted && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                    <div className="flex items-center gap-2 font-bold text-sm text-emerald-800 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Enquiry Prepared Successfully!</span>
                    </div>
                    <p className="mb-2">
                      WhatsApp has been launched with your enquiry summary. If WhatsApp did not open
                      automatically, tap the button below:
                    </p>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Open WhatsApp Now</span>
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
