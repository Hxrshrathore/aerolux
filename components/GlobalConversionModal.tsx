'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, User, Phone, Mail, Calendar, Plane, CheckCircle2, MapPin, Users } from "lucide-react"

interface GlobalConversionModalProps {
  isOpen: boolean
  onClose: () => void
  preSelectedCharter?: string
  mode?: 'charter' | 'joyride' | 'brochure'
}

const aircraftOptions = [
  "Private Jet (Light / Midsize / Super Midsize)",
  "Airplane Joyride (Mumbai Scenic / Coastal Tour)",
  "Business Flight (Multi-City Corporate Charter)",
  "Pilgrimage Charter (Ek Dham / Char Dham Yatra)",
  "Air Ambulance (24/7 Medevac ICU Flight)",
  "Group Charter (VIP Commercial Delegation)",
]

export function GlobalConversionModal({ isOpen, onClose, preSelectedCharter, mode = 'charter' }: GlobalConversionModalProps) {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    departure: "",
    destination: "",
    pax: "2",
    charterType: preSelectedCharter || aircraftOptions[0]
  })

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => {
        setStatus('idle')
        onClose()
      }, 2500)
    }, 1200)
  }

  const title = mode === 'joyride' ? 'Book Airplane Joyride' : 'Book a Private Flight'
  const subtitle = mode === 'joyride'
    ? 'Experience Mumbai and the coast from above. Instant confirmation from Juhu Airport.'
    : 'Receive aircraft availability and fixed charter pricing within 30 minutes.'

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl z-10 border border-zinc-100 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors cursor-pointer text-zinc-600"
            >
              <X size={18} />
            </button>

            {status === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Flight Query Dispatched!</h3>
                <p className="text-zinc-600 text-sm max-w-xs mx-auto">
                  Our Juhu Airport flight coordinator will reach you on WhatsApp within 30 minutes with aircraft tail numbers and quote.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2 pr-8">
                  <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-emerald-600 flex items-center gap-1.5">
                    <Plane size={13} /> Flyyo Aviation Desk
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">{title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-500 font-medium">{subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 ml-1">Charter Category</label>
                    <select
                      value={formData.charterType}
                      onChange={(e) => setFormData({ ...formData, charterType: e.target.value })}
                      className="w-full mt-1 bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-black"
                    >
                      {aircraftOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 ml-1">From</label>
                      <input
                        type="text"
                        placeholder="Departure City"
                        value={formData.departure}
                        onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
                        className="w-full mt-1 bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 ml-1">To</label>
                      <input
                        type="text"
                        placeholder="Destination City"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full mt-1 bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 ml-1">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full mt-1 bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 ml-1">Passengers *</label>
                      <input
                        required
                        type="number"
                        min="1"
                        max="180"
                        placeholder="No. of Pax"
                        value={formData.pax}
                        onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                        className="w-full mt-1 bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 ml-1">WhatsApp Phone *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 95118 26428"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full mt-1 bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-wider text-zinc-600 ml-1">Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full mt-1 bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 text-xs sm:text-sm font-medium outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full mt-2 bg-black hover:bg-zinc-800 text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Transmitting Request...' : 'Request Instant Flight Quotation'}
                  </button>

                  <p className="text-[10px] text-center text-zinc-400 font-medium">
                    Direct operations line: +91 95118 26428 • Juhu Airport, Mumbai
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
