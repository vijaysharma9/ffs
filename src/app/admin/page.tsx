"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Settings,
  LogOut,
  Search,
  ExternalLink,
  Edit,
  Trash2,
  CheckCircle2,
  Clock,
  Globe,
  ArrowRight,
  Bold,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  ShieldCheck,
  Eye,
  Sparkles,
  Check,
} from "lucide-react";
import { BlogPost } from "@/types";
import { autoFormatAndInterlinkContent, renderFormattedContentHtml } from "@/lib/blogFormatter";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const ADMIN_CREDENTIALS = {
  email: "admin@ffsteamindia.com",
  password: "P@ssword12345",
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginEmail, setLoginEmail] = useState("admin@ffsteamindia.com");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<"dashboard" | "blogs" | "add" | "seo">("dashboard");

  // Blog State
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");

  // Editing / Form State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState("");
  const [formSlug, setFormSlug] = useState("");
  const [formExcerpt, setFormExcerpt] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formCategory, setFormCategory] = useState("Credit Score & CIBIL");
  const [formAuthor, setFormAuthor] = useState("Fast Fincorp Editorial Team");
  const [formCoverImage, setFormCoverImage] = useState(
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85"
  );
  const [formImageAlt, setFormImageAlt] = useState("");
  const [formTags, setFormTags] = useState("CIBIL Score, Loan Approval");
  const [formStatus, setFormStatus] = useState<"published" | "draft">("published");
  const [formSeoTitle, setFormSeoTitle] = useState("");
  const [formSeoDesc, setFormSeoDesc] = useState("");
  const [formKeywords, setFormKeywords] = useState("");
  const [formAllowIndex, setFormAllowIndex] = useState(true);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState("");
  const [contentViewMode, setContentViewMode] = useState<"write" | "preview">("write");
  const [autoFormatOnSave, setAutoFormatOnSave] = useState(true);
  const [formatNotice, setFormatNotice] = useState("");

  const handleAutoFormatClick = () => {
    if (!formContent.trim()) {
      alert("Please enter some content to format first.");
      return;
    }
    const formatted = autoFormatAndInterlinkContent(formContent);
    setFormContent(formatted);
    setFormatNotice("✨ Content successfully structured with H2/H3 headings, bolded loan terms, and internal links!");
    setTimeout(() => setFormatNotice(""), 4000);
  };

  // Check existing session
  useEffect(() => {
    const authSession = localStorage.getItem("ffs_admin_logged_in");
    if (authSession === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/blogs");
      const data = await res.json();
      if (data.success && data.blogs) {
        setBlogs(data.blogs);
      }
    } catch (err) {
      console.error("Failed to load blogs:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchBlogs();
    }
  }, [isAuthenticated]);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      loginEmail.trim().toLowerCase() === ADMIN_CREDENTIALS.email.toLowerCase() &&
      loginPassword === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      setLoginError("");
      localStorage.setItem("ffs_admin_logged_in", "true");
    } else {
      setLoginError("Invalid email or password. Please use the assigned credentials.");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("ffs_admin_logged_in");
  };

  // Reset Add Form
  const resetForm = () => {
    setEditingId(null);
    setFormTitle("");
    setFormSlug("");
    setFormExcerpt("");
    setFormContent("");
    setFormCategory("Credit Score & CIBIL");
    setFormAuthor("Fast Fincorp Editorial Team");
    setFormCoverImage(
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85"
    );
    setFormImageAlt("");
    setFormTags("Loans, Finance");
    setFormStatus("published");
    setFormSeoTitle("");
    setFormSeoDesc("");
    setFormKeywords("");
    setFormAllowIndex(true);
    setSaveSuccessMsg("");
  };

  // Start Editing a Blog
  const handleEditBlog = (blog: BlogPost) => {
    setEditingId(blog.id);
    setFormTitle(blog.title);
    setFormSlug(blog.slug);
    setFormExcerpt(blog.excerpt);
    setFormContent(blog.content);
    setFormCategory(blog.category);
    setFormAuthor(blog.author);
    setFormCoverImage(blog.coverImage);
    setFormImageAlt(blog.imageAlt || blog.title);
    setFormTags(blog.tags.join(", "));
    setFormStatus(blog.status);
    setFormSeoTitle(blog.seoTitle || blog.title);
    setFormSeoDesc(blog.seoDescription || blog.excerpt);
    setFormKeywords(blog.keywords || "");
    setFormAllowIndex(blog.allowIndex !== false);
    setActiveTab("add");
  };

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setFormTitle(val);
    if (!editingId) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setFormSlug(generatedSlug);
    }
  };

  // Handle Save Blog
  const handleSaveBlog = async (statusOverride?: "published" | "draft") => {
    if (!formTitle || !formSlug) {
      alert("Please fill in at least the Title and Slug.");
      return;
    }

    const finalContent = autoFormatOnSave
      ? autoFormatAndInterlinkContent(formContent)
      : formContent;

    const payload: Partial<BlogPost> = {
      id: editingId || `blog-${Date.now()}`,
      title: formTitle,
      slug: formSlug,
      excerpt: formExcerpt,
      content: finalContent,
      category: formCategory,
      author: formAuthor,
      coverImage: formCoverImage,
      imageAlt: formImageAlt || formTitle,
      tags: formTags.split(",").map((t) => t.trim()).filter(Boolean),
      status: statusOverride || formStatus,
      seoTitle: formSeoTitle || formTitle,
      seoDescription: formSeoDesc || formExcerpt,
      keywords: formKeywords,
      allowIndex: formAllowIndex,
    };

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSaveSuccessMsg(
          editingId ? "Blog updated successfully!" : "New blog published successfully!"
        );
        fetchBlogs();
        setTimeout(() => {
          setActiveTab("blogs");
          resetForm();
        }, 1200);
      }
    } catch (err) {
      alert("Failed to save blog. Please try again.");
    }
  };

  // Handle Delete Blog
  const handleDeleteBlog = async (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      try {
        const res = await fetch(`/api/blogs?id=${encodeURIComponent(id)}`, {
          method: "DELETE",
        });
        const data = await res.json();
        if (data.success) {
          fetchBlogs();
        }
      } catch (err) {
        alert("Failed to delete blog.");
      }
    }
  };

  // Stats
  const totalBlogsCount = blogs.length;
  const publishedCount = blogs.filter((b) => b.status === "published").length;
  const draftCount = blogs.filter((b) => b.status === "draft").length;

  // Filtered Blogs for Table
  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchesSearch =
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "all" ? true : b.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [blogs, searchQuery, statusFilter]);

  // Insert markdown helpers
  const insertFormatting = (prefix: string, suffix: string = "") => {
    setFormContent((prev) => prev + `\n${prefix} ` + suffix);
  };

  // ----------------------------------------------------
  // VIEW 1: SIGN IN SCREEN (Reference Image 1)
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#111a24] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
          <div className="mb-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0e7490] block mb-1">
              FFS ADMIN
            </span>
            <h1 className="text-3xl font-display font-extrabold text-navy-900 tracking-tight">
              Sign in
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Manage blogs, images, and page SEO.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {loginError && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold leading-relaxed">
                {loginError}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-navy-900 mb-2">Email</label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:border-[#0e7490] focus:ring-2 focus:ring-[#0e7490]/20 transition-all bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-navy-900 mb-2">Password</label>
              <input
                type="password"
                required
                placeholder="Enter admin password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-hidden focus:border-[#0e7490] focus:ring-2 focus:ring-[#0e7490]/20 transition-all bg-white"
              />
              <p className="text-[11px] text-slate-400 mt-1.5">
                Default: <span className="font-mono text-slate-600">P@ssword12345</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-[#155e75] hover:bg-[#0e7490] text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-98 cursor-pointer mt-2"
            >
              Sign in
            </button>

            <div className="text-center pt-2">
              <Link href="/" className="text-xs font-semibold text-slate-500 hover:underline">
                ← Back to Fast Fincorp Website
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VIEW 2: AUTHENTICATED ADMIN PANEL (Images 2, 3, 4)
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col md:flex-row text-slate-800 font-sans">
      {/* Left Sidebar */}
      <aside className="w-full md:w-64 bg-[#111a24] text-slate-300 flex flex-col justify-between flex-shrink-0">
        <div>
          {/* Brand header */}
          <div className="p-6 border-b border-white/10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-brand block mb-0.5">
              FAST FINCORP
            </span>
            <h2 className="text-xl font-display font-bold text-white tracking-tight">
              Admin Panel
            </h2>
          </div>

          {/* Navigation Items */}
          <nav className="p-4 space-y-1 text-sm font-semibold">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all cursor-pointer text-left",
                activeTab === "dashboard"
                  ? "bg-white/15 text-white font-bold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab("blogs")}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all cursor-pointer text-left",
                activeTab === "blogs"
                  ? "bg-white/15 text-white font-bold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
            >
              <FileText className="w-4 h-4" />
              <span>All Blogs</span>
            </button>

            <button
              onClick={() => {
                resetForm();
                setActiveTab("add");
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all cursor-pointer text-left",
                activeTab === "add"
                  ? "bg-white/15 text-white font-bold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
            >
              <PlusCircle className="w-4 h-4" />
              <span>{editingId ? "Edit Blog" : "Add Blog"}</span>
            </button>

            <button
              onClick={() => setActiveTab("seo")}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all cursor-pointer text-left",
                activeTab === "seo"
                  ? "bg-white/15 text-white font-bold"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Settings className="w-4 h-4" />
              <span>SEO / Page Settings</span>
            </button>
          </nav>
        </div>

        {/* User Info & Logout */}
        <div className="p-4 border-t border-white/10">
          <div className="px-3 py-2 text-xs text-slate-400 mb-2 truncate">
            Signed in as:
            <span className="block font-semibold text-white truncate">
              {ADMIN_CREDENTIALS.email}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-slate-300 hover:bg-rose-900/40 hover:text-rose-200 text-xs font-bold transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-y-auto">
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between gap-4">
          <span className="text-xs font-semibold text-slate-500">Blog CMS</span>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-brand hover:underline inline-flex items-center gap-1.5"
          >
            <span>fastfincorpservices.com</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </header>

        {/* Dynamic Tab Body */}
        <main className="p-6 lg:p-10 max-w-7xl w-full mx-auto flex-1">
          {/* TAB 1: DASHBOARD (Reference Image 2) */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900">
                  Dashboard
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Manage Fast Fincorp blog content and SEO.
                </p>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-xs font-semibold text-slate-500 block mb-2">
                    Total Blogs
                  </span>
                  <div className="text-4xl font-display font-extrabold text-navy-900">
                    {totalBlogsCount}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-xs font-semibold text-slate-500 block mb-2">
                    Published
                  </span>
                  <div className="text-4xl font-display font-extrabold text-emerald-700">
                    {publishedCount}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-xs font-semibold text-slate-500 block mb-2">
                    Drafts
                  </span>
                  <div className="text-4xl font-display font-extrabold text-amber-700">
                    {draftCount}
                  </div>
                </div>
              </div>

              {/* Recent Blogs List */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <h3 className="font-bold text-base text-navy-900">Recent Blogs</h3>
                  <button
                    onClick={() => {
                      resetForm();
                      setActiveTab("add");
                    }}
                    className="text-xs font-bold text-blue-brand hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Add Blog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {blogs.slice(0, 5).map((blog) => (
                    <div
                      key={blog.id}
                      className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-50 px-2 rounded-lg transition-colors"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-navy-900 leading-snug">
                          {blog.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={cn(
                              "text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full",
                              blog.status === "published"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-amber-50 text-amber-700"
                            )}
                          >
                            {blog.status}
                          </span>
                          <span className="text-xs text-slate-400">/blog/{blog.slug}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="text-xs font-semibold text-slate-500 hover:text-blue-brand"
                        >
                          View
                        </Link>
                        <button
                          onClick={() => handleEditBlog(blog)}
                          className="text-xs font-bold text-blue-brand hover:underline cursor-pointer"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ALL BLOGS LIST (Reference Image 3) */}
          {activeTab === "blogs" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900">
                    All Blogs
                  </h1>
                  <p className="text-xs text-slate-500 mt-1">
                    Create, edit, publish, and delete posts.
                  </p>
                </div>

                <button
                  onClick={() => {
                    resetForm();
                    setActiveTab("add");
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#155e75] hover:bg-[#0e7490] text-white text-xs font-bold tracking-wide transition-all inline-flex items-center gap-2 shadow-xs cursor-pointer self-start sm:self-auto"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Add Blog</span>
                </button>
              </div>

              {/* Search and Filters Bar */}
              <div className="flex flex-wrap items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 text-xs focus:outline-hidden focus:border-blue-brand bg-white"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  className="h-10 px-3 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white"
                >
                  <option value="all">All statuses</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              {/* Blogs Table */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="py-3.5 px-5">Title</th>
                        <th className="py-3.5 px-4">Category</th>
                        <th className="py-3.5 px-4">Status</th>
                        <th className="py-3.5 px-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((b) => (
                          <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                            <td className="py-4 px-5">
                              <span className="font-bold text-sm text-navy-900 block leading-snug">
                                {b.title}
                              </span>
                              <span className="text-[11px] text-slate-400 block mt-0.5">
                                /blog/{b.slug}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-slate-600 font-medium">
                              {b.category}
                            </td>
                            <td className="py-4 px-4">
                              <span
                                className={cn(
                                  "inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase",
                                  b.status === "published"
                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                    : "bg-amber-50 text-amber-700 border border-amber-200"
                                )}
                              >
                                {b.status}
                              </span>
                            </td>
                            <td className="py-4 px-5 text-right space-x-3 whitespace-nowrap">
                              <button
                                onClick={() => handleEditBlog(b)}
                                className="font-bold text-blue-brand hover:underline cursor-pointer"
                              >
                                Edit
                              </button>
                              <Link
                                href={`/blog/${b.slug}`}
                                target="_blank"
                                className="font-semibold text-slate-600 hover:text-navy-900"
                              >
                                View
                              </Link>
                              <button
                                onClick={() => handleDeleteBlog(b.id, b.title)}
                                className="font-bold text-rose-600 hover:underline cursor-pointer"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="py-12 text-center text-slate-400">
                            No blogs matching your filter.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ADD / EDIT BLOG FORM (Reference Image 4) */}
          {activeTab === "add" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900">
                  {editingId ? "Edit Blog" : "Add Blog"}
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Write, add a feature image, and publish.
                </p>
              </div>

              {saveSuccessMsg && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{saveSuccessMsg}</span>
                </div>
              )}

              {/* Main 2-column Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Post fields */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Title & Slug */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5">Title</label>
                      <input
                        type="text"
                        placeholder="e.g. How to Get a Low-Interest Personal Loan in India"
                        value={formTitle}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        className="w-full h-11 px-3.5 rounded-lg border border-slate-200 text-sm focus:outline-hidden focus:border-blue-brand bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5">Slug</label>
                      <div className="flex items-center">
                        <span className="h-11 px-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-lg text-xs text-slate-500 flex items-center">
                          /blog/
                        </span>
                        <input
                          type="text"
                          placeholder="low-interest-personal-loan-india"
                          value={formSlug}
                          onChange={(e) => setFormSlug(e.target.value)}
                          className="w-full h-11 px-3.5 rounded-r-lg border border-slate-200 text-xs font-mono focus:outline-hidden focus:border-blue-brand bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5">
                        Short Description
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Brief summary shown on cards and social previews..."
                        value={formExcerpt}
                        onChange={(e) => setFormExcerpt(e.target.value)}
                        className="w-full p-3.5 rounded-lg border border-slate-200 text-xs focus:outline-hidden focus:border-blue-brand bg-white"
                      />
                    </div>
                  </div>

                  {/* Full Content Rich Textarea with Auto-Formatting & Interlinking */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
                      <div>
                        <label className="block text-xs font-bold text-navy-900">
                          Full Content
                        </label>
                        <span className="text-[10px] text-slate-400">
                          Auto-structures H2, H3, P, bolds loan terms &amp; creates internal links
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {/* Auto-format trigger button */}
                        <button
                          type="button"
                          onClick={handleAutoFormatClick}
                          className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
                          title="Click to automatically bold keywords, structure H2/H3/P headings, and add links to relevant loan products"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Auto-Format, Bold &amp; Interlink</span>
                        </button>

                        {/* View Mode Toggle */}
                        <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-xs font-semibold">
                          <button
                            type="button"
                            onClick={() => setContentViewMode("write")}
                            className={cn(
                              "px-2.5 py-1 rounded-md transition-all cursor-pointer",
                              contentViewMode === "write"
                                ? "bg-white text-navy-900 shadow-xs font-bold"
                                : "text-slate-500 hover:text-navy-900"
                            )}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => setContentViewMode("preview")}
                            className={cn(
                              "px-2.5 py-1 rounded-md transition-all cursor-pointer",
                              contentViewMode === "preview"
                                ? "bg-white text-navy-900 shadow-xs font-bold"
                                : "text-slate-500 hover:text-navy-900"
                            )}
                          >
                            Live Preview
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Notice when auto-format is triggered */}
                    {formatNotice && (
                      <div className="p-3 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-bold flex items-center gap-2 animate-fadeIn">
                        <Check className="w-4 h-4 text-cyan-700 flex-shrink-0" />
                        <span>{formatNotice}</span>
                      </div>
                    )}

                    {/* Formatting Toolbar */}
                    {contentViewMode === "write" && (
                      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                        <button
                          type="button"
                          onClick={() => insertFormatting("**Bold Text**")}
                          className="px-2 py-1 rounded-sm bg-white hover:bg-slate-200 font-bold border border-slate-200 text-slate-700 cursor-pointer"
                        >
                          Bold
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("## Section Heading (H2)")}
                          className="px-2 py-1 rounded-sm bg-white hover:bg-slate-200 font-bold border border-slate-200 text-slate-700 cursor-pointer"
                        >
                          H2 Heading
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("### Sub-section (H3)")}
                          className="px-2 py-1 rounded-sm bg-white hover:bg-slate-200 font-bold border border-slate-200 text-slate-700 cursor-pointer"
                        >
                          H3 Heading
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("- Bullet point")}
                          className="px-2 py-1 rounded-sm bg-white hover:bg-slate-200 border border-slate-200 text-slate-700 cursor-pointer"
                        >
                          Bullet
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("1. Numbered item")}
                          className="px-2 py-1 rounded-sm bg-white hover:bg-slate-200 border border-slate-200 text-slate-700 cursor-pointer"
                        >
                          Numbered List
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("[Personal Loan](/loan-products#personal-loan)")}
                          className="px-2 py-1 rounded-sm bg-white hover:bg-slate-200 text-blue-brand font-bold border border-slate-200 cursor-pointer"
                        >
                          + Loan Link
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("---")}
                          className="px-2 py-1 rounded-sm bg-white hover:bg-slate-200 border border-slate-200 text-slate-700 cursor-pointer"
                        >
                          Divider
                        </button>
                      </div>
                    )}

                    {/* Mode: Write Textarea */}
                    {contentViewMode === "write" ? (
                      <div className="space-y-2">
                        <textarea
                          rows={15}
                          placeholder="Write or paste your article content here... Click 'Auto-Format, Bold & Interlink' to automatically generate H2/H3 tags, bold financial terms, and add links to relevant loan products!"
                          value={formContent}
                          onChange={(e) => setFormContent(e.target.value)}
                          className="w-full p-4 rounded-lg border border-slate-200 text-xs sm:text-sm font-mono leading-relaxed focus:outline-hidden focus:border-blue-brand bg-white"
                        />
                        <label className="flex items-center gap-2 text-xs text-slate-600 font-medium cursor-pointer pt-1">
                          <input
                            type="checkbox"
                            checked={autoFormatOnSave}
                            onChange={(e) => setAutoFormatOnSave(e.target.checked)}
                            className="rounded-sm text-blue-brand"
                          />
                          <span>
                            Automatically bold financial terms, format H2/H3/P tags, and interlink loan products on save/publish
                          </span>
                        </label>
                      </div>
                    ) : (
                      /* Mode: Live Preview */
                      <div className="p-5 rounded-lg border border-slate-200 bg-slate-50/50 min-h-[300px] overflow-y-auto max-h-[500px]">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                          Rendered Article Preview (Shows Headings, Bolding &amp; Links)
                        </div>
                        <div
                          className="article-preview text-xs sm:text-sm leading-relaxed text-slate-700 space-y-4"
                          dangerouslySetInnerHTML={{
                            __html: renderFormattedContentHtml(
                              autoFormatAndInterlinkContent(formContent)
                            ),
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* SEO Section */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                    <h3 className="font-bold text-sm text-navy-900 border-b border-slate-100 pb-2">
                      SEO Settings
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5">
                        SEO Title
                      </label>
                      <input
                        type="text"
                        placeholder="Defaults to blog title"
                        value={formSeoTitle}
                        onChange={(e) => setFormSeoTitle(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-slate-200 text-xs focus:outline-hidden focus:border-blue-brand bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5">
                        Meta Description
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Defaults to short description"
                        value={formSeoDesc}
                        onChange={(e) => setFormSeoDesc(e.target.value)}
                        className="w-full p-3 rounded-lg border border-slate-200 text-xs focus:outline-hidden focus:border-blue-brand bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5">
                        Keywords
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. personal loan, interest rates, eligibility"
                        value={formKeywords}
                        onChange={(e) => setFormKeywords(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg border border-slate-200 text-xs focus:outline-hidden focus:border-blue-brand bg-white"
                      />
                    </div>

                    <label className="flex items-center gap-2 pt-1 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formAllowIndex}
                        onChange={(e) => setFormAllowIndex(e.target.checked)}
                        className="rounded-sm text-blue-brand"
                      />
                      <span>Allow search engines to index this post</span>
                    </label>
                  </div>
                </div>

                {/* Right Column: Publish, Image, Category, Tags */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Publish Box */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                    <h3 className="font-bold text-sm text-navy-900 border-b border-slate-100 pb-2">
                      Publish
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1.5">
                        Status
                      </label>
                      <select
                        value={formStatus}
                        onChange={(e) => setFormStatus(e.target.value as any)}
                        className="w-full h-10 px-3 rounded-lg border border-slate-200 text-xs bg-white text-slate-700"
                      >
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                      </select>
                    </div>

                    <div className="space-y-2 pt-2">
                      <button
                        type="button"
                        onClick={() => handleSaveBlog("draft")}
                        className="w-full h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
                      >
                        Save Draft
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSaveBlog("published")}
                        className="w-full h-10 rounded-lg bg-[#155e75] hover:bg-[#0e7490] text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                      >
                        {editingId ? "Update & Publish" : "Publish Post"}
                      </button>
                    </div>
                  </div>

                  {/* Feature Image Box */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                    <h3 className="font-bold text-sm text-navy-900 border-b border-slate-100 pb-2">
                      Feature Image
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1">
                        Image URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://..."
                        value={formCoverImage}
                        onChange={(e) => setFormCoverImage(e.target.value)}
                        className="w-full h-9 px-3 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>

                    {formCoverImage && (
                      <div className="relative h-28 w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={formCoverImage}
                          alt="Cover Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-navy-900 mb-1">
                        Image Alt Text
                      </label>
                      <input
                        type="text"
                        placeholder="Image description for SEO"
                        value={formImageAlt}
                        onChange={(e) => setFormImageAlt(e.target.value)}
                        className="w-full h-9 px-3 rounded-lg border border-slate-200 text-xs bg-white"
                      />
                    </div>
                  </div>

                  {/* Category Box */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                    <h3 className="font-bold text-sm text-navy-900 border-b border-slate-100 pb-2">
                      Category
                    </h3>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-slate-200 text-xs bg-white text-slate-700"
                    >
                      <option value="Credit Score & CIBIL">Credit Score &amp; CIBIL</option>
                      <option value="Personal Loans">Personal Loans</option>
                      <option value="Business Loans">Business Loans</option>
                      <option value="Home Loans">Home Loans</option>
                      <option value="Loan Comparison">Loan Comparison</option>
                      <option value="Overdraft & Liquidity">Overdraft &amp; Liquidity</option>
                      <option value="Loan Guides">Loan Guides</option>
                    </select>
                  </div>

                  {/* Tags Box */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                    <h3 className="font-bold text-sm text-navy-900 border-b border-slate-100 pb-2">
                      Tags
                    </h3>
                    <input
                      type="text"
                      placeholder="CIBIL, Loan, Interest, MSME"
                      value={formTags}
                      onChange={(e) => setFormTags(e.target.value)}
                      className="w-full h-9 px-3 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                    <small className="text-[10px] text-slate-400 block">
                      Comma separated tags
                    </small>
                  </div>

                  {/* Author Box */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3 shadow-xs">
                    <h3 className="font-bold text-sm text-navy-900 border-b border-slate-100 pb-2">
                      Author
                    </h3>
                    <input
                      type="text"
                      value={formAuthor}
                      onChange={(e) => setFormAuthor(e.target.value)}
                      className="w-full h-9 px-3 rounded-lg border border-slate-200 text-xs bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SEO / PAGE SETTINGS */}
          {activeTab === "seo" && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-navy-900">
                  SEO &amp; Page Settings
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Global search engine optimization controls and site health.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
                <h3 className="font-bold text-sm text-navy-900 border-b border-slate-100 pb-2">
                  Search Engine Indexing
                </h3>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <span className="text-xs font-bold text-navy-900 block">Sitemap XML</span>
                    <small className="text-slate-400 text-[11px]">
                      Auto-generated at /sitemap.xml
                    </small>
                  </div>
                  <Link
                    href="/sitemap.xml"
                    target="_blank"
                    className="text-xs font-bold text-blue-brand hover:underline"
                  >
                    View Sitemap →
                  </Link>
                </div>

                <div className="flex items-center justify-between py-2 border-t border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-navy-900 block">Robots.txt</span>
                    <small className="text-slate-400 text-[11px]">
                      Configured for complete Google and Bing crawling
                    </small>
                  </div>
                  <Link
                    href="/robots.txt"
                    target="_blank"
                    className="text-xs font-bold text-blue-brand hover:underline"
                  >
                    View Robots.txt →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
