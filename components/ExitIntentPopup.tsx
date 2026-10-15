'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, ArrowRight, Sparkles, MessageCircle } from "lucide-react"

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
      }, 3000)
    }, 1200)
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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-zinc-950 border border-zinc-800 rounded-[32px] md:rounded-[40px] w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Left Image Side */}
            <div className="md:w-5/12 relative h-48 md:h-auto hidden sm:block">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("/assets/images/hero-jet.jpg")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-emerald-500/80 px-2.5 py-1 rounded-full text-black">
                  Up to 75% Off
                </span>
                <div className="text-xs font-bold mt-2">Empty Leg Private Flights</div>
              </div>
            </div>

            {/* Content Side */}
            <div className="md:w-7/12 p-8 md:p-10 space-y-5">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8"
                >
                  <div className="w-16 h-16 bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-400">
                    <ArrowRight size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Welcome Aboard</h3>
                  <p className="text-zinc-400 font-medium text-xs">
                    You are now subscribed to Flyyo exclusive charter deals and Joyride flash discounts.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-400 flex items-center gap-1.5">
                      <Sparkles size={12} /> Charter Deals are ON!
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                      Never Miss an Empty Leg Flight
                    </h2>
                    <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                      Get instant alerts for discounted private jet routes across India and airplane joyrides over Mumbai before seats fill up.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-white/5 border border-white/15 rounded-2xl py-3.5 px-4 focus:ring-2 focus:ring-emerald-500 focus:bg-white/10 transition-all text-xs text-white placeholder:text-zinc-500 outline-none"
                    />
                    <button
                      disabled={status === 'submitting'}
                      type="submit"
                      className="w-full bg-white text-black py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-zinc-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      {status === 'submitting' ? (
                         <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>Get Exclusive Flight Deals <ArrowRight size={14} /></>
                      )}
                    </button>
                  </form>

                  <div className="pt-1 border-t border-zinc-800 text-center">
                    <a
                      href="https://chat.whatsapp.com/IVHW93LqNxqLW3ZlbVOWdz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-[#25D366] hover:underline font-bold"
                    >
                      <MessageCircle size={14} /> Or Join Flyyo Community on WhatsApp
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
