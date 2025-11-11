import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Reasons to Move to Southwest Florida in 2025",
    excerpt: "Discover why thousands are choosing Southwest Florida as their new home. From pristine beaches to vibrant communities...",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    date: "November 5, 2025",
    author: "Tony Harvey",
    slug: "top-reasons-move-to-southwest-florida",
  },
  {
    id: 2,
    title: "Naples vs. Marco Island: Which is Right for You?",
    excerpt: "Both offer stunning coastal living, but which community fits your lifestyle? We compare these two popular destinations...",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    date: "October 28, 2025",
    author: "Laura Harvey",
    slug: "naples-vs-marco-island",
  },
  {
    id: 3,
    title: "First-Time Home Buyer's Guide for Southwest Florida",
    excerpt: "Everything you need to know about buying your first home in our beautiful region. From financing to finding the perfect property...",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    date: "October 20, 2025",
    author: "Laura Harvey",
    slug: "first-time-buyer-guide",
  },
  {
    id: 4,
    title: "Waterfront Living: What You Need to Know",
    excerpt: "Thinking about waterfront property? Learn about boat docks, seawalls, insurance, and what makes waterfront living special...",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    date: "October 12, 2025",
    author: "Tony Harvey",
    slug: "waterfront-living-guide",
  },
  {
    id: 5,
    title: "Cape Coral: The Hidden Gem of Southwest Florida",
    excerpt: "With over 400 miles of canals, Cape Coral offers unique opportunities for boaters and water enthusiasts. Discover why...",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    date: "October 5, 2025",
    author: "Tony Harvey",
    slug: "cape-coral-hidden-gem",
  },
  {
    id: 6,
    title: "Preparing Your Home for Sale: Expert Tips",
    excerpt: "Get top dollar for your property with our proven strategies for staging, pricing, and marketing your Southwest Florida home...",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    date: "September 28, 2025",
    author: "Laura Harvey",
    slug: "preparing-home-for-sale",
  },
];

export default function Blog() {
  return (
    <div className="py-12">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Real Estate Blog
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Expert insights, market updates, and tips for Southwest Florida real estate
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-700 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Have Questions About Southwest Florida Real Estate?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help! Contact Tony & Laura Harvey for expert guidance 
            tailored to your unique needs.
          </p>
          <a
            href="tel:239-777-0155"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
          >
            Call Us: 239-777-0155
          </a>
        </section>
      </div>
    </div>
  );
}
