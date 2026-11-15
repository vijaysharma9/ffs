export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Loan Products", href: "/loan-products" },
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Blog", href: "/blog" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const LOAN_NAV_LINKS = [
  { label: "Personal Loan", href: "/loan-products#personal-loan" },
  { label: "Business Loan", href: "/loan-products#business-loan" },
  { label: "Home Loan", href: "/loan-products#home-loan" },
  { label: "Car Loan", href: "/loan-products#car-loan" },
  { label: "Loan Against Property", href: "/loan-products#loan-against-property" },
  { label: "Overdraft Facility", href: "/loan-products#overdraft-facility" },
  { label: "Debt Consolidation", href: "/loan-products#debt-consolidation" },
];

export const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Loan Products", href: "/loan-products" },
  { label: "About Fast Fincorp", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Financial Blog & Guides", href: "/blog" },
  { label: "Frequently Asked Questions", href: "/faqs" },
  { label: "Contact & Enquiry", href: "/contact" },
];
