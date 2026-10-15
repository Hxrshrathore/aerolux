'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  User, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  PlaneTakeoff,
  KeyRound,
  ArrowLeft,
  Pencil,
  ChevronDown
} from "lucide-react"

// Dynamically import FluidGlass with SSR disabled for optimal client-side 3D performance
const FluidGlass = dynamic(() => import("./FluidGlass"), { ssr: false })

// Helper to mask email or phone number with asterisks (e.g. vi***er@flyyo.in or +91 98*** **345)
function maskIdentifier(val: string): string {
  if (!val) return ''
  const trimmed = val.trim()
  if (trimmed.includes('@')) {
    const parts = trimmed.split('@')
    const local = parts[0]
    const domain = parts[1] || ''
    if (local.length <= 2) {
      return `${local[0]}*@${domain}`
    } else if (local.length <= 4) {
      return `${local[0]}**${local.slice(-1)}@${domain}`
    } else {
      const first = local.slice(0, 2)
      const last = local.slice(-1)
      const stars = '*'.repeat(Math.min(local.length - 3, 5))
      return `${first}${stars}${last}@${domain}`
    }
  } else {
    // Phone number masking
    const cleaned = trimmed.replace(/[^\d+]/g, '')
    if (cleaned.length <= 5) return cleaned
    const start = cleaned.slice(0, Math.min(4, Math.floor(cleaned.length / 2)))
    const end = cleaned.slice(-2)
    const stars = '*'.repeat(Math.max(cleaned.length - start.length - end.length, 4))
    return `${start} ${stars} ${end}`
  }
}

