import { useState } from 'react'
import { Link } from 'react-router-dom'
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
    shortDesc: 'Posa professionale per interni ed esterni',
    image: foto7,
    content: {
      intro: 'La posa di pavimenti e rivestimenti è il nostro servizio principale. Ogni pavimento che posiamo non ha solo una funzione pratica, ma contribuisce a completare lo stile della vostra casa, rendendo gli ambienti più belli, igienici e facili da pulire.',
      points: [
        'Posa di pavimenti e rivestimenti di ogni tipologia',
        'Funzione pratica ed estetica per ogni ambiente',
        'Completamento dello stile della casa',
        'Maggiore igiene e facilità di pulizia',
        'Personalizzazione per ogni esigenza',
      ],
    },
  },
  {
    id: 'fornitura',
    title: 'Fornitura Pavimenti',
    shortDesc: 'Ampia gamma di materiali e colori',
    image: foto5,
    content: {
      intro: 'Mettiamo a disposizione una vasta gamma di materiali e colori per rispondere alle più svariate esigenze arredative. Dalle piastrelle decorative in finto legno alle soluzioni più innovative, selezioniamo dalle migliori aziende del settore per garantirvi qualità e bellezza.',
      points: [
        'Vasta gamma di materiali e colori',
        'Piastrelle decorative in finto legno (bellezza + funzionalità)',
        'Soluzioni per ogni ambiente e stile',
        'Selezione dalle più innovative aziende del settore',
        'Consulenza nella scelta del materiale ideale',
      ],
    },
  },
  {
    id: 'gres',
    title: 'Rivestimenti in Ceramica Gres',
    shortDesc: 'Resistenza e design innovativo',
    image: foto8,
    content: {
      intro: 'Il gres porcellanato è un\'opzione sempre più popolare grazie al suo processo innovativo che sintetizza le proprietà di argilla, sabbia e altri elementi. Il risultato è un materiale dalla straordinaria resistenza e durabilità, disponibile in un\'ampia varietà di finiture e colori, adatto sia per interni che per esterni.',
      points: [
        'Processo innovativo: sintesi di argilla, sabbia e altri elementi',
        'Alta resistenza e durabilità garantita',
        'Ampia varietà di finiture e colori',
        'Adatto a interni ed esterni',
        'Manutenzione minima e lunga durata',
      ],
    },
  },
  {
    id: 'vendita',
    title: 'Vendita Pavimenti',
    shortDesc: 'Le migliori soluzioni per ogni progetto',
    image: foto6,
    content: {
      intro: 'Selezioniamo le migliori tipologie di pavimentazione dalle aziende più innovative del settore. Ogni prodotto è scelto con cura per garantire la massima soddisfazione. Vi offriamo consulenza personalizzata per guidarvi nella scelta perfetta per il vostro progetto.',
      points: [
        'Selezione accurata delle migliori tipologie di pavimentazione',
        'Scelta tra aziende innovative e leader nel settore',
        'Massima soddisfazione garantita',
        'Consulenza professionale nella scelta',
        'Campionature disponibili in showroom',
      ],
    },
  },
  {
    id: 'sottofondi',
    title: 'Sottofondi Tradizionali e Autolivellanti',
    shortDesc: 'La base perfetta per ogni pavimento',
    image: foto4,
    content: {
      intro: 'Realizziamo sottofondi per massetti sia classici che autolivellanti, garantendo precisione e velocità di esecuzione. I nostri sottofondi sono ideali per ristrutturazioni anche di grande entità.',
      points: [
        'Massetti tradizionali e autolivellanti',
        'Precisione e velocità di esecuzione',
        'Ideale per ristrutturazioni importanti',
        'Banda perimetrale comprimibile per dilatazione',
        'Calpestabile dopo 48 ore',
        'Lavori conformi alle normative vigenti',
      ],
      technical: {
        title: 'Approfondimento tecnico',
        items: [
          { term: 'Massetto', definition: 'Strato di materiale posato sul sottofondo che funge da base per la pavimentazione finale.' },
          { term: 'Sottofondo', definition: 'Strato composto di diverse sfoglie che isola tra solaio e massetto, distribuendo i carichi in modo omogeneo ed eliminando i dislivelli del solaio grezzo.' },
          { term: 'Autolivellante', definition: 'Tecnica moderna che prevede l\'utilizzo di una banda perimetrale comprimibile e nylon, permettendo al massetto di essere calpestabile dopo sole 48 ore.' },
        ],
      },
    },
  },
]

export default function Servizi() {
  const [activeService, setActiveService] = useState('posa')

  const currentService = servizi.find(s => s.id === activeService)

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foto2} alt="Servizi Caspani Pavimenti" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/85 to-navy-950/80" />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-wider">I Nostri Servizi</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mt-3 mb-6">
            Soluzioni complete per i vostri pavimenti
          </h1>
          <p className="text-lg text-gray-300 font-body max-w-2xl leading-relaxed">
            Dalla fornitura alla posa, dai rivestimenti ai sottofondi: un servizio completo per ogni esigenza, con la garanzia di qualità e professionalità.
          </p>
        </div>
      </section>

      {/* SERVIZI INTERATTIVI */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {servizi.map((servizio) => (
              <button
                key={servizio.id}
                onClick={() => setActiveService(servizio.id)}
                className={`px-5 py-2.5 rounded-lg font-heading font-medium text-sm transition-all duration-300 ${
                  activeService === servizio.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-navy-800 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {servizio.title}
              </button>
            ))}
          </div>

          {/* Service Content */}
          {currentService && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-80 lg:h-[450px] object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="section-title">{currentService.title}</h2>
                <p className="text-gray-600 font-body leading-relaxed mb-8">
                  {currentService.content.intro}
                </p>

                <ul className="space-y-3 mb-8">
                  {currentService.content.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-body text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technical Details (for Sottofondi) */}
                {currentService.content.technical && (
                  <div className="bg-navy-50 rounded-xl p-6 mb-8 border border-navy-100">
                    <h3 className="font-heading font-bold text-navy-900 text-lg mb-4">
                      {currentService.content.technical.title}
                    </h3>
                    <dl className="space-y-4">
                      {currentService.content.technical.items.map((item, index) => (
                        <div key={index}>
                          <dt className="font-heading font-semibold text-navy-800 text-sm">{item.term}</dt>
                          <dd className="text-gray-600 font-body text-sm leading-relaxed mt-1">{item.definition}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}

                <Link to="/contatti" className="btn-primary">
                  Richiedi Preventivo
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PANORAMICA TUTTI I SERVIZI */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-heading font-semibold text-sm uppercase tracking-wider">Panoramica Completa</span>
            <h2 className="section-title mt-2">Tutti i nostri servizi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servizi.map((servizio) => (
              <div
                key={servizio.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer"
                onClick={() => {
                  setActiveService(servizio.id)
                  window.scrollTo({ top: 400, behavior: 'smooth' })
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={servizio.image}
                    alt={servizio.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-navy-900 text-lg mb-2 group-hover:text-orange-500 transition-colors">
                    {servizio.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm">{servizio.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foto2} alt="Cantiere Caspani" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Hai un progetto in mente?
          </h2>
          <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto mb-10">
            Contattaci per una consulenza gratuita. Ti aiuteremo a scegliere il servizio e i materiali più adatti alle tue esigenze.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contatti" className="btn-primary !text-base !px-10 !py-4">
              Richiedi Preventivo Gratuito
            </Link>
            <a href="tel:+393381673246" className="btn-secondary !text-base !px-10 !py-4">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Chiamaci Ora
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
