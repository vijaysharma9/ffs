import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import { BlogPost } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface BlogCardProps {
  blog: BlogPost;
  featured?: boolean;
}

export function BlogCard({ blog, featured }: BlogCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-surface-line bg-white overflow-hidden shadow-xs hover:shadow-card hover:border-cyan-brand/50 transition-all duration-300">
      <div>
        {/* Cover Image Container */}
        <Link
          href={`/blog/${blog.slug}`}
          className="relative block h-48 sm:h-52 w-full overflow-hidden bg-slate-100"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={blog.coverImage}
            alt={blog.imageAlt || blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-navy-900 shadow-sm backdrop-blur-xs">
              {blog.category}
            </span>
          </div>
        </Link>

        {/* Content Box */}
        <div className="p-5 sm:p-6">
          {/* Metadata Row */}
          <div className="flex items-center gap-3 text-[11px] text-ink-muted mb-3 font-semibold">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-blue-brand" />
              <span>{blog.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-cyan-brand" />
              <span>{blog.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-display font-extrabold text-navy-900 mb-2.5 leading-snug group-hover:text-blue-brand transition-colors line-clamp-2">
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed line-clamp-3 mb-4">
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Row */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
        <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <User className="w-3.5 h-3.5 text-slate-400" />
          <span className="truncate max-w-[130px]">{blog.author}</span>
        </span>

        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-blue-brand hover:text-navy-900 transition-colors"
        >
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
