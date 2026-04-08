import { Monitor, Code2 } from "lucide-react"
import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { featuredProjects } from "../data/projects"

export function Hero() {
  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-6 sm:py-12 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 min-h-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%] lg:sticky lg:top-0 lg:pr-10"
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
              <ProjectCard key={idx} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}