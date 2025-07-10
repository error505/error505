// src/components/Resume.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div className="resume">
      {/* Header Section */}
      <div className="resume-header">
        <h1>Igor Iric</h1>
        <p>Senior AI Cloud Solutions Architect</p>
      </div>

      {/* Contact Information */}
      <div className="resume-contact">
        <p><FontAwesomeIcon icon={faEnvelope} /> iric_i@hotmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> +49 (Mobile)</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Frankfurt, Hesse, Germany</p>
        <p><FontAwesomeIcon icon={faGlobe} /> <a href="https://error505.github.io/error505/" target="_blank" rel="noopener noreferrer">error505.github.io/error505</a></p>
        <p><FontAwesomeIcon icon={faGlobe} /> <a href="https://www.error505.com" target="_blank" rel="noopener noreferrer">www.error505.com</a></p>
        <p><FontAwesomeIcon icon={['fab', 'linkedin']} /> <a href="https://www.linkedin.com/in/igor-iric/" target="_blank" rel="noopener noreferrer">linkedin.com/in/igor-iric</a></p>
        <p><FontAwesomeIcon icon={['fab', 'github']} /> <a href="https://github.com/error505" target="_blank" rel="noopener noreferrer">github.com/error505</a></p>
      </div>

      {/* Professional Summary Section */}
      <div className="resume-content">
        <h2>Professional Summary</h2>
        <p>
          Actively sharing Cloud and AI expertise with a community of over 25,000 followers on LinkedIn, accompanied by extensive GitHub repositories demonstrating practical implementations.
        </p>
        <p>
          Innovative and results-driven AI Solutions Architect with over 18 years of extensive experience in designing, developing, and deploying advanced Agentic AI enterprise-grade platforms primarily on Microsoft Azure. Proven expertise in implementing scalable cloud-based AI solutions, leveraging Azure OpenAI, Retrieval-Augmented Generation (RAG), Power BI integration, and advanced analytics. Passionate about automating complex workflows and empowering businesses through transformative AI strategies. Author of <em>GitHub for Next-Generation Coders</em> and creator of no-code platforms for AI agent development.
        </p>
      </div>

      {/* Core Competencies Section */}
      <div className="resume-content">
        <h2>Core Competencies</h2>
        <ul>
          <li><strong>Microservices on Azure:</strong> Migration and optimization of distributed systems using Azure Kubernetes Services (AKS) and VNET security architectures</li>
          <li><strong>Agentic AI Architecture:</strong> Design and deployment of intelligent multi-agent systems</li>
          <li><strong>Azure AI & Cloud Solutions:</strong> Azure OpenAI, Azure AI Search, Azure Machine Learning, Infrastructure as Code (IaC)</li>
          <li><strong>Retrieval-Augmented Generation (RAG):</strong> Advanced implementations for enterprise data retrieval and decision-making</li>
          <li><strong>End-to-End Automation:</strong> GitHub Actions, Terraform, Azure DevOps, CI/CD pipelines</li>
          <li><strong>Data Analytics & Visualization:</strong> Power BI, Text-to-SQL, Predictive Analytics</li>
          <li><strong>Cloud Security & Compliance:</strong> Advanced cloud security strategies, data integrity, and regulatory compliance</li>
        </ul>
      </div>

      {/* Work Experience Section */}
      <div className="resume-content">
        <h2>Professional Experience</h2>
        
        <div className="resume-job">
          <h3>Senior AI Cloud Solutions Architect</h3>
          <h4>Plain Concepts | June 2024 – Present | Frankfurt, Germany</h4>
          <ul>
            <li>Contributed to presales efforts including proposal writing, solution scoping, and technical presentations for enterprise clients.</li>
            <li>Currently architecting and developing the next-generation Nestlé Finance Assistant, a multi-agent system leveraging advanced Retrieval-Augmented Generation (RAG) patterns, Power BI integration, and Snowflake Cortex for dynamic financial data interaction and insights.</li>
            <li>Designed and implemented scalable Agentic AI solutions leveraging Azure OpenAI and advanced RAG patterns.</li>
            <li>Built AI-driven systems to solve real-world business challenges in finance, procurement, supply chain optimization, transportation, and utility industries.</li>
            <li>Migrated and modernized legacy systems into cloud-native architectures, significantly improving efficiency and operational agility.</li>
          </ul>
        </div>

        <div className="resume-job">
          <h3>Founder & Principal Architect</h3>
          <h4>Error 505 | June 2006 – Present | Global</h4>
          <ul>
            <li>Developed innovative, secure, and scalable AI-driven solutions, including automated AI crypto trading bots and intelligent decision-making systems.</li>
            <li>Built Error505 AI Agent Builder, a no-code tool generating production-ready Python code for AI agent hierarchies.</li>
            <li>Architected and launched comprehensive AI stacks that automate enterprise functions, including lead generation, marketing automation, security operations, and QA processes.</li>
          </ul>
        </div>

        <div className="resume-job">
          <h3>Senior Azure Cloud Solutions Architect</h3>
          <h4>Nordcloud (IBM Company) | February 2024 – June 2024 | Germany</h4>
          <ul>
            <li>Served as CTO-level consultant, leading presales activities and shaping high-level Azure cloud transformation strategies.</li>
            <li>Delivered robust cloud infrastructure solutions, optimized with CI/CD pipelines and IaC tools, ensuring secure, compliant, and efficient migration to Azure cloud.</li>
            <li>Consulted stakeholders to identify business needs, creating innovative proofs-of-concept demonstrating tangible business value.</li>
          </ul>
        </div>

        <div className="resume-job">
          <h3>Senior Software Engineer</h3>
          <h4>Plain Concepts | September 2020 – February 2024 | Frankfurt Rhine-Main Area</h4>
          <ul>
            <li>Led architecture for major AI integration projects with enterprise clients such as Nestlé and Coca-Cola.</li>
            <li>Implemented secure Azure-based document interaction systems using Azure OpenAI, Forms Recognizer, and advanced GPT models.</li>
            <li>Managed large-scale migrations and integrations, modernizing infrastructure and streamlining operations.</li>
          </ul>
        </div>

        <div className="resume-job">
          <h3>Additional Experience</h3>
          <h4>2005–2020</h4>
          <p>Held senior software engineering and architectural roles at Capgemini, SAP, Namics, Lorenz Life Sciences, and other organizations. Led full-stack development, cloud migrations, and large-scale system integrations across industries including finance, healthcare, automotive, and manufacturing.</p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="resume-content">
        <h2>Projects & Innovations</h2>
        
        <div className="resume-project">
          <h3>Enterprise Client Portfolio</h3>
          <p>Successfully delivered solutions for major global organizations including Nestlé, Coca-Cola Europacific Partners, BMW, FRoSTA, ADAC, Lanxess, Bayer, Stada, Schwarz IT (Lidl), and many others across sectors like finance, manufacturing, automotive, retail, and utilities.</p>
        </div>

        <div className="resume-project">
          <h3>Nestlé Safe GPT Project</h3>
          <p>Architected a secure RAG-based AI document assistant using Azure OpenAI, Forms Recognizer, and AI Search, streamlining proposal preparation for finance and sales teams.</p>
        </div>

        <div className="resume-project">
          <h3>Coca-Cola Europacific Partners Safe GPT</h3>
          <p>Built a full-stack AI platform for interacting with external documents, leveraging GPT-4 and text embeddings with secure Azure infrastructure.</p>
        </div>

        <div className="resume-project">
          <h3>FRoSTA FRiDA App</h3>
          <p>Designed and implemented a microservices-based solution to digitize the food manufacturing process using Azure App Services, Functions, React, and Terraform.</p>
        </div>

        <div className="resume-project">
          <h3>BMW Microservices Migration</h3>
          <p>Led migration from public to private Azure AKS VNET clusters, implemented GitHub Actions for microservice automation, and enforced security and performance best practices.</p>
        </div>

        <div className="resume-project">
          <h3>Error505 AI Agent Builder</h3>
          <p>A groundbreaking no-code platform allowing users to visually design AI agent hierarchies and automatically generate full Python code using Agno.</p>
        </div>

        <div className="resume-project">
          <h3>AI Supply Chain Optimization</h3>
          <p>Developed multi-agent solutions significantly reducing emissions, inventory costs, and downtime for leading enterprises.</p>
        </div>

        <div className="resume-project">
          <h3>Enterprise AI Stack</h3>
          <p>Fully automated enterprise consulting stack featuring over 70 autonomous AI agents, significantly optimizing operational efficiency.</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="resume-content">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Cloud Platforms:</strong> Azure, AWS, GCP</li>
          <li><strong>AI & ML Frameworks:</strong> Azure OpenAI, Azure AI Vision, Azure Machine Learning, Azure AI Foundry, RAG, CrewAI, Agno, OpenAI SDK, GitHub Copilot</li>
          <li><strong>Programming:</strong> Python, C#, .NET Core, JavaScript, TypeScript</li>
          <li><strong>DevOps & IaC:</strong> GitHub Actions, Terraform, Bicep, Azure DevOps</li>
          <li><strong>Analytics & Databases:</strong> Power BI, Azure MSSQL, Azure AI Search, Snowflake Cortex</li>
          <li><strong>Security:</strong> Network Security, Cloud Compliance, Cybersecurity Architecture</li>
        </ul>
      </div>

      {/* Certifications Section */}
      <div className="resume-content">
        <h2>Certifications</h2>
        <ul>
          <li>Microsoft Certified: Azure Solutions Architect Expert (Valid until Mar 2026)</li>
          <li>Microsoft Certified: Cybersecurity Architect Expert (Valid until Feb 2026)</li>
          <li>Accredited GitHub Partner Trainer: Advanced Security & Admin (Valid until Jun 2026)</li>
          <li>Microsoft Certified: Security Operations Analyst Associate (Valid until Feb 2026)</li>
          <li>Microsoft Copilot for Security Ninja</li>
          <li>Microsoft AI Solutions (Azure OpenAI, Vision, NLP, Machine Learning)</li>
          <li>AZ-700: Microsoft Azure Networking Solutions</li>
          <li>Sitecore 9.0 Certified Platform Associate Developer</li>
          <li>Cisco Certified Network Associate Industrial (CCNA I)</li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="resume-content">
        <h2>Education</h2>
        <div className="resume-education">
          <h3>Pan-European University "APEIRON"</h3>
          <h4>Specialist of Computer Science B.Sc.IT – Spec. CS | 2014 – 2015</h4>
          <p>Information Technology</p>
        </div>
        <div className="resume-education">
          <h3>Pan-European University "APEIRON"</h3>
          <h4>Bachelor of Information Technologies - B.IT | 2011 – 2014</h4>
          <p>Information Technology</p>
        </div>
      </div>

      {/* Publications Section */}
      <div className="resume-content">
        <h2>Publications</h2>
        <ul>
          <li><em>GitHub for Next-Generation Coders</em>, Packt Publishing, 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;