'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Plane } from "lucide-react"
import CardNav from "./CardNav"
import { GlobalConversionModal } from "./GlobalConversionModal"
import { siteConfig } from "@/lib/config"

export function Navbar() {
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const pathname = usePathname()

  const isHomepage = pathname === '/'

  React.useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (!isHomepage) {
        const raw = Math.min(Math.max(y / 200, 0), 1)
        setScrollProgress(raw)
        setIsScrolled(raw > 0.5)
        return
      }

      const bookingEl = document.getElementById('booking')
      if (bookingEl) {
        const rect = bookingEl.getBoundingClientRect()
        // The navbar sits near the top (bottom around 95px)
        const navBottom = 95
        // Distance from the bottom of the booking section to the navbar bottom
        const distanceToEnd = rect.bottom - navBottom
        // Transition starts only in the final 160px before the end of the booking section
        // and completes exactly when the booking section ends (distanceToEnd <= 0)
        const TRANSITION_WINDOW = 160

        if (distanceToEnd > TRANSITION_WINDOW) {
          // Throughout hero and entire booking section: 100% transparent fluid glass
          setScrollProgress(0)
          setIsScrolled(false)
        } else if (distanceToEnd <= 0) {
          // Booking section has ended: 100% completed black navbar
          setScrollProgress(1)
          setIsScrolled(true)
        } else {
          // Smooth transition strictly as the booking section departs
          const raw = 1 - distanceToEnd / TRANSITION_WINDOW
          const eased = raw * raw * (3 - 2 * raw)
          setScrollProgress(eased)
          setIsScrolled(raw > 0.5)
        }
      } else {
        const raw = Math.min(Math.max((y - 1700) / 160, 0), 1)
        setScrollProgress(raw)
        setIsScrolled(raw > 0.5)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomepage])

  if (pathname === '/login' || pathname === '/dashboard') return null

  // ─── Base Color Logic ───
  // The base layer stays light/glassy; the dark wave layer (nav-splash-wave) sweeps across
  // dynamically based on scrollProgress, transitioning the logo and hamburger to white strictly as it hits them.
  const baseColor = 'rgba(255, 255, 255, 0.85)'
  const menuColor = '#09090b'
  const buttonBgColor = '#09090b'
  const buttonTextColor = '#ffffff'

  // Build CardNav items from siteConfig
  const cardItems = siteConfig.navigation.map((item, idx) => {
    const darkShades = ['rgba(22, 22, 26, 0.95)', 'rgba(26, 26, 31, 0.95)', 'rgba(30, 30, 36, 0.95)', 'rgba(24, 24, 28, 0.95)']
    return {
      label: item.label,
      bgColor: darkShades[idx % darkShades.length],
      textColor: '#ffffff',
      links: item.sections.flatMap(section =>
        section.links.map(link => ({
          label: link.label,
          href: link.href,
          ariaLabel: link.label,
        }))
      )
    }
  })

  return (
    <>
      <CardNav
        logoText="AEROLUX"
        logoHref="/"
        items={cardItems}
        baseColor={baseColor}
        menuColor={menuColor}
        buttonBgColor={buttonBgColor}
        buttonTextColor={buttonTextColor}
        buttonLabel="Login"
        buttonHref="/login"
        ease="circ.out"
        isScrolled={isScrolled}
        scrollProgress={scrollProgress}
        className={`transition-all duration-500 ${isScrolled ? '!top-[0.5em]' : ''}`}
      />

      <GlobalConversionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="charter"
      />
    </>
  )
}
