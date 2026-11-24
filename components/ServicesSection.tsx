'use client'

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowRight, Wrench, Compass, BarChart3, ShieldCheck, DollarSign, Plane } from "lucide-react"
import Link from "next/link"

const airborneSolutions = [
  {
    icon: <Plane size={20} />,
    title: "Aircraft Sales",
    description: "We specialize in the sales of new and used aircraft, providing expert guidance throughout the entire process, from market analysis to closing the deal."
  },
  {
    icon: <Wrench size={20} />,
    title: "Aircraft Maintenance",
    description: "Our team of certified maintenance technicians provides comprehensive maintenance services for all types of aircraft, including inspections, repairs, and overhauls."
  },
  {
    icon: <Compass size={20} />,
    title: "Flight Operations",
    description: "We provide turnkey flight operations services for corporations and individuals, including pilot and crew management, flight planning, and dispatch."
  },
  {
    icon: <DollarSign size={20} />,
    title: "Aviation Finance",
    description: "Our team of financial experts provides customized aviation finance solutions, including lease agreements, purchase financing, and refinancing options."
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Aviation Consulting",
    description: "We offer consulting services for a wide range of aviation topics, including strategic planning, market analysis, and regulatory compliance."
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Aircraft Charter",
    description: "We provide private aircraft charter solutions for individuals and corporations, offering a range of aircraft options and personalized service."
  }
]

export function ServicesSection() {
  return (
    <section id="solutions" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="space-y-4 mb-12 md:mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900">
          Airborne Solutions, <span className="font-serif italic font-normal text-zinc-500">by AeroLux.</span>
        </h2>
        <p className="text-zinc-600 max-w-2xl text-base font-medium">
          Beyond passenger charters, AeroLux delivers end-to-end management, engineering compliance, and financial structuring for aircraft owners, corporations, and aviation investors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 relative aspect-video lg:aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-zinc-200 sticky top-28">
          <Image
            src="/assets/images/fleet-hangar.jpg"
            alt="AeroLux Airborne Solutions Aircraft Hangar"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
            <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-white/20 backdrop-blur-md rounded-full">
              Engineering & Ops
            </span>
            <h4 className="text-xl font-bold">Juhu Airport Aviation Hub</h4>
            <p className="text-xs text-white/80 font-medium">
              Comprehensive technical support, DGCA regulatory assistance, and maintenance oversight.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-0">
          {airborneSolutions.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group border-b border-zinc-200 py-6 md:py-7 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors px-4 -mx-4 rounded-2xl"
            >
              <div className="space-y-1.5 pr-4">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-400 group-hover:text-black transition-colors">
                    {service.icon}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-zinc-900 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-zinc-600 font-medium leading-relaxed pl-8">
                  {service.description}
                </p>
              </div>
              
              <div className="w-10 h-10 rounded-full border border-zinc-300 flex-shrink-0 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all text-zinc-900 shadow-sm">
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
          
          <div className="pt-10 md:pt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/book-flight"
              className="group flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <div className="w-2 h-2 rounded-full bg-white transition-colors" />
              Inquire About Solutions
            </Link>

            <a
              href="https://wa.me/919876543210?text=Hi%20AeroLux%2C%20I%20am%20interested%20in%20Airborne%20Solutions%20(Aircraft%20Sales%20%2F%20Maintenance%20%2F%20Operations)."
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs font-bold uppercase tracking-widest text-zinc-800 hover:text-black py-4 px-6 rounded-full border border-zinc-300 hover:border-black transition-all"
            >
              Chat with Aviation Consultant
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
