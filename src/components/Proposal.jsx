import Blobs from './Blobs'
import './Proposal.css'

const proposals = [
  {
    title: 'Manter rotas presenciais assistidas',
    who: 'MGI, junto com INSS, Receita, MTE e MDS',
    how: 'Balcão gov.br dentro das agências que já existem, sem burocracia punitiva e sem exigir agendamento pelo próprio app.',
    goal: 'A maioria dos brasileiros morando numa cidade com esse atendimento. Hoje é 1 em 4.',
  },
  {
    title: 'Simplificar linguagem e acessibilidade',
    who: 'Secretaria de Governo Digital',
    how: 'Testar os serviços mais usados com idosos e pessoas de baixa escolaridade antes de publicar.',
    goal: 'Quantas pessoas concluem cada serviço sem ajuda, medido e publicado.',
  },
  {
    title: 'Oferecer apoio humano local',
    who: 'Secretaria de Governo Digital e prefeituras',
    how: 'Pontos de inclusão digital e recuperação de conta por telefone ou WhatsApp.',
    goal: 'Recuperar a conta em menos de um dia. Em 2025, trocar o e-mail levava 32 horas.',
  },
  {
    title: 'Medir acesso efetivo, não contas criadas',
    who: 'Secretaria de Governo Digital',
    how: 'Registrar por que cada serviço tem ou não atendimento presencial e contar quem desistiu no meio do caminho.',
    goal: '100% dos serviços federais com essa avaliação publicada.',
  },
]

const blobs = [
  { size: 640, bottom: -220, right: '4%', color: '#d6e1fb', rotate: 35 },
  { size: 390, top: -40, left: -110, color: '#d6e1fb', points: 6 },
  { size: 340, top: -80, right: '30%', color: '#d6e1fb', rotate: -50 },
]

function Proposal() {
  return (
    <section id="proposta" className="section proposal">
      <Blobs items={blobs} />
      <div className="container reveal">
        <h2 className="section-title">Digitalizar não pode significar excluir.</h2>
        <p className="section-lead">
          Não é ser contra o digital. É garantir que quem trava no meio do caminho tenha
          outra porta, e que isso seja medido.
        </p>

        <div className="proposals">
          {proposals.map((item) => (
            <article key={item.title} className="proposal-card">
              <h3>{item.title}</h3>
              <dl>
                <dt>Quem</dt>
                <dd>{item.who}</dd>
                <dt>Como</dt>
                <dd>{item.how}</dd>
                <dt>Meta</dt>
                <dd>{item.goal}</dd>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proposal
