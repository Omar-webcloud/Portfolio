export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-primary font-mono text-sm mb-2 block">{"// Get to know me"}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Headshot with sci-fi styling */}
            <div className="flex-shrink-0">
              <div className="relative group">
                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-cyan-400 opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-300" />

                {/* Image container */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300">
                  <img src="/images/omar-headshot.jpg" alt="Omar's headshot" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground flex-1">
              <p>
               I create functional and creative websites that focus on clean design and smooth user experiences. I bring strong communication skills, attention to detail, and a problem-solving mindset into every project. As a developer, I’m driven by curiosity, continuous learning, and a genuine passion for building things that work well and look great.
              </p>

              <p>
                Over time, I've dedicated myself to mastering modern web technologies and best practices, proving that
                determination and discipline can build expertise. I ensure the websites I develop are responsive,
                user-friendly, and visually appealing. I balance creativity with functionality to deliver impactful
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
