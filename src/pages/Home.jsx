import { Link } from 'react-router-dom'
import foto2 from '../assets/foto/foto-2.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'
import foto10 from '../assets/foto/foto-10.webp'

const services = [
  {
    title: 'Posa Pavimenti e Rivestimenti',
    description: 'Posa professionale di ogni tipologia di pavimento e rivestimento per interni ed esterni.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: 'Fornitura Pavimenti',
    description: 'Vasta gamma di materiali: legno, marmo, pietra, gres porcellanato e piastrelle decorative.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Rivestimenti in Ceramica Gres',
    description: 'Soluzioni in gres porcellanato: alta resistenza, durabilità e varietà di finiture per ogni ambiente.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Sottofondi e Massetti',
    description: 'Sottofondi tradizionali e massetti autolivellanti per una base perfetta e duratura.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Impermeabilizzazione Docce',
    description: 'Trattamenti impermeabilizzanti professionali per docce e ambienti umidi.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
  },
]

const strengths = [
  { title: 'Esperienza consolidata', description: 'Anni di attività nel settore con centinaia di lavori completati con successo.' },
  { title: 'Materiali di ultima generazione', description: 'Utilizziamo solo i migliori prodotti e materiali innovativi del settore.' },
  { title: 'Aggiornamento costante', description: 'Sempre al passo con le ultime novità e tecniche di posa.' },
  { title: 'Personale qualificato', description: 'Un team esperto, discreto e cortese al vostro servizio.' },
  { title: 'Ottimo rapporto qualità-prezzo', description: 'Tariffe competitive senza compromettere la qualità del risultato.' },
  { title: 'Rispetto delle tempistiche', description: 'Lavori consegnati nei tempi concordati, senza sorprese.' },
]

const testimonials = [
  {
    name: 'Simone G.',
    text: 'Materiali di ultima generazione e personale esperto. Lavoro eseguito a regola d\'arte, con grande attenzione ai dettagli. Consigliatissimi!',
    rating: 5,
  },
  {
    name: 'Vincenzo P.',
    text: 'Ottimo rapporto qualità-prezzo e velocità negli interventi. Abbiamo ristrutturato tutto il pavimento di casa e il risultato è perfetto.',
    rating: 5,
  },
  {
    name: 'Antonio M.',
    text: 'Elevata disponibilità del team, rispetto del contesto e delle tempistiche. Professionisti seri e affidabili, li consiglio per qualsiasi lavoro.',
    rating: 5,
  },
]

const galleryPreview = [
  { src: foto7, alt: 'Posa pavimento in gres' },
  { src: foto8, alt: 'Rivestimento bagno effetto legno' },
  { src: foto10, alt: 'Lavori di posa e rivestimento' },
  { src: foto9, alt: 'Cantiere massetti autolivellanti' },
  { src: foto5, alt: 'Showroom campioni pavimenti' },
  { src: foto6, alt: 'Posa pavimento sopraelevato' },
]

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={foto8}
            alt="Posa pavimenti professionale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-navy-950/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-heading font-medium mb-6">
              Ad Aprica e in tutta la provincia di Sondrio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 leading-tight">
              Pavimenti{' '}
              <span className="text-orange-500">Caspani</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-body font-light mb-10 max-w-3xl mx-auto leading-relaxed">
              Esperienza e qualità nella posa di pavimenti, rivestimenti e sottofondi per massetti da incollare autolivellanti.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contatti" className="btn-primary !text-base !px-10 !py-4">
                Richiedi un Preventivo Gratuito
              </Link>
              <Link to="/servizi" className="btn-secondary !text-base !px-10 !py-4">
                Scopri i Nostri Servizi
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* CHI SIAMO BREVE */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-orange-500 font-heading font-semibold text-sm uppercase tracking-wider">Chi Siamo</span>
              <h2 className="section-title mt-2">
                Lunga tradizione nella posa di pavimenti e rivestimenti
              </h2>
              <p className="text-gray-600 font-body leading-relaxed mb-6">
                Da anni operiamo con passione e competenza nel settore della vendita e posa di pavimenti, rivestimenti e sottofondi. Siamo specializzati in ogni tipologia di pavimentazione: <strong>legno, marmo, pietra e gres porcellanato</strong>.
              </p>
              <p className="text-gray-600 font-body leading-relaxed mb-8">
                Il nostro team altamente qualificato è in grado di realizzare anche <strong>sottofondi tradizionali e autolivellanti</strong>, garantendo una base perfetta per qualsiasi tipo di pavimento. Utilizziamo materiali di ultima generazione e ci aggiorniamo costantemente sulle novità del settore.
              </p>
              <Link to="/chi-siamo" className="btn-outline">
                Scopri di più su di noi
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={foto4}
                  alt="Massetto autolivellante in lavorazione"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img
                  src={foto5}
                  alt="Showroom pavimenti"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={foto7}
                  alt="Posa pavimento bagno"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <img
                  src={foto6}
                  alt="Posa pavimento sopraelevato"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-heading font-semibold text-sm uppercase tracking-wider">I Nostri Servizi</span>
            <h2 className="section-title mt-2">Cosa facciamo per voi</h2>
            <p className="section-subtitle">
              Offriamo una gamma completa di servizi per la posa e fornitura di pavimenti, rivestimenti e sottofondi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
              >
                <div className="w-14 h-14 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading font-bold text-navy-900 text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/servizi" className="btn-outline">
              Vedi tutti i servizi
            </Link>
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="container-custom mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-wider">I Nostri Punti di Forza</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 mt-2">
              Perché scegliere Caspani Pavimenti
            </h2>
            <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
              Affidabilità, competenza e passione per il nostro lavoro: ecco cosa ci distingue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item, index) => (
              <div
                key={index}
                className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 border border-navy-700 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIANZE */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-heading font-semibold text-sm uppercase tracking-wider">Testimonianze</span>
            <h2 className="section-title mt-2">Cosa dicono i nostri clienti</h2>
            <p className="section-subtitle">
              La soddisfazione dei nostri clienti è il nostro miglior biglietto da visita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 relative"
              >
                <div className="absolute -top-3 left-8">
                  <svg className="w-8 h-8 text-orange-500/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                  </svg>
                </div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 font-body text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center text-white font-heading font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-heading font-semibold text-navy-900 text-sm">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERIA PREVIEW */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-heading font-semibold text-sm uppercase tracking-wider">I Nostri Lavori</span>
            <h2 className="section-title mt-2">Galleria lavori realizzati</h2>
            <p className="section-subtitle">
              Scopri alcuni dei nostri progetti completati: pavimenti, rivestimenti, massetti e molto altro.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((photo, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/galleria" className="btn-outline">
              Vedi tutta la galleria
            </Link>
          </div>
        </div>
      </section>

      {/* CTA PREVENTIVO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={foto2}
            alt="Lavori massetti cantiere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/85" />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Hai bisogno di un preventivo?
          </h2>
          <p className="text-lg text-gray-300 font-body max-w-3xl mx-auto mb-10 leading-relaxed">
            Chiama oggi stesso e affidati alla nostra competenza per la posa di pavimenti e rivestimenti di altissima qualità, a tariffe sempre molto convenienti.
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
