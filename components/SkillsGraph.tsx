"use client"

import React from "react"

type Skill = {
  id: string
  name: string
  pct: number
  note?: string
  color?: string
}

const skills: Skill[] = [
  {
    id: "html",
    name: "HTML",
    pct: 100,
    note: "Semantic markup for web & Next.js pages",
    color: "bg-yellow-400",
  },
  {
    id: "css",
    name: "CSS",
    pct: 90,
    note: "Tailwind / Bootstrap / custom styles",
    color: "bg-sky-500",
  },
  {
    id: "js",
    name: "JavaScript",
    pct: 75,
    note: "ES6+, React & client-side logic",
    color: "bg-amber-500",
  },
  {
    id: "php",
    name: "PHP",
    pct: 80,
    note: "Laravel & WordPress backends",
    color: "bg-violet-600",
  },
  {
    id: "wp",
    name: "WordPress / CMS",
    pct: 90,
    note: "Theme & plugin work, CMS integrations",
    color: "bg-emerald-500",
  },
  {
    id: "ps",
    name: "Photoshop",
    pct: 55,
    note: "Basic mockups, asset prep for sites",
    color: "bg-pink-500",
  },
]

export default function SkillsGraph() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <header className="mb-6 text-center">
        <h2 className="text-3xl font-extrabold">Our Skills</h2>
        <p className="text-gray-600 mt-2">We’re Pretty Awesome — skills shown as proficiency</p>
      </header>

      <div className="space-y-6">
        {skills.map((s) => (
          <div key={s.id} className="flex flex-col md:flex-row md:items-center md:gap-6">
            {/* Left: label & note */}
            <div className="w-full md:w-56">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <span className="text-sm font-medium text-gray-700">{s.pct}%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{s.note}</p>
            </div>

            {/* Right: graph bar */}
            <div className="flex-1 mt-3 md:mt-0">
              <div
                className="relative h-6 rounded-full bg-gray-200 overflow-hidden shadow-inner"
                role="img"
                aria-label={`${s.name} proficiency ${s.pct} percent`}
              >
                {/* grid-like background (subtle) */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff00,#ffffff00)]">
                  {/* optional grid lines using repeating-linear-gradient */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 40px)",
                      pointerEvents: "none",
                    }}
                  />
                </div>

                {/* animated fill */}
                <div
                  className={`${s.color} h-full rounded-full shadow-sm flex items-center`}
                  style={{
                    width: `${s.pct}%`,
                    transition: "width 1200ms cubic-bezier(.2,.9,.2,1)",
                  }}
                >
                  {/* small label inside bar for higher percentages */}
                  <span
                    className={`ml-3 text-xs font-semibold text-white ${
                      s.pct < 30 ? "opacity-0 md:opacity-100" : ""
                    }`}
                  >
                    {s.pct}%
                  </span>
                </div>

                {/* ticks overlay on the right for accessibility/visual */}
                <div className="absolute right-0 top-0 bottom-0 flex items-center pr-2 pointer-events-none">
                  <div className="text-xs text-gray-600 hidden md:block">0</div>
                </div>
              </div>

              {/* percentage scale below */}
              <div className="mt-2 flex items-center justify-between text-[11px] text-gray-400">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Small legend / context */}
      <footer className="mt-8 text-sm text-gray-500">
        <p>
          Notes: Percentages are based on projects & experience — e.g., Next.js, React and backend work
          (Express/Flask/Laravel) across portfolio projects like Elite Shop, Speedy Spanners and the Loan
          App.
        </p>
      </footer>
    </section>
  )
}
