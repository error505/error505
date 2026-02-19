import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Clock, Calendar, MessageSquare, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import type { BlogPost } from "@/data/blogTypes";
import blogPostsData from "@/data/blogPosts.json";

const posts = blogPostsData as BlogPost[];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = useMemo(() => {
    if (!search.trim()) return posts;
    const q = search.toLowerCase();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [search]);

  const visible = filtered.slice(0, visibleCount);

  const resolveImage = (src: string) =>
    src.startsWith("./") ? `https://error505.com/${src.slice(2)}` : src;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 lg:ml-64">
        <div className="px-6 md:px-12 py-12">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-2">
              <span className="text-muted-foreground/20 text-6xl md:text-8xl absolute left-1/2 -translate-x-1/2 select-none pointer-events-none font-black">BLOG</span>
              <span className="relative">All Blog Posts</span>
            </h1>
          </motion.div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-10 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setVisibleCount(6); }}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visible.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="block bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-all group h-full"
                >
                  <div className="aspect-video overflow-hidden bg-secondary">
                    <img
                      src={resolveImage(post.image)}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date.replace("Published ", "")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare size={12} />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {visible.length < filtered.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((c) => c + 6)}
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Load More
              </button>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-10">No posts found matching "{search}"</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
