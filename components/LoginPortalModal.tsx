'use client'

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { LoginPortalCard, LoginPortalCardProps } from "./LoginPortalCard"

export interface LoginPortalModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: (user: { email: string; name?: string; role?: string }) => void
  initialView?: 'login' | 'signup' | 'otp' | 'forgot-password'
}

// Global custom event name for frictionless 1-line invocation anywhere in the app
const OPEN_LOGIN_EVENT = 'aerolux:open-login-portal'

/**
 * Trigger the login portal modal from anywhere without prop drilling.
 * Example: `openLoginModal({ view: 'signup' })`
 */
export function openLoginModal(options?: { view?: 'login' | 'signup' | 'otp' }) {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OPEN_LOGIN_EVENT, { detail: options || {} }))
  }
}

/**
 * React hook to control or listen to the login portal modal.
 */
export function useLoginPortal() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [view, setView] = React.useState<'login' | 'signup' | 'otp' | 'forgot-password'>('login')

  React.useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent
      if (customEvent.detail?.view) {
        setView(customEvent.detail.view)
      }
      setIsOpen(true)
    }

    window.addEventListener(OPEN_LOGIN_EVENT, handleOpen)
    return () => window.removeEventListener(OPEN_LOGIN_EVENT, handleOpen)
  }, [])

  return {
    isOpen,
    open: (initial?: 'login' | 'signup' | 'otp') => {
      if (initial) setView(initial)
      setIsOpen(true)
    },
    close: () => setIsOpen(false),
    view,
    setView
  }
}

export function LoginPortalModal({
  isOpen,
  onClose,
  onSuccess,
  initialView = 'login'
}: LoginPortalModalProps) {
  // Prevent scrolling when modal is active
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // ESC key handler
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Ambient Spiritual & Golden Glow */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none z-[121]" />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl z-[122] my-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer group"
              aria-label="Close Login Portal"
            >
              <X size={17} className="transition-transform duration-200 group-hover:rotate-90" />
            </button>

            {/* Embedded Ek Dham Login Card */}
            <LoginPortalCard
              isModal={true}
              onCloseModal={onClose}
              onSuccess={onSuccess}
              showTrustBarItems={true}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

/**
 * Mount once in RootLayout to enable `openLoginModal()` anywhere in the application.
 */
export function GlobalLoginModal() {
  const { isOpen, close } = useLoginPortal()
  return (
    <LoginPortalModal
      isOpen={isOpen}
      onClose={close}
    />
  )
}


