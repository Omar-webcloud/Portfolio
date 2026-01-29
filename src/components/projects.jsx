import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink } from "lucide-react"
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFirebase, SiMongodb, SiExpress, SiFramer } from "react-icons/si"
import { TbApi } from "react-icons/tb"

const techIcons = {
  "Nextjs": { icon: SiNextdotjs, color: "text-white" },
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  "React": { icon: FaReact, color: "text-blue-400" },
  "TailwindCSS": { icon: SiTailwindcss, color: "text-cyan-400" },
  "TypeScript": { icon: SiTypescript, color: "text-blue-500" },
  "JavaScript": { icon: FaJs, color: "text-yellow-400" },
  "API": { icon: TbApi, color: "text-gray-300" },
  "Firebase": { icon: SiFirebase, color: "text-orange-500" },
  "FirebaseAuth": { icon: SiFirebase, color: "text-orange-500" },
  "MongoDB": { icon: SiMongodb, color: "text-green-500" },
  "Express": { icon: SiExpress, color: "text-white" },
  "HTML": { icon: FaHtml5, color: "text-orange-600" }, 
  "CSS": { icon: FaCss3Alt, color: "text-blue-600" },
  "Framer Motion": { icon: SiFramer, color: "text-white" },
}

const projects = [
  {
    title: "PlastiTrack",
    description: "PlastiTrack is a web-based application that helps users monitor and reduce their plastic consumption and waste. Through its intuitive interface, users can log plastic-use events, track their progress over time with visual charts, and manage their usage history.",
    link: "https://plasti-track.vercel.app/",
    github: "https://github.com/Omar-webcloud/PlastiTrack", 
    tags: ["Nextjs", "TailwindCSS", "TypeScript", "Framer Motion"],
    color: "cyan",
  },
  {
    title: "WebChronicles",
    description: "WebChronicles is an interactive web application that visualizes the mood and headlines of the internet over time. It allows users to explore trending topics, sentiment analysis, and news highlights in a dynamic interface.",
    link: "https://web-chronicles.vercel.app/",
    github: "https://github.com/Omar-webcloud/WebChronicles",
    tags: ["Nextjs", "TypeScript", "TailwindCSS", "Framer Motion", "API"],
    color: "cyan",
  },
  {
    title: "Kino-Xplorer",
    description: "Kino‑Xplorer is a sleek browser-based tool that lets you search, discover, and browse movies effortlessly. It uses a movie API to fetch up-to-date information, including genres, ratings, release dates, and synopses, providing a smooth and dynamic movie exploration experience.",
    link: "https://kino-xplorer.vercel.app/",
    github: "https://github.com/Omar-webcloud/movie-explorer",
    tags: ["React", "API", "JavaScript"],
    color: "cyan",
  },
  {
    title: "Bloggin' ",
    description: "Bloggin’ is a modern blogging platform where you can sign up, log in, and manage your posts with full control. It features user authentication for secure access, and lets you create, edit, and delete posts easily.",
    link: "https://bloggin-app-six.vercel.app//",
    github: "https://github.com/Omar-webcloud/Bloggin-App",
    tags: ["TypeScript", "Next.js", "Firebase"],
    color: "cyan",
  },
  {
    title: "Dragon Repeller -RPG",
    description: "A browser-based Role-playing game, inspired by freeCodeCamp, featuring user authentication, game progress storage, and dynamic gameplay.",
    link: "https://omar-webcloud.github.io/Role-Playing-Game/",
    github: "https://github.com/Omar-webcloud/Role-Playing-Game",
    tags: [ "HTML", "CSS", "JavaScript", "MongoDB", "Express", "FirebaseAuth"],
    color: "cyan",
  },
  {
    title: "Fresh Farm",
    description: "A frontend e-commerce platform for fruits and vegetables, built with react.",
    link: "https://fresh-farm-zeta.vercel.app/",
    github: "https://github.com/Omar-webcloud/Fresh-Farm",
    tags: ["React", "JavaScript", "CSS"],
    color: "cyan",
  },
]

const glassColorMap = {
  blue: "from-blue-500/10 to-blue-400/5 border-blue-500/20 text-blue-400 group-hover:border-blue-500/50",
  purple: "from-purple-500/10 to-purple-400/5 border-purple-500/20 text-purple-400 group-hover:border-purple-500/50",
  cyan: "from-cyan-500/10 to-cyan-400/5 border-cyan-500/20 text-cyan-400 group-hover:border-cyan-500/50",
  orange: "from-orange-500/10 to-orange-400/5 border-orange-500/20 text-orange-400 group-hover:border-orange-500/50",
  emerald: "from-emerald-500/10 to-emerald-400/5 border-emerald-500/20 text-emerald-400 group-hover:border-emerald-500/50",
  green: "from-green-500/10 to-green-400/5 border-green-500/20 text-green-400 group-hover:border-green-500/50",
};

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-black">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-primary font-mono text-sm mb-3 block">{"// Few of My Works"}</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">My Projects</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project) => (
              <Card
                key={project.title}
                className={`flex flex-col h-full backdrop-blur-md bg-gradient-to-br border rounded-2xl transition-all duration-500 group overflow-hidden hover:-translate-y-2 hover:shadow-lg
                  ${glassColorMap[project.color] || glassColorMap.blue}
                `}
              >
                <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl bg-current pointer-events-none`} />
                 
                <CardHeader className="p-5 md:p-10 pb-4">
                  <CardTitle className="text-2xl md:text-3xl mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-400 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-5 md:p-10 pt-0 mt-auto">
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag) => {
                      const IconData = techIcons[tag] || { icon: TbApi, color: "text-gray-400" } 
                      const IconComponent = IconData.icon
                      
                      return (
                        <div
                          key={tag}
                          title={tag}
                          className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-blue-500/30"
                        >
                          <IconComponent className={`w-5 h-5 ${IconData.color}`} />
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex flex-row gap-3 md:gap-4 mt-auto">
                    <Button
                      variant="outline"
                      asChild
                      className="flex-1 h-10 sm:h-12 bg-transparent border-blue-900/30 text-blue-400 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] border-2"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full font-bold uppercase tracking-normal sm:tracking-wider text-[10px] sm:text-sm"
                      >
                        Live Link
                        <ExternalLink className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="flex-1 h-10 sm:h-12 bg-transparent border-purple-900/30 text-purple-400 rounded-xl transition-all duration-300 hover:bg-purple-500 hover:text-black hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] border-2"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full font-bold uppercase tracking-normal sm:tracking-wider text-[10px] sm:text-sm"
                      >
                        Github Repo
                        <FaGithub className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}