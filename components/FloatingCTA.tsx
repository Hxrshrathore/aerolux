'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { Phone, Mail, X, Users, Plane } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { WhatsAppIcon } from "./WhatsAppIcon"

export function FloatingCTA() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  const actions = [
    {
      icon: <Phone size={18} />,
      label: "Call Ops",
      href: `tel:${siteConfig.contact.phoneRaw}`,
      color: "bg-zinc-900 text-white hover:bg-black",
    },
    {
      icon: <Mail size={18} />,
      label: "Email",
      href: `mailto:${siteConfig.contact.email}`,
      color: "bg-zinc-900 text-white hover:bg-black",
    },
    {
      icon: <Users size={18} />,
      label: "Deals Club",
      href: siteConfig.contact.communityWhatsapp,
      color: "bg-amber-600 text-white hover:bg-amber-500",
    },
    {
      icon: <WhatsAppIcon size={18} />,
      label: "WhatsApp",
      href: siteConfig.contact.whatsappLink,
      color: "bg-[#25D366] text-black font-bold hover:bg-[#1ebd5a]",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <>
            {actions.map((action, idx) => (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.label === "WhatsApp" || action.label === "Deals Club" ? "_blank" : undefined}
                rel={action.label === "WhatsApp" || action.label === "Deals Club" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{ delay: idx * 0.05, type: "spring", damping: 20, stiffness: 300 }}
                className={`flex items-center gap-3 px-5 py-3 rounded-full shadow-xl transition-all cursor-pointer ${action.color}`}
              >
                {action.icon}
                <span className="text-xs font-bold uppercase tracking-widest">{action.label}</span>
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Toggle Quick Contact"
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer ${
          isExpanded
            ? 'bg-zinc-950 text-white ring-2 ring-white/20'
            : 'bg-black text-white hover:bg-zinc-900 shadow-black/30'
        }`}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isExpanded ? <X size={22} /> : <WhatsAppIcon size={24} />}
        </motion.div>
      </motion.button>
    </div>
  )
}
