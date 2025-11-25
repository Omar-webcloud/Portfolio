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
    title: "Movie Explorer App",
    description: "Kino‑Xplorer is a sleek browser-based tool that lets you search, discover, and browse movies effortlessly. It uses a movie API to fetch up-to-date information, including genres, ratings, release dates, and synopses, providing a smooth and dynamic movie exploration experience.",
    link: "https://kino-xplorer.vercel.app/",
    tags: ["React", "API", "JavaScript"],
  },
  {
    title: "Bloggin' ",
    description: "Bloggin’ is a modern blogging platform where you can sign up, log in, and manage your posts with full control. It features user authentication for secure access, and lets you create, edit, and delete posts easily.",
    link: "https://bloggin-app-six.vercel.app//",
    tags: ["JavaScript", "TypeScript", "Next.js", "Firebase"],
  },
  {
    title: "Role-Playing-Game",
    description: "A browser-based RPG inspired by freeCodeCamp, featuring user authentication, game progress storage, and dynamic gameplay.",
    link: "https://omar-webcloud.github.io/Role-Playing-Game/",
    tags: ["JavaScript", "HTML+CSS", "MongoDB", "Express", "FirebaseAuth"],
  },
  {
    title: "E-Commerce App",
    description: "A frontend e-commerce app built with react.",
    link: "https://fresh-farm-zeta.vercel.app/",
    tags: ["React", "JavaScript", "CSS"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto glow-border border-2 border-primary rounded-xl p-8">
          <div className="mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">{"// What I've built"}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="bg-card border border-cyan-8/10 rounded-xl glow-card transition-all duration-300 group overflow-hidden p-6"
              >
                <CardHeader className="mb-4">
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold rounded-full border border-cyan-400/30"
                        style={{
                          backgroundColor: "rgba(224, 255, 255, 0.2)", // light cyan with low opacity
                          color: "#00bcd4", // cyan text
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
  variant="outline"
  className="w-full text-primary bg-transparent border-2 border-cyan-200/50 rounded-md transition duration-300 hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.6)] hover:border-cyan-400"
>
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-full"
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
