import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Caspani Pavimenti" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-lg leading-tight block transition-colors duration-300 ${
                scrolled ? 'text-navy-900' : 'text-white'
              }`}>
                Caspani Pavimenti
              </span>
              <span className={`text-xs font-body transition-colors duration-300 ${
                scrolled ? 'text-gray-500' : 'text-white/70'
              }`}>
                Pavimenti, Rivestimenti & Sottofondi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-heading font-medium text-sm transition-all duration-300 ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-white bg-white/20'
                    : scrolled
                      ? 'text-navy-800 hover:text-orange-500 hover:bg-orange-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contatti" className="btn-primary ml-4 !py-2.5 !px-6 !text-sm">
              Preventivo Gratuito
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-navy-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu navigazione"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-xl border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg font-heading font-medium text-sm transition-colors ${
                location.pathname === link.path
                  ? 'text-orange-500 bg-orange-50'
                  : 'text-navy-800 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contatti" className="btn-primary w-full mt-3 !text-sm">
            Preventivo Gratuito
          </Link>
        </div>
      </div>
    </nav>
  )
}
