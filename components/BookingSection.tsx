'use client'

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { Calendar, Clock, User, Phone, Mail, MapPin, Users, ArrowRight, CheckCircle2, Plane, Sparkles, Shield, Compass, HeartPulse, Send, Gauge } from "lucide-react"

import { gsap } from "gsap"
import { TrustBar } from "./TrustBar"

type TripType = "charter" | "joyride" | "ambulance" | "pilgrimage"

interface AircraftFlightInfo {
  name: string
  categoryTitle: string
  speed: string
  range: string
  capacity: string
  altitude: string
  image: string
  tag: string
}

const flightFleetData: Record<TripType, AircraftFlightInfo> = {
  charter: {
    name: "Gulfstream G700 / Challenger 650",
    categoryTitle: "Ultra-Luxury Private Jet",
    speed: "850 km/h (Mach 0.88)",
    range: "7,500 nm • Global Bases",
    capacity: "4 - 16 VIP Pax",
    altitude: "FL410 • 41,000 FT",
    image: "/assets/images/flight-charter.jpg",
    tag: "Priority Direct Dispatch"
  },
  joyride: {
    name: "Cirrus SR22 / Cessna 172",
    categoryTitle: "Scenic Aerial Experience",
    speed: "260 km/h",
    range: "Coastal & City Skyline Tours",
    capacity: "2 - 4 Passengers",
    altitude: "3,500 FT • Scenic Route",
    image: "/assets/images/flight-joyride.jpg",
    tag: "Juhu Airport HQ Runway"
  },
  ambulance: {
    name: "Pilatus PC-24 ICU Air Ambulance",
    categoryTitle: "Critical Care Aeromedical",
    speed: "780 km/h",
    range: "Pan-India Bed-to-Bed",
    capacity: "Patient + Medical Crew",
    altitude: "FL380 • Medical Priority",
    image: "/assets/images/flight-ambulance.jpg",
    tag: "Emergency Launch In 45 Mins"
  },
  pilgrimage: {
    name: "Airbus H145 / Bell 429 Chopper",
    categoryTitle: "Sacred Ek Dham Helicopter",
    speed: "240 km/h",
    range: "Kedarnath & Alpine Shrines",
    capacity: "Up to 6 Pilgrims",
    altitude: "11,500 FT • High-Altitude",
    image: "/assets/images/flight-pilgrimage.jpg",
    tag: "VIP Helipad Clearance"
  }
}

