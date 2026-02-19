import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Briefcase, GraduationCap, Award, Star, ArrowLeft, Code } from "lucide-react";
import { Link } from "react-router-dom";

const contactInfo = [
  { icon: Mail, text: "info@error505.com", href: "mailto:info@error505.com" },
  { icon: Phone, text: "+41 (Mobile)" },
  { icon: MapPin, text: "Bern, Bern, Switzerland" },
  { icon: Globe, text: "www.error505.com", href: "https://www.error505.com" },
  { icon: Linkedin, text: "linkedin.com/in/igor-iric", href: "https://www.linkedin.com/in/igor-iric" },
  { icon: Github, text: "github.com/error505", href: "https://github.com/error505" },
];

const coreCompetencies = [
  { title: "Microservices on Azure", desc: "Migration and optimization of distributed systems using Azure Kubernetes Services (AKS) and VNET security architectures" },
  { title: "Agentic AI Architecture", desc: "Design and deployment of intelligent multi-agent systems" },
  { title: "Azure AI & Cloud Solutions", desc: "Azure OpenAI, Azure AI Search, Azure Machine Learning, Infrastructure as Code (IaC)" },
  { title: "Retrieval-Augmented Generation (RAG)", desc: "Advanced implementations for enterprise data retrieval and decision-making" },
  { title: "End-to-End Automation", desc: "GitHub Actions, Terraform, Azure DevOps, CI/CD pipelines" },
  { title: "Data Analytics & Visualization", desc: "Power BI, Text-to-SQL, Predictive Analytics" },
  { title: "Cloud Security & Compliance", desc: "Advanced cloud security strategies, data integrity, and regulatory compliance" },
];

const experience = [
  {
    title: "Senior AI Cloud Solutions Architect",
    company: "Plain Concepts",
    period: "June 2024 – Present",
    location: "Frankfurt, Germany",
    bullets: [
      "Contributed to presales efforts including proposal writing, solution scoping, and technical presentations for enterprise clients.",
      "Architecting the next-generation Nestlé Finance Assistant, a multi-agent system leveraging advanced RAG patterns, Power BI integration, and Snowflake Cortex.",
      "Designed and implemented scalable Agentic AI solutions leveraging Azure OpenAI and advanced RAG patterns.",
      "Built AI-driven systems to solve real-world business challenges in finance, procurement, supply chain optimization, transportation, and utility industries.",
    ],
  },
  {
    title: "Founder & Principal Architect",
    company: "CortexGrid (Error505)",
    period: "August 2025 – Present",
    location: "Global",
    bullets: [
      "Developed innovative, secure, and scalable AI-driven solutions, including automated AI crypto trading bots.",
      "Built Error505 AI Agent Builder, a no-code tool generating production-ready Python code for AI agent hierarchies.",
      "Architected comprehensive AI stacks automating enterprise functions including lead generation, marketing automation, security operations, and QA.",
    ],
  },
  {
    title: "Senior Azure Cloud Solutions Architect",
    company: "Nordcloud (IBM Company)",
    period: "February 2024 – June 2024",
    location: "Germany",
    bullets: [
      "Served as CTO-level consultant, leading presales activities and shaping high-level Azure cloud transformation strategies.",
      "Delivered robust cloud infrastructure solutions, optimized with CI/CD pipelines and IaC tools.",
      "Consulted stakeholders to identify business needs, creating innovative proofs-of-concept.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Plain Concepts",
    period: "September 2020 – February 2024",
    location: "Frankfurt Rhine-Main Area",
    bullets: [
      "Led architecture for major AI integration projects with enterprise clients such as Nestlé and Coca-Cola.",
      "Implemented secure Azure-based document interaction systems using Azure OpenAI, Forms Recognizer, and advanced GPT models.",
      "Managed large-scale migrations and integrations, modernizing infrastructure and streamlining operations.",
    ],
  },
  {
    title: "Additional Experience",
    company: "Capgemini, SAP, Namics, Lorenz Life Sciences & more",
    period: "2005 – 2020",
    location: "",
    bullets: [
      "Led full-stack development, cloud migrations, and large-scale system integrations across industries including finance, healthcare, automotive, and manufacturing.",
    ],
  },
];

const certifications = [
  "Microsoft Certified: Azure Solutions Architect Expert (Valid until Mar 2027)",
  "Microsoft Certified: Cybersecurity Architect Expert (Valid until Feb 2027)",
  "Accredited GitHub Partner Trainer: Advanced Security & Admin (Valid until Jun 2027)",
  "Microsoft Certified: Security Operations Analyst Associate (Valid until Feb 2027)",
  "Microsoft Copilot for Security Ninja",
  "Microsoft AI Solutions (Azure OpenAI, Vision, NLP, Machine Learning)",
  "AZ-700: Microsoft Azure Networking Solutions",
  "Sitecore 9.0 Certified Platform Associate Developer",
  "Cisco Certified Network Associate Industrial (CCNA I)",
];

const technicalSkills = [
  { category: "Cloud Platforms", skills: "Azure, AWS, GCP" },
  { category: "AI & ML Frameworks", skills: "Azure OpenAI, Azure AI Vision, Azure Machine Learning, Azure AI Foundry, RAG, CrewAI, Agno, OpenAI SDK, GitHub Copilot" },
  { category: "Programming", skills: "Python, C#, .NET Core, JavaScript, TypeScript" },
  { category: "DevOps & IaC", skills: "GitHub Actions, Terraform, Bicep, Azure DevOps" },
  { category: "Analytics & Databases", skills: "Power BI, Azure MSSQL, Azure AI Search, Snowflake Cortex" },
  { category: "Security", skills: "Network Security, Cloud Compliance, Cybersecurity Architecture" },
];

const education = [
  { degree: "Specialist of Computer Science B.Sc.IT – Spec. CS", school: "Pan-European University \"APEIRON\"", period: "2014 – 2015" },
  { degree: "Bachelor of Information Technologies - B.IT", school: "Pan-European University \"APEIRON\"", period: "2011 – 2014" },
];

const SectionCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card rounded-xl border border-border p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
      <Icon size={20} className="text-primary" />
    </div>
    <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">{title}</h2>
  </div>
);

