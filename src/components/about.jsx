export function About() {
  const skills = [
    { 
      label: 'Clean Code', 
      color: 'blue', 
      svg: <svg xmlns="www.w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> 
    },
    { 
      label: 'Smooth UX', 
      color: 'purple', 
      svg: <svg xmlns="www.w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg> 
    },
    { 
      label: 'Performance', 
      color: 'orange', 
      svg: <svg xmlns="www.w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> 
    },
    { 
      label: 'Scalability', 
      color: 'green', 
      svg: <svg xmlns="www.w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="6" height="6" rx="1"></rect><rect x="14" y="4" width="6" height="6" rx="1"></rect><rect x="4" y="14" width="6" height="6" rx="1"></rect><rect x="14" y="14" width="6" height="6" rx="1"></rect></svg> 
    },
  ];

  const glassColorMap = {
    blue: "from-blue-500/20 to-blue-400/5 border-blue-500/30 text-blue-400 shadow-blue-500/10",
    purple: "from-purple-500/20 to-purple-400/5 border-purple-500/30 text-purple-400 shadow-purple-500/10",
    orange: "from-orange-500/20 to-orange-400/5 border-orange-500/30 text-orange-400 shadow-orange-500/10",
    green: "from-green-500/20 to-green-400/5 border-green-500/30 text-green-400 shadow-green-500/10",
  };

  return (
    /* GRADIENT BACKGROUND: Seamlessly matching Hero (Blue/Black theme) */
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-black">
      {/* Background Glows for Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">{"// Get to know me"}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Me</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start mb-16">
            {/* Headshot with Sci-Fi Glass Ring */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-full bg-blue-500/5 backdrop-blur-sm border border-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                  <img src="/images/omar-headshot.jpg" alt="Omar" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                </div>
              </div>
            </div>

            {/* Content Text */}
            <div className="space-y-6 text-lg leading-relaxed text-slate-300 flex-1">
              <p>
               I build conversion focused websites driven by user behavior analysis, performance optimization, and interface clarity. Every design decision is made to reduce friction, improve usability, and guide users toward meaningful actions.


              </p>
              <p>
                My process combines UX research, information architecture, and visual design with front end performance best practices to deliver fast, intuitive experiences. The goal is not only visual appeal, but measurable improvements in engagement, retention, and conversion rates.
              </p>
            </div>
          </div>

          {/* GLASS ICONS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`
                  relative group flex flex-col items-center p-6 rounded-2xl border 
                  bg-gradient-to-br backdrop-blur-md transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl ${glassColorMap[skill.color]}
                `}
              >
                <div className="mb-3 transition-transform duration-300 group-hover:scale-125">
                  {skill.svg}
                </div>
                <span className="text-xs font-bold tracking-widest uppercase opacity-70">
                  {skill.label}
                </span>
                
                {/* Glass Polish Overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
