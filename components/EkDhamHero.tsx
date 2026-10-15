'use client'

import * as React from "react"
import { motion } from "motion/react"

function HelicopterIcon({ className = "w-[18px] h-[18px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 4h16" />
      <path d="M12 4v4" />
      <path d="M7 8h10a4 4 0 0 1 4 4v1a3 3 0 0 1-3 3H9a4 4 0 0 1-4-4v-1a3 3 0 0 1 2-3z" />
      <path d="M5 16l-3 4" />
      <path d="M19 16l3 4" />
      <path d="M2 20h20" />
      <path d="M18 10l3-2" />
    </svg>
  )
}

function HeroYatraBookButton({ href = "#yatra-booking" }: { href?: string }) {
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

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white shadow-2xl shadow-black/40 hover:scale-[1.03] transition-all duration-300 border border-white/50 cursor-pointer"
    >
      {/* Dynamic Wave Layer Expanding from Cursor Contact Point */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none transition-[clip-path] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          backgroundColor: "#09090b",
          clipPath: isHovered
            ? `circle(160% at ${origin.x}px ${origin.y}px)`
            : `circle(0% at ${origin.x}px ${origin.y}px)`,
        }}
      />

      {/* Button Content */}
      <span
        className="relative z-10 flex items-center gap-2 text-[15px] sm:text-base font-medium tracking-tight antialiased transition-colors duration-300"
        style={{ color: isHovered ? "#ffffff" : "#09090b" }}
      >
        <span>Book Your Yatra</span>
        <HelicopterIcon
          className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  )
}

export function EkDhamHero() {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video) return

    // Intersection observer to play/pause video when entering/leaving viewport
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

    // Pinned scroll listener: pause video once user scrolls past 95% of hero to save GPU/CPU
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
      className="sticky top-0 z-0 h-screen min-h-[640px] w-full overflow-hidden bg-zinc-950 flex items-center justify-center"
    >
      {/* Background Drone Video of Kedarnath Temple & Snow-Capped Peaks */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
        >
          <source src="/assets/videos/bg/ek-dham-hero.webm" type="video/webm" />
        </video>

        {/* Subtle Cinematic Overlay — Reduced so the snowy peaks and temple shine brightly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/25" />
      </div>

      {/* Ambient Spiritual Golden Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col justify-center items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          {/* Headline — Clean One-Liner */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-5 text-center [text-shadow:_0_4px_24px_rgba(0,0,0,0.95),_0_2px_8px_rgba(0,0,0,0.85)]">
            Kedarnath By <span className="font-serif italic font-normal text-amber-200">Helicopter.</span>
          </h1>

          {/* Subheading — Clean One-Liner */}
          <p className="text-white text-sm sm:text-base md:text-lg font-light tracking-wide max-w-xl mx-auto mb-8 leading-relaxed text-center [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]">
            Exclusive 2N/3D Ex-Phata luxury package with VIP priority darshan passes
          </p>

          {/* Single Action CTA */}
          <div className="flex items-center justify-center">
            <HeroYatraBookButton href="#yatra-booking" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
