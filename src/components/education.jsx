import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden bg-black">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-primary font-mono text-sm mb-3 block">{"// Academic Background"}</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">Education</h2>
            <div className="h-1.5 w-24 bg-primary rounded-full mx-auto" />
          </div>

          <div className="space-y-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-green-500/30 group">
              <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-green-500/10 text-green-400 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-white mb-1 group-hover:text-green-400 transition-colors">
                      Bachelor of Arts
                    </CardTitle>
                    <p className="text-lg text-gray-400 font-medium">
                      English Literature and Language
                    </p>
                    <p className="text-sm text-gray-500 mt-1 font-mono hover:text-green-400/80 transition-colors">
                      University of Chittagong
                    </p>
                  </div>
                </div>
                
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
