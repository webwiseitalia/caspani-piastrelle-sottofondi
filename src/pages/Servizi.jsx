import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReveal, useSplitReveal, useStaggerReveal, useImageReveal, useParallax } from '../hooks/useAnimations'

import foto2 from '../assets/foto/foto-2.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'

const servizi = [
  {
    id: 'posa',
    title: 'Posa Pavimenti e Rivestimenti',
    img: foto7,
    description:
      'Ogni superficie che realizziamo contribuisce a definire lo stile e il carattere dei vostri ambienti. Lavoriamo con precisione e cura del dettaglio per risultati impeccabili e duraturi.',
    points: [
      'Posa di ogni tipologia per interni ed esterni',
      'Rivestimenti per bagni, cucine e zone living',
      'Lavorazione di ceramica, legno, marmo e pietra',
      'Tagli di precisione e finiture personalizzate',
      'Maggiore igiene e facilità di pulizia',
    ],
  },
  {
    id: 'fornitura',
    title: 'Fornitura Pavimenti',
    img: foto5,
    description:
      'Ampia gamma di materiali e colori per ogni esigenza. Selezioniamo i prodotti dalle migliori aziende del settore per qualità e affidabilità.',
    points: [
      'Ampia selezione di materiali e finiture',
      'Piastrelle decorative e soluzioni in finto legno',
      'Collaborazione con i migliori brand del settore',
      'Consulenza personalizzata nella scelta',
      'Campionature disponibili in showroom',
    ],
  },
  {
    id: 'gres',
    title: 'Ceramica e Gres Porcellanato',
    img: foto8,
    description:
      'Il gres porcellanato sintetizza le migliori proprietà di argilla, sabbia e elementi naturali. Straordinaria resistenza in infinite varietà di finiture.',
    points: [
      'Alta resistenza meccanica e durabilità',
      'Varietà illimitata di finiture e colori',
      'Adatto per interni e per esterni',
      'Resistenza al gelo, macchie e usura',
      'Manutenzione minima e massima igiene',
    ],
  },
  {
    id: 'vendita',
    title: 'Vendita Pavimenti',
    img: foto6,
    description:
      'Selezioniamo con cura le migliori pavimentazioni dalle aziende più innovative. Consulenza personalizzata per il pavimento perfetto.',
    points: [
      'Selezione dalle aziende più innovative',
      'Consulenza su materiali e design',
      'Campionature visitabili in showroom',
      'Soluzioni per ogni fascia di budget',
      'Massima soddisfazione garantita',
    ],
  },
  {
    id: 'sottofondi',
    title: 'Sottofondi e Massetti',
    img: foto4,
    description:
      'Realizziamo sottofondi con tecniche tradizionali e sistemi autolivellanti. Precisione, velocità e conformità alle normative.',
    points: [
      'Massetti tradizionali e autolivellanti',
      'Precisione millimetrica',
      'Superficie calpestabile dopo 48 ore',
      'Conformità alle normative vigenti',
      'Ideale per riscaldamento a pavimento',
    ],
    technical: [
      { term: 'Massetto', def: 'Strato posato sul sottofondo che costituisce la base per la pavimentazione finale.' },
      { term: 'Sottofondo', def: 'Strato isolante tra solaio grezzo e massetto, con funzione di isolamento termico e acustico.' },
      { term: 'Autolivellante', def: 'Tecnica moderna per un risultato perfettamente planare, calpestabile dopo 48 ore.' },
    ],
  },
]

const steps = [
  { num: '01', title: 'Consulenza', desc: 'Analizziamo le vostre esigenze e vi guidiamo nella scelta dei materiali.' },
  { num: '02', title: 'Sopralluogo', desc: 'Sopralluogo gratuito per valutare lo stato degli ambienti.' },
  { num: '03', title: 'Realizzazione', desc: 'Eseguiamo i lavori con professionalità e attenzione al dettaglio.' },
  { num: '04', title: 'Consegna', desc: 'Consegniamo dopo accurato controllo qualità.' },
]

