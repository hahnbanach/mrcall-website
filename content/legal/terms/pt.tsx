import { CONTACT } from '@/lib/constants';

export default function TermsPT() {
  return (
    <>
      <h1 className="text-4xl font-bold text-brand-black mb-2">Termos e Condições de Utilização</h1>
      <p className="text-brand-black/50 text-sm mb-12">Última atualização: 23 de outubro de 2025</p>

      <div className="prose prose-lg max-w-none text-brand-black/80 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-brand-black mt-0">Preâmbulo</h2>
          <p>Estes Termos regem a utilização do MrCall e qualquer outro Acordo ou relação jurídica com o Titular de forma vinculativa. As expressões com iniciais maiúsculas são definidas na secção &ldquo;Definições e Referências Legais&rdquo;. Solicita-se ao Utilizador que leia este documento atentamente.</p>
          <p>O MrCall é um serviço de:</p>
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
          <p>Endereço de email: <a href={`mailto:${CONTACT.privacy}`} className="text-brand-blue hover:underline">{CONTACT.privacy}</a></p>
          <p>Embora a relação contratual referente à compra de Produtos seja celebrada exclusivamente entre o Titular e os Utilizadores, os Utilizadores reconhecem e concordam que, caso a prestação do MrCall seja efetuada através da Apple App Store, a Apple poderá exercer direitos ao abrigo destes Termos como terceiro beneficiário.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Sobre o MrCall</h2>
          <p>O MrCall disponibiliza acesso a software que interage com pessoas (&ldquo;Assistente Digital&rdquo;). Cada Utilizador tem o seu próprio Assistente Digital, que pode ser configurado através do website mrcall.ai ou da aplicação móvel MrCall (iOS/Android). O Assistente responde a um número de telefone ou conta SIP.</p>
          <p>O MrCall não é responsável pela ativação do reencaminhamento de chamadas das linhas telefónicas ou SIP do Utilizador para o Assistente: o reencaminhamento é gerido, técnica e contratualmente, pelos operadores de telecomunicações. O MrCall presta apoio para a ativação/desativação do reencaminhamento.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Informações Essenciais</h2>
          <p>Algumas disposições aplicam-se apenas a Consumidores ou apenas a Utilizadores não consumidores: estas limitações são indicadas nas cláusulas individuais. Na ausência de qualquer indicação, a cláusula aplica-se a todos.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Condições de Utilização</h2>
          <p>Salvo indicação em contrário, as seguintes condições de utilização aplicam-se de forma geral; quaisquer condições especiais são expressamente indicadas noutras partes deste documento.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Requisitos do Utilizador</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li>Não existem restrições quanto à qualificação (Consumidor/Profissional).</li>
            <li>O Utilizador não pode estar localizado num país sujeito a embargos dos EUA ou constar de listas de entidades sancionadas.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Registo e Conta</h3>
          <p>Para utilizar o Serviço é necessário abrir uma conta, indicando dados completos e verdadeiros. Não é possível utilizar o Serviço sem uma conta. O Utilizador deve guardar as suas credenciais de forma diligente, escolhendo palavras-passe seguras. Ao criar a conta, o Utilizador é responsável por qualquer atividade realizada com as suas credenciais e deve notificar prontamente o Titular em caso de suspeita de violação ou utilização não autorizada.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Requisitos de Registo</h3>
          <ul className="list-disc ps-6 space-y-2">
            <li>Não são permitidas contas criadas por bots ou meios automatizados.</li>
            <li>Salvo indicação em contrário, é permitida apenas uma conta por Utilizador.</li>
            <li>As contas não podem ser partilhadas com terceiros, salvo autorização expressa.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">Encerramento da Conta pelo Utilizador</h3>
          <p>O Utilizador pode encerrar a sua conta a qualquer momento, contactando o Titular através das informações de contacto fornecidas.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Suspensão e Eliminação da Conta pelo Titular</h3>
          <p>O Titular pode suspender ou eliminar a conta do Utilizador a seu exclusivo critério e sem aviso prévio, caso considere a mesma inadequada, ofensiva ou contrária aos Termos. A suspensão/eliminação não confere direito a compensação ou reembolso e não implica renúncia a quaisquer taxas devidas.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Conteúdo no MrCall e Direitos</h2>
          <p>Salvo indicação em contrário, o conteúdo disponível no MrCall é propriedade do Titular ou dos seus licenciantes. O Utilizador não pode utilizar o conteúdo de forma diferente da necessária ou implícita para a utilização adequada do Serviço. Sem limitação, o Utilizador não pode copiar, modificar, publicar, transmitir, vender, conceder sublicenças, criar obras derivadas ou permitir que terceiros realizem tais atividades através da sua conta.</p>
          <p>Quando expressamente indicado, o Utilizador pode descarregar ou partilhar conteúdo específico para fins pessoais e não comerciais, mantendo as atribuições e avisos.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Remoção de Conteúdo Disponível Através da App Store</h3>
          <p>O conteúdo contestado pode ser removido no prazo de 24 horas e o Utilizador responsável pelo carregamento pode ver o seu acesso ao Serviço negado.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Acesso a Recursos Externos</h2>
          <p>Através do MrCall, o Utilizador pode aceder a recursos de terceiros sobre os quais o Titular não tem controlo e pelos quais não é responsável. As condições aplicáveis a tais recursos são estabelecidas pelos respetivos terceiros.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Utilização Permitida</h2>
          <p>O MrCall e o Serviço podem ser utilizados em conformidade com os Termos e a legislação aplicável. O Titular pode tomar medidas para proteger os seus interesses legítimos (negar acesso, rescindir contratos, denunciar às autoridades) caso o Utilizador pratique ou seja suspeito de praticar violações da lei ou dos Termos, lesão de direitos de terceiros, atos prejudiciais ou ofensivos.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Licença de Software</h2>
          <p>Os direitos de propriedade intelectual sobre o software/tecnologia integrado no Serviço são propriedade do Titular ou dos seus licenciantes. É concedida uma licença revogável, não exclusiva, intransmissível e não sublicenciável, limitada à utilização do Serviço. Quaisquer direitos sobre o código-fonte estão excluídos. A licença cessa com a resolução ou expiração do Acordo.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Termos e Condições de Compra</h2>
          <p>Alguns Produtos/Serviços oferecidos através do MrCall são pagos. As taxas, duração e condições são indicadas nas respetivas secções do Site e durante o processo de compra. É necessária uma conta para efetuar compras.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Descrição do Produto</h3>
          <p>Os preços, descrições e disponibilidade são apresentados nas páginas relevantes e podem variar. A representação no ecrã é indicativa e não garante características específicas além das contratualmente acordadas.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Procedimento de Compra e Submissão de Encomenda</h3>
          <p>O Utilizador seleciona o Produto, verifica os detalhes e submete a encomenda. A submissão resulta na celebração do contrato e na obrigação de pagar os preços, impostos e encargos indicados. Caso sejam solicitadas informações/instruções pelo Utilizador, a submissão implica a obrigação de as fornecer. Segue-se a confirmação por email.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Preços</h3>
          <p>Os preços são apresentados excluindo taxas, impostos e encargos aplicáveis (apresentados antes da encomenda).</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Meios de Pagamento</h3>
          <p>Os pagamentos são processados por terceiros (por exemplo, Stripe). O MrCall não recolhe dados de pagamento e recebe apenas o resultado. Em caso de falha no pagamento, o Titular não executa a encomenda e pode procurar o reembolso de encargos/danos relacionados.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Compras na App Store</h3>
          <p>Para compras efetuadas através de lojas de terceiros (Apple App Store, Google Play), os termos relevantes do respetivo terceiro também se aplicam e prevalecem em caso de conflito.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Reserva de Direitos de Utilização</h3>
          <p>Os direitos de utilização são considerados concedidos apenas após a receção do pagamento integral.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Entrega &mdash; Prestação de Serviços</h3>
          <p>Os serviços são prestados no prazo/modo indicado no Site ou comunicado antes da encomenda.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Duração do Contrato &mdash; Períodos de Teste e Subscrições</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Período de Teste</h3>
          <p>Pode existir um período de teste gratuito e não renovável; algumas funcionalidades podem não estar disponíveis. Após o término, salvo cancelamento, o período de teste converte-se no plano pago correspondente.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Subscrições</h3>
          <p>As subscrições têm início quando o primeiro pagamento é recebido. O Utilizador deve manter os pagamentos regulares para evitar interrupções. Para subscrições geridas através do Apple ID, aplicam-se também as regras da Apple (renovação automática, aviso e gestão através das definições da Apple).</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Resolução da Subscrição</h3>
          <p>As subscrições por tempo indeterminado podem ser resolvidas a qualquer momento mediante comunicação clara ao Titular; com efeito 2 dias após a receção, salvo instrução diferente no Site.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Alterações nas Funcionalidades e Preços</h2>
          <p>O MrCall publica as funcionalidades e taxas dos planos na página &ldquo;Preços&rdquo; e nas páginas de detalhe do Site, que constituem parte integrante destes Termos. O Titular pode atualizar preços e/ou funcionalidades por razões técnicas, económicas ou regulamentares, sujeito a transparência e proporcionalidade:</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">1. Alterações Substanciais</h3>
          <p>Aumentos de preços; remoção ou redução material de funcionalidades:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Aviso prévio:</strong> pelo menos 30 (trinta) dias de calendário.</li>
            <li><strong>Notificação:</strong> email para o endereço associado à conta e publicação no Site.</li>
            <li><strong>Data de efeito:</strong> Subscrições mensais: a partir da primeira renovação após o término do aviso. Subscrições anuais/pré-pagas: a partir da próxima renovação (sem aumento durante o período já pago).</li>
            <li><strong>Resolução:</strong> o Utilizador pode resolver sem penalização antes da data de efeito. Se a alteração reduzir funcionalidades durante um período já pago por causas alheias ao Utilizador, este pode desistir e obter o reembolso proporcional do período não utilizado.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">2. Alterações Não Substanciais ou Melhorativas</h3>
          <p>Otimizações técnicas, melhorias de interface, adição de funcionalidades:</p>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>Aviso prévio:</strong> pelo menos 7 (sete) dias de calendário, exceto em emergências de segurança ou conformidade.</li>
            <li>Sem reembolsos proporcionais; mantém-se a opção de cancelar para o futuro.</li>
          </ul>

          <h3 className="text-lg font-bold text-brand-black mt-6">3. Erros Manifestos</h3>
          <p>Em caso de erro manifesto no preço/informação, o Titular pode corrigir a informação e oferecer a continuação nos termos corretos ou permitir a desistência sem custos.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">4. Comunicações</h3>
          <p>As comunicações enviadas para o email registado consideram-se recebidas no momento do envio. Os Utilizadores devem manter as suas informações de contacto atualizadas.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">5. Aceitação</h3>
          <p>A utilização continuada após a data de efeito constitui aceitação. Em alternativa, o Utilizador pode exercer o direito de desistência conforme acima descrito.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Limitação de Responsabilidade e Indemnização</h2>
          <p>Exceto na medida exigida por lei, a responsabilidade do Titular por danos relacionados com a execução do Acordo é excluída ou limitada à extensão máxima permitida por lei. A responsabilidade por morte ou danos pessoais, bem como por violação de obrigações contratuais essenciais ou por dolo/negligência grave, não é afetada.</p>
          <p>O Titular não é responsável, entre outras situações, por: interrupções devidas a força maior ou eventos fora do seu controlo (falhas de linha/energia, Internet, greves, desastres, ataques cibernéticos, interrupções de produtos/serviços de terceiros); perdas que não resultem diretamente de violação dos Termos; lucros cessantes ou outros danos indiretos; software malicioso relacionado com ficheiros da Internet.</p>
          <p>Para Utilizadores não consumidores, qualquer compensação não pode exceder o total de taxas devidas ao Titular nos 12 meses anteriores ou durante todo o período do Acordo, consoante o que for mais curto.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Indemnização</h3>
          <p>O Utilizador indemniza o Titular (e entidades relacionadas) contra reclamações de terceiros relacionadas com violações dos Termos, direitos de terceiros ou da lei, decorrentes da utilização da sua conta ou do Serviço e que lhe sejam imputáveis, incluindo honorários de advogados na medida permitida por lei.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Disposições Comuns</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Ausência de Renúncia Tácita</h3>
          <p>A não execução de direitos não constitui renúncia. As renúncias devem ser expressas.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Descontinuação do Serviço</h3>
          <p>Para manutenção/atualizações ou outras alterações, o Titular pode descontinuar temporariamente o Serviço, notificando os Utilizadores, e na medida permitida por lei, pode suspender as operações. Em caso de encerramento definitivo, envidará esforços para permitir a extração de dados pessoais e para respeitar os direitos dos Utilizadores.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Revenda do Serviço</h3>
          <p>A revenda/exploração do Serviço sem consentimento escrito do Titular ou sem adesão a um programa de revenda é proibida.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Privacidade</h3>
          <p>As informações sobre o tratamento de dados pessoais encontram-se na <a href="/privacy" className="text-brand-blue hover:underline">política de privacidade</a> do MrCall.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Propriedade Intelectual</h3>
          <p>Os direitos sobre o MrCall (marcas, direitos de autor, patentes, desenhos, logótipos) são propriedade do Titular ou dos seus licenciantes.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Alterações aos Termos</h3>
          <p>O Titular pode alterar os Termos e notificará os Utilizadores. As alterações produzem efeito a partir da data comunicada. A utilização posterior implica aceitação; caso contrário, o Utilizador deve cessar a utilização e pode exercer o direito de desistência. A versão anterior rege as relações até à aceitação das alterações e pode ser solicitada ao Titular. Se exigido por lei, a data de efeito será comunicada antecipadamente.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cessão do Contrato</h3>
          <p>O Titular pode transferir/ceder direitos e obrigações tendo em conta os interesses dos Utilizadores. O Utilizador não pode ceder sem consentimento escrito do Titular.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Cláusula de Salvaguarda</h3>
          <p>A eventual nulidade/ineficácia de uma disposição não invalida as restantes disposições, que permanecem válidas e eficazes; sempre que possível, a cláusula será interpretada/adaptada de forma a refletir o propósito original.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Âmbito Geográfico</h2>
          <p>O MrCall destina-se principalmente a Utilizadores estabelecidos na União Europeia. Os Utilizadores que utilizam o Serviço a partir de países fora da UE concordam que qualquer relação contratual será regida pela lei italiana, independentemente do local de acesso ou utilização.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Lei Aplicável e Tribunal Competente</h2>
          <p>Os Termos são regidos pela lei italiana. Jurisdição exclusiva para litígios: o tribunal do local onde o Titular está estabelecido (Milão), salvo proteção obrigatória diferente do Consumidor prevista por lei. Tal não prejudica o nível superior de proteção que possa ser conferido pela lei do país do Utilizador Consumidor.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Resolução de Litígios</h2>

          <h3 className="text-lg font-bold text-brand-black mt-6">Resolução Amigável</h3>
          <p>Os litígios podem ser comunicados ao Titular, que tentará uma resolução amigável. O Utilizador pode enviar a reclamação por email, com uma breve descrição e, se aplicável, detalhes da encomenda/compra/conta. O Titular responderá sem demora injustificada e no prazo de 2 dias.</p>

          <h3 className="text-lg font-bold text-brand-black mt-6">Plataforma RLL</h3>
          <p>Os Consumidores da UE podem utilizar a plataforma europeia de Resolução de Litígios em Linha (RLL) para contratos celebrados online.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Definições e Referências Legais</h2>
          <ul className="list-disc ps-6 space-y-2">
            <li><strong>MrCall (ou &ldquo;Aplicação&rdquo;):</strong> o meio que permite a prestação do Serviço.</li>
            <li><strong>Acordo:</strong> qualquer relação jurídica entre o Titular e o Utilizador regida pelos Termos.</li>
            <li><strong>Utilizador:</strong> a pessoa singular ou coletiva que utiliza o Serviço.</li>
            <li><strong>Consumidor:</strong> Utilizador considerado como tal ao abrigo da legislação aplicável.</li>
            <li><strong>Produto/Serviço:</strong> bem/serviço oferecido através do MrCall (incluindo serviços de reserva, software, Produtos Digitais).</li>
            <li><strong>Titular (ou &ldquo;Nós&rdquo;):</strong> a entidade que disponibiliza o MrCall e/ou oferece o Serviço.</li>
            <li><strong>Termos:</strong> as condições aplicáveis à utilização do MrCall e/ou à prestação do Serviço, na versão mais atual.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black">Contacte-nos</h2>
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
          <p>
            Email: <a href={`mailto:${CONTACT.legal}`} className="text-brand-blue hover:underline">{CONTACT.legal}</a><br />
            Telefone: <a href={`tel:${CONTACT.legalPhoneRaw}`} className="text-brand-blue hover:underline">{CONTACT.legalPhone}</a>
          </p>
        </section>
      </div>
    </>
  );
}
