import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useSplitReveal, useReveal } from '../hooks/useAnimations'

import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto11 from '../assets/foto/foto-11.webp'

const categories = [
  { id: 'tutti', label: 'Tutti' },
  { id: 'pavimenti', label: 'Pavimenti' },
  { id: 'rivestimenti', label: 'Rivestimenti' },
  { id: 'sottofondi', label: 'Sottofondi' },
  { id: 'esterni', label: 'Esterni' },
]

const photos = [
  { src: foto7, alt: 'Rivestimento bagno effetto legno', category: 'rivestimenti' },
  { src: foto8, alt: 'Posa pavimento bagno con doccia', category: 'pavimenti' },
  { src: foto2, alt: 'Realizzazione massetto professionale', category: 'sottofondi' },
  { src: foto4, alt: 'Massetto autolivellante industriale', category: 'sottofondi' },
  { src: foto6, alt: 'Pavimentazione esterna residenziale', category: 'esterni' },
  { src: foto10, alt: 'Posa rivestimenti cantiere', category: 'rivestimenti' },
  { src: foto5, alt: 'Showroom campioni pavimenti', category: 'pavimenti' },
  { src: foto9, alt: 'Cantiere invernale sottofondi', category: 'sottofondi' },
  { src: foto3, alt: 'Sottofondo autolivellante', category: 'sottofondi' },
  { src: foto11, alt: 'Pavimento posa completata', category: 'pavimenti' },
]

const categoryLabels = {
  pavimenti: 'Pavimenti',
  rivestimenti: 'Rivestimenti',
  sottofondi: 'Sottofondi',
  esterni: 'Esterni',
}

/* Organic grid patterns — irregular sizing */
const layoutMap = [
  'tall', 'normal', 'normal', 'normal', 'wide',
  'normal', 'tall', 'normal', 'normal', 'wide',
]

function getGridClasses(index) {
  const layout = layoutMap[index % layoutMap.length]
  switch (layout) {
    case 'tall': return 'col-span-1 row-span-2'
    case 'wide': return 'sm:col-span-2 row-span-1'
    default: return 'col-span-1 row-span-1'
  }
}

