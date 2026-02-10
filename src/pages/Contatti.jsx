import { useState } from 'react'
import { Link } from 'react-router-dom'
import foto2 from '../assets/foto/foto-2.webp'

const tipologieLavoro = [
  'Posa pavimenti',
  'Posa rivestimenti',
  'Fornitura pavimenti',
  'Sottofondi / Massetti',
  'Impermeabilizzazione docce',
  'Altro',
]

export default function Contatti() {
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    email: '',
    tipologia: '',
    localita: '',
    messaggio: '',
    privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foto2} alt="Contatti Caspani Pavimenti" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/85 to-navy-950/80" />
        </div>
        <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-wider">Contatti</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mt-3 mb-6">
            Richiedi un preventivo gratuito
          </h1>
          <p className="text-lg text-gray-300 font-body max-w-2xl leading-relaxed">
            Compila il modulo o contattaci direttamente. Saremo felici di offrirti una consulenza personalizzata per il tuo progetto.
          </p>
        </div>
      </section>

      {/* CONTATTI + FORM */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info Contatto */}
            <div className="lg:col-span-2">
              <h2 className="section-title">Contattaci direttamente</h2>
              <p className="text-gray-600 font-body leading-relaxed mb-8">
                Siamo a disposizione per qualsiasi informazione o richiesta di preventivo. Non esitate a contattarci!
              </p>

              {/* Cards Contatto */}
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy-900 text-sm mb-1">Indirizzo</h3>
                      <p className="text-gray-600 font-body text-sm">Via Europa, 8<br />23031 Aprica (SO)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy-900 text-sm mb-1">Telefono</h3>
                      <a href="tel:+393381673246" className="text-orange-500 hover:text-orange-600 font-body text-sm font-medium transition-colors">
                        +39 338 167 3246
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy-900 text-sm mb-1">Email</h3>
                      <a href="mailto:caspanipavimenti.rivestimenti@gmail.com" className="text-orange-500 hover:text-orange-600 font-body text-sm font-medium transition-colors break-all">
                        caspanipavimenti.rivestimenti@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-heading font-semibold text-navy-900 text-sm mb-3">Seguici sui social</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/caspani.piastrelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg bg-navy-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/caspani.piastrelle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg bg-navy-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Mappa */}
              <div className="mt-8">
                <h3 className="font-heading font-semibold text-navy-900 text-sm mb-3">Dove siamo</h3>
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-64">
                  <iframe
                    title="Posizione Caspani Pavimenti"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.0!2d10.1508!3d46.1536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47845c0a0b0b0b0b%3A0x0!2sVia%20Europa%2C%208%2C%2023031%20Aprica%20SO!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-heading font-bold text-navy-900 mb-2">Richiedi un Preventivo</h2>
                <p className="text-gray-600 font-body text-sm mb-8">
                  Compila il modulo e ti ricontatteremo al più presto con un preventivo personalizzato.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-navy-900 text-xl mb-3">Richiesta inviata!</h3>
                    <p className="text-gray-600 font-body mb-6">
                      Grazie per averci contattato. Ti risponderemo al più presto.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ nome: '', telefono: '', email: '', tipologia: '', localita: '', messaggio: '', privacy: false })
                      }}
                      className="btn-outline !text-sm"
                    >
                      Invia un'altra richiesta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="nome" className="block font-heading font-medium text-navy-900 text-sm mb-1.5">
                          Nome e Cognome *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                          placeholder="Il tuo nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block font-heading font-medium text-navy-900 text-sm mb-1.5">
                          Telefono *
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                          placeholder="Il tuo numero"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-heading font-medium text-navy-900 text-sm mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                        placeholder="La tua email"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="tipologia" className="block font-heading font-medium text-navy-900 text-sm mb-1.5">
                          Tipologia Lavoro
                        </label>
                        <select
                          id="tipologia"
                          name="tipologia"
                          value={formData.tipologia}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                        >
                          <option value="">Seleziona...</option>
                          {tipologieLavoro.map((tipo) => (
                            <option key={tipo} value={tipo}>{tipo}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="localita" className="block font-heading font-medium text-navy-900 text-sm mb-1.5">
                          Località intervento
                        </label>
                        <input
                          type="text"
                          id="localita"
                          name="localita"
                          value={formData.localita}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white"
                          placeholder="Dove si trova il lavoro?"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="messaggio" className="block font-heading font-medium text-navy-900 text-sm mb-1.5">
                        Descrizione Lavoro
                      </label>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        value={formData.messaggio}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all bg-white resize-none"
                        placeholder="Descrivi il lavoro che hai in mente..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        required
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <label htmlFor="privacy" className="text-gray-600 font-body text-xs leading-relaxed">
                        Ho letto e accetto la <Link to="/privacy" className="text-orange-500 hover:underline">Privacy Policy</Link>. Autorizzo il trattamento dei miei dati personali ai sensi del GDPR per essere ricontattato in merito alla mia richiesta. *
                      </label>
                    </div>

                    <button type="submit" className="btn-primary w-full !py-4">
                      Invia Richiesta di Preventivo
                    </button>

                    <p className="text-gray-400 font-body text-xs text-center">
                      * Campi obbligatori. Ti risponderemo entro 24 ore lavorative.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER CHIAMATA */}
      <section className="bg-navy-900 py-12">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">Preferisci parlare con noi?</h3>
              <p className="text-gray-400 font-body text-sm">Chiamaci direttamente per una consulenza immediata.</p>
            </div>
            <a href="tel:+393381673246" className="btn-primary !bg-white !text-orange-500 hover:!bg-orange-50 !text-base !px-10 !py-4 shrink-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +39 338 167 3246
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