const Resume = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 lg:ml-64">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/20" />
          <div className="relative z-10 px-6 md:px-12 py-12 md:py-16">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-accent shrink-0">
                <img src={profilePhoto} alt="Igor Iric" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Igor Iric</h1>
                <p className="text-lg text-primary mt-1">Senior AI Cloud Solutions Architect</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              {contactInfo.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon size={14} className="text-primary" />
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 md:px-12 py-8 space-y-8 max-w-5xl">
          {/* Professional Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <SectionCard>
              <SectionTitle icon={Star} title="Professional Summary" />
              <p className="text-muted-foreground leading-relaxed">
                Actively sharing Cloud and AI expertise with a community of over 26,000 followers on LinkedIn, accompanied by extensive GitHub repositories demonstrating practical implementations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Innovative and results-driven AI Solutions Architect with over 18 years of extensive experience in designing, developing, and deploying advanced Agentic AI enterprise-grade platforms primarily on Microsoft Azure. Proven expertise in implementing scalable cloud-based AI solutions, leveraging Azure OpenAI, Retrieval-Augmented Generation (RAG), Power BI integration, and advanced analytics. Author of <em>GitHub for Next-Generation Coders</em> and creator of no-code platforms for AI agent development.
              </p>
            </SectionCard>
          </motion.div>

          {/* Core Competencies */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <SectionCard>
              <SectionTitle icon={Star} title="Core Competencies" />
              <div className="grid gap-3">
                {coreCompetencies.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <div>
                      <span className="font-medium text-foreground">{item.title}:</span>{" "}
                      <span className="text-muted-foreground">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </motion.div>

          {/* Professional Experience */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <SectionCard>
              <SectionTitle icon={Briefcase} title="Professional Experience" />
              <div className="space-y-8">
                {experience.map((job, i) => (
                  <div key={i} className={i > 0 ? "border-t border-border pt-6" : ""}>
                    <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                    <p className="text-primary text-sm font-medium mt-1">{job.company}</p>
                    <p className="text-muted-foreground text-xs mt-1">{job.period}{job.location ? ` | ${job.location}` : ""}</p>
                    <ul className="mt-3 space-y-2">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1 shrink-0">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionCard>
          </motion.div>

          {/* Technical Skills */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <SectionCard>
              <SectionTitle icon={Star} title="Technical Skills" />
              <div className="grid gap-3">
                {technicalSkills.map((item) => (
                  <div key={item.category} className="flex gap-3">
                    <span className="text-primary font-medium text-sm shrink-0 w-40">{item.category}</span>
                    <span className="text-muted-foreground text-sm">{item.skills}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </motion.div>

          {/* Certifications */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <SectionCard>
              <SectionTitle icon={Award} title="Certifications" />
              <div className="grid gap-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-accent shrink-0">✓</span>
                    {cert}
                  </div>
                ))}
              </div>
            </SectionCard>
          </motion.div>

          {/* Education */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <SectionCard>
              <SectionTitle icon={GraduationCap} title="Education" />
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i}>
                    <h3 className="font-medium text-foreground">{edu.degree}</h3>
                    <p className="text-primary text-sm">{edu.school}</p>
                    <p className="text-muted-foreground text-xs mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </motion.div>

          {/* Publications */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <SectionCard>
              <SectionTitle icon={Star} title="Publications" />
              <p className="text-muted-foreground text-sm">
                <span className="font-medium text-foreground">GitHub for Next-Generation Coders</span> — Author of a comprehensive guide to GitHub, covering topics from basic concepts to advanced features.
              </p>
            </SectionCard>
          </motion.div>

          {/* Selected Projects & Demos */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
            <SectionCard>
              <SectionTitle icon={Code} title="Selected Projects & Demos" />

              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-foreground">Agent Canvas — AI-Agent-Studio</h4>
                  <p className="text-muted-foreground mt-1">Visual builder for Microsoft Agent Framework (MAF) solutions. Used for prototyping, evaluating and exporting multi-agent systems with a paired FastAPI backend + React frontend.</p>
                  <div className="mt-2 grid gap-1">
                    <span>Highlights:</span>
                    <ul className="list-disc ml-5 mt-1">
                      <li>Prompt-to-canvas flow with seeded chat handoff.</li>
                      <li>Document-grounded prompts and drag-and-drop authoring for agents, tools and MCP connectors.</li>
                      <li>Live Preview sandbox (WebContainers), playbooks, evaluation harness and Azure deploy button.</li>
                      <li>Supabase-backed auth & persistence (GitHub / Microsoft Entra / email magic links).</li>
                    </ul>
                    <a href="https://github.com/cortex-grid/AI-Agent-Studio" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-2 inline-block">View repository on GitHub</a>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground">Cloud Visualizer Pro</h4>
                  <p className="text-muted-foreground mt-1">Open-source tool for visually designing Azure architectures, generating grounded IaC (Bicep/Terraform) and orchestrating deployments. Integrates MAF and MCP grounding for validated IaC output.</p>
                  <div className="mt-2 grid gap-1">
                    <span>Highlights:</span>
                    <ul className="list-disc ml-5 mt-1">
                      <li>Visual diagram editor with grounded IaC generation and MCP-backed validation.</li>
                      <li>Agent-backed architecture critic + fixer producing validated Bicep code snippets.</li>
                      <li>Docker & local dev flows, plus optional Azure deploy automation.</li>
                    </ul>
                    <a href="https://github.com/error505/azure-cloud-ai-visualizer" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-2 inline-block">View repository on GitHub</a>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground">AI Architecture Critic — Workshop</h4>
                  <p className="text-muted-foreground mt-1">Conference demo and workshop covering Agentic AI design, MCP grounding and IaC generation. Demonstrates end-to-end critique, fix and visualizer pipelines used in live sessions.</p>
                </div>
              </div>
            </SectionCard>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
