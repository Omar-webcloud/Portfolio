import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Role-Playing-Game",
    description: 'A full stack browser-based RPG, inspired by the freeCodeCamp project, with user authentication and game progress storage.',
    link: "https://omar-webcloud.github.io/Role-Playing-Game/",
    tags: ["JavaScript", "HTML+CSS", " MongoDB", "Firebase" ],
  },
  {
    title: "E-Commerce App",
    description: "A simple e-commerce app built with react.",
    link: "https://fresh-farm-zeta.vercel.app/",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Movie Explorer App",
    description: "Get suggestions on which movie to watch this weekend.",
    link: "https://kino-xplorer.vercel.app/",
    tags: ["React", "API", "JavaScript"],
  },
  {
    title: "Bloggin' ",
    description: "A full stack blogging app with user authentication.",
    link: "https://bloggin-app-six.vercel.app//",
    tags: ["JavaScript", "TypeScript", "Next.js", "Firebase"],
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
