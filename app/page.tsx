import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import GitHubSection from '@/components/GitHub';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  );
}