function SkyCloudsBackground() {
  const cloud1Ref = React.useRef<HTMLDivElement>(null)
  const cloud2Ref = React.useRef<HTMLDivElement>(null)
  const cloud3Ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const c1 = cloud1Ref.current
    const c2 = cloud2Ref.current
    const c3 = cloud3Ref.current
    if (!c1 || !c2 || !c3) return

    // Organic drift for clouds (looping)
    const t1 = gsap.to(c1, {
      x: "+=20",
      y: "-=8",
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
    const t2 = gsap.to(c2, {
      x: "-=15",
      y: "+=12",
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
    const t3 = gsap.to(c3, {
      x: "+=10",
      y: "-=6",
      duration: 26,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })

    // Mousemove parallax handler
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const xPercent = (clientX - window.innerWidth / 2) / window.innerWidth
      const yPercent = (clientY - window.innerHeight / 2) / window.innerHeight

      gsap.to(c1, {
        x: xPercent * 50,
        y: yPercent * 25,
        duration: 1.2,
        ease: "power2.out",
        overwrite: "auto"
      })
      gsap.to(c2, {
        x: -xPercent * 35,
        y: -yPercent * 18,
        duration: 1.5,
        ease: "power2.out",
        overwrite: "auto"
      })
      gsap.to(c3, {
        x: xPercent * 20,
        y: yPercent * 10,
        duration: 1.8,
        ease: "power2.out",
        overwrite: "auto"
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      t1.kill()
      t2.kill()
      t3.kill()
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Sky background image container */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none"
        style={{ backgroundImage: "url('/assets/images/bg/booking.webp')" }}
      />
      
      {/* Floating Cloud Layers (Pure White with screen blend mode to eliminate any dark smoke/black pixels) */}
      <div
        ref={cloud1Ref}
        className="absolute left-[-10%] top-[8%] w-[55%] max-w-[650px] aspect-[2737/974] opacity-60 z-0 pointer-events-none select-none"
        style={{ mixBlendMode: 'screen', filter: 'brightness(1.6)' }}
      >
        <img
          src="https://framerusercontent.com/images/Vzj0ddqjzxBUI5H8NifJnE5N1s.png"
          alt="Cloud"
          className="w-full h-full object-contain"
          decoding="async"
        />
      </div>
      
      <div
        ref={cloud2Ref}
        className="absolute right-[-8%] top-[22%] w-[48%] max-w-[550px] aspect-[2737/974] opacity-50 z-0 pointer-events-none select-none"
        style={{ mixBlendMode: 'screen', filter: 'brightness(1.6)' }}
      >
        <img
          src="https://framerusercontent.com/images/Vzj0ddqjzxBUI5H8NifJnE5N1s.png"
          alt="Cloud"
          className="w-full h-full object-contain"
          decoding="async"
        />
      </div>

      <div
        ref={cloud3Ref}
        className="absolute left-[8%] bottom-[22%] w-[65%] max-w-[800px] aspect-[2737/974] opacity-55 z-0 pointer-events-none select-none"
        style={{ mixBlendMode: 'screen', filter: 'brightness(1.6)' }}
      >
        <img
          src="https://framerusercontent.com/images/Vzj0ddqjzxBUI5H8NifJnE5N1s.png"
          alt="Cloud"
          className="w-full h-full object-contain"
          decoding="async"
        />
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-300/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-sky-200/25 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Seamless Top & Bottom Blending */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 0%, transparent 7%, transparent 55%, rgba(255, 255, 255, 0.6) 72%, rgba(255, 255, 255, 0.95) 88%, #ffffff 100%)"
        }}
      />
    </div>
  )
}

interface BookingSectionProps {
  showTrustBar?: boolean
  isHero?: boolean
  className?: string
}

export function BookingSection({ showTrustBar = true, isHero = false, className = "" }: BookingSectionProps = {}) {
  const [formData, setFormData] = React.useState({
    from: "",
    to: "",
    journeyDate: "",
    time: "",
    pax: "",
    name: "",
    phone: "",
    email: "",
    tripType: "charter" as TripType
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const activeAircraft = flightFleetData[formData.tripType]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate instant secure processing
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1100)
  }

  const handleReset = () => {
    setIsSuccess(false)
    setFormData({
      from: "",
      to: "",
      journeyDate: "",
      time: "",
      pax: "",
      name: "",
      phone: "",
      email: "",
      tripType: "charter"
    })
  }

  return (
    <section 
      id="booking" 
      className={`relative ${isHero ? 'pt-28 md:pt-36 rounded-none' : 'rounded-t-[2.5rem] md:rounded-t-[3.5rem] pt-3 sm:pt-4'} overflow-hidden bg-gradient-to-b from-sky-100/70 via-[#74bce8] via-50% to-white pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {/* Dynamic Animated Clouds & Sky Backdrop from Hero Aesthetics */}
      <SkyCloudsBackground />

      {/* Top subtle fade from the hero curtain edge */}
      <div 
        className="absolute inset-x-0 top-0 h-14 pointer-events-none z-[4]"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, transparent 100%)"
        }}
      />

      {/* Bottom silky pure white blend into About section below - elevated to z-[12] so card/window shadows dissolve organically into solid white */}
      <div 
        className="absolute inset-x-0 bottom-0 h-44 md:h-60 pointer-events-none z-[12]"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0.8) 65%, #ffffff 90%, #ffffff 100%)"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-4 sm:space-y-6">
        
        {/* Seamlessly Integrated TrustBar at the top of the Sky Curtain */}
        {showTrustBar && <TrustBar />}

        {/* 2-Column Responsive Layout: Evenly distributed Left (Window) & Right (Aircraft Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
           {/* LEFT: Authentic Airplane Cabin Window (Evenly centered in the left section space) */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[395px] sm:max-w-[410px] lg:max-w-[420px] mx-auto">
              
              {/* Outer Airplane Fuselage Wall (Vertical Oval 50% / 30%) */}
              <div 
                className="relative p-3 sm:p-3.5 bg-gradient-to-b from-[#f8fafc] via-[#ece7e1] to-[#cfc8bd] shadow-[0_20px_50px_-10px_rgba(2,44,84,0.45),0_0_0_1px_rgba(255,255,255,0.95)_inset]"
                style={{ borderRadius: '50% / 30%' }}
              >
                
                {/* Deep Extruded Wall Cavity (Simulating 3-inch Aircraft Wall Depth) */}
                <div 
                  className="p-2.5 sm:p-3 bg-gradient-to-b from-[#d5cfc4] via-[#f5f1eb] to-[#ffffff] shadow-[inset_0_18px_28px_rgba(30,22,15,0.28),inset_0_-10px_18px_rgba(255,255,255,0.95)] relative"
                  style={{ borderRadius: '50% / 30%' }}
                >
                  
                  {/* Black Rubber Compression Gasket & Chrome Inner Ring */}
                  <div 
                    className="p-0.5 sm:p-1 bg-zinc-900 shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                    style={{ borderRadius: '50% / 30%' }}
                  >
                    
                    {/* Double Acrylic Window Pane (Vertical Oval Filling Viewport Proportionally) */}
                    <div 
                      className="relative bg-white/95 backdrop-blur-2xl border-2 border-zinc-200/90 pt-9 sm:pt-10 pb-8 sm:pb-9 px-5 sm:px-6 shadow-inner overflow-hidden min-h-[480px] sm:min-h-[505px] flex flex-col justify-center"
                      style={{ borderRadius: '50% / 30%' }}
                    >
                      
                      {/* Realistic Diagonal Glass Reflection Sheen */}
                      <div 
                        className="absolute -top-[160%] -left-[60%] w-[220%] h-[320%] pointer-events-none rotate-[32deg] opacity-35"
                        style={{
                          background: 'linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.12) 38%, transparent 60%)'
                        }}
                      />

                    {/* Window Form Body — Scaled to match right side cleanly */}
                    <AnimatePresence mode="wait">
                      {!isSuccess ? (
                        <motion.form 
                          key="window-form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit} 
                          className="space-y-2.5 sm:space-y-3 relative z-10 max-w-[305px] sm:max-w-[325px] mx-auto w-full"
                        >
                          {/* Flight Type Switcher Pills */}
                          <div className="max-w-[290px] mx-auto grid grid-cols-4 gap-0.5 bg-zinc-100/95 p-0.5 sm:p-1 rounded-full text-[10px] font-semibold text-zinc-600 shadow-inner">
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, tripType: "charter" }))}
                              className={`py-1 px-0.5 rounded-full transition-all cursor-pointer text-center text-[10px] ${
                                formData.tripType === "charter" ? "bg-white text-zinc-950 shadow-xs font-bold" : "hover:text-black"
                              }`}
                            >
                              Charter
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, tripType: "joyride" }))}
                              className={`py-1 px-0.5 rounded-full transition-all cursor-pointer text-center text-[10px] ${
                                formData.tripType === "joyride" ? "bg-white text-zinc-950 shadow-xs font-bold" : "hover:text-black"
                              }`}
                            >
                              Joyride
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, tripType: "ambulance" }))}
                              className={`py-1 px-0.5 rounded-full transition-all cursor-pointer text-center text-[10px] ${
                                formData.tripType === "ambulance" ? "bg-white text-zinc-950 shadow-xs font-bold" : "hover:text-black"
                              }`}
                            >
                              Ambulance
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, tripType: "pilgrimage" }))}
                              className={`py-1 px-0.5 rounded-full transition-all cursor-pointer text-center text-[10px] ${
                                formData.tripType === "pilgrimage" ? "bg-white text-zinc-950 shadow-xs font-bold" : "hover:text-black"
                              }`}
                            >
                              Ek Dham
                            </button>
                          </div>

                          {/* Row 1: From & To (Departure & Arrival) */}
                          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                            <div className="space-y-0.5 sm:space-y-1">
                              <label className="text-[10px] font-semibold text-zinc-600 ml-1 block">
                                From *
                              </label>
                              <div className="relative">
                                <MapPin className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={13} />
                                <input
                                  required
                                  type="text"
                                  placeholder={
                                    formData.tripType === "joyride" 
                                      ? "Juhu Airport" 
                                      : formData.tripType === "pilgrimage"
                                      ? "Dehradun Helipad"
                                      : "Departure City"
                                  }
                                  value={formData.from}
                                  onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                                  className="w-full bg-zinc-50/90 border border-zinc-200/90 rounded-lg py-1.5 sm:py-2 pl-6 sm:pl-7 pr-2 focus:ring-1.5 focus:ring-zinc-900 focus:bg-white transition-all text-xs text-zinc-900 placeholder:text-zinc-400 font-medium outline-none shadow-xs"
                                />
                              </div>
                            </div>

                            <div className="space-y-0.5 sm:space-y-1">
                              <label className="text-[10px] font-semibold text-zinc-600 ml-1 block">
                                To *
                              </label>
                              <div className="relative">
                                <Plane className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={13} />
                                <input
                                  required
                                  type="text"
                                  placeholder={
                                    formData.tripType === "joyride" 
                                      ? "Mumbai Skyline" 
                                      : formData.tripType === "pilgrimage"
                                      ? "Kedarnath / Shrines"
                                      : "Destination"
                                  }
                                  value={formData.to}
                                  onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                                  className="w-full bg-zinc-50/90 border border-zinc-200/90 rounded-lg py-1.5 sm:py-2 pl-6 sm:pl-7 pr-2 focus:ring-1.5 focus:ring-zinc-900 focus:bg-white transition-all text-xs text-zinc-900 placeholder:text-zinc-400 font-medium outline-none shadow-xs"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Row 2: Date & Preferred Time */}
                          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                            <div className="space-y-0.5 sm:space-y-1">
                              <label className="text-[10px] font-semibold text-zinc-600 ml-1 block">
                                Date *
                              </label>
                              <div className="relative">
                                <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={13} />
                                <input
                                  required
                                  type="date"
                                  value={formData.journeyDate}
                                  onChange={(e) => setFormData({ ...formData, journeyDate: e.target.value })}
                                  className="w-full bg-zinc-50/90 border border-zinc-200/90 rounded-lg py-1.5 sm:py-2 pl-6 sm:pl-7 pr-1.5 focus:ring-1.5 focus:ring-zinc-900 focus:bg-white transition-all text-xs text-zinc-900 font-medium outline-none shadow-xs"
                                />
                              </div>
                            </div>

                            <div className="space-y-0.5 sm:space-y-1">
                              <label className="text-[10px] font-semibold text-zinc-600 ml-1 block">
                                Time *
                              </label>
                              <div className="relative">
                                <Clock className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={13} />
                                <input
                                  required
                                  type="time"
                                  value={formData.time}
                                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                  className="w-full bg-zinc-50/90 border border-zinc-200/90 rounded-lg py-1.5 sm:py-2 pl-6 sm:pl-7 pr-1.5 focus:ring-1.5 focus:ring-zinc-900 focus:bg-white transition-all text-xs text-zinc-900 font-medium outline-none shadow-xs"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Row 3: No. of Pax & Full Name */}
                          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                            <div className="space-y-0.5 sm:space-y-1">
                              <label className="text-[10px] font-semibold text-zinc-600 ml-1 block">
                                No. of Pax *
                              </label>
                              <div className="relative">
                                <Users className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={13} />
                                <input
                                  required
                                  type="number"
                                  min="1"
                                  max="200"
                                  placeholder="e.g. 4"
                                  value={formData.pax}
                                  onChange={(e) => setFormData({ ...formData, pax: e.target.value })}
                                  className="w-full bg-zinc-50/90 border border-zinc-200/90 rounded-lg py-1.5 sm:py-2 pl-6 sm:pl-7 pr-2 focus:ring-1.5 focus:ring-zinc-900 focus:bg-white transition-all text-xs text-zinc-900 placeholder:text-zinc-400 font-medium outline-none shadow-xs"
                                />
                              </div>
                            </div>

                            <div className="space-y-0.5 sm:space-y-1">
                              <label className="text-[10px] font-semibold text-zinc-600 ml-1 block">
                                Full Name *
                              </label>
                              <div className="relative">
                                <User className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={13} />
                                <input
                                  required
                                  type="text"
                                  placeholder="Your Name"
                                  value={formData.name}
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  className="w-full bg-zinc-50/90 border border-zinc-200/90 rounded-lg py-1.5 sm:py-2 pl-6 sm:pl-7 pr-2 focus:ring-1.5 focus:ring-zinc-900 focus:bg-white transition-all text-xs text-zinc-900 placeholder:text-zinc-400 font-medium outline-none shadow-xs"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Row 4: Phone (WhatsApp) & Email Address */}
                          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                            <div className="space-y-0.5 sm:space-y-1">
                              <label className="text-[10px] font-semibold text-zinc-600 ml-1 block">
                                Phone (WhatsApp) *
                              </label>
                              <div className="relative">
                                <Phone className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={13} />
                                <input
                                  required
                                  type="tel"
                                  placeholder="+91 95118 26428"
                                  value={formData.phone}
                                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                  className="w-full bg-zinc-50/90 border border-zinc-200/90 rounded-lg py-1.5 sm:py-2 pl-6 sm:pl-7 pr-2 focus:ring-1.5 focus:ring-zinc-900 focus:bg-white transition-all text-xs text-zinc-900 placeholder:text-zinc-400 font-medium outline-none shadow-xs"
                                />
                              </div>
                            </div>

                            <div className="space-y-0.5 sm:space-y-1">
                              <label className="text-[10px] font-semibold text-zinc-600 ml-1 block">
                                Email *
                              </label>
                              <div className="relative">
                                <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" size={13} />
                                <input
                                  required
                                  type="email"
                                  placeholder="client@flyyo.in"
                                  value={formData.email}
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  className="w-full bg-zinc-50/90 border border-zinc-200/90 rounded-lg py-1.5 sm:py-2 pl-6 sm:pl-7 pr-2 focus:ring-1.5 focus:ring-zinc-900 focus:bg-white transition-all text-xs text-zinc-900 placeholder:text-zinc-400 font-medium outline-none shadow-xs"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="pt-1.5 text-center max-w-[290px] mx-auto">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="group w-full bg-zinc-950 hover:bg-black text-white py-2.5 sm:py-3 rounded-full text-xs font-bold tracking-tight transition-all flex items-center justify-center gap-1.5 shadow-xl shadow-zinc-950/25 cursor-pointer disabled:opacity-50"
                            >
                              {isSubmitting ? (
                                <>
                                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  <span>Submitting Query...</span>
                                </>
                              ) : (
                                <>
                                  <span>Submit Flight Request</span>
                                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                </>
                              )}
                            </button>
                            <p className="text-center text-[9.5px] text-zinc-500 mt-1 font-medium">
                              Guaranteed Coordinator Response Within 30 Mins
                            </p>
                          </div>
                        </motion.form>
                      ) : (
                        <motion.div 
                          key="window-success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="py-10 text-center space-y-5"
                        >
                          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                            <CheckCircle2 size={36} />
                          </div>
                          <div className="space-y-1.5">
                            <h3 className="text-2xl font-bold text-zinc-900">Query Received!</h3>
                            <p className="text-zinc-600 max-w-sm mx-auto text-xs sm:text-sm font-medium">
                              Thank you, <span className="font-bold text-black">{formData.name || "Customer"}</span>. Your charter request from <span className="font-bold text-black">{formData.from || "Departure"}</span> to <span className="font-bold text-black">{formData.to || "Destination"}</span> has been dispatched to our flight desk.
                            </p>
                          </div>
                          <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3.5 max-w-xs mx-auto text-left text-xs space-y-1 text-zinc-700">
                            <div><strong>Date:</strong> {formData.journeyDate} at {formData.time}</div>
                            <div><strong>Pax:</strong> {formData.pax} Passengers</div>
                            <div><strong>WhatsApp:</strong> {formData.phone}</div>
                          </div>
                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                              href={`https://wa.me/919511826428?text=Hi%20Flyyo%2C%20I%20just%20submitted%20a%20charter%20query%20for%20${encodeURIComponent(formData.from)}%20to%20${encodeURIComponent(formData.to)}.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#25D366] text-black font-semibold px-5 py-2.5 rounded-full text-xs flex items-center gap-2 shadow-md hover:bg-[#1ebd5a] transition-all"
                            >
                              Connect on WhatsApp Now
                            </a>
                            <button
                              onClick={handleReset}
                              className="text-xs font-semibold text-zinc-600 hover:text-black transition-colors"
                            >
                              Submit Another Query
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: High-Altitude Flying Aircraft Showcase (Matched Height & Presence) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="w-full max-w-xl lg:max-w-none space-y-4 sm:space-y-4.5">
              
              {/* Header Title & Subtitle placed directly above the aircraft planes */}
              <div className="text-left space-y-1.5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.08] drop-shadow-md">
                  Uncompromising <span className="font-serif italic font-normal text-white/70">Luxury in</span> Every Flight.
                </h2>
                <p className="text-white/95 text-xs sm:text-[13.5px] font-medium tracking-tight drop-shadow-sm leading-relaxed max-w-lg">
                  Tell us your journey details — our Juhu Airport desk coordinates aircraft availability and pricing within 30 minutes.
                </p>
              </div>

              {/* Dynamic Flight Model with Aerodynamic Exit/Entry on Trip Change */}
              <div className="relative h-[280px] sm:h-[320px] lg:h-[330px] w-full max-w-[520px] lg:max-w-none rounded-[2rem] overflow-hidden border border-white/40 shadow-2xl shadow-sky-950/35 bg-sky-950/20 backdrop-blur-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={formData.tripType}
                    initial={{ x: -700, y: 40, opacity: 0, rotate: 5, scale: 0.9 }}
                    animate={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ x: 900, y: -80, opacity: 0, rotate: -7, scale: 1.08 }}
                    transition={{ 
                      duration: 0.65, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="relative w-full h-full"
                  >
                    {/* Continuous Micro-Turbulent Floating Loop */}
                    <motion.div
                      animate={{ 
                        y: [-5, 5, -5], 
                        rotate: [-0.5, 0.5, -0.5] 
                      }}
                      transition={{ 
                        duration: 4.8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={activeAircraft.image}
                        alt={activeAircraft.name}
                        fill
                        priority
                        className="object-cover object-center scale-105"
                      />

                      {/* Flight Horizon Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/50 via-transparent to-transparent pointer-events-none" />

                      {/* Subtle Altitude Pin in top right */}
                      <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-wider">
                        {activeAircraft.altitude}
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Aircraft Specifications Card */}
              <div className="p-3.5 sm:p-4 max-w-[520px] lg:max-w-none rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl shadow-sky-950/15 text-zinc-900 transition-all duration-300">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] sm:text-[10.5px] font-bold text-amber-600 uppercase tracking-wider block">
                      {activeAircraft.categoryTitle}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-zinc-950 tracking-tight mt-0.5">
                      {activeAircraft.name}
                    </h4>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider shrink-0 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Ready
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 mt-2.5 pt-2.5 border-t border-zinc-200/80 text-xs font-semibold text-zinc-700">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                      <Gauge size={14} />
                    </div>
                    <div>
                      <div className="text-[9.5px] text-zinc-500 uppercase font-medium">Cruise Speed</div>
                      <div className="font-bold text-xs sm:text-[12.5px] text-zinc-900">{activeAircraft.speed}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
                      <Users size={14} />
                    </div>
                    <div>
                      <div className="text-[9.5px] text-zinc-500 uppercase font-medium">Capacity</div>
                      <div className="font-bold text-xs sm:text-[12.5px] text-zinc-900">{activeAircraft.capacity}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

