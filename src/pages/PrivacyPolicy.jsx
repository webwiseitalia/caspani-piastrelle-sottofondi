import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function PrivacyPolicy() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative bg-dark pattern-blueprint-dark">
        <div className="pad-x pt-32 pb-16 md:pt-40 md:pb-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-heading font-semibold text-[11px] uppercase tracking-[0.15em] text-cream/50 hover:text-accent transition-colors duration-300 mb-10 md:mb-14"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Torna alla Home
          </Link>

          <span className="inline-block font-heading font-semibold text-[10px] uppercase tracking-[0.35em] text-accent mb-5">
            Documenti Legali
          </span>
          <h1 className="fluid-h1 font-heading font-bold text-cream mb-4">
            Privacy Policy
          </h1>
          <p className="font-body text-cream/40 text-base md:text-lg max-w-2xl leading-relaxed">
            Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)
          </p>
        </div>
      </section>

      {/* ═══════════════ CONTENT ═══════════════ */}
      <section className="bg-cream pattern-tiles py-16 md:py-24">
        <div className="pad-x-lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg p-8 md:p-12 lg:p-16">

              {/* Ultima modifica */}
              <div className="flex items-center gap-3 mb-12 pb-8 border-b border-dark/10">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-body text-muted text-sm">
                  Ultimo aggiornamento: <strong className="text-dark">{siteData.lastPolicyUpdate}</strong>
                </p>
              </div>

              {/* ── 1. Titolare del Trattamento ── */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">
                  <span className="text-accent mr-2">1.</span>Titolare del Trattamento
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-6">
                  Il Titolare del trattamento dei dati personali raccolti tramite questo sito web è:
                </p>
                <div className="border border-dark/10 p-5">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                      </svg>
                      <div>
                        <p className="font-heading font-bold text-dark text-sm">{siteData.name}</p>
                        <p className="font-body text-muted text-sm">P.IVA {siteData.piva}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <p className="font-body text-muted text-sm">
                        {siteData.contact.address.street} &mdash; {siteData.contact.address.cap} {siteData.contact.address.city} ({siteData.contact.address.province})
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <a
                        href={`mailto:${siteData.contact.email}`}
                        className="font-body text-accent text-sm hover:text-accent-dark transition-colors break-all"
                      >
                        {siteData.contact.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <a
                        href={`tel:${siteData.contact.phoneRaw}`}
                        className="font-body text-accent text-sm hover:text-accent-dark transition-colors"
                      >
                        {siteData.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── 2. Dati Raccolti e Finalità ── */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">
                  <span className="text-accent mr-2">2.</span>Dati Raccolti e Finalità del Trattamento
                </h2>

                <h3 className="font-heading font-bold text-dark text-base md:text-lg mb-4">
                  2.1 Dati forniti volontariamente dall'utente
                </h3>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-5">
                  Attraverso il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali, forniti volontariamente dall'utente:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    { label: 'Nome e Cognome', desc: 'per identificare il richiedente' },
                    { label: 'Indirizzo Email', desc: 'per rispondere alla richiesta' },
                    { label: 'Numero di Telefono', desc: 'per un contatto diretto' },
                    { label: 'Messaggio', desc: 'per comprendere le esigenze del cliente' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-4 bg-cream/70">
                      <span className="w-2 h-2 bg-accent shrink-0 mt-1.5" />
                      <div>
                        <p className="font-heading font-bold text-dark text-sm">{item.label}</p>
                        <p className="font-body text-muted text-xs mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-heading font-bold text-dark text-base md:text-lg mb-4">
                  2.2 Base giuridica del trattamento
                </h3>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-4">
                  Il trattamento dei dati personali si fonda sul <strong className="text-dark">consenso esplicito</strong> dell'utente, espresso mediante la compilazione e l'invio volontario del modulo di contatto e l'accettazione della presente informativa.
                </p>
                <div className="bg-accent/5 border-l-4 border-accent p-5">
                  <p className="font-body text-dark text-sm leading-relaxed">
                    <strong>Riferimento normativo:</strong> Art. 6, par. 1, lett. a) del Regolamento UE 2016/679 (GDPR) &mdash; il trattamento è lecito quando l'interessato ha espresso il proprio consenso per una o più specifiche finalità.
                  </p>
                </div>
              </div>

              {/* ── 3. Modalità di Trattamento ── */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">
                  <span className="text-accent mr-2">3.</span>Modalità di Trattamento
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-4">
                  I dati personali sono trattati con strumenti automatizzati e non automatizzati, con logiche strettamente correlate alle finalità sopra indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
                </p>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed">
                  Sono adottate misure di sicurezza tecniche e organizzative adeguate per proteggere i dati da accessi non autorizzati, perdita, distruzione o divulgazione non autorizzata, in conformità con quanto previsto dall'Art. 32 del GDPR.
                </p>
              </div>

              {/* ── 4. Conservazione dei Dati ── */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">
                  <span className="text-accent mr-2">4.</span>Conservazione dei Dati
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-5">
                  I dati personali raccolti saranno conservati per il tempo strettamente necessario al raggiungimento delle finalità per le quali sono stati raccolti, e precisamente:
                </p>
                <ul className="space-y-3 mb-5">
                  {[
                    { bold: 'Dati del modulo di contatto:', text: 'conservati per un massimo di 24 mesi dalla data di ricezione, salvo richiesta di cancellazione anticipata da parte dell\'interessato.' },
                    { bold: 'Dati per finalità contrattuali:', text: 'conservati per tutta la durata del rapporto contrattuale e per i 10 anni successivi, come previsto dalla normativa fiscale e civilistica italiana.' },
                    { bold: 'Dati per obblighi di legge:', text: 'conservati per il periodo previsto dalla specifica normativa di riferimento.' },
                  ].map((item) => (
                    <li key={item.bold} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent shrink-0 mt-2" />
                      <p className="font-body text-muted text-sm md:text-base leading-relaxed">
                        <strong className="text-dark">{item.bold}</strong> {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed">
                  Al termine del periodo di conservazione, i dati saranno cancellati o resi anonimi in modo irreversibile.
                </p>
              </div>

              {/* ── 5. Comunicazione e Diffusione dei Dati ── */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">
                  <span className="text-accent mr-2">5.</span>Comunicazione e Diffusione dei Dati
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-5">
                  I dati personali raccolti non saranno oggetto di diffusione e potranno essere comunicati esclusivamente a soggetti autorizzati al trattamento o a responsabili del trattamento debitamente nominati, limitatamente a quanto necessario per l'espletamento delle finalità indicate.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-5">
                  <p className="font-heading font-bold text-dark text-sm mb-3">
                    I tuoi dati NON saranno mai:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Venduti a terze parti per finalità commerciali',
                      'Utilizzati per attività di profilazione automatizzata',
                      'Trasferiti a paesi al di fuori dell\'Unione Europea senza adeguate garanzie',
                      'Condivisi con soggetti non autorizzati al trattamento',
                      'Utilizzati per finalità diverse da quelle espressamente dichiarate',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="font-body text-muted text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── 6. Diritti dell'Interessato ── */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">
                  <span className="text-accent mr-2">6.</span>Diritti dell'Interessato
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-5">
                  Ai sensi degli articoli 15-21 del Regolamento UE 2016/679 (GDPR), l'utente ha il diritto di:
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { art: 'Art. 15', right: 'Diritto di accesso', desc: 'ottenere conferma dell\'esistenza di un trattamento dei propri dati e accedere alle informazioni relative.' },
                    { art: 'Art. 16', right: 'Diritto di rettifica', desc: 'ottenere la correzione dei dati personali inesatti o l\'integrazione dei dati incompleti.' },
                    { art: 'Art. 17', right: 'Diritto alla cancellazione', desc: 'ottenere la cancellazione dei propri dati personali nei casi previsti dalla normativa.' },
                    { art: 'Art. 18', right: 'Diritto alla limitazione', desc: 'ottenere la limitazione del trattamento nei casi previsti dalla normativa.' },
                    { art: 'Art. 20', right: 'Diritto alla portabilità', desc: 'ricevere i propri dati in un formato strutturato e di uso comune e trasferirli ad altro titolare.' },
                    { art: 'Art. 21', right: 'Diritto di opposizione', desc: 'opporsi al trattamento dei propri dati personali in qualsiasi momento.' },
                  ].map((item) => (
                    <li key={item.art} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center bg-accent text-white font-heading font-bold text-[10px] px-2 py-1 shrink-0 mt-0.5 tracking-wide">
                        {item.art}
                      </span>
                      <div>
                        <p className="font-heading font-bold text-dark text-sm">{item.right}</p>
                        <p className="font-body text-muted text-sm leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="bg-accent/5 border-l-4 border-accent p-5">
                  <p className="font-heading font-bold text-dark text-sm mb-2">
                    Come esercitare i tuoi diritti
                  </p>
                  <p className="font-body text-muted text-sm leading-relaxed mb-3">
                    Per esercitare uno qualsiasi dei diritti sopra elencati, puoi contattarci inviando una richiesta scritta a:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <a
                      href={`mailto:${siteData.contact.email}`}
                      className="inline-flex items-center gap-2 font-body text-accent text-sm hover:text-accent-dark transition-colors break-all"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      {siteData.contact.email}
                    </a>
                    <a
                      href={`tel:${siteData.contact.phoneRaw}`}
                      className="inline-flex items-center gap-2 font-body text-accent text-sm hover:text-accent-dark transition-colors"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      {siteData.contact.phone}
                    </a>
                  </div>
                  <p className="font-body text-muted text-xs mt-3 leading-relaxed">
                    Risponderemo alla tua richiesta entro 30 giorni dalla ricezione, come previsto dal GDPR.
                  </p>
                </div>
              </div>

              {/* ── 7. Diritto di Reclamo ── */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">
                  <span className="text-accent mr-2">7.</span>Diritto di Reclamo
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-5">
                  Qualora l'utente ritenga che il trattamento dei propri dati personali sia effettuato in violazione del Regolamento GDPR, ha il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali.
                </p>
                <div className="border border-dark/10 p-5">
                  <p className="font-heading font-bold text-dark text-sm mb-3">
                    Garante per la Protezione dei Dati Personali
                  </p>
                  <div className="space-y-2">
                    <p className="font-body text-muted text-sm">
                      Piazza Venezia 11 &mdash; 00187 Roma
                    </p>
                    <p className="font-body text-muted text-sm">
                      Telefono: <a href="tel:+39065069" className="text-accent hover:text-accent-dark transition-colors">+39 06.69677.1</a>
                    </p>
                    <p className="font-body text-muted text-sm">
                      Email:{' '}
                      <a
                        href="mailto:garante@gpdp.it"
                        className="text-accent hover:text-accent-dark transition-colors"
                      >
                        garante@gpdp.it
                      </a>
                    </p>
                    <p className="font-body text-muted text-sm">
                      PEC:{' '}
                      <a
                        href="mailto:protocollo@pec.gpdp.it"
                        className="text-accent hover:text-accent-dark transition-colors"
                      >
                        protocollo@pec.gpdp.it
                      </a>
                    </p>
                    <p className="font-body text-muted text-sm">
                      Sito web:{' '}
                      <a
                        href="https://www.garanteprivacy.it"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent-dark transition-colors"
                      >
                        www.garanteprivacy.it
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* ── 8. Cookie e Tecnologie di Tracciamento ── */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">
                  <span className="text-accent mr-2">8.</span>Cookie e Tecnologie di Tracciamento
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-4">
                  Questo sito web può utilizzare cookie e tecnologie similari per garantire il corretto funzionamento del sito e migliorare l'esperienza di navigazione dell'utente.
                </p>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-5">
                  Per informazioni dettagliate sui cookie utilizzati, sulle finalità e sulle modalità per gestire le preferenze, si prega di consultare la nostra Cookie Policy dedicata.
                </p>
                <div className="bg-accent/5 border-l-4 border-accent p-5">
                  <p className="font-body text-dark text-sm leading-relaxed">
                    Per maggiori dettagli, consulta la nostra{' '}
                    <Link to="/cookie" className="text-accent font-heading font-bold hover:text-accent-dark transition-colors underline underline-offset-2">
                      Cookie Policy
                    </Link>
                    , dove troverai tutte le informazioni relative ai cookie tecnici, analitici e di terze parti eventualmente utilizzati.
                  </p>
                </div>
              </div>

              {/* ── 9. Modifiche alla Privacy Policy ── */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">
                  <span className="text-accent mr-2">9.</span>Modifiche alla Privacy Policy
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-4">
                  Il Titolare del trattamento si riserva il diritto di apportare modifiche alla presente informativa in qualunque momento, dandone comunicazione agli utenti attraverso la pubblicazione della versione aggiornata su questa pagina.
                </p>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed">
                  Si consiglia di consultare periodicamente questa pagina per verificare eventuali aggiornamenti. Le modifiche alla presente informativa sono efficaci dal momento della pubblicazione su questa pagina del sito web.
                </p>
              </div>

              {/* ── 10. Contatti ── */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">
                  <span className="text-accent mr-2">10.</span>Contatti
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-5">
                  Per qualsiasi domanda, chiarimento o richiesta relativa alla presente Privacy Policy o al trattamento dei dati personali, è possibile contattarci attraverso i seguenti canali:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="flex items-center gap-4 p-5 border border-dark/10 hover:border-accent/40 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-dark text-xs uppercase tracking-wider mb-1">Email</p>
                      <p className="font-body text-accent text-sm break-all group-hover:text-accent-dark transition-colors">
                        {siteData.contact.email}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`tel:${siteData.contact.phoneRaw}`}
                    className="flex items-center gap-4 p-5 border border-dark/10 hover:border-accent/40 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-dark text-xs uppercase tracking-wider mb-1">Telefono</p>
                      <p className="font-body text-accent text-sm group-hover:text-accent-dark transition-colors">
                        {siteData.contact.phone}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* ── GDPR Compliance Note ── */}
              <div className="border-t border-dark/10 pt-8 mt-12">
                <div className="flex items-start gap-3 mb-8">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <p className="font-body text-muted text-xs leading-relaxed">
                    La presente informativa è redatta in conformità al <strong className="text-dark">Regolamento (UE) 2016/679</strong> (General Data Protection Regulation &mdash; GDPR) e al <strong className="text-dark">D.Lgs. 196/2003</strong> (Codice in materia di protezione dei dati personali), come modificato dal D.Lgs. 101/2018.
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-3 font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 bg-accent text-white hover:bg-accent-dark transition-colors duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Torna alla Home
                  </Link>
                  <Link
                    to="/cookie"
                    className="inline-flex items-center justify-center gap-3 font-heading font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 border border-dark/20 text-dark hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    Leggi la Cookie Policy
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
