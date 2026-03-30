import { useEffect, useState } from "react"

const experiences = [
  {
    num: "01",
    year: "'26",
    title: "WEBERMELON",
    role: "Web Developer Intern",
    tools: ["Web & Software Development Agency"],
    rotation: "rotate-[2deg]",
    zIndex: 30,
    offset: "translate-y-0",
  }
]

export function Experience() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 200)
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-6 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 pb-12 lg:pb-32">
          
          <div className={`w-full lg:w-1/2 lg:sticky lg:top-0 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-tighter">
              Work<br /> Experience
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground uppercase tracking-widest font-light mb-6 sm:mb-8">
              Professional Journey
            </p>
            <div className="max-w-md hidden sm:block">
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Applying my skills and academic background to deliver scalable and user-centric software solutions.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-0 flex flex-col items-center lg:items-end">
            <div className="absolute left-[20px] sm:left-[80px] lg:left-[-120px] top-4 bottom-12 w-[1px] bg-border z-0 hidden sm:block" />
            <div className="relative w-full max-w-[420px] mt-4 sm:mt-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className={`relative lg:absolute lg:right-0 w-full transition-all duration-700 ${mounted ? "opacity-100" : "opacity-0 translate-x-10"}`} style={{ zIndex: exp.zIndex, transitionDelay: `${idx * 200}ms` }}>
                  <div className="absolute -left-[40px] sm:-left-[100px] lg:-left-[240px] top-6 items-center w-[100px] lg:w-[240px] hidden sm:flex">
                    <div className="timeline-dot bg-background w-8 h-8 rounded-full border border-border flex items-center justify-center text-[10px] font-mono mr-2 z-10">
                      {exp.num}
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground w-6">{exp.year}</span>
                    <div className="flex-1 h-[1px] border-b border-dashed border-border ml-2" />
                  </div>

                  <div className={`minimal-card w-full bg-background p-5 sm:p-6 ${exp.rotation} lg:origin-bottom-right group cursor-default transition-transform duration-500 hover:rotate-0`}>
                    <div className="absolute inset-0 bg-background border border-border rotate-[3deg] -z-10 translate-y-1 translate-x-1" />
                    <div className="absolute inset-0 bg-background border border-border rotate-[-2deg] -z-20 translate-y-2 translate-x-2" />
                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide flex items-center gap-2">{exp.title}</h3>
                      <span className="text-[10px] font-mono text-muted-foreground border border-border px-2 py-1 rounded-sm bg-black/5">Active</span>
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4">
                      <div className="border-l-2 border-foreground/20 pl-4 py-0.5 sm:py-1">
                        <p className="text-base sm:text-lg font-medium text-foreground">{exp.role}</p>
                        <p className="text-[10px] sm:text-sm font-mono text-muted-foreground mt-1 text-xs">Feb 2026 – Present</p>
                      </div>
                      <div className="flex gap-4 sm:gap-6 mt-1 sm:mt-2">
                        <div className="w-full flex flex-col justify-center gap-2 sm:gap-3">
                           <div className="text-sm text-foreground/80 leading-relaxed">
                            {exp.tools.map(t => (
                              <p key={t}>{t}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

