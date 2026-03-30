import { useEffect, useState } from "react"
import { ExternalLink, BookOpen, Clock } from "lucide-react"

const ARTICLES = [
  {
    title: "Image Optimization Techniques Every Frontend Developer Should Know",
    excerpt: "Images make a website look good, but they are also one of the biggest reasons a site becomes slow. When images are not handled properly, pages take longer to load and users leave early. That is why...",
    readTime: "5 min read",
    link: "https://bloggin-app-six.vercel.app/post/pYTSIN48N3C1LB93DPHq"
  },
  {
    title: "Flexbox vs Grid and How I Choose Between Them",
    excerpt: "When I started learning modern CSS, Flexbox and Grid felt like magic. Suddenly layouts stopped being a fight and started to make sense. Over time though I realized they are not competitors...",
    readTime: "4 min read",
    link: "https://bloggin-app-six.vercel.app/post/SK7AwRIC5o3zZugpHRA2"
  }
]

export function Blog() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-8 py-6 lg:py-16 relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12 pb-8 sm:pb-16 lg:pb-24">
          
          <div className={`w-full lg:w-[45%] lg:sticky lg:top-0 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl leading-[0.95] font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-tighter">
              Writings &<br /> Insights
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground uppercase tracking-widest font-light mb-4 sm:mb-6">
              Blog & Articles
            </p>
            <div className="max-w-md hidden lg:block">
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                Sharing my thoughts on frontend development, design systems, and the evolving web landscape.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[50%] flex flex-col gap-6 sm:gap-8">
            {ARTICLES.map((article, idx) => (
              <a 
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group minimal-card p-5 sm:p-8 bg-background border border-border relative transition-all duration-1000 transform hover:-translate-y-1 hover:border-foreground/20 hover:bg-black/[0.01] ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {article.readTime}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-2 group-hover:gap-4 transition-all">
                    Read Article <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
