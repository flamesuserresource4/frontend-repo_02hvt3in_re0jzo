import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FastAPI Microservice",
    description:
      "A production-ready service with JWT auth, background tasks, and rate limiting.",
    tags: ["FastAPI", "JWT", "Redis"],
    link: "#",
    repo: "#",
  },
  {
    title: "ETL Data Pipeline",
    description:
      "Automated ingestion and transformation pipeline orchestrated with Prefect.",
    tags: ["Python", "Pandas", "Prefect"],
    link: "#",
    repo: "#",
  },
  {
    title: "Web Scraper Suite",
    description:
      "Robust scraping framework with rotating proxies and structured exports.",
    tags: ["Playwright", "AsyncIO", "PostgreSQL"],
    link: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(45rem_20rem_at_50%_-10%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Featured Projects</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            A selection of real-world work showcasing APIs, data engineering, and automation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 hover:border-white/20 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.35)] transition-all"
            >
              <div className="mb-4 h-36 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 border border-white/10" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white"
                >
                  <ExternalLink size={16} /> Live
                </a>
                <span className="text-white/20">•</span>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
