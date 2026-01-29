import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink } from "lucide-react"

const blogPosts = [
  {
    title: "Image Optimization Techniques Every Frontend Developer Should Know",
    description: "Images make a website look good, but they are also one of the biggest reasons a site becomes slow. When images are not handled properly, pages take longer to load and users leave early. That is why...",
    link: "https://bloggin-app-six.vercel.app/post/pYTSIN48N3C1LB93DPHq",
    date: "2026",
  },
  {
    title: "Flexbox vs Grid and How I Choose Between Them",
    description: "When I started learning modern CSS, Flexbox and Grid felt like magic. Suddenly layouts stopped being a fight and started to make sense. Over time though I realized they are not competitors...",
    link: "https://bloggin-app-six.vercel.app/post/SK7AwRIC5o3zZugpHRA2",
    date: "2025",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto backdrop-blur-sm bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-16">
          <div className="mb-16">
            <span className="text-primary font-mono text-sm mb-3 block">{"// Thoughts & Writings"}</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">My Blogs</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {blogPosts.map((post) => (
              <Card
                key={post.title}
                className="flex flex-col h-full bg-blue-500/[0.03] border-white/10 backdrop-blur-md rounded-2xl transition-all duration-500 group overflow-hidden hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(14,100,233,0.15)]"
              >
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
