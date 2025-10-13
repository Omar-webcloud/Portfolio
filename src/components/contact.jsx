import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

const contactLinks = [
  {
    name: "Email",
    value: "omarfarukcihs@gmail.com",
    href: "mailto:omarfarukcihs@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/md-omar-faruk-chowdhury",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "View my repositories",
    href: "https://github.com/omar-webcloud",
    icon: Github,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-primary font-mono text-sm mb-2 block">{"// Let's connect"}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((contact) => {
              const Icon = contact.icon
              return (
                <Card
                  key={contact.name}
                  className="bg-card border-border hover:border-primary transition-all duration-300 group"
                >
                  <a href={contact.href} target="_blank" rel="noopener noreferrer" className="block p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {contact.name}
                    </h3>
                    <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
                  </a>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              <a href="mailto:omarfarukcihs@gmail.com">Send me an email</a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground font-mono">{"</> Omar © 2025"}</p>
        </div>
      </footer>
    </section>
  )
}
