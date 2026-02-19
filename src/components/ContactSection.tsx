import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Twitter, Facebook, Linkedin, Github, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xyzjrdzr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Let's work together</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="font-heading font-semibold text-foreground text-lg">ADDRESS</h3>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p>Guiollett Str. 22</p>
                <p>Frankfurt, Germany 60329</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <p>+49 555 545 555</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <p>info@error505.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-3">FOLLOW ME</h4>
            <div className="flex gap-3">
              {[
                { icon: Globe, href: "https://www.error505.com/" },
                { icon: Twitter, href: "https://twitter.com/igor_iric" },
                { icon: Facebook, href: "https://facebook.com/igor.iric" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/igor-iric" },
                { icon: Github, href: "https://github.com/error505" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <h3 className="font-heading font-semibold text-foreground text-lg">SEND US A NOTE</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          />
          <textarea
            placeholder="Tell us more about your needs..."
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
            disabled={isSubmitting}
          />

          {error && (
            <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-lg">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          {isSubmitted && (
            <div className="flex items-center gap-2 text-primary text-sm bg-primary/10 p-3 rounded-lg">
              <CheckCircle2 size={16} />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : isSubmitted ? (
              <>
                <CheckCircle2 size={18} />
                <span>Sent!</span>
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
