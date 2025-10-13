"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6">
            <span className="text-primary font-mono text-sm md:text-base">{}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text">
            Hi! I'm <span className="text-primary">Omar</span>
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 font-light">A Web Developer</p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm Mohammad Omar, a web developer with an English major background, creating functional and creative
            websites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border text-lg px-8"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  )
}
