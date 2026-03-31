import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  Globe, 
  ArrowRight,
  Sparkles,
  MessageSquare,
  Clock
} from "lucide-react"
import { Hero } from "./components/hero"
import { Experience } from "./components/experience"
import { Credentials } from "./components/credentials"
import { Blog } from "./components/blog"

import { About } from "./components/about"
import { Connect } from "./components/connect"

const SLIDES = (goTo) => [
  { id: "about",       label: "About",      component: <About onConnect={() => goTo(5)} /> },
  { id: "projects",    label: "Projects",   component: <Hero /> },
  { id: "experience",  label: "Experience", component: <Experience /> },
  { id: "expertise",   label: "Expertise",  component: <Credentials /> },
  { id: "blog",        label: "Blog",       component: <Blog /> },
  { id: "connect",     label: "Connect",    component: <Connect /> },
]


export default function App() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev]       = useState(null)
  const [dir, setDir]         = useState(1)
  const [animating, setAnimating] = useState(false)

  const goTo = (index) => {
    if (index === current || animating) return
    setDir(index > current ? 1 : -1)
    setPrev(current)
    setAnimating(true)
    setCurrent(index)
  }

  useEffect(() => {
    if (animating) {
      const t = setTimeout(() => {
        setPrev(null)
        setAnimating(false)
      }, 600)
      return () => clearTimeout(t)
    }
  }, [animating])
  
  const slices = SLIDES(goTo)

  return (
    <div className="w-screen h-screen overflow-hidden bg-background text-foreground relative">
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 py-6 max-[500px]:mb-5">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[10px] sm:text-xs md:text-sm tracking-wider uppercase">
          {slices.map(({ id, label }, i) => (
            <span key={id} className="relative flex items-center">
              <button
                onClick={() => goTo(i)}
                className={`transition-all duration-500 whitespace-nowrap relative px-4 sm:px-6 py-2.5 rounded-full ${
                  current === i ? "text-foreground font-black scale-110" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
                {current === i && (
                  <motion.div 
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-white/5 backdrop-blur-xl border-2 border-white/50 rounded-full -z-10 shadow-[0_0_25px_rgba(255,255,255,0.2)] overflow-hidden"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  >
                    <motion.div 
                      animate={{ 
                        x: ["-100%", "100%"],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        ease: "linear",
                        repeatDelay: 1
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
                    />
                  </motion.div>
                )}
              </button>
            </span>
          ))}
        </div>
      </nav>

      <div className="relative w-full h-full">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: dir * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -40 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 w-full h-full pt-20 max-[500px]:pt-28"
          >
             {slices[current].component}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 right-8 flex items-center gap-4 select-none tracking-widest uppercase">
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-foreground font-bold">{String(current + 1).padStart(2, "0")}</span> / {String(slices.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  )
}

