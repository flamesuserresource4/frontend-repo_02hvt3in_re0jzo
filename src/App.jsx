import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Python Developer Portfolio. Built with care.
        </div>
      </footer>
    </div>
  );
}

export default App;
