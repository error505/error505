import { motion } from "framer-motion";

const projects = [
  {
    title: "AI-Powered Enterprise Analytics Platform",
    desc: "A comprehensive analytics platform leveraging Azure OpenAI and multi-agent systems for enterprise insights.",
    tags: ["Azure OpenAI", "Python", "React", "Docker"],
  },
  {
    title: "GitHub Advanced Security Workshop",
    desc: "Interactive training platform for GitHub Advanced Security features and best practices.",
    tags: ["GitHub Actions", "JavaScript", "Azure", "DevSecOps"],
  },
  {
    title: "Azure AI Search RAG Implementation",
    desc: "Advanced retrieval-augmented generation system using Azure AI Search and OpenAI for enterprise knowledge management.",
    tags: ["Azure AI Search", "OpenAI", "Python", "FastAPI"],
  },
  {
    title: "Multi-Agent Orchestration Framework",
    desc: "Scalable framework for orchestrating multiple AI agents in enterprise environments.",
    tags: ["Python", "Azure", "AI Agents", "Microservices"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcase of innovative AI and cloud solutions</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="project-card p-6"
          >
            <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
