'use client'

import * as React from "react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { 
  MapPin, 
  Plane, 
  Users, 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Share2, 
  Phone, 
  Mail, 
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Calculator
} from "lucide-react"
import { properties } from "@/lib/properties"
import { GlobalConversionModal } from "@/components/GlobalConversionModal"

export default function PropertyDetailsPage() {
  const params = useParams()
  const id = Number(params.id)
  
  const charter = properties.find(p => p.id === id) || properties[0]
  const [isCopied, setIsCopied] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [flightHours, setFlightHours] = React.useState(2)

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `Flyyo — ${charter.title}`,
          text: `Check out ${charter.title} by Flyyo Private Aviation: ${charter.description}`,
          url: window.location.href,
        })
      } catch (err) {
        if ((err as Error).name !== 'AbortError') console.error(err)
      }
    } else if (typeof navigator !== 'undefined') {
      await navigator.clipboard.writeText(window.location.href)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  return (
    <main className="pt-24 pb-24 bg-white">
      {/* Hero Header */}
      <section className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden bg-zinc-950">
        <Image
          src={charter.image}
          alt={charter.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Link 
                href="/book-flight" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-black transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-500 text-black">
                {charter.status}
              </span>
              <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/60 text-white backdrop-blur-md border border-white/20">
                {charter.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tight uppercase leading-none">
              {charter.title}
            </h1>
            
            <div className="flex items-center gap-2 text-white/80 font-medium text-sm md:text-base">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>{charter.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left 8 Cols: Specs & Gallery */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-zinc-200">
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Capacity</p>
                <p className="font-bold text-zinc-900 text-sm md:text-base">{charter.specs.beds}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Flight Range / Tour</p>
                <p className="font-bold text-zinc-900 text-sm md:text-base">{charter.specs.area}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Cruise Speed</p>
                <p className="font-bold text-zinc-900 text-sm md:text-base">{charter.specs.speed || "High Speed"}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Aircraft Type</p>
                <p className="font-bold text-zinc-900 text-xs md:text-sm truncate">{charter.aircraftType || "Private Aircraft"}</p>
              </div>
            </div>

            {/* Safety & Compliance Badge */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-emerald-950">DGCA Certified & Regulated</p>
                  <p className="text-xs text-emerald-700">Highest standard of commercial aviation airworthiness & safety.</p>
                </div>
              </div>
              <button
                onClick={handleShare}
                className="px-4 py-2 rounded-full bg-white text-xs font-bold uppercase tracking-wider text-zinc-700 border border-emerald-200 hover:bg-emerald-100 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Share2 size={13} /> {isCopied ? "Copied!" : "Share"}
              </button>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">
                Overview & Experience
              </h2>
              <p className="text-zinc-700 text-base md:text-lg leading-relaxed font-medium">
                {charter.description}
              </p>
            </div>

            {/* Features */}
            {charter.features && (
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900">
                  Key Flight Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {charter.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span className="font-bold text-zinc-900 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {charter.gallery && charter.gallery.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900">
                  Aircraft & Cabin Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {charter.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                      <Image
                        src={img}
                        alt={`${charter.title} Photo ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Flight Estimator Calculator */}
            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-200 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500">
                <Calculator size={16} className="text-black" /> Flight Time Estimator
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Estimate Your Charter Duration</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold text-zinc-700">
                  <span>Estimated Flight Time</span>
                  <span>{flightHours} Hours</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={flightHours}
                  onChange={(e) => setFlightHours(parseFloat(e.target.value))}
                  className="w-full accent-black cursor-pointer"
                />
              </div>

              <div className="p-4 bg-white rounded-2xl border border-zinc-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Starting Rate Benchmark</div>
                  <div className="text-lg font-black text-zinc-900">{charter.price}</div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                >
                  Get Route Quote
                </button>
              </div>
            </div>

          </div>

          {/* Right 4 Cols: Sticky Inquiry Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white border border-zinc-200 rounded-[32px] p-8 shadow-xl space-y-6">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600">
                  Flyyo Private Charter Desk
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 mt-1">{charter.title}</h3>
                <div className="text-xl font-black text-black mt-2">{charter.price}</div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-black text-white py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-md cursor-pointer"
                >
                  Book This Flight Now
                </button>

                <a
                  href={`https://wa.me/919511826428?text=Hi%20Flyyo%2C%20I%20am%20interested%20in%20booking%20${encodeURIComponent(charter.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-bold py-4 rounded-2xl text-xs uppercase tracking-widest transition-all"
                >
                  <MessageCircle size={16} className="fill-black" /> Chat with Coordinator
                </a>
              </div>

              <div className="pt-4 border-t border-zinc-100 space-y-3 text-xs text-zinc-600 font-medium">
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-zinc-400" />
                  <span>30-minute inquiry response guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-zinc-400" />
                  <span>+91 95118 26428 (24/7 Operations)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-zinc-400" />
                  <span>Juhu Airport, Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Booking Modal */}
      <GlobalConversionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedCharter={charter.title}
        mode="charter"
      />
    </main>
  )
}