// Dynamic Wave Button directly inspired by Ek Dham Hero's HeroYatraBookButton
function EkDhamWaveButton({
  children,
  onClick,
  type = "submit",
  disabled = false,
  className = "",
  waveColor = "#f59e0b" // warm amber wave
}: {
  children: React.ReactNode
  onClick?: () => void
  type?: "submit" | "button"
  disabled?: boolean
  className?: string
  waveColor?: string
}) {
  const [origin, setOrigin] = React.useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setOrigin({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden inline-flex items-center justify-center w-full py-3.5 px-6 rounded-2xl bg-white text-zinc-950 font-bold text-sm tracking-tight shadow-xl transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none cursor-pointer border border-white/20 ${className}`}
    >
      {/* Dynamic Wave Layer Expanding from Cursor Contact Point */}
      <span
        className="absolute inset-0 rounded-2xl pointer-events-none transition-[clip-path] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          backgroundColor: waveColor,
          clipPath: isHovered
            ? `circle(160% at ${origin.x}px ${origin.y}px)`
            : `circle(0% at ${origin.x}px ${origin.y}px)`,
        }}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 text-zinc-950 group-hover:text-black font-bold tracking-tight antialiased transition-colors duration-200">
        {children}
      </span>
    </button>
  )
}

export interface LoginPortalCardProps {
  isModal?: boolean
  onCloseModal?: () => void
  onSuccess?: (user: { email: string; name?: string; role?: string }) => void
  showTrustBarItems?: boolean
}

// Comprehensive global aviation country codes
const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", label: "India (+91)" },
  { code: "+1", flag: "🇺🇸", label: "USA (+1)" },
  { code: "+44", flag: "🇬🇧", label: "UK (+44)" },
  { code: "+971", flag: "🇦🇪", label: "UAE (+971)" },
  { code: "+65", flag: "🇸🇬", label: "Singapore (+65)" },
  { code: "+41", flag: "🇨🇭", label: "Switzerland (+41)" },
  { code: "+33", flag: "🇫🇷", label: "France (+33)" },
  { code: "+49", flag: "🇩🇪", label: "Germany (+49)" },
  { code: "+81", flag: "🇯🇵", label: "Japan (+81)" },
  { code: "+61", flag: "🇦🇺", label: "Australia (+61)" },
]

export function LoginPortalCard({
  isModal = false,
  onCloseModal,
  onSuccess,
  showTrustBarItems = true
}: LoginPortalCardProps) {
  // Progressive single flow stages: 'identifier' -> 'password' | 'signup' | 'otp' | 'forgot'
  const [stage, setStage] = React.useState<'identifier' | 'password' | 'signup' | 'otp' | 'forgot'>('identifier')
  const [isExistingUser, setIsExistingUser] = React.useState(true)
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const router = useRouter()

  // Form states
  const [identifier, setIdentifier] = React.useState("")
  const [countryCode, setCountryCode] = React.useState("+91")
  const [password, setPassword] = React.useState("")
  const [fullName, setFullName] = React.useState("")
  const [otpCode, setOtpCode] = React.useState("")
  const [resendTimer, setResendTimer] = React.useState(0)

  // Intelligent phone sensing: activates if user inputs digits or '+' without '@'
  const isPhoneNumber = React.useMemo(() => {
    const trimmed = identifier.trim()
    if (!trimmed) return false
    if (trimmed.includes('@')) return false
    return /^[+0-9]/.test(trimmed) || /^\d+$/.test(trimmed.replace(/[\s-]/g, ''))
  }, [identifier])

  // Countdown timer for OTP
  React.useEffect(() => {
    let interval: NodeJS.Timeout
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer(prev => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [resendTimer])

  // Demo 1-click credentials filler
  const handleDemoFill = () => {
    setIdentifier("vip.member@flyyo.in")
    setPassword("PrivateCharter#2026")
  }

  // Handle Step 1: Identifier check
  const handleIdentifierSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!identifier.trim()) {
      setStatusMessage("Please enter your registered email or phone number.")
      return
    }

    setIsLoading(true)
    setStatusMessage(null)

    // If it's a phone number and doesn't already have a country code, prepend the selected one
    let activeId = identifier.trim()
    if (isPhoneNumber && !activeId.startsWith('+')) {
      activeId = `${countryCode} ${activeId}`
      setIdentifier(activeId)
    }

    // Simulate authentic lookup delay
    await new Promise(r => setTimeout(r, 650))
    setIsLoading(false)

    // Determine if existing user or new signup
    const trimmed = activeId.toLowerCase()
    const isNew = trimmed.includes("new") || trimmed.includes("signup")
    
    if (isNew) {
      setIsExistingUser(false)
      setStage('signup')
    } else {
      setIsExistingUser(true)
      setStage('password')
    }
  }

  // Handle Step 2: Final Submit
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatusMessage(null)

    await new Promise(r => setTimeout(r, 900))
    setIsLoading(false)

    if (stage === 'forgot') {
      setStatusMessage("Password recovery instructions dispatched.")
      setTimeout(() => {
        setStage('password')
        setStatusMessage(null)
      }, 2000)
      return
    }

    // Success Authentication
    setIsSuccess(true)
    const userData = {
      email: identifier.includes('@') ? identifier : `${identifier}@flyyo.in`,
      name: fullName || 'VIP Member',
      role: 'SkyClub Member'
    }

    if (onSuccess) {
      onSuccess(userData)
    }

    setTimeout(() => {
      if (isModal && onCloseModal) {
        onCloseModal()
      } else if (!isModal) {
        router.push('/dashboard')
      }
    }, 1300)
  }

  return (
    <div className="relative w-full text-white">
      {/* Ambient Spiritual & Luxury Golden Aura Glow behind card */}
      <div className="absolute -top-12 -left-12 -right-12 h-64 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Main Container Card with Fluid Glass Background & Luxury Borders */}
      <div className="relative bg-zinc-950/70 backdrop-blur-3xl border border-white/20 rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.85)] overflow-hidden">
        
        {/* ─── 3D Fluid Glass Canvas Layer ─── */}
        <div className="absolute inset-0 rounded-[28px] sm:rounded-[36px] overflow-hidden pointer-events-none z-0 opacity-70">
          <FluidGlass
            mode="bar"
            scale={0.18}
            ior={1.16}
            thickness={10}
            transmission={0.96}
            roughness={0.02}
            chromaticAberration={0.08}
            anisotropy={0.01}
            backgroundColor="transparent"
          />
        </div>

        {/* Subtle Luxury Top Gradient Edge */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent z-10" />

        {/* ─── Card Interactive Content (z-10) ─── */}
        <div className="relative z-10">

          {/* ─── Header: Ek Dham Inspired Editorial Typography ─── */}
          <div className="space-y-2 pb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
              {stage === 'signup' ? (
                <>
                  Complete <span className="font-serif italic font-normal text-amber-200">Registration.</span>
                </>
              ) : stage === 'otp' ? (
                <>
                  Verify <span className="font-serif italic font-normal text-amber-200">Clearance.</span>
                </>
              ) : stage === 'forgot' ? (
                <>
                  Reset <span className="font-serif italic font-normal text-amber-200">Password.</span>
                </>
              ) : stage === 'password' ? (
                <>
                  Enter <span className="font-serif italic font-normal text-amber-200">Password.</span>
                </>
              ) : (
                <>
                  Welcome to <span className="font-serif italic font-normal text-amber-200">SkyClub.</span>
                </>
              )}
            </h2>
            
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {stage === 'identifier' && "Enter your email or mobile number to access private flight dispatch."}
              {stage === 'password' && "Verify your private credentials to unlock live flight operations."}
              {stage === 'signup' && "Create your private account to lock in VIP rates and instant dispatch."}
              {stage === 'otp' && "We've dispatched a 6-digit one-time passcode to your terminal."}
              {stage === 'forgot' && "Enter your registered email to receive secure recovery clearance."}
            </p>
          </div>

          {/* ─── Masked Identifier Banner (When in Password / Signup / OTP / Forgot Stage) ─── */}
          {stage !== 'identifier' && !isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 p-3 rounded-2xl bg-white/[0.08] border border-white/15 flex items-center justify-between gap-3 backdrop-blur-md"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                  {identifier.includes('@') ? <Mail size={15} /> : <Phone size={15} />}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 leading-none">
                    Signing in as
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-amber-200 truncate mt-0.5">
                    {maskIdentifier(identifier)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStage('identifier')
                  setStatusMessage(null)
                }}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-xs font-semibold transition-colors shrink-0 cursor-pointer"
                title="Change email or phone"
              >
                <Pencil size={12} />
                <span>Change</span>
              </button>
            </motion.div>
          )}

          {/* ─── Success Confirmation State ─── */}
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 size={36} className="animate-in zoom-in duration-300" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Clearance Approved!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-xs mx-auto">
                  Welcome back to SkyClub. Your flight desk credentials have been authenticated.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-amber-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>{isModal ? "Resuming Session..." : "Launching Dashboard..."}</span>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Status Message Notification */}
              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs font-medium flex items-center gap-2.5"
                >
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>{statusMessage}</span>
                </motion.div>
              )}

              {/* ─── STAGE 1: IDENTIFIER INPUT & GOOGLE SIGN-IN ─── */}
              {stage === 'identifier' && (
                <div className="space-y-4">
                  {/* Google Social Sign-In */}
                  <button
                    type="button"
                    onClick={async () => {
                      setIsLoading(true)
                      await new Promise(r => setTimeout(r, 800))
                      setIsLoading(false)
                      setIsSuccess(true)
                      if (onSuccess) onSuccess({ email: 'google.member@flyyo.in', name: 'Google Member' })
                      setTimeout(() => {
                        if (isModal && onCloseModal) onCloseModal()
                        else if (!isModal) router.push('/dashboard')
                      }, 1300)
                    }}
                    className="w-full inline-flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-white/15 bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer shadow-sm group"
                  >
                    <svg className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                      />
                    </svg>
                    <span>Continue with Google</span>
                  </button>

                  <div className="relative flex items-center justify-center my-2">
                    <div className="border-t border-white/10 w-full" />
                    <span className="bg-zinc-950/80 px-3 text-xs text-zinc-400 font-normal shrink-0">
                      or with email or phone
                    </span>
                  </div>

                  <form onSubmit={handleIdentifierSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-normal text-zinc-300 ml-1 flex items-center gap-1.5">
                        {isPhoneNumber ? (
                          <Phone size={13} className="text-emerald-400" />
                        ) : (
                          <Mail size={13} className="text-amber-400" />
                        )}
                        <span>Email address or phone number</span>
                      </label>

                      <div className="relative flex items-center gap-2">
                        {/* Intelligent Country Code Field — Revealed when a phone number is sensed */}
                        <AnimatePresence initial={false}>
                          {isPhoneNumber && (
                            <motion.div
                              initial={{ opacity: 0, width: 0, scale: 0.9 }}
                              animate={{ opacity: 1, width: "auto", scale: 1 }}
                              exit={{ opacity: 0, width: 0, scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              className="shrink-0 overflow-hidden"
                            >
                              <div className="relative">
                                <select
                                  value={countryCode}
                                  onChange={e => setCountryCode(e.target.value)}
                                  className="appearance-none bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 focus:border-amber-400 rounded-xl py-3 pl-3 pr-7 text-xs font-semibold text-white outline-none cursor-pointer transition-colors"
                                  title="Country Code"
                                >
                                  {COUNTRY_CODES.map(c => (
                                    <option key={c.code} value={c.code} className="bg-zinc-900 text-white">
                                      {c.flag} {c.code}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown size={13} className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <div className="relative flex-1">
                          <input
                            required
                            type={isPhoneNumber ? "tel" : "text"}
                            value={identifier}
                            onChange={e => setIdentifier(e.target.value)}
                            placeholder={isPhoneNumber ? "98200 12345" : "vip.client@flyyo.in or phone number"}
                            className="w-full bg-white/[0.07] hover:bg-white/[0.10] border border-white/15 focus:border-amber-400 rounded-xl py-3 px-3.5 outline-none transition-all text-xs sm:text-sm text-white placeholder-zinc-400 font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-1 text-xs">
                      <button
                        type="button"
                        onClick={handleDemoFill}
                        className="text-[11px] font-mono text-amber-300/80 hover:text-amber-200 underline cursor-pointer"
                      >
                        Fill VIP Demo Account
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsExistingUser(false)
                          setStage('signup')
                        }}
                        className="text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        New to SkyClub? Sign up
                      </button>
                    </div>

                    <div className="pt-2">
                      <EkDhamWaveButton disabled={isLoading} waveColor="#f59e0b">
                        {isLoading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-zinc-900 border-t-amber-500 rounded-full animate-spin" />
                            <span>Verifying Credentials...</span>
                          </>
                        ) : (
                          <>
                            <span>Continue</span>
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </EkDhamWaveButton>
                    </div>
                  </form>
                </div>
              )}

              {/* ─── STAGE 2: PASSWORD INPUT (EXISTING USER) ─── */}
              {stage === 'password' && (
                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                        <Lock size={13} className="text-amber-400" />
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => { setStage('forgot'); setStatusMessage(null) }}
                        className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        required
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        autoFocus
                        className="w-full bg-white/[0.07] hover:bg-white/[0.10] border border-white/15 focus:border-amber-400 rounded-xl py-3 pl-3.5 pr-10 outline-none transition-all text-xs sm:text-sm text-white placeholder-zinc-400 font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-3.5 h-3.5 rounded border-zinc-700 bg-zinc-900 text-amber-400 accent-amber-400 focus:ring-amber-400"
                      />
                      <span className="text-xs text-zinc-300 font-medium">Keep Terminal Remembered</span>
                    </label>

                    <button
                      type="button"
                      onClick={() => setStage('otp')}
                      className="text-[11px] text-amber-300 hover:text-amber-200 font-semibold cursor-pointer"
                    >
                      Sign in with OTP
                    </button>
                  </div>

                  <div className="pt-2">
                    <EkDhamWaveButton disabled={isLoading} waveColor="#f59e0b">
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-900 border-t-amber-500 rounded-full animate-spin" />
                          <span>Authenticating Access...</span>
                        </>
                      ) : (
                        <>
                          <span>Sign In to SkyClub</span>
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </EkDhamWaveButton>
                  </div>
                </form>
              )}

              {/* ─── STAGE 3: SIGN UP (NEW USER) ─── */}
              {stage === 'signup' && (
                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 ml-1 flex items-center gap-1.5">
                      <User size={13} className="text-amber-400" />
                      Full Legal Name
                    </label>
                    <input
                      required
                      type="text"
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      placeholder="Capt. Vikramaditya Singhania"
                      autoFocus
                      className="w-full bg-white/[0.07] hover:bg-white/[0.10] border border-white/15 focus:border-amber-400 rounded-xl py-3 px-3.5 outline-none transition-all text-xs sm:text-sm text-white placeholder-zinc-400 font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 ml-1 flex items-center gap-1.5">
                      <Lock size={13} className="text-amber-400" />
                      Create Security Password
                    </label>
                    <div className="relative">
                      <input
                        required
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full bg-white/[0.07] hover:bg-white/[0.10] border border-white/15 focus:border-amber-400 rounded-xl py-3 pl-3.5 pr-10 outline-none transition-all text-xs sm:text-sm text-white placeholder-zinc-400 font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <EkDhamWaveButton disabled={isLoading} waveColor="#f59e0b">
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-900 border-t-amber-500 rounded-full animate-spin" />
                          <span>Registering SkyClub Member...</span>
                        </>
                      ) : (
                        <>
                          <span>Activate SkyClub Membership</span>
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </EkDhamWaveButton>
                  </div>
                </form>
              )}

              {/* ─── STAGE 4: FAST OTP VERIFICATION ─── */}
              {stage === 'otp' && (
                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                        <KeyRound size={13} className="text-amber-400" />
                        6-Digit Verification Code
                      </label>
                      <button
                        type="button"
                        onClick={() => setResendTimer(45)}
                        disabled={resendTimer > 0}
                        className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 disabled:opacity-40 cursor-pointer"
                      >
                        {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend Code"}
                      </button>
                    </div>
                    <input
                      required
                      type="text"
                      maxLength={6}
                      value={otpCode}
                      onChange={e => setOtpCode(e.target.value.replace(/\D/g, ''))}
                      placeholder="123456"
                      autoFocus
                      className="w-full tracking-[0.4em] text-center font-mono text-base font-bold bg-white/[0.07] hover:bg-white/[0.10] border border-white/15 focus:border-amber-400 rounded-xl py-3 px-3.5 outline-none transition-all text-white placeholder-zinc-500"
                    />
                  </div>

                  <div className="flex items-center justify-between px-1">
                    <button
                      type="button"
                      onClick={() => setStage('password')}
                      className="text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Use Password Instead
                    </button>
                  </div>

                  <div className="pt-2">
                    <EkDhamWaveButton disabled={isLoading} waveColor="#f59e0b">
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-900 border-t-amber-500 rounded-full animate-spin" />
                          <span>Verifying Passcode...</span>
                        </>
                      ) : (
                        <>
                          <span>Verify & Sign In</span>
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </EkDhamWaveButton>
                  </div>
                </form>
              )}

              {/* ─── STAGE 5: FORGOT PASSWORD ─── */}
              {stage === 'forgot' && (
                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-zinc-300">
                    We will send a secure password reset link to your registered terminal address.
                  </div>

                  <div className="pt-2">
                    <EkDhamWaveButton disabled={isLoading} waveColor="#f59e0b">
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-900 border-t-amber-500 rounded-full animate-spin" />
                          <span>Dispatching Clearance...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Password Recovery</span>
                          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </EkDhamWaveButton>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={() => setStage('password')}
                      className="text-xs text-amber-300 hover:text-amber-200 font-semibold cursor-pointer"
                    >
                      Back to Password
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

          {/* ─── TrustBar Pillars at Card Bottom (Only 30+ has the ping dot) ─── */}
          {showTrustBarItems && (
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* 1. 30+ Aircrafts (Has animated beacon) */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                <div className="relative w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center border border-zinc-800 shrink-0">
                  <PlaneTakeoff size={15} className="stroke-[1.75] text-zinc-100" />
                  <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                  </span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-white tracking-tight leading-none truncate">
                    30+ Aircrafts
                  </span>
                  <span className="text-[10px] text-zinc-400 font-medium mt-0.5 truncate">
                    Jets & Choppers
                  </span>
                </div>
              </div>

              {/* 2. DGCA Certified (NO blinking dot as requested) */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                <div className="relative w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center border border-zinc-800 shrink-0">
                  <ShieldCheck size={15} className="stroke-[2] text-emerald-400" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-white tracking-tight leading-none truncate">
                    DGCA Certified
                  </span>
                  <span className="text-[10px] text-zinc-400 font-medium mt-0.5 truncate">
                    Zero-Compromise Safety
                  </span>
                </div>
              </div>

              {/* 3. 24/7 Operations (NO blinking dot as requested) */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                <div className="relative w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center border border-zinc-800 shrink-0">
                  <Zap size={15} className="stroke-[2] text-amber-400 fill-amber-400/20" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-white tracking-tight leading-none truncate">
                    24/7 Operations
                  </span>
                  <span className="text-[10px] text-zinc-400 font-medium mt-0.5 truncate">
                    Instant Charter Dispatch
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
