'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { Sparkles } from "lucide-react"

interface Hotspot {
  top: string
  left: string
  title: string
  detail: string
}

interface TabData {
  id: string
  label: string
  image: string
  trivia: {
    highlight: string
    text: string
  }
  hotspots: Hotspot[]
}

const tabs: TabData[] = [
  {
    id: 'cabin',
    label: 'VIP Luxury Cabin',
    image: '/assets/images/cabin-interior.jpg',
    trivia: {
      highlight: 'Did You Know?',
      text: 'At 41,000 ft, private jet cabin pressure keeps your tastebuds 100% sharp — unlike commercial flights where dry air dulls flavor by over 30%!'
    },
    hotspots: [
      { top: '44%', left: '32%', title: 'Full Lie-Flat Bed', detail: 'Converts in under 6 seconds for continuous, deep sleep across timezones.' },
      { top: '68%', left: '56%', title: 'Handcrafted Italian Leather', detail: 'Stitched by master artisans using buttery soft, hand-selected leather.' },
      { top: '38%', left: '78%', title: 'Acoustic Soundproofing & Wi-Fi', detail: 'Whisper-quiet cabin technology allowing effortless conversations and video calls in flight.' }
    ]
  },
  {
    id: 'fleet',
    label: 'Fleet & Hangar',
    image: '/assets/images/fleet-hangar.jpg',
    trivia: {
      highlight: 'Aviation Fact:',
      text: 'Private jets can land at 200+ airfields across India, while commercial airlines can only access around 80 major city airports!'
    },
    hotspots: [
      { top: '50%', left: '34%', title: 'DGCA Certified Fleet', detail: 'Strict civil aviation protocols with vetted dual-captain cockpit operations.' },
      { top: '62%', left: '68%', title: '24/7 Dedicated Ground Crew', detail: 'Personalized ramp marshalling and direct tarmac boarding at Juhu Airport.' }
    ]
  },
  {
    id: 'exterior',
    label: 'Jet In Flight',
    image: '/assets/images/hero-jet.jpg',
    trivia: {
      highlight: 'Fast Fact:',
      text: 'Flying at 45,000 ft puts you well above thunderstorms, clouds, and commercial traffic for the smoothest ride on Earth!'
    },
    hotspots: [
      { top: '52%', left: '46%', title: 'Twin High-Bypass Jet Engines', detail: 'Mach 0.88 high-speed cruising shaving hours off domestic and regional journeys.' },
      { top: '34%', left: '72%', title: 'Stratospheric Cruising', detail: 'High-altitude thin air minimizes turbulence and optimizes fuel efficiency.' }
    ]
  }
]

function AirplaneIcon({ className = "w-[18px] h-[18px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.542 8.382L2.958 4.902l-1.25 1.26c-0.18 0.17-0.14 0.45 0.07 0.58l11.083 6.465" />
      <path d="M17.884 17.581l7.374 12.642c0.13 0.209 0.41 0.25 0.58 0.07l1.26-1.25l-3.903-16.359" />
      <path d="M9.134 19.857l-6.336-0.715l-1.19 1.189c-0.18 0.18-0.13 0.48 0.09 0.6l3.787 1.975" />
      <path d="M8.109 24.625l2.958 5.677c0.12 0.221 0.42 0.271 0.6 0.091l1.19-1.19l-0.715-6.333" />
      <path d="M7.328 24.673l0.4-0.011c0.12-0.01 2.81-0.14 4.88-2.22c0.63-0.58 14.51-13.32 15.99-14.811c2.2-2.2 2.15-5.149 1.54-5.77c-0.61-0.61-3.58-0.66-5.77 1.54c-1.5 1.5-14.23 15.359-14.82 16c-0.644 0.649-1.104 1.354-1.43 2.024" />
      <line x1="10.5" y1="21.5" x2="4" y2="28" />
      <path d="M27.498 3.502c0.552 0 1 0.448 1 1" />
    </svg>
  )
}

