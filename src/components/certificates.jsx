import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Award, ExternalLink } from "lucide-react"

const certificates = [
  {
    title: "Web Development",
    issuer: "SoloLearn",
    link: "https://api2.sololearn.com/v2/certificates/CC-HMCA6F6M/image/png?t=638934664199742353",
    color: "blue",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    link: "https://freecodecamp.org/certification/fcc-43a93b12-1d40-4a5b-a38b-9b4846c24ed9/responsive-web-design",
    color: "purple",
  },
]

const glassColorMap = {
  blue: {
    card: "bg-blue-500/5 border-blue-500/20 group-hover:border-blue-500/50 shadow-blue-500/10",
    button: "border-blue-400/50 text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]",
    icon: "bg-blue-500/10 text-blue-400",
  },
  purple: {
    card: "bg-purple-500/5 border-purple-500/20 group-hover:border-purple-500/50 shadow-purple-500/10",
    button: "border-purple-400/50 text-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]",
    icon: "bg-purple-500/10 text-purple-400",
  },
};

export function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-32 relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 md:p-16">
          <div className="mb-16">
            <span className="text-primary font-mono text-sm mb-3 block">{"// My achievements"}</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">Certificates</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <Card
                key={cert.title}
                className={`
                  backdrop-blur-md rounded-xl transition-all duration-500 group overflow-hidden 
                  hover:-translate-y-2 hover:shadow-2xl
                  ${glassColorMap[cert.color].card}
                `}
              >
                <CardHeader className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${glassColorMap[cert.color].icon} group-hover:bg-opacity-20`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1 text-white transition-colors">
                        {cert.title}
                      </CardTitle>
                      <p className="text-sm text-slate-400 font-mono">{cert.issuer}</p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <Button
                    variant="outline"
                    className={`w-full bg-transparent border-2 rounded-lg transition duration-300 backdrop-blur-sm ${glassColorMap[cert.color].button}`}
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full font-semibold"
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
