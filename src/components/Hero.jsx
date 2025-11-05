import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full flex items-stretch justify-center overflow-hidden bg-slate-950"
    >
      {/* Spline full-width cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Soft gradient overlays to improve contrast while keeping interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 py-24 sm:py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Python Software Developer
            </div>

            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              High‑performance backends and automation
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                built with Python
              </span>
            </h1>

            <p className="mt-4 text-white/80 max-w-2xl">
              I design and ship reliable APIs, data pipelines, and tooling. Clean architecture, robust tests, and cloud‑ready performance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-white text-slate-900 px-5 py-2.5 font-medium shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/20 bg-white/5 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Quick credibility row */}
          <motion.ul
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {[
              ["APIs", "FastAPI, Django"],
              ["Data", "Pandas, ETL"],
              ["Cloud", "Docker, CI/CD"],
              ["Testing", "Pytest, QA"],
            ].map(([k, v]) => (
              <motion.li
                key={k}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-wide text-white/60">{k}</p>
                <p className="text-sm font-medium text-white">{v}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Floating highlights */}
        <div className="pointer-events-none relative hidden sm:block">
          <motion.div
            className="absolute right-4 top-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs text-white/90 backdrop-blur"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Async IO • Caching • Observability
          </motion.div>
          <motion.div
            className="absolute right-10 bottom-10 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs text-white/90 backdrop-blur"
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Benchmarks up to 3x faster
          </motion.div>
        </div>
      </div>
    </section>
  );
}
