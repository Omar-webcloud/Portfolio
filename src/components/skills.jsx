import { Card } from "./ui/card"

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glow-border border-2 border-primary rounded-xl p-8">
          <div className="mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">{"// My expertise"}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.name}
                className="p-6 bg-card rounded-lg shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <span className="text-sm text-primary font-mono">{skill.level}%</span>
                </div>
                <div className="relative h-3 bg-secondary/40 rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      background: "linear-gradient(90deg, #67e8f9 0%, #a7f3d0 100%)",
                      boxShadow: "0 0 12px 2px #67e8f9, 0 0 24px 4px #a7f3d0",
                      transition: "width 1s ease-out"
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}