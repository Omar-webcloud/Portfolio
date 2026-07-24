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
  Moon,
  Menu,
  X,
  User,
  Briefcase,
  Award,
  Layers
} from "lucide-react"
import { Hero } from "./components/hero"
import { Experience } from "./components/experience"
import { Credentials } from "./components/credentials"
import { Blog } from "./components/blog"

import { About } from "./components/about"
import { Connect } from "./components/connect"
import { Splash } from "./components/splash"

const SLIDES = (goTo) => [
  { id: "about",       label: "About",      icon: User,      component: <About onConnect={() => goTo(5)} /> },
  { id: "projects",    label: "Projects",   icon: Layers,    component: <Hero /> },
  { id: "experience",  label: "Experience", icon: Briefcase, component: <Experience /> },
  { id: "expertise",   label: "Expertise",  icon: Award,     component: <Credentials /> },
  { id: "blog",        label: "Blog",       icon: FileText,  component: <Blog /> },
  { id: "connect",     label: "Connect",    icon: Mail,      component: <Connect /> },
]


export default function App() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev]       = useState(null)
  const [dir, setDir]         = useState(1)
  const [animating, setAnimating] = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light"
    }

    const stored = window.sessionStorage.getItem("portfolio-theme")
    if (stored) return stored
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
    return "light"
  })

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    sessionStorage.setItem("portfolio-theme", theme)
  }, [theme])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    const originalOverflow = document.body.style.overflow
    const originalTouchAction = document.body.style.touchAction
    document.body.style.overflow = "hidden"
    document.body.style.touchAction = "none"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.touchAction = originalTouchAction
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [menuOpen])

  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light")

  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

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
      }, 500) 
      return () => clearTimeout(t)
    }
  }, [animating])

  useEffect(() => {
    let lastTime = 0;
    let touchStartY = 0;
    let accumulatedDelta = 0;
    let scrollTimeout = null;

    const resetAccumulator = () => {
      accumulatedDelta = 0;
    };

    const handleWheel = (e) => {
      if (animating || menuOpen) return;
      const now = Date.now();
      
      let el = e.target;
      let isScrollable = false;
      let atBottom = false;
      let atTop = false;

      while (el && el !== document.documentElement && el !== document.body) {
        const style = window.getComputedStyle(el);
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
          if (el.scrollHeight > el.clientHeight) {
            isScrollable = true;
            if (Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight - 2) atBottom = true;
            if (el.scrollTop <= 2) atTop = true;
            break;
          }
        }
        el = el.parentElement;
      }

      if (isScrollable) {
        if (e.deltaY > 0 && !atBottom) {
          accumulatedDelta = 0;
          return;
        }
        if (e.deltaY < 0 && !atTop) {
          accumulatedDelta = 0;
          return;
        }
      }

      // Prevent quick successive transitions
      if (now - lastTime < 1000) return;

      accumulatedDelta += e.deltaY;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(resetAccumulator, 400);

      // Require accumulated intentional scrolling
      if (accumulatedDelta > 200 && current < slices.length - 1) {
        lastTime = now;
        accumulatedDelta = 0;
        goTo(current + 1);
      } else if (accumulatedDelta < -200 && current > 0) {
        lastTime = now;
        accumulatedDelta = 0;
        goTo(current - 1);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (animating || menuOpen) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      // Requires a much firmer swipe to transition
      if (Math.abs(deltaY) < 100) return;

      const now = Date.now();
      if (now - lastTime < 1000) return;

      let el = e.target;
      let isScrollable = false;
      let atBottom = false;
      let atTop = false;

      while (el && el !== document.documentElement && el !== document.body) {
        const style = window.getComputedStyle(el);
        if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
          if (el.scrollHeight > el.clientHeight) {
            isScrollable = true;
            if (Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight - 2) atBottom = true;
            if (el.scrollTop <= 2) atTop = true;
            break;
          }
        }
        el = el.parentElement;
      }

      if (isScrollable) {
        if (deltaY > 0 && !atBottom) return;
        if (deltaY < 0 && !atTop) return;
      }

      if (deltaY > 0 && current < slices.length - 1) {
        lastTime = now;
        goTo(current + 1);
      } else if (deltaY < 0 && current > 0) {
        lastTime = now;
        goTo(current - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(scrollTimeout);
    };
  }, [current, animating, menuOpen]);

  
  const slices = SLIDES(goTo)

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 0.96,
              filter: "blur(8px)",
              transition: { duration: 0.6, ease: "easeInOut" } 
            }}
            className="fixed inset-0 z-[9999]"
          >
            <Splash theme={theme} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full h-[100dvh] overflow-hidden bg-background text-foreground relative transition-colors duration-500">
      <nav className="absolute top-0 left-0 right-0 z-50 px-5 sm:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between w-full h-fit">
          <div className="hidden lg:flex flex-nowrap items-center gap-x-2 text-xs md:text-sm tracking-widest uppercase">
            {slices.map(({ id, label, icon: Icon }, i) => (
              <span key={id} className="relative flex items-center shrink-0">
                <button
                  onClick={() => goTo(i)}
                  className={`flex items-center transition-all duration-300 whitespace-nowrap relative px-4 sm:px-5 py-2 rounded-full font-medium group ${
                    current === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <motion.div
                    animate={
                      current === i
                        ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, -10, 10, 0] }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.5 }}
                    className="mr-2 flex-shrink-0"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <span className="text-xs sm:text-sm">{label}</span>
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

          <div className="flex lg:hidden items-center">
            <motion.button 
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-card/80 backdrop-blur-md border border-border/50 rounded-full hover:bg-secondary/60 transition-colors shadow-sm"
              title="Open Navigation"
            >
              <motion.div
                animate={menuOpen ? { scale: 0.9, opacity: 0.7 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <Menu size={16} className="text-foreground" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Menu</span>
              </motion.div>
            </motion.button>
          </div>

          <AnimatePresence>
            {current === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center ml-auto"
              >
                <button 
                  onClick={toggleTheme}
                  className="p-3 sm:p-2.5 rounded-full border border-border bg-card hover:bg-secondary transition-all duration-300 group shadow-sm"
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.1, duration: 0.2 } }}
            className="fixed inset-0 z-[100] bg-background/70 backdrop-blur-xl flex items-end sm:items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md rounded-[28px] border border-border/60 bg-card/95 shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-4 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Quick navigate</p>
                  <h3 className="text-xl font-serif text-foreground">Sections</h3>
                </div>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="p-2.5 rounded-full border border-border/50 bg-secondary/50 hover:bg-secondary/80 transition-colors shadow-sm"
                  title="Close Navigation"
                >
                  <X size={16} className="text-foreground" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {slices.map(({ id, label, icon: Icon }, i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => { goTo(i); setMenuOpen(false); }}
                    className={`flex items-center justify-between w-full rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                      current === i 
                        ? "border-border bg-secondary/50 text-foreground shadow-sm" 
                        : "border-transparent bg-transparent text-muted-foreground hover:border-border/50 hover:bg-secondary/20 hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <motion.div
                        animate={
                          current === i
                            ? { scale: [1, 1.12, 1], rotate: [0, -8, 8, -8, 8, 0] }
                            : { scale: 1, rotate: 0 }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <span className="text-sm sm:text-base font-serif uppercase tracking-[0.2em]">{label}</span>
                    </span>
                    <span className={`text-[10px] font-mono uppercase tracking-[0.25em] ${current === i ? "text-foreground" : "text-muted-foreground"}`}>
                      {current === i ? "Open" : "Go"}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-2xl border border-border/50 bg-secondary/20 px-3 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                <span>Tap a section to jump</span>
                <span>{String(current + 1).padStart(2, "0")}/{String(slices.length).padStart(2, "0")}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-full">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, y: dir * 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: dir * -60, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.64, 0, 0.16, 1] }}
            className="absolute inset-0 w-full h-full pt-10 sm:pt-16 md:pt-16 max-[500px]:pt-16"
            style={{ willChange: "transform, opacity" }}
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
    </>
  )
}

