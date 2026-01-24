import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Mail, Linkedin, Github, Download } from "lucide-react"

const contactLinks = [
  {
    name: "Email",
    value: "omarfarukcihs@gmail.com",
    href: "mailto:omarfarukcihs@gmail.com",
    icon: Mail,
    color: "purple", 
  },
  {
    name: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/md-omar-faruk-chowdhury",
    icon: Linkedin,
    color: "blue",
  },
  {
    name: "GitHub",
    value: "View my repositories",
    href: "https://github.com/omar-webcloud",
    icon: Github,
    color: "stone",
  },
]

// Color utility 
const glassColorMap = {
  blue: "from-blue-500/10 to-blue-400/5 border-blue-500/20 text-blue-400 group-hover:border-blue-500/50",
  stone: "from-stone-400/10 to-stone-200/5 border-stone-400/20 text-stone-300",
  purple: "from-red-400/10 to-red-200/5 border-red-400/20 text-red-500 group-hover:border-red-500/50",
};

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-primary font-mono text-sm mb-3 block">{"// Let's connect"}</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Contact Me</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((contact) => {
              const Icon = contact.icon
              return (
                <div key={contact.name} className="group relative">
                  <div className={`
                    h-full relative z-10 backdrop-blur-md bg-gradient-to-br border rounded-2xl 
                    transition-all duration-300 hover:-translate-y-2
                    ${glassColorMap[contact.color]}
                  `}>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer" className="block p-8 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-white">
                        {contact.name}
                      </h3>
                      <p className="text-sm opacity-60 break-all">{contact.value}</p>
                    </a>
                  </div>
                  
                  <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl bg-current ${glassColorMap[contact.color]}`} />
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
  
  <Button 
    size="lg" 
    asChild
    className="relative group h-14 px-8 rounded-xl overflow-hidden transition-all duration-300
               bg-blue-500/10 hover:bg-blue-500/20 backdrop-blur-md 
               border border-blue-500/30 hover:border-blue-500/60
               text-blue-400 hover:text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
  >
      <a href="mailto:omarfarukcihs@gmail.com" className="flex items-center gap-2">
        <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
        <span className="font-semibold tracking-wide">Send me an email</span>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/5 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </a>
    </Button>

    <Button 
    size="lg" 
    variant="outline"
    asChild
    className="relative group h-14 px-8 rounded-xl overflow-hidden transition-all duration-300
               bg-white/5 hover:bg-white/10 backdrop-blur-md 
               border border-white/10 hover:border-purple-500/40
               text-muted-foreground hover:text-purple-400 shadow-xl"
  >
    <a href="/Resume.pdf" download className="flex items-center gap-2">
      <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
      <span className="font-semibold tracking-wide">Download Resume</span>
    </a>
  </Button>
</div>

          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground font-mono">{"</> Omar © 2026"}</p>
        </div>
      </footer>
    </section>
  )
}
