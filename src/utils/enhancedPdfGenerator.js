import html2pdf from 'html2pdf.js';

// Enhanced PDF generator that creates a professional CV
export const generateResumePDF = () => {
  // Create the resume content as HTML string
  const resumeHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Igor Iric - CV</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          background: white;
        }
        
        .resume-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          background: white;
        }
        
        .header {
          text-align: center;
          margin-bottom: 40px;
          border-bottom: 3px solid #667eea;
          padding-bottom: 20px;
        }
        
        .header h1 {
          font-size: 3rem;
          color: #667eea;
          margin-bottom: 10px;
          font-weight: 700;
        }
        
        .header p {
          font-size: 1.3rem;
          color: #666;
          font-weight: 500;
        }
        
        .section {
          margin-bottom: 35px;
        }
        
        .section h2 {
          color: #667eea;
          font-size: 1.5rem;
          margin-bottom: 15px;
          border-bottom: 2px solid #eee;
          padding-bottom: 8px;
          font-weight: 600;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 20px;
        }
        
        .contact-item {
          padding: 8px 0;
        }
        
        .contact-item strong {
          color: #667eea;
          display: inline-block;
          width: 80px;
        }
        
        .summary {
          text-align: justify;
          line-height: 1.8;
          font-size: 1rem;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-top: 20px;
        }
        
        .skill-item {
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }
        
        .skill-item h4 {
          color: #667eea;
          margin-bottom: 8px;
          font-size: 1.1rem;
        }
        
        .skill-item p {
          font-size: 0.95rem;
          color: #555;
        }
        
        .achievements {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 20px;
        }
        
        .achievement {
          text-align: center;
          padding: 20px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-radius: 10px;
        }
        
        .achievement h3 {
          font-size: 2.5rem;
          margin-bottom: 8px;
          font-weight: 700;
        }
        
        .achievement p {
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .competencies ul {
          list-style: none;
          margin-top: 20px;
        }
        
        .competencies li {
          padding: 12px 0;
          border-bottom: 1px solid #eee;
          line-height: 1.7;
        }
        
        .competencies li:last-child {
          border-bottom: none;
        }
        
        .competencies strong {
          color: #667eea;
        }
        
        .footer {
          text-align: center;
          margin-top: 50px;
          padding-top: 30px;
          border-top: 2px solid #eee;
          color: #888;
          font-size: 0.9rem;
        }
        
        @media print {
          .resume-container {
            padding: 20px;
          }
          
          .achievements {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      </style>
    </head>
    <body>
      <div class="resume-container">
        <!-- Header -->
        <div class="header">
          <h1>Igor Iric</h1>
          <p>Senior AI Cloud Solutions Architect</p>
        </div>

        <!-- Contact Information -->
        <div class="section">
          <h2>Contact Information</h2>
          <div class="contact-grid">
            <div class="contact-item"><strong>Email:</strong> info@error505.com</div>
            <div class="contact-item"><strong>Phone:</strong> +49 (Mobile)</div>
            <div class="contact-item"><strong>Location:</strong> Frankfurt, Hesse, Germany</div>
            <div class="contact-item"><strong>Website:</strong> www.error505.com</div>
            <div class="contact-item"><strong>LinkedIn:</strong> linkedin.com/in/igor-iric</div>
            <div class="contact-item"><strong>GitHub:</strong> github.com/error505</div>
          </div>
        </div>

        <!-- Professional Summary -->
        <div class="section">
          <h2>Professional Summary</h2>
          <div class="summary">
            <p style="margin-bottom: 15px;">
              Actively sharing Cloud and AI expertise with a community of over 25,000 followers on LinkedIn, accompanied by extensive GitHub repositories demonstrating practical implementations.
            </p>
            <p>
              Innovative and results-driven AI Solutions Architect with over 18 years of extensive experience in designing, developing, and deploying advanced Agentic AI enterprise-grade platforms primarily on Microsoft Azure. Proven expertise in implementing scalable cloud-based AI solutions, leveraging Azure OpenAI, Retrieval-Augmented Generation (RAG), Power BI integration, and advanced analytics. Passionate about automating complex workflows and empowering businesses through transformative AI strategies. Author of <em>"GitHub for Next-Generation Coders"</em> and creator of no-code platforms for AI agent development.
            </p>
          </div>
        </div>

        <!-- Key Achievements -->
        <div class="section">
          <h2>Key Achievements</h2>
          <div class="achievements">
            <div class="achievement">
              <h3>18+</h3>
              <p>Years Experience</p>
            </div>
            <div class="achievement">
              <h3>250+</h3>
              <p>Happy Clients</p>
            </div>
            <div class="achievement">
              <h3>650+</h3>
              <p>Projects Done</p>
            </div>
            <div class="achievement">
              <h3>25K+</h3>
              <p>LinkedIn Followers</p>
            </div>
          </div>
        </div>

        <!-- Core Competencies -->
        <div class="section competencies">
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

        <!-- Technical Expertise -->
        <div class="section">
          <h2>Technical Expertise</h2>
          <div class="skills-grid">
            <div class="skill-item">
              <h4>Azure AI Services</h4>
              <p>Azure OpenAI, AI Search, Machine Learning, and Agentic AI Solutions</p>
            </div>
            <div class="skill-item">
              <h4>AI & RAG Systems</h4>
              <p>Retrieval-Augmented Generation and Multi-Agent AI Systems</p>
            </div>
            <div class="skill-item">
              <h4>GitHub Expertise</h4>
              <p>Certified GitHub Partner Trainer and "GitHub for Next-Generation Coders" Author</p>
            </div>
            <div class="skill-item">
              <h4>Power BI & Analytics</h4>
              <p>Advanced Analytics, Data Visualization, and Business Intelligence</p>
            </div>
            <div class="skill-item">
              <h4>Cloud Platforms</h4>
              <p>Multi-cloud expertise: Azure, AWS, GCP architectures</p>
            </div>
            <div class="skill-item">
              <h4>Cybersecurity</h4>
              <p>Azure Cybersecurity Architect Expert & Security Operations</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p>Generated from www.error505.com • ${new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Create a temporary element
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = resumeHTML;
  
  // Configure PDF options
  const options = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: 'Igor_Iric_CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2, 
      useCORS: true,
      letterRendering: true,
      allowTaint: true
    },
    jsPDF: { 
      unit: 'in', 
      format: 'a4', 
      orientation: 'portrait',
      compress: true
    },
    pagebreak: { mode: ['css', 'legacy'] }
  };

  // Generate and download PDF
  return html2pdf()
    .set(options)
    .from(tempDiv)
    .save()
    .then(() => {
      console.log('PDF generated successfully!');
    })
    .catch((error) => {
      console.error('Error generating PDF:', error);
    });
};

export default generateResumePDF;
