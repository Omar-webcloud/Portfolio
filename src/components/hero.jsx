import { useEffect, useState } from "react"
import { ExternalLink, Github, Monitor, Smartphone, Code2 } from "lucide-react"
import { motion } from "framer-motion"

const featuredProjects = [
  {
    num: "01",
    title: "SYNTAXA",
    description: "Interactive grammar web application for practicing sentences and improving writing skills through dynamic exercises.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    link: "https://syntaxa-ten.vercel.app/",
    github: "https://github.com/Omar-webcloud/syntaxa",
    type: "EdTech App"
  },
  {
    num: "02",
    title: "PLASTITRACK",
    description: "Web-based application that helps users monitor and reduce plastic consumption with intuitive tracking and visual charts.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://plasti-track.vercel.app/",
    github: "https://github.com/Omar-webcloud/PlastiTrack",
    type: "Web App"
  },
  {
    num: "03",
    title: "WEBCHRONICLES",
    description: "Interactive web app visualizing internet mood and headlines over time using sentiment analysis and dynamic data fetching.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
    link: "https://web-chronicles.vercel.app/",
    github: "https://github.com/Omar-webcloud/WebChronicles",
    type: "Data Visualization"
  },
  {
    num: "04",
    title: "KINO-XPLORER",
    description: "Sleek movie discovery tool that lets you search and browse up-to-date film information effortlessly.",
    stack: ["React", "API", "JavaScript"],
    link: "https://kino-xplorer.vercel.app/",
    github: "https://github.com/Omar-webcloud/movie-explorer",
    type: "Search Tool"
  },
  {
    num: "05",
    title: "BLOGGIN'",
    description: "Modern blogging platform with full user authentication and post management capabilities.",
    stack: ["TypeScript", "Next.js", "Firebase"],
    link: "https://bloggin-app-six.vercel.app/",
    github: "https://github.com/Omar-webcloud/Bloggin-App",
    type: "Platform"
  },
  {
    num: "06",
    title: "FRESH FARM",
    description: "Frontend e-commerce platform for fresh produce, featuring a clean and intuitive shopping interface.",
    stack: ["React", "JavaScript", "CSS"],
    link: "https://fresh-farm-zeta.vercel.app/",
    github: "https://github.com/Omar-webcloud/Fresh-Farm",
    type: "E-commerce"
  }
]

export function Hero() {
  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-6 sm:py-12 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 min-h-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%] lg:sticky lg:top-0"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl leading-[0.9] font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-tighter">
              Selected<br />
              Projects
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-light">
                Digital Experience & Interfaces
              </p>
            </div>
            
            <div className="max-w-md hidden sm:block space-y-6">
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                A showcase of my recent work focusing on clean code, modern stacks, and user-centric designs.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Monitor className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest">Responsive Web Design</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Code2 className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest">Optimized Performance</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-[50%] flex flex-col gap-8 sm:gap-16 pb-12 sm:pb-20">
            {featuredProjects.map((project, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative w-full"
              >
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="bg-background w-7 h-7 rounded-full border border-border flex items-center justify-center text-[9px] font-mono z-10 shrink-0 select-none"
                  >
                    {project.num}
                  </motion.div>
                  <div className="h-[1px] flex-1 bg-border/40"></div>
                </div>

                <motion.div 
                  whileHover={{ y: -5, x: -5 }}
                  className="minimal-card w-full bg-background p-4 sm:p-6 relative group border border-border overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Monitor className="w-12 h-12 -rotate-12" />
                  </div>
                  
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div>
                      <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mb-1 block">{project.type}</span>
                      <h3 className="text-xl sm:text-3xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors">{project.title}</h3>
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-10">
                    <p className="text-sm sm:text-lg text-foreground/80 leading-relaxed font-light">{project.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-end border-t border-border pt-4 sm:pt-6">
                    <div className="w-full sm:flex-1">
                      <p className="text-[9px] font-mono uppercase text-muted-foreground mb-2 sm:mb-3 tracking-[0.2em]">Technological Stack</p>
                      <ul className="flex flex-wrap gap-1.5">
                        {project.stack.map(s => (
                          <motion.li 
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                            key={s} 
                            className="text-[9px] font-mono uppercase bg-black/5 px-2 py-0.5 border border-border rounded-sm cursor-default"
                          >
                            {s}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
                      <motion.a 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-foreground text-background px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:opacity-95 transition-all shadow-sm active:shadow-none"
                      >
                        Live <span className="hidden sm:inline">Link</span> <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center p-2 sm:p-2.5 border border-border transition-colors bg-white shadow-sm active:shadow-none" 
                        title="Github Repository"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}