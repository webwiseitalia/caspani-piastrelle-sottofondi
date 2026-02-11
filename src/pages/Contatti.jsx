import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useSplitReveal } from '../hooks/useAnimations'
import foto2 from '../assets/foto/foto-2.webp'

const tipologie = [
  'Posa pavimenti',
  'Posa rivestimenti',
  'Fornitura pavimenti',
  'Sottofondi / Massetti',
  'Impermeabilizzazione docce',
  'Altro',
]

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '', telefono: '', email: '',
    tipologia: '', localita: '', messaggio: '', privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const heroHeadingRef = useRef(null)
  const heroPhoneRef = useRef(null)
  const formCardRef = useRef(null)
  const infoRef = useRef(null)
  const mapRef = useRef(null)
  const bannerHeadingRef = useRef(null)

  useSplitReveal(heroHeadingRef, { delay: 0.2 })
  useReveal(heroPhoneRef, { y: 30, delay: 0.6 })
  useReveal(formCardRef, { y: 60, delay: 0.1 })
  useReveal(infoRef, { y: 40, delay: 0.2 })
  useReveal(mapRef, { y: 0, delay: 0.1 })
  useSplitReveal(bannerHeadingRef)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ═══════════════ HERO — Asymmetric split ═══════════════ */}
      <section className="relative min-h-[520px] md:min-h-[600px] lg:min-h-[640px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full min-h-[inherit]">
          <div className="lg:col-span-6 bg-dark relative flex items-center min-h-[350px] lg:min-h-[inherit]">
            <div className="relative z-10 pad-x py-16 lg:py-24">
              <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-6">
                Contatti
              </span>
              <h1
                ref={heroHeadingRef}
                className="fluid-h1 font-heading font-bold text-cream mb-6"
              >
                Parliamo del vostro progetto
              </h1>
              <p className="font-body text-cream/35 text-sm max-w-sm mb-10 leading-relaxed">
                Siamo pronti ad ascoltarvi. Raccontateci la vostra idea e troveremo insieme la soluzione migliore.
              </p>
              <div ref={heroPhoneRef}>
                <a
                  href="tel:+393381673246"
                  className="font-heading font-bold text-[clamp(2rem,5vw,3.5rem)] text-cream hover:text-accent transition-colors duration-300 tracking-tight"
                >
                  338 167 3246
                </a>
                <p className="font-body text-cream/25 text-xs mt-2 tracking-wide">Chiamata diretta</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-[inherit]">
            <img src={foto2} alt="Contatti Caspani" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ═══════════════ FORM + INFO ═══════════════ */}
      <section className="relative bg-cream pattern-tiles pb-20 md:pb-28">
        <div className="pad-x-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Info strip */}
            <div ref={infoRef} className="lg:col-span-3 order-2 lg:order-1 pt-8 lg:pt-0 lg:-mt-16">
              <div className="bg-white shadow-lg p-6 lg:p-8 space-y-8 border-t-[3px] border-accent">
                <div>
                  <h4 className="font-heading font-bold text-[10px] uppercase tracking-[0.2em] text-dark mb-3">Sede</h4>
                  <p className="font-body text-muted text-sm leading-relaxed">Via Europa, 8<br />23031 Aprica (SO)</p>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[10px] uppercase tracking-[0.2em] text-dark mb-3">Telefono</h4>
                  <a href="tel:+393381673246" className="font-heading font-bold text-accent text-lg hover:text-accent-dark transition-colors">
                    +39 338 167 3246
                  </a>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[10px] uppercase tracking-[0.2em] text-dark mb-3">Email</h4>
                  <a href="mailto:caspanipavimenti.rivestimenti@gmail.com" className="font-body text-muted text-sm hover:text-accent transition-colors break-all leading-relaxed">
                    caspanipavimenti<wbr />.rivestimenti<wbr />@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[10px] uppercase tracking-[0.2em] text-dark mb-3">Social</h4>
                  <div className="flex items-center gap-5">
                    <a href="https://www.facebook.com/caspani.piastrelle" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="Facebook">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/caspani.piastrelle" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="Instagram">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                  </div>
                  <p className="font-body text-muted text-xs mt-2">@caspani.piastrelle</p>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div ref={formCardRef} className="lg:col-span-9 order-1 lg:order-2 -mt-16 md:-mt-20 lg:-mt-24 relative z-10">
              <div className="bg-white shadow-xl p-8 md:p-12 lg:p-14">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-dark mb-2">
                  Richiedi un Preventivo
                </h2>
                <div className="w-12 h-[3px] bg-accent mb-8" />

                {submitted ? (
                  <div className="py-20 text-center">
                    <div className="w-20 h-20 bg-accent text-white flex items-center justify-center mx-auto mb-8">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-dark text-2xl mb-3">Richiesta inviata!</h3>
                    <p className="font-body text-muted text-sm mb-10 max-w-sm mx-auto">
                      Ti risponderemo al più presto. Grazie per averci contattato.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ nome: '', telefono: '', email: '', tipologia: '', localita: '', messaggio: '', privacy: false })
                      }}
                      className="font-heading font-semibold text-sm text-accent hover:text-accent-dark transition-colors underline underline-offset-4"
                    >
                      Nuova richiesta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <label htmlFor="nome" className="block font-heading font-semibold text-[10px] uppercase tracking-[0.15em] text-dark mb-3">
                        Nome e Cognome
                      </label>
                      <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required placeholder="Il tuo nome completo"
                        className="w-full px-0 py-3 border-0 border-b-2 border-dark/10 bg-transparent font-body text-dark text-base focus:border-accent outline-none transition-colors placeholder:text-dark/20" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-8">
                      <div>
                        <label htmlFor="telefono" className="block font-heading font-semibold text-[10px] uppercase tracking-[0.15em] text-dark mb-3">Telefono</label>
                        <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required placeholder="+39 000 000 0000"
                          className="w-full px-0 py-3 border-0 border-b-2 border-dark/10 bg-transparent font-body text-dark text-sm focus:border-accent outline-none transition-colors placeholder:text-dark/20" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-heading font-semibold text-[10px] uppercase tracking-[0.15em] text-dark mb-3">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="nome@email.com"
                          className="w-full px-0 py-3 border-0 border-b-2 border-dark/10 bg-transparent font-body text-dark text-sm focus:border-accent outline-none transition-colors placeholder:text-dark/20" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-8">
                      <div>
                        <label htmlFor="tipologia" className="block font-heading font-semibold text-[10px] uppercase tracking-[0.15em] text-dark mb-3">Tipologia Lavoro</label>
                        <select id="tipologia" name="tipologia" value={formData.tipologia} onChange={handleChange}
                          className="w-full px-0 py-3 border-0 border-b-2 border-dark/10 bg-transparent font-body text-dark text-sm focus:border-accent outline-none transition-colors cursor-pointer">
                          <option value="">Seleziona...</option>
                          {tipologie.map((t) => (<option key={t} value={t}>{t}</option>))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="localita" className="block font-heading font-semibold text-[10px] uppercase tracking-[0.15em] text-dark mb-3">Località</label>
                        <input type="text" id="localita" name="localita" value={formData.localita} onChange={handleChange} placeholder="Comune o zona"
                          className="w-full px-0 py-3 border-0 border-b-2 border-dark/10 bg-transparent font-body text-dark text-sm focus:border-accent outline-none transition-colors placeholder:text-dark/20" />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="messaggio" className="block font-heading font-semibold text-[10px] uppercase tracking-[0.15em] text-dark mb-3">Messaggio</label>
                      <textarea id="messaggio" name="messaggio" value={formData.messaggio} onChange={handleChange} rows={5} placeholder="Descrivi il tuo progetto..."
                        className="w-full px-0 py-3 border-0 border-b-2 border-dark/10 bg-transparent font-body text-dark text-sm focus:border-accent outline-none transition-colors resize-none placeholder:text-dark/20" />
                    </div>

                    <div className="flex items-start gap-3 mb-10">
                      <input type="checkbox" id="privacy" name="privacy" checked={formData.privacy} onChange={handleChange} required
                        className="mt-1 w-4 h-4 border-2 border-dark/20 text-accent focus:ring-accent cursor-pointer" />
                      <label htmlFor="privacy" className="font-body text-muted text-xs leading-relaxed cursor-pointer">
                        Ho letto e accetto la{' '}
                        <Link to="/privacy" className="text-accent hover:text-accent-dark underline">Privacy Policy</Link>
                        . Autorizzo il trattamento dei dati ai sensi del GDPR.
                      </label>
                    </div>

                    <button type="submit"
                      className="w-full py-4 bg-accent text-white font-heading font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-accent-dark transition-colors duration-300">
                      Invia Richiesta
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MAP ═══════════════ */}
      <div ref={mapRef}>
        <iframe
          title="Caspani Pavimenti — Aprica"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.0!2d10.1508!3d46.1536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47845c0a0b0b0b0b%3A0x0!2sVia%20Europa%2C%208%2C%2023031%20Aprica%20SO!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
          width="100%" height="350"
          style={{ border: 0, display: 'block' }}
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full grayscale"
        />
      </div>

      {/* ═══════════════ CALL BANNER ═══════════════ */}
      <section className="bg-dark pattern-stripes-dark">
        <div className="pad-x-lg py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">
            <div className="md:flex-1 text-center md:text-left">
              <a
                href="tel:+393381673246"
                ref={bannerHeadingRef}
                className="font-heading font-bold text-[clamp(3rem,8vw,6rem)] text-cream hover:text-accent transition-colors duration-300 tracking-tight leading-none block"
              >
                338 167 3246
              </a>
            </div>

            <div className="hidden md:block w-px h-20 bg-accent mx-12 lg:mx-16 flex-shrink-0" />
            <div className="md:hidden w-16 h-px bg-accent" />

            <div className="flex-shrink-0 text-center md:text-left max-w-xs">
              <p className="font-heading font-semibold text-cream text-[10px] uppercase tracking-[0.2em] mb-2">
                Preferisci parlare?
              </p>
              <p className="font-body text-cream/35 text-sm leading-relaxed">
                Chiamaci direttamente per una consulenza rapida e senza impegno sul tuo progetto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
