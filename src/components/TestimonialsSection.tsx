import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import sarahImg from "@/assets/sarah.png";
import chenImg from "@/assets/chen.png";
import emilyImg from "@/assets/emily.png";

const testimonials = [
  {
    text: "Igor's expertise in AI and cloud architecture transformed our business. His agentic AI solutions increased our efficiency by 40%. Highly recommend!",
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    img: sarahImg,
  },
  {
    text: "Working with Igor on our Azure migration was seamless. His deep knowledge of both technical and business aspects made the project a huge success.",
    name: "Michael Chen",
    role: "Lead Developer at InnovateLabs",
    img: chenImg,
  },
  {
    text: "Igor's GitHub training sessions were exceptional. Our team's productivity improved significantly after implementing his DevOps best practices.",
    name: "Emily Rodriguez",
    role: "Product Manager at CloudFirst",
    img: emilyImg,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-subtitle">Testimonials from satisfied clients</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="testimonial-card"
          >
            <Quote size={24} className="text-primary/40 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-heading font-semibold text-foreground text-sm">{t.name}</h4>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
