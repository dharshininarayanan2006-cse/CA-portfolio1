// Site-wide constants for VK Abilesh CA Portfolio

export const SITE_CONFIG = {
  name: "VK Abilesh",
  role: "Chartered Accountant & Tax Consultant",
  phone: "+91 80562 51782",
  email: "abileshca@gmail.com",
  address:
    "No.105, AVM Avenue 5th Street, Virugambakkam, Chennai – 600092",
  tagline: "Trusted Financial Solutions for Your Business",
  description:
    "Professional tax, GST, and compliance services in Chennai. Expert guidance in accounting, auditing, taxation, and business compliance.",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export interface Service {
  category: string;
  icon: string;
  items: string[];
}

export const SERVICES: Service[] = [
  {
    category: "Direct Tax",
    icon: "receipt",
    items: [
      "Income Tax Filings",
      "TDS Return Filing",
      "Tax Audit",
      "Professional Certifications",
    ],
  },
  {
    category: "Indirect Tax",
    icon: "file-text",
    items: [
      "GST Registration & Filings",
      "GST Audit & Annual Return",
    ],
  },
  {
    category: "Business Registrations",
    icon: "building-2",
    items: [
      "Company Incorporation",
      "Company Annual Filings",
      "MSME Registration",
      "IEC Registration",
      "Professional Tax Registration",
      "Digital Signature",
    ],
  },
  {
    category: "Accounting",
    icon: "calculator",
    items: ["Bookkeeping (Tally)", "Financial Statements", "Payroll Management"],
  },
];

export const ABOUT_TEXT = `I am a commerce professional and aspiring finance expert specializing in accounting, auditing, taxation, and business compliance. With a strong academic foundation in chartered accountancy and global accounting certifications, I bring both technical knowledge and practical experience from the supply of goods sector. My focus is on delivering accurate financial insights, ensuring regulatory compliance, and helping businesses operate with clarity, efficiency, and transparency.`;
