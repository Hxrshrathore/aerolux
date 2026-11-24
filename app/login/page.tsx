'use client'

import * as React from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { 
  ArrowLeft, 
  ShieldCheck, 
  PlaneTakeoff, 
  Zap, 
  Sparkles
} from "lucide-react"
import Counter from "@/components/Counter"
import { LoginPortalCard } from "@/components/LoginPortalCard"

function AeroLuxLogo({ className = "h-10 w-10", color = "currentColor" }: { className?: string, color?: string }) {
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
      <path
        d="M639.122 719.033C649.58 718.23 661.085 719.028 671.175 718.78C700.633 718.056 729.144 716.697 727.075 755.774C726.514 766.415 728.37 780.871 726.117 791.334C725.13 796.002 723.086 800.378 720.144 804.133C714.598 811.208 708.01 814.323 699.234 815.395C699.095 815.419 698.956 815.444 698.817 815.469C683.82 816.114 668.546 815.762 653.554 815.777C647.601 815.782 641.469 815.94 635.893 814.745C630.862 813.673 626.16 811.416 622.181 808.157C608.637 797.138 611.475 781.179 611.242 765.656C611.133 758.14 610.9 747.772 612.71 740.638C613.797 736.307 615.866 732.284 618.763 728.881C624.562 722.05 630.59 719.738 639.122 719.033ZM698.376 800.834C702.464 799.926 708.576 797.183 710.396 793.308C713.789 786.085 712.262 772.795 712.366 764.629C712.524 751.622 714.816 733.971 696.764 733.351C678.388 733.41 658.51 732.388 640.194 733.37C619.795 735.846 627.043 761.732 625.673 775.32C624.567 786.284 627.762 800.12 640.675 800.432C658.51 800.869 680.705 801.945 698.376 800.834Z"
        fill="currentColor"
      />
      <path
        d="M95.7545 718.527C131.369 717.912 168.839 718.706 204.561 718.845C204.251 723.617 203.996 728.395 203.797 733.172L111.258 733.182L111.213 759.971C126.175 759.713 141.871 759.976 156.89 760.001C168.412 760.035 181.08 760.403 192.483 760.065L192.445 774.69C185.557 774.199 173.61 774.477 166.237 774.442L111.173 774.402C111.201 787.727 111.05 801.757 111.53 815.013C106.919 814.958 100.608 814.705 96.135 815.057C96.838 791.24 95.8051 766.936 96.2457 743.064C96.392 735.141 96.3682 726.39 95.7545 718.527Z"
        fill="currentColor"
      />
      <path
        d="M596.657 718.641L596.86 718.731C596.761 719.877 543.376 763.468 538.019 771.252C537.508 781.75 537.895 804.649 538.768 815.112C533.524 815.072 528.28 815.186 523.046 815.454C523.577 801.038 523.041 785.376 523.255 770.706C516.845 763.841 505.827 755.337 498.291 749.092C486.988 739.284 475.823 729.317 464.799 719.197C472.496 719.133 480.271 718.999 487.957 719.306C502.354 732.358 516.166 744.146 530.79 756.851C545.49 745.202 559.39 730.984 573.618 719.162C580.792 718.716 589.374 718.775 596.657 718.641Z"
        fill="currentColor"
      />
      <path
        d="M436.933 718.483C443.871 718.254 451.141 718.364 458.082 718.468C451.589 725.259 434.845 739.651 427.444 745.996C418.023 754.177 408.377 762.223 399.103 770.548C398.502 783.129 399.478 802.303 399.447 815.514L384.889 815.553C385.403 802.407 385.283 783.858 385 770.741C374.206 761.439 363.47 752.068 352.792 742.632C344.377 735.285 333.839 726.49 326.199 718.547C333.949 718.641 341.772 718.299 349.476 718.929C363.083 731.996 378.197 744.091 391.781 757.347C393.717 755.521 395.981 753.77 398.018 752.024C411.036 740.881 423.726 729.412 436.933 718.483Z"
        fill="currentColor"
      />
      <path
        d="M228.191 718.393C233.087 718.339 238.19 718.483 243.101 718.547L242.954 800.725L316.951 801.087C316.99 805.795 317.132 810.885 316.892 815.558C296.831 816.049 276.379 815.459 256.289 815.653C246.752 815.747 237.06 815.444 227.542 815.99C228.888 784.572 227.911 749.999 228.191 718.393Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function LoginPage() {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [fleetCount, setFleetCount] = React.useState(0)

  // Trigger smooth counter animation when page mounts
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFleetCount(30)
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen w-full bg-zinc-950 text-white selection:bg-amber-400 selection:text-black overflow-x-hidden flex flex-col justify-between">
      
      {/* ─── Clean Video Background without heavy dark overlays (Natural & Vivid) ─── */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
        >
          <source src="/assets/videos/bg/herobg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ─── Ambient Spiritual Golden Aura (Directly inspired by Ek Dham Hero) ─── */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* ─── Top Navigation Bar ─── */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white transition-all cursor-pointer group shadow-sm"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Return to AeroLux</span>
        </Link>

        {/* Brand Combo: SVG Logo on top and SkyClub below in Navbar CTA typography */}
        <Link 
          href="/" 
          className="group flex flex-col items-center justify-center no-underline transition-transform hover:scale-105"
          title="AeroLux SkyClub"
        >
          <AeroLuxLogo className="h-9 w-9 sm:h-10 sm:w-10 text-white transition-transform group-hover:scale-105" color="#ffffff" />
          <span className="text-[14px] sm:text-[15px] font-medium tracking-tight antialiased text-white mt-1.5 leading-none">
            SkyClub
          </span>
        </Link>
      </header>

      {/* ─── Central Stage: Grid layout with Showcase & Ek Dham Portal Card ─── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-4 sm:py-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Ek Dham Inspired Storytelling & The TrustBar Pillars */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.08] text-white">
                Elevate Your Access. <br />
                <span className="font-serif italic font-normal text-amber-200">
                  Above The Horizon.
                </span>
              </h1>

              <p className="text-zinc-200 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.8)]">
                Experience seamless luxury flight operations. Access live aircraft radars, confirmed empty legs, and personal aviation concierges across India.
              </p>
            </motion.div>

            {/* ─── The TrustBar Pillars (Only 30+ has the blinking ping dot + animated counter) ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="space-y-3.5 max-w-lg"
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-300 pl-1 [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
                Aviation Standards & Guarantees
              </div>

              {/* Pillar 1: 30+ Aircrafts (Animated Counter + Blinking Ping Beacon Dot) */}
              <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/15 flex items-center gap-4 transition-all duration-300 hover:bg-black/60 hover:border-amber-400/40 group shadow-lg">
                <div className="relative w-12 h-12 rounded-xl bg-zinc-950 text-white flex items-center justify-center border border-zinc-800 shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                  <PlaneTakeoff size={22} className="stroke-[1.75] text-zinc-100" />
                  {/* Blinking Ping Beacon Dot kept ONLY for 30+ Aircrafts */}
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400 border-2 border-zinc-950"></span>
                  </span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-tight flex items-center">
                    <Counter
                      value={fleetCount}
                      places={[10, 1]}
                      fontSize={16}
                      padding={0}
                      gap={0}
                      horizontalPadding={0}
                      textColor="currentColor"
                      fontWeight={700}
                      gradientHeight={0}
                      digitPlaceHolders={false}
                    />
                    <span className="ml-1">+ Aircrafts Ready</span>
                  </div>
                  <p className="text-xs text-zinc-300 mt-0.5 leading-snug">
                    Jets, Turboprops & Choppers configured for immediate VIP charter dispatch.
                  </p>
                </div>
              </div>

              {/* Pillar 2: DGCA Certified (NO blinking dot as requested) */}
              <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/15 flex items-center gap-4 transition-all duration-300 hover:bg-black/60 hover:border-emerald-400/40 group shadow-lg">
                <div className="relative w-12 h-12 rounded-xl bg-zinc-950 text-white flex items-center justify-center border border-zinc-800 shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldCheck size={22} className="stroke-[2] text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    DGCA Certified Operators
                  </h4>
                  <p className="text-xs text-zinc-300 mt-0.5 leading-snug">
                    Zero-Compromise Safety adhering to civil aviation airworthiness standards.
                  </p>
                </div>
              </div>

              {/* Pillar 3: 24/7 Operations (NO blinking dot as requested) */}
              <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/15 flex items-center gap-4 transition-all duration-300 hover:bg-black/60 hover:border-amber-400/40 group shadow-lg">
                <div className="relative w-12 h-12 rounded-xl bg-zinc-950 text-white flex items-center justify-center border border-zinc-800 shadow-lg shrink-0 group-hover:scale-105 transition-transform">
                  <Zap size={22} className="stroke-[2] text-amber-400 fill-amber-400/20" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    24/7 Operations Desk
                  </h4>
                  <p className="text-xs text-zinc-300 mt-0.5 leading-snug">
                    Instant charter coordination, flight clearance, and FBO handling desk.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Embedded Fluid Glass LoginPortalCard */}
          <div className="lg:col-span-6 xl:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <LoginPortalCard 
                isModal={false} 
                showTrustBarItems={false} 
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* ─── Bottom Footer Bar ─── */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 border-t border-white/15 backdrop-blur-md bg-black/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-300 font-medium">
        <div className="flex items-center gap-2">
          <ShieldCheck size={15} className="text-emerald-400" />
          <span>256-Bit Encrypted Aviation Desk Clearance • ISO 9001:2015</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/terms-and-conditon" className="hover:text-white transition-colors">
            Terms of Carriage
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            24/7 Flight Support
          </Link>
        </div>
      </footer>

    </main>
  )
}
