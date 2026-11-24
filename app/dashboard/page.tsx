'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { 
  Plane, 
  PlaneTakeoff, 
  ShieldCheck, 
  Zap, 
  Clock, 
  MapPin, 
  Users, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Sparkles, 
  Coffee, 
  Luggage, 
  CreditCard, 
  ChevronRight, 
  Search, 
  Check, 
  Lock, 
  X,
  Plus,
  Trash2,
  LogOut,
  Bell,
  Menu,
  Heart,
  TrendingUp,
  Building2,
  Filter,
  Settings,
  Key,
  Eye,
  EyeOff,
  Shield
} from "lucide-react"
import { siteConfig } from "@/lib/config"
import { WhatsAppIcon } from "@/components/WhatsAppIcon"
import { FlightSearchSection } from "@/components/FlightSearchSection"

function AeroLuxLogo({ className = "h-8 w-8", color = "currentColor" }: { className?: string, color?: string }) {
  return (
    <svg
      width="1016"
      height="1016"
      viewBox="0 0 1016 1016"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      <path
        d="M472.553 165.443L742.9 165.786C824.801 165.403 906.696 165.548 988.596 166.224L912.753 274.545L886.202 312.818C874.211 330.137 864.776 345.285 848.459 359.022C830.615 373.881 809.461 384.246 786.785 389.251C770.091 392.771 750.228 392.412 733.117 392.374L688.082 392.207L526.261 391.912L452.831 392.001C417.105 391.968 373.531 389.728 340.273 402.088C294.086 419.254 263.968 452.269 238.234 492.717C231.308 503.6 222.591 515.203 217.148 526.926C235.651 527.085 254.155 527.075 272.658 526.891C276.611 522.074 281.996 513.001 285.644 507.454C291.88 497.954 298.797 488.919 306.34 480.419C323.433 461.82 345.562 448.588 370.036 442.333C389.029 437.664 405.907 438.026 425.217 437.95L466.819 437.828L608.166 437.958L659.09 437.954C669.171 437.94 679.986 438.177 690.002 437.635C686.177 441.63 680.303 450.436 676.975 455.23C666.304 470.607 658.133 482.325 643.925 494.586C602.838 530.046 560.983 527.7 510.867 527.809L436.814 527.883C382.765 527.873 382.982 522.307 351.632 568.181C340.647 584.16 329.254 599.842 318.606 616.039C304.48 616.714 289.811 616.56 275.658 616.57L221.759 616.669L43.7927 616.307C51.0972 606.787 58.3685 595.714 65.2924 585.768L98.3303 538.311C111.783 518.706 125.421 499.209 139.34 479.934C158.429 453.498 175.985 423.865 197.035 399.119C243.45 343.972 309.785 309.412 381.576 302.974C414.196 299.871 452.551 300.913 485.672 301.061L597.823 300.728L717.575 300.614C774.392 300.574 784.746 309.6 817.066 255.408L586.695 255.885C547.028 255.562 507.36 255.457 467.692 255.569C445.158 255.532 422.491 255.28 399.964 255.587C315.073 256.744 245.755 290.204 187.429 350.765C192.886 339.632 196.384 328.425 201.564 317.521C213.956 291.436 231.359 266.885 251.572 246.343C291.368 206.437 342.589 179.892 398.14 170.386C422.59 166.339 447.834 165.654 472.553 165.443Z"
        fill="currentColor"
      />
    </svg>
  )
}

function StatCard({ title, value, trend, icon }: { title: string, value: string, trend: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-zinc-200 space-y-4 shadow-sm hover:border-black/20 transition-all">
      <div className="flex justify-between items-center text-zinc-400">
        <span className="text-xs font-bold uppercase tracking-widest">{title}</span>
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-3xl font-black tracking-tight text-zinc-900">{value}</h3>
        <p className="text-xs font-bold text-zinc-400">{trend}</p>
      </div>
    </div>
  )
}

