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

const SLIDES = (goTo) => [
  { id: "about",       label: "About",      component: <About onConnect={() => goTo(5)} /> },
  { id: "projects",    label: "Projects",   component: <Hero /> },
  { id: "experience",  label: "Experience", component: <Experience /> },
  { id: "expertise",   label: "Expertise",  component: <Credentials /> },
  { id: "blog",        label: "Blog",       component: <Blog /> },
  { id: "connect",     label: "Connect",    component: <Connect /> },
]

function About({ onConnect }) {
  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-6 sm:py-12 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="max-w-4xl mx-auto pb-8">
          <div className="flex flex-row items-center justify-between gap-4 sm:gap-8 mb-2 sm:mb-6 pt-0 sm:pt-4 lg:pt-8 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1"
            >
              <h2 className="text-2xl min-[350px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-bold uppercase tracking-tighter mb-1 sm:mb-2 text-foreground">
                Frontend<br /> Developer
              </h2>
              <div className="flex items-center gap-3">
                <p className="text-[10px] sm:text-lg md:text-xl text-muted-foreground uppercase tracking-[0.2em] font-light">
                  Personal Profile
                </p>
                <div className="h-[1px] w-8 bg-border hidden sm:block"></div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[8px] sm:text-[10px] font-mono text-green-700 uppercase tracking-wider font-bold">Active Now</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="shrink-0 scale-[0.6] min-[350px]:scale-75 md:scale-90 lg:scale-100 origin-right"
            >
              <div className="minimal-card p-2 pb-6 flex flex-col items-center w-[110px] min-[350px]:w-[140px] sm:w-[180px] bg-background border border-border">
                <div className="w-full aspect-[4/5] bg-gray-200 mb-2 border border-border overflow-hidden group">
                   <img 
                     src="/images/omar-headshot.jpg" 
                     alt="MD Omar Faruk Chowdhury" 
                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                     onError={(e) => {
                       e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=280&h=350";
                     }}
                   />
                </div>
                <div className="text-center">
                  <p className="font-bold text-xs sm:text-base uppercase tracking-tight">Omar</p>
                  <p className="text-[7px] text-muted-foreground uppercase mt-0.5 tracking-widest">Frontend Dev</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-2xl border-t border-border pt-3 sm:pt-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <p className="text-sm sm:text-base md:text-lg font-medium uppercase tracking-tight">MD OMAR FARUK CHOWDHURY</p>
              
              {/* Timezone Card */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-3 py-2 border border-border bg-white rounded-sm self-start sm:self-auto"
              >
                <div className="p-1.5 bg-foreground/5 rounded-full">
                  <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] font-mono uppercase text-muted-foreground leading-none">Global Coverage</span>
                  <span className="text-[10px] font-bold uppercase leading-tight">Open to all timezones</span>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-lg text-foreground/80 leading-relaxed font-light">
              <p>Specializing in building responsive, data-driven web applications with <span className="font-medium text-foreground">React, Next.js, and TypeScript</span>.</p>
              <p>My background in English Literature provides a unique perspective on <span className="font-medium text-foreground italic">documentation and engineering communication</span>.</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
              <motion.button 
                onClick={onConnect}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-3 bg-foreground text-background px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] border border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300"
              >
                Let's Talk
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex items-center gap-2 text-[9px] sm:text-xs text-muted-foreground font-mono uppercase tracking-[0.2em]">
                <Clock className="w-3 h-3" />
                <span>GMT +6</span>
                <span className="mx-1">·</span>
                <span>Chattogram, BD</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Connect() {
  const [copied, setCopied] = useState(false)

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-6 sm:py-12 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-14 pb-16 lg:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-bold uppercase tracking-tighter mb-4 text-foreground">
              Connect
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-light">
                Available for projects
              </p>
            </div>
            
            <p className="text-foreground/70 leading-relaxed mb-8 max-w-sm hidden sm:block italic">
              "Let's create something meaningful together. Whether it's a high-performance web app or a unique digital experience, I'm here to bring your vision to life."
            </p>
          </motion.div>

          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {[
              { label: "Email",    value: "omarfarukcihs@gmail.com", href: "mailto:omarfarukcihs@gmail.com", icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-background/70 transition-colors" /> },
              { label: "LinkedIn", value: "in/md-omar-faruk-chowdhury",href: "https://www.linkedin.com/in/md-omar-faruk-chowdhury", icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-background/70 transition-colors" /> },
              { label: "GitHub",   value: "Omar-webcloud",           href: "https://github.com/Omar-webcloud", icon: <Github className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-background/70 transition-colors" /> },
              { label: "Resume",   value: "Download PDF (0.3MB)",    href: "/Resume.pdf", download: true, icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-background/70 transition-colors" /> },
            ].map(({ label, value, href, download, icon }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative group flex"
              >
                <a
                  href={href}
                  target={download ? undefined : "_blank"}
                  download={download}
                  rel={download ? undefined : "noopener noreferrer"}
                  className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 border border-border p-4 sm:p-5 bg-white hover:bg-foreground transition-all duration-300 w-full"
                >
                  <div className="flex items-center gap-3 w-full sm:w-32 shrink-0">
                    {icon}
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/60 transition-colors">{label}</span>
                  </div>
                  <span className="text-base sm:text-lg font-medium group-hover:text-background transition-colors truncate flex-1">{value}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-background" />
                </a>
                
                {label === "Email" && (
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      copyEmail(value);
                    }}
                    className="absolute right-14 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-2 px-3 py-1.5 bg-background text-foreground text-[8px] font-mono border border-border uppercase tracking-widest hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

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
  
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const slices = SLIDES(goTo)

  return (
    <div className="w-screen h-screen overflow-hidden bg-background text-foreground relative">
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 py-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] sm:text-xs md:text-sm tracking-wider uppercase">
          {slices.map(({ id, label }, i) => (
            <span key={id} className="flex items-center gap-4">
              {i > 0 && <span className="text-border hidden sm:inline">·</span>}
              <button
                onClick={() => goTo(i)}
                className={`transition-all duration-300 whitespace-nowrap relative ${
                  current === i ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
                {current === i && (
                  <motion.div 
                    layoutId="nav-line"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-foreground"
                  />
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
            className="absolute inset-0 w-full h-full pt-20"
          >
             {slices[current].component}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 right-8 flex items-center gap-6 select-none tracking-widest uppercase">
        <div className="flex flex-col items-end">
          <span className="font-mono text-[9px] text-muted-foreground">Local Time</span>
          <span className="font-mono text-[10px] font-bold">
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
          </span>
        </div>
        <div className="h-8 w-[1px] bg-border" />
        <div className="flex flex-col items-end">
          <span className="font-mono text-[9px] text-muted-foreground">Coordinates</span>
          <span className="font-mono text-[10px] font-bold">22.37° N, 91.80° E</span>
        </div>
        <div className="h-8 w-[1px] bg-border" />
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-foreground font-bold">{String(current + 1).padStart(2, "0")}</span> / {String(slices.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  )
}

