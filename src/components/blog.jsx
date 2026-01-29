import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink } from "lucide-react"

const blogPosts = [
  {
    title: "Image Optimization Techniques Every Frontend Developer Should Know",
    description: "Images make a website look good, but they are also one of the biggest reasons a site becomes slow. When images are not handled properly, pages take longer to load and users leave early. That is why...",
    link: "https://bloggin-app-six.vercel.app/post/pYTSIN48N3C1LB93DPHq",
    date: "2026",
    color: "purple",
  },
  {
    title: "Flexbox vs Grid and How I Choose Between Them",
    description: "When I started learning modern CSS, Flexbox and Grid felt like magic. Suddenly layouts stopped being a fight and started to make sense. Over time though I realized they are not competitors...",
    link: "https://bloggin-app-six.vercel.app/post/SK7AwRIC5o3zZugpHRA2",
    date: "2025",
    color: "purple",
  },
]

const glassColorMap = {
  blue: "from-blue-500/10 to-blue-400/5 border-blue-500/20 text-blue-400 group-hover:border-blue-500/50",
  purple: "from-purple-500/10 to-purple-400/5 border-purple-500/20 text-purple-400 group-hover:border-purple-500/50",
};

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-primary font-mono text-sm mb-3 block">{"// Thoughts & Writings"}</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">My Blogs</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {blogPosts.map((post) => (
              <Card
                key={post.title}
                className={`flex flex-col h-full backdrop-blur-md bg-gradient-to-br border rounded-2xl transition-all duration-500 group overflow-hidden hover:-translate-y-2 hover:shadow-lg
                  ${glassColorMap[post.color] || glassColorMap.blue}
                `}
              >
                <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl bg-current`} />
                 
                <CardHeader className="p-5 md:p-10 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl md:text-3xl text-white group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-lg text-slate-400 leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-5 md:p-10 pt-0 mt-auto">
                  <Button
                    variant="outline"
                    asChild
                    className="w-full h-10 sm:h-12 bg-transparent border-blue-900/30 text-blue-400 rounded-xl transition-all duration-300 hover:bg-blue-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] border-2"
                  >
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full font-bold uppercase tracking-normal sm:tracking-wider text-[10px] sm:text-sm"
                    >
                      Read Article
                      <ExternalLink className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
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
