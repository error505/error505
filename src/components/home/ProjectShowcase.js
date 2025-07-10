// src/components/home/ProjectShowcase.js
import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaBrain, FaCloud } from 'react-icons/fa';
import { SiMicrosoft, SiReact, SiPython, SiDocker } from 'react-icons/si';

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Enterprise Analytics Platform",
      description: "A comprehensive analytics platform leveraging Azure OpenAI and multi-agent systems for enterprise insights.",
      tech: ["Azure OpenAI", "Python", "React", "Docker"],
      icon: <FaBrain />,
      color: "#667eea",
      github: "https://github.com/error505",
      demo: "https://error505.com"
    },
    {
      id: 2,
      title: "GitHub Advanced Security Workshop",
      description: "Interactive training platform for GitHub Advanced Security features and best practices.",
      tech: ["GitHub Actions", "JavaScript", "Azure", "DevSecOps"],
      icon: <FaRocket />,
      color: "#764ba2",
      github: "https://github.com/error505",
      demo: "https://error505.com"
    },
    {
      id: 3,
      title: "Azure AI Search RAG Implementation",
      description: "Advanced retrieval-augmented generation system using Azure AI Search and OpenAI for enterprise knowledge management.",
      tech: ["Azure AI Search", "OpenAI", "Python", "FastAPI"],
      icon: <FaCloud />,
      color: "#667eea",
      github: "https://github.com/error505",
      demo: "https://error505.com"
    },
    {
      id: 4,
      title: "Multi-Agent Orchestration Framework",
      description: "Scalable framework for orchestrating multiple AI agents in enterprise environments.",
      tech: ["Python", "Azure", "AI Agents", "Microservices"],
      icon: <SiMicrosoft />,
      color: "#764ba2",
      github: "https://github.com/error505",
      demo: "https://error505.com"
    }
  ];

  return (
    <section className="project-showcase" id="projects">
      <div className="container">
        <div className="heading-container text-center">
          <h2 className="modern-heading">Featured Projects</h2>
          <p className="section-subtitle">Showcase of innovative AI and cloud solutions</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card fade-in-up ${index % 2 === 1 ? 'stagger-animation' : ''}`}
            >
              <div className="project-header">
                <div 
                  className="project-icon"
                  style={{ backgroundColor: project.color }}
                >
                  {project.icon}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
