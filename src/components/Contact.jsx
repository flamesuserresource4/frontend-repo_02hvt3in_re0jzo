import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(45rem_20rem_at_80%_0%,rgba(139,92,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Let’s build something</h2>
          <p className="mt-3 text-white/70">
            Have a project in mind or need help with your Python stack? I’m available for collaborations and freelance work.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <Mail className="text-cyan-400" />
            <a href="mailto:you@example.com" className="font-medium text-white hover:underline">
              you@example.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
