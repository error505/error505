// src/components/SkillsProgress.js
import React, { useState, useEffect, useRef } from 'react';
import { FaAws, FaReact, FaDocker, FaNodeJs, FaPython, FaDatabase, FaCloud, FaMicrosoft } from 'react-icons/fa';
import { SiMicrosoftazure, SiKubernetes, SiTensorflow, SiOpenai } from 'react-icons/si';

const SkillsProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const skills = [
    { name: 'Azure Cloud', level: 95, icon: <SiMicrosoftazure />, color: '#0078d4' },
    { name: 'AWS', level: 90, icon: <FaAws />, color: '#ff9900' },
    { name: 'AI/ML', level: 92, icon: <SiTensorflow />, color: '#ff6f00' },
    { name: 'OpenAI/LLMs', level: 88, icon: <SiOpenai />, color: '#412991' },
    { name: 'Kubernetes', level: 85, icon: <SiKubernetes />, color: '#326ce5' },
    { name: 'Docker', level: 90, icon: <FaDocker />, color: '#2496ed' },
    { name: 'Python', level: 93, icon: <FaPython />, color: '#3776ab' },
    { name: 'React', level: 85, icon: <FaReact />, color: '#61dafb' },
    { name: 'Node.js', level: 80, icon: <FaNodeJs />, color: '#339933' },
    { name: 'C#', level: 98, icon: <FaMicrosoft />, color: '#007396' },
    { name: 'Database Design', level: 90, icon: <FaDatabase />, color: '#336791' },
    { name: 'Cloud Architecture', level: 95, icon: <FaCloud />, color: '#667eea' }
  ];

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="skills-progress-section" id="skills" ref={ref}>
      <div className="container">
        <div className="heading-container">
          <h2 className="text-light">Technical Skills</h2>
          <p>Expertise & Proficiency<span className="heading-separator-line"></span></p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-header">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              </div>
              <div className="skill-progress-bar">
                <div 
                  className="skill-progress-fill" 
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    backgroundColor: skill.color,
                    boxShadow: `0 0 20px ${skill.color}40`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress;