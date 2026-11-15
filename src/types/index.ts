export interface LoanProduct {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  icon: string;
  featured?: boolean;
  minAmount?: string;
  maxAmount?: string;
  indicativeTenure?: string;
  keyBenefits: string[];
  eligibility: string[];
  documentsNeeded: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: "general" | "loans" | "eligibility" | "about";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface EnquiryFormData {
  fullName: string;
  mobile: string;
  loanType: string;
  requiredAmount: string;
  employmentType: string;
  city: string;
  consent: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  imageAlt?: string;
  tags: string[];
  status: "published" | "draft";
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string;
  allowIndex?: boolean;
}
