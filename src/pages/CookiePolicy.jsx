import { Link } from 'react-router-dom'
import siteData from '../constants/siteData'

export default function CookiePolicy() {
  return (
    <>
      {/* ═══════════════ HERO — Dark header ═══════════════ */}
      <section className="bg-dark pattern-blueprint-dark pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="pad-x-lg">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-heading font-semibold text-[11px] uppercase tracking-[0.15em] text-cream/50 hover:text-accent transition-colors duration-300 mb-10 md:mb-14"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Torna alla Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            {/* Cookie icon */}
            <svg className="w-10 h-10 md:w-12 md:h-12 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5a2.25 2.25 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m0 0A48.1 48.1 0 0012 6a48.1 48.1 0 00-2.5.131m5 0v.232c0 .857-.554 1.617-1.375 1.875a9.182 9.182 0 01-2.25 0 2.003 2.003 0 01-1.375-1.875v-.232m0 0a48.114 48.114 0 00-3.413.387c-1.069.16-1.837 1.094-1.837 2.175v4.133a2.25 2.25 0 00.75 1.661M5 14.5l4.469 4.469a1.5 1.5 0 002.062 0L16 14.5" />
            </svg>
            <h1 className="fluid-h1 font-heading font-bold text-cream">
              Cookie Policy
            </h1>
          </div>
          <p className="font-body text-cream/40 text-sm md:text-base">
            Informativa sull&apos;utilizzo dei cookie
          </p>
        </div>
      </section>

      {/* ═══════════════ CONTENT ═══════════════ */}
      <section className="bg-cream pattern-tiles py-16 md:py-24">
        <div className="pad-x-lg">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg p-8 md:p-12 lg:p-16">

              {/* Last update */}
              <p className="font-body text-muted text-xs mb-8">
                Ultimo aggiornamento: {siteData.lastPolicyUpdate}
              </p>

              {/* ── Privacy-Friendly Badge ── */}
              <div className="border-2 border-green-500 p-5 md:p-6 mb-12 flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark text-base mb-1">Sito Privacy-Friendly</h3>
                  <p className="font-body text-muted text-sm leading-relaxed">
                    Questo sito web utilizza <strong className="text-dark">solo cookie tecnici</strong> necessari al funzionamento.{' '}
                    <strong className="text-dark">Non utilizziamo cookie di profilazione, tracciamento o analisi</strong>.
                    La tua privacy è protetta e non serve il tuo consenso per la navigazione.
                  </p>
                </div>
              </div>

              {/* ═══════════════ 1. Cosa sono i Cookie ═══════════════ */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-4">
                  1. Cosa sono i Cookie
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed">
                  I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone)
                  quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune
                  informazioni sulle tue preferenze o azioni passate.
                </p>
              </div>

              {/* ═══════════════ 2. Tipologie di Cookie ═══════════════ */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">
                  2. Tipologie di Cookie
                </h2>

                {/* 2.1 Cookie Tecnici */}
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-dark text-lg md:text-xl mb-3">
                    2.1 Cookie Tecnici
                  </h3>
                  <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-4">
                    Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base.
                    Senza questi cookie, il sito potrebbe non funzionare correttamente.
                  </p>

                  {/* Green callout */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-5 mb-3">
                    <p className="font-heading font-bold text-dark text-sm mb-2">
                      Cookie tecnici utilizzati su questo sito:
                    </p>
                    <ul className="list-disc list-inside font-body text-muted text-sm leading-relaxed space-y-1">
                      <li>Cookie di navigazione e di sessione</li>
                      <li>Cookie per memorizzare le preferenze dell&apos;interfaccia</li>
                    </ul>
                  </div>
                  <p className="font-body text-muted text-xs italic leading-relaxed">
                    Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell&apos;utente.
                  </p>
                </div>

                {/* 2.2 Cookie Analitici */}
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-dark text-lg md:text-xl mb-3">
                    2.2 Cookie Analitici
                  </h3>
                  <div className="bg-red-50 border-l-4 border-red-500 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                      </svg>
                      <span className="font-heading font-bold text-red-700 text-sm uppercase tracking-wide">NON UTILIZZATI</span>
                    </div>
                    <p className="font-body text-muted text-sm leading-relaxed">
                      Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.
                    </p>
                  </div>
                </div>

                {/* 2.3 Cookie di Profilazione */}
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-dark text-lg md:text-xl mb-3">
                    2.3 Cookie di Profilazione
                  </h3>
                  <div className="bg-red-50 border-l-4 border-red-500 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                      </svg>
                      <span className="font-heading font-bold text-red-700 text-sm uppercase tracking-wide">NON UTILIZZATI</span>
                    </div>
                    <p className="font-body text-muted text-sm leading-relaxed">
                      Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.
                    </p>
                  </div>
                </div>

                {/* 2.4 Cookie di Terze Parti */}
                <div className="mb-8">
                  <h3 className="font-heading font-bold text-dark text-lg md:text-xl mb-3">
                    2.4 Cookie di Terze Parti
                  </h3>
                  <div className="bg-red-50 border-l-4 border-red-500 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-5 h-5 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                      </svg>
                      <span className="font-heading font-bold text-red-700 text-sm uppercase tracking-wide">NON UTILIZZATI</span>
                    </div>
                    <p className="font-body text-muted text-sm leading-relaxed">
                      Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).
                    </p>
                  </div>
                </div>
              </div>

              {/* ═══════════════ 3. Cookie Utilizzati su Questo Sito ═══════════════ */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-4">
                  3. Cookie Utilizzati su Questo Sito
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-6">
                  Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:
                </p>

                {/* Table */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-dark text-cream">
                        <th className="font-heading font-bold text-xs uppercase tracking-wider px-4 py-3">Nome Cookie</th>
                        <th className="font-heading font-bold text-xs uppercase tracking-wider px-4 py-3">Tipologia</th>
                        <th className="font-heading font-bold text-xs uppercase tracking-wider px-4 py-3">Finalità</th>
                        <th className="font-heading font-bold text-xs uppercase tracking-wider px-4 py-3">Durata</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-sm">
                      <tr className="border-b border-dark/10">
                        <td className="px-4 py-3 text-dark font-semibold">sidebar_state</td>
                        <td className="px-4 py-3">
                          <span className="inline-block bg-green-100 text-green-800 font-heading font-bold text-[10px] uppercase tracking-wider px-2 py-1">
                            Tecnico
                          </span>
                        </td>
                        <td className="px-4 py-3 text-muted">Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l&apos;esperienza di navigazione</td>
                        <td className="px-4 py-3 text-muted whitespace-nowrap">7 giorni</td>
                      </tr>
                      <tr className="border-b border-dark/10">
                        <td className="px-4 py-3 text-dark font-semibold">caspani-piastrelle-sottofondi-cookie-consent</td>
                        <td className="px-4 py-3">
                          <span className="inline-block bg-green-100 text-green-800 font-heading font-bold text-[10px] uppercase tracking-wider px-2 py-1">
                            Tecnico
                          </span>
                        </td>
                        <td className="px-4 py-3 text-muted">Memorizza la scelta dell&apos;utente riguardo l&apos;accettazione dei cookie</td>
                        <td className="px-4 py-3 text-muted whitespace-nowrap">365 giorni</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Note box */}
                <div className="bg-green-50 border-l-4 border-green-500 p-5">
                  <p className="font-body text-muted text-sm leading-relaxed">
                    <strong className="text-dark">Nota importante:</strong> I cookie tecnici come &quot;sidebar_state&quot; sono essenziali per il funzionamento del sito e non richiedono il
                    consenso dell&apos;utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
                  </p>
                </div>
              </div>

              {/* ═══════════════ 4. Come Gestire i Cookie ═══════════════ */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-4">
                  4. Come Gestire i Cookie
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-6">
                  Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni
                  del tuo browser.
                </p>

                <h3 className="font-heading font-bold text-dark text-base mb-4">
                  Disabilitare i cookie tramite il browser:
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="font-body text-sm text-muted leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">&rsaquo;</span>
                    <span>
                      <strong className="text-dark">Google Chrome:</strong> Impostazioni &rarr; Privacy e sicurezza &rarr; Cookie e altri dati dei siti
                    </span>
                  </li>
                  <li className="font-body text-sm text-muted leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">&rsaquo;</span>
                    <span>
                      <strong className="text-dark">Mozilla Firefox:</strong> Preferenze &rarr; Privacy e sicurezza &rarr; Cookie e dati dei siti web
                    </span>
                  </li>
                  <li className="font-body text-sm text-muted leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">&rsaquo;</span>
                    <span>
                      <strong className="text-dark">Safari:</strong> Preferenze &rarr; Privacy &rarr; Cookie e dati dei siti web
                    </span>
                  </li>
                  <li className="font-body text-sm text-muted leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-0.5 shrink-0">&rsaquo;</span>
                    <span>
                      <strong className="text-dark">Microsoft Edge:</strong> Impostazioni &rarr; Cookie e autorizzazioni del sito &rarr; Gestisci e elimina cookie
                    </span>
                  </li>
                </ul>

                {/* Warning */}
                <div className="bg-red-50 border-l-4 border-red-500 p-5">
                  <p className="font-body text-muted text-sm leading-relaxed">
                    <strong className="text-dark">Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la
                    qualità dell&apos;esperienza di navigazione.
                  </p>
                </div>
              </div>

              {/* ═══════════════ 5. Link a Siti Esterni ═══════════════ */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-4">
                  5. Link a Siti Esterni
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed">
                  Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o
                  il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
                </p>
              </div>

              {/* ═══════════════ 6. Aggiornamenti della Cookie Policy ═══════════════ */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-4">
                  6. Aggiornamenti della Cookie Policy
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-4">
                  Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate
                  attraverso un avviso pubblicato su questa pagina.
                </p>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed">
                  Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull&apos;utilizzo dei cookie sul nostro
                  sito.
                </p>
              </div>

              {/* ═══════════════ 7. Base Normativa ═══════════════ */}
              <div className="mb-12">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-4">
                  7. Base Normativa
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-4">
                  Questa Cookie Policy è redatta in conformità a:
                </p>
                <ul className="space-y-2">
                  <li className="font-body text-sm text-muted leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">&bull;</span>
                    <span>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</span>
                  </li>
                  <li className="font-body text-sm text-muted leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">&bull;</span>
                    <span>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</span>
                  </li>
                  <li className="font-body text-sm text-muted leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">&bull;</span>
                    <span>Provvedimento del Garante per la protezione dei dati personali dell&apos;8 maggio 2014, n. 229</span>
                  </li>
                  <li className="font-body text-sm text-muted leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1 shrink-0">&bull;</span>
                    <span>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</span>
                  </li>
                </ul>
              </div>

              {/* ═══════════════ 8. Contatti ═══════════════ */}
              <div className="mb-6">
                <h2 className="font-heading font-bold text-dark text-xl md:text-2xl mb-4">
                  8. Contatti
                </h2>
                <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-6">
                  Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:
                </p>

                {/* Company data box */}
                <div className="border border-dark/10 p-6 md:p-8">
                  <h3 className="font-heading font-bold text-dark text-base mb-4">{siteData.name}</h3>
                  <div className="space-y-2 font-body text-sm text-muted">
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {siteData.contact.address.street}, {siteData.contact.address.cap} {siteData.contact.address.city} ({siteData.contact.address.province})
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      Email:{' '}
                      <a href={`mailto:${siteData.contact.email}`} className="text-accent hover:text-accent-dark transition-colors">
                        {siteData.contact.email}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      Tel:{' '}
                      <a href={`tel:${siteData.contact.phoneRaw}`} className="text-accent hover:text-accent-dark transition-colors">
                        {siteData.contact.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                      </svg>
                      P.IVA: {siteData.piva}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* ═══════════════ Zero Tracciamento Badge ═══════════════ */}
            <div className="mt-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-green-500 mb-4">
                <svg className="w-9 h-9 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-dark text-lg mb-2">Zero Tracciamento</h3>
              <p className="font-body text-muted text-sm leading-relaxed max-w-md">
                Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.
              </p>
            </div>

            {/* ═══════════════ Navigation Buttons ═══════════════ */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 py-4 border-2 border-dark/15 font-heading font-bold text-[11px] uppercase tracking-[0.15em] text-dark hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Torna alla Home
              </Link>
              <Link
                to="/privacy"
                className="flex items-center justify-center gap-2 py-4 border-2 border-dark/15 font-heading font-bold text-[11px] uppercase tracking-[0.15em] text-dark hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Leggi la Privacy Policy
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
