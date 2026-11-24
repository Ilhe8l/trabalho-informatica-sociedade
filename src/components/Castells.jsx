import './Castells.css'

const ideas = [
  {
    title: 'A rede conecta e desconecta',
    text: 'Pra Castells, a rede liga o que é útil pra ela e deixa o resto de fora. Quando o Estado passa a falar com o cidadão pela rede, ficar fora dela é ficar fora da cidadania.',
  },
  {
    title: 'Poder é programar a rede',
    text: 'Quem define os níveis bronze, prata e ouro, e se vai existir alternativa presencial, é a Secretaria de Governo Digital. É uma escolha de desenho, não um acaso.',
  },
  {
    title: 'Surgem os atravessadores',
    text: 'Lan house cobrando R$ 20 a R$ 40, despachante, o neto que faz o gov.br da avó. E também o golpista. Quem está fora passa a depender de alguém pra entrar.',
  },
]

function Castells() {
  return (
    <section id="castells" className="section castells">
      <div className="container reveal">
        <span className="tag">O que a teoria mostra</span>
        <h2 className="section-title">Não é que a pessoa "não sabe mexer".</h2>
        <p className="section-lead">
          Lendo pelo Manuel Castells e a sociedade em rede, o problema sai do indivíduo e vai
          pro desenho do sistema.
        </p>

        <div className="ideas">
          {ideas.map((idea) => (
            <div key={idea.title} className="idea">
              <div className="idea-dot" />
              <div>
                <h3>{idea.title}</h3>
                <p>{idea.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="castells-note">
          Ter conta não é estar dentro: <strong>45 milhões</strong> de contas não foram usadas
          nenhuma vez em 2025.
        </p>
      </div>
    </section>
  )
}

export default Castells
