'use client'

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Plane, Sparkles } from "lucide-react"

const posts = [
  {
    slug: "airplane-joyride-mumbai-experience",
    title: "The Ultimate Guide to Airplane Joyrides in Mumbai: Skyline, Sunset & Celebration Flights",
    excerpt: "Everything you need to know before taking off from Juhu Airport: best flight times, iconic aerial landmarks over Marine Drive and Sea Link, and what to wear.",
    category: "Joyride Guides",
    date: "Feb 28, 2025",
    readTime: "5 min read",
    image: "/assets/images/joyride-scenic.jpg",
  },
  {
    slug: "empty-leg-flights-india",
    title: "Demystifying Empty Leg Flights: How to Fly Private in India at Up to 75% Off",
    excerpt: "What are empty legs, how does the AeroLux Community get first access to them, and how you can book spontaneous luxury private jet routes.",
    category: "Charter Secrets",
    date: "Feb 15, 2025",
    readTime: "6 min read",
    image: "/assets/images/hero-jet.jpg",
  },
  {
    slug: "ek-dham-char-dham-helicopter-guide",
    title: "Planning the Sacred Ek Dham & Char Dham Yatra by Helicopter",
    excerpt: "A comprehensive handbook for families and senior citizens on seamless spiritual expeditions to Kedarnath, Badrinath, Gangotri, and Yamunotri.",
    category: "Pilgrimage",
    date: "Jan 30, 2025",
    readTime: "8 min read",
    image: "/assets/images/pilgrimage.jpg",
  },
  {
    slug: "air-ambulance-critical-care-standards",
    title: "Inside AeroLux Air Ambulance: Flying Intensive Care Units Saving Lives Across India",
    excerpt: "How aeromedical crews, rapid clearance protocols, and pressurized jet cabins make all the difference in urgent critical patient transfers.",
    category: "Air Ambulance",
    date: "Jan 12, 2025",
    readTime: "7 min read",
    image: "/assets/images/air-ambulance.jpg",
  },
  {
    slug: "corporate-jet-charter-efficiency",
    title: "Why Corporate India Is Choosing On-Demand Private Jet Charters Over Commercial First Class",
    excerpt: "Time efficiency, 15-minute boarding at private FBO terminals, and confidential in-flight meetings: the business case for executive charters.",
    category: "Business Mobility",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    image: "/assets/images/fleet-hangar.jpg",
  },
  {
    slug: "luxury-cabin-interior-amenities",
    title: "The Art of Bespoke In-Flight Hospitality: From Fine Dining to Lie-Flat Suites",
    excerpt: "Explore how AeroLux curates customized culinary menus, acoustic tranquility, and tailored VIP care at 45,000 feet.",
    category: "Luxury Living",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    image: "/assets/images/cabin-interior.jpg",
  },
]

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="space-y-4 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900"
          >
            Stories & Skies.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-base sm:text-lg leading-relaxed font-medium"
          >
            Expert perspectives on private jet travel, scenic airplane joyrides, sacred pilgrimage charters, and aviation insights from our Juhu Airport flight desk.
          </motion.p>
        </div>
      </section>

      {/* Featured Post (first post) */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="group relative rounded-3xl overflow-hidden bg-zinc-950 text-white grid grid-cols-1 lg:grid-cols-2 border border-zinc-800"
        >
          <div className="relative aspect-[16/10] lg:aspect-auto">
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-500 text-black">
                Featured Insight
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {posts[0].title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                {posts[0].excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-xs text-zinc-400 font-semibold">
              <span className="flex items-center gap-1.5"><Clock size={13} /> {posts[0].readTime}</span>
              <Link href="/airplane-joyride" className="text-white hover:text-emerald-400 transition-colors flex items-center gap-1.5 uppercase font-bold tracking-wider">
                Read Experience <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Grid of Other Posts */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group bg-zinc-50 rounded-3xl p-5 border border-zinc-200 hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-black/70 backdrop-blur-md text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 leading-snug group-hover:text-black transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-zinc-600 font-medium leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/book-flight"
                  className="w-full flex items-center justify-between bg-zinc-900 text-white px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
                >
                  <span>Explore Flight</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}
