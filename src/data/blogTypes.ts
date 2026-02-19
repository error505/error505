export interface BlogContentItem {
  type: "paragraph" | "heading" | "image" | "list" | "code" | "link" | "markdown";
  text?: string;
  level?: number;
  src?: string;
  alt?: string;
  items?: string[];
  language?: string;
  href?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  comments: string;
  content: BlogContentItem[];
}