function SidebarLink({ 
  icon, 
  label, 
  active, 
  onClick,
  badge
}: { 
  icon: React.ReactNode, 
  label: string, 
  active: boolean, 
  onClick: () => void,
  badge?: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-bold text-sm cursor-pointer ${
        active 
          ? "bg-black text-white shadow-sm" 
          : "text-zinc-500 hover:text-black hover:bg-zinc-100"
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      {badge}
    </button>
  )
}

// ─── Confirmed Flight Data ───
const activeFlightData = {
  bookingId: "FL-2026-BOM94",
  status: "ATC Confirmed • Runway Ready",
  departureCity: "Mumbai (BOM)",
  departureAirport: "Chhatrapati Shivaji Maharaj Intl",
  departureTerminal: "Kalina VIP General Aviation FBO (Gate 2)",
  arrivalCity: "New Delhi (DEL)",
  arrivalAirport: "Indira Gandhi Intl Airport",
  arrivalTerminal: "Terminal 1D General Aviation Annex",
  departureTime: "Today • 14:30 IST",
  arrivalTime: "Today • 16:25 IST",
  flightDuration: "1h 55m",
  paxCount: 4,
  aircraft: {
    tailNumber: "VT-FLX",
    model: "Cessna Citation XLS+",
    category: "Midsize Luxury Jet",
    cruisingSpeed: "802 km/h",
    altitude: "41,000 ft",
    seats: 9,
    wifi: "High-Speed Ka-band Active",
    yearRefurbished: "2024",
    image: "/assets/images/cabin-interior.jpg"
  },
  aogProtection: {
    guarantee: "100% Guaranteed Dispatch SLA",
    backupTailNumber: "VT-FLY (Citation Sovereign+)",
    backupLocation: "BOM Hangar 4 (AeroLux Fleet Reserve)",
    recoveryTime: "Under 60 Minutes Guaranteed"
  },
  crew: [
    { name: "Capt. Rajesh Sharma", role: "Commander / Line Pilot", flyingHours: "11,800+ hrs", license: "DGCA ATPL #3894" },
    { name: "F/O Ananya Roy", role: "First Officer", flyingHours: "4,600+ hrs", license: "DGCA CPL/IR #9021" }
  ],
  groundOps: {
    marshal: "Vikram Sen",
    hotline: "+91 98765 43210",
    tarmacCar: "Mercedes-Maybach S-Class (Direct Airside Transfer)",
    boardingTime: "15 Minutes Before Wheels-Up (No Commercial Queues)"
  },
  luggage: {
    maxWeightKg: 180,
  },
  catering: "Taj Satvik Vegetarian Thali (No onion/garlic) + Sparkling Water & Fresh Berries"
}

// ─── Empty Leg Repositioning Radar Data ───
const emptyLegs = [
  {
    id: "EL-801",
    from: "Mumbai (BOM)",
    to: "Goa (GOX - Mopa)",
    aircraft: "Hawker 900XP",
    category: "Midsize Jet",
    date: "Tomorrow • 11:00 AM",
    originalPrice: "₹6,80,000",
    discountPrice: "₹2,20,000",
    discountPercent: "70% OFF",
    seats: 8,
    status: "Confirmed Repositioning"
  },
  {
    id: "EL-802",
    from: "New Delhi (DEL)",
    to: "Mumbai (BOM)",
    aircraft: "Cessna Citation XLS+",
    category: "Midsize Jet",
    date: "17 Oct • 16:30 PM",
    originalPrice: "₹8,50,000",
    discountPrice: "₹3,10,000",
    discountPercent: "63% OFF",
    seats: 9,
    status: "Confirmed Repositioning"
  },
  {
    id: "EL-803",
    from: "Dehradun (DED)",
    to: "Phata Base Helipad",
    aircraft: "Bell 407 Dual Engine",
    category: "Helicopter Shuttle",
    date: "18 Oct • 07:30 AM",
    originalPrice: "₹2,90,000",
    discountPrice: "₹1,25,000",
    discountPercent: "57% OFF",
    seats: 6,
    status: "Kedarnath Return Leg"
  }
]

// ─── Transparent Invoices ───
const pastInvoices = [
  {
    id: "INV-2026-904",
    flightRoute: "Mumbai (BOM) ➔ New Delhi (DEL)",
    date: "15 Oct 2026",
    aircraft: "Cessna Citation XLS+ (VT-FLX)",
    baseHoursAmount: "₹6,40,000",
    airportLandingFees: "₹45,000",
    fboHandlingFees: "₹35,000",
    fuelSurcharge: "₹40,000",
    gstAmount: "₹1,36,800",
    totalAmount: "₹8,96,800",
    status: "Paid & Cleared",
    zeroHiddenFeesCertified: true
  },
  {
    id: "INV-2026-882",
    flightRoute: "Dehradun (DED) ➔ Kedarnath Dham (Phata)",
    date: "28 Sep 2026",
    aircraft: "Bell 407 Dual Engine (VT-KED)",
    baseHoursAmount: "₹2,80,000",
    airportLandingFees: "₹15,000",
    fboHandlingFees: "₹20,000",
    fuelSurcharge: "₹15,000",
    gstAmount: "₹59,400",
    totalAmount: "₹3,89,400",
    status: "Paid & Cleared",
    zeroHiddenFeesCertified: true
  }
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'charter' | 'emptylegs' | 'manifest' | 'dining' | 'invoices' | 'settings'>('overview')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // Settings State
  const [currentPassword, setCurrentPassword] = React.useState("")
  const [newPassword, setNewPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false)
  const [showNewPassword, setShowNewPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
  const [passwordStatus, setPasswordStatus] = React.useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' })
  
  // Profile State
  const [profileName, setProfileName] = React.useState("Capt. Vikramaditya Singhania")
  const [profileEmail, setProfileEmail] = React.useState("vikram.singhania@singhaniagroup.com")
  const [profilePhone, setProfilePhone] = React.useState("+91 98200 89401")
  const [profileHomeFbo, setProfileHomeFbo] = React.useState("Mumbai Kalina VIP FBO (BOM)")
  const [profileSaved, setProfileSaved] = React.useState(false)

  // Security & Notification Preferences
  const [prefEmptyLegAlerts, setPrefEmptyLegAlerts] = React.useState(true)
  const [prefWhatsappManifest, setPrefWhatsappManifest] = React.useState(true)
  const [pref2FA, setPref2FA] = React.useState(true)
  const [prefSatvikMealCheck, setPrefSatvikMealCheck] = React.useState(true)

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentPassword) {
      setPasswordStatus({ type: 'error', message: 'Please enter your current password.' })
      return
    }
    if (newPassword.length < 8) {
      setPasswordStatus({ type: 'error', message: 'New password must be at least 8 characters long.' })
      return
    }
    if (newPassword !== confirmPassword) {
      setPasswordStatus({ type: 'error', message: 'New passwords do not match. Please re-enter.' })
      return
    }
    setPasswordStatus({ type: 'success', message: 'Password updated successfully! Your credentials have been securely refreshed.' })
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
    setTimeout(() => {
      setPasswordStatus({ type: 'idle', message: '' })
    }, 6000)
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    setProfileSaved(true)
    setTimeout(() => setProfileSaved(false), 4000)
  }

  // Manifest Passenger State
  const [passengers, setPassengers] = React.useState([
    { id: 1, name: "Capt. Vikramaditya Singhania", docType: "Aadhaar Card", docNumber: "XXXX-XXXX-4921", weightKg: 22, meal: "Satvik Vegetarian (No Onion/Garlic)" },
    { id: 2, name: "Mrs. Meenakshi Singhania", docType: "Passport", docNumber: "Z5892104", weightKg: 20, meal: "Jain Cuisine" },
    { id: 3, name: "Rohan Singhania", docType: "Aadhaar Card", docNumber: "XXXX-XXXX-8012", weightKg: 25, meal: "Continental Executive" },
    { id: 4, name: "Aanya Singhania", docType: "Aadhaar Card", docNumber: "XXXX-XXXX-3419", weightKg: 18, meal: "Fresh Fruit Platter" }
  ])

  // New Passenger Modal Form
  const [newPaxName, setNewPaxName] = React.useState("")
  const [newPaxDocType, setNewPaxDocType] = React.useState("Aadhaar Card")
  const [newPaxDocNum, setNewPaxDocNum] = React.useState("")
  const [newPaxMeal, setNewPaxMeal] = React.useState("Satvik Vegetarian")
  const [showAddPaxModal, setShowAddPaxModal] = React.useState(false)

  const handleAddPassenger = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPaxName || !newPaxDocNum) return
    const newPax = {
      id: passengers.length + 1,
      name: newPaxName,
      docType: newPaxDocType,
      docNumber: newPaxDocNum,
      weightKg: 20,
      meal: newPaxMeal
    }
    setPassengers([...passengers, newPax])
    setNewPaxName("")
    setNewPaxDocNum("")
    setShowAddPaxModal(false)
  }

  const handleDeletePassenger = (id: number) => {
    setPassengers(passengers.filter(p => p.id !== id))
  }

  const totalLuggageWeight = passengers.reduce((sum, p) => sum + p.weightKg, 0)

  return (
    <div data-lenis-prevent className="fixed inset-0 h-screen w-screen bg-zinc-50 flex overflow-hidden font-sans selection:bg-black selection:text-white">
      
      {/* ─── Sidebar Navigation (Fixed, Non-Scrolling Old White BG Design) ─── */}
      <aside className={`w-72 bg-white border-r border-zinc-200 hidden lg:flex flex-col h-full shrink-0 z-20 justify-between select-none overflow-hidden ${isMobileMenuOpen ? '!flex fixed inset-y-0 left-0 z-50 shadow-2xl h-full overflow-y-auto' : ''}`}>
        <div className="flex flex-col min-h-0">
          {/* Brand Header */}
          <div className="p-6 pb-4 flex items-center justify-between border-b border-zinc-100 shrink-0">
            <Link href="/" className="flex items-center gap-3 no-underline group">
              <AeroLuxLogo className="h-8 w-8 text-black transition-transform group-hover:scale-105" color="#000000" />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-black leading-none">AeroLux</span>
                <span className="text-[10px] tracking-widest text-amber-600 font-bold uppercase mt-1">SkyClub VIP</span>
              </div>
            </Link>
            {isMobileMenuOpen && (
              <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden text-zinc-400 hover:text-black">
                <X size={20} />
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1 shrink-0">
            <SidebarLink 
              icon={<Plane size={18} />} 
              label="Active Flight & Radar" 
              active={activeTab === 'overview'} 
              onClick={() => { setActiveTab('overview'); setIsMobileMenuOpen(false); }} 
            />
            <SidebarLink 
              icon={<PlaneTakeoff size={18} />} 
              label="Book Private Charter" 
              active={activeTab === 'charter'} 
              onClick={() => { setActiveTab('charter'); setIsMobileMenuOpen(false); }} 
            />
            <SidebarLink 
              icon={<Zap size={18} className="text-amber-500" />} 
              label="Empty Leg Radar" 
              active={activeTab === 'emptylegs'} 
              onClick={() => { setActiveTab('emptylegs'); setIsMobileMenuOpen(false); }} 
              badge={
                <span className="px-2 py-0.5 rounded-full bg-yellow-400 text-zinc-950 font-black text-[10px] tracking-wider uppercase border border-yellow-300 shadow-xs">
                  70% OFF
                </span>
              }
            />
            <SidebarLink 
              icon={<Users size={18} />} 
              label="DGCA Passenger Manifest" 
              active={activeTab === 'manifest'} 
              onClick={() => { setActiveTab('manifest'); setIsMobileMenuOpen(false); }} 
            />
            <SidebarLink 
              icon={<Coffee size={18} />} 
              label="In-Flight Dining & Satvik" 
              active={activeTab === 'dining'} 
              onClick={() => { setActiveTab('dining'); setIsMobileMenuOpen(false); }} 
            />
            <SidebarLink 
              icon={<FileText size={18} />} 
              label="All-Inclusive Invoices" 
              active={activeTab === 'invoices'} 
              onClick={() => { setActiveTab('invoices'); setIsMobileMenuOpen(false); }} 
            />
            <SidebarLink 
              icon={<Settings size={18} />} 
              label="Account & Settings" 
              active={activeTab === 'settings'} 
              onClick={() => { setActiveTab('settings'); setIsMobileMenuOpen(false); }} 
            />
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-zinc-100 space-y-3 shrink-0">
          <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 leading-snug">
            <span className="font-bold flex items-center gap-1.5 text-zinc-900 mb-0.5">
              <ShieldCheck size={14} className="text-emerald-600" />
              Guaranteed Tail-Lock
            </span>
            Assigned aircraft tail number locked upfront with zero model downgrade.
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-zinc-500 hover:text-black hover:bg-zinc-100 transition-colors"
          >
            <LogOut size={16} />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </aside>

      {/* ─── Main Content Area (Only This Part Scrolls) ─── */}
      <div data-lenis-prevent className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto overscroll-contain">
        
        {/* Top Header (Old White BG Bar) */}
        <header className="h-20 bg-white border-b border-zinc-200 px-6 sm:px-8 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-zinc-600 hover:text-black hover:bg-zinc-100 rounded-xl"
            >
              <Menu size={20} />
            </button>

            {/* Search Bar matching old dashboard */}
            <div className="relative w-64 sm:w-96 hidden md:block">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" size={17} />
              <input 
                type="text" 
                placeholder="Search charters, tail numbers, invoices..." 
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:bg-white focus:border-black transition-all font-medium text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            {/* Quick airport pill */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>BOM Kalina VIP FBO Active</span>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* 24/7 Operations Desk WhatsApp CTA */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20AeroLux%20Flight%20Desk%2C%20I%20am%20messaging%20from%20my%20SkyClub%20Dashboard.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-900 text-xs font-bold transition-all cursor-pointer shadow-xs"
            >
              <WhatsAppIcon size={16} className="shrink-0" />
              <span className="hidden sm:inline">24/7 Ops Desk</span>
            </a>

            <div className="h-6 w-px bg-zinc-200 hidden sm:block" />

            {/* User Profile (Click to open Settings) */}
            <button 
              onClick={() => setActiveTab('settings')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer text-left"
              title="Open Account & Settings"
            >
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-zinc-900">{profileName.split(' ').slice(0, 2).join(' ')}</p>
                <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">SkyClub VIP</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs shadow-sm hover:ring-2 hover:ring-amber-400 transition-all">
                VS
              </div>
            </button>
          </div>
        </header>

        {/* ─── Dashboard Body ─── */}
        <main className="p-6 sm:p-10 space-y-8 flex-1 max-w-7xl">

          {/* ─────────────────────────────────────────────────────────────
              TAB 1: ACTIVE FLIGHT & OVERVIEW (Crisp White BG Aesthetics)
              ───────────────────────────────────────────────────────────── */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              
              {/* Stat Cards Row (Exact White BG Style from Old Dashboard & Homepage) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                  title="Next Departure" 
                  value="14:30 IST" 
                  trend="Today • BOM ➔ DEL" 
                  icon={<Clock className="text-amber-500" />} 
                />
                <StatCard 
                  title="Locked Tail" 
                  value="VT-FLX" 
                  trend="Citation XLS+ (Refurbished 2024)" 
                  icon={<Lock className="text-emerald-500" />} 
                />
                <StatCard 
                  title="AOG Hot Standby" 
                  value="< 60 Mins" 
                  trend="Backup Sovereign+ at BOM" 
                  icon={<Zap className="text-blue-500" />} 
                />
                <StatCard 
                  title="Luggage Cleared" 
                  value={`${totalLuggageWeight} / 180 kg`} 
                  trend="4 Passenger Bags Safe" 
                  icon={<Luggage className="text-purple-500" />} 
                />
              </div>

              {/* Quick Book Charter Banner (Linking to the Same Flight Search Component) */}
              <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-black/20 transition-all">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                    Need Another Flight or Helicopter?
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-xl">
                    Use our unified charter search to quote and book private jets, helicopter yatras, joyrides, or air ambulances with guaranteed fixed pricing.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('charter')}
                  className="bg-black text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <PlaneTakeoff size={16} />
                  <span>Open Flight Search</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Main Flight Card */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="space-y-0.5">
                    <h2 className="text-xl font-bold tracking-tight text-zinc-900">Assigned Flight &amp; Radar Clearance</h2>
                  </div>
                  <button 
                    onClick={() => setActiveTab('charter')} 
                    className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors flex items-center gap-1"
                  >
                    <span>View All Services</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 space-y-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          {activeFlightData.status}
                        </span>
                        <span className="font-mono text-xs text-zinc-500">ID: {activeFlightData.bookingId}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight mt-2">
                        {activeFlightData.departureCity} ➔ {activeFlightData.arrivalCity}
                      </h3>
                      <p className="text-xs text-zinc-500">Nonstop Private Charter • Cessna Citation XLS+ (VT-FLX)</p>
                    </div>

                    <div className="flex sm:flex-col items-end gap-2 text-right">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Ground Transfer</span>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-900 text-xs font-bold">
                        <ShieldCheck size={14} className="text-emerald-600" />
                        <span>Maybach Airside Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Flight Radar Visual Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-4 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Departure</span>
                      <div className="text-4xl font-black text-zinc-900">BOM</div>
                      <div className="text-sm font-bold text-zinc-900">{activeFlightData.departureCity}</div>
                      <p className="text-xs text-zinc-500 leading-snug">{activeFlightData.departureTerminal}</p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 pt-1">
                        <Clock size={13} /> {activeFlightData.departureTime}
                      </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col items-center justify-center py-4 px-2 space-y-2">
                      <span className="text-xs font-mono text-zinc-400 font-bold">{activeFlightData.flightDuration} Nonstop</span>
                      <div className="w-full relative flex items-center">
                        <div className="w-full h-0.5 bg-zinc-200" />
                        <div className="absolute left-1/2 -translate-x-1/2 bg-black text-white p-2 rounded-full shadow-md">
                          <Plane size={15} className="rotate-90" />
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Cruising FL410 • 802 km/h</span>
                    </div>

                    <div className="md:col-span-4 space-y-1.5 text-left md:text-right">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Arrival</span>
                      <div className="text-4xl font-black text-zinc-900">DEL</div>
                      <div className="text-sm font-bold text-zinc-900">{activeFlightData.arrivalCity}</div>
                      <p className="text-xs text-zinc-500 leading-snug">{activeFlightData.arrivalTerminal}</p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 pt-1">
                        <Clock size={13} /> {activeFlightData.arrivalTime}
                      </div>
                    </div>
                  </div>

                  {/* 4 Standards Pills */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-zinc-100">
                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold text-zinc-500 uppercase">
                        <span>Tail-Lock Guarantee</span>
                        <ShieldCheck size={16} className="text-emerald-600" />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900">{activeFlightData.aircraft.model}</h4>
                      <p className="text-xs text-zinc-600 leading-tight">
                        {activeFlightData.aircraft.seats} Seats • Refurbished {activeFlightData.aircraft.yearRefurbished}
                      </p>
                      <span className="text-[10px] font-bold text-emerald-700">Zero model downgrade pledge</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold text-zinc-500 uppercase">
                        <span>AOG Fleet Recovery</span>
                        <Zap size={16} className="text-amber-600" />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900">{activeFlightData.aogProtection.recoveryTime}</h4>
                      <p className="text-xs text-zinc-600 leading-tight">
                        Backup Sovereign+ on hot standby at BOM hub.
                      </p>
                      <span className="text-[10px] font-bold text-amber-700">Guaranteed replacement SLA</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold text-zinc-500 uppercase">
                        <span>VIP Tarmac Car</span>
                        <Clock size={16} className="text-zinc-600" />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900">15-Min Fast Boarding</h4>
                      <p className="text-xs text-zinc-600 leading-tight">
                        {activeFlightData.groundOps.tarmacCar} direct to stairs.
                      </p>
                      <span className="text-[10px] font-bold text-zinc-700">Ops Marshal: {activeFlightData.groundOps.marshal}</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold text-zinc-500 uppercase">
                        <span>Luggage Weight</span>
                        <Luggage size={16} className="text-zinc-600" />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900">{totalLuggageWeight} kg / {activeFlightData.luggage.maxWeightKg} kg</h4>
                      <div className="w-full h-2 rounded-full bg-zinc-200 overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(totalLuggageWeight / activeFlightData.luggage.maxWeightKg) * 100}%` }} />
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700">Safe payload clearance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assigned Crew & Live Weather Radar */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900">Assigned Flight Crew</h3>
                      <p className="text-xs text-zinc-500">DGCA certified commercial airline transport rated pilots</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-zinc-100 text-xs font-bold text-zinc-700">
                      Double-Captain Operation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {activeFlightData.crew.map((pilot, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                            {pilot.name.split(' ')[1]?.[0] || 'P'}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-zinc-900">{pilot.name}</div>
                            <span className="text-[11px] text-zinc-500">{pilot.role}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-xs pt-2 border-t border-zinc-200/60 font-mono text-zinc-600">
                          <span>Total: {pilot.flyingHours}</span>
                          <span className="font-bold text-amber-700">{pilot.license}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 flex flex-col justify-between space-y-4 shadow-sm">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">Live Weather Radar</h3>
                    <p className="text-xs text-zinc-500 mt-0.5">Real-time METAR &amp; TAF report</p>
                  </div>

                  <div className="space-y-3 py-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500">BOM Kalina GA:</span>
                      <span className="font-bold text-emerald-700">Visibility 5,000m • CAVOK</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500">Cruise Level:</span>
                      <span className="font-bold text-zinc-900">FL410 (Smooth Air, 0 Turb)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500">DEL Terminal 1D:</span>
                      <span className="font-bold text-emerald-700">Visibility 4,500m • Wind Calm</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 font-medium">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                    <span>No weather holds or ground delays on sector.</span>
                  </div>
                </div>
              </div>

              {/* Featured Empty Leg Flash Radar Card with Yellow 70% Badge */}
              <div className="relative rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-black/20 transition-all overflow-visible pt-8">
                {/* Yellow 70% Discount Badge in the top right corner ON TOP of the card */}
                <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-yellow-400 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-md border border-yellow-300 flex items-center gap-1.5 z-10">
                  <span>70% OFF</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-zinc-500 font-mono">
                      Repositioning Flight • Live Radar
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                    Mumbai (BOM) ➔ Goa (GOX) • Hawker 900XP
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Tomorrow 11:00 AM • 8 VIP Seats Full Jet • Originally <span className="line-through text-zinc-400">₹6,80,000</span>, Member Flash Fare: <strong className="text-zinc-900 font-mono font-bold">₹2,20,000</strong>
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('emptylegs')}
                  className="bg-black hover:bg-zinc-800 text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-sm flex items-center gap-2 shrink-0 cursor-pointer"
                >
                  <Zap size={15} className="text-yellow-400 fill-yellow-400" />
                  <span>Claim 70% Empty Leg</span>
                  <ArrowRight size={14} />
                </button>
              </div>

            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TAB 2: BOOK PRIVATE CHARTER
              (Uses the SAME flight search component used in the public booking page!)
              ───────────────────────────────────────────────────────────── */}
          {activeTab === 'charter' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-200">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
                    Book a <span className="font-serif italic font-normal text-zinc-500">Private Charter</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    Search and book private jets, helicopter yatras, airplane joyrides, and emergency air ambulances with guaranteed fixed pricing.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  <span>100% All-Inclusive Fixed Pricing</span>
                </div>
              </div>

              {/* Exact same flight search component as public page */}
              <div className="bg-white rounded-3xl border border-zinc-200 p-4 sm:p-8 shadow-sm">
                <FlightSearchSection className="py-2 px-0" hideTopBanner={true} />
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TAB 3: EMPTY LEG RADAR (CONFIRMED SAVINGS)
              ───────────────────────────────────────────────────────────── */}
          {activeTab === 'emptylegs' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
                    Active Empty Leg Radar
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Fixed aircraft positioning flights at up to 70% off standard hourly charter rates.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-xs text-zinc-700 font-mono shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>3 Repositioning Flights Live</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {emptyLegs.map(el => (
                  <div 
                    key={el.id}
                    className="relative rounded-3xl p-6 pt-8 bg-white border border-zinc-200 hover:border-black/30 transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md overflow-visible"
                  >
                    {/* Yellow discount badge in the top right corner ON TOP of the card */}
                    <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-yellow-400 text-zinc-950 font-black text-xs uppercase tracking-wider shadow-md border border-yellow-300 z-10">
                      {el.discountPercent}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-zinc-400">{el.id}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          {el.status}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="text-xl font-bold text-zinc-900">{el.from} ➔ {el.to}</div>
                        <div className="text-xs text-zinc-500 font-medium">{el.aircraft} • {el.category}</div>
                        <div className="text-xs font-mono text-amber-700 font-bold pt-1">{el.date}</div>
                      </div>

                      <div className="pt-2 border-t border-zinc-100 flex items-baseline justify-between">
                        <div>
                          <span className="text-[10px] text-zinc-400 line-through">{el.originalPrice}</span>
                          <div className="text-2xl font-black font-mono text-zinc-900">{el.discountPrice}</div>
                        </div>
                        <span className="text-xs text-zinc-500 font-medium">{el.seats} Seats Full Jet</span>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20AeroLux%2C%20I%20want%20to%20instant%20book%20Empty%20Leg%20${el.id}%20from%20${el.from}%20to%20${el.to}%20at%20${el.discountPrice}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest text-center transition-colors block cursor-pointer shadow-sm"
                    >
                      Instant Book Empty Leg
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TAB 4: DGCA PASSENGER MANIFEST & AADHAAR COMPLIANCE
              ───────────────────────────────────────────────────────────── */}
          {activeTab === 'manifest' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
                    DGCA Passenger Manifest
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Pre-cleared government identity records for seamless 15-minute tarmac car boarding without terminal queues.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddPaxModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-sm"
                >
                  <Plus size={16} />
                  <span>Add Passenger</span>
                </button>
              </div>

              {/* Manifest Table */}
              <div className="rounded-3xl bg-white border border-zinc-200 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-zinc-900">Current Flight Manifest (FL-2026-BOM94)</h3>
                    <p className="text-xs text-zinc-500 font-mono">Total Passengers: {passengers.length} / 9 Capacity • Luggage: {totalLuggageWeight} kg</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold inline-flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    <span>BCAS Airside Clearance Pre-Approved</span>
                  </span>
                </div>

                <div className="divide-y divide-zinc-100">
                  {passengers.map((pax, index) => (
                    <div key={pax.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-50/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center font-bold text-sm text-zinc-900 shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-zinc-900">{pax.name}</div>
                          <div className="text-xs text-zinc-500 font-mono flex items-center gap-2 mt-0.5">
                            <span>{pax.docType}: {pax.docNumber}</span>
                            <span>•</span>
                            <span className="text-emerald-700 font-medium">{pax.meal}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <span className="text-xs font-mono font-bold text-zinc-900">{pax.weightKg} kg</span>
                          <div className="text-[10px] text-zinc-400">Luggage Weight</div>
                        </div>
                        <button
                          onClick={() => handleDeletePassenger(pax.id)}
                          className="p-2 text-zinc-400 hover:text-red-600 transition-colors cursor-pointer"
                          title="Remove passenger"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Passenger Modal */}
              <AnimatePresence>
                {showAddPaxModal && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
                  >
                    <motion.div 
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.95 }}
                      className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-zinc-200 space-y-6 shadow-2xl"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold text-zinc-900">Add Passenger to Manifest</h3>
                        <button onClick={() => setShowAddPaxModal(false)} className="text-zinc-400 hover:text-black">
                          <X size={20} />
                        </button>
                      </div>

                      <form onSubmit={handleAddPassenger} className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-zinc-700">Full Name (As per Govt ID)</label>
                          <input
                            type="text"
                            required
                            value={newPaxName}
                            onChange={e => setNewPaxName(e.target.value)}
                            placeholder="e.g. Vikramaditya Singhania"
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 outline-none focus:border-black"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-zinc-700">Document Type</label>
                            <select
                              value={newPaxDocType}
                              onChange={e => setNewPaxDocType(e.target.value)}
                              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2.5 text-xs text-zinc-900 outline-none focus:border-black"
                            >
                              <option value="Aadhaar Card">Aadhaar Card</option>
                              <option value="Passport">Passport</option>
                              <option value="Voter ID">Voter ID</option>
                            </select>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-zinc-700">Document Number</label>
                            <input
                              type="text"
                              required
                              value={newPaxDocNum}
                              onChange={e => setNewPaxDocNum(e.target.value)}
                              placeholder="XXXX-XXXX-1234"
                              className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-xs text-zinc-900 outline-none focus:border-black font-mono"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-zinc-700">In-Flight Meal Preference</label>
                          <select
                            value={newPaxMeal}
                            onChange={e => setNewPaxMeal(e.target.value)}
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2.5 text-xs text-zinc-900 outline-none focus:border-black"
                          >
                            <option value="Satvik Vegetarian (No Onion/Garlic)">Satvik Vegetarian (No Onion/Garlic)</option>
                            <option value="Jain Cuisine">Strict Jain Cuisine</option>
                            <option value="Continental Executive">Continental Executive</option>
                            <option value="Fresh Fruit Platter">Fresh Fruit & Sparkling Refreshments</option>
                          </select>
                        </div>

                        <div className="pt-2 flex gap-3">
                          <button
                            type="button"
                            onClick={() => setShowAddPaxModal(false)}
                            className="flex-1 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="flex-1 py-3 rounded-xl bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                          >
                            Save Passenger
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TAB 5: IN-FLIGHT SATVIK & JAIN DINING
              ───────────────────────────────────────────────────────────── */}
          {activeTab === 'dining' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
                    Gourmet &amp; Pure Satvik Dining
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Catering prepared by 5-star hotel kitchens (Taj / Oberoi Flight Services) with certified zero cross-contamination.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  <span>100% Pure Veg Certified</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Most Requested
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900">Satvik Thali (No Onion/Garlic)</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Prepared with rock salt (Sendha Namak), desi cow ghee, fresh seasonal vegetables, paneer delicacy, and artisanal hot rotis.
                  </p>
                  <ul className="text-xs text-zinc-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Taj Palace 5-Star Kitchen
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Ayurvedic &amp; Saatvik certified
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> High-altitude ceramic heating
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-zinc-100">
                    <span className="text-xs font-bold text-emerald-700">Pre-selected for FL-2026-BOM94</span>
                  </div>
                </div>

                <div className="rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Strict Jain Protocols
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900">Jain Royal Feast</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Zero root vegetables (no potatoes, carrots, onions, garlic). Cooked in separate sanitized vessels before sunset timing.
                  </p>
                  <ul className="text-xs text-zinc-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Zero underground roots
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Strict Jain kitchen separation
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Fresh cut seasonal fruits
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-zinc-100">
                    <span className="text-xs font-bold text-zinc-500">Selectable on Itinerary</span>
                  </div>
                </div>

                <div className="rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-full">
                    Continental
                  </span>
                  <h3 className="text-xl font-bold text-zinc-900">Executive Continental</h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Artisanal European cheese platters, fresh cold cuts, Norwegian smoked salmon, and premium sparkling refreshments.
                  </p>
                  <ul className="text-xs text-zinc-700 space-y-1.5 pt-2">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Truffle pasta &amp; organic salad
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Espresso &amp; Swiss pralines
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Cellar wine options
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-zinc-100">
                    <span className="text-xs font-bold text-zinc-500">Selectable on Itinerary</span>
                  </div>
                </div>
              </div>

              {/* Airside Extras: Senior & Medical Support */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center shadow-sm">
                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold text-zinc-900">Senior Citizen &amp; Medical Concierge</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    AeroLux charters can be equipped with certified high-altitude oxygen concentrators, wheelchairs for tarmac boarding, and trained medical attendants upon request.
                  </p>
                </div>

                <div className="flex sm:justify-end">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20AeroLux%2C%20I%20want%20to%20request%20medical%20oxygen%20and%20wheelchair%20assistance%20for%20my%20flight.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Request Medical Assistance</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TAB 6: ALL-INCLUSIVE INVOICES (GST 18% & ZERO POST-FLIGHT BILLS)
              ───────────────────────────────────────────────────────────── */}
          {activeTab === 'invoices' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
                    All-Inclusive Tax Invoices (GST 18%)
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Every AeroLux invoice clearly distinguishes flight hours, airport fees, handling charges, and GST. Zero hidden post-flight bills guaranteed.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  <span>Zero Hidden Fees Guaranteed</span>
                </div>
              </div>

              <div className="space-y-6">
                {pastInvoices.map(inv => (
                  <div 
                    key={inv.id}
                    className="rounded-3xl p-6 sm:p-8 bg-white border border-zinc-200 space-y-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-100">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-base font-bold text-zinc-900">{inv.flightRoute}</span>
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                            {inv.status}
                          </span>
                        </div>
                        <div className="text-xs text-zinc-500 font-mono mt-1">
                          Invoice ID: {inv.id} • Date: {inv.date} • Aircraft: {inv.aircraft}
                        </div>
                      </div>

                      <div className="text-left sm:text-right">
                        <span className="text-xs text-zinc-400">Total Billed (All-Inclusive)</span>
                        <div className="text-2xl font-black font-mono text-zinc-900">{inv.totalAmount}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs font-mono">
                      <div className="space-y-1">
                        <span className="text-zinc-400 text-[10px] uppercase">Base Flight Hours</span>
                        <div className="text-zinc-900 font-bold">{inv.baseHoursAmount}</div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-zinc-400 text-[10px] uppercase">Airport Landing &amp; Parking</span>
                        <div className="text-zinc-900 font-bold">{inv.airportLandingFees}</div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-zinc-400 text-[10px] uppercase">FBO VIP Terminal Handling</span>
                        <div className="text-zinc-900 font-bold">{inv.fboHandlingFees}</div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-zinc-400 text-[10px] uppercase">Civil Aviation GST (18%)</span>
                        <div className="text-zinc-900 font-bold">{inv.gstAmount}</div>
                      </div>
                      <div className="space-y-1 col-span-2 sm:col-span-1 flex items-end sm:justify-end">
                        <button 
                          onClick={() => alert(`Downloading GST Compliant Tax Invoice PDF for ${inv.id}`)}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-black hover:bg-zinc-800 text-white font-sans text-xs font-bold transition-colors cursor-pointer shadow-xs"
                        >
                          <Download size={13} />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              TAB 7: USER SETTINGS & SECURITY (Password Change & VIP Profile)
              ───────────────────────────────────────────────────────────── */}
          {activeTab === 'settings' && (
            <div className="space-y-8">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-1">
                    Account &amp; Security Settings
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Manage your SkyClub access password, security verification, DGCA client profile, and instant flight dispatch alerts.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
                  <ShieldCheck size={16} className="text-amber-600" />
                  <span>DGCA &amp; FBO Verified Member</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* ─── LEFT COLUMN: Change Password & Security (7 cols) ─── */}
                <div className="lg:col-span-7 space-y-8">
                  {/* Password Card */}
                  <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
                      <div className="w-10 h-10 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                        <Key size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900">Change Password</h3>
                        <p className="text-xs text-zinc-500">Ensure your SkyClub account uses a strong, private password.</p>
                      </div>
                    </div>

                    {passwordStatus.type !== 'idle' && (
                      <div className={`p-4 rounded-2xl text-xs font-bold flex items-center gap-2.5 ${
                        passwordStatus.type === 'success' 
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}>
                        {passwordStatus.type === 'success' ? (
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                        ) : (
                          <X size={16} className="text-red-600 shrink-0" />
                        )}
                        <span>{passwordStatus.message}</span>
                      </div>
                    )}

                    <form onSubmit={handlePasswordChange} className="space-y-4">
                      {/* Current Password */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-zinc-700 block">Current Password</label>
                        <div className="relative">
                          <input 
                            type={showCurrentPassword ? "text" : "password"}
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            placeholder="Enter your existing password"
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 outline-none focus:bg-white focus:border-black transition-all pr-11"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900 cursor-pointer"
                          >
                            {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* New Password */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-bold text-zinc-700">New Password</label>
                          <span className="text-[10px] font-semibold text-zinc-400">Min. 8 characters</span>
                        </div>
                        <div className="relative">
                          <input 
                            type={showNewPassword ? "text" : "password"}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            placeholder="Create a strong new password"
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 outline-none focus:bg-white focus:border-black transition-all pr-11"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900 cursor-pointer"
                          >
                            {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>

                      {/* Confirm New Password */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-zinc-700 block">Confirm New Password</label>
                        <div className="relative">
                          <input 
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Re-enter your new password"
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-900 outline-none focus:bg-white focus:border-black transition-all pr-11"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900 cursor-pointer"
                          >
                            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                        {confirmPassword && newPassword && (
                          <p className={`text-[11px] font-bold flex items-center gap-1.5 mt-1 ${
                            confirmPassword === newPassword ? 'text-emerald-600' : 'text-red-500'
                          }`}>
                            {confirmPassword === newPassword ? (
                              <>
                                <Check size={12} />
                                <span>Passwords match</span>
                              </>
                            ) : (
                              <>
                                <X size={12} />
                                <span>Passwords do not match yet</span>
                              </>
                            )}
                          </p>
                        )}
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <p className="text-[11px] text-zinc-400">
                          Passkeys &amp; OTP tokens remain active across logged-in devices.
                        </p>
                        <button
                          type="submit"
                          className="px-6 py-3 rounded-xl bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
                        >
                          Update Password
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Security & 2FA Preferences Card */}
                  <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
                      <div className="w-10 h-10 rounded-2xl bg-zinc-100 flex items-center justify-center text-zinc-900">
                        <Shield size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900">Security &amp; Charter Approvals</h3>
                        <p className="text-xs text-zinc-500">Control flight dispatch approvals and critical authentication.</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* 2FA Toggle */}
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                        <div className="space-y-0.5 max-w-md">
                          <span className="text-sm font-bold text-zinc-900 block">Two-Factor Authentication (2FA)</span>
                          <span className="text-xs text-zinc-500 block">Require WhatsApp/SMS OTP confirmation before any charter flight dispatch or tail switch.</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setPref2FA(!pref2FA)}
                          className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                            pref2FA ? 'bg-black' : 'bg-zinc-300'
                          }`}
                        >
                          <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                            pref2FA ? 'left-6.5' : 'left-0.5'
                          }`} />
                        </button>
                      </div>

                      {/* Empty Leg Flash Alerts Toggle */}
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                        <div className="space-y-0.5 max-w-md">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-zinc-900">70% Off Empty Leg Radar Alerts</span>
                            <span className="px-2 py-0.5 rounded-full bg-yellow-400 text-zinc-950 font-black text-[9px] uppercase border border-yellow-300">
                              70% OFF
                            </span>
                          </div>
                          <span className="text-xs text-zinc-500 block">Receive instant WhatsApp alerts when a repositioning jet opens up on your preferred sectors (BOM, DEL, BLR).</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setPrefEmptyLegAlerts(!prefEmptyLegAlerts)}
                          className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                            prefEmptyLegAlerts ? 'bg-black' : 'bg-zinc-300'
                          }`}
                        >
                          <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                            prefEmptyLegAlerts ? 'left-6.5' : 'left-0.5'
                          }`} />
                        </button>
                      </div>

                      {/* WhatsApp Manifest Dispatch */}
                      <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                        <div className="space-y-0.5 max-w-md">
                          <span className="text-sm font-bold text-zinc-900 block">DGCA Manifest PDF on WhatsApp</span>
                          <span className="text-xs text-zinc-500 block">Directly send signed DGCA passenger manifests and FBO lounge boarding passes to registered phone.</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setPrefWhatsappManifest(!prefWhatsappManifest)}
                          className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${
                            prefWhatsappManifest ? 'bg-black' : 'bg-zinc-300'
                          }`}
                        >
                          <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                            prefWhatsappManifest ? 'left-6.5' : 'left-0.5'
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ─── RIGHT COLUMN: Profile & Flight Base (5 cols) ─── */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900">VIP Client Profile</h3>
                        <p className="text-xs text-zinc-500">DGCA &amp; FBO terminal passenger details.</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-[10px] font-black uppercase tracking-wider border border-zinc-200">
                        AEROLUX-VIP-9942
                      </span>
                    </div>

                    {profileSaved && (
                      <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-600" />
                        <span>Profile details successfully saved!</span>
                      </div>
                    )}

                    <form onSubmit={handleSaveProfile} className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-zinc-700 block">Full Name (As on Passport/Aadhaar)</label>
                        <input 
                          type="text" 
                          value={profileName}
                          onChange={(e) => setProfileName(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-900 outline-none focus:bg-white focus:border-black transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-zinc-700 block">Registered Email Address</label>
                        <input 
                          type="email" 
                          value={profileEmail}
                          onChange={(e) => setProfileEmail(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-900 outline-none focus:bg-white focus:border-black transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-zinc-700 block">VIP Dispatch Mobile Number</label>
                        <input 
                          type="text" 
                          value={profilePhone}
                          onChange={(e) => setProfilePhone(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-900 outline-none focus:bg-white focus:border-black transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-zinc-700 block">Primary Base FBO Airport</label>
                        <input 
                          type="text" 
                          value={profileHomeFbo}
                          onChange={(e) => setProfileHomeFbo(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-900 outline-none focus:bg-white focus:border-black transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer mt-2"
                      >
                        Save Profile Information
                      </button>
                    </form>
                  </div>

                  {/* SkyClub Tier Perks Summary */}
                  <div className="p-6 rounded-3xl bg-zinc-950 text-white space-y-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">SkyClub Privilege</span>
                      <span className="text-xs font-mono font-bold text-zinc-400">Tier: Platinum VIP</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-base font-bold text-white">Guaranteed Tail Lock &amp; AOG Backup</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Your account includes complimentary 15-minute tarmac escort, zero model downgrades, and dedicated Cessna Citation / Falcon fleet standby.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                      <span>Assigned Concierge Desk:</span>
                      <span className="font-bold text-emerald-400">Capt. A. Malhotra (Active)</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  )
}
