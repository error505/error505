import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const Typewriter: React.FC<{ texts: string[]; speed?: number; pause?: number }> = ({ texts, speed = 70, pause = 1500 }) => {
    const [index, setIndex] = useState(0);
    const [display, setDisplay] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
      const full = texts[index];
      let timer: ReturnType<typeof setTimeout>;

      if (!deleting) {
        if (display.length < full.length) {
          timer = setTimeout(() => setDisplay(full.slice(0, display.length + 1)), speed);
        } else {
          timer = setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (display.length > 0) {
          timer = setTimeout(() => setDisplay(full.slice(0, display.length - 1)), Math.max(30, Math.floor(speed / 2)));
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }

      return () => clearTimeout(timer);
    }, [display, deleting, index, texts, speed, pause]);

    return (
      <span className="inline-flex items-center">
        <span>{display}</span>
        <span className="typewriter-caret ml-1">|</span>
      </span>
    );
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBanner} alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground text-lg mb-4"
        >
          Welcome
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6"
        >
          <div className="flex flex-col items-center">
            <span>I'm Igor Iric</span>
            <span className="text-lg md:text-2xl text-primary mt-2">
              <Typewriter texts={["an AI Solutions Architect"]} />
            </span>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg mb-10"
        >
          based in Bern, Bern, Switzerland.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          href="#contact"
          className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Hire Me
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16"
        >
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronDown size={32} className="animate-bounce mx-auto" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
