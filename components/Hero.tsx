'use client'

import * as React from "react"
import { motion } from "motion/react"
import Link from "next/link"

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

function HeroBookButton() {
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
      className="group relative overflow-hidden inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white shadow-2xl shadow-black/35 hover:scale-[1.03] transition-all duration-300 border border-white/40 cursor-pointer"
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

      {/* Button content — Apple-style typography with 45° line-art airplane icon */}
      <span
        className="relative z-10 flex items-center gap-2 text-[15px] sm:text-base font-medium tracking-tight antialiased transition-colors duration-300"
        style={{ color: isHovered ? '#ffffff' : '#09090b' }}
      >
        <span>Book Now</span>
        <AirplaneIcon
          className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  )
}

export function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video) return

    // Auto-pause video when scrolled out of viewport, auto-play when entering
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.05 }
    )

    if (section) {
      observer.observe(section)
    }

    // Scroll listener for pinned overlapping effect:
    // Once user scrolls past 90% of hero height, pause video to save GPU/CPU resources
    const handleScroll = () => {
      const heroThreshold = window.innerHeight * 0.95
      if (window.scrollY >= heroThreshold) {
        if (!video.paused) {
          video.pause()
        }
      } else {
        if (video.paused) {
          video.play().catch(() => {})
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="sticky top-0 z-0 h-screen min-h-[600px] w-full overflow-hidden bg-zinc-950 flex items-center justify-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/videos/bg/herobg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col justify-center items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-5 text-center [text-shadow:_0_4px_24px_rgba(0,0,0,0.95),_0_2px_8px_rgba(0,0,0,0.85)]">
            Journeys Without <span className="font-serif italic font-normal text-amber-200">Boundaries.</span>
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mb-8 leading-relaxed text-center [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]">
            Bespoke itineraries, VIP private charters &amp; sacred Ek Dham pilgrimage charters
          </p>

          {/* Single Action CTA: Book Now with Arrow & Cursor-Contact Wave Transition */}
          <div className="flex items-center justify-center">
            <HeroBookButton />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
