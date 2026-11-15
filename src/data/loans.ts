import { LoanProduct } from "@/types";

export const LOAN_PRODUCTS: LoanProduct[] = [
  {
    id: "personal-loan",
    slug: "personal-loan",
    title: "Personal Loan",
    shortDescription:
      "Explore financing options for eligible personal requirements such as medical needs, education, travel, weddings, and planned expenses.",
    fullDescription:
      "A versatile collateral-free loan product for individuals needing immediate liquidity. We assist salaried and self-employed professionals in comparing terms across top banks and NBFC partners.",
    tags: ["Personal expenses", "Quick assistance", "Flexible tenure"],
    icon: "UserCheck",
    featured: true,
    minAmount: "₹50,000",
    maxAmount: "₹50 Lakhs",
    indicativeTenure: "1 to 5 Years",
    keyBenefits: [
      "No collateral or security needed",
      "Flexible end-use (medical, wedding, travel, education)",
      "Structured monthly EMI repayment",
      "Assistance with minimal paperwork",
    ],
    eligibility: [
      "Salaried employee or self-employed professional",
      "Age: 21 to 60 years",
      "Minimum monthly net income: ₹20,000+",
      "Valid PAN & Aadhaar required by lenders",
    ],
    documentsNeeded: [
      "Identity Proof (PAN Card)",
      "Address Proof (Aadhaar / Voter ID / Utility Bill)",
      "Last 3-6 months bank statement",
      "Latest 3 months salary slips or ITR for self-employed",
    ],
  },
  {
    id: "business-loan",
    slug: "business-loan",
    title: "Business Loan",
    shortDescription:
      "Financing assistance for business expansion, working capital, inventory purchases, and day-to-day operational requirements.",
    fullDescription:
      "Customised debt solutions designed to empower SMEs, MSMEs, traders, manufacturers, and service providers to scale operations, manage cash flow, or invest in business upgrades.",
    tags: ["Working capital", "Business growth", "SME / MSME"],
    icon: "Briefcase",
    featured: false,
    minAmount: "₹2 Lakhs",
    maxAmount: "₹2 Crores+",
    indicativeTenure: "1 to 7 Years",
    keyBenefits: [
      "Working capital & growth capital access",
      "Collateral-free options available based on turnover",
      "Customised repayment cycles to match business cashflows",
      "Assistance for proprietorships, partnerships, and Pvt Ltd companies",
    ],
    eligibility: [
      "Minimum 1-2 years of business vintage",
      "Annual turnover of ₹15 Lakhs+",
      "Satisfactory banking conduct",
      "Valid business registration / GST registration",
    ],
    documentsNeeded: [
      "PAN Card (Individual & Entity)",
      "GST returns (last 12 months)",
      "Current Account statement (last 12 months)",
      "ITR with computation / Audited financials (last 2 years)",
    ],
  },
  {
    id: "home-loan",
    slug: "home-loan",
    title: "Home Loan",
    shortDescription:
      "Assistance exploring home financing for purchasing ready property, under-construction apartments, or residential construction.",
    fullDescription:
      "Fulfill your dream of homeownership with guided home loan assistance. We assist you in exploring competitive floating and fixed interest rate options from leading financial institutions.",
    tags: ["Home purchase", "Construction", "Low EMI options"],
    icon: "Home",
    featured: false,
    minAmount: "₹10 Lakhs",
    maxAmount: "₹10 Crores+",
    indicativeTenure: "Up to 30 Years",
    keyBenefits: [
      "Long tenure options for easy, comfortable EMIs",
      "Options for ready, under-construction, or self-construction homes",
      "Balance transfer and top-up facility guidance",
      "Tax deduction benefits under Section 80C & Section 24",
    ],
    eligibility: [
      "Salaried or self-employed Indian residents",
      "Age: 21 to 65 years",
      "Clear legal & technical property title",
      "Healthy credit track record",
    ],
    documentsNeeded: [
      "KYC documents (PAN, Aadhaar)",
      "Income Proof (Salary slips / ITRs)",
      "Bank statement for last 6 months",
      "Property chain deeds, ATS, and approved construction plan",
    ],
  },
  {
    id: "car-loan",
    slug: "car-loan",
    title: "Car Loan",
    shortDescription:
      "Explore financing assistance for purchasing new and certified pre-owned passenger cars, subject to lender policies.",
    fullDescription:
      "Drive home your preferred vehicle without disrupting your investments. We guide you through competitive auto loan options across multiple commercial banks and non-banking lenders.",
    tags: ["New car", "Used car", "Attractive rates"],
    icon: "Car",
    featured: false,
    minAmount: "₹1 Lakh",
    maxAmount: "Up to 100% on-road*",
    indicativeTenure: "1 to 7 Years",
    keyBenefits: [
      "Financing available for both new and used vehicles",
      "Flexible repayment tenure up to 7 years",
      "High LTV options available based on lender criteria",
      "Straightforward documentation assistance",
    ],
    eligibility: [
      "Salaried, self-employed, or business proprietors",
      "Minimum age: 21 years at application",
      "Stable income and residential stability",
    ],
    documentsNeeded: [
      "Identity and address proofs",
      "Income proof (Salary slip / Form 16 / ITR)",
      "Bank statement for last 3-6 months",
      "Car proforma invoice or valuation report (used car)",
    ],
  },
  {
    id: "loan-against-property",
    slug: "loan-against-property",
    title: "Loan Against Property",
    shortDescription:
      "Explore property-backed financing (LAP) for large-ticket business funding, expansion, or high-value personal commitments.",
    fullDescription:
      "Unlock the value of your commercial or residential property to raise substantial funds at lower interest rates compared to unsecured credit products.",
    tags: ["Property-backed", "Secured finance", "Higher limits"],
    icon: "Building2",
    featured: false,
    minAmount: "₹10 Lakhs",
    maxAmount: "₹15 Crores+",
    indicativeTenure: "Up to 15 Years",
    keyBenefits: [
      "Lower interest rates than unsecured personal or business loans",
      "Higher loan quantum against property market valuation",
      "Retain ownership and continuous use of your property",
      "Flexible tenure for relaxed monthly obligations",
    ],
    eligibility: [
      "Commercial or residential property owners",
      "Freehold or legally mortgageable property",
      "Salaried or business income earners",
    ],
    documentsNeeded: [
      "Complete property title deeds & chain documents",
      "Sanctioned map / mutation documents",
      "Applicant & co-applicant KYC documents",
      "Financials & bank statements (1-2 years)",
    ],
  },
  {
    id: "overdraft-facility",
    slug: "overdraft-facility",
    title: "Overdraft Facility",
    shortDescription:
      "Assistance exploring OD / CC facilities for eligible personal or business cash-flow and short-term liquidity needs.",
    fullDescription:
      "Pay interest only on the amount you withdraw, not on the total approved limit. An ideal credit buffer for seasonal businesses, trade cycles, and unforeseen expenditures.",
    tags: ["Cash flow buffer", "Pay-per-use", "Business liquidity"],
    icon: "RefreshCw",
    featured: false,
    minAmount: "₹2 Lakhs",
    maxAmount: "₹5 Crores+",
    indicativeTenure: "Annual renewal",
    keyBenefits: [
      "Interest charged solely on the utilized balance",
      "Deposit surplus funds anytime to immediately save on interest",
      "Reusable credit limit without re-applying",
      "Enhanced flexibility for day-to-day operations",
    ],
    eligibility: [
      "Active business entity with satisfactory banking throughput",
      "Healthy transaction turnover in Current / Savings account",
      "Satisfactory CIBIL score",
    ],
    documentsNeeded: [
      "Entity KYC and registration licenses",
      "Bank statements (12 months)",
      "Financial accounts and tax filings",
      "Collateral security documents (for secured OD)",
    ],
  },
  {
    id: "debt-consolidation",
    slug: "debt-consolidation",
    title: "Debt Consolidation",
    shortDescription:
      "Explore options to combine multiple high-interest debts into a single, manageable loan with structured monthly repayments.",
    fullDescription:
      "Simplify your financial commitments by consolidating fragmented credit card dues and multiple high-rate loans into one predictable monthly instalment.",
    tags: ["Manage repayments", "Reduce EMI stress", "Credit repair"],
    icon: "Layers",
    featured: false,
    minAmount: "₹1 Lakh",
    maxAmount: "₹50 Lakhs",
    indicativeTenure: "1 to 5 Years",
    keyBenefits: [
      "Single monthly EMI instead of keeping track of multiple dates",
      "Opportunity to lower overall interest outgo",
      "Eliminate credit card roll-over traps",
      "Improve credit score over time with structured payments",
    ],
    eligibility: [
      "Existing active unsecured loans or credit card balances",
      "Steady verifiable source of income",
      "No current hard default on active loans",
    ],
    documentsNeeded: [
      "Identity & address verification",
      "Latest bank statement showing income credit",
      "Foreclosure letters / statements of existing loans",
      "Latest salary slip or business proof",
    ],
  },
];
