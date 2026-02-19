import { motion } from "framer-motion";

const skills = [
  { name: "Azure Cloud", value: 95 },
  { name: "AWS", value: 90 },
  { name: "AI/ML", value: 92 },
  { name: "OpenAI/LLMs", value: 88 },
  { name: "Kubernetes", value: 85 },
  { name: "Docker", value: 90 },
  { name: "Python", value: 93 },
  { name: "React", value: 85 },
  { name: "Node.js", value: 80 },
  { name: "C#", value: 98 },
  { name: "Database Design", value: 90 },
  { name: "Cloud Architecture", value: 95 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-card/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Expertise & Proficiency</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-sm text-primary font-semibold">{skill.value}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                className="skill-bar-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.05 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
