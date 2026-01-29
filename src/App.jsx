import { Navigation } from "./components/navigation"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Projects } from "./components/projects"
import { Education } from "./components/education"
import { Certificates } from "./components/certificates"
import { Blog } from "./components/blog"
import { Contact } from "./components/contact"
import { AnimatedBackground } from "./components/ui/animated-background"
import { RevealOnScroll } from "./components/ui/reveal-on-scroll"

function App() {
  return (
    <main className="min-h-screen relative selection:bg-primary/20 selection:text-primary">
      <AnimatedBackground />
      <Navigation />
      <Hero /> 
      
      <RevealOnScroll>
        <About />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Skills />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Education />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Certificates />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Blog />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
    </main>
  )
}

export default App
