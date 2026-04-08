import { motion } from "framer-motion"
import { Globe, ArrowRight, Clock, MapPin } from "lucide-react"

export function About({ onConnect }) {
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
              <div className="flex flex-col md:flex-row md:items-center items-start gap-2 md:gap-3">
                <p className="text-[10px] sm:text-lg md:text-xl text-muted-foreground uppercase tracking-[0.2em] font-light leading-none">
                  Personal Profile
                </p>
                <div className="h-[1px] w-8 bg-border hidden md:block"></div>
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
                  <span className="text-[8px] sm:text-[10px] font-mono text-green-700 dark:text-green-400 uppercase tracking-wider font-bold">Active Now</span>
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
                <div className="w-full aspect-[4/5] bg-gray-200 dark:bg-gray-800 mb-2 border border-border overflow-hidden group">
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
              
              <motion.div 
                whileHover="hover"
                className="flex items-center gap-3 px-3 py-2 border border-border bg-card rounded-sm self-start sm:self-auto cursor-default group"
              >
                <div className="p-1.5 bg-foreground/5 rounded-full">
                  <motion.div
                    variants={{
                      hover: { rotate: 360 }
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                  </motion.div>
                </div>
                <div className="flex flex-col">
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
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-3 bg-foreground text-background px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] border border-foreground hover:bg-transparent hover:text-foreground transition-all duration-300"
              >
                Let's Talk
                <motion.div
                  variants={{
                    hover: { x: 5 }
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.div>
              </motion.button>

              <motion.div 
                whileHover="hover"
                className="flex items-center gap-2 text-[9px] sm:text-xs text-muted-foreground font-mono uppercase tracking-[0.2em] cursor-default"
              >
                <motion.div
                  variants={{
                    hover: { rotate: 15 }
                  }}
                >
                  <Clock className="w-3 h-3" />
                </motion.div>
                <span>GMT +6</span>
                <span className="mx-1">·</span>
                <motion.div
                  variants={{
                    hover: { y: -2, scale: 1.1 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MapPin className="w-3 h-3" />
                </motion.div>
                <span>Chattogram, BD</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
