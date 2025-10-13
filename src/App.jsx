import { Navigation } from "./components/navigation"
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Skills } from "./components/skills"
import { Projects } from "./components/projects"
import { Certificates } from "./components/certificates"
import { Contact } from "./components/contact"

function App() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  )
}

export default App
