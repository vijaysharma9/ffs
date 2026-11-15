import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { getBlogs, getBlogBySlug } from "@/lib/blogs";
import { renderFormattedContentHtml } from "@/lib/blogFormatter";
import { COMPANY_INFO, generateWhatsAppLink } from "@/data/company";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);
  if (!blog) {
    return {
      title: "Blog Post Not Found | Fast Fincorp Services",
    };
  }

  return {
    title: blog.seoTitle || `${blog.title} | Fast Fincorp Services`,
    description: blog.seoDescription || blog.excerpt,
    keywords: blog.keywords ? blog.keywords.split(",").map((k) => k.trim()) : blog.tags,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      images: [
        {
          url: blog.coverImage,
          width: 1000,
          height: 600,
          alt: blog.imageAlt || blog.title,
        },
      ],
    },
    robots: {
      index: blog.allowIndex !== false,
      follow: true,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = getBlogs();
  const relatedBlogs = allBlogs
    .filter((b) => b.id !== blog.id && b.status !== "draft")
    .slice(0, 3);

  const whatsappInquiryUrl = generateWhatsAppLink(
    `Hello Fast Fincorp Services, I read your article "${blog.title}" and would like to enquire about loan options.`
  );

  return (
    <article className="min-h-screen bg-white">
      {/* Article Header & Breadcrumbs */}
      <div className="bg-gradient-to-b from-surface-pale via-white to-white border-b border-surface-line pt-10 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb nav */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-blue-brand">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-brand">
              Blog
            </Link>
            <span>/</span>
            <span className="text-navy-900 truncate max-w-[200px] sm:max-w-md">
              {blog.title}
            </span>
          </nav>

          {/* Category Pill */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-light text-blue-brand border border-blue-brand/20">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-display font-extrabold text-navy-900 leading-[1.2] tracking-tight mb-5">
            {blog.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-ink-muted border-t border-slate-200/60 pt-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <User className="w-4 h-4 text-blue-brand" />
              <span>{blog.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-cyan-brand" />
              <span>{blog.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{blog.readTime}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Article Body */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Cover Image */}
        <div className="relative h-64 sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-card mb-10 border border-slate-100">
          <Image
            src={blog.coverImage}
            alt={blog.imageAlt || blog.title}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 850px"
            className="object-cover"
          />
        </div>

        {/* Lead Excerpt Callout */}
        <div className="p-5 sm:p-6 rounded-xl bg-blue-50/60 border-l-4 border-blue-brand text-slate-700 text-sm sm:text-base leading-relaxed mb-8 font-medium">
          {blog.excerpt}
        </div>

        {/* Article Text Content */}
        <div
          className="article-content max-w-none text-sm sm:text-base leading-relaxed text-slate-700 space-y-4"
          dangerouslySetInnerHTML={{ __html: renderFormattedContentHtml(blog.content) }}
        />

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-navy-900 mr-2">Tags:</span>
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-surface-pale text-slate-700 border border-slate-200"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Loan Advisory Action Box inside Article */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-[#104b91] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-brand block mb-1">
              Have A Loan Enquiry?
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
              Speak with our Loan Advisory Team
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 mt-1 max-w-md leading-relaxed">
              Fast Fincorp Services helps individuals and businesses explore loan options across
              India.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <Button variant="cyan" size="md" href={whatsappInquiryUrl} isExternal>
              <MessageCircle className="w-4 h-4 mr-1 text-navy-950" />
              <span>Chat on WhatsApp</span>
            </Button>
            <Button variant="outline" size="md" href={`tel:${COMPANY_INFO.phoneRaw}`}>
              <Phone className="w-4 h-4 mr-1 text-cyan-brand" />
              <span>Call Now</span>
            </Button>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-8 text-center sm:text-left">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-brand hover:text-navy-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="bg-surface-pale py-14 border-t border-surface-line mt-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-display font-extrabold text-navy-900 mb-6">
              More Recommended Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((b) => (
                <div
                  key={b.id}
                  className="rounded-xl border border-surface-line bg-white p-5 shadow-xs hover:shadow-card transition-all"
                >
                  <span className="text-[10px] font-bold text-blue-brand uppercase tracking-wider block mb-1">
                    {b.category}
                  </span>
                  <h4 className="text-sm font-bold text-navy-900 mb-2 line-clamp-2 hover:text-blue-brand">
                    <Link href={`/blog/${b.slug}`}>{b.title}</Link>
                  </h4>
                  <p className="text-xs text-ink-muted line-clamp-2 mb-4">{b.excerpt}</p>
                  <Link
                    href={`/blog/${b.slug}`}
                    className="text-xs font-bold text-blue-brand hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
