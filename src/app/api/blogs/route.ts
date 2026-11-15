import { NextRequest, NextResponse } from "next/server";
import { getBlogs, saveBlog, deleteBlog } from "@/lib/blogs";
import { autoFormatAndInterlinkContent } from "@/lib/blogFormatter";
import { BlogPost } from "@/types";

export async function GET() {
  const blogs = getBlogs();
  return NextResponse.json({ success: true, blogs });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.title || !body.slug) {
      return NextResponse.json(
        { success: false, error: "Title and slug are required" },
        { status: 400 }
      );
    }

    const rawContent = body.content || body.fullContent || "";
    const processedContent =
      body.autoFormat === false
        ? rawContent
        : autoFormatAndInterlinkContent(rawContent);

    const blog: BlogPost = {
      id: body.id || `blog-${Date.now()}`,
      slug: body.slug.toLowerCase().trim().replace(/[^a-z0-9-]/g, "-"),
      title: body.title,
      excerpt: body.excerpt || body.shortDescription || "",
      content: processedContent,
      category: body.category || "General",
      author: body.author || "Fast Fincorp Editorial Team",
      date:
        body.date ||
        new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      readTime: body.readTime || "5 min read",
      coverImage:
        body.coverImage ||
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
      imageAlt: body.imageAlt || body.title,
      tags: Array.isArray(body.tags)
        ? body.tags
        : typeof body.tags === "string"
        ? body.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
        : ["Loan Guide"],
      status: body.status === "draft" ? "draft" : "published",
      seoTitle: body.seoTitle || body.title,
      seoDescription: body.seoDescription || body.excerpt || "",
      keywords: body.keywords || "",
      allowIndex: body.allowIndex !== false,
    };

    const updatedBlogs = saveBlog(blog);
    return NextResponse.json({ success: true, blog, blogs: updatedBlogs });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to save blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Blog ID is required" },
        { status: 400 }
      );
    }

    const updatedBlogs = deleteBlog(id);
    return NextResponse.json({ success: true, blogs: updatedBlogs });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
