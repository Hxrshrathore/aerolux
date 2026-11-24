'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, ArrowRight, Check } from "lucide-react"
import { WhatsAppIcon } from "./WhatsAppIcon"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasTriggered, setHasTriggered] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle')
  const [isEngaged, setIsEngaged] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsEngaged(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  React.useEffect(() => {
    if (hasTriggered || !isEngaged) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true)
        setHasTriggered(true)
      }
    }

    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    return () => document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
  }, [hasTriggered, isEngaged])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => {
        setIsOpen(false)
      }, 2500)
    }, 1000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 z-10 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X size={14} />
            </button>

            {/* Left Image Side */}
            <div className="md:w-5/12 relative h-40 md:h-auto hidden sm:block">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("/assets/images/hero-jet.jpg")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Up to 75% Off
                </span>
                <span className="text-xs font-semibold text-zinc-200">Empty Leg Flights</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="md:w-7/12 p-6 sm:p-7 space-y-4 flex flex-col justify-center">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 flex flex-col items-center justify-center text-center space-y-3"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
                    <Check size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white">You&apos;re on the radar</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed max-w-xs">
                    We&apos;ll notify you the moment an empty leg or flash joyride discount opens up.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-1.5 pr-4">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                      Never Miss an Empty Leg
                    </h2>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Instant alerts for private jet repositioning deals across India before seats fill up.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-3.5 focus:ring-1.5 focus:ring-white focus:bg-white/10 transition-all text-xs text-white placeholder:text-zinc-500 outline-none"
                    />
                    <button
                      disabled={status === 'submitting'}
                      type="submit"
                      className="w-full bg-white hover:bg-zinc-200 text-black py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      {status === 'submitting' ? (
                        <div className="w-3.5 h-3.5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>Get Flight Deals <ArrowRight size={13} /></>
                      )}
                    </button>
                  </form>

                  <div className="pt-2 border-t border-zinc-800/80 text-center">
                    <a
                      href="https://wa.me/919876543210?text=Hi%20AeroLux%2C%20I%20want%20to%20join%20the%20VIP%20AeroLux%20Community."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors font-medium"
                    >
                      <WhatsAppIcon size={13} className="shrink-0" /> Or get alerts on WhatsApp
                    </a>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
