import { Navigation } from "./components/navigation"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Projects } from "./components/projects"
import { Education } from "./components/education"
import { Certificates } from "./components/certificates"
import { Blog } from "./components/blog"
import { Contact } from "./components/contact"

function App() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Blog />
      <Contact />
    </main>
  )
}

export default App
