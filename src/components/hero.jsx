import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { ArrowDown, Globe } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faPhone } from '@fortawesome/free-solid-svg-icons'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text tracking-tight">
            Hi! I'm <span className="text-primary">Omar</span>
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 font-light italic">
            A Frontend Developer
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
             Modern UI || Performance and UX Optimization || Scalable Web Experience
          </p>

          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-6 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors">
              
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-gray-200 tracking-wide">
                  Available for Remote
                </span>
              </div>

              <div className="hidden sm:block w-px h-4 bg-white/10" />

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-gray-200 tracking-wide">
                  Open to Any Timezone
                </span>
              </div>

            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="relative group h-14 px-10 rounded-xl overflow-hidden transition-all duration-300
                         bg-blue-500/10 hover:bg-blue-500/20 backdrop-blur-md 
                         border border-blue-500/30 hover:border-blue-500/60
                         text-blue-400 hover:text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
              <span className="font-semibold text-lg flex items-center gap-2"> 
                <FontAwesomeIcon icon={faBriefcase} />
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="relative group h-14 px-10 rounded-xl overflow-hidden transition-all duration-300
                         bg-white/5 hover:bg-white/10 backdrop-blur-md 
                         border border-white/10 hover:border-indigo-500/40
                         text-muted-foreground hover:text-indigo-400"
            >
              <span className="font-semibold text-lg flex items-center gap-2"> 
                <FontAwesomeIcon icon={faPhone} /> 
                Contact Me
              </span>
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 group transition-all duration-300"
        aria-label="Scroll to about section"
      >
        <div className="p-1 rounded-full  bg-white/5 backdrop-blur-lg border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
          <ArrowDown className="w-4 h-4  text-primary animate-bounce" />
        </div>
      </button>
    </section>
  )
}