export default function Galleria() {
  const [activeCat, setActiveCat] = useState('tutti')
  const [lightbox, setLightbox] = useState(null)
  const [lightboxVisible, setLightboxVisible] = useState(false)
  const heroHeadingRef = useRef(null)
  const heroSubRef = useRef(null)
  const gridRef = useRef(null)
  const lightboxImgRef = useRef(null)

  useSplitReveal(heroHeadingRef, { delay: 0.1 })
  useReveal(heroSubRef, { y: 30, delay: 0.4 })

  const filtered = activeCat === 'tutti'
    ? photos
    : photos.filter((p) => p.category === activeCat)

  /* Animate grid items on filter */
  useEffect(() => {
    if (!gridRef.current) return
    const items = gridRef.current.children
    if (!items.length) return
    gsap.fromTo(items,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.6, ease: 'power3.out',
        stagger: { each: 0.06, from: 'random' },
      }
    )
  }, [activeCat])

  const openLightbox = useCallback((photo) => {
    setLightbox(photo)
    requestAnimationFrame(() => setLightboxVisible(true))
  }, [])

  useEffect(() => {
    if (!lightboxVisible || !lightboxImgRef.current) return
    gsap.fromTo(lightboxImgRef.current,
      { opacity: 0, scale: 0.88, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    )
  }, [lightboxVisible, lightbox])

  const closeLightbox = useCallback(() => {
    if (!lightboxImgRef.current) { setLightbox(null); setLightboxVisible(false); return }
    gsap.to(lightboxImgRef.current, {
      opacity: 0, scale: 0.92, duration: 0.3, ease: 'power2.in',
      onComplete: () => { setLightbox(null); setLightboxVisible(false) },
    })
  }, [])

  const navigateLightbox = useCallback((dir) => {
    if (!lightbox) return
    const currentIndex = filtered.findIndex((p) => p.src === lightbox.src)
    if (currentIndex === -1) return
    const nextIndex = (currentIndex + dir + filtered.length) % filtered.length
    setLightbox(filtered[nextIndex])
  }, [lightbox, filtered])

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') navigateLightbox(-1)
      if (e.key === 'ArrowRight') navigateLightbox(1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKey) }
  }, [lightbox, closeLightbox, navigateLightbox])

  const lightboxIndex = lightbox ? filtered.findIndex((p) => p.src === lightbox.src) : -1

  return (
    <>
      {/* ═══════════════ HEADER ═══════════════ */}
      <section className="bg-dark pattern-crosshatch-dark pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="pad-x-lg">
          <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-6">
            {photos.length} Progetti
          </span>

          <h1 ref={heroHeadingRef} className="fluid-h1 font-heading font-bold text-cream max-w-[80vw] md:max-w-[60vw]">
            Ogni superficie racconta un progetto
          </h1>

          <p ref={heroSubRef} className="font-body text-cream/40 text-lg md:text-xl max-w-xl mt-8 md:ml-[6vw]">
            Sfoglia i lavori completati dal nostro team.
            Pavimenti, rivestimenti, sottofondi e spazi esterni.
          </p>
        </div>
      </section>

      {/* ═══════════════ GALLERY ═══════════════ */}
      <section className="bg-cream pattern-dots py-16 md:py-24">
        <div className="pad-x-lg">
          {/* Filter tabs — minimal */}
          <div className="flex items-center gap-3 md:gap-2 overflow-x-auto pb-3 mb-12 md:mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`font-heading text-[11px] font-semibold uppercase tracking-[0.15em] whitespace-nowrap px-5 py-2.5 transition-all duration-300 ${
                  activeCat === cat.id
                    ? 'bg-dark text-cream'
                    : 'bg-transparent text-dark/40 hover:text-dark'
                }`}
              >
                {cat.label}
                {cat.id !== 'tutti' && (
                  <span className={`ml-1.5 text-[9px] ${activeCat === cat.id ? 'text-cream/50' : 'text-dark/25'}`}>
                    {photos.filter((p) => p.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Organic masonry grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] md:auto-rows-[280px] gap-3 md:gap-4"
            style={{ gridAutoFlow: 'dense' }}
          >
            {filtered.map((photo, i) => {
              const gridClass = getGridClasses(i)
              return (
                <div
                  key={`${photo.src}-${activeCat}-${i}`}
                  className={`group relative overflow-hidden cursor-pointer ${gridClass}`}
                  onClick={() => openLightbox(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                    <span className="inline-block self-start bg-accent text-white text-[9px] font-heading font-bold uppercase tracking-[0.2em] px-3 py-1 -translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {categoryLabels[photo.category]}
                    </span>
                    <p className="font-body text-sm text-cream/80 mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 line-clamp-2">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-heading text-lg text-dark/25 uppercase tracking-wider">
                Nessun progetto in questa categoria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════ LIGHTBOX ═══════════════ */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-sm flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 z-10 w-11 h-11 flex items-center justify-center bg-cream/5 hover:bg-cream/15 border border-cream/10 transition-colors" aria-label="Chiudi">
            <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {lightboxIndex >= 0 && (
            <div className="absolute top-7 left-6 font-heading text-sm text-cream/40 tracking-wider">
              <span className="text-cream font-bold">{lightboxIndex + 1}</span>
              <span className="mx-1">/</span>
              <span>{filtered.length}</span>
            </div>
          )}

          <button onClick={(e) => { e.stopPropagation(); navigateLightbox(-1) }} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-cream/5 hover:bg-cream/15 border border-cream/10 transition-colors" aria-label="Precedente">
            <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button onClick={(e) => { e.stopPropagation(); navigateLightbox(1) }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-cream/5 hover:bg-cream/15 border border-cream/10 transition-colors" aria-label="Successivo">
            <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div ref={lightboxImgRef} className="max-w-5xl max-h-[80vh] w-full mx-16 md:mx-24" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="w-full h-full object-contain" />
            <div className="mt-5 flex items-center gap-4">
              <span className="bg-accent text-white text-[9px] font-heading font-bold uppercase tracking-[0.2em] px-3 py-1">
                {categoryLabels[lightbox.category]}
              </span>
              <p className="font-body text-sm text-cream/50">{lightbox.alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="bg-dark">
        <div className="pad-x-lg grid lg:grid-cols-12 min-h-[360px]">
          <div className="lg:col-span-7 flex flex-col justify-center py-16 lg:py-20 lg:pr-16">
            <span className="font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
              Vuoi vedere di più?
            </span>
            <h2 className="fluid-h2 font-heading font-bold text-cream leading-tight mb-5">
              Il tuo progetto potrebbe essere il prossimo
            </h2>
            <p className="font-body text-cream/40 mb-8 max-w-md">
              Ogni ambiente ha il suo carattere. Raccontaci la tua idea e la trasformeremo in realtà.
            </p>
            <Link
              to="/contatti"
              className="self-start inline-flex items-center gap-3 font-heading font-bold text-[11px] uppercase tracking-[0.15em] bg-accent text-white px-8 py-4 hover:bg-accent-dark transition-colors duration-300"
            >
              Contattaci
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
            <img src={foto7} alt="Progetto Caspani" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/30 to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </section>
    </>
  )
}