function InteractiveBookButton() {
  const [origin, setOrigin] = React.useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setOrigin({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setIsHovered(true)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setOrigin({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setIsHovered(false)
  }

  return (
    <Link
      href="/book-flight"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white shadow-2xl shadow-black/40 hover:scale-[1.03] transition-all duration-300 border border-white/40 cursor-pointer"
    >
      {/* Wave layer expanding dynamically from the point of cursor contact */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none transition-[clip-path] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          backgroundColor: '#09090b',
          clipPath: isHovered
            ? `circle(160% at ${origin.x}px ${origin.y}px)`
            : `circle(0% at ${origin.x}px ${origin.y}px)`,
        }}
      />

      {/* Button content — matching Hero button typography and 45° line-art airplane icon */}
      <span
        className="relative z-10 flex items-center gap-2.5 text-[14px] sm:text-[15px] font-medium tracking-tight antialiased transition-colors duration-300"
        style={{ color: isHovered ? '#ffffff' : '#09090b' }}
      >
        <span>Book Your Flight</span>
        <AirplaneIcon
          className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  )
}

export function InteractiveSection() {
  const [activeTab, setActiveTab] = React.useState(tabs[0].id)
  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0]

  return (
    <section className="relative w-full bg-zinc-950 text-white overflow-hidden py-10 sm:py-12 lg:py-14 px-6 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full space-y-4 sm:space-y-6">
        
        {/* Top Header: Title & Navbar CTA-style Tab Switcher */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6">
          <div className="max-w-2xl space-y-1">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.1]"
            >
              Uncompromising <span className="font-serif italic font-normal text-white/50">Luxury in</span> Every Flight.
            </motion.h2>
          </div>
          
          {/* Tab Switcher with Navbar CTA typography */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap bg-white/10 backdrop-blur-xl p-1 sm:p-1.5 rounded-full border border-white/15 shadow-2xl shrink-0"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-tight antialiased transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id 
                    ? 'bg-white text-[#09090b] shadow-[0_4px_20px_rgba(255,255,255,0.25)]' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Clean Showcase Viewport with Proportional Height to Fit in Single Viewport */}
        <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[430px] xl:h-[460px] max-h-[50vh] rounded-[24px] md:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl bg-zinc-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={currentTab.image}
                alt={currentTab.label}
                fill
                priority
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Atmospheric Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-zinc-950/20 pointer-events-none" />

              {/* Elegantly Styled Hotspots with Luxury Tooltips */}
              {currentTab.hotspots.map((spot, idx) => (
                <div 
                  key={`${activeTab}-${idx}`}
                  className="absolute group z-20"
                  style={{ top: spot.top, left: spot.left }}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.25 + idx * 0.1, type: "spring" }}
                    className="relative flex items-center justify-center cursor-pointer"
                  >
                    {/* Outer frosted glass circle without pulsing animation */}
                    <div className="relative w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/70 shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-white group-hover:border-white">
                      <div className="w-2.5 h-2.5 rounded-full bg-white transition-colors duration-300 group-hover:bg-[#09090b]" />
                    </div>

                    {/* Luxury Tooltip Card popping up on hover */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-11 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 -translate-y-2 group-hover:translate-y-0 z-40 min-w-[210px] sm:min-w-[250px] max-w-[280px]">
                      <div className="p-3 sm:p-3.5 rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/90 space-y-1 text-left">
                        {/* Title matching Navbar CTA button typography without yellow dot */}
                        <div className="text-[14px] sm:text-[15px] font-medium tracking-tight antialiased text-white">
                          {spot.title}
                        </div>
                        <p className="text-[12px] sm:text-[12.5px] text-zinc-300/90 leading-snug font-normal">
                          {spot.detail}
                        </p>
                      </div>
                      {/* Downward pointing caret */}
                      <div className="w-2.5 h-2.5 bg-zinc-950/95 border-r border-b border-white/20 rotate-45 mx-auto -mt-1.5" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Bar: Fun Engaging Non-Tech Flight Trivia on left, Hero-style CTA on right */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-1 sm:pt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex items-start sm:items-center gap-2.5 max-w-xl"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 shadow-sm">
                <Sparkles size={13} className="fill-amber-300 text-amber-300" />
              </div>
              <p className="text-xs sm:text-[13px] text-zinc-300/95 leading-relaxed font-normal">
                <span className="font-bold text-amber-300 mr-1.5">{currentTab.trivia.highlight}</span>
                {currentTab.trivia.text}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="shrink-0">
            <InteractiveBookButton />
          </div>
        </div>

      </div>
    </section>
  )
}
