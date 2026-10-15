'use client'

import * as React from "react"
import { motion } from "motion/react"
import { MessageCircle, Sparkles, ArrowRight, Zap, Bell, ShieldCheck } from "lucide-react"

export function CommunityBanner() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 sm:p-12 md:p-16 border border-zinc-800 shadow-2xl text-white"
      >
        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
              <Zap size={14} className="fill-emerald-400" />
              Charter Deals are ON!!!
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              The Flyyo <span className="font-serif italic font-normal text-emerald-300">Community.</span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Join our Flyyo community to get the best Flight and Airplane Joyride deals and be the first one to grab them. Our community offers exclusive access to Limited offers and discounts you won&apos;t find anywhere else. Don&apos;t miss out — Join the Flyyo Community Now!
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-zinc-400 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-amber-400" /> Empty Leg Alerts
              </span>
              <span className="flex items-center gap-2">
                <Bell size={14} className="text-emerald-400" /> Joyride Flash Discounts
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-blue-400" /> Verified Member Perks
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <a
              href="https://chat.whatsapp.com/IVHW93LqNxqLW3ZlbVOWdz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-black text-xs md:text-sm uppercase tracking-widest px-8 py-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} className="fill-black" />
              Join Flyyo Community Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-3 font-semibold">
              Instant Access via Official WhatsApp
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
