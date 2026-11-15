"use client";

import { useState, useMemo } from "react";
import { Search, BookOpen, Sparkles } from "lucide-react";
import { BlogPost } from "@/types";
import { BlogCard } from "@/components/blog/BlogCard";
import { cn } from "@/lib/utils";

interface BlogListProps {
  initialBlogs: BlogPost[];
}

export function BlogList({ initialBlogs }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(initialBlogs.map((b) => b.category).filter(Boolean))
    );
    return ["all", ...unique];
  }, [initialBlogs]);

  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((blog) => {
      // Only show published blogs on public site
      if (blog.status === "draft") return false;

      const matchesCat =
        selectedCategory === "all" || blog.category === selectedCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCat && matchesSearch;
    });
  }, [initialBlogs, selectedCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Search and Category Filter */}
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search financial guides, CIBIL tips, MSME loan advice..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-xl border border-surface-line bg-white text-sm text-ink outline-hidden focus:border-blue-brand focus:ring-2 focus:ring-blue-brand/20 transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-1.5 py-0.5"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-bold transition-all capitalize cursor-pointer",
                selectedCategory === cat
                  ? "bg-blue-brand text-white shadow-xs"
                  : "bg-surface-pale text-slate-600 hover:bg-slate-200"
              )}
            >
              {cat === "all" ? "All Categories" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      {filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface-pale rounded-2xl max-w-lg mx-auto">
          <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-navy-900">No blog posts found</h3>
          <p className="text-xs text-ink-muted mt-1 mb-4">
            Try adjusting your search query or select another category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-xs font-bold text-blue-brand hover:underline"
          >
            Show All Posts
          </button>
        </div>
      )}
    </div>
  );
}
