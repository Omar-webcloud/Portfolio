import { motion } from "framer-motion"
import { ExternalLink, Github, Monitor, BookOpen, BookMarked, GraduationCap, Layers, Leaf, LineChart, Search, LayoutTemplate, ShoppingCart } from "lucide-react"

export function ProjectCard({ project, idx }) {
  const getProjectIcon = (type) => {
    const iconClass = "w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground group-hover:text-foreground transition-colors";
    switch (type) {
      case "E-book Platform":   return <BookMarked className={iconClass} />;
      case "Platform":          return <LayoutTemplate className={iconClass} />;
      case "EdTech App":        return <BookOpen className={iconClass} />;
      case "EdTech Platform":   return <GraduationCap className={iconClass} />;
      case "GreenTech":         return <Leaf className={iconClass} />;
      case "E-learning":        return <Layers className={iconClass} />;
      case "Data Visualization": return <LineChart className={iconClass} />;
      case "E-commerce":        return <ShoppingCart className={iconClass} />;
      case "Search Tool":       return <Search className={iconClass} />;
      default:                  return <Monitor className={iconClass} />;
    }
  };

  return (
    <motion.div 
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
        whileHover="hover"
        className="minimal-card w-full bg-background p-4 sm:p-6 relative group border border-border transition-all duration-300 transform"
      >
        <div className="absolute inset-0 bg-background border border-border -z-10 translate-y-1 translate-x-1 group-hover:translate-y-2 group-hover:translate-x-2 transition-transform duration-300" />
        <div className="absolute inset-0 bg-background border border-border -z-20 translate-y-2 translate-x-2 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-300" />

        <div className="w-full aspect-video mb-5 sm:mb-6 overflow-hidden border border-border bg-secondary/20 relative rounded-sm z-0">
          <img 
            src={project.imageLight} 
            alt={`${project.title} preview`} 
            className="w-full h-full object-cover object-top block dark:hidden transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <img 
            src={project.imageDark} 
            alt={`${project.title} dark mode preview`} 
            className="w-full h-full object-cover object-top hidden dark:block transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <div>
            <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest mb-1 block">{project.type}</span>
            <h3 className="text-xl sm:text-3xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors">{project.title}</h3>
          </div>
          
          <div className="opacity-50 group-hover:opacity-100 transition-opacity shrink-0 ml-4 mt-1 sm:mt-0">
            <motion.div
              variants={{
                hover: { scale: 1.1, rotate: 5 }
              }}
            >
              {getProjectIcon(project.type)}
            </motion.div>
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
                  whileHover={{ scale: 1.05, backgroundColor: "var(--accent)" }}
                  key={s} 
                  className="text-[9px] font-mono uppercase bg-secondary px-2 py-0.5 border border-border rounded-sm cursor-default"
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-foreground text-background px-4 sm:px-6 py-2 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:opacity-95 transition-all shadow-sm active:shadow-none"
            >
              Live <span className="hidden sm:inline">Link</span> 
              <motion.div
                variants={{
                  hover: { x: 3, scale: 1.1 }
                }}
              >
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </motion.div>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center p-2 sm:p-2.5 border border-border transition-colors bg-card shadow-sm active:shadow-none" 
              title="Github Repository"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
