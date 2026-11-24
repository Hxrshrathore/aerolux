'use client'

import * as React from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { MapPin, Plane, Users, ArrowRight, Search, Sparkles } from "lucide-react"
import { properties } from "@/lib/properties"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const categories = ["All", "Private Jets", "Joyrides", "Business Trips", "Pilgrimage", "Air Ambulance", "Group Charters"]

function FleetContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [activeCategory, setActiveCategory] = React.useState(initialCategory)
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredFleet = properties.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.aircraftType && item.aircraftType.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-zinc-900"
            >
              30+ Aircrafts & Private Charters.
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 max-w-md text-base leading-relaxed font-medium"
          >
            Explore our versatile private aviation fleet operating from Mumbai Juhu Airport across India and international flight corridors.
          </motion.p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-zinc-200 pb-6">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-black text-white shadow-md shadow-black/20"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <input
              type="text"
              placeholder="Search aircraft or routes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-full py-2.5 pl-11 pr-4 text-xs font-medium focus:ring-2 focus:ring-black outline-none"
            />
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((charter, idx) => (
            <motion.div
              key={charter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="group flex flex-col justify-between bg-zinc-50/50 rounded-3xl p-5 border border-zinc-200 hover:border-zinc-400 hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={charter.image}
                    alt={charter.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/70 backdrop-blur-md text-white border border-white/20">
                      {charter.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold z-10 bg-black/40 backdrop-blur-md p-2 rounded-xl">
                    {charter.aircraftType}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{charter.title}</h3>
                      <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-bold mt-1">
                        <MapPin size={13} />
                        <span>{charter.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 border-y border-zinc-200 py-3 text-xs font-bold text-zinc-700">
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-zinc-400" />
                      <span>{charter.specs.beds}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Plane size={14} className="text-zinc-400" />
                      <span>{charter.specs.area}</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 line-clamp-3 font-medium leading-relaxed">
                    {charter.description}
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href={charter.ctaLink || "/book-flight"}
                  className="w-full flex items-center justify-between bg-black text-white px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                >
                  <span>{charter.ctaText || "Book Charter Now"}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default function PropertiesPage() {
  return (
    <React.Suspense fallback={
      <div className="pt-40 pb-20 text-center">
        <div className="w-8 h-8 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs uppercase font-bold tracking-widest text-zinc-500">Loading Fleet...</p>
      </div>
    }>
      <FleetContent />
    </React.Suspense>
  )
}
