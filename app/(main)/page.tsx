import Link from "next/link";
import imageFake from "@/public/images/about-1.jpg";
import Image from "next/image";

export default async function Home() {
  const newestPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn the basics of Next.js and how to create your first app.",
      author: "Jane Doe",
      date: "April 25, 2025",
      readTime: "5 min read",
      image: "/api/placeholder/800/600",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      excerpt: "Advanced techniques for using Tailwind CSS in your projects.",
      author: "John Smith",
      date: "April 23, 2025",
      readTime: "8 min read",
      image: "/api/placeholder/800/600",
    },
    {
      id: 3,
      title: "Modern React Patterns",
      excerpt:
        "Discover the latest patterns and best practices in React development.",
      author: "Alex Johnson",
      date: "April 20, 2025",
      readTime: "6 min read",
      image: "/api/placeholder/800/600",
    },
  ];

  const popularPosts = [
    {
      id: 4,
      title: "Building a Full-Stack App with Next.js",
      excerpt:
        "A complete guide to building a full-stack application with Next.js.",
      author: "Sarah Wilson",
      date: "April 15, 2025",
      readTime: "12 min read",
      image: "/api/placeholder/800/600",
    },
    {
      id: 5,
      title: "Server-Side Rendering vs Client-Side Rendering",
      excerpt: "Understanding the differences and when to use each approach.",
      author: "Mark Brown",
      date: "April 10, 2025",
      readTime: "7 min read",
      image: "/api/placeholder/800/600",
    },
    {
      id: 6,
      title: "Optimizing Performance in Next.js",
      excerpt: "Tips and tricks to make your Next.js application blazing fast.",
      author: "Lisa Chen",
      date: "April 5, 2025",
      readTime: "9 min read",
      image: "/api/placeholder/800/600",
    },
  ];
  return (
    <main className="flex-grow bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Welcome to Dev Blog</h1>
            <p className="text-xl mb-6">
              The latest news, tutorials, and insights for developers and tech
              enthusiasts.
            </p>
            <Link href="/subscribe">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium cursor-pointer">
                Start to Newsletter
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newest Posts Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Newest Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newestPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={imageFake}
                  className="object-cover object-top"
                  alt="Mountains and forests with two cabins"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>
                      {post.date} • {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog?type=newest">
              <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                View all Blogs →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Posts Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={imageFake}
                  className="object-cover object-top"
                  alt="Mountains and forests with two cabins"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>
                      {post.date} • {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog?type=popular">
              <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                View all popular blog →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get the latest blogs, tutorials, and updates delivered straight to
            your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="border border-amber-50 flex-grow px-4 py-3 rounded-l-lg text-white focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
