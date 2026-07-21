import { useEffect, useState } from "react"

const experiences = [
  {
    num: "02",
    year: "'26",
    title: "WEBERMELON",
    companyDesc: "Web & Software Development Agency",
    role: "Frontend Developer",
    period: "May 2026 – Present",
    description: "Developing and maintaining client-facing web applications, collaborating on full project lifecycles from scoping through delivery, and contributing to internal tooling and component libraries.",
    tools: ["Next.js", "React", "Tailwind CSS", "WordPress"],
    link: "https://webermelon.com/",
    logo: "/wm-logo.png",
    zIndex: 40,
  },
  {
    num: "01",
    year: "'26",
    title: "WEBERMELON",
    companyDesc: "Web & Software Development Agency",
    role: "Intern Web Developer",
    period: "Feb 2026 – Apr 2026",
    description: "Built responsive UI components, contributed to live client projects, and gained hands-on experience with professional development workflows, code reviews, and agile sprints.",
    tools: ["React", "JavaScript", "CSS", "Git"],
    link: "https://webermelon.com/",
    logo: "/wm-logo.png",
    zIndex: 30,
  }
]

export function Experience() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setMounted(true), 200)
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="page-shell pt-6 pb-28 sm:pt-10 sm:pb-36 lg:pt-12 lg:pb-44 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 pb-12 lg:pb-32">
          
          <div className={`w-full lg:w-[40%] lg:sticky lg:top-0 transition-all duration-1000 lg:pr-6 xl:pr-10 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[0.95] font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-tighter">
              Work<br /> Experience
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground uppercase tracking-widest font-light mb-6 sm:mb-8">
              Professional Journey
            </p>
            <div className="max-w-md hidden sm:block">
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Building production-grade software and honing professional skills through real client delivery at a fast-paced web agency.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[55%] relative flex flex-col items-center lg:items-end gap-12 sm:gap-16">
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] mt-4 sm:mt-8 flex flex-col gap-12 sm:gap-20">
              {experiences.map((exp, idx) => (
                <div key={idx} className={`relative w-full transition-all duration-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`} style={{ zIndex: exp.zIndex, transitionDelay: `${idx * 200}ms` }}>


                  <div className={`minimal-card w-full bg-background p-5 sm:p-6 lg:origin-bottom-right group cursor-default transition-all duration-300 transform`}>
                    <div className="absolute inset-0 bg-background border border-border -z-10 translate-y-1 translate-x-1" />
                    <div className="absolute inset-0 bg-background border border-border -z-20 translate-y-2 translate-x-2" />
                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                      <div className="flex items-center gap-3">
                        {exp.logo && <img src={exp.logo} alt={exp.title} className="w-8 h-8 object-contain" />}
                        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide flex items-center gap-2">
                          {exp.link ? (
                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                              {exp.title}
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          ) : (
                            exp.title
                          )}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4">
                      <div className="border-l-2 border-foreground/20 pl-4 py-0.5 sm:py-1">
                        <div className="flex items-center gap-3">
                          <p className="text-base sm:text-lg font-medium text-foreground">{exp.role}</p>
                          {exp.period.includes("Present") && (
                            <div 
                              className="flex items-center gap-1.5 border border-border px-1.5 sm:px-2 py-1 rounded-sm bg-secondary/30 shrink-0"
                              title="Active Role"
                            >
                              <span className="relative flex w-1.5 h-1.5 sm:w-2 sm:h-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500"></span>
                              </span>
                              <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground hidden min-[400px]:inline-block">
                                Active
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-[10px] sm:text-sm font-mono text-muted-foreground mt-1 text-xs">{exp.period}</p>
                      </div>
                      <div className="flex gap-4 sm:gap-6 mt-1 sm:mt-2">
                        <div className="w-full flex flex-col justify-center gap-2 sm:gap-3">
                          <div className="text-sm text-foreground/80 leading-relaxed">
                            {exp.companyDesc && <p className="mb-2 italic text-muted-foreground">{exp.companyDesc}</p>}
                            {exp.description && <p className="text-sm text-foreground/70 leading-relaxed mb-3">{exp.description}</p>}
                            {exp.tools && exp.tools.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {exp.tools.map(t => (
                                  <span key={t} className="text-[10px] sm:text-[11px] font-mono uppercase bg-secondary border border-border px-2 py-0.5 rounded-sm text-foreground">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
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

