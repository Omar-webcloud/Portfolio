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
  Clock,
  Sun,
  Moon
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
  const [theme, setTheme] = useState(() => {
    // Session storage default light
    return sessionStorage.getItem("portfolio-theme") || "light"
  })

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    sessionStorage.setItem("portfolio-theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light")

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
    <div className="w-screen h-screen overflow-hidden bg-background text-foreground relative transition-colors duration-500">
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 py-6 max-[500px]:mb-5">
        <div className="flex flex-wrap items-center justify-between w-full h-fit gap-y-4">
          <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2 gap-y-2 text-[10px] sm:text-xs md:text-sm tracking-widest uppercase">
            {slices.map(({ id, label }, i) => (
              <span key={id} className="relative flex items-center">
                <button
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 whitespace-nowrap relative px-4 sm:px-5 py-2 rounded-full font-medium ${
                    current === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                  {current === i && (
                    <motion.div 
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-secondary/50 border border-border/50 rounded-full -z-10 shadow-sm overflow-hidden"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    >
                      <motion.div 
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent skew-x-[-20deg]"
                      />
                    </motion.div>
                  )}
                </button>
              </span>
            ))}
          </div>

          <AnimatePresence>
            {current === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center ml-auto h-10"
              >
                <button 
                  onClick={toggleTheme}
                  className="p-2 sm:p-2.5 rounded-full border border-border bg-card hover:bg-secondary transition-all duration-300 group shadow-sm"
                  title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                >
                  {theme === "light" ? (
                    <Moon size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  ) : (
                    <Sun size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
            className="absolute inset-0 w-full h-full pt-32 sm:pt-40 max-[500px]:pt-36"
          >
             {slices[current].component}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 right-10 flex items-center gap-4 select-none tracking-[0.3em] uppercase">
        <div className="font-mono text-[10px] sm:text-xs text-muted-foreground flex items-center gap-2">
          <span className="text-foreground font-black">{String(current + 1).padStart(2, "0")}</span> 
          <span className="opacity-20 text-[8px]">/</span> 
          <span className="opacity-40">{String(slices.length).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  )
}

