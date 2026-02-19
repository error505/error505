import { motion } from "framer-motion";
import { Cloud, Brain, Github, BarChart3, Server, Shield } from "lucide-react";

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "250+", label: "Happy Clients" },
  { value: "650+", label: "Projects Done" },
  { value: "25K+", label: "LinkedIn Followers" },
];

const expertise = [
  { icon: Cloud, title: "Azure AI", desc: "Azure OpenAI, AI Search, Machine Learning, and Agentic AI Solutions" },
  { icon: Brain, title: "AI & RAG", desc: "Retrieval-Augmented Generation and Multi-Agent AI Systems" },
  { icon: Github, title: "GitHub", desc: "Certified GitHub Partner Trainer and \"GitHub for Next-Generation Coders\" Author" },
  { icon: BarChart3, title: "Power BI", desc: "Advanced Analytics, Data Visualization, and Business Intelligence" },
  { icon: Server, title: "Cloud Platforms", desc: "Multi-cloud expertise: Azure, AWS, GCP architectures" },
  { icon: Shield, title: "Cybersecurity", desc: "Azure Cybersecurity Architect Expert & Security Operations" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Know Me More</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              I'm Igor Iric, an <span className="text-primary">AI Solutions Architect</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I help you build brand for your business at an affordable price. I have over 18 years of extensive experience in designing, developing, and deploying advanced Agentic AI enterprise-grade platforms primarily on Microsoft Azure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a Senior AI Cloud Solutions Architect, I specialize in implementing scalable cloud-based AI solutions, leveraging Azure OpenAI, Retrieval-Augmented Generation (RAG), Power BI integration, and advanced analytics.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-3"
        >
          {[
            { label: "Name", value: "Igor Iric" },
            { label: "Email", value: "info@error505.com" },
            { label: "Age", value: "38" },
            { label: "From", value: "Frankfurt, Germany" },
          ].map((item) => (
            <div key={item.label}>
              <span className="text-muted-foreground text-sm">{item.label}:</span>
              <span className="text-foreground ml-2 text-sm font-medium">{item.value}</span>
            </div>
          ))}
          <a href="#" className="inline-block mt-4 px-6 py-2 rounded-full border border-primary text-primary text-sm hover:bg-primary hover:text-primary-foreground transition-all">
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="stat-card"
          >
            <div className="text-3xl font-heading font-bold text-foreground">{stat.value}</div>
            <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Expertise cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {expertise.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all"
          >
            <item.icon className="text-primary mb-3" size={28} />
            <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
