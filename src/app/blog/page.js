// app/blog/page.js
import Link from "next/link";

// Placeholder data for the blog list
const placeholderBlogs = [
  {
    slug: "my-first-post",
    title: "My First Blog Post",
    excerpt:
      "This is a short summary of the first blog post. It gives a brief idea of the content inside.",
  },
  {
    slug: "another-post",
    title: "Another Interesting Post",
    excerpt:
      "This is a summary for the second post. More content will be on the detail page.",
  },
  {
    slug: "getting-started",
    title: "Getting Started with Our Service",
    excerpt:
      "A helpful guide for new customers to understand how everything works.",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 pb-4 border-b">
        Our Blog
      </h1>

      {/* List of Blog Posts */}
      <div className="space-y-8">
        {placeholderBlogs.map((blog) => (
          <article key={blog.slug} className="border-b pb-8">
            {/* Post Title */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-3">
              <Link
                href={`/blog/${blog.slug}`}
                className="hover:text-blue-600 transition-colors"
              >
                {blog.title}
              </Link>
            </h2>

            {/* Post Excerpt */}
            <p className="text-gray-600 leading-relaxed mb-4">{blog.excerpt}</p>

            {/* Read More Link */}
            <Link
              href={`/blog/${blog.slug}`}
              className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Read More &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
