"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="text-xl font-mono font-bold glow-text">
            {"<Omar />"}
          </button>

          <div className="hidden md:flex items-center gap-6">
            {["about", "skills", "projects", "certificates", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  )
}
