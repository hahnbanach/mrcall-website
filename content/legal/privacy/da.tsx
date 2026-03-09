import { CONTACT } from '@/lib/constants';

export default function PrivacyDA() {
  return (
    <>
      <h1 className="text-4xl font-bold text-brand-black mb-2">Privatlivspolitik for MrCall</h1>
      <p className="text-brand-black/50 text-sm mb-12">Sidst opdateret: 27. februar 2026</p>

      <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
        <p>MrCall indsamler visse personoplysninger fra sine brugere.</p>
        <p>Dette dokument kan udskrives ved hj&aelig;lp af udskriftsfunktionen i enhver browsers indstillinger.</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mt-0">Anvendelsesomr&aring;de</h2>
          <p>Denne politik g&aelig;lder for:</p>
          <ol className="list-[lower-alpha] ps-6 space-y-2">
            <li><strong>MrCall.ai-webstedet (&ldquo;Webstedet&rdquo;):</strong> almindelig browsing, kontaktformularer, registrering og informationsindhold.</li>
            <li><strong>MrCall-tjenesten (&ldquo;Platformen&rdquo; eller &ldquo;Tjenesten&rdquo;):</strong> brugerkonti, assistentstyring, telefonopkald, integrationer (f.eks. Google Calendar), betalinger, tale- og tekstfunktioner, planl&aelig;gning og automatiseringer.</li>
          </ol>
          <p>Medmindre andet er angivet, henviser referencer i afsnittet om webstedet udelukkende til navigation p&aring; webstedet; referencer i afsnittet om tjenesten henviser udelukkende til brug af tjenesten.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Dataansvarlig</h2>
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
          <p>E-mailadresse p&aring; den dataansvarlige: <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Typer af indsamlede data</h2>
          <p>Blandt de personoplysninger, der indsamles af MrCall, enten selvst&aelig;ndigt eller via tredjeparter, er: sporingsv&aelig;rkt&oslash;jer; brugsdata; e-mail; antal brugere; sessionsstatistik; betalingsoplysninger; efternavn; faktureringsadresse; k&oslash;bshistorik.</p>
          <p>Fuldst&aelig;ndige oplysninger om hver type personoplysninger, der indsamles, findes i de dedikerede afsnit i denne privatlivspolitik eller via specifikke informationstekster, der vises, f&oslash;r dataene indsamles. Personoplysninger kan frit afgives af brugeren, eller i tilf&aelig;lde af brugsdata indsamles automatisk under brugen af MrCall. Medmindre andet er angivet, er alle data, som MrCall anmoder om, obligatoriske. Hvis brugeren n&aelig;gter at meddele dem, kan det v&aelig;re umuligt for MrCall at levere tjenesten. I tilf&aelig;lde hvor MrCall angiver visse data som valgfrie, kan brugerne frit undlade at meddele s&aring;danne data, uden at dette har nogen konsekvens for tjenestens tilg&aelig;ngelighed eller funktion. Brugere, der er i tvivl om, hvilke data der er obligatoriske, opfordres til at kontakte den dataansvarlige.</p>
          <p>Enhver brug af cookies &mdash; eller andre sporingsv&aelig;rkt&oslash;jer &mdash; fra MrCall eller fra ejerne af tredjepartstjenester, der anvendes af MrCall, har til form&aring;l at levere den tjeneste, som brugeren har anmodet om, ud over de andre form&aring;l, der er beskrevet i dette dokument og i cookiepolitikken. Brugeren p&aring;tager sig ansvaret for personoplysninger om tredjeparter, der er indhentet, offentliggjort eller delt via MrCall.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Metode og sted for behandling af indsamlede data</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Behandlingsm&aring;de</h3>
          <p>Den dataansvarlige tr&aelig;ffer passende sikkerhedsforanstaltninger for at forhindre uautoriseret adgang, videregivelse, &aelig;ndring eller &oslash;del&aelig;ggelse af personoplysninger. Behandlingen udf&oslash;res ved hj&aelig;lp af IT- og/eller telematiske v&aelig;rkt&oslash;jer med organisatoriske metoder og logik, der er strengt relateret til de angivne form&aring;l. Ud over den dataansvarlige kan andre parter, der er involveret i organisationen af MrCall (administrative, kommercielle, marketing-, juridiske og systemadministratorer) eller eksterne parter (s&aring;som tredjeparts tekniske tjenesteudbydere, postkurerer, hostingudbydere, IT-virksomheder, kommunikationsbureauer), i visse tilf&aelig;lde have adgang til dataene og kan om n&oslash;dvendigt udpeges som databehandlere af den dataansvarlige. Den opdaterede liste over databehandlere kan altid rekvireres hos den dataansvarlige.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Placering</h3>
          <p>Dataene behandles p&aring; den dataansvarliges driftskontorer og ethvert andet sted, hvor de parter, der er involveret i behandlingen, befinder sig. For yderligere oplysninger bedes du kontakte den dataansvarlige. Brugerens personoplysninger kan overf&oslash;res til et andet land end det, hvori brugeren befinder sig. For yderligere oplysninger om behandlingsstedet kan brugeren henvise til afsnittet om detaljerne i behandlingen af personoplysninger.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Opbevaringsperiode</h3>
          <p>Medmindre andet er angivet i dette dokument, behandles og opbevares personoplysninger i den tid, der kr&aelig;ves af det form&aring;l, hvortil de blev indsamlet, og kan opbevares i en l&aelig;ngere periode p&aring; grund af eventuelle juridiske forpligtelser eller baseret p&aring; brugernes samtykke.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Databehandlere og leverand&oslash;rer</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Websted</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Hosting og CDN:</strong> SiteGround Hosting Ltd. (United Kingdom/EU).</li>
            <li><strong>Tag- og statistikstyring:</strong> som anf&oslash;rt i afsnittene om tagstyring og statistik.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">MrCall-tjenesten</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Cloud-infrastruktur og lagring:</strong> Amazon Web Services (AWS), Google Cloud, Scaleway (fortrinsvis datacentre i Den Europ&aelig;iske Union, hvor det er muligt).</li>
            <li><strong>AI-behandling af tale- og tekstfunktioner:</strong> OpenAI (LLM/STT/TTS-modeller, hvor det er relevant), ElevenLabs (TTS). AI-behandlingstjenester integreres via API i &ldquo;zero data retention&rdquo;-tilstand eller med specifikke aftaler, der kategorisk udelukker brug af brugerens tekst- eller taledata til tr&aelig;ning, forbedring eller finjustering af deres kunstige intelligensmodeller.</li>
            <li><strong>Betalinger:</strong> Stripe Technology Europe Ltd.</li>
          </ul>
          <p>Alle leverand&oslash;rer er bundet af databehandleraftaler, der overholder GDPR. Ved eventuelle overf&oslash;rsler til lande uden for E&Oslash;S anvendes standardkontraktbestemmelser og passende supplerende foranstaltninger.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Form&aring;l med behandlingen af indsamlede data</h2>
          <p>Brugerdata indsamles for at g&oslash;re det muligt for ejeren at levere tjenesten, overholde juridiske forpligtelser, besvare anmodninger eller h&aring;ndh&aelig;velsesforanstaltninger, beskytte sine rettigheder og interesser (eller brugernes eller tredjeparters), identificere eventuelle ondsindede eller svigagtige aktiviteter samt til f&oslash;lgende form&aring;l: oprettelse og administration af MrCall; statistik; tagstyring; betalingsstyring; visning af indhold fra eksterne platforme; hosting og backend-infrastruktur.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Detaljer om behandlingen af personoplysninger</h2>
          <p>Personoplysninger indsamles til f&oslash;lgende form&aring;l og ved brug af f&oslash;lgende tjenester.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Oprettelse og administration af MrCall</h3>
          <p>Hovedkomponenterne i MrCall oprettes og administreres direkte af ejeren ved brug af den nedenfor n&aelig;vnte software.</p>

          <h4 className="text-base font-bold text-brand-black mt-4">Data frivilligt afgivet af brugeren</h4>
          <p>Brugere af tjenesten kan afgive deres personoplysninger for at f&aring; adgang til visse tjenester. Dette indeb&aelig;rer, at virksomheden erhverver f&oslash;lgende kategorier af personoplysninger vedr&oslash;rende brugere:</p>
          <ol className="list-[lower-alpha] ps-6 space-y-2">
            <li>brugernavn og e-mailadresse;</li>
            <li>oplysninger om personer, der kontakter brugeren og efterlader en besked hos tjenesten, s&aring;som deres telefonnummer og det navn, de har opgivet til assistenten. Disse oplysninger er n&oslash;dvendige for at levere tjenesten og for at informere brugeren om, hvem der ringede og efterlod en besked;</li>
            <li>Brugeren kan anvende funktionen til upload af kontakter og give MrCall telefonnumrene i sin adressebog. Kontaktoplysninger bruges udelukkende til at meddele brugeren navnet, som det er gemt i adressebogen, p&aring; den, der ringer.</li>
          </ol>

          <h4 className="text-base font-bold text-brand-black mt-4">Sletning af brugerdata</h4>
          <p>Alle data vedr&oslash;rende brugeren slettes to uger efter, at brugeren har anmodet om sletning af sin konto.</p>

          <h4 className="text-base font-bold text-brand-black mt-4">Sletning af brugerens kontaktdata</h4>
          <p>Brugeren kan til enhver tid slette alle kontakter, der er registreret p&aring; deres MrCall-konto.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Betalingsstyring</h3>
          <p>Medmindre andet er angivet, behandler MrCall alle betalinger via kreditkort, bankoverf&oslash;rsel eller andre midler gennem eksterne betalingstjenesteudbydere. Generelt og medmindre andet er angivet, bliver brugerne bedt om at angive betalingsoplysninger og personlige oplysninger direkte til s&aring;danne betalingstjenesteudbydere. MrCall er ikke involveret i indsamlingen og behandlingen af s&aring;danne oplysninger; i stedet modtager den kun en meddelelse fra den p&aring;g&aelig;ldende betalingstjenesteudbyder om den vellykkede betaling.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Stripe</strong> (Stripe Technology Europe Ltd) &mdash; Behandlede personoplysninger: efternavn; k&oslash;bshistorik; faktureringsadresse; betalingsoplysninger. Behandlingssted: Den Europ&aelig;iske Union.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Tagstyring</h3>
          <p>Denne type tjeneste er funktionel for den centraliserede styring af tags eller scripts, der anvendes p&aring; MrCall. Brugen af s&aring;danne tjenester indeb&aelig;rer, at brugerdata str&oslash;mmer gennem dem og, hvor det er relevant, opbevares af dem.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Google Tag Manager</strong> (Google Ireland Limited) &mdash; Behandlede personoplysninger: sporingsv&aelig;rkt&oslash;jer. Behandlingssted: Irland.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Hosting og backend-infrastruktur</h3>
          <p>Disse typer tjenester har til funktion at hoste data og filer, der g&oslash;r det muligt for MrCall at fungere, muligg&oslash;re dets distribution og tilbyde en f&aelig;rdig infrastruktur til at levere specifikke MrCall-funktioner. Nogle af de tjenester, der er anf&oslash;rt nedenfor, kan k&oslash;re p&aring; geografisk fordelte servere, hvilket g&oslash;r det vanskeligt at bestemme den faktiske placering, hvor personoplysninger opbevares.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>SiteGround Hosting</strong> (SiteGround Hosting Ltd.) &mdash; Behandlede personoplysninger: brugsdata; sporingsv&aelig;rkt&oslash;jer. Behandlingssted: United Kingdom.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Statistik</h3>
          <p>Tjenesterne i dette afsnit g&oslash;r det muligt at overv&aring;ge og analysere trafikdata og spore brugeradf&aelig;rd.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Google Analytics (Universal Analytics)</strong> &mdash; Google Ireland Limited. Behandlede personoplysninger: brugsdata; sporingsv&aelig;rkt&oslash;jer. Behandlingssted: Irland.</li>
            <li><strong>Google Analytics 4</strong> &mdash; Google Ireland Limited. I GA4 bruges IP-adresser p&aring; indsamlingstidspunktet og slettes derefter f&oslash;r registrering. Behandlede personoplysninger: brugsdata; antal brugere; sessionsstatistik; sporingsv&aelig;rkt&oslash;jer. Behandlingssted: Irland.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Visning af indhold fra eksterne platforme</h3>
          <p>Denne type tjeneste g&oslash;r det muligt at se indhold hostet p&aring; eksterne platforme direkte fra MrCalls sider og interagere med det.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>YouTube Video Widget</strong> &mdash; Google Ireland Limited. Behandlede personoplysninger: brugsdata; sporingsv&aelig;rkt&oslash;jer. Behandlingssted: Irland.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Oplysninger om, hvordan man frav&aelig;lger interessebaserede annoncer</h2>
          <p>Ud over eventuelle frameldingsfunktioner, der tilbydes af de tjenester, der er anf&oslash;rt i dette dokument, kan brugere l&aelig;se mere om, hvordan man frav&aelig;lger interessebaserede annoncer i det relevante afsnit i cookiepolitikken.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Cookiepolitik</h2>
          <p>MrCall anvender sporingsv&aelig;rkt&oslash;jer. For at l&aelig;re mere kan brugerne konsultere <a href="/cookie-policy" className="text-brand-blue hover:underline">cookiepolitikken</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Yderligere oplysninger for brugere</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Retsgrundlag for behandlingen</h3>
          <p>Den dataansvarlige behandler personoplysninger vedr&oslash;rende brugeren, hvis en af f&oslash;lgende betingelser er opfyldt: brugeren har givet samtykke til et eller flere specifikke form&aring;l; behandlingen er n&oslash;dvendig for opfyldelsen af en kontrakt med brugeren og/eller gennemf&oslash;relsen af pr&aelig;kontraktuelle foranstaltninger; behandlingen er n&oslash;dvendig for at opfylde en retlig forpligtelse, som den dataansvarlige er underlagt; behandlingen er n&oslash;dvendig for udf&oslash;relsen af en opgave i offentlighedens interesse eller for ud&oslash;velse af offentlig myndighed, som den dataansvarlige er tillagt; behandlingen er n&oslash;dvendig for at forfremme den dataansvarliges eller tredjeparters legitime interesser. Det er dog altid muligt at bede den dataansvarlige om at pr&aelig;cisere det konkrete retsgrundlag for hver behandling.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Yderligere oplysninger om opbevaringstid</h3>
          <p>Medmindre andet er angivet i dette dokument, behandles og opbevares personoplysninger i den tid, der kr&aelig;ves af det form&aring;l, hvortil de blev indsamlet, og kan opbevares i en l&aelig;ngere periode p&aring; grund af eventuelle juridiske forpligtelser eller baseret p&aring; brugernes samtykke.</p>
          <p>Derfor: personoplysninger indsamlet til form&aring;l relateret til opfyldelsen af en kontrakt mellem den dataansvarlige og brugeren opbevares, indtil opfyldelsen af den p&aring;g&aelig;ldende kontrakt er afsluttet; personoplysninger indsamlet til form&aring;l relateret til den dataansvarliges legitime interesse opbevares, indtil denne interesse er opfyldt. N&aring;r behandlingen er baseret p&aring; brugerens samtykke, kan den dataansvarlige opbevare personoplysningerne i en l&aelig;ngere periode, indtil et s&aring;dant samtykke tilbagekaldes. Desuden kan den dataansvarlige v&aelig;re forpligtet til at opbevare personoplysninger i en l&aelig;ngere periode for at overholde en retlig forpligtelse eller efter p&aring;l&aelig;g fra en myndighed. Ved udl&oslash;bet af opbevaringsperioden slettes personoplysningerne.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Brugerrettigheder i henhold til GDPR</h3>
          <p>Brugeren kan inden for lovens rammer: tilbagekalde samtykke; g&oslash;re indsigelse mod behandling; f&aring; adgang til sine data; anmode om berigtigelse; opn&aring; begr&aelig;nsning af behandling; opn&aring; sletning; modtage sine data eller f&aring; dem overf&oslash;rt til en anden dataansvarlig (dataportabilitet); indgive en klage til den kompetente tilsynsmyndighed.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Detaljer om retten til indsigelse</h3>
          <p>N&aring;r personoplysninger behandles i offentlighedens interesse, under ud&oslash;velse af offentlig myndighed eller for at forf&oslash;lge en legitim interesse hos den dataansvarlige, kan brugeren g&oslash;re indsigelse mod behandlingen af grunde, der vedr&oslash;rer vedkommendes s&aelig;rlige situation. Hvis dataene behandles med henblik p&aring; direkte markedsf&oslash;ring, kan brugeren til enhver tid og gratis g&oslash;re indsigelse; i s&aring; fald vil dataene ikke l&aelig;ngere blive behandlet til dette form&aring;l.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">S&aring;dan ud&oslash;ver du dine rettigheder</h3>
          <p>Enhver anmodning kan rettes til den dataansvarlige ved hj&aelig;lp af de kontaktoplysninger, der er angivet i dette dokument. Anmodningen er gratis, og den dataansvarlige vil svare s&aring; hurtigt som muligt og under alle omst&aelig;ndigheder inden for &eacute;n m&aring;ned med alle de oplysninger, der kr&aelig;ves i henhold til loven.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Yderligere oplysninger om behandlingen</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Juridisk forsvar</h3>
          <p>Brugerens personoplysninger kan anvendes af den dataansvarlige i retten eller i de forberedende stadier af eventuelle retssager for at forsvare sig mod misbrug i brugen af MrCall eller relaterede tjenester fra brugerens side. Brugeren erkl&aelig;rer at v&aelig;re bevidst om, at den dataansvarlige kan v&aelig;re forpligtet til at videregive dataene efter p&aring;l&aelig;g fra offentlige myndigheder.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Specifikke oplysninger</h3>
          <p>P&aring; brugerens anmodning kan MrCall ud over de oplysninger, der er indeholdt i denne privatlivspolitik, give yderligere og kontekstuelle oplysninger vedr&oslash;rende specifikke tjenester eller indsamling og behandling af personoplysninger.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Systemlogfiler og vedligeholdelse</h3>
          <p>Til drifts- og vedligeholdelsesform&aring;l kan MrCall og eventuelle tredjepartstjenester, det anvender, indsamle systemlogfiler, dvs. filer, der registrerer interaktioner og ogs&aring; kan indeholde personoplysninger s&aring;som brugerens IP-adresse.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Oplysninger, der ikke er indeholdt i denne politik</h3>
          <p>Yderligere oplysninger vedr&oslash;rende behandlingen af personoplysninger kan til enhver tid rekvireres hos den dataansvarlige ved brug af de angivne kontaktoplysninger.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">&AElig;ndringer af denne privatlivspolitik</h3>
          <p>Den dataansvarlige forbeholder sig retten til at foretage &aelig;ndringer i denne privatlivspolitik til enhver tid ved at underrette brugerne p&aring; denne side og, hvis muligt, p&aring; MrCall, samt, hvor det er teknisk og juridisk muligt, ved at sende en meddelelse til brugerne via en af de kontaktoplysninger, som den er i besiddelse af. Hvis &aelig;ndringerne p&aring;virker behandlingsaktiviteter, hvis retsgrundlag er samtykke, vil den dataansvarlige indhente brugerens samtykke igen, hvis det er n&oslash;dvendigt.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Integration med Google Calendar</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Omfanget af behandlede Google-data</h3>
          <p>Dette afsnit g&aelig;lder udelukkende for brugere, der forbinder en Google-konto til MrCall-tjenesten. MrCall tilg&aring;r brugerdata via OAuth 2.0 udelukkende for at levere synkroniserings- og aftalestyringsfunktioner i Google Calendar. MrCall kan navnlig l&aelig;se ledig/optaget-status og oprette, redigere eller slette begivenheder i den kalender, som brugeren har forbundet. MrCall tilg&aring;r ikke e-mailindhold, kontakter eller andre Google-data, der ikke er n&oslash;dvendige for det f&oslash;rn&aelig;vnte form&aring;l.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Deling, overf&oslash;rsel og videregivelse af Google-data</h3>
          <p>MrCall s&aelig;lger, udlejer eller deler ikke brugerdata fra Google med tredjeparter til reklame-, markedsf&oslash;rings-, analyse- eller profileringsform&aring;l. Deling er begr&aelig;nset til f&oslash;lgende tilf&aelig;lde:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li>teknisk infrastruktur og hostingudbydere (f.eks. AWS, Google Cloud, Scaleway og webstedets hostingudbyder), udelukkende med det form&aring;l at levere tjenesten og i overensstemmelse med databehandleraftaler, der overholder GDPR;</li>
            <li>juridiske forpligtelser eller legitime anmodninger fra de kompetente myndigheder.</li>
          </ul>
          <p>Google Calendar-data videregives ikke til forretningspartnere eller tredjeparter uden for de ovenfor angivne tilf&aelig;lde. MrCall deler brugerdata fra Google udelukkende med infrastruktur- og hostingudbydere (AWS, Google Cloud, Scaleway, SiteGround) udelukkende med det form&aring;l at levere tjenesten. Ingen Google-brugerdata s&aelig;lges, overf&oslash;res eller deles med tredjeparter til reklame-, markedsf&oslash;rings- eller analyseform&aring;l.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Sikkerhed og beskyttelse af Google-data</h3>
          <p>Hahn Banach LLC tr&aelig;ffer passende tekniske og organisatoriske foranstaltninger for at beskytte Google-data mod uautoriseret adgang, &aelig;ndring eller videregivelse, herunder:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li>Al kommunikation med Google API&apos;er foreg&aring;r via krypterede HTTPS/TLS-kanaler.</li>
            <li>OAuth 2.0-tokens (adgangs- og opdateringstokens) opbevares krypteret i virksomhedens PostgreSQL-database.</li>
            <li>Adgang til databasen er begr&aelig;nset til autoriseret DevOps-personale.</li>
            <li>Omg&aring;ende sletning af tokens og tilh&oslash;rende synkroniseringsdata, n&aring;r brugeren sletter sin MrCall-konto eller tilbagekalder adgangen fra Google.</li>
            <li>Behandling af kalenderindhold i flygtig hukommelse udelukkende i den tid, der er strengt n&oslash;dvendig for at levere funktionaliteten, uden vedvarende lagring af begivenhedsindhold.</li>
            <li>Infrastruktur hostet i datacentre beliggende i Den Europ&aelig;iske Union og i overensstemmelse med sikkerhedsstandarder s&aring;som ISO/IEC 27001.</li>
          </ul>
          <p>Derudover anvender MrCall kryptering af f&oslash;lsomme data i hvile (AES-256), anvender adgangskontroller baseret p&aring; princippet om mindste privilegium og overv&aring;ger konstant eventuelle fors&oslash;g p&aring; uautoriseret adgang. Data opbevares i europ&aelig;iske datacentre, der overholder ISO/IEC 27001- og GDPR-standarder.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Begr&aelig;nset brug af Google-data</h3>
          <p>MrCalls brug af oplysninger modtaget fra Google API&apos;er overholder <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, herunder de relevante regler for begr&aelig;nset brug. Google Calendar-data bruges ikke til reklame, profilering, adf&aelig;rdsanalyse eller tr&aelig;ning af kunstige intelligensmodeller.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Tilbagekaldelse af adgang og opbevaring</h3>
          <p>Brugeren kan til enhver tid tilbagekalde adgangen til Google Calendar fra sine Google-kontoindstillinger. I tilf&aelig;lde af tilbagekaldelse eller sletning af MrCall-kontoen vil tokens og synkroniseringsdata blive permanent slettet inden for en rimelig tidsramme, der er n&oslash;dvendig for den tekniske gennemf&oslash;relse af handlingen.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Yderligere oplysninger</h3>
          <p>For afklaring af Googles databehandling eller for at ud&oslash;ve dine privatlivsrettigheder kan du kontakte den dataansvarlige p&aring; <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Definitioner og juridiske referencer</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Personoplysninger (eller data)</h3>
          <p>Enhver oplysning, der direkte eller indirekte, ogs&aring; i forbindelse med enhver anden oplysning, herunder et personnummer, identificerer eller g&oslash;r en fysisk person identificerbar.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Brugsdata</h3>
          <p>Oplysninger indsamlet automatisk via MrCall (herunder fra integrerede tredjepartsapplikationer), herunder: IP-adresser eller dom&aelig;nenavne p&aring; computere, som brugeren anvender, URI-adresser, tidspunkt for anmodningen, metode anvendt til at videresende anmodningen til serveren, st&oslash;rrelsen af den fil, der opn&aring;s som svar, numerisk kode, der angiver status for svaret fra serveren, oprindelsesland, karakteristika for browseren og operativsystemet, som den bes&oslash;gende anvender, tidspunktet for bes&oslash;get og detaljer om ruten inden for applikationen.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Bruger</h3>
          <p>Den person, der bruger MrCall, og som, medmindre andet er angivet, er den samme som den registrerede.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Registreret</h3>
          <p>Den fysiske person, som personoplysningerne vedr&oslash;rer.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Databehandler (eller behandler)</h3>
          <p>Den fysiske eller juridiske person, offentlige myndighed og ethvert andet organ, der behandler personoplysninger p&aring; vegne af den dataansvarlige.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Dataansvarlig (eller ansvarlig)</h3>
          <p>Den fysiske eller juridiske person, der bestemmer form&aring;lene med og midlerne til behandling af personoplysninger. Medmindre andet er angivet, er den dataansvarlige ejeren af MrCall.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">MrCall (eller denne applikation)</h3>
          <p>Det hardware- eller softwarev&aelig;rkt&oslash;j, der bruges til at indsamle og behandle brugernes personoplysninger.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Tjeneste</h3>
          <p>Den tjeneste, der leveres af MrCall som defineret i de relevante vilk&aring;r p&aring; dette websted/denne applikation.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Den Europ&aelig;iske Union (eller EU)</h3>
          <p>Enhver reference skal forst&aring;s som g&aelig;ldende for alle nuv&aelig;rende medlemsstater i Den Europ&aelig;iske Union og Det Europ&aelig;iske &Oslash;konomiske Samarbejdsomr&aring;de.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cookies</h3>
          <p>Sporingsv&aelig;rkt&oslash;jer best&aring;ende af sm&aring; dataelementer, der gemmes i brugerens browser.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Sporingsv&aelig;rkt&oslash;j</h3>
          <p>Enhver teknologi (cookies, unikke identifikatorer, web beacons, indlejrede scripts, e-tags, fingerprinting), der g&oslash;r det muligt at spore brugere.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Juridiske referencer</h3>
          <p>Medmindre andet er angivet, g&aelig;lder denne privatlivspolitik udelukkende for MrCall. MrCall er et registreret varem&aelig;rke.</p>
        </section>
      </div>
    </>
  );
}
