import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useSplitReveal, useStaggerReveal, useImageReveal, useParallax, useCountUp, gsap, ScrollTrigger } from '../hooks/useAnimations'

import foto2 from '../assets/foto/foto-2.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'

const testimonials = [
  {
    name: 'Simone G.',
    text: 'Materiali di ultima generazione e personale esperto. Lavoro eseguito a regola d\'arte, con grande attenzione ai dettagli.',
  },
  {
    name: 'Vincenzo P.',
    text: 'Ottimo rapporto qualità-prezzo e velocità negli interventi. Il risultato è perfetto, abbiamo rinnovato l\'intero appartamento.',
  },
  {
    name: 'Antonio M.',
    text: 'Elevata disponibilità del team, rispetto del contesto e delle tempistiche. Professionisti seri e affidabili.',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const heroHeadingRef = useRef(null)
  const heroImgRef = useRef(null)
  const aboutHeadingRef = useRef(null)
  const aboutTextRef = useRef(null)
  const aboutImgRef = useRef(null)
  const aboutImg2Ref = useRef(null)
  const servicesHeadingRef = useRef(null)
  const service1Ref = useRef(null)
  const service2Ref = useRef(null)
  const service3Ref = useRef(null)
  const stat1Ref = useRef(null)
  const stat2Ref = useRef(null)
  const stat3Ref = useRef(null)
  const statsRef = useRef(null)
  const galleryHeadingRef = useRef(null)
  const galleryImg1Ref = useRef(null)
  const galleryImg2Ref = useRef(null)
  const galleryImg3Ref = useRef(null)
  const galleryImg4Ref = useRef(null)
  const testimonialRef = useRef(null)
  const ctaHeadingRef = useRef(null)
  const ctaImgRef = useRef(null)

  /* Cinematic headline split */
  useSplitReveal(heroHeadingRef, { delay: 0.3 })

  /* About section */
  useSplitReveal(aboutHeadingRef)
  useReveal(aboutTextRef, { y: 50, delay: 0.2 })
  useImageReveal(aboutImgRef)
  useImageReveal(aboutImg2Ref, { delay: 0.3 })
  useParallax(aboutImg2Ref, { y: -60 })

  /* Services */
  useSplitReveal(servicesHeadingRef)
  useReveal(service1Ref, { y: 70, rotate: 1 })
  useReveal(service2Ref, { y: 90, delay: 0.15 })
  useReveal(service3Ref, { y: 60, delay: 0.3, rotate: -1 })

  /* Stats */
  useCountUp(stat1Ref, 20, { duration: 2.5 })
  useCountUp(stat2Ref, 500, { duration: 3 })
  useCountUp(stat3Ref, 100, { duration: 2 })
  useReveal(statsRef, { y: 40 })

  /* Gallery */
  useSplitReveal(galleryHeadingRef)
  useImageReveal(galleryImg1Ref)
  useImageReveal(galleryImg2Ref, { delay: 0.2 })
  useImageReveal(galleryImg3Ref, { delay: 0.1 })
  useImageReveal(galleryImg4Ref, { delay: 0.3 })

  /* Testimonials */
  useStaggerReveal(testimonialRef, { stagger: 0.18, y: 50 })

  /* CTA */
  useSplitReveal(ctaHeadingRef)
  useParallax(ctaImgRef, { y: -100 })

  /* Hero parallax */
  useEffect(() => {
    if (!heroRef.current) return
    const ctx = gsap.context(() => {
      gsap.to('.home-hero-bg', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
      /* Hero subtitle reveal */
      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: 0.9 }
      )
      /* Hero CTA stagger */
      gsap.fromTo('.hero-cta',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', delay: 1.2, stagger: 0.15 }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ═══════════════ 1. HERO — Cinematic full-bleed ═══════════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <img
            src={foto8}
            alt="Posa pavimenti"
            className="home-hero-bg w-full h-full object-cover will-change-transform scale-110 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark" />
          {/* Construction stripe overlay */}
          <div className="absolute inset-0 pattern-stripes-dark opacity-50" />
        </div>

        {/* Asymmetric hero content */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24">
          <div className="pad-x">
            <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-6 md:mb-8">
              Aprica — Provincia di Sondrio
            </span>

            <h1
              ref={heroHeadingRef}
              className="fluid-display font-heading font-bold text-cream max-w-[90vw] md:max-w-[70vw] lg:max-w-[55vw]"
            >
              Pavimenti, Rivestimenti & Sottofondi
            </h1>

            <p className="hero-subtitle font-body text-cream/50 text-base md:text-lg max-w-md mt-6 md:mt-8 leading-relaxed md:ml-[8vw]">
              Esperienza e qualità dal cuore della Valtellina. Posa professionale,
              materiali certificati e assistenza completa.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-5 mt-8 md:mt-10 md:ml-[8vw]">
              <Link
                to="/contatti"
                className="hero-cta inline-flex items-center gap-3 bg-accent text-white font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-accent-dark transition-colors duration-300"
              >
                Richiedi Preventivo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <Link
                to="/servizi"
                className="hero-cta inline-flex items-center gap-3 border border-cream/20 text-cream font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-cream/10 transition-all duration-300"
              >
                I Nostri Servizi
              </Link>
            </div>
          </div>

          {/* Floating accent number */}
          <div className="absolute right-[var(--gutter)] bottom-16 md:bottom-24 hidden lg:block">
            <span className="font-heading font-bold text-[8rem] leading-none text-accent/10">20+</span>
          </div>
        </div>
      </section>

      {/* ═══════════════ 2. CHI SIAMO — Broken grid ═══════════════ */}
      <section className="bg-cream pattern-tiles py-24 md:py-40 overflow-hidden">
        <div className="pad-x-lg">
          {/* Asymmetric layout: text left, images staggered right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
            <div ref={aboutTextRef} className="lg:col-span-5 lg:col-start-1 lg:pr-12">
              <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
                Chi Siamo
              </span>
              <h2
                ref={aboutHeadingRef}
                className="fluid-h1 font-heading font-bold text-dark mb-8 md:mb-12"
              >
                Una tradizione di qualità nella posa
              </h2>
              <p className="fluid-body-lg font-body text-muted leading-relaxed mb-6">
                Da oltre vent&rsquo;anni, <strong className="text-dark">Caspani Pavimenti</strong> opera
                con passione nel settore della vendita e posa di pavimenti e rivestimenti.
                Siamo specializzati in ogni tipologia: legno, marmo, pietra naturale e
                gres porcellanato, con soluzioni per interni ed esterni.
              </p>
              <p className="font-body text-muted leading-relaxed mb-10">
                Il nostro team realizza anche sottofondi tradizionali e massetti
                autolivellanti, garantendo una base perfetta per qualsiasi progetto.
              </p>

              <Link
                to="/chi-siamo"
                className="inline-flex items-center gap-3 font-heading font-bold text-[11px] uppercase tracking-[0.15em] text-accent hover:text-accent-dark transition-colors duration-300"
              >
                Scopri la nostra storia
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Images — overlapping, staggered */}
            <div className="lg:col-span-6 lg:col-start-7 relative">
              <div ref={aboutImgRef} className="overflow-hidden aspect-[4/5] w-full lg:w-[85%]">
                <img
                  src={foto7}
                  alt="Rivestimento bagno professionale"
                  className="w-full h-full object-cover"
                />
              </div>
              <div ref={aboutImg2Ref} className="hidden md:block absolute -bottom-16 -left-20 w-[45%] aspect-square overflow-hidden shadow-2xl">
                <img
                  src={foto4}
                  alt="Massetto autolivellante"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 3. SERVIZI — Editorial layout ═══════════════ */}
      <section className="bg-dark pattern-blueprint-dark py-24 md:py-40 overflow-hidden">
        <div className="pad-x-lg">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
            <div className="max-w-xl">
              <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
                Cosa Facciamo
              </span>
              <h2
                ref={servicesHeadingRef}
                className="fluid-h1 font-heading font-bold text-cream"
              >
                I Nostri Servizi
              </h2>
            </div>
            <Link
              to="/servizi"
              className="self-start md:self-auto inline-flex items-center gap-3 font-heading font-bold text-[11px] uppercase tracking-[0.15em] text-cream/40 hover:text-accent transition-colors duration-300"
            >
              Vedi tutti
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Service list — typographic approach */}
          <div className="border-t border-cream/10">
            {/* Service 1 */}
            <Link ref={service1Ref} to="/servizi" className="group block border-b border-cream/10 py-10 md:py-14">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="md:col-span-1">
                  <span className="font-heading font-bold text-accent text-sm tracking-wide">01</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-heading font-bold text-cream text-2xl md:text-4xl lg:text-5xl leading-none group-hover:text-accent transition-colors duration-500">
                    Posa Pavimenti e Rivestimenti
                  </h3>
                </div>
                <div className="md:col-span-2 hidden md:flex justify-center">
                  <div className="w-[13rem] h-[9.5rem] overflow-hidden border-2 border-cream/10 group-hover:border-accent/40 transition-all duration-500 group-hover:scale-110">
                    <img src={foto7} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <p className="font-body text-cream/40 text-sm leading-relaxed">
                    Ceramica, gres, legno, pietra naturale e marmo per interni ed esterni.
                  </p>
                </div>
                <div className="md:col-span-1 hidden md:flex justify-end">
                  <svg className="w-5 h-5 text-cream/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 2 */}
            <Link ref={service2Ref} to="/servizi" className="group block border-b border-cream/10 py-10 md:py-14">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="md:col-span-1">
                  <span className="font-heading font-bold text-accent text-sm tracking-wide">02</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-heading font-bold text-cream text-2xl md:text-4xl lg:text-5xl leading-none group-hover:text-accent transition-colors duration-500">
                    Sottofondi e Massetti
                  </h3>
                </div>
                <div className="md:col-span-2 hidden md:flex justify-center">
                  <div className="w-[13rem] h-[9.5rem] overflow-hidden border-2 border-cream/10 group-hover:border-accent/40 transition-all duration-500 group-hover:scale-110">
                    <img src={foto2} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <p className="font-body text-cream/40 text-sm leading-relaxed">
                    Tradizionali e autolivellanti, con precisione millimetrica per ogni progetto.
                  </p>
                </div>
                <div className="md:col-span-1 hidden md:flex justify-end">
                  <svg className="w-5 h-5 text-cream/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Service 3 */}
            <Link ref={service3Ref} to="/servizi" className="group block py-10 md:py-14">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                <div className="md:col-span-1">
                  <span className="font-heading font-bold text-accent text-sm tracking-wide">03</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-heading font-bold text-cream text-2xl md:text-4xl lg:text-5xl leading-none group-hover:text-accent transition-colors duration-500">
                    Fornitura e Vendita
                  </h3>
                </div>
                <div className="md:col-span-2 hidden md:flex justify-center">
                  <div className="w-[13rem] h-[9.5rem] overflow-hidden border-2 border-cream/10 group-hover:border-accent/40 transition-all duration-500 group-hover:scale-110">
                    <img src={foto5} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <p className="font-body text-cream/40 text-sm leading-relaxed">
                    Ampia selezione dalle migliori aziende con consulenza personalizzata.
                  </p>
                </div>
                <div className="md:col-span-1 hidden md:flex justify-end">
                  <svg className="w-5 h-5 text-cream/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ 4. STATS — Editorial band ═══════════════ */}
      <section className="bg-accent pattern-stripes-dark py-16 md:py-20 overflow-hidden">
        <div ref={statsRef} className="pad-x-lg">
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">
            <div className="md:flex-1 md:border-r md:border-white/20 md:pr-12">
              <span className="font-heading font-bold text-[clamp(3.5rem,8vw,7rem)] text-white leading-none block">
                <span ref={stat1Ref}>0</span>+
              </span>
              <span className="font-heading font-semibold text-[10px] uppercase tracking-[0.3em] text-white/60 mt-2 block">
                Anni di Esperienza
              </span>
            </div>
            <div className="md:flex-1 md:border-r md:border-white/20 md:px-12">
              <span className="font-heading font-bold text-[clamp(3.5rem,8vw,7rem)] text-white leading-none block">
                <span ref={stat2Ref}>0</span>+
              </span>
              <span className="font-heading font-semibold text-[10px] uppercase tracking-[0.3em] text-white/60 mt-2 block">
                Lavori Completati
              </span>
            </div>
            <div className="md:flex-1 md:pl-12">
              <span className="font-heading font-bold text-[clamp(3.5rem,8vw,7rem)] text-white leading-none block">
                <span ref={stat3Ref}>0</span>%
              </span>
              <span className="font-heading font-semibold text-[10px] uppercase tracking-[0.3em] text-white/60 mt-2 block">
                Clienti Soddisfatti
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 5. GALLERIA — Full-width mosaic ═══════════════ */}
      <section className="bg-cream pattern-dots overflow-hidden">
        <div className="pad-x-lg pt-24 md:pt-40 pb-14 md:pb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
                Portfolio
              </span>
              <h2
                ref={galleryHeadingRef}
                className="fluid-h2 font-heading font-bold text-dark"
              >
                I Nostri Lavori
              </h2>
            </div>
            <Link
              to="/galleria"
              className="self-start md:self-auto inline-flex items-center gap-3 font-heading font-bold text-[11px] uppercase tracking-[0.15em] text-dark/40 hover:text-accent transition-colors duration-300"
            >
              Vedi la galleria
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Full-width mosaic — top row 3, bottom row 2 */}
        <div className="px-4 md:px-8 grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-1.5">
          <div ref={galleryImg1Ref} className="overflow-hidden aspect-[16/10] group cursor-pointer">
            <img src={foto8} alt="Posa pavimento bagno" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <div ref={galleryImg2Ref} className="overflow-hidden aspect-[16/10] group cursor-pointer">
            <img src={foto10} alt="Cantiere posa" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <div ref={galleryImg3Ref} className="col-span-2 md:col-span-1 overflow-hidden aspect-[16/10] group cursor-pointer">
            <img src={foto5} alt="Showroom" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
        </div>
        <div className="px-4 md:px-8 grid grid-cols-2 gap-1 md:gap-1.5 mt-1 md:mt-1.5 pb-24 md:pb-40">
          <div ref={galleryImg4Ref} className="overflow-hidden aspect-[16/9] group cursor-pointer">
            <img src={foto9} alt="Cantiere invernale" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </div>
          <div className="overflow-hidden aspect-[16/9] group cursor-pointer relative">
            <img src={foto2} alt="Massetto cantiere" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/50 transition-colors duration-300 flex items-center justify-center">
              <Link
                to="/galleria"
                className="inline-flex items-center gap-3 font-heading font-bold text-[11px] uppercase tracking-[0.15em] text-cream hover:text-accent transition-colors duration-300"
              >
                Vedi tutti i lavori
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 6. TESTIMONIANZE — Staggered cards ═══════════════ */}
      <section className="bg-dark pattern-crosshatch-dark py-24 md:py-36 overflow-hidden">
        <div className="pad-x-lg">
          <div className="mb-14 md:mb-20">
            <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
              Testimonianze
            </span>
            <h2 className="fluid-h2 font-heading font-bold text-cream max-w-lg">
              Cosa Dicono<br />i Nostri Clienti
            </h2>
          </div>

          <div ref={testimonialRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`border border-cream/10 p-8 md:p-10 corner-marks ${
                  i === 1 ? 'md:mt-12' : i === 2 ? 'md:mt-6' : ''
                }`}
              >
                <svg className="w-8 h-8 text-accent/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
                <p className="font-body text-cream/70 text-base leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/15 flex items-center justify-center">
                    <span className="font-heading font-bold text-accent text-sm">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-heading font-bold text-cream/60 text-sm tracking-wide">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 7. CTA — Asymmetric split ═══════════════ */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Image — wider */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-0">
            <div ref={ctaImgRef} className="absolute inset-0">
              <img
                src={foto6}
                alt="Cantiere Caspani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content — offset */}
          <div className="lg:col-span-7 bg-accent flex items-center">
            <div className="pad-x py-16 md:py-20 lg:py-0 lg:pl-16 xl:pl-24 lg:pr-[var(--gutter-lg)]">
              <h2
                ref={ctaHeadingRef}
                className="fluid-h2 font-heading font-bold text-white mb-6"
              >
                Hai bisogno di un preventivo?
              </h2>
              <p className="font-body text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                Contattaci senza impegno per un sopralluogo gratuito e un preventivo personalizzato.
                Ti accompagniamo dalla scelta dei materiali fino alla posa finale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-3 bg-white text-accent hover:bg-dark hover:text-white font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 transition-colors duration-300"
                >
                  Richiedi Preventivo
                </Link>
                <a
                  href="tel:+393381673246"
                  className="inline-flex items-center gap-3 border border-white/40 hover:border-white text-white font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 transition-all duration-300 hover:bg-white/10"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Chiamaci
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
