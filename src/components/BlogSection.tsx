import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const posts = [
  {
    id: "azure-solutions-architect-certification-path",
    title: "Your Path to Becoming an Azure Solutions Architect Expert",
    category: "Cloud",
    date: "Published 05.11.2024",
    readTime: "10 min read",
  },
  {
    id: "azure-gatekeeper-pattern",
    title: "Understanding the Azure Gatekeeper Pattern: A Comprehensive Guide",
    category: "Cloud",
    date: "Published 01.11.2024",
    readTime: "15 min read",
  },
  {
    id: "azure-sidecar-pattern",
    title: "Implementing the Azure Sidecar Pattern: A Complete Guide",
    category: "Cloud",
    date: "Published 22.10.2024",
    readTime: "10 min read",
  },
  {
    id: "azure-devops-ai-certification-path",
    title: "Mastering Azure DevOps & AI: Your Certification Path and Applied Skills",
    category: "Cloud",
    date: "Published 18.10.2024",
    readTime: "10 min read",
  },
  {
    id: "publisher-subscriber-pattern-on-azure",
    title: "Implementing the Publisher-Subscriber Pattern on Azure: A Complete Guide",
    category: "Cloud",
    date: "Published 12.09.2024",
    readTime: "85 min read",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6 md:px-12 bg-card/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">My Blog Posts</p>
      </motion.div>

      <div className="space-y-4 max-w-3xl">
        {posts.map((post, i) => (
          <motion.a
            key={post.id}
            href={`/blog/${post.id}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/40 transition-all group"
          >
            <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium shrink-0 w-fit">
              {post.category}
            </span>
            <span className="text-foreground text-sm font-medium group-hover:text-primary transition-colors flex-1">
              {post.title}
            </span>
            <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {post.date.replace("Published ", "")}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>
            <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 hidden sm:block" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
