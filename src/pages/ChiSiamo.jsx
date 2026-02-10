import { Link } from 'react-router-dom'
import foto2 from '../assets/foto/foto-2.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto10 from '../assets/foto/foto-10.webp'

const competenze = [
  'Posa di pavimenti in legno, marmo, pietra e gres porcellanato',
  'Rivestimenti per bagni, cucine e ogni ambiente',
  'Impermeabilizzazione docce',
  'Sottofondi tradizionali e massetti autolivellanti',
  'Utilizzo dei migliori prodotti per l\'installazione',
  'Consulenza personalizzata per ogni progetto',
]

const clienti = [
  { label: 'Case residenziali', icon: '🏠' },
  { label: 'Uffici', icon: '🏢' },
  { label: 'Hotel', icon: '🏨' },
  { label: 'Ristoranti', icon: '🍽️' },
  { label: 'Ambienti di produzione', icon: '🏭' },
  { label: 'Sedi aziendali', icon: '🏛️' },
]

export default function ChiSiamo() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foto2} alt="Cantiere Caspani Pavimenti" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/85 to-navy-950/80" />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-wider">Chi Siamo</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mt-3 mb-6">
            La nostra storia, la vostra garanzia
          </h1>
          <p className="text-lg text-gray-300 font-body max-w-2xl leading-relaxed">
            Anni di esperienza, passione per il settore e attenzione al cliente ci rendono un punto di riferimento per la posa di pavimenti ad Aprica e in tutta la provincia di Sondrio.
          </p>
        </div>
      </section>

      {/* L'AZIENDA */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-orange-500 font-heading font-semibold text-sm uppercase tracking-wider">L'Azienda</span>
              <h2 className="section-title mt-2">Esperienza e innovazione al vostro servizio</h2>
              <div className="space-y-4 text-gray-600 font-body leading-relaxed">
                <p>
                  Caspani Pavimenti opera nella zona di <strong>Sondrio e dintorni</strong>, specializzandosi nella vendita e posa di pavimenti e rivestimenti di ogni tipologia. La nostra esperienza consolidata nel settore ci permette di offrire soluzioni personalizzate per ogni esigenza.
                </p>
                <p>
                  Ci aggiorniamo costantemente per restare al passo con le <strong>novità del settore</strong>, utilizzando materiali innovativi e tecniche di posa all'avanguardia. Il nostro obiettivo è garantire la massima soddisfazione di una clientela diversificata: privati, imprese edili, architetti e attività commerciali.
                </p>
                <p>
                  Dalla consulenza iniziale alla realizzazione finale, seguiamo ogni progetto con dedizione e professionalità, assicurando risultati che durano nel tempo.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={foto10}
                alt="Team Caspani Pavimenti al lavoro"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-xl p-6 shadow-lg hidden md:block">
                <div className="font-heading font-extrabold text-3xl">20+</div>
                <div className="font-body text-sm text-white/80">Anni di esperienza</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETENZE TECNICHE */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src={foto4} alt="Massetto autolivellante" className="w-full h-52 object-cover rounded-xl shadow-lg" />
                <img src={foto7} alt="Rivestimento bagno" className="w-full h-52 object-cover rounded-xl shadow-lg mt-8" />
                <img src={foto5} alt="Showroom pavimenti" className="w-full h-52 object-cover rounded-xl shadow-lg col-span-2" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-orange-500 font-heading font-semibold text-sm uppercase tracking-wider">Competenze Tecniche</span>
              <h2 className="section-title mt-2">Cosa sappiamo fare</h2>
              <p className="text-gray-600 font-body leading-relaxed mb-8">
                Il nostro team utilizza i migliori prodotti per l'installazione, inclusi autolivellanti per garantire efficienza e velocità nei lavori. Siamo in grado di posare qualsiasi tipo di pavimentazione.
              </p>
              <ul className="space-y-4">
                {competenze.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-body text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IL TEAM */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-wider">Il Nostro Team</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 mt-2">
              Persone qualificate e appassionate
            </h2>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              Il nostro punto di forza è il personale: selezioniamo accuratamente le competenze per garantire eccellenza nella vendita e nella posa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy-800/50 rounded-xl p-8 border border-navy-700 text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">Altamente qualificati</h3>
              <p className="text-gray-400 font-body text-sm leading-relaxed">
                Selezioniamo accuratamente le competenze per garantire lavori eseguiti a regola d'arte.
              </p>
            </div>

            <div className="bg-navy-800/50 rounded-xl p-8 border border-navy-700 text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">Discreti e cortesi</h3>
              <p className="text-gray-400 font-body text-sm leading-relaxed">
                Rispetto per il contesto e per i tempi del cliente: lavoriamo con la massima discrezione.
              </p>
            </div>

            <div className="bg-navy-800/50 rounded-xl p-8 border border-navy-700 text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-3">Eccellenza operativa</h3>
              <p className="text-gray-400 font-body text-sm leading-relaxed">
                Dalla vendita alla posa, puntiamo all'eccellenza in ogni fase del lavoro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIALI */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-heading font-semibold text-sm uppercase tracking-wider">I Nostri Materiali</span>
            <h2 className="section-title mt-2">Estetica e funzionalità per ogni ambiente</h2>
            <p className="section-subtitle">
              Offriamo un'ampia selezione di materiali che uniscono bellezza e praticità, con attenzione alla sostenibilità.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Legno', desc: 'Il calore naturale del legno per ambienti accoglienti e raffinati.', color: 'bg-amber-50 text-amber-700' },
              { name: 'Marmo', desc: 'L\'eleganza senza tempo del marmo per spazi di prestigio.', color: 'bg-gray-100 text-gray-700' },
              { name: 'Pietra', desc: 'L\'unicità e la resistenza della pietra naturale per interni ed esterni.', color: 'bg-stone-100 text-stone-700' },
              { name: 'Gres Porcellanato', desc: 'Versatilità, resistenza e infinite possibilità di design.', color: 'bg-blue-50 text-blue-700' },
            ].map((material, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-full ${material.color} flex items-center justify-center mx-auto mb-4 text-2xl font-heading font-bold`}>
                  {material.name.charAt(0)}
                </div>
                <h3 className="font-heading font-bold text-navy-900 text-lg mb-2">{material.name}</h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">{material.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 rounded-2xl p-8 border border-orange-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-900 text-lg mb-2">Attenzione alla sostenibilità</h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  Selezioniamo materiali innovativi a minor impatto ambientale, perché crediamo che qualità e sostenibilità possano andare di pari passo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTELA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-heading font-semibold text-sm uppercase tracking-wider">La Nostra Clientela</span>
            <h2 className="section-title mt-2">Al servizio di ogni tipo di ambiente</h2>
            <p className="section-subtitle">
              Offriamo consulenza personalizzata e la pavimentazione perfetta per ogni progetto.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clienti.map((cliente, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300">
                <div className="text-3xl mb-3">{cliente.icon}</div>
                <span className="font-heading font-semibold text-navy-900 text-sm">{cliente.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-orange-500">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Pronto a trasformare i tuoi spazi?
          </h2>
          <p className="text-lg text-white/80 font-body max-w-2xl mx-auto mb-10">
            Contattaci per una consulenza personalizzata. Ti aiuteremo a scegliere la soluzione perfetta per il tuo progetto.
          </p>
          <Link to="/contatti" className="inline-flex items-center justify-center px-10 py-4 bg-white text-orange-500 font-heading font-bold rounded-lg hover:bg-navy-900 hover:text-white transition-all duration-300 shadow-lg text-base">
            Richiedi Preventivo Gratuito
          </Link>
        </div>
      </section>
    </>
  )
}
