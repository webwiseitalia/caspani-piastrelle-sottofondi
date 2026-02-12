import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const STORAGE_KEY = 'caspani-piastrelle-sottofondi-cookie-consent'

/**
 * Check whether cookie consent has been given (accepted).
 * Returns true only if the user explicitly accepted.
 */
export function hasCookieConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'accepted'
  } catch {
    return false
  }
}

/**
 * Check whether cookie consent decision has been made (either accepted or rejected).
 * Returns true if the user made any choice.
 */
export function hasCookieDecision() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'accepted' || value === 'rejected'
  } catch {
    return false
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const location = useLocation()

  const isPolicyPage =
    location.pathname === '/privacy-policy' ||
    location.pathname === '/cookie-policy'

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY)
      if (consent !== 'accepted' && consent !== 'rejected') {
        // Small delay so the slide-up animation is visible
        const timer = setTimeout(() => {
          setShowBanner(true)
          // Trigger animation after mount
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsAnimating(true)
            })
          })
        }, 500)
        return () => clearTimeout(timer)
      }
    } catch {
      // localStorage not available — don't show banner
    }
  }, [])

  const handleConsent = (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // Silently fail if localStorage is unavailable
    }
    setIsAnimating(false)
    // Wait for slide-out animation before removing from DOM
    setTimeout(() => {
      setShowBanner(false)
    }, 400)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Blur overlay — only shown when NOT on policy pages */}
      {!isPolicyPage && (
        <div
          className={`fixed inset-0 z-40 backdrop-blur-sm bg-dark/40 transition-opacity duration-500 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      )}

      {/* Cookie banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-t border-cream/10 transition-transform duration-500 ease-out ${
          isAnimating ? 'translate-y-0' : 'translate-y-full'
        }`}
        role="banner"
        aria-label="Cookie consent"
      >
        <div className="pad-x py-5 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          {/* Text */}
          <p className="text-cream/60 font-body text-sm leading-relaxed max-w-3xl">
            Questo sito utilizza esclusivamente cookie tecnici necessari al
            funzionamento. Nessun cookie di profilazione o tracciamento. Per
            maggiori informazioni, consulta la nostra{' '}
            <Link
              to="/cookie-policy"
              className="text-accent hover:text-accent-dark underline underline-offset-2 transition-colors duration-300"
            >
              Cookie Policy
            </Link>
            .
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleConsent('accepted')}
              className="border border-cream/30 text-cream font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-cream hover:text-dark transition-all duration-300"
            >
              Accetta
            </button>
            <button
              onClick={() => handleConsent('rejected')}
              className="border border-cream/30 text-cream font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-cream hover:text-dark transition-all duration-300"
            >
              Rifiuta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
