import { CONTACT } from '@/lib/constants';

export default function PrivacyEN() {
  return (
    <>
      <h1 className="text-4xl font-bold text-brand-black mb-2">Privacy Policy of MrCall</h1>
      <p className="text-brand-black/50 text-sm mb-12">Last updated: February 27, 2026</p>

      <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
        <p>MrCall collects some Personal Data from its Users.</p>
        <p>This document can be printed using the print command found in the settings of any browser.</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mt-0">Scope of Application</h2>
          <p>This policy applies to:</p>
          <ol className="list-[lower-alpha] ps-6 space-y-2">
            <li><strong>MrCall.ai website (the &ldquo;Site&rdquo;):</strong> mere browsing, contact forms, registration, and informational content.</li>
            <li><strong>MrCall service (the &ldquo;Platform&rdquo; or the &ldquo;Service&rdquo;):</strong> user accounts, assistant management, phone calls, integrations (e.g., Google Calendar), payments, voice and text features, scheduling, and automations.</li>
          </ol>
          <p>Unless otherwise specified, references in the Website section refer exclusively to navigation on the Website; references in the Service section refer exclusively to use of the Service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Data Controller</h2>
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
          <p>Email address of the Data Controller: <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Types of Data Collected</h2>
          <p>Among the Personal Data collected by MrCall, either independently or through third parties, are: Tracking Tools; Usage Data; email; number of Users; session statistics; payment information; last name; billing address; purchase history.</p>
          <p>Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or through specific information texts displayed before the Data is collected. Personal Data may be freely provided by the User or, in the case of Usage Data, collected automatically during the use of MrCall. Unless otherwise specified, all Data requested by MrCall is mandatory. If the User refuses to communicate them, it may be impossible for MrCall to provide the Service. In cases where MrCall indicates certain Data as optional, Users are free to refrain from communicating such Data, without this having any consequence on the availability of the Service or its operation. Users who have doubts about which Data is mandatory are encouraged to contact the Data Controller.</p>
          <p>Any use of Cookies &mdash; or other tracking tools &mdash; by MrCall or by the owners of third-party services used by MrCall is for the purpose of providing the Service requested by the User, in addition to the other purposes described in this document and in the Cookie Policy. The User assumes responsibility for the Personal Data of third parties obtained, published, or shared through MrCall.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Method and Place of Processing of Collected Data</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Mode of Treatment</h3>
          <p>The Data Controller takes appropriate security measures to prevent unauthorized access, disclosure, modification, or destruction of Personal Data. Processing is carried out using IT and/or telematic tools, with organizational methods and logic strictly related to the purposes indicated. In addition to the Data Controller, in some cases, other parties involved in the organization of MrCall (administrative, commercial, marketing, legal, system administrators) or external parties (such as third-party technical service providers, postal couriers, hosting providers, IT companies, communication agencies) may have access to the Data, also appointed, if necessary, as Data Processors by the Data Controller. The updated list of Processors can always be requested from the Data Controller.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Location</h3>
          <p>The Data is processed at the Data Controller&apos;s operating offices and in any other place where the parties involved in the processing are located. For further information, please contact the Data Controller. The User&apos;s Personal Data may be transferred to a country other than that in which the User is located. For further information on the place of processing, the User may refer to the section on the details of the processing of Personal Data.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Retention Period</h3>
          <p>Unless otherwise stated in this document, Personal Data is processed and kept for the time required by the purpose for which it was collected and may be kept for a longer period due to any legal obligations or based on Users&apos; consent.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Processors and Suppliers</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Website</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Hosting and CDN:</strong> SiteGround Hosting Ltd. (United Kingdom/EU).</li>
            <li><strong>Tag and statistics management:</strong> as per the Tag Management and Statistics sections.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">MrCall Service</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Cloud infrastructure and storage:</strong> Amazon Web Services (AWS), Google Cloud, Scaleway (preferably data centers in the European Union, where possible).</li>
            <li><strong>AI processing for voice and text features:</strong> OpenAI (LLM/STT/TTS models where applicable), ElevenLabs (TTS). AI processing services are integrated via API in &ldquo;zero data retention&rdquo; mode or with specific agreements that categorically exclude the use of any User text or voice data for training, improving, or fine-tuning their artificial intelligence models.</li>
            <li><strong>Payments:</strong> Stripe Technology Europe Ltd.</li>
          </ul>
          <p>All suppliers are bound by data processing agreements that comply with the GDPR. For any transfers to countries outside the EEA, Standard Contractual Clauses and appropriate additional measures are adopted.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Purposes of the Processing of Collected Data</h2>
          <p>User Data is collected to enable the Owner to provide the Service, comply with legal obligations, respond to requests or enforcement actions, protect its rights and interests (or those of Users or third parties), identify any malicious or fraudulent activities, and for the following purposes: Creation and management of MrCall; Statistics; Tag management; Payment management; Display of content from external platforms; Hosting and backend infrastructure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Details of the Processing of Personal Data</h2>
          <p>Personal Data is collected for the following purposes and using the following services.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Creation and Management of MrCall</h3>
          <p>The main components of MrCall are created and managed directly by the Owner making use of the software mentioned below.</p>

          <h4 className="text-base font-bold text-brand-black mt-4">Data Voluntarily Provided by the User</h4>
          <p>Users of the service may provide their personal data to access certain services. This involves the Company acquiring the following categories of personal data relating to Users:</p>
          <ol className="list-[lower-alpha] ps-6 space-y-2">
            <li>username and email address;</li>
            <li>information about people who contact the User and leave a message with the service, such as their phone number and name given to the assistant. This information is necessary to provide the service and to inform the User who called and left a message;</li>
            <li>The User may use the contact upload function and provide MrCall with the phone numbers in their address book. Contact information is used exclusively to communicate to the User the name, as saved in the address book, of the caller.</li>
          </ol>

          <h4 className="text-base font-bold text-brand-black mt-4">Deleting User Data</h4>
          <p>All data relating to the User is deleted two weeks after the User has requested to delete their account.</p>

          <h4 className="text-base font-bold text-brand-black mt-4">Deletion of User Contact Data</h4>
          <p>The User may delete all contacts registered on their MrCall account at any time.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Payment Management</h3>
          <p>Unless otherwise specified, MrCall processes all payments by credit card, wire transfer or other means through external payment service providers. In general, and unless otherwise specified, Users are asked to provide payment details and personal information directly to such payment service providers. MrCall is not involved in the collection and processing of such information: instead, it will only receive a notification from the payment service provider in question about the successful payment.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Stripe</strong> (Stripe Technology Europe Ltd) &mdash; Personal Data processed: last name; purchase history; billing address; payment information. Place of processing: European Union.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Tag Management</h3>
          <p>This type of service is functional to the centralized management of tags or scripts used on MrCall. The use of such services involves the flow of User Data through them and, where applicable, their retention.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Google Tag Manager</strong> (Google Ireland Limited) &mdash; Personal Data processed: Tracking Tools. Place of processing: Ireland.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Hosting and Backend Infrastructure</h3>
          <p>These types of services have the function of hosting Data and files that allow MrCall to function, enable its distribution, and provide a ready-made infrastructure to deliver specific MrCall features. Some of the services among those listed below, if any, may run on geographically distributed servers, making it difficult to determine the actual location where Personal Data is stored.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>SiteGround Hosting</strong> (SiteGround Hosting Ltd.) &mdash; Personal Data Processed: Usage Data; Tracking Tools. Place of processing: United Kingdom.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Statistics</h3>
          <p>The services contained in this section allow you to monitor and analyze traffic data and track user behavior.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Google Analytics (Universal Analytics)</strong> &mdash; Google Ireland Limited. Personal Data Processed: Usage Data; Tracking Tools. Place of processing: Ireland.</li>
            <li><strong>Google Analytics 4</strong> &mdash; Google Ireland Limited. In GA4, IP addresses are used at the time of collection and then deleted before recording. Personal Data processed: Usage data; number of Users; session statistics; Tracking Tools. Place of processing: Ireland.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Viewing Content from External Platforms</h3>
          <p>This type of service allows you to view content hosted on external platforms directly from MrCall pages and interact with it.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>YouTube Video Widget</strong> &mdash; Google Ireland Limited. Personal Data Processed: Usage Data; Tracking Tools. Place of processing: Ireland.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Information on How to Turn Off Interest-Based Advertisements</h2>
          <p>In addition to any opt-out features provided by any of the services listed in this document, Users can read more about how to turn off interest-based advertisements in the appropriate section of the Cookie Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Cookie Policy</h2>
          <p>MrCall makes use of Tracking Tools. To learn more, Users may consult the <a href="/cookie-policy" className="text-brand-blue hover:underline">Cookie Policy</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">More Information for Users</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Legal Basis for Processing</h3>
          <p>The Data Controller processes Personal Data relating to the User if one of the following conditions exists: the User has given consent for one or more specific purposes; the processing is necessary for the performance of a contract with the User and/or the execution of pre-contractual measures; the processing is necessary to fulfill a legal obligation to which the Data Controller is subject; the processing is necessary for the performance of a task of public interest or for the exercise of public authority vested in the Data Controller; the processing is necessary for the pursuit of the legitimate interest of the Data Controller or third parties. However, it is always possible to ask the Controller to clarify the concrete legal basis of each processing.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Further Information on Storage Time</h3>
          <p>Unless otherwise stated in this document, Personal Data is processed and kept for the time required by the purpose for which it was collected and may be kept for a longer period due to any legal obligations or based on Users&apos; consent.</p>
          <p>Therefore: Personal Data collected for purposes related to the execution of a contract between the Data Controller and the User will be retained until the execution of that contract is completed; Personal Data collected for purposes related to the legitimate interest of the Data Controller will be retained until that interest is satisfied. When the processing is based on the User&apos;s consent, the Data Controller may retain the Personal Data for a longer period until such consent is revoked. Furthermore, the Data Controller may be obliged to retain Personal Data for a longer period in order to comply with a legal obligation or by order of an authority. At the end of the retention period, the Personal Data will be deleted.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">User Rights under the GDPR</h3>
          <p>The User may, within the limits provided for by law: withdraw consent; object to processing; access their Data; request rectification; obtain restriction of processing; obtain erasure; receive their Data or have it transferred to another controller (portability); lodge a complaint with the competent supervisory authority.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Details on the Right to Object</h3>
          <p>When Personal Data is processed in the public interest, in the exercise of public powers or to pursue a legitimate interest of the Data Controller, the User may object to the processing for reasons related to their particular situation. If the Data is processed for direct marketing purposes, the User may object at any time and free of charge; in this case, the Data will no longer be processed for this purpose.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">How to Exercise Your Rights</h3>
          <p>Any requests can be addressed to the Data Controller using the contact details provided in this document. The request is free of charge and the Data Controller will respond as quickly as possible, and in any case within one month, providing all the information required by law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">More Information about the Treatment</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Legal Defense</h3>
          <p>The User&apos;s Personal Data may be used by the Data Controller in court or in the preparatory stages of any legal proceedings to defend against abuse in the use of MrCall or related Services by the User. The User declares that they are aware that the Data Controller may be obliged to disclose the Data by order of public authorities.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Specific Information</h3>
          <p>Upon request by the User, in addition to the information contained in this privacy policy, MrCall may provide additional and contextual information concerning specific Services, or the collection and processing of Personal Data.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">System Logs and Maintenance</h3>
          <p>For operational and maintenance purposes, MrCall and any third-party services it uses may collect system logs, i.e., files that record interactions and may also contain Personal Data, such as the User&apos;s IP address.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Information Not Contained in This Policy</h3>
          <p>Further information regarding the processing of Personal Data may be requested at any time from the Data Controller using the contact details provided.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Changes to This Privacy Policy</h3>
          <p>The Data Controller reserves the right to make changes to this privacy policy at any time by notifying Users on this page and, if possible, on MrCall, as well as, where technically and legally feasible, by sending a notification to Users via one of the contact details in its possession. If the changes affect processing operations whose legal basis is consent, the Data Controller will collect the User&apos;s consent again, if necessary.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Integration with Google Calendar</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Scope of Google Data Processed</h3>
          <p>This section applies exclusively to Users who connect a Google account to the MrCall Service. MrCall accesses User data via OAuth 2.0 exclusively to provide synchronization and appointment management features on Google Calendar. In particular, MrCall can read the free/busy status and create, edit, or delete events in the calendar connected by the User. MrCall does not access email content, contacts, or other Google data that is not necessary for the aforementioned purpose.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Sharing, Transferring, and Disclosing Google Data</h3>
          <p>MrCall does not sell, rent, or share User data from Google with third parties for advertising, marketing, analytics, or profiling purposes. Sharing is limited to the following cases:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li>technical infrastructure and hosting providers (e.g., AWS, Google Cloud, Scaleway, and the website hosting provider), strictly for the purpose of providing the service and in accordance with data processing agreements that comply with the GDPR;</li>
            <li>legal obligations or legitimate requests from the competent authorities.</li>
          </ul>
          <p>Google Calendar data is not disclosed to business partners or third parties outside of the cases indicated above. MrCall shares User data from Google exclusively with infrastructure and hosting providers (AWS, Google Cloud, Scaleway, SiteGround) strictly for the purpose of providing the service. No Google User data is sold, transferred, or shared with third parties for advertising, marketing, or analysis purposes.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Google Data Security and Protection</h3>
          <p>Hahn Banach LLC takes appropriate technical and organizational measures to protect Google data from unauthorized access, modification, or disclosure, including:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li>All communications with Google APIs are conducted via encrypted HTTPS/TLS channels.</li>
            <li>OAuth 2.0 tokens (access and refresh) are stored encrypted in the company&apos;s PostgreSQL database.</li>
            <li>Access to the database is restricted to authorized DevOps personnel only.</li>
            <li>Immediate deletion of tokens and associated synchronization data when the User deletes their MrCall account or revokes access from Google.</li>
            <li>Processing of calendar content in volatile memory only for the time strictly necessary to provide the functionality, without persistent storage of event content.</li>
            <li>Infrastructure hosted in data centers located in the European Union and compliant with security standards such as ISO/IEC 27001.</li>
          </ul>
          <p>In addition, MrCall applies encryption of sensitive data at rest (AES-256), adopts access controls based on the principle of least privilege, and constantly monitors any unauthorized access attempts. Data are stored in European data centers that comply with ISO/IEC 27001 and GDPR standards.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Limited Use of Google Data</h3>
          <p>MrCall&apos;s use of information received from Google APIs complies with the <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the relevant Limited Use rules. Google Calendar data is not used for advertising, profiling, behavioral analysis, or training artificial intelligence models.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Revocation of Access and Retention</h3>
          <p>The User may revoke access to Google Calendar at any time from their Google account settings. In the event of revocation or cancellation of the MrCall account, tokens and synchronization data will be permanently deleted within a reasonable time frame necessary for the technical propagation of the operation.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Further Information</h3>
          <p>For clarification on Google&apos;s data processing or to exercise your privacy rights, you can contact the Data Controller at <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Definitions and Legal References</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Personal Data (or Data)</h3>
          <p>Any information that, directly or indirectly, even in connection with any other information, including a personal identification number, identifies or makes identifiable a natural person.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Usage Data</h3>
          <p>Information collected automatically through MrCall (including from integrated third-party applications), including: IP addresses or domain names of computers used by the User, URI addresses, time of request, method used to forward the request to the server, size of the file obtained in response, numerical code indicating the status of the response from the server, country of origin, characteristics of the browser and operating system used by the visitor, time of the visit, and details of the route taken within the Application.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">User</h3>
          <p>The individual who uses MrCall, who, unless otherwise specified, is the same as the Data Subject.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Data Subject</h3>
          <p>The natural person to whom the Personal Data refers.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Data Processor (or Processor)</h3>
          <p>The natural or legal person, public administration, and any other body that processes personal data on behalf of the Data Controller.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Data Controller (or Controller)</h3>
          <p>The natural or legal person who determines the purposes and means of personal data processing. Unless otherwise specified, the Data Controller is the owner of MrCall.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">MrCall (or this Application)</h3>
          <p>The hardware or software tool used to collect and process Users&apos; Personal Data.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Service</h3>
          <p>The service provided by MrCall as defined in the relevant terms on this website/application.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">European Union (or EU)</h3>
          <p>Any reference shall be understood to apply to all current member states of the European Union and the European Economic Area.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cookies</h3>
          <p>Tracking Tools consisting of small pieces of data stored within the User&apos;s browser.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Tracking Tool</h3>
          <p>Any technology (cookies, unique identifiers, web beacons, embedded scripts, e-tags, fingerprinting) that allows Users to be tracked.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Legal References</h3>
          <p>Unless otherwise specified, this privacy policy applies exclusively to MrCall. MrCall is a registered trademark.</p>
        </section>
      </div>
    </>
  );
}
