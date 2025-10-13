import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Award, ExternalLink } from "lucide-react"

const certificates = [
  {
    title: "Web Development Certificate",
    issuer: "SoloLearn",
    link: "https://api2.sololearn.com/v2/certificates/CC-HMCA6F6M/image/png?t=638934664199742353",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/fcc-43a93b12-1d40-4a5b-a38b-9b4846c24ed9/responsive-web-design",
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glow-border border-2 border-primary rounded-xl p-8">
          <div className="mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">{"// My achievements"}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <Card
                key={cert.title}
                className="bg-card border-border hover:border-primary transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-mono">{cert.issuer}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full"
                    >
                      View Certificate
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
