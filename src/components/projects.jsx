import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "PlastiTrack",
    description: "PlastiTrack is a web-based application that helps users monitor and reduce their plastic consumption and waste. Through its intuitive interface, users can log plastic-use events, track their progress over time with visual charts, and manage their usage history.",
    link: "https://plasti-track.vercel.app/",
    tags: ["Nextjs", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Kino-Xplorer",
    description: "Kino‑Xplorer is a sleek browser-based tool that lets you search, discover, and browse movies effortlessly. It uses a movie API to fetch up-to-date information, including genres, ratings, release dates, and synopses, providing a smooth and dynamic movie exploration experience.",
    link: "https://kino-xplorer.vercel.app/",
    tags: ["React", "API", "JavaScript"],
  },
  {
    title: "Bloggin' ",
    description: "Bloggin’ is a modern blogging platform where you can sign up, log in, and manage your posts with full control. It features user authentication for secure access, and lets you create, edit, and delete posts easily.",
    link: "https://bloggin-app-six.vercel.app//",
    tags: ["TypeScript", "Next.js", "Firebase"],
  },
  {
    title: "Dragon Repeller -RPG",
    description: "A browser-based Role-playing game, inspired by freeCodeCamp, featuring user authentication, game progress storage, and dynamic gameplay.",
    link: "https://omar-webcloud.github.io/Role-Playing-Game/",
    tags: ["JavaScript", "HTML+CSS", "MongoDB", "Express", "FirebaseAuth"],
  },
  {
    title: "Fresh Farm",
    description: "A frontend e-commerce platform for fruits and vegetables, built with react.",
    link: "https://fresh-farm-zeta.vercel.app/",
    tags: ["React", "JavaScript", "CSS"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden bg-black">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Glass Container */}
        <div className="max-w-6xl mx-auto backdrop-blur-sm bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-16">
          <div className="mb-16">
            <span className="text-gray-300 font-mono text-sm mb-3 block">{"// What I've built"}</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">My Projects</h2>
            <div className="h-1.5 w-24 bg-blue-400 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="flex flex-col h-full bg-blue-500/[0.03] border-white/10 backdrop-blur-md rounded-2xl transition-all duration-500 group overflow-hidden hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(14,100,233,0.15)]"
              >
                <CardHeader className="p-8 md:p-10 pb-4">
                  <CardTitle className="text-2xl md:text-3xl mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-400 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-8 md:p-10 pt-0 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-xs font-medium rounded-full bg-blue-500/10 border border-blue-900/20 text-blue-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    asChild
                    className="w-full h-12 bg-transparent border-blue-900/30 text-blue-400 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] border-2"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full font-bold uppercase tracking-wider text-sm"
                    >
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
