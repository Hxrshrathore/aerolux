'use client'

import * as React from "react"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { WhatsAppIcon } from "./WhatsAppIcon"

export function CommunityBanner() {
  return (
    <section className="py-8 sm:py-10 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-6 sm:p-8 md:p-10 border border-zinc-800 shadow-xl text-white"
      >
        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
          <div className="space-y-2.5 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              The AeroLux <span className="font-serif italic font-normal text-emerald-300">Community.</span>
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xl">
              Join our exclusive WhatsApp community to get real-time flight deals, empty leg alerts, and priority joyride booking slots.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/919876543210?text=Hi%20AeroLux%2C%20I%20want%20to%20join%20the%20VIP%20AeroLux%20Community."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 sm:px-7 sm:py-4 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:shadow-[0_0_35px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 whitespace-nowrap w-full sm:w-auto cursor-pointer"
            >
              <WhatsAppIcon size={19} className="shrink-0" />
              <span className="whitespace-nowrap">Join AeroLux Community</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform shrink-0" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
