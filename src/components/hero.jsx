import { useEffect, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const featuredProjects = [
  {
    num: "01",
    year: "'23",
    title: "PLASTITRACK",
    description: "Web-based application that helps users monitor and reduce plastic consumption with intuitive tracking and visual charts.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://plasti-track.vercel.app/",
    github: "https://github.com/Omar-webcloud/PlastiTrack",
  },
  {
    num: "02",
    year: "'22",
    title: "WEBCHRONICLES",
    description: "Interactive web app visualizing internet mood and headlines over time using sentiment analysis and dynamic data fetching.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
    link: "https://web-chronicles.vercel.app/",
    github: "https://github.com/Omar-webcloud/WebChronicles",
  },
  {
    num: "03",
    year: "'21",
    title: "KINO-XPLORER",
    description: "Sleek movie discovery tool that lets you search and browse up-to-date film information effortlessly.",
    stack: ["React", "API", "JavaScript"],
    link: "https://kino-xplorer.vercel.app/",
    github: "https://github.com/Omar-webcloud/movie-explorer",
  },
  {
    num: "04",
    year: "'21",
    title: "BLOGGIN'",
    description: "Modern blogging platform with full user authentication and post management capabilities.",
    stack: ["TypeScript", "Next.js", "Firebase"],
    link: "https://bloggin-app-six.vercel.app/",
    github: "https://github.com/Omar-webcloud/Bloggin-App",
  },
  {
    num: "05",
    year: "'20",
    title: "FRESH FARM",
    description: "Frontend e-commerce platform for fresh produce, featuring a clean and intuitive shopping interface.",
    stack: ["React", "JavaScript", "CSS"],
    link: "https://fresh-farm-zeta.vercel.app/",
    github: "https://github.com/Omar-webcloud/Fresh-Farm",
  }
]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-4 sm:py-12 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 min-h-full">
          
          <div className={`w-full lg:w-[40%] lg:sticky lg:top-0 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl leading-[0.9] font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-tighter">
              Selected<br />
              Projects
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-light mb-4 sm:mb-8">
              Digital Experience & Interfaces
            </p>
            <div className="max-w-md hidden sm:block">
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6">
                A showcase of my recent work focusing on clean code, modern stacks, and user-centric designs.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[50%] flex flex-col gap-8 sm:gap-16 pb-12 sm:pb-20">
            {featuredProjects.map((project, idx) => (
              <div 
                key={idx} 
                className={`relative w-full transition-all duration-1000 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <div className="bg-background w-7 h-7 rounded-full border border-border flex items-center justify-center text-[9px] font-mono z-10 shrink-0">
                    {project.num}
                  </div>
                  <div className="h-[1px] flex-1 bg-border/40"></div>
                  <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">{project.year}</span>
                </div>

                <div className="minimal-card w-full bg-background p-4 sm:p-6 relative group border border-border">
                  <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="flex justify-between items-start mb-3 sm:mb-6">
                    <h3 className="text-xl sm:text-3xl font-bold uppercase tracking-wide">{project.title}</h3>
                  </div>
                  <div className="mb-4 sm:mb-8">
                    <p className="text-sm sm:text-lg text-foreground/80 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-end border-t border-border pt-4 sm:pt-6">
                    <div className="w-full sm:flex-1">
                      <p className="text-[9px] font-mono uppercase text-muted-foreground mb-2 sm:mb-3 tracking-[0.2em]">Technological Stack</p>
                      <ul className="flex flex-wrap gap-1.5">
                        {project.stack.map(s => (
                          <li key={s} className="text-[9px] font-mono uppercase bg-black/5 px-2 py-0.5 border border-border rounded-sm">{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-foreground text-background px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                        Live <span className="hidden sm:inline">Link</span> <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 sm:p-2.5 border border-border hover:bg-black/5 transition-colors" title="Github Repository">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}