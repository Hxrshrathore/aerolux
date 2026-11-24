'use client'

import { motion } from "motion/react"
import { Sparkles, DollarSign, Crown, Clock, Plane, ShieldCheck, HeartHandshake } from "lucide-react"

const whyAeroLuxReasons = [
  {
    icon: <DollarSign size={24} />,
    title: "Best Deals",
    desc: "At AeroLux, we believe luxury should be accessible to all. That's why we offer competitive pricing and exclusive deals on all our services, ensuring you receive exceptional value without compromising on quality.",
    size: "lg",
    highlight: "Value & Transparency"
  },
  {
    icon: <Crown size={24} />,
    title: "High-End Luxury Experience",
    desc: "Indulge in the lap of luxury with AeroLux's unparalleled service standards and attention to detail. From gourmet catering to personalized concierge services, every aspect of your journey is meticulously curated for an unforgettable experience.",
    size: "lg",
    highlight: "VIP Personalized Care"
  },
  {
    icon: <Clock size={24} />,
    title: "Unmatched Convenience",
    desc: "With AeroLux, travel becomes effortless and stress-free, allowing you to focus on what truly matters. Skip security lines, arrive 15 minutes before takeoff, and fly on your exact schedule.",
    size: "md",
    highlight: "15-Min Boarding"
  },
  {
    icon: <Plane size={24} />,
    title: "30+ Aircrafts Fleet",
    desc: "From single-engine joyride tourers and agile turboprops to long-range intercontinental jets and VIP helicopters, our versatile fleet adapts to every mission.",
    size: "md",
    highlight: "Versatile Fleet"
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "DGCA-Certified Safety",
    desc: "Strict adherence to civil aviation protocols, vetted dual captain cockpits, and rigorous maintenance checks before every departure.",
    size: "sm",
    highlight: "Zero Compromise"
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "24/7 Flight Operations",
    desc: "Direct flight coordinators stationed at Juhu Airport ready around the clock for immediate quotes, joyride bookings, and rapid medical evacuations.",
    size: "sm",
    highlight: "Always Ready"
  }
]

export function AmenitiesBento() {
  return (
    <section id="why-aerolux" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">
          Why <span className="font-serif italic font-normal text-zinc-500">AeroLux?</span>
        </h2>
        <p className="text-zinc-600 max-w-xl mx-auto text-sm sm:text-base font-medium">
          Elevating private air charter standards across India with unmatched luxury, price integrity, and total convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {whyAeroLuxReasons.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className={`bg-zinc-50 rounded-[32px] p-8 flex flex-col justify-between border border-zinc-200 hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/60 transition-all duration-500 group ${
              item.size === 'lg' ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-500 text-zinc-900 border border-zinc-100">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 px-3 py-1 bg-white rounded-full border border-zinc-200">
                {item.highlight}
              </span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900">{item.title}</h3>
              <p className="text-sm text-zinc-700 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
