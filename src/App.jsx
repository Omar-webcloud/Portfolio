import { useState, useEffect } from "react"
import { Hero } from "./components/hero"
import { Experience } from "./components/experience"
import { Credentials } from "./components/credentials"

const SLIDES = [
  { id: "about",       label: "About",      component: <About /> },
  { id: "expertise",   label: "Expertise",  component: <Credentials /> },
  { id: "projects",    label: "Projects",   component: <Hero /> },
  { id: "connect",     label: "Connect",    component: <Connect /> },
  { id: "experience",  label: "Experience", component: <Experience /> },
]

function About() {
  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-2 md:py-6 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="max-w-4xl mx-auto pb-8">
          <div className="flex flex-row items-center justify-between gap-4 sm:gap-8 mb-2 sm:mb-6 pt-0 sm:pt-4 lg:pt-8 w-full">
            <div className="flex-1">
              <h2 className="text-2xl min-[350px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-bold uppercase tracking-tighter mb-1 sm:mb-2 text-foreground">
                Frontend<br /> Developer
              </h2>
              <p className="text-[10px] sm:text-lg md:text-xl text-muted-foreground uppercase tracking-[0.2em] font-light">
                Personal Profile
              </p>
            </div>

            <div className="shrink-0 scale-[0.6] min-[350px]:scale-75 md:scale-90 lg:scale-100 origin-right">
              <div className="minimal-card p-2 pb-6 flex flex-col items-center rotate-[-2deg] w-[110px] min-[350px]:w-[140px] sm:w-[180px] bg-background border border-border">
                <div className="w-full aspect-[4/5] bg-gray-200 mb-2 border border-border overflow-hidden">
                   <img 
                     src="/images/omar-headshot.jpg" 
                     alt="MD Omar Faruk Chowdhury" 
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       e.target.src = "https://via.placeholder.com/280x350?text=Omar";
                     }}
                   />
                </div>
                <div className="text-center">
                  <p className="font-bold text-xs sm:text-base uppercase tracking-tight">Omar</p>
                  <p className="text-[7px] text-muted-foreground uppercase mt-0.5 tracking-widest">Frontend Dev</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl border-t border-border pt-3 sm:pt-6">
            <p className="text-sm sm:text-base md:text-lg font-medium mb-2 uppercase tracking-tight">MD OMAR FARUK CHOWDHURY</p>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-lg text-foreground/80 leading-relaxed">
              <p>Specializing in building responsive, data-driven web applications with React, Next.js, and TypeScript.</p>
              <p>My background in English Literature provides a unique perspective on documentation and engineering communication.</p>
            </div>
            <p className="text-[9px] sm:text-xs text-muted-foreground mt-4 font-mono uppercase tracking-[0.2em]">Chattogram, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Connect() {
  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-6 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-14 pb-16 lg:pb-24">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9] font-bold uppercase tracking-tighter mb-4 text-foreground">
              Connect
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-light mb-6">
              Get In Touch
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {[
              { label: "Email",    value: "omarfarukcihs@gmail.com", href: "mailto:omarfarukcihs@gmail.com" },
              { label: "LinkedIn", value: "in/md-omar-faruk-chowdhury",href: "https://www.linkedin.com/in/md-omar-faruk-chowdhury" },
              { label: "GitHub",   value: "Omar-webcloud",           href: "https://github.com/Omar-webcloud" },
              { label: "Resume",   value: "Download PDF (0.3MB)",    href: "/Resume.pdf", download: true },
            ].map(({ label, value, href, download }) => (
              <a
                key={label}
                href={href}
                target={download ? undefined : "_blank"}
                download={download}
                rel={download ? undefined : "noopener noreferrer"}
                className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 border border-border p-4 sm:p-5 bg-white hover:bg-foreground transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground w-full sm:w-20 group-hover:text-background/60 transition-colors">{label}</span>
                <span className="text-base sm:text-lg font-medium group-hover:text-background transition-colors truncate">{value}</span>
              </a>
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

  return (
    <div className="w-screen h-screen overflow-hidden bg-background text-foreground relative">
      <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 py-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] sm:text-xs md:text-sm tracking-wider uppercase">
          {SLIDES.map(({ id, label }, i) => (
            <span key={id} className="flex items-center gap-4">
              {i > 0 && <span className="text-border hidden sm:inline">·</span>}
              <button
                onClick={() => goTo(i)}
                className={`transition-colors duration-200 whitespace-nowrap ${
                  current === i ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            </span>
          ))}
        </div>
      </nav>

      <div className="relative w-full h-full">
        {prev !== null && (
          <div
            key={`out-${prev}`}
            className="absolute inset-0 w-full h-full pt-20"
            style={{ animation: `slideOut${dir > 0 ? "Left" : "Right"} 0.6s cubic-bezier(0.76, 0, 0.24, 1) forwards` }}
          >
            {SLIDES[prev].component}
          </div>
        )}

        <div
          key={`in-${current}`}
          className="absolute inset-0 w-full h-full pt-20"
          style={{
            animation: animating
              ? `slideIn${dir > 0 ? "Right" : "Left"} 0.6s cubic-bezier(0.76, 0, 0.24, 1) forwards`
              : "none",
          }}
        >
          {SLIDES[current].component}
        </div>
      </div>

      <div className="absolute bottom-6 right-8 font-mono text-xs text-muted-foreground select-none tracking-widest uppercase">
        {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>

      <style>{`
        @keyframes slideOutLeft {
          from { transform: translateX(0);      opacity: 1; }
          to   { transform: translateX(-60px);  opacity: 0; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0);      opacity: 1; }
          to   { transform: translateX(60px);   opacity: 0; }
        }
        @keyframes slideInRight {
          from { transform: translateX(60px);   opacity: 0; }
          to   { transform: translateX(0);      opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-60px);  opacity: 0; }
          to   { transform: translateX(0);      opacity: 1; }
        }
      `}</style>
    </div>
  )
}

