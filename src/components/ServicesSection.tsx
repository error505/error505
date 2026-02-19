import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    title: "Azure AI",
    features: ["Azure OpenAI", "Agentic AI Solutions", "RAG Implementation", "AI Search Integration"],
    price: "$150",
  },
  {
    title: "AI Consulting",
    features: ["AI Strategy", "Multi-Agent Systems", "Power BI Integration", "AI Process Automation"],
    price: "$180",
  },
  {
    title: "DevOps & Training",
    features: ["GitHub Actions", "Azure DevOps", "GitHub Training", "Terraform"],
    price: "$130",
  },
  {
    title: "Development",
    features: ["C# .NET", "Python", "React", "TypeScript"],
    price: "$120",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-card/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Services & Pricing</h2>
        <p className="section-subtitle">Professional consulting services</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="service-card flex flex-col"
          >
            <h3 className="font-heading font-bold text-foreground text-lg mb-6">{service.title}</h3>
            <ul className="space-y-3 mb-8 flex-1">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mb-4">
              <span className="text-3xl font-heading font-bold text-foreground">{service.price}</span>
              <span className="text-muted-foreground text-sm ml-1">per hour</span>
            </div>
            <a href="#contact" className="block text-center py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
              Book
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
