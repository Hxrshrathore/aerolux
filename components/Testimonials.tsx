'use client'

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Booking the airplane joyride for our wedding anniversary over Mumbai was magical. The sunset views of the coastline from above were breathtaking. Flyyo made the entire experience seamless from Juhu Airport.",
    author: "Rohan & Natasha M.",
    role: "Joyride Guests, Mumbai",
    experience: "Mumbai Skyline Joyride"
  },
  {
    quote: "When we needed an emergency air ambulance transfer from Jaipur to Mumbai on short notice, Flyyo mobilized an ICU-equipped aircraft in under 90 minutes. Their medical team was world-class and compassionate.",
    author: "Dr. Arvind Singhania",
    role: "Senior Consultant Surgeon",
    experience: "Air Ambulance Critical Care"
  },
  {
    quote: "Flyyo redefined luxury for our family during the Ek Dham Yatra to Kedarnath and Badrinath. The helicopter transfers and priority VIP darshan arrangements were flawless and respectful.",
    author: "Meenakshi Agarwal",
    role: "Pilgrimage Yatra Traveler, Delhi",
    experience: "Ek Dham Yatra Charter"
  },
  {
    quote: "As a corporate leadership group traveling across three cities in one day, Flyyo's private jet charter saved us over 14 hours. Boarding in 15 minutes at the private terminal was a game-changer.",
    author: "Vikramaditya K.",
    role: "Managing Director, Global Tech Capital",
    experience: "Corporate Business Charter"
  },
  {
    quote: "The in-flight service, gourmet catering, and leather cabin recliners are on par with the best international charter operators. Flyyo's pricing is transparent with zero hidden fees.",
    author: "Siddharth Nair",
    role: "Private Aviation Club Member",
    experience: "Midsize Jet Private Flight"
  }
]

export function Testimonials() {
  const [current, setCurrent] = React.useState(0)

  return (
    <section className="relative py-24 bg-zinc-950 overflow-hidden text-white">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 opacity-40">
        <Image 
          src="/assets/images/hero-jet.jpg" 
          alt="Flyyo Luxury Private Jet In Flight" 
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl bg-zinc-900/60 backdrop-blur-2xl p-8 sm:p-12 rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70">
              Trusted by 5,000+ Flyers
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="relative">
              <Quote className="text-white/10 absolute -top-4 -left-2 w-12 h-12 pointer-events-none" />
              <motion.p
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-lg sm:text-2xl font-normal text-white leading-relaxed italic relative z-10"
              >
                “{testimonials[current].quote}”
              </motion.p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 pt-4 border-t border-white/10">
              <div>
                <div className="text-white font-bold text-base sm:text-lg">{testimonials[current].author}</div>
                <div className="text-emerald-400 text-xs sm:text-sm font-semibold">{testimonials[current].role}</div>
                <div className="text-[10px] uppercase tracking-wider text-white/50 mt-1">{testimonials[current].experience}</div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  aria-label="Previous Testimonial"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                >
                  <ArrowLeft size={16} />
                </button>
                <button 
                  onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                  aria-label="Next Testimonial"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
