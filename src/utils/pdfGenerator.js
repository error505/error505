import html2pdf from 'html2pdf.js';

export const generateResumePDF = () => {
  // Create a temporary container for the resume content
  const resumeContent = document.createElement('div');
  resumeContent.innerHTML = `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; color: #333;">
      <!-- Header Section -->
      <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #667eea; padding-bottom: 20px;">
        <h1 style="margin: 0; font-size: 2.5rem; color: #667eea;">Igor Iric</h1>
        <p style="margin: 5px 0 0 0; font-size: 1.2rem; color: #666;">Senior AI Cloud Solutions Architect</p>
      </div>

      <!-- Contact Information -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: #667eea; border-bottom: 1px solid #eee; padding-bottom: 5px;">Contact Information</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
          <p style="margin: 5px 0;"><strong>Email:</strong> info@error505.com</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> +49 (Mobile)</p>
          <p style="margin: 5px 0;"><strong>Location:</strong> Frankfurt, Hesse, Germany</p>
          <p style="margin: 5px 0;"><strong>Website:</strong> www.error505.com</p>
          <p style="margin: 5px 0;"><strong>LinkedIn:</strong> linkedin.com/in/igor-iric</p>
          <p style="margin: 5px 0;"><strong>GitHub:</strong> github.com/error505</p>
        </div>
      </div>

      <!-- Professional Summary -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: #667eea; border-bottom: 1px solid #eee; padding-bottom: 5px;">Professional Summary</h2>
        <p style="line-height: 1.6; margin-top: 15px;">
          Actively sharing Cloud and AI expertise with a community of over 25,000 followers on LinkedIn, accompanied by extensive GitHub repositories demonstrating practical implementations.
        </p>
        <p style="line-height: 1.6;">
          Innovative and results-driven AI Solutions Architect with over 18 years of extensive experience in designing, developing, and deploying advanced Agentic AI enterprise-grade platforms primarily on Microsoft Azure. Proven expertise in implementing scalable cloud-based AI solutions, leveraging Azure OpenAI, Retrieval-Augmented Generation (RAG), Power BI integration, and advanced analytics. Passionate about automating complex workflows and empowering businesses through transformative AI strategies. Author of <em>GitHub for Next-Generation Coders</em> and creator of no-code platforms for AI agent development.
        </p>
      </div>

      <!-- Core Competencies -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: #667eea; border-bottom: 1px solid #eee; padding-bottom: 5px;">Core Competencies</h2>
        <ul style="line-height: 1.8; margin-top: 15px;">
          <li><strong>Microservices on Azure:</strong> Migration and optimization of distributed systems using Azure Kubernetes Services (AKS) and VNET security architectures</li>
          <li><strong>Agentic AI Architecture:</strong> Design and deployment of intelligent multi-agent systems</li>
          <li><strong>Azure AI & Cloud Solutions:</strong> Azure OpenAI, Azure AI Search, Azure Machine Learning, Infrastructure as Code (IaC)</li>
          <li><strong>Retrieval-Augmented Generation (RAG):</strong> Advanced implementations for enterprise data retrieval and decision-making</li>
          <li><strong>End-to-End Automation:</strong> GitHub Actions, Terraform, Azure DevOps, CI/CD pipelines</li>
          <li><strong>Data Analytics & Visualization:</strong> Power BI, Text-to-SQL, Predictive Analytics</li>
          <li><strong>Cloud Security & Compliance:</strong> Advanced cloud security strategies, data integrity, and regulatory compliance</li>
        </ul>
      </div>

      <!-- Key Achievements -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: #667eea; border-bottom: 1px solid #eee; padding-bottom: 5px;">Key Achievements</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px;">
          <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
            <h3 style="margin: 0; color: #667eea; font-size: 2rem;">18+</h3>
            <p style="margin: 5px 0 0 0;">Years Experience</p>
          </div>
          <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
            <h3 style="margin: 0; color: #667eea; font-size: 2rem;">250+</h3>
            <p style="margin: 5px 0 0 0;">Happy Clients</p>
          </div>
          <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
            <h3 style="margin: 0; color: #667eea; font-size: 2rem;">650+</h3>
            <p style="margin: 5px 0 0 0;">Projects Done</p>
          </div>
          <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
            <h3 style="margin: 0; color: #667eea; font-size: 2rem;">25K+</h3>
            <p style="margin: 5px 0 0 0;">LinkedIn Followers</p>
          </div>
        </div>
      </div>

      <!-- Technical Skills -->
      <div style="margin-bottom: 30px;">
        <h2 style="color: #667eea; border-bottom: 1px solid #eee; padding-bottom: 5px;">Technical Skills</h2>
        <div style="margin-top: 15px;">
          <p style="margin: 10px 0;"><strong>Azure AI Services:</strong> Azure OpenAI, AI Search, Machine Learning, Agentic AI Solutions</p>
          <p style="margin: 10px 0;"><strong>AI & RAG:</strong> Retrieval-Augmented Generation and Multi-Agent AI Systems</p>
          <p style="margin: 10px 0;"><strong>GitHub:</strong> Certified GitHub Partner Trainer and "GitHub for Next-Generation Coders" Author</p>
          <p style="margin: 10px 0;"><strong>Power BI:</strong> Advanced Analytics, Data Visualization, and Business Intelligence</p>
          <p style="margin: 10px 0;"><strong>Cloud Platforms:</strong> Multi-cloud expertise: Azure, AWS, GCP architectures</p>
          <p style="margin: 10px 0;"><strong>Cybersecurity:</strong> Azure Cybersecurity Architect Expert & Security Operations</p>
        </div>
      </div>

      <!-- Footer -->
      <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 0.9rem;">
        <p style="margin: 0;">Generated from www.error505.com</p>
      </div>
    </div>
  `;

  // Configure PDF options
  const options = {
    margin: 0.5,
    filename: 'Igor_Iric_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  // Generate and download PDF
  return html2pdf().set(options).from(resumeContent).save();
};
