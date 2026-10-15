'use client'

import * as React from "react"
import { motion, useInView } from "motion/react"
import { ShieldCheck, PlaneTakeoff, Zap } from "lucide-react"
import Counter from "./Counter"

export function TrustBar({ className = "" }: { className?: string }) {
  const sectionRef = React.useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: false })
  const [fleetCount, setFleetCount] = React.useState(0)

  React.useEffect(() => {
    if (isInView) {
      setFleetCount(30)
    } else {
      setFleetCount(0)
    }
  }, [isInView])

  const trustSignals = [
    {
      icon: (
        <div className="relative w-11 h-11 rounded-xl bg-zinc-950 text-white flex items-center justify-center shadow-md shadow-zinc-950/20 border border-zinc-800 shrink-0 group-hover:scale-105 transition-transform duration-300">
          <PlaneTakeoff size={20} className="stroke-[1.75] text-zinc-100" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400 border-2 border-zinc-950"></span>
          </span>
        </div>
      ),
      label: (
        <span className="inline-flex items-center">
          <Counter
            value={fleetCount}
            places={[100, 10, 1]}
            fontSize={16}
            padding={2}
            gap={0}
            horizontalPadding={0}
            textColor="currentColor"
            fontWeight={700}
            gradientHeight={0}
            digitPlaceHolders={false}
          />
          <span className="ml-0.5">+ Aircrafts</span>
        </span>
      ),
      value: "Jets, Turboprops & Choppers",
    },
    {
      icon: (
        <div className="relative w-11 h-11 rounded-xl bg-zinc-950 text-white flex items-center justify-center shadow-md shadow-zinc-950/20 border border-zinc-800 shrink-0 group-hover:scale-105 transition-transform duration-300">
          <ShieldCheck size={20} className="stroke-[2] text-emerald-400" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border-2 border-zinc-950"></span>
          </span>
        </div>
      ),
      label: "DGCA Certified",
      value: "Zero-Compromise Safety",
    },
    {
      icon: (
        <div className="relative w-11 h-11 rounded-xl bg-zinc-950 text-white flex items-center justify-center shadow-md shadow-zinc-950/20 border border-zinc-800 shrink-0 group-hover:scale-105 transition-transform duration-300">
          <Zap size={20} className="stroke-[2] text-amber-400 fill-amber-400/20" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400 border-2 border-zinc-950"></span>
          </span>
        </div>
      ),
      label: "24/7 Operations",
      value: "Instant Charter Dispatch",
    },
  ]

  return (
    <div 
      ref={sectionRef as any}
      className={`border-none bg-transparent py-3 md:py-4 overflow-hidden w-full relative z-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Aviation Standards Pill */}
          <div className="flex items-center px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/90 shadow-sm shrink-0">
            <span className="text-xs font-bold text-zinc-950 tracking-tight">
              Aviation Standards
            </span>
          </div>

          {/* 3 Trust Pillars */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-4 py-1">
            {trustSignals.map((signal, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="group flex items-center gap-3.5 shrink-0 cursor-default"
                >
                  {signal.icon}
                  <div className="flex flex-col">
                    <div className="text-[14px] md:text-[15px] font-bold text-zinc-950 tracking-tight leading-tight group-hover:text-black transition-colors flex items-center">
                      {signal.label}
                    </div>
                    <span className="text-[12px] md:text-[13px] font-semibold text-sky-950 tracking-tight leading-tight mt-0.5">
                      {signal.value}
                    </span>
                  </div>
                </motion.div>
                {idx < trustSignals.length - 1 && (
                  <div className="hidden lg:block h-8 w-[1px] bg-sky-950/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

