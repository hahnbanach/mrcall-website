import { CONTACT } from '@/lib/constants';

export default function PrivacyIT() {
  return (
    <>
      <h1 className="text-4xl font-bold text-brand-black mb-2">Informativa sulla Privacy di MrCall</h1>
      <p className="text-brand-black/50 text-sm mb-12">Ultimo aggiornamento: 27 febbraio 2026</p>

      <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
        <p>MrCall raccoglie alcuni Dati Personali dai propri Utenti.</p>
        <p>Questo documento può essere stampato utilizzando il comando di stampa presente nelle impostazioni di qualsiasi browser.</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mt-0">Ambito di Applicazione</h2>
          <p>La presente informativa si applica a:</p>
          <ol className="list-[lower-alpha] ps-6 space-y-2">
            <li><strong>Sito web MrCall.ai (il &ldquo;Sito&rdquo;):</strong> semplice navigazione, moduli di contatto, registrazione e contenuti informativi.</li>
            <li><strong>Servizio MrCall (la &ldquo;Piattaforma&rdquo; o il &ldquo;Servizio&rdquo;):</strong> account utente, gestione degli assistenti, telefonate, integrazioni (ad es. Google Calendar), pagamenti, funzionalità vocali e testuali, pianificazione e automazioni.</li>
          </ol>
          <p>Salvo diversa indicazione, i riferimenti nella sezione Sito Web si riferiscono esclusivamente alla navigazione sul Sito Web; i riferimenti nella sezione Servizio si riferiscono esclusivamente all&apos;utilizzo del Servizio.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Titolare del Trattamento dei Dati</h2>
          <p>
            Hahn Banach LLC<br />
            2093 Philadelphia Pike #5034<br />
            Claymont, DE 19703<br />
            United States
          </p>
          <p>
            Via Pasquale Sottocorno 17<br />
            20129 Milan<br />
            Italy
          </p>
          <p>VAT number IT11619040964</p>
          <p>Indirizzo email del Titolare del Trattamento: <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Tipologie di Dati Raccolti</h2>
          <p>Fra i Dati Personali raccolti da MrCall, in modo autonomo o tramite terze parti, ci sono: Strumenti di Tracciamento; Dati di Utilizzo; email; numero di Utenti; statistiche delle sessioni; informazioni di pagamento; cognome; indirizzo di fatturazione; cronologia degli acquisti.</p>
          <p>I dettagli completi su ciascuna tipologia di Dati Personali raccolti sono forniti nelle sezioni dedicate della presente informativa sulla privacy o mediante specifici testi informativi visualizzati prima della raccolta dei Dati. I Dati Personali possono essere liberamente forniti dall&apos;Utente o, nel caso dei Dati di Utilizzo, raccolti automaticamente durante l&apos;uso di MrCall. Salvo diversa indicazione, tutti i Dati richiesti da MrCall sono obbligatori. Se l&apos;Utente rifiuta di comunicarli, potrebbe essere impossibile per MrCall fornire il Servizio. Nei casi in cui MrCall indichi determinati Dati come facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza sulla disponibilità del Servizio o sul suo funzionamento. Gli Utenti che avessero dubbi su quali Dati siano obbligatori sono invitati a contattare il Titolare del Trattamento.</p>
          <p>Qualsiasi utilizzo di Cookie &mdash; o di altri strumenti di tracciamento &mdash; da parte di MrCall o dei titolari dei servizi di terze parti utilizzati da MrCall ha la finalità di fornire il Servizio richiesto dall&apos;Utente, oltre alle ulteriori finalità descritte nel presente documento e nella Cookie Policy. L&apos;Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi tramite MrCall.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Modalità e Luogo del Trattamento dei Dati Raccolti</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Modalità di Trattamento</h3>
          <p>Il Titolare del Trattamento adotta le opportune misure di sicurezza volte ad impedire l&apos;accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare del Trattamento, in alcuni casi, potrebbero avere accesso ai Dati altri soggetti coinvolti nell&apos;organizzazione di MrCall (personale amministrativo, commerciale, marketing, legale, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, provider di hosting, società informatiche, agenzie di comunicazione) nominati anche, se necessario, Responsabili del Trattamento da parte del Titolare. L&apos;elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Luogo</h3>
          <p>I Dati sono trattati presso le sedi operative del Titolare del Trattamento e in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, si prega di contattare il Titolare del Trattamento. I Dati Personali dell&apos;Utente potrebbero essere trasferiti in un Paese diverso da quello in cui l&apos;Utente si trova. Per ulteriori informazioni sul luogo del trattamento, l&apos;Utente può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Periodo di Conservazione</h3>
          <p>Se non diversamente indicato nel presente documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo in ottemperanza ad eventuali obblighi di legge o sulla base del consenso degli Utenti.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Responsabili del Trattamento e Fornitori</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Sito Web</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Hosting e CDN:</strong> SiteGround Hosting Ltd. (Regno Unito/UE).</li>
            <li><strong>Gestione dei tag e statistiche:</strong> come indicato nelle sezioni Gestione dei Tag e Statistiche.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Servizio MrCall</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Infrastruttura cloud e archiviazione:</strong> Amazon Web Services (AWS), Google Cloud, Scaleway (preferibilmente data center nell&apos;Unione Europea, ove possibile).</li>
            <li><strong>Elaborazione AI per funzionalità vocali e testuali:</strong> OpenAI (modelli LLM/STT/TTS ove applicabili), ElevenLabs (TTS). I servizi di elaborazione AI sono integrati tramite API in modalità &ldquo;zero data retention&rdquo; o con accordi specifici che escludono categoricamente l&apos;uso di qualsiasi dato testuale o vocale dell&apos;Utente per l&apos;addestramento, il miglioramento o il fine-tuning dei propri modelli di intelligenza artificiale.</li>
            <li><strong>Pagamenti:</strong> Stripe Technology Europe Ltd.</li>
          </ul>
          <p>Tutti i fornitori sono vincolati da accordi sul trattamento dei dati conformi al GDPR. Per eventuali trasferimenti verso Paesi al di fuori dello SEE, vengono adottate le Clausole Contrattuali Standard e le opportune misure supplementari.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Finalità del Trattamento dei Dati Raccolti</h2>
          <p>I Dati dell&apos;Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti e interessi (o quelli degli Utenti o di terzi), individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità: Creazione e gestione di MrCall; Statistiche; Gestione dei tag; Gestione dei pagamenti; Visualizzazione di contenuti da piattaforme esterne; Hosting e infrastruttura backend.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Dettagli sul Trattamento dei Dati Personali</h2>
          <p>I Dati Personali sono raccolti per le seguenti finalità e utilizzando i seguenti servizi.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Creazione e Gestione di MrCall</h3>
          <p>I componenti principali di MrCall sono creati e gestiti direttamente dal Titolare avvalendosi dei software di seguito indicati.</p>

          <h4 className="text-base font-bold text-brand-black mt-4">Dati Forniti Volontariamente dall&apos;Utente</h4>
          <p>Gli Utenti del servizio possono fornire i propri dati personali per accedere a determinati servizi. Ciò comporta l&apos;acquisizione da parte della Società delle seguenti categorie di dati personali relativi agli Utenti:</p>
          <ol className="list-[lower-alpha] ps-6 space-y-2">
            <li>nome utente e indirizzo email;</li>
            <li>informazioni sulle persone che contattano l&apos;Utente e lasciano un messaggio tramite il servizio, come il numero di telefono e il nome comunicato all&apos;assistente. Queste informazioni sono necessarie per fornire il servizio e per informare l&apos;Utente su chi ha chiamato e lasciato un messaggio;</li>
            <li>L&apos;Utente può utilizzare la funzione di caricamento dei contatti e fornire a MrCall i numeri di telefono presenti nella propria rubrica. Le informazioni di contatto sono utilizzate esclusivamente per comunicare all&apos;Utente il nome, così come salvato nella rubrica, del chiamante.</li>
          </ol>

          <h4 className="text-base font-bold text-brand-black mt-4">Cancellazione dei Dati dell&apos;Utente</h4>
          <p>Tutti i dati relativi all&apos;Utente vengono cancellati due settimane dopo che l&apos;Utente ha richiesto la cancellazione del proprio account.</p>

          <h4 className="text-base font-bold text-brand-black mt-4">Cancellazione dei Dati di Contatto dell&apos;Utente</h4>
          <p>L&apos;Utente può cancellare tutti i contatti registrati sul proprio account MrCall in qualsiasi momento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Gestione dei Pagamenti</h3>
          <p>Salvo diversa indicazione, MrCall elabora tutti i pagamenti tramite carta di credito, bonifico bancario o altri mezzi attraverso fornitori di servizi di pagamento esterni. In generale, e salvo diversa indicazione, gli Utenti sono pregati di fornire i dettagli di pagamento e le informazioni personali direttamente a tali fornitori di servizi di pagamento. MrCall non è coinvolta nella raccolta e nel trattamento di tali informazioni: riceverà invece solo una notifica dal fornitore di servizi di pagamento in questione sull&apos;avvenuto pagamento.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Stripe</strong> (Stripe Technology Europe Ltd) &mdash; Dati Personali trattati: cognome; cronologia degli acquisti; indirizzo di fatturazione; informazioni di pagamento. Luogo del trattamento: Unione Europea.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Gestione dei Tag</h3>
          <p>Questo tipo di servizio è funzionale alla gestione centralizzata dei tag o degli script utilizzati su MrCall. L&apos;utilizzo di tali servizi comporta il flusso dei Dati dell&apos;Utente attraverso gli stessi e, ove applicabile, la loro conservazione.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Google Tag Manager</strong> (Google Ireland Limited) &mdash; Dati Personali trattati: Strumenti di Tracciamento. Luogo del trattamento: Irlanda.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Hosting e Infrastruttura Backend</h3>
          <p>Questo tipo di servizi ha la funzione di ospitare Dati e file che permettono a MrCall di funzionare, ne consentono la distribuzione e mettono a disposizione un&apos;infrastruttura pronta per erogare specifiche funzionalità di MrCall. Alcuni dei servizi tra quelli elencati di seguito, se presenti, possono funzionare su server geograficamente distribuiti, rendendo difficile determinare la posizione effettiva in cui i Dati Personali vengono conservati.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>SiteGround Hosting</strong> (SiteGround Hosting Ltd.) &mdash; Dati Personali Trattati: Dati di Utilizzo; Strumenti di Tracciamento. Luogo del trattamento: Regno Unito.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Statistiche</h3>
          <p>I servizi contenuti nella presente sezione permettono di monitorare e analizzare i dati di traffico e di tracciare il comportamento dell&apos;Utente.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Google Analytics (Universal Analytics)</strong> &mdash; Google Ireland Limited. Dati Personali Trattati: Dati di Utilizzo; Strumenti di Tracciamento. Luogo del trattamento: Irlanda.</li>
            <li><strong>Google Analytics 4</strong> &mdash; Google Ireland Limited. In GA4, gli indirizzi IP vengono utilizzati al momento della raccolta e poi eliminati prima della registrazione. Dati Personali trattati: Dati di utilizzo; numero di Utenti; statistiche delle sessioni; Strumenti di Tracciamento. Luogo del trattamento: Irlanda.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Visualizzazione di Contenuti da Piattaforme Esterne</h3>
          <p>Questo tipo di servizio permette di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di MrCall e di interagire con essi.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>YouTube Video Widget</strong> &mdash; Google Ireland Limited. Dati Personali Trattati: Dati di Utilizzo; Strumenti di Tracciamento. Luogo del trattamento: Irlanda.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Informazioni su Come Disattivare gli Annunci Pubblicitari Basati sugli Interessi</h2>
          <p>Oltre a qualsiasi funzione di opt-out offerta dai servizi elencati nel presente documento, gli Utenti possono approfondire come disattivare gli annunci pubblicitari basati sugli interessi nell&apos;apposita sezione della Cookie Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Cookie Policy</h2>
          <p>MrCall fa uso di Strumenti di Tracciamento. Per saperne di più, gli Utenti possono consultare la <a href="/cookie-policy" className="text-brand-blue hover:underline">Cookie Policy</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Ulteriori Informazioni per gli Utenti</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Base Giuridica del Trattamento</h3>
          <p>Il Titolare del Trattamento tratta i Dati Personali relativi all&apos;Utente in presenza di una delle seguenti condizioni: l&apos;Utente ha prestato il consenso per una o più finalità specifiche; il trattamento è necessario all&apos;esecuzione di un contratto con l&apos;Utente e/o all&apos;esecuzione di misure precontrattuali; il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare del Trattamento; il trattamento è necessario per l&apos;esecuzione di un compito di interesse pubblico o per l&apos;esercizio di pubblici poteri di cui è investito il Titolare del Trattamento; il trattamento è necessario per il perseguimento del legittimo interesse del Titolare del Trattamento o di terzi. È comunque sempre possibile chiedere al Titolare di chiarire la concreta base giuridica di ciascun trattamento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Ulteriori Informazioni sul Periodo di Conservazione</h3>
          <p>Se non diversamente indicato nel presente documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo in ottemperanza ad eventuali obblighi di legge o sulla base del consenso degli Utenti.</p>
          <p>Pertanto: i Dati Personali raccolti per finalità connesse all&apos;esecuzione di un contratto tra il Titolare e l&apos;Utente saranno conservati sino a quando sia completata l&apos;esecuzione di tale contratto; i Dati Personali raccolti per finalità riconducibili all&apos;interesse legittimo del Titolare saranno conservati sino al soddisfacimento di tale interesse. Quando il trattamento è basato sul consenso dell&apos;Utente, il Titolare può conservare i Dati Personali più a lungo fino alla revoca di detto consenso. Inoltre, il Titolare potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo in ottemperanza ad un obbligo di legge o per ordine di un&apos;autorità. Al termine del periodo di conservazione, i Dati Personali saranno cancellati.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Diritti dell&apos;Utente ai sensi del GDPR</h3>
          <p>L&apos;Utente può, nei limiti previsti dalla legge: revocare il consenso; opporsi al trattamento; accedere ai propri Dati; richiedere la rettifica; ottenere la limitazione del trattamento; ottenere la cancellazione; ricevere i propri Dati o farli trasferire ad un altro titolare (portabilità); proporre reclamo all&apos;autorità di controllo competente.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Dettagli sul Diritto di Opposizione</h3>
          <p>Quando i Dati Personali sono trattati nell&apos;interesse pubblico, nell&apos;esercizio di pubblici poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare del Trattamento, l&apos;Utente può opporsi al trattamento per motivi connessi alla propria situazione particolare. Qualora i Dati siano trattati per finalità di marketing diretto, l&apos;Utente può opporsi in qualsiasi momento e gratuitamente; in tal caso, i Dati non saranno più trattati per tale finalità.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Come Esercitare i Propri Diritti</h3>
          <p>Qualsiasi richiesta può essere indirizzata al Titolare del Trattamento utilizzando i dati di contatto indicati nel presente documento. La richiesta è gratuita e il Titolare del Trattamento risponderà nel più breve tempo possibile, e comunque entro un mese, fornendo tutte le informazioni previste dalla legge.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Ulteriori Informazioni sul Trattamento</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Difesa in Giudizio</h3>
          <p>I Dati Personali dell&apos;Utente possono essere utilizzati dal Titolare del Trattamento in sede giudiziaria o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell&apos;utilizzo di MrCall o dei Servizi connessi da parte dell&apos;Utente. L&apos;Utente dichiara di essere consapevole che il Titolare del Trattamento potrebbe essere obbligato a rivelare i Dati per ordine delle autorità pubbliche.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Informative Specifiche</h3>
          <p>Su richiesta dell&apos;Utente, in aggiunta alle informazioni contenute nella presente informativa sulla privacy, MrCall potrebbe fornire informazioni aggiuntive e contestuali riguardanti Servizi specifici, o la raccolta e il trattamento di Dati Personali.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Log di Sistema e Manutenzione</h3>
          <p>Per esigenze legate al funzionamento e alla manutenzione, MrCall e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l&apos;indirizzo IP dell&apos;Utente.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Informazioni Non Contenute in Questa Policy</h3>
          <p>Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando i dati di contatto forniti.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Modifiche alla Presente Informativa sulla Privacy</h3>
          <p>Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente informativa sulla privacy in qualsiasi momento dandone comunicazione agli Utenti su questa pagina e, se possibile, su MrCall, nonché, qualora tecnicamente e giuridicamente fattibile, inviando una notifica agli Utenti attraverso uno dei recapiti di cui è in possesso. Qualora le modifiche riguardino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell&apos;Utente, se necessario.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Integrazione con Google Calendar</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Ambito dei Dati Google Trattati</h3>
          <p>La presente sezione si applica esclusivamente agli Utenti che collegano un account Google al Servizio MrCall. MrCall accede ai dati dell&apos;Utente tramite OAuth 2.0 esclusivamente per fornire funzionalità di sincronizzazione e gestione degli appuntamenti su Google Calendar. In particolare, MrCall può leggere lo stato libero/occupato e creare, modificare o eliminare eventi nel calendario collegato dall&apos;Utente. MrCall non accede al contenuto delle email, ai contatti o ad altri dati Google non necessari alla suddetta finalità.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Condivisione, Trasferimento e Divulgazione dei Dati Google</h3>
          <p>MrCall non vende, noleggia o condivide i dati dell&apos;Utente provenienti da Google con terze parti per finalità pubblicitarie, di marketing, analisi o profilazione. La condivisione è limitata ai seguenti casi:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li>fornitori di infrastruttura tecnica e hosting (ad es. AWS, Google Cloud, Scaleway e il provider di hosting del sito web), strettamente per la finalità di erogazione del servizio e in conformità con accordi sul trattamento dei dati conformi al GDPR;</li>
            <li>obblighi di legge o richieste legittime da parte delle autorità competenti.</li>
          </ul>
          <p>I dati di Google Calendar non vengono divulgati a partner commerciali o terze parti al di fuori dei casi sopra indicati. MrCall condivide i dati dell&apos;Utente provenienti da Google esclusivamente con fornitori di infrastruttura e hosting (AWS, Google Cloud, Scaleway, SiteGround) strettamente per la finalità di erogazione del servizio. Nessun dato dell&apos;Utente Google viene venduto, trasferito o condiviso con terze parti per finalità pubblicitarie, di marketing o di analisi.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Sicurezza e Protezione dei Dati Google</h3>
          <p>Hahn Banach LLC adotta misure tecniche e organizzative appropriate per proteggere i dati Google da accessi non autorizzati, modifiche o divulgazione, tra cui:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li>Tutte le comunicazioni con le API di Google avvengono tramite canali crittografati HTTPS/TLS.</li>
            <li>I token OAuth 2.0 (access e refresh) sono conservati crittografati nel database PostgreSQL aziendale.</li>
            <li>L&apos;accesso al database è limitato esclusivamente al personale DevOps autorizzato.</li>
            <li>Cancellazione immediata dei token e dei dati di sincronizzazione associati quando l&apos;Utente elimina il proprio account MrCall o revoca l&apos;accesso da Google.</li>
            <li>Elaborazione del contenuto del calendario esclusivamente in memoria volatile per il tempo strettamente necessario a fornire la funzionalità, senza archiviazione persistente del contenuto degli eventi.</li>
            <li>Infrastruttura ospitata in data center situati nell&apos;Unione Europea e conformi a standard di sicurezza quali ISO/IEC 27001.</li>
          </ul>
          <p>Inoltre, MrCall applica la crittografia dei dati sensibili a riposo (AES-256), adotta controlli di accesso basati sul principio del privilegio minimo e monitora costantemente eventuali tentativi di accesso non autorizzato. I dati sono conservati in data center europei conformi agli standard ISO/IEC 27001 e GDPR.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Uso Limitato dei Dati Google</h3>
          <p>L&apos;utilizzo da parte di MrCall delle informazioni ricevute dalle API di Google è conforme alla <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, incluse le relative regole di Uso Limitato. I dati di Google Calendar non vengono utilizzati per pubblicità, profilazione, analisi comportamentale o addestramento di modelli di intelligenza artificiale.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Revoca dell&apos;Accesso e Conservazione</h3>
          <p>L&apos;Utente può revocare l&apos;accesso a Google Calendar in qualsiasi momento dalle impostazioni del proprio account Google. In caso di revoca o cancellazione dell&apos;account MrCall, i token e i dati di sincronizzazione saranno eliminati definitivamente entro un ragionevole lasso di tempo necessario alla propagazione tecnica dell&apos;operazione.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Ulteriori Informazioni</h3>
          <p>Per chiarimenti sul trattamento dei dati di Google o per esercitare i propri diritti in materia di privacy, è possibile contattare il Titolare del Trattamento all&apos;indirizzo <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Definizioni e Riferimenti Legali</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Dati Personali (o Dati)</h3>
          <p>Qualsiasi informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Dati di Utilizzo</h3>
          <p>Informazioni raccolte automaticamente attraverso MrCall (anche da applicazioni di terze parti integrate), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall&apos;Utente, gli indirizzi in notazione URI, l&apos;orario della richiesta, il metodo utilizzato nell&apos;inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server, il Paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, l&apos;orario della visita e i dettagli del percorso seguito all&apos;interno dell&apos;Applicazione.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Utente</h3>
          <p>L&apos;individuo che utilizza MrCall che, salvo ove diversamente specificato, coincide con l&apos;Interessato.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Interessato</h3>
          <p>La persona fisica a cui si riferiscono i Dati Personali.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Responsabile del Trattamento (o Responsabile)</h3>
          <p>La persona fisica o giuridica, l&apos;amministrazione pubblica e qualsiasi altro ente che tratti dati personali per conto del Titolare del Trattamento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Titolare del Trattamento (o Titolare)</h3>
          <p>La persona fisica o giuridica che determina le finalità e i mezzi del trattamento dei dati personali. Salvo diversa indicazione, il Titolare del Trattamento è il proprietario di MrCall.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">MrCall (o questa Applicazione)</h3>
          <p>Lo strumento hardware o software tramite il quale sono raccolti e trattati i Dati Personali degli Utenti.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Servizio</h3>
          <p>Il Servizio fornito da MrCall così come definito nei relativi termini su questo sito web/applicazione.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Unione Europea (o UE)</h3>
          <p>Ogni riferimento deve intendersi applicato a tutti gli attuali Stati membri dell&apos;Unione Europea e dello Spazio Economico Europeo.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cookie</h3>
          <p>Strumenti di Tracciamento consistenti in piccole porzioni di dati conservate all&apos;interno del browser dell&apos;Utente.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Strumento di Tracciamento</h3>
          <p>Qualsiasi tecnologia (cookie, identificativi univoci, web beacon, script incorporati, e-tag, fingerprinting) che consenta di tracciare gli Utenti.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Riferimenti Legali</h3>
          <p>Salvo diversa indicazione, la presente informativa sulla privacy riguarda esclusivamente MrCall. MrCall è un marchio registrato.</p>
        </section>
      </div>
    </>
  );
}
