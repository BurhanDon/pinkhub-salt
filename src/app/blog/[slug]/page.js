import PageBanner from "@/components/PageBanner";
import blogs from "@/data/blogs.json";
import Image from "next/image";

export default function BlogPost({ params }) {
  const blog = blogs.find((b) => b.id === params.slug);

  if (!blog) {
    return <h1 className="text-center py-20 text-2xl">Blog not found</h1>;
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "" }, // Current page
  ];

  return (
    <>
      <PageBanner
        title="Our Blog"
        subtitle="Insights, articles, and news from the Himalayan salt industry."
        breadcrumbs={breadcrumbs}
        imageUrl="/images/himalayan-salt-bg.jpg"
      />
      <div className="max-w-4xl mx-auto px-5 py-10">
        {/* 3. Use the new PageBanner component */}
        <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.name}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-3">{blog.name}</h1>
        <p className="text-primary font-semibold uppercase mb-6">
          {blog.category}
        </p>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
    </>
  );
}
