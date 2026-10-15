'use client'

import * as React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowRight, Plane, Users, Compass, ShieldAlert, Sparkles, HeartPulse, Building2 } from "lucide-react"
import { properties } from "@/lib/properties"
import Link from "next/link"

const categoryIcons: Record<string, React.ReactNode> = {
  "Private Jets": <Plane size={14} />,
  "Joyrides": <Sparkles size={14} />,
  "Business Trips": <Building2 size={14} />,
  "Pilgrimage": <Compass size={14} />,
  "Air Ambulance": <HeartPulse size={14} />,
  "Group Charters": <Users size={14} />,
}

export function PropertyGrid() {
  const [selectedFilter, setSelectedFilter] = React.useState<string>("All")

  const filteredFleet = selectedFilter === "All" 
    ? properties 
    : properties.filter(item => item.category === selectedFilter)

  return (
    <section id="charters" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
        <div className="space-y-4">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black" />
            30+ Aircrafts in Our Fleet
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">
            Book a <span className="font-serif italic font-normal text-zinc-500">Private Charter</span> Today.
          </h2>
        </div>
        <p className="text-zinc-700 max-w-md text-sm sm:text-base leading-relaxed font-medium">
          From exhilarating airplane joyrides over Mumbai to bespoke transatlantic business flights and life-saving medical evacuations—explore our private charter solutions.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
        {["All", "Private Jets", "Joyrides", "Business Trips", "Pilgrimage", "Air Ambulance", "Group Charters"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all cursor-pointer ${
              selectedFilter === cat
                ? "bg-black text-white shadow-lg shadow-black/20"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Charter Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFleet.map((charter, idx) => (
          <motion.div
            key={charter.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer flex flex-col justify-between h-full bg-white rounded-3xl p-4 border border-zinc-200 hover:border-zinc-400 hover:shadow-2xl transition-all duration-500"
          >
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={charter.image}
                  alt={charter.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md bg-black/60 text-white border border-white/20 flex items-center gap-1.5">
                    {categoryIcons[charter.category]}
                    {charter.category}
                  </span>

                  {charter.category === "Joyrides" && (
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-amber-500 text-black shadow-md flex items-center gap-1 w-fit">
                      <Sparkles size={11} /> Top Rated Joyride
                    </span>
                  )}

                  {charter.category === "Air Ambulance" && (
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-red-600 text-white shadow-md flex items-center gap-1 w-fit">
                      <ShieldAlert size={11} /> 24/7 Medevac
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/80">{charter.location}</div>
                  <div className="text-sm font-semibold">{charter.aircraftType}</div>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 group-hover:text-black transition-colors">
                      {charter.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-0.5">
                      {charter.tagline}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-zinc-100 text-zinc-900 border border-zinc-200">
                      {charter.status}
                    </span>
                  </div>
                </div>

                {/* Specs Bar */}
                <div className="grid grid-cols-2 gap-4 border-y border-zinc-200 py-3 text-xs text-zinc-700 font-bold">
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-zinc-500" />
                    <span>{charter.specs.beds}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane size={14} className="text-zinc-500" />
                    <span>{charter.specs.area}</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                  {charter.description}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="px-2 pt-6 mt-auto">
              <Link
                href={charter.ctaLink || "/book-flight"}
                className="w-full group/btn flex items-center justify-between bg-zinc-950 text-white px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-all shadow-md group-hover:shadow-lg"
              >
                <span>{charter.ctaText || "Book Charter Now"}</span>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                  <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
