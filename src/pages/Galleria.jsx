import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  { id: 'tutti', label: 'Tutti i lavori' },
  { id: 'pavimenti', label: 'Pavimenti' },
  { id: 'rivestimenti', label: 'Rivestimenti' },
  { id: 'sottofondi', label: 'Sottofondi e Massetti' },
  { id: 'esterni', label: 'Esterni' },
]

const photos = [
  { src: foto7, alt: 'Rivestimento bagno in gres effetto legno', category: 'rivestimenti' },
  { src: foto8, alt: 'Posa pavimento bagno con doccia', category: 'pavimenti' },
  { src: foto2, alt: 'Realizzazione massetto con macchinari professionali', category: 'sottofondi' },
  { src: foto4, alt: 'Massetto autolivellante in fase di lavorazione', category: 'sottofondi' },
  { src: foto6, alt: 'Posa pavimento sopraelevato per esterni', category: 'esterni' },
  { src: foto10, alt: 'Cantiere con posa rivestimenti e pavimenti', category: 'rivestimenti' },
  { src: foto5, alt: 'Showroom con campioni di pavimenti', category: 'pavimenti' },
  { src: foto9, alt: 'Realizzazione massetto in cantiere invernale', category: 'sottofondi' },
  { src: foto3, alt: 'Sottofondo autolivellante finito', category: 'sottofondi' },
  { src: foto11, alt: 'Dettaglio lavoro di posa completato', category: 'pavimenti' },
]

export default function Galleria() {
  const [activeCategory, setActiveCategory] = useState('tutti')
  const [lightbox, setLightbox] = useState(null)

  const filteredPhotos = activeCategory === 'tutti'
    ? photos
    : photos.filter(p => p.category === activeCategory)

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foto8} alt="Galleria lavori Caspani Pavimenti" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/85 to-navy-950/80" />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-wider">Galleria</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mt-3 mb-6">
            I nostri lavori parlano per noi
          </h1>
          <p className="text-lg text-gray-300 font-body max-w-2xl leading-relaxed">
            Una selezione dei nostri progetti completati: pavimenti, rivestimenti, sottofondi e molto altro. Ogni lavoro racconta la nostra passione per la qualità.
          </p>
        </div>
      </section>

      {/* GALLERIA */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          {/* Filtri */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-lg font-heading font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-navy-800 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Griglia Foto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
                onClick={() => setLightbox(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-body text-sm">{photo.alt}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-orange-500/80 rounded-full text-white text-xs font-heading font-medium capitalize">
                      {photo.category}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 font-body">Nessuna foto in questa categoria al momento.</p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-5xl max-h-[85vh] w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-white/80 font-body text-sm text-center mt-4">{lightbox.alt}</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-orange-500">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ti piace quello che vedi?
          </h2>
          <p className="text-lg text-white/80 font-body max-w-2xl mx-auto mb-10">
            Contattaci per trasformare anche i tuoi ambienti. Ogni progetto è unico e merita la massima attenzione.
          </p>
          <Link to="/contatti" className="inline-flex items-center justify-center px-10 py-4 bg-white text-orange-500 font-heading font-bold rounded-lg hover:bg-navy-900 hover:text-white transition-all duration-300 shadow-lg text-base">
            Richiedi Preventivo Gratuito
          </Link>
        </div>
      </section>
    </>
  )
}
