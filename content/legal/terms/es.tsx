import { CONTACT } from '@/lib/constants';

export default function TermsES() {
  return (
    <>
      <h1 className="text-4xl font-bold text-brand-black mb-2">Condiciones de Uso</h1>
      <p className="text-brand-black/50 text-sm mb-12">Última actualización: 23 de octubre de 2025</p>

      <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-brand-black mt-0">Preámbulo</h2>
          <p>Estas Condiciones regulan el uso de MrCall y cualquier otro Acuerdo o relación jurídica con el Titular de manera vinculante. Las expresiones en mayúscula se definen en la sección &ldquo;Definiciones y Referencias Legales&rdquo;. Se solicita al Usuario que lea atentamente este documento.</p>
          <p>MrCall es un servicio de:</p>
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
          <p>Número de IVA IT11619040964</p>
          <p>Correo electrónico: <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a></p>
          <p>Aunque la relación contractual relativa a la compra de Productos se celebra exclusivamente entre el Titular y los Usuarios, los Usuarios reconocen y aceptan que, si la provisión de MrCall se realiza a través del Apple App Store, Apple puede ejercer derechos en virtud de estas Condiciones como tercero beneficiario.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Acerca de MrCall</h2>
          <p>MrCall proporciona acceso a un software que interactúa con personas (&ldquo;Asistente Digital&rdquo;). Cada Usuario dispone de su propio Asistente Digital, que puede configurarse a través del sitio web mrcall.ai o de la aplicación móvil MrCall (iOS/Android). El Asistente responde a un número de teléfono o cuenta SIP.</p>
          <p>MrCall no es responsable de activar el desvío de llamadas desde las líneas telefónicas o SIP del Usuario al Asistente: el desvío es gestionado, tanto técnica como contractualmente, por los proveedores de telefonía. MrCall proporciona soporte para la activación/desactivación del desvío.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Información Esencial de un Vistazo</h2>
          <p>Algunas disposiciones se aplican solo a Consumidores o solo a Usuarios no consumidores: estas limitaciones se indican en las cláusulas individuales. En ausencia de indicación alguna, la cláusula se aplica a todos.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Condiciones de Uso</h2>
          <p>Salvo que se especifique lo contrario, las siguientes condiciones de uso se aplican de manera general; cualquier condición especial se indica expresamente en otra parte de este documento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Requisitos del Usuario</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li>No existen restricciones en cuanto a la calificación (Consumidor/Profesional).</li>
            <li>El Usuario no debe estar ubicado en un país sujeto a embargos de EE. UU. ni figurar en listas de personas sancionadas.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Registro y Cuenta</h3>
          <p>Para utilizar el Servicio es necesario abrir una cuenta, indicando datos completos y veraces. No es posible utilizar el Servicio sin una cuenta. El Usuario debe custodiar sus credenciales con diligencia, eligiendo contraseñas seguras. Al crear la cuenta, el Usuario es responsable de cualquier actividad realizada con sus credenciales y debe notificar de inmediato al Titular en caso de sospecha de violación o uso no autorizado.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Requisitos de Registro</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li>No se permiten cuentas creadas mediante bots o medios automatizados.</li>
            <li>Salvo que se especifique lo contrario, solo se permite una cuenta por Usuario.</li>
            <li>Las cuentas no pueden compartirse con terceros salvo autorización expresa.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cierre de Cuenta por el Usuario</h3>
          <p>Puede cerrar su cuenta en cualquier momento poniéndose en contacto con el Titular a través de la información de contacto proporcionada.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Suspensión y Eliminación de Cuenta por el Titular</h3>
          <p>El Titular puede suspender o eliminar su cuenta a su exclusiva discreción y sin previo aviso si considera que es inapropiada, ofensiva o contraria a las Condiciones. La suspensión/eliminación no da derecho a compensación ni reembolsos y no exime de las tarifas adeudadas.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Contenido en MrCall y Derechos</h2>
          <p>Salvo que se indique lo contrario, el contenido disponible en MrCall es propiedad del Titular o de sus licenciantes. No podrá utilizar el contenido de manera distinta a la necesaria o implícita para el uso adecuado del Servicio. No podrá, sin limitación, copiar, modificar, publicar, transmitir, vender, conceder sublicencias, crear obras derivadas o permitir que terceros realicen tales actividades a través de su cuenta.</p>
          <p>Cuando se indique expresamente, podrá descargar o compartir contenido específico para fines personales y no comerciales, manteniendo las atribuciones y avisos correspondientes.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Eliminación de Contenido Disponible a Través de la App Store</h3>
          <p>El contenido en disputa puede ser eliminado en un plazo de 24 horas y al Usuario responsable de la carga se le puede denegar el acceso al Servicio.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Acceso a Recursos Externos</h2>
          <p>A través de MrCall, el Usuario puede acceder a recursos de terceros sobre los cuales el Titular no tiene control y de los cuales no es responsable. Las condiciones aplicables a dichos recursos son establecidas por los terceros correspondientes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Uso Permitido</h2>
          <p>MrCall y el Servicio pueden utilizarse de conformidad con las Condiciones y la ley. El Titular puede tomar medidas para proteger sus intereses legítimos (denegar el acceso, resolver contratos, denunciar ante las autoridades) si el Usuario comete o se sospecha que comete violaciones de la ley o de las Condiciones, lesiones de derechos de terceros, actos perjudiciales u ofensivos.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Licencia de Software</h2>
          <p>Los derechos de propiedad intelectual sobre el software/tecnología integrado en el Servicio son propiedad del Titular o de sus licenciantes. Se concede una licencia revocable, no exclusiva, intransferible y no sublicenciable, limitada al uso del Servicio. Se excluye cualquier derecho sobre el código fuente. La licencia finaliza con la terminación o expiración del Acuerdo.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Condiciones de Compra</h2>
          <p>Algunos Productos/Servicios ofrecidos a través de MrCall son de pago. Las tarifas, duración y condiciones se indican en las secciones correspondientes del Sitio y durante el proceso de compra. Se requiere una cuenta para realizar compras.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Descripción del Producto</h3>
          <p>Los precios, descripciones y disponibilidad se muestran en las páginas correspondientes y pueden variar. La representación en pantalla es indicativa y no garantiza características específicas distintas de las acordadas contractualmente.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Procedimiento de Compra y Envío de Pedido</h3>
          <p>El Usuario selecciona el Producto, verifica los detalles y envía el pedido. El envío supone la celebración del contrato y la obligación de pagar los precios, impuestos y cargos indicados. Si el Usuario solicita información/instrucciones, el envío implica la obligación de proporcionarlas. A continuación se envía una confirmación por correo electrónico.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Precios</h3>
          <p>Los precios se muestran sin incluir las tasas, impuestos y cargos aplicables (mostrados antes de realizar el pedido).</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Medios de Pago</h3>
          <p>Los pagos son gestionados por terceros (p. ej., Stripe). MrCall no recopila datos de pago y solo recibe el resultado. En caso de pago fallido, el Titular no ejecuta el pedido y puede solicitar el reembolso de cargos/daños relacionados.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Compras en la App Store</h3>
          <p>Para compras realizadas a través de tiendas de terceros (Apple App Store, Google Play), también se aplican las condiciones del tercero correspondiente y prevalecen en caso de conflicto.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Reserva de Derechos de Uso</h3>
          <p>Los derechos de uso se consideran concedidos únicamente tras la recepción del pago completo.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Entrega &mdash; Prestación de Servicios</h3>
          <p>Los servicios se prestan en el tiempo/modo indicado en el Sitio o comunicado antes del pedido.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Duración del Contrato &mdash; Pruebas y Suscripciones</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Periodo de Prueba</h3>
          <p>Puede haber un periodo de prueba gratuito y no renovable; algunas funciones pueden no estar disponibles. Al expirar, a menos que se cancele, la prueba se convierte en el plan de pago correspondiente.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Suscripciones</h3>
          <p>Las suscripciones comienzan cuando se recibe el primer pago. Debe mantener los pagos regulares para evitar interrupciones. Para suscripciones gestionadas a través de Apple ID, también se aplican las reglas de Apple (renovación automática, aviso y gestión a través de los ajustes de Apple).</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Terminación de la Suscripción</h3>
          <p>Las suscripciones indefinidas pueden terminarse en cualquier momento mediante notificación clara al Titular; efectiva 2 días después de la recepción, salvo que se indique lo contrario en el Sitio.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Cambios en las Características y Precios</h2>
          <p>MrCall publica las características y tarifas de los planes en la página &ldquo;Precios&rdquo; y en las páginas de detalle del Sitio, que forman parte integrante de estas Condiciones. El Titular puede actualizar los precios y/o las características por razones técnicas, económicas o regulatorias, sujeto a transparencia y proporcionalidad:</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">1. Cambios Sustanciales</h3>
          <p>Aumentos de precios; eliminación o reducción material de funcionalidades:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Preaviso:</strong> al menos 30 (treinta) días naturales.</li>
            <li><strong>Notificación:</strong> correo electrónico a la dirección asociada a la cuenta y publicación en el Sitio.</li>
            <li><strong>Fecha de entrada en vigor:</strong> Suscripciones mensuales: desde la primera renovación posterior a la expiración del preaviso. Suscripciones anuales/prepagadas: desde la siguiente renovación (sin aumento durante el periodo ya pagado).</li>
            <li><strong>Resolución:</strong> el Usuario puede resolver sin penalización antes de la fecha de entrada en vigor. Si el cambio reduce funcionalidades durante un periodo ya pagado por causas ajenas al Usuario, este puede desistir y obtener el reembolso prorrateado del periodo no utilizado.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">2. Cambios No Sustanciales o Mejoras</h3>
          <p>Optimizaciones técnicas, mejoras de interfaz, incorporación de funcionalidades:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Preaviso:</strong> al menos 7 (siete) días naturales, excepto en emergencias de seguridad o cumplimiento normativo.</li>
            <li>Sin reembolsos prorrateados; se mantiene la opción de cancelar para el futuro.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">3. Errores Manifiestos</h3>
          <p>Si existe un error manifiesto en el precio/información, el Titular puede corregir la información y ofrecer continuar en los términos correctos o permitir la retirada sin coste.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">4. Comunicaciones</h3>
          <p>Las comunicaciones al correo electrónico registrado se consideran recibidas en el momento de su envío. Los Usuarios deben mantener su información de contacto actualizada.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">5. Aceptación</h3>
          <p>El uso continuado después de la fecha de entrada en vigor constituye aceptación. Alternativamente, el Usuario puede ejercer el derecho de desistimiento como se indica anteriormente.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Limitación de Responsabilidad e Indemnización</h2>
          <p>Salvo en la medida exigida por la ley, la responsabilidad del Titular por daños en relación con la ejecución del Acuerdo queda excluida o limitada en la máxima medida permitida por la ley. La responsabilidad por muerte o lesiones personales, así como por incumplimiento de obligaciones contractuales esenciales o por dolo/negligencia grave, no se ve afectada.</p>
          <p>El Titular no es responsable de, entre otras cosas: interrupciones debidas a fuerza mayor o eventos fuera de su control (fallos de línea/energía, Internet, huelgas, desastres, ciberataques, interrupciones de productos/servicios de terceros); pérdidas que no resulten directamente del incumplimiento de las Condiciones; lucro cesante u otras pérdidas indirectas; malware relacionado con archivos de Internet.</p>
          <p>Para Usuarios no Consumidores, cualquier compensación no podrá exceder el total de las tarifas adeudadas al Titular durante los 12 meses anteriores o durante la totalidad del plazo del Acuerdo, lo que sea menor.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Indemnización</h3>
          <p>Usted indemniza al Titular (y entidades relacionadas) frente a reclamaciones de terceros relacionadas con violaciones de las Condiciones, derechos de terceros o la ley, derivadas de su cuenta o del Servicio y atribuibles a usted, incluyendo los honorarios de abogados en la medida permitida por la ley.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Disposiciones Comunes</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">No Renuncia Implícita</h3>
          <p>La falta de ejercicio de derechos no constituye una renuncia. Las renuncias deben ser expresas.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Interrupción del Servicio</h3>
          <p>Para mantenimiento/actualizaciones u otros cambios, el Titular puede interrumpir temporalmente el Servicio, notificando a los Usuarios, y en la medida permitida por la ley, puede suspender las operaciones. En caso de terminación, realizará esfuerzos para permitir la extracción de datos personales y respetar los derechos de los Usuarios.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Reventa del Servicio</h3>
          <p>La reventa/explotación del Servicio sin el consentimiento escrito del Titular o la pertenencia a un programa de reventa está prohibida.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Privacidad</h3>
          <p>La información sobre el tratamiento de datos personales se encuentra en la <a href="/privacy" className="text-brand-blue hover:underline">política de privacidad</a> de MrCall.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Propiedad Intelectual</h3>
          <p>Los derechos sobre MrCall (marcas, derechos de autor, patentes, diseños, logotipos) son propiedad del Titular o de sus licenciantes.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cambios en las Condiciones</h3>
          <p>El Titular puede modificar las Condiciones y notificará a los Usuarios. Los cambios entrarán en vigor a partir de la fecha comunicada. El uso posterior implica aceptación; en caso contrario, el Usuario debe cesar el uso y puede ejercer el derecho de desistimiento. La versión anterior rige las relaciones hasta la aceptación de los cambios y puede solicitarse al Titular. Si la ley lo exige, la fecha de entrada en vigor se comunicará con antelación.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cesión del Contrato</h3>
          <p>El Titular puede transferir/ceder derechos y obligaciones teniendo en cuenta los intereses de los Usuarios. El Usuario no puede ceder sin el consentimiento escrito del Titular.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cláusula de Salvaguarda</h3>
          <p>La posible nulidad/ineficacia de una disposición no invalida las restantes, que permanecen válidas y eficaces; en la medida de lo posible, la cláusula se interpretará/adaptará para reflejar el propósito original.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Ámbito Geográfico</h2>
          <p>MrCall está destinado principalmente a Usuarios establecidos en la Unión Europea. Los Usuarios que utilicen el Servicio desde países fuera de la UE aceptan que cualquier relación contractual se regirá por la legislación italiana, independientemente del lugar de acceso o uso.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Legislación Aplicable y Tribunal Competente</h2>
          <p>Las Condiciones se rigen por la legislación italiana. Jurisdicción exclusiva para controversias: el tribunal del lugar donde el Titular está establecido (Milán), salvo protección obligatoria del Consumidor prevista por la ley. Lo anterior se entiende sin perjuicio del nivel superior de protección que pueda ofrecer la legislación del país del Usuario Consumidor.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Resolución de Controversias</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Resolución Amistosa</h3>
          <p>Las controversias pueden comunicarse al Titular, quien intentará una resolución amistosa. El Usuario puede enviar una reclamación por correo electrónico, con una breve descripción y, en su caso, los datos del pedido/compra/cuenta. El Titular responderá sin demora indebida y en un plazo de 2 días.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Plataforma ODR</h3>
          <p>Los Consumidores de la UE pueden utilizar la plataforma europea de Resolución de Litigios en Línea (ODR) para contratos celebrados en línea.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Definiciones y Referencias Legales</h2>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>MrCall (o &ldquo;Aplicación&rdquo;):</strong> el medio que permite la prestación del Servicio.</li>
            <li><strong>Acuerdo:</strong> cualquier relación jurídica entre el Titular y el Usuario regida por las Condiciones.</li>
            <li><strong>Usuario:</strong> la persona física o jurídica que utiliza el Servicio.</li>
            <li><strong>Consumidor:</strong> Usuario considerado como tal según la legislación aplicable.</li>
            <li><strong>Producto/Servicio:</strong> bien/servicio ofrecido a través de MrCall (incluyendo servicios de reserva, software, Productos Digitales).</li>
            <li><strong>Titular (o &ldquo;Nosotros&rdquo;):</strong> la entidad que proporciona MrCall y/u ofrece el Servicio.</li>
            <li><strong>Condiciones:</strong> las condiciones aplicables al uso de MrCall y/o a la prestación del Servicio, en su versión más actualizada.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Contáctenos</h2>
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
          <p>Número de IVA IT11619040964</p>
          <p>
            Correo electrónico: <a href={`mailto:${CONTACT.legal}`} className="text-brand-blue hover:underline">{CONTACT.legal}</a><br />
            Teléfono: <a href={`tel:${CONTACT.legalPhoneRaw}`} className="text-brand-blue hover:underline">{CONTACT.legalPhone}</a>
          </p>
        </section>
      </div>
    </>
  );
}