function ServiceBlock({ service, index }) {
  const contentRef = useRef(null)
  const imgRef = useRef(null)

  useReveal(contentRef, { y: 60 })
  useImageReveal(imgRef, { delay: 0.15 })

  const isEven = index % 2 === 0

  return (
    <div className="mb-20 md:mb-32 last:mb-0">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-start ${
        !isEven ? '' : ''
      }`}>
        {/* Image */}
        <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-1' : 'lg:col-start-6 lg:order-2'}`}>
          <div ref={imgRef} className="overflow-hidden aspect-[16/10] lg:aspect-[16/11]">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`lg:col-span-5 ${
            isEven
              ? 'lg:col-start-8 lg:pl-12 xl:pl-16'
              : 'lg:col-start-1 lg:pr-12 xl:pr-16 lg:order-1'
          } ${isEven ? 'lg:mt-16' : 'lg:mt-12'}`}
        >
          <span className="font-heading font-bold text-6xl text-accent/15 leading-none block mb-4 select-none">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="fluid-h3 font-heading font-bold text-dark mb-5 leading-tight">
            {service.title}
          </h3>
          <p className="font-body text-muted leading-relaxed mb-6">{service.description}</p>

          <ul className="space-y-3 mb-8">
            {service.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-accent shrink-0 mt-2.5" />
                <span className="font-body text-dark/70 text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/contatti"
            className="inline-flex items-center gap-3 font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-7 py-3.5 bg-accent text-white hover:bg-accent-dark transition-colors duration-300"
          >
            Richiedi Preventivo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {service.technical && (
            <div className="mt-10 pt-8 border-t border-dark/10">
              <h4 className="font-heading font-bold text-[10px] uppercase tracking-[0.25em] text-accent mb-5">
                Dettagli Tecnici
              </h4>
              <div className="space-y-4">
                {service.technical.map((t, i) => (
                  <div key={i} className="bg-dark/5 p-5 corner-marks">
                    <dt className="font-heading font-bold text-dark text-sm mb-1">{t.term}</dt>
                    <dd className="font-body text-muted text-sm leading-relaxed">{t.def}</dd>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Servizi() {
  const heroHeadingRef = useRef(null)
  const heroSubRef = useRef(null)
  const processHeadingRef = useRef(null)
  const processGridRef = useRef(null)
  const ctaHeadingRef = useRef(null)
  const ctaImgRef = useRef(null)

  useSplitReveal(heroHeadingRef, { delay: 0.2 })
  useReveal(heroSubRef, { y: 30, delay: 0.6 })
  useSplitReveal(processHeadingRef)
  useStaggerReveal(processGridRef, { stagger: 0.15 })
  useSplitReveal(ctaHeadingRef)
  useParallax(ctaImgRef, { y: -80 })

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[65vh] overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <img src={foto2} alt="Servizi Caspani" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark" />
        </div>
        <div className="relative z-10 min-h-[65vh] flex flex-col justify-end pad-x pb-14 md:pb-20">
          <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
            I Nostri Servizi
          </span>
          <h1 ref={heroHeadingRef} className="fluid-h1 font-heading font-bold text-cream max-w-[80vw] md:max-w-[55vw] mb-6">
            Soluzioni complete per i vostri pavimenti
          </h1>
          <p ref={heroSubRef} className="font-body text-cream/40 leading-relaxed max-w-md md:ml-[6vw]">
            Dalla consulenza iniziale alla posa finale, ci occupiamo di ogni aspetto con competenza e passione.
          </p>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="bg-cream pattern-tiles py-24 md:py-40 overflow-hidden">
        <div className="pad-x-lg">
          {servizi.map((s, i) => (
            <ServiceBlock key={s.id} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* ═══════════════ PROCESS — Editorial steps ═══════════════ */}
      <section className="bg-dark pattern-blueprint-dark py-24 md:py-36 overflow-hidden">
        <div className="pad-x-lg">
          <div className="max-w-xl mb-14 md:mb-20">
            <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
              Il Nostro Metodo
            </span>
            <h2 ref={processHeadingRef} className="fluid-h2 font-heading font-bold text-cream">
              Come Lavoriamo
            </h2>
          </div>

          <div ref={processGridRef} className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className={`py-8 md:py-0 md:px-8 border-t md:border-t-0 md:border-l border-cream/10 first:border-t-0 md:first:border-l-0 ${
                i === 1 ? 'md:pt-8' : i === 2 ? 'md:pt-16' : i === 3 ? 'md:pt-12' : ''
              }`}>
                <span className="font-heading font-bold text-5xl text-accent/20 leading-none block mb-4 select-none">
                  {step.num}
                </span>
                <h3 className="font-heading font-bold text-cream text-xl mb-3">{step.title}</h3>
                <p className="font-body text-cream/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA — Asymmetric split ═══════════════ */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
          <div className="lg:col-span-7 bg-accent flex items-center">
            <div className="pad-x py-16 md:py-20 lg:py-0 lg:pl-[var(--gutter-lg)] lg:pr-16">
              <h2 ref={ctaHeadingRef} className="fluid-h2 font-heading font-bold text-white mb-6">
                Hai un progetto in mente?
              </h2>
              <p className="font-body text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                Contattaci per una consulenza gratuita. Ti aiuteremo a scegliere i materiali e le soluzioni migliori.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-3 bg-white text-accent hover:bg-dark hover:text-white font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 transition-colors duration-300"
                >
                  Preventivo Gratuito
                </Link>
                <a
                  href="tel:+393381673246"
                  className="inline-flex items-center gap-3 border border-white/40 text-white hover:bg-white hover:text-accent font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Chiamaci
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-0">
            <div ref={ctaImgRef} className="absolute inset-0">
              <img src={foto2} alt="Cantiere Caspani" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
