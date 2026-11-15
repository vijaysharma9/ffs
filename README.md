# Fast Fincorp Services (FFS) - Production Next.js 14 Website & Blog CMS

A production-ready financial services, loan enquiry, and blog publishing platform built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🔐 Admin Panel Credentials (`/admin`)

Access the CMS dashboard to create, edit, publish, draft, or delete blog posts:

- **URL**: `http://localhost:3000/admin` (or `https://your-domain.com/admin`)
- **Email**: `admin@ffsteamindia.com`
- **Password**: `P@ssword12345`

### Admin Features (Matching Design References)
1. **Sign in Screen**: Clean branded login screen with error handling and session retention.
2. **Dashboard**: Metric cards for *Total Blogs*, *Published*, and *Drafts*, along with recent blog listings and quick shortcuts.
3. **All Blogs**: Search filter, status filter (*All*, *Published*, *Draft*), with quick **Edit**, **View**, and **Delete** actions.
4. **Add / Edit Blog**:
   - Title & auto-slug generator.
   - Short description / excerpt.
   - Full content with quick markdown formatting toolbar (**Bold**, **H2**, **H3**, **Lists**, **Dividers**).
   - SEO settings (*SEO Title*, *Meta Description*, *Keywords*, *Search Indexing toggle*).
   - Feature Image URL preview and alt text.
   - Category selector, comma-separated tags, and Author input.
   - One-click *Save Draft* or *Publish*.

---

## 🌐 Public Website Routes

| Route | Page File | Description |
| :--- | :--- | :--- |
| **`/`** | `src/app/page.tsx` | Homepage: Hero, Ticker, 8 Services, Interactive EMI Calculator, Why Choose Us, 4-Step Process, Audience, FAQ preview, WhatsApp Lead Form. |
| **`/loan-products`**| `src/app/loan-products/page.tsx` | Catalog of 7 products (Personal, Business, Home, Car, LAP, OD, Debt Consolidation) with benefits, criteria, and documentation. |
| **`/how-it-works`** | `src/app/how-it-works/page.tsx` | Visual 4-step walkthrough, data privacy guidelines, lender approval process, and relevant FAQs. |
| **`/blog`** | `src/app/blog/page.tsx` | Public blog catalog with search, category filtering pills, reading time, and author metadata. |
| **`/blog/[slug]`** | `src/app/blog/[slug]/page.tsx` | Full-length financial blog article with cover image, formatted content, lead excerpt callout, loan enquiry CTA, and related articles. |
| **`/faqs`** | `src/app/faqs/page.tsx` | 14 searchable questions with real-time category filtering pills and smooth accordions. |
| **`/contact`** | `src/app/contact/page.tsx` | Contact hub with 3 communication channels, embedded interactive application form, and timeline. |
| **`/about`** | `src/app/about/page.tsx` | About Us page explaining DSA operations, company commitment, and consumer assistance. |
| **`/admin`** | `src/app/admin/page.tsx` | Complete protected Blog Management System (CMS). |

---

## 🚀 Getting Started

```bash
# Start local development server
npm run dev

# Build and start production bundle
npm run build
npm run start
```
# FFS
