import React from "react"
import { motion } from "framer-motion"

export function Splash({ theme }) {
  // Stagger index for each stroke of the letters
  const paths = [
    // O
    { d: "M 70,75 A 35,40 0 1,1 70,74 Z", index: 0 },
    // M
    { d: "M 130,115 V 35 L 165,85 L 200,35 V 115", index: 1 },
    // A - main diagonal lines
    { d: "M 240,115 L 270,35 L 300,115", index: 2 },
    // A - horizontal bridge line
    { d: "M 252,85 H 288", index: 2.3 },
    // R - vertical and loop lines
    { d: "M 340,115 V 35 H 380 A 20,20 0 0,1 380,75 H 340", index: 3 },
    // R - leg line
    { d: "M 370,75 L 395,115", index: 3.3 }
  ]

  // This variant perfectly replicates the AnimeJS draw effect: ['0 0', '0 1', '1 1']
  // pathLength goes from 0 to 1 (draws in) and pathOffset goes from 0 to 1 (draws out)
  const lineVariants = {
    hidden: { 
      pathLength: 0, 
      pathOffset: 0, 
      opacity: 0 
    },
    visible: (index) => ({
      pathLength: [0, 1, 1, 0],
      pathOffset: [0, 0, 0, 1],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.45, 0.55, 1], // Stays fully drawn in the middle
        delay: index * 0.3,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5
      }
    })
  }

  const isDark = theme === "dark"

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-colors duration-500 ${isDark ? "dark" : ""}`}
      style={{
        backgroundColor: isDark ? "oklch(0.12 0.02 240)" : "#fdfbf7",
        color: isDark ? "oklch(0.98 0.01 95)" : "#000000"
      }}
    >
      <div className="w-[80%] max-w-[600px] px-4">
        <svg viewBox="0 0 500 150" className="w-full h-auto overflow-visible">
          <g>
            {paths.map((p, idx) => (
              <motion.path
                key={idx}
                d={p.d}
                fill="none"
                stroke="currentColor"
                strokeWidth={8}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                custom={p.index}
                style={{ willChange: "pathLength, pathOffset, opacity" }}
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  )
}
