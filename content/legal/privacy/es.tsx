import { CONTACT } from '@/lib/constants';

export default function PrivacyES() {
  return (
    <>
      <h1 className="text-4xl font-bold text-brand-black mb-2">Política de Privacidad de MrCall</h1>
      <p className="text-brand-black/50 text-sm mb-12">Última actualización: 27 de febrero de 2026</p>

      <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
        <p>MrCall recopila algunos Datos Personales de sus Usuarios.</p>
        <p>Este documento se puede imprimir utilizando el comando de impresión que se encuentra en la configuración de cualquier navegador.</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mt-0">Ámbito de Aplicación</h2>
          <p>Esta política se aplica a:</p>
          <ol className="list-[lower-alpha] ps-6 space-y-2">
            <li><strong>Sitio web MrCall.ai (el &ldquo;Sitio&rdquo;):</strong> navegación, formularios de contacto, registro y contenido informativo.</li>
            <li><strong>Servicio MrCall (la &ldquo;Plataforma&rdquo; o el &ldquo;Servicio&rdquo;):</strong> cuentas de usuario, gestión de asistentes, llamadas telefónicas, integraciones (p. ej., Google Calendar), pagos, funciones de voz y texto, programación y automatizaciones.</li>
          </ol>
          <p>Salvo que se especifique lo contrario, las referencias en la sección del Sitio Web se refieren exclusivamente a la navegación en el Sitio Web; las referencias en la sección del Servicio se refieren exclusivamente al uso del Servicio.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Responsable del Tratamiento</h2>
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
          <p>Dirección de correo electrónico del Responsable del Tratamiento: <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Tipos de Datos Recopilados</h2>
          <p>Entre los Datos Personales recopilados por MrCall, ya sea de forma independiente o a través de terceros, se encuentran: Herramientas de Seguimiento; Datos de Uso; correo electrónico; número de Usuarios; estadísticas de sesión; información de pago; apellido; dirección de facturación; historial de compras.</p>
          <p>Los detalles completos sobre cada tipo de Dato Personal recopilado se proporcionan en las secciones dedicadas de esta política de privacidad o mediante textos informativos específicos mostrados antes de la recopilación de los Datos. Los Datos Personales pueden ser proporcionados libremente por el Usuario o, en el caso de los Datos de Uso, recopilados automáticamente durante el uso de MrCall. Salvo que se especifique lo contrario, todos los Datos solicitados por MrCall son obligatorios. Si el Usuario se niega a comunicarlos, puede resultar imposible para MrCall proporcionar el Servicio. En los casos en que MrCall indique ciertos Datos como opcionales, los Usuarios son libres de abstenerse de comunicar dichos Datos, sin que ello tenga consecuencia alguna sobre la disponibilidad del Servicio o su funcionamiento. Los Usuarios que tengan dudas sobre qué Datos son obligatorios pueden contactar al Responsable del Tratamiento.</p>
          <p>Cualquier uso de Cookies &mdash; u otras herramientas de seguimiento &mdash; por parte de MrCall o de los titulares de servicios de terceros utilizados por MrCall tiene como finalidad proporcionar el Servicio solicitado por el Usuario, además de las otras finalidades descritas en este documento y en la Política de Cookies. El Usuario asume la responsabilidad de los Datos Personales de terceros obtenidos, publicados o compartidos a través de MrCall.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Método y Lugar del Tratamiento de los Datos Recopilados</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Modalidades de Tratamiento</h3>
          <p>El Responsable del Tratamiento adopta las medidas de seguridad adecuadas para prevenir el acceso no autorizado, la divulgación, la modificación o la destrucción de los Datos Personales. El tratamiento se lleva a cabo mediante herramientas informáticas y/o telemáticas, con métodos organizativos y lógicas estrictamente relacionadas con las finalidades indicadas. Además del Responsable del Tratamiento, en algunos casos, otras partes involucradas en la organización de MrCall (administrativas, comerciales, de marketing, legales, administradores de sistemas) o partes externas (como proveedores de servicios técnicos de terceros, servicios de mensajería postal, proveedores de alojamiento, empresas informáticas, agencias de comunicación) pueden tener acceso a los Datos, designados también, si fuera necesario, como Encargados del Tratamiento por el Responsable del Tratamiento. La lista actualizada de Encargados puede solicitarse en cualquier momento al Responsable del Tratamiento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Ubicación</h3>
          <p>Los Datos se tratan en las oficinas operativas del Responsable del Tratamiento y en cualquier otro lugar donde se encuentren las partes involucradas en el tratamiento. Para más información, póngase en contacto con el Responsable del Tratamiento. Los Datos Personales del Usuario pueden ser transferidos a un país distinto de aquel en el que se encuentra el Usuario. Para más información sobre el lugar del tratamiento, el Usuario puede consultar la sección sobre los detalles del tratamiento de Datos Personales.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Período de Conservación</h3>
          <p>Salvo que se indique lo contrario en este documento, los Datos Personales se tratan y conservan durante el tiempo requerido por la finalidad para la que fueron recopilados y pueden conservarse durante un período más prolongado debido a obligaciones legales o en base al consentimiento de los Usuarios.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Encargados del Tratamiento y Proveedores</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Sitio Web</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Alojamiento y CDN:</strong> SiteGround Hosting Ltd. (Reino Unido/UE).</li>
            <li><strong>Gestión de etiquetas y estadísticas:</strong> según las secciones de Gestión de Etiquetas y Estadísticas.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Servicio MrCall</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Infraestructura en la nube y almacenamiento:</strong> Amazon Web Services (AWS), Google Cloud, Scaleway (preferiblemente centros de datos en la Unión Europea, cuando sea posible).</li>
            <li><strong>Procesamiento de IA para funciones de voz y texto:</strong> OpenAI (modelos LLM/STT/TTS cuando corresponda), ElevenLabs (TTS). Los servicios de procesamiento de IA se integran mediante API en modo &ldquo;retención cero de datos&rdquo; o con acuerdos específicos que excluyen categóricamente el uso de cualquier dato de texto o voz del Usuario para el entrenamiento, la mejora o el ajuste fino de sus modelos de inteligencia artificial.</li>
            <li><strong>Pagos:</strong> Stripe Technology Europe Ltd.</li>
          </ul>
          <p>Todos los proveedores están vinculados por acuerdos de tratamiento de datos que cumplen con el RGPD. Para cualquier transferencia a países fuera del EEE, se adoptan Cláusulas Contractuales Tipo y las medidas adicionales apropiadas.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Finalidades del Tratamiento de los Datos Recopilados</h2>
          <p>Los Datos del Usuario se recopilan para permitir al Titular proporcionar el Servicio, cumplir con las obligaciones legales, responder a solicitudes o acciones de ejecución, proteger sus derechos e intereses (o los de los Usuarios o terceros), identificar cualquier actividad maliciosa o fraudulenta, y para las siguientes finalidades: Creación y gestión de MrCall; Estadísticas; Gestión de etiquetas; Gestión de pagos; Visualización de contenido de plataformas externas; Alojamiento e infraestructura de backend.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Detalles del Tratamiento de Datos Personales</h2>
          <p>Los Datos Personales se recopilan para las siguientes finalidades y utilizando los siguientes servicios.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Creación y Gestión de MrCall</h3>
          <p>Los componentes principales de MrCall son creados y gestionados directamente por el Titular haciendo uso del software mencionado a continuación.</p>

          <h4 className="text-base font-bold text-brand-black mt-4">Datos Proporcionados Voluntariamente por el Usuario</h4>
          <p>Los usuarios del servicio pueden proporcionar sus datos personales para acceder a determinados servicios. Esto implica que la Empresa adquiere las siguientes categorías de datos personales relativos a los Usuarios:</p>
          <ol className="list-[lower-alpha] ps-6 space-y-2">
            <li>nombre de usuario y dirección de correo electrónico;</li>
            <li>información sobre las personas que contactan al Usuario y dejan un mensaje en el servicio, como su número de teléfono y el nombre proporcionado al asistente. Esta información es necesaria para proporcionar el servicio e informar al Usuario sobre quién llamó y dejó un mensaje;</li>
            <li>El Usuario puede utilizar la función de carga de contactos y proporcionar a MrCall los números de teléfono de su agenda. La información de contacto se utiliza exclusivamente para comunicar al Usuario el nombre, tal como está guardado en la agenda, de la persona que llamó.</li>
          </ol>

          <h4 className="text-base font-bold text-brand-black mt-4">Eliminación de Datos del Usuario</h4>
          <p>Todos los datos relativos al Usuario se eliminan dos semanas después de que el Usuario haya solicitado la eliminación de su cuenta.</p>

          <h4 className="text-base font-bold text-brand-black mt-4">Eliminación de Datos de Contacto del Usuario</h4>
          <p>El Usuario puede eliminar todos los contactos registrados en su cuenta de MrCall en cualquier momento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Gestión de Pagos</h3>
          <p>Salvo que se especifique lo contrario, MrCall procesa todos los pagos con tarjeta de crédito, transferencia bancaria u otros medios a través de proveedores de servicios de pago externos. En general, y salvo que se especifique lo contrario, se solicita a los Usuarios que proporcionen los datos de pago e información personal directamente a dichos proveedores de servicios de pago. MrCall no participa en la recopilación y el tratamiento de dicha información: en su lugar, solo recibirá una notificación del proveedor de servicios de pago correspondiente sobre el pago exitoso.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Stripe</strong> (Stripe Technology Europe Ltd) &mdash; Datos Personales tratados: apellido; historial de compras; dirección de facturación; información de pago. Lugar de tratamiento: Unión Europea.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Gestión de Etiquetas</h3>
          <p>Este tipo de servicio es funcional para la gestión centralizada de etiquetas o scripts utilizados en MrCall. El uso de dichos servicios implica el flujo de Datos del Usuario a través de ellos y, cuando corresponda, su conservación.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Google Tag Manager</strong> (Google Ireland Limited) &mdash; Datos Personales tratados: Herramientas de Seguimiento. Lugar de tratamiento: Irlanda.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Alojamiento e Infraestructura de Backend</h3>
          <p>Estos tipos de servicios tienen la función de alojar Datos y archivos que permiten el funcionamiento de MrCall, posibilitan su distribución y proporcionan una infraestructura lista para ofrecer funcionalidades específicas de MrCall. Algunos de los servicios entre los que se enumeran a continuación, si los hay, pueden funcionar en servidores distribuidos geográficamente, lo que dificulta la determinación de la ubicación real donde se almacenan los Datos Personales.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>SiteGround Hosting</strong> (SiteGround Hosting Ltd.) &mdash; Datos Personales Tratados: Datos de Uso; Herramientas de Seguimiento. Lugar de tratamiento: Reino Unido.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Estadísticas</h3>
          <p>Los servicios contenidos en esta sección permiten monitorizar y analizar los datos de tráfico y realizar un seguimiento del comportamiento de los usuarios.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Google Analytics (Universal Analytics)</strong> &mdash; Google Ireland Limited. Datos Personales Tratados: Datos de Uso; Herramientas de Seguimiento. Lugar de tratamiento: Irlanda.</li>
            <li><strong>Google Analytics 4</strong> &mdash; Google Ireland Limited. En GA4, las direcciones IP se utilizan en el momento de la recopilación y luego se eliminan antes del registro. Datos Personales tratados: Datos de uso; número de Usuarios; estadísticas de sesión; Herramientas de Seguimiento. Lugar de tratamiento: Irlanda.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Visualización de Contenido de Plataformas Externas</h3>
          <p>Este tipo de servicio permite visualizar contenido alojado en plataformas externas directamente desde las páginas de MrCall e interactuar con él.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>YouTube Video Widget</strong> &mdash; Google Ireland Limited. Datos Personales Tratados: Datos de Uso; Herramientas de Seguimiento. Lugar de tratamiento: Irlanda.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Información sobre Cómo Desactivar los Anuncios Basados en Intereses</h2>
          <p>Además de las funciones de exclusión proporcionadas por cualquiera de los servicios enumerados en este documento, los Usuarios pueden obtener más información sobre cómo desactivar los anuncios basados en intereses en la sección correspondiente de la Política de Cookies.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Política de Cookies</h2>
          <p>MrCall utiliza Herramientas de Seguimiento. Para obtener más información, los Usuarios pueden consultar la <a href="/cookie-policy" className="text-brand-blue hover:underline">Política de Cookies</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Más Información para los Usuarios</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Base Jurídica del Tratamiento</h3>
          <p>El Responsable del Tratamiento trata los Datos Personales relativos al Usuario si se cumple una de las siguientes condiciones: el Usuario ha dado su consentimiento para una o más finalidades específicas; el tratamiento es necesario para la ejecución de un contrato con el Usuario y/o la ejecución de medidas precontractuales; el tratamiento es necesario para cumplir una obligación legal a la que está sujeto el Responsable del Tratamiento; el tratamiento es necesario para el cumplimiento de una misión de interés público o para el ejercicio de poderes públicos conferidos al Responsable del Tratamiento; el tratamiento es necesario para la satisfacción del interés legítimo del Responsable del Tratamiento o de terceros. No obstante, siempre es posible solicitar al Responsable que aclare la base jurídica concreta de cada tratamiento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Información Adicional sobre el Tiempo de Conservación</h3>
          <p>Salvo que se indique lo contrario en este documento, los Datos Personales se tratan y conservan durante el tiempo requerido por la finalidad para la que fueron recopilados y pueden conservarse durante un período más prolongado debido a obligaciones legales o en base al consentimiento de los Usuarios.</p>
          <p>Por lo tanto: los Datos Personales recopilados para finalidades relacionadas con la ejecución de un contrato entre el Responsable del Tratamiento y el Usuario se conservarán hasta que se complete la ejecución de dicho contrato; los Datos Personales recopilados para finalidades relacionadas con el interés legítimo del Responsable del Tratamiento se conservarán hasta que se satisfaga dicho interés. Cuando el tratamiento se base en el consentimiento del Usuario, el Responsable del Tratamiento podrá conservar los Datos Personales durante un período más prolongado hasta que dicho consentimiento sea revocado. Además, el Responsable del Tratamiento puede estar obligado a conservar los Datos Personales durante un período más prolongado para cumplir con una obligación legal o por orden de una autoridad. Al final del período de conservación, los Datos Personales serán eliminados.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Derechos del Usuario en virtud del RGPD</h3>
          <p>El Usuario puede, dentro de los límites previstos por la ley: retirar el consentimiento; oponerse al tratamiento; acceder a sus Datos; solicitar la rectificación; obtener la limitación del tratamiento; obtener la supresión; recibir sus Datos o hacer que se transfieran a otro responsable (portabilidad); presentar una reclamación ante la autoridad de control competente.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Detalles sobre el Derecho de Oposición</h3>
          <p>Cuando los Datos Personales se tratan en interés público, en el ejercicio de poderes públicos o para perseguir un interés legítimo del Responsable del Tratamiento, el Usuario puede oponerse al tratamiento por motivos relacionados con su situación particular. Si los Datos se tratan con fines de marketing directo, el Usuario puede oponerse en cualquier momento y de forma gratuita; en este caso, los Datos dejarán de tratarse para esta finalidad.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cómo Ejercer Sus Derechos</h3>
          <p>Cualquier solicitud puede dirigirse al Responsable del Tratamiento utilizando los datos de contacto proporcionados en este documento. La solicitud es gratuita y el Responsable del Tratamiento responderá lo antes posible, y en cualquier caso dentro de un mes, proporcionando toda la información requerida por la ley.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Más Información sobre el Tratamiento</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Defensa Legal</h3>
          <p>Los Datos Personales del Usuario pueden ser utilizados por el Responsable del Tratamiento en juicio o en las fases preparatorias de cualquier procedimiento legal para defenderse contra el uso indebido de MrCall o de los Servicios relacionados por parte del Usuario. El Usuario declara ser consciente de que el Responsable del Tratamiento puede estar obligado a revelar los Datos por orden de las autoridades públicas.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Información Específica</h3>
          <p>A petición del Usuario, además de la información contenida en esta política de privacidad, MrCall puede proporcionar información adicional y contextual relativa a Servicios específicos, o a la recopilación y tratamiento de Datos Personales.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Registros del Sistema y Mantenimiento</h3>
          <p>Con fines operativos y de mantenimiento, MrCall y cualquier servicio de terceros que utilice pueden recopilar registros del sistema, es decir, archivos que registran las interacciones y que también pueden contener Datos Personales, como la dirección IP del Usuario.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Información No Contenida en Esta Política</h3>
          <p>Se puede solicitar información adicional sobre el tratamiento de Datos Personales en cualquier momento al Responsable del Tratamiento utilizando los datos de contacto proporcionados.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cambios en Esta Política de Privacidad</h3>
          <p>El Responsable del Tratamiento se reserva el derecho de realizar cambios en esta política de privacidad en cualquier momento, notificando a los Usuarios en esta página y, si es posible, en MrCall, así como, cuando sea técnica y legalmente posible, enviando una notificación a los Usuarios a través de uno de los datos de contacto en su posesión. Si los cambios afectan a operaciones de tratamiento cuya base jurídica es el consentimiento, el Responsable del Tratamiento recopilará nuevamente el consentimiento del Usuario, si fuera necesario.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Integración con Google Calendar</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Alcance de los Datos de Google Tratados</h3>
          <p>Esta sección se aplica exclusivamente a los Usuarios que conectan una cuenta de Google al Servicio MrCall. MrCall accede a los datos del Usuario mediante OAuth 2.0 exclusivamente para proporcionar funciones de sincronización y gestión de citas en Google Calendar. En particular, MrCall puede leer el estado de disponibilidad y crear, editar o eliminar eventos en el calendario conectado por el Usuario. MrCall no accede al contenido del correo electrónico, los contactos u otros datos de Google que no sean necesarios para la finalidad mencionada.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Compartición, Transferencia y Divulgación de Datos de Google</h3>
          <p>MrCall no vende, alquila ni comparte los datos del Usuario de Google con terceros con fines publicitarios, de marketing, analíticos o de elaboración de perfiles. La compartición se limita a los siguientes casos:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li>proveedores de infraestructura técnica y alojamiento (p. ej., AWS, Google Cloud, Scaleway, y el proveedor de alojamiento del sitio web), estrictamente con el fin de proporcionar el servicio y de conformidad con acuerdos de tratamiento de datos que cumplen con el RGPD;</li>
            <li>obligaciones legales o solicitudes legítimas de las autoridades competentes.</li>
          </ul>
          <p>Los datos de Google Calendar no se divulgan a socios comerciales ni a terceros fuera de los casos indicados anteriormente. MrCall comparte los datos del Usuario de Google exclusivamente con proveedores de infraestructura y alojamiento (AWS, Google Cloud, Scaleway, SiteGround) estrictamente con el fin de proporcionar el servicio. Ningún dato de Usuario de Google se vende, transfiere o comparte con terceros con fines publicitarios, de marketing o de análisis.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Seguridad y Protección de los Datos de Google</h3>
          <p>Hahn Banach LLC adopta las medidas técnicas y organizativas adecuadas para proteger los datos de Google contra el acceso no autorizado, la modificación o la divulgación, incluyendo:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li>Todas las comunicaciones con las API de Google se realizan a través de canales cifrados HTTPS/TLS.</li>
            <li>Los tokens OAuth 2.0 (de acceso y de actualización) se almacenan cifrados en la base de datos PostgreSQL de la empresa.</li>
            <li>El acceso a la base de datos está restringido exclusivamente al personal autorizado de DevOps.</li>
            <li>Eliminación inmediata de tokens y datos de sincronización asociados cuando el Usuario elimina su cuenta de MrCall o revoca el acceso desde Google.</li>
            <li>Procesamiento del contenido del calendario en memoria volátil únicamente durante el tiempo estrictamente necesario para proporcionar la funcionalidad, sin almacenamiento persistente del contenido de los eventos.</li>
            <li>Infraestructura alojada en centros de datos ubicados en la Unión Europea y que cumplen con estándares de seguridad como ISO/IEC 27001.</li>
          </ul>
          <p>Además, MrCall aplica cifrado de datos sensibles en reposo (AES-256), adopta controles de acceso basados en el principio de privilegio mínimo y monitoriza constantemente cualquier intento de acceso no autorizado. Los datos se almacenan en centros de datos europeos que cumplen con los estándares ISO/IEC 27001 y RGPD.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Uso Limitado de los Datos de Google</h3>
          <p>El uso que MrCall hace de la información recibida de las API de Google cumple con la <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Política de Datos de Usuario de los Servicios de API de Google</a>, incluidas las reglas de Uso Limitado pertinentes. Los datos de Google Calendar no se utilizan con fines publicitarios, de elaboración de perfiles, de análisis de comportamiento ni para el entrenamiento de modelos de inteligencia artificial.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Revocación del Acceso y Conservación</h3>
          <p>El Usuario puede revocar el acceso a Google Calendar en cualquier momento desde la configuración de su cuenta de Google. En caso de revocación o cancelación de la cuenta de MrCall, los tokens y los datos de sincronización se eliminarán permanentemente dentro de un plazo razonable necesario para la propagación técnica de la operación.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Información Adicional</h3>
          <p>Para aclaraciones sobre el tratamiento de los datos de Google o para ejercer sus derechos de privacidad, puede contactar al Responsable del Tratamiento en <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Definiciones y Referencias Legales</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Datos Personales (o Datos)</h3>
          <p>Cualquier información que, directa o indirectamente, incluso en relación con cualquier otra información, incluido un número de identificación personal, identifica o hace identificable a una persona física.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Datos de Uso</h3>
          <p>Información recopilada automáticamente a través de MrCall (incluidas las aplicaciones de terceros integradas), que incluye: direcciones IP o nombres de dominio de los ordenadores utilizados por el Usuario, direcciones URI, hora de la solicitud, método utilizado para enviar la solicitud al servidor, tamaño del archivo obtenido en respuesta, código numérico que indica el estado de la respuesta del servidor, país de origen, características del navegador y del sistema operativo utilizado por el visitante, hora de la visita y detalles de la ruta seguida dentro de la Aplicación.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Usuario</h3>
          <p>La persona que utiliza MrCall, quien, salvo que se especifique lo contrario, es la misma que el Interesado.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Interesado</h3>
          <p>La persona física a la que se refieren los Datos Personales.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Encargado del Tratamiento</h3>
          <p>La persona física o jurídica, administración pública y cualquier otro organismo que trate datos personales por cuenta del Responsable del Tratamiento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Responsable del Tratamiento</h3>
          <p>La persona física o jurídica que determina las finalidades y los medios del tratamiento de datos personales. Salvo que se especifique lo contrario, el Responsable del Tratamiento es el titular de MrCall.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">MrCall (o esta Aplicación)</h3>
          <p>La herramienta de hardware o software utilizada para recopilar y tratar los Datos Personales de los Usuarios.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Servicio</h3>
          <p>El servicio proporcionado por MrCall según se define en los términos correspondientes en este sitio web/aplicación.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Unión Europea (o UE)</h3>
          <p>Cualquier referencia se entenderá aplicable a todos los estados miembros actuales de la Unión Europea y del Espacio Económico Europeo.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cookies</h3>
          <p>Herramientas de Seguimiento que consisten en pequeños fragmentos de datos almacenados en el navegador del Usuario.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Herramienta de Seguimiento</h3>
          <p>Cualquier tecnología (cookies, identificadores únicos, balizas web, scripts integrados, e-tags, huella digital) que permita el seguimiento de los Usuarios.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Referencias Legales</h3>
          <p>Salvo que se especifique lo contrario, esta política de privacidad se aplica exclusivamente a MrCall. MrCall es una marca registrada.</p>
        </section>
      </div>
    </>
  );
}
