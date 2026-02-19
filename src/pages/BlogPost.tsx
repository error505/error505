import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, MessageSquare } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import type { BlogPost as BlogPostType, BlogContentItem } from "@/data/blogTypes";
import blogPostsData from "@/data/blogPosts.json";

const posts = blogPostsData as BlogPostType[];

const resolveImage = (src: string) =>
  src.startsWith("./") ? `https://error505.com/${src.slice(2)}` : src;

const renderMarkdownLinks = (text: string) => {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return (
        <a key={i} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          {match[1]}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const ContentRenderer = ({ item }: { item: BlogContentItem }) => {
  switch (item.type) {
    case "paragraph":
      return <p className="text-muted-foreground leading-relaxed mb-4">{renderMarkdownLinks(item.text || "")}</p>;

    case "heading":
      if (item.level === 2)
        return <h2 className="text-2xl font-heading font-bold text-primary mt-10 mb-4">{item.text}</h2>;
      if (item.level === 3)
        return <h3 className="text-lg font-heading font-semibold text-foreground mt-6 mb-3">{item.text}</h3>;
      return <h4 className="text-base font-heading font-medium text-foreground mt-4 mb-2">{item.text}</h4>;

    case "image":
      return (
        <figure className="my-6">
          <img
            src={resolveImage(item.src || "")}
            alt={item.alt || ""}
            className="w-full rounded-lg border border-border"
            loading="lazy"
          />
          {item.alt && <figcaption className="text-xs text-muted-foreground mt-2 text-center">{item.alt}</figcaption>}
        </figure>
      );

    case "list":
      return (
        <ul className="space-y-2 mb-4 ml-4">
          {item.items?.map((li, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-accent shrink-0 mt-0.5">▸</span>
              <span>{renderMarkdownLinks(li)}</span>
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <div className="my-4 rounded-lg overflow-hidden border border-border">
          {item.language && (
            <div className="px-4 py-2 bg-secondary text-xs text-muted-foreground font-mono">{item.language}</div>
          )}
          <pre className="p-4 bg-card overflow-x-auto">
            <code className="text-sm text-foreground font-mono whitespace-pre">{item.text}</code>
          </pre>
        </div>
      );

    case "link":
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-primary hover:underline text-sm mb-2"
        >
          🔗 {item.text}
        </a>
      );

    case "markdown":
      return <div className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-wrap">{item.text}</div>;

    default:
      return null;
  }
};

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 lg:ml-64 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 lg:ml-64">
        <article className="px-6 md:px-12 lg:px-20 py-12 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date.replace("Published ", "")}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare size={14} />
                {post.comments}
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                {post.category}
              </span>
            </div>

            <div className="prose-custom">
              {post.content.map((item, i) => (
                <ContentRenderer key={i} item={item} />
              ))}
            </div>
          </motion.div>

          <div className="mt-12 pt-6 border-t border-border">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft size={16} />
              Back to all posts
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage;
