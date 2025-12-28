import { Card } from "./ui/card"

const skills = [
  { name: "HTML", level: 90, color: "orange" },
  { name: "CSS", level: 90, color: "blue" },
  { name: "JavaScript", level: 90, color: "purple" },
  { name: "React", level: 90, color: "indigo" },
  { name: "TypeScript", level: 90, color: "blue" },
  { name: "NextJS", level: 90, color: "green" },
]

export function Skills() {
  // Mapping for the memorized glass colors
  const glassColorMap = {
    blue: "from-blue-500/10 to-blue-400/5 border-blue-500/20 text-blue-400",
    purple: "from-purple-500/10 to-purple-400/5 border-purple-500/20 text-purple-400",
    orange: "from-orange-500/10 to-orange-400/5 border-orange-500/20 text-orange-400",
    green: "from-green-500/10 to-green-400/5 border-green-500/20 text-green-400",
    indigo: "from-indigo-500/10 to-indigo-400/5 border-indigo-500/20 text-indigo-400",
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-black">
      {/* Background Glows for Depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-950/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Glass Container */}
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">{"// My expertise"}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Skills</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.name}
                className={`p-6 bg-gradient-to-br backdrop-blur-sm border transition-all duration-300 group hover:-translate-y-1 ${glassColorMap[skill.color]}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-current transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-mono opacity-80">{skill.level}%</span>
                </div>
                
                {/* Modern Progress Bar with Glass Styling */}
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      background: "currentColor",
                      boxShadow: "0 0 15px currentColor",
                    }}
                  />
                  {/* Glass Shine on Bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
