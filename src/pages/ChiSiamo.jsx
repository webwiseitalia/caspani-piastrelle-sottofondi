import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useSplitReveal, useStaggerReveal, useImageReveal, useParallax, useCountUp } from '../hooks/useAnimations'

import foto2 from '../assets/foto/foto-2.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto10 from '../assets/foto/foto-10.webp'

export default function ChiSiamo() {
  const heroHeadingRef = useRef(null)
  const storyHeadingRef = useRef(null)
  const storyTextRef = useRef(null)
  const storyImgRef = useRef(null)
  const storyImg2Ref = useRef(null)
  const expertiseHeadingRef = useRef(null)
  const expertiseGridRef = useRef(null)
  const teamHeadingRef = useRef(null)
  const teamGridRef = useRef(null)
  const materialsHeadingRef = useRef(null)
  const materialsGridRef = useRef(null)
  const clientsHeadingRef = useRef(null)
  const clientsRef = useRef(null)
  const ctaHeadingRef = useRef(null)
  const yearsRef = useRef(null)
  const projectsRef = useRef(null)

  useSplitReveal(heroHeadingRef, { delay: 0.2 })
  useSplitReveal(storyHeadingRef)
  useReveal(storyTextRef, { y: 50, delay: 0.2 })
  useImageReveal(storyImgRef)
  useImageReveal(storyImg2Ref, { delay: 0.3 })
  useParallax(storyImg2Ref, { y: -50 })
  useSplitReveal(expertiseHeadingRef)
  useStaggerReveal(expertiseGridRef, { stagger: 0.1, y: 40 })
  useSplitReveal(teamHeadingRef)
  useStaggerReveal(teamGridRef, { stagger: 0.18 })
  useSplitReveal(materialsHeadingRef)
  useStaggerReveal(materialsGridRef, { stagger: 0.12 })
  useReveal(clientsHeadingRef)
  useReveal(clientsRef, { y: 30, delay: 0.1 })
  useSplitReveal(ctaHeadingRef)
  useCountUp(yearsRef, 20)
  useCountUp(projectsRef, 500)

  const expertise = [
    { num: '01', text: 'Posa di pavimenti in legno, marmo, pietra e gres porcellanato' },
    { num: '02', text: 'Rivestimenti per bagni, cucine e ogni ambiente della casa' },
    { num: '03', text: 'Impermeabilizzazione docce e ambienti umidi' },
    { num: '04', text: 'Sottofondi tradizionali e massetti autolivellanti' },
    { num: '05', text: 'Utilizzo dei migliori prodotti per installazione e finitura' },
    { num: '06', text: 'Consulenza personalizzata per ogni tipo di progetto' },
  ]

  const teamValues = [
    {
      title: 'Altamente qualificati',
      description: 'Il nostro team viene selezionato con cura. Ogni membro possiede le competenze tecniche necessarie per garantire lavori eseguiti a regola d\'arte.',
    },
    {
      title: 'Discreti e cortesi',
      description: 'Rispettiamo i tempi e gli spazi del cliente. Lavoriamo con la massima discrezione, riducendo al minimo i disagi.',
    },
    {
      title: 'Eccellenza operativa',
      description: 'Dalla vendita alla posa, dalla consulenza alla realizzazione finale: puntiamo all\'eccellenza in ogni fase.',
    },
  ]

  const materials = [
    { name: 'Legno', description: 'Parquet e pavimenti in legno massello per ambienti caldi e accoglienti.' },
    { name: 'Marmo', description: 'Eleganza senza tempo. Pavimentazioni e rivestimenti in marmo per interni di prestigio.' },
    { name: 'Pietra', description: 'Robustezza e unicità naturale. Perfetto per ambienti interni ed esterni.' },
    { name: 'Gres', description: 'Versatilità e design contemporaneo. Infinite possibilità di finiture.' },
  ]

  const clients = [
    'Case residenziali',
    'Uffici',
    'Hotel',
    'Ristoranti',
    'Ambienti di produzione',
    'Sedi aziendali',
  ]

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-[65vh] min-h-[450px] overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <img src={foto2} alt="Cantiere Caspani" title="Chi Siamo - Caspani Pavimenti" loading="eager" width={1920} height={1080} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pad-x pb-14 md:pb-20">
          <span className="font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5 block">
            Chi Siamo
          </span>
          <h1
            ref={heroHeadingRef}
            className="fluid-h1 font-heading font-bold text-cream max-w-[80vw] md:max-w-[60vw]"
          >
            La nostra storia, la vostra garanzia
          </h1>
        </div>
      </section>

      {/* ═══════════════ COMPANY STORY — Broken grid ═══════════════ */}
      <section className="bg-cream pattern-tiles py-24 md:py-40 overflow-hidden">
        <div className="pad-x-lg">
          <div className="max-w-2xl mb-14 md:mb-20">
            <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
              La nostra azienda
            </span>
            <h2 ref={storyHeadingRef} className="fluid-h2 font-heading font-bold text-dark">
              Esperienza e innovazione
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
            <div ref={storyTextRef} className="lg:col-span-5 lg:pr-12">
              <p className="fluid-body-lg font-body text-muted leading-relaxed mb-6">
                Caspani Pavimenti opera con orgoglio nella zona di <strong className="text-dark">Sondrio e della Valtellina</strong>, con sede ad Aprica. Da oltre vent'anni ci dedichiamo alla vendita e posa di pavimenti e rivestimenti di ogni tipologia.
              </p>
              <p className="font-body text-muted leading-relaxed mb-6">
                Ci aggiorniamo costantemente per restare al passo con le novità del settore, utilizzando materiali innovativi e tecniche all'avanguardia. La nostra profonda conoscenza del territorio ci permette di offrire soluzioni su misura.
              </p>
              <p className="font-body text-muted leading-relaxed">
                Dalla consulenza iniziale alla realizzazione finale, seguiamo ogni progetto con dedizione. Che si tratti di un bagno, un intero appartamento o un grande spazio commerciale.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 relative">
              <div ref={storyImgRef} className="overflow-hidden w-full lg:w-[90%] aspect-[4/5]">
                <img src={foto10} alt="Team al lavoro" title="Team Caspani Pavimenti al lavoro" loading="lazy" width={800} height={1000} className="w-full h-full object-cover" />
              </div>
              <div ref={storyImg2Ref} className="hidden md:flex absolute -bottom-12 -left-16 gap-4">
                <div className="bg-white shadow-xl px-7 py-6 border-b-[3px] border-accent">
                  <span className="flex items-end gap-1">
                    <span ref={yearsRef} className="font-heading font-bold text-4xl text-accent leading-none">0</span>
                    <span className="font-heading font-bold text-xl text-accent leading-none">+</span>
                  </span>
                  <span className="font-body text-muted text-xs mt-2 block">Anni di esperienza</span>
                </div>
                <div className="bg-dark shadow-xl px-7 py-6">
                  <span className="flex items-end gap-1">
                    <span ref={projectsRef} className="font-heading font-bold text-4xl text-cream leading-none">0</span>
                    <span className="font-heading font-bold text-xl text-cream leading-none">+</span>
                  </span>
                  <span className="font-body text-cream/50 text-xs mt-2 block">Progetti completati</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPERTISE — Irregular numbered list ═══════════════ */}
      <section className="bg-dark pattern-blueprint-dark py-24 md:py-36 overflow-hidden">
        <div className="pad-x-lg">
          <div className="max-w-xl mb-14 md:mb-20">
            <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
              Competenze
            </span>
            <h2 ref={expertiseHeadingRef} className="fluid-h2 font-heading font-bold text-cream">
              Le nostre specializzazioni
            </h2>
          </div>

          <div ref={expertiseGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {expertise.map((item, i) => (
              <div key={item.num} className="flex items-start gap-6 py-6 md:py-8 border-t border-cream/10">
                <span className="font-heading font-bold text-3xl text-accent/25 leading-none shrink-0 select-none mt-1">
                  {item.num}
                </span>
                <p className="font-body text-cream/70 text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TEAM VALUES — Offset cards ═══════════════ */}
      <section className="bg-cream pattern-crosshatch py-24 md:py-36 overflow-hidden">
        <div className="pad-x-lg">
          <div className="max-w-xl mb-14 md:mb-20">
            <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
              Il team
            </span>
            <h2 ref={teamHeadingRef} className="fluid-h2 font-heading font-bold text-dark">
              Il nostro team
            </h2>
          </div>

          <div ref={teamGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {teamValues.map((val, i) => (
              <div
                key={i}
                className={`p-8 md:p-10 ${
                  i === 0
                    ? 'bg-dark text-cream'
                    : i === 1
                    ? 'bg-accent text-white md:mt-8'
                    : 'bg-dark text-cream md:mt-4'
                }`}
              >
                <span className="font-heading font-bold text-5xl leading-none block mb-6 opacity-15">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading font-bold text-xl mb-4">{val.title}</h3>
                <p className={`font-body text-sm leading-relaxed ${
                  i === 1 ? 'text-white/70' : 'text-cream/60'
                }`}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MATERIALS — Horizontal scroll feel ═══════════════ */}
      <section className="bg-dark pattern-dots-dark py-20 md:py-28 overflow-hidden">
        <div className="pad-x-lg">
          <div className="max-w-xl mb-12 md:mb-16">
            <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
              Materiali
            </span>
            <h2 ref={materialsHeadingRef} className="fluid-h3 font-heading font-bold text-cream">
              I materiali che trattiamo
            </h2>
          </div>

          <div ref={materialsGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {materials.map((m, i) => (
              <div key={i} className="border border-cream/10 p-7 md:p-8 hover:border-accent/40 transition-colors duration-500 corner-marks">
                <h3 className="font-heading font-bold text-cream text-lg mb-3">{m.name}</h3>
                <p className="font-body text-cream/50 text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CLIENTS — Tags with variety ═══════════════ */}
      <section className="bg-cream pattern-brick py-20 md:py-28 overflow-hidden">
        <div className="pad-x-lg">
          <div ref={clientsHeadingRef} className="max-w-xl mb-10 md:mb-14">
            <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
              Clientela
            </span>
            <h2 className="fluid-h3 font-heading font-bold text-dark">
              Al servizio di ogni ambiente
            </h2>
          </div>

          <div ref={clientsRef} className="flex flex-wrap gap-3 md:gap-4">
            {clients.map((c, i) => (
              <span
                key={i}
                className={`font-heading font-semibold text-sm px-6 py-3 transition-all duration-300 cursor-default ${
                  i % 3 === 0
                    ? 'bg-accent text-white'
                    : i % 3 === 1
                    ? 'border border-dark/20 text-dark hover:border-accent hover:text-accent'
                    : 'bg-dark text-cream'
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="bg-dark pattern-stripes-dark py-20 md:py-32">
        <div className="pad-x-lg">
          <div className="max-w-3xl">
            <h2 ref={ctaHeadingRef} className="fluid-h2 font-heading font-bold text-cream mb-6">
              Pronto a trasformare i tuoi spazi?
            </h2>
            <p className="font-body text-cream/40 text-base md:text-lg mb-10 leading-relaxed max-w-xl">
              Contattaci per una consulenza personalizzata. Ti aiuteremo a scegliere la soluzione perfetta per i tuoi ambienti.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center gap-3 font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 bg-accent text-white hover:bg-accent-dark transition-colors duration-300"
            >
              Richiedi Preventivo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
