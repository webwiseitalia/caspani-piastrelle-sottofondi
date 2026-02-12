import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import logo from '../assets/logo.webp'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Chi Siamo', path: '/chi-siamo' },
  { name: 'Servizi', path: '/servizi' },
  { name: 'Galleria', path: '/galleria' },
  { name: 'Contatti', path: '/contatti' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuLinksRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* Animate menu links on open */
  useEffect(() => {
    if (isOpen && menuLinksRef.current) {
      const links = menuLinksRef.current.querySelectorAll('.menu-link')
      gsap.fromTo(links,
        { y: 80, opacity: 0, rotateX: -15 },
        {
          y: 0, opacity: 1, rotateX: 0,
          duration: 0.8,
          ease: 'power4.out',
          stagger: { each: 0.06, from: 'start' },
          delay: 0.15,
        }
      )
    }
  }, [isOpen])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-dark/95 backdrop-blur-md'
          : 'py-5 bg-transparent'
      }`}>
        <div className="w-full flex items-center justify-between pad-x">
          {/* Logo — left aligned, asymmetric */}
          <Link to="/" className="flex items-center gap-3 relative z-50">
            <img src={logo} alt="Caspani" title="Caspani Pavimenti" loading="eager" width={40} height={40} className="h-9 md:h-10 w-auto" />
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-[13px] tracking-tight leading-none block transition-colors duration-500 ${
                isOpen ? 'text-cream' : scrolled ? 'text-cream' : 'text-white'
              }`}>CASPANI</span>
              <span className={`font-heading font-medium text-[9px] uppercase tracking-[0.2em] block mt-0.5 transition-colors duration-500 ${
                isOpen ? 'text-cream/40' : scrolled ? 'text-cream/40' : 'text-white/40'
              }`}>Pavimenti & Sottofondi</span>
            </div>
          </Link>

          {/* Desktop nav — right side with irregular spacing */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading font-semibold text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  i === 0 ? 'mr-8' : i === 1 ? 'mr-10' : i === 2 ? 'mr-7' : i === 3 ? 'mr-9' : 'mr-0'
                } ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : scrolled
                    ? 'text-cream/60 hover:text-cream'
                    : 'text-white/60 hover:text-white'
                }`}
              >{link.name}</Link>
            ))}
            <Link
              to="/contatti"
              className="ml-6 font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-2.5 bg-accent text-white hover:bg-accent-dark transition-all duration-300"
            >Preventivo</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-end justify-center gap-1.5"
            aria-label="Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 5, width: 24 } : { rotate: 0, y: 0, width: 24 }}
              className="block h-[2px] bg-white origin-center"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -3, width: 24 } : { rotate: 0, y: 0, width: 14 }}
              className="block h-[2px] bg-white origin-center"
            />
          </button>
        </div>
      </nav>

      {/* ── Fullscreen mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-dark"
          >
            <div className="h-full flex flex-col justify-between pad-x py-28">
              <nav ref={menuLinksRef} className="space-y-1" style={{ perspective: '600px' }}>
                {navLinks.map((link, i) => (
                  <div key={link.path} className="overflow-hidden">
                    <Link
                      to={link.path}
                      className={`menu-link block font-heading font-bold text-[clamp(2.2rem,8vw,4.5rem)] leading-[1.1] tracking-tight transition-colors duration-300 ${
                        location.pathname === link.path ? 'text-accent' : 'text-cream hover:text-accent'
                      }`}
                      style={{ marginLeft: `${i * 0.8}rem` }}
                    >{link.name}</Link>
                  </div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-end justify-between"
              >
                <div>
                  <a href="tel:+393381673246" className="block font-heading font-bold text-xl text-cream/70 hover:text-accent transition-colors">
                    338 167 3246
                  </a>
                  <p className="text-cream/25 font-body text-xs mt-1.5 tracking-wide">
                    Via Europa, 8 — Aprica (SO)
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/caspani.piastrelle" target="_blank" rel="noopener noreferrer" className="text-cream/30 hover:text-accent transition-colors" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="https://www.instagram.com/caspani.piastrelle" target="_blank" rel="noopener noreferrer" className="text-cream/30 hover:text-accent transition-colors" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
