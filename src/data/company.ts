export const COMPANY_INFO = {
  name: "Fast Fincorp Services",
  shortName: "FFS",
  tagline: "Your Trusted Loan Partner (Pan India)",
  description:
    "Fast Fincorp Services helps individuals, salaried professionals, self-employed individuals and business owners explore suitable loan options through multiple lender options, with guidance throughout the enquiry and application process.",
  phone: "+91 93540 37175",
  phoneRaw: "+919354037175",
  whatsappNumber: "919354037175",
  email: "support@fastfincorpservices.com",
  website: "https://www.fastfincorpservices.com",
  location: "Pan India",
  hours: "Mon - Sat: 9:30 AM – 7:00 PM IST",
  disclaimer:
    "Fast Fincorp Services is a loan assistance intermediary / financial service provider, not a bank or NBFC. We do not sanction or disburse loans. Eligibility, interest rates, fees, terms, approval and disbursal are determined solely by the respective lender, subject to its policies and verification.",
};

export const WHATSAPP_BASE_URL = `https://wa.me/${COMPANY_INFO.whatsappNumber}`;

export function generateWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
