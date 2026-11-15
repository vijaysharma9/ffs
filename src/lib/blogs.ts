import fs from "fs";
import path from "path";
import { BlogPost } from "@/types";
import { INITIAL_BLOGS } from "@/data/blogs";

const BLOGS_FILE_PATH = path.join(process.cwd(), "src", "data", "blogs.json");

export function getBlogs(): BlogPost[] {
  try {
    if (fs.existsSync(BLOGS_FILE_PATH)) {
      const data = fs.readFileSync(BLOGS_FILE_PATH, "utf8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
    // Fallback: write initial blogs to json and return
    fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(INITIAL_BLOGS, null, 2), "utf8");
    return INITIAL_BLOGS;
  } catch (error) {
    console.error("Error reading blogs:", error);
    return INITIAL_BLOGS;
  }
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const blogs = getBlogs();
  return blogs.find((b) => b.slug === slug);
}

export function saveBlog(blog: BlogPost): BlogPost[] {
  const blogs = getBlogs();
  const existingIndex = blogs.findIndex((b) => b.id === blog.id || b.slug === blog.slug);

  if (existingIndex >= 0) {
    blogs[existingIndex] = { ...blogs[existingIndex], ...blog };
  } else {
    blogs.unshift(blog);
  }

  try {
    fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(blogs, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving blog:", error);
  }

  return blogs;
}

export function deleteBlog(id: string): BlogPost[] {
  const blogs = getBlogs();
  const filtered = blogs.filter((b) => b.id !== id && b.slug !== id);

  try {
    fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(filtered, null, 2), "utf8");
  } catch (error) {
    console.error("Error deleting blog:", error);
  }

  return filtered;
}
