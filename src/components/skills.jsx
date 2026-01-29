import { Card } from "./ui/card";
import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaNpm, 
  FaFigma, 
  FaChrome 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiVite,
  SiMui
} from "react-icons/si";

const stackCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Tailwind", icon: SiTailwindcss, color: "cyan" },
      { name: "JavaScript", icon: FaJs, color: "yellow" },
      { name: "TypeScript", icon: SiTypescript, color: "blue" },
      { name: "React", icon: FaReact, color: "cyan" },
      { name: "Next.js", icon: SiNextdotjs, color: "white" },
      { name: "Material UI", icon: SiMui, color: "blue" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "green" },
      { name: "Express", icon: SiExpress, color: "white" },
      { name: "MongoDB", icon: SiMongodb, color: "green" },
      { name: "Firebase", icon: SiFirebase, color: "orange" },
    ],
  },
  {
    title: "Other Tools",
    skills: [
      { name: "GitHub", icon: FaGithub, color: "white" },
      { name: "Git", icon: FaGitAlt, color: "orange" },
      { name: "Vite", icon: SiVite, color: "purple" },
      { name: "npm", icon: FaNpm, color: "red" },
      { name: "Figma", icon: FaFigma, color: "purple" },
      { name: "Chrome DevTools", icon: FaChrome, color: "blue" },
    ],
  },
];

export function Skills() {
  const glassColorMap = {
    orange: "from-orange-500/10 to-orange-400/5 border-orange-500/20 text-orange-400",
    blue: "from-blue-500/10 to-blue-400/5 border-blue-500/20 text-blue-400",
    purple: "from-purple-500/10 to-purple-400/5 border-purple-500/20 text-purple-400",
    green: "from-emerald-500/10 to-emerald-400/5 border-emerald-500/20 text-emerald-400",
    cyan: "from-cyan-500/10 to-cyan-400/5 border-cyan-500/20 text-cyan-400",
    yellow: "from-yellow-500/10 to-yellow-400/5 border-yellow-500/20 text-yellow-400",
    white: "from-slate-500/10 to-slate-400/5 border-slate-500/20 text-slate-200",
    red: "from-red-500/10 to-red-400/5 border-red-500/20 text-red-400",
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-primary font-mono text-sm mb-3 block">
              {"// My expertise"}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              My Stacks
            </h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
          </div>

          <div className="space-y-12">
            {stackCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill) => (
                    <Card
                      key={skill.name}
                      className={`p-4 flex flex-col items-center justify-center gap-3 bg-gradient-to-br backdrop-blur-sm border transition-all duration-300 group hover:-translate-y-2 hover:shadow-lg rounded-xl ${
                        glassColorMap[skill.color] || glassColorMap.blue
                      }`}
                    >
                      <div className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110">
                        <skill.icon />
                      </div>
                      
                      <span className="text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                        {skill.name}
                      </span>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}