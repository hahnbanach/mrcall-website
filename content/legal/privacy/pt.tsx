import { CONTACT } from '@/lib/constants';

export default function PrivacyPT() {
  return (
    <>
      <h1 className="text-4xl font-bold text-brand-black mb-2">Política de Privacidade do MrCall</h1>
      <p className="text-brand-black/50 text-sm mb-12">Última atualização: 27 de fevereiro de 2026</p>

      <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
        <p>O MrCall recolhe alguns Dados Pessoais dos seus Utilizadores.</p>
        <p>Este documento pode ser impresso utilizando o comando de impressão disponível nas definições de qualquer navegador.</p>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mt-0">Âmbito de Aplicação</h2>
          <p>Esta política aplica-se a:</p>
          <ol className="list-[lower-alpha] ps-6 space-y-2">
            <li><strong>Website MrCall.ai (o &ldquo;Site&rdquo;):</strong> navegação simples, formulários de contacto, registo e conteúdo informativo.</li>
            <li><strong>Serviço MrCall (a &ldquo;Plataforma&rdquo; ou o &ldquo;Serviço&rdquo;):</strong> contas de utilizador, gestão de assistentes, chamadas telefónicas, integrações (por exemplo, Google Calendar), pagamentos, funcionalidades de voz e texto, agendamento e automatizações.</li>
          </ol>
          <p>Salvo indicação em contrário, as referências na secção do Website referem-se exclusivamente à navegação no Website; as referências na secção do Serviço referem-se exclusivamente à utilização do Serviço.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Responsável pelo Tratamento de Dados</h2>
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
          <p>Endereço de email do Responsável pelo Tratamento de Dados: <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Tipos de Dados Recolhidos</h2>
          <p>Entre os Dados Pessoais recolhidos pelo MrCall, de forma independente ou através de terceiros, encontram-se: Ferramentas de Rastreamento; Dados de Utilização; email; número de Utilizadores; estatísticas de sessão; informações de pagamento; apelido; endereço de faturação; histórico de compras.</p>
          <p>Os detalhes completos sobre cada tipo de Dados Pessoais recolhidos são fornecidos nas secções dedicadas desta política de privacidade ou através de textos informativos específicos apresentados antes da recolha dos Dados. Os Dados Pessoais podem ser fornecidos livremente pelo Utilizador ou, no caso dos Dados de Utilização, recolhidos automaticamente durante a utilização do MrCall. Salvo indicação em contrário, todos os Dados solicitados pelo MrCall são obrigatórios. Se o Utilizador se recusar a comunicá-los, poderá ser impossível para o MrCall fornecer o Serviço. Nos casos em que o MrCall indica determinados Dados como opcionais, os Utilizadores são livres de se abster de comunicar tais Dados, sem que isso tenha qualquer consequência na disponibilidade do Serviço ou no seu funcionamento. Os Utilizadores que tenham dúvidas sobre quais Dados são obrigatórios são encorajados a contactar o Responsável pelo Tratamento de Dados.</p>
          <p>Qualquer utilização de Cookies &mdash; ou outras ferramentas de rastreamento &mdash; pelo MrCall ou pelos proprietários de serviços de terceiros utilizados pelo MrCall destina-se a fornecer o Serviço solicitado pelo Utilizador, para além das outras finalidades descritas neste documento e na Política de Cookies. O Utilizador assume a responsabilidade pelos Dados Pessoais de terceiros obtidos, publicados ou partilhados através do MrCall.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Método e Local de Tratamento dos Dados Recolhidos</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Modalidade de Tratamento</h3>
          <p>O Responsável pelo Tratamento de Dados adota medidas de segurança adequadas para prevenir o acesso não autorizado, a divulgação, a modificação ou a destruição dos Dados Pessoais. O tratamento é realizado através de ferramentas informáticas e/ou telemáticas, com métodos organizativos e lógicas estritamente relacionadas com as finalidades indicadas. Para além do Responsável pelo Tratamento de Dados, em alguns casos, outras partes envolvidas na organização do MrCall (administrativas, comerciais, de marketing, jurídicas, administradores de sistemas) ou partes externas (como prestadores de serviços técnicos terceiros, transportadores postais, fornecedores de alojamento, empresas de TI, agências de comunicação) podem ter acesso aos Dados, sendo também designados, se necessário, como Subcontratantes pelo Responsável pelo Tratamento de Dados. A lista atualizada dos Subcontratantes pode ser sempre solicitada ao Responsável pelo Tratamento de Dados.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Localização</h3>
          <p>Os Dados são tratados nos escritórios operacionais do Responsável pelo Tratamento de Dados e em qualquer outro local onde as partes envolvidas no tratamento estejam localizadas. Para mais informações, por favor contacte o Responsável pelo Tratamento de Dados. Os Dados Pessoais do Utilizador podem ser transferidos para um país diferente daquele em que o Utilizador se encontra. Para mais informações sobre o local de tratamento, o Utilizador pode consultar a secção sobre os detalhes do tratamento de Dados Pessoais.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Período de Retenção</h3>
          <p>Salvo indicação em contrário neste documento, os Dados Pessoais são tratados e conservados pelo tempo necessário à finalidade para a qual foram recolhidos e podem ser conservados por um período mais longo devido a quaisquer obrigações legais ou com base no consentimento dos Utilizadores.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Subcontratantes e Fornecedores</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Website</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Alojamento e CDN:</strong> SiteGround Hosting Ltd. (Reino Unido/UE).</li>
            <li><strong>Gestão de tags e estatísticas:</strong> conforme as secções de Gestão de Tags e Estatísticas.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Serviço MrCall</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Infraestrutura cloud e armazenamento:</strong> Amazon Web Services (AWS), Google Cloud, Scaleway (preferencialmente centros de dados na União Europeia, quando possível).</li>
            <li><strong>Processamento de IA para funcionalidades de voz e texto:</strong> OpenAI (modelos LLM/STT/TTS quando aplicável), ElevenLabs (TTS). Os serviços de processamento de IA são integrados via API em modo &ldquo;zero data retention&rdquo; ou com acordos específicos que excluem categoricamente a utilização de quaisquer dados de texto ou voz do Utilizador para treino, melhoria ou afinação dos seus modelos de inteligência artificial.</li>
            <li><strong>Pagamentos:</strong> Stripe Technology Europe Ltd.</li>
          </ul>
          <p>Todos os fornecedores estão vinculados por acordos de tratamento de dados em conformidade com o RGPD. Para quaisquer transferências para países fora do EEE, são adotadas Cláusulas Contratuais-Tipo e medidas adicionais adequadas.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Finalidades do Tratamento dos Dados Recolhidos</h2>
          <p>Os Dados do Utilizador são recolhidos para permitir ao Proprietário fornecer o Serviço, cumprir obrigações legais, responder a pedidos ou ações de execução, proteger os seus direitos e interesses (ou os dos Utilizadores ou de terceiros), identificar quaisquer atividades maliciosas ou fraudulentas, e para as seguintes finalidades: Criação e gestão do MrCall; Estatísticas; Gestão de tags; Gestão de pagamentos; Apresentação de conteúdos de plataformas externas; Alojamento e infraestrutura backend.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Detalhes do Tratamento de Dados Pessoais</h2>
          <p>Os Dados Pessoais são recolhidos para as seguintes finalidades e utilizando os seguintes serviços.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Criação e Gestão do MrCall</h3>
          <p>Os principais componentes do MrCall são criados e geridos diretamente pelo Proprietário, utilizando o software mencionado abaixo.</p>

          <h4 className="text-base font-bold text-brand-black mt-4">Dados Fornecidos Voluntariamente pelo Utilizador</h4>
          <p>Os utilizadores do serviço podem fornecer os seus dados pessoais para aceder a determinados serviços. Isto implica que a Empresa adquire as seguintes categorias de dados pessoais relativos aos Utilizadores:</p>
          <ol className="list-[lower-alpha] ps-6 space-y-2">
            <li>nome de utilizador e endereço de email;</li>
            <li>informações sobre pessoas que contactam o Utilizador e deixam uma mensagem com o serviço, tais como o seu número de telefone e o nome dado ao assistente. Esta informação é necessária para fornecer o serviço e para informar o Utilizador sobre quem ligou e deixou uma mensagem;</li>
            <li>O Utilizador pode utilizar a função de carregamento de contactos e fornecer ao MrCall os números de telefone da sua agenda de contactos. As informações de contacto são utilizadas exclusivamente para comunicar ao Utilizador o nome, conforme guardado na agenda de contactos, de quem efetuou a chamada.</li>
          </ol>

          <h4 className="text-base font-bold text-brand-black mt-4">Eliminação dos Dados do Utilizador</h4>
          <p>Todos os dados relativos ao Utilizador são eliminados duas semanas após o Utilizador ter solicitado a eliminação da sua conta.</p>

          <h4 className="text-base font-bold text-brand-black mt-4">Eliminação dos Dados de Contacto do Utilizador</h4>
          <p>O Utilizador pode eliminar todos os contactos registados na sua conta MrCall a qualquer momento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Gestão de Pagamentos</h3>
          <p>Salvo indicação em contrário, o MrCall processa todos os pagamentos por cartão de crédito, transferência bancária ou outros meios através de prestadores de serviços de pagamento externos. Em geral, e salvo indicação em contrário, é solicitado aos Utilizadores que forneçam os dados de pagamento e informações pessoais diretamente a esses prestadores de serviços de pagamento. O MrCall não está envolvido na recolha e tratamento dessas informações: em vez disso, receberá apenas uma notificação do prestador de serviços de pagamento em questão sobre o pagamento bem-sucedido.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Stripe</strong> (Stripe Technology Europe Ltd) &mdash; Dados Pessoais tratados: apelido; histórico de compras; endereço de faturação; informações de pagamento. Local de tratamento: União Europeia.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Gestão de Tags</h3>
          <p>Este tipo de serviço é funcional para a gestão centralizada de tags ou scripts utilizados no MrCall. A utilização desses serviços implica o fluxo de Dados do Utilizador através deles e, quando aplicável, a sua retenção.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Google Tag Manager</strong> (Google Ireland Limited) &mdash; Dados Pessoais tratados: Ferramentas de Rastreamento. Local de tratamento: Irlanda.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Alojamento e Infraestrutura Backend</h3>
          <p>Estes tipos de serviços têm a função de alojar Dados e ficheiros que permitem o funcionamento do MrCall, possibilitar a sua distribuição e fornecer uma infraestrutura pronta para disponibilizar funcionalidades específicas do MrCall. Alguns dos serviços entre os listados abaixo, se existirem, podem funcionar em servidores geograficamente distribuídos, tornando difícil determinar a localização real onde os Dados Pessoais são armazenados.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>SiteGround Hosting</strong> (SiteGround Hosting Ltd.) &mdash; Dados Pessoais Tratados: Dados de Utilização; Ferramentas de Rastreamento. Local de tratamento: Reino Unido.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Estatísticas</h3>
          <p>Os serviços contidos nesta secção permitem monitorizar e analisar dados de tráfego e acompanhar o comportamento do utilizador.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Google Analytics (Universal Analytics)</strong> &mdash; Google Ireland Limited. Dados Pessoais Tratados: Dados de Utilização; Ferramentas de Rastreamento. Local de tratamento: Irlanda.</li>
            <li><strong>Google Analytics 4</strong> &mdash; Google Ireland Limited. No GA4, os endereços IP são utilizados no momento da recolha e depois eliminados antes do registo. Dados Pessoais tratados: Dados de utilização; número de Utilizadores; estatísticas de sessão; Ferramentas de Rastreamento. Local de tratamento: Irlanda.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Visualização de Conteúdos de Plataformas Externas</h3>
          <p>Este tipo de serviço permite visualizar conteúdos alojados em plataformas externas diretamente a partir das páginas do MrCall e interagir com eles.</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>YouTube Video Widget</strong> &mdash; Google Ireland Limited. Dados Pessoais Tratados: Dados de Utilização; Ferramentas de Rastreamento. Local de tratamento: Irlanda.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Informações sobre Como Desativar Anúncios Baseados em Interesses</h2>
          <p>Para além de quaisquer funcionalidades de exclusão fornecidas por qualquer um dos serviços listados neste documento, os Utilizadores podem obter mais informações sobre como desativar anúncios baseados em interesses na secção apropriada da Política de Cookies.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Política de Cookies</h2>
          <p>O MrCall utiliza Ferramentas de Rastreamento. Para saber mais, os Utilizadores podem consultar a <a href="/cookie-policy" className="text-brand-blue hover:underline">Política de Cookies</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Mais Informações para os Utilizadores</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Base Jurídica do Tratamento</h3>
          <p>O Responsável pelo Tratamento de Dados trata os Dados Pessoais relativos ao Utilizador se uma das seguintes condições se verificar: o Utilizador deu o seu consentimento para uma ou mais finalidades específicas; o tratamento é necessário para a execução de um contrato com o Utilizador e/ou para a execução de medidas pré-contratuais; o tratamento é necessário para cumprir uma obrigação legal à qual o Responsável pelo Tratamento de Dados está sujeito; o tratamento é necessário para a execução de uma tarefa de interesse público ou para o exercício de autoridade pública investida no Responsável pelo Tratamento de Dados; o tratamento é necessário para a prossecução do interesse legítimo do Responsável pelo Tratamento de Dados ou de terceiros. Contudo, é sempre possível solicitar ao Responsável que clarifique a base jurídica concreta de cada tratamento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Informações Adicionais sobre o Tempo de Conservação</h3>
          <p>Salvo indicação em contrário neste documento, os Dados Pessoais são tratados e conservados pelo tempo necessário à finalidade para a qual foram recolhidos e podem ser conservados por um período mais longo devido a quaisquer obrigações legais ou com base no consentimento dos Utilizadores.</p>
          <p>Portanto: os Dados Pessoais recolhidos para finalidades relacionadas com a execução de um contrato entre o Responsável pelo Tratamento de Dados e o Utilizador serão conservados até que a execução desse contrato esteja concluída; os Dados Pessoais recolhidos para finalidades relacionadas com o interesse legítimo do Responsável pelo Tratamento de Dados serão conservados até que esse interesse seja satisfeito. Quando o tratamento se baseia no consentimento do Utilizador, o Responsável pelo Tratamento de Dados pode conservar os Dados Pessoais por um período mais longo até que esse consentimento seja revogado. Além disso, o Responsável pelo Tratamento de Dados pode ser obrigado a conservar os Dados Pessoais por um período mais longo para cumprir uma obrigação legal ou por ordem de uma autoridade. No final do período de retenção, os Dados Pessoais serão eliminados.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Direitos do Utilizador ao Abrigo do RGPD</h3>
          <p>O Utilizador pode, dentro dos limites previstos por lei: retirar o consentimento; opor-se ao tratamento; aceder aos seus Dados; solicitar a retificação; obter a limitação do tratamento; obter a eliminação; receber os seus Dados ou fazê-los transferir para outro responsável (portabilidade); apresentar uma reclamação junto da autoridade de controlo competente.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Detalhes sobre o Direito de Oposição</h3>
          <p>Quando os Dados Pessoais são tratados no interesse público, no exercício de poderes públicos ou para prosseguir um interesse legítimo do Responsável pelo Tratamento de Dados, o Utilizador pode opor-se ao tratamento por motivos relacionados com a sua situação particular. Se os Dados forem tratados para fins de marketing direto, o Utilizador pode opor-se a qualquer momento e gratuitamente; neste caso, os Dados deixarão de ser tratados para esta finalidade.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Como Exercer os Seus Direitos</h3>
          <p>Quaisquer pedidos podem ser dirigidos ao Responsável pelo Tratamento de Dados utilizando os dados de contacto fornecidos neste documento. O pedido é gratuito e o Responsável pelo Tratamento de Dados responderá o mais rapidamente possível e, em qualquer caso, no prazo de um mês, fornecendo todas as informações exigidas por lei.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Mais Informações sobre o Tratamento</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Defesa Jurídica</h3>
          <p>Os Dados Pessoais do Utilizador podem ser utilizados pelo Responsável pelo Tratamento de Dados em tribunal ou nas fases preparatórias de eventuais processos judiciais para defesa contra abusos na utilização do MrCall ou Serviços relacionados por parte do Utilizador. O Utilizador declara estar ciente de que o Responsável pelo Tratamento de Dados pode ser obrigado a divulgar os Dados por ordem de autoridades públicas.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Informações Específicas</h3>
          <p>A pedido do Utilizador, para além das informações contidas nesta política de privacidade, o MrCall pode fornecer informações adicionais e contextuais relativas a Serviços específicos ou à recolha e tratamento de Dados Pessoais.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Registos de Sistema e Manutenção</h3>
          <p>Para fins operacionais e de manutenção, o MrCall e quaisquer serviços de terceiros que utilize podem recolher registos de sistema, isto é, ficheiros que registam interações e que podem também conter Dados Pessoais, como o endereço IP do Utilizador.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Informações Não Contidas Nesta Política</h3>
          <p>Informações adicionais relativas ao tratamento de Dados Pessoais podem ser solicitadas a qualquer momento ao Responsável pelo Tratamento de Dados utilizando os dados de contacto fornecidos.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Alterações a Esta Política de Privacidade</h3>
          <p>O Responsável pelo Tratamento de Dados reserva-se o direito de efetuar alterações a esta política de privacidade a qualquer momento, notificando os Utilizadores nesta página e, se possível, no MrCall, bem como, quando técnica e legalmente viável, enviando uma notificação aos Utilizadores através de um dos dados de contacto na sua posse. Se as alterações afetarem operações de tratamento cuja base jurídica é o consentimento, o Responsável pelo Tratamento de Dados recolherá novamente o consentimento do Utilizador, se necessário.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Integração com o Google Calendar</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Âmbito dos Dados Google Tratados</h3>
          <p>Esta secção aplica-se exclusivamente aos Utilizadores que conectam uma conta Google ao Serviço MrCall. O MrCall acede aos dados do Utilizador via OAuth 2.0 exclusivamente para fornecer funcionalidades de sincronização e gestão de compromissos no Google Calendar. Em particular, o MrCall pode ler o estado de disponibilidade e criar, editar ou eliminar eventos no calendário conectado pelo Utilizador. O MrCall não acede ao conteúdo de emails, contactos ou outros dados Google que não sejam necessários para a finalidade acima mencionada.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Partilha, Transferência e Divulgação de Dados Google</h3>
          <p>O MrCall não vende, aluga nem partilha dados do Utilizador provenientes do Google com terceiros para fins de publicidade, marketing, análise ou criação de perfis. A partilha é limitada aos seguintes casos:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li>fornecedores de infraestrutura técnica e alojamento (por exemplo, AWS, Google Cloud, Scaleway e o fornecedor de alojamento do website), estritamente para fins de prestação do serviço e em conformidade com acordos de tratamento de dados conformes ao RGPD;</li>
            <li>obrigações legais ou pedidos legítimos das autoridades competentes.</li>
          </ul>
          <p>Os dados do Google Calendar não são divulgados a parceiros comerciais ou terceiros fora dos casos indicados acima. O MrCall partilha dados do Utilizador provenientes do Google exclusivamente com fornecedores de infraestrutura e alojamento (AWS, Google Cloud, Scaleway, SiteGround) estritamente para fins de prestação do serviço. Nenhum dado de Utilizador do Google é vendido, transferido ou partilhado com terceiros para fins de publicidade, marketing ou análise.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Segurança e Proteção dos Dados Google</h3>
          <p>A Hahn Banach LLC adota medidas técnicas e organizativas adequadas para proteger os dados Google contra acesso não autorizado, modificação ou divulgação, incluindo:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li>Todas as comunicações com as APIs do Google são realizadas através de canais encriptados HTTPS/TLS.</li>
            <li>Os tokens OAuth 2.0 (de acesso e de atualização) são armazenados de forma encriptada na base de dados PostgreSQL da empresa.</li>
            <li>O acesso à base de dados é restrito apenas ao pessoal autorizado de DevOps.</li>
            <li>Eliminação imediata de tokens e dados de sincronização associados quando o Utilizador elimina a sua conta MrCall ou revoga o acesso a partir do Google.</li>
            <li>Processamento do conteúdo do calendário em memória volátil apenas pelo tempo estritamente necessário para fornecer a funcionalidade, sem armazenamento persistente do conteúdo dos eventos.</li>
            <li>Infraestrutura alojada em centros de dados localizados na União Europeia e em conformidade com normas de segurança como a ISO/IEC 27001.</li>
          </ul>
          <p>Além disso, o MrCall aplica encriptação de dados sensíveis em repouso (AES-256), adota controlos de acesso baseados no princípio do privilégio mínimo e monitoriza constantemente quaisquer tentativas de acesso não autorizado. Os dados são armazenados em centros de dados europeus em conformidade com as normas ISO/IEC 27001 e RGPD.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Utilização Limitada dos Dados Google</h3>
          <p>A utilização pelo MrCall das informações recebidas das APIs do Google está em conformidade com a <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-brand-blue hover:underline" target="_blank" rel="noopener noreferrer">Política de Dados de Utilizador dos Serviços de API do Google</a>, incluindo as regras de Utilização Limitada aplicáveis. Os dados do Google Calendar não são utilizados para publicidade, criação de perfis, análise comportamental ou treino de modelos de inteligência artificial.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Revogação de Acesso e Retenção</h3>
          <p>O Utilizador pode revogar o acesso ao Google Calendar a qualquer momento a partir das definições da sua conta Google. Em caso de revogação ou cancelamento da conta MrCall, os tokens e dados de sincronização serão permanentemente eliminados dentro de um prazo razoável necessário para a propagação técnica da operação.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Informações Adicionais</h3>
          <p>Para esclarecimentos sobre o tratamento de dados do Google ou para exercer os seus direitos de privacidade, pode contactar o Responsável pelo Tratamento de Dados em <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Definições e Referências Legais</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Dados Pessoais (ou Dados)</h3>
          <p>Qualquer informação que, direta ou indiretamente, mesmo em conexão com qualquer outra informação, incluindo um número de identificação pessoal, identifica ou torna identificável uma pessoa singular.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Dados de Utilização</h3>
          <p>Informações recolhidas automaticamente através do MrCall (incluindo de aplicações de terceiros integradas), nomeadamente: endereços IP ou nomes de domínio dos computadores utilizados pelo Utilizador, endereços URI, hora do pedido, método utilizado para encaminhar o pedido ao servidor, tamanho do ficheiro obtido em resposta, código numérico indicando o estado da resposta do servidor, país de origem, características do navegador e sistema operativo utilizados pelo visitante, hora da visita e detalhes do percurso realizado dentro da Aplicação.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Utilizador</h3>
          <p>A pessoa que utiliza o MrCall, que, salvo indicação em contrário, corresponde ao Titular dos Dados.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Titular dos Dados</h3>
          <p>A pessoa singular a quem os Dados Pessoais se referem.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Subcontratante (ou Processador)</h3>
          <p>A pessoa singular ou coletiva, administração pública e qualquer outro organismo que trata dados pessoais em nome do Responsável pelo Tratamento de Dados.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Responsável pelo Tratamento de Dados (ou Responsável)</h3>
          <p>A pessoa singular ou coletiva que determina as finalidades e os meios do tratamento de dados pessoais. Salvo indicação em contrário, o Responsável pelo Tratamento de Dados é o proprietário do MrCall.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">MrCall (ou esta Aplicação)</h3>
          <p>A ferramenta de hardware ou software utilizada para recolher e tratar os Dados Pessoais dos Utilizadores.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Serviço</h3>
          <p>O serviço fornecido pelo MrCall conforme definido nos termos aplicáveis neste website/aplicação.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">União Europeia (ou UE)</h3>
          <p>Qualquer referência deve ser entendida como aplicável a todos os Estados-Membros atuais da União Europeia e do Espaço Económico Europeu.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cookies</h3>
          <p>Ferramentas de Rastreamento que consistem em pequenos conjuntos de dados armazenados no navegador do Utilizador.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Ferramenta de Rastreamento</h3>
          <p>Qualquer tecnologia (cookies, identificadores únicos, web beacons, scripts incorporados, e-tags, fingerprinting) que permite rastrear os Utilizadores.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Referências Legais</h3>
          <p>Salvo indicação em contrário, esta política de privacidade aplica-se exclusivamente ao MrCall. MrCall é uma marca registada.</p>
        </section>
      </div>
    </>
  );
}
