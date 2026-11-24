import Blobs from './Blobs'
import './Castells.css'

const ideas = [
  {
    title: 'A rede conecta e desconecta',
    text: 'Pro sociólogo Manuel Castells, a rede liga o que é útil pra ela e deixa o resto de fora. Quando o Estado passa a falar com o cidadão pela rede, ficar fora dela é ficar fora da cidadania.',
  },
  {
    title: 'Poder é programar a rede',
    text: 'Quem define os níveis bronze, prata e ouro, e se vai existir alternativa presencial, é a Secretaria de Governo Digital. É uma escolha de desenho, não um acaso.',
  },
  {
    title: 'Surgem os atravessadores',
    text: 'Lan house cobrando de R$ 20 a R$ 40, despachante, o neto que faz o gov.br da avó. E o golpista também. Quem está fora passa a depender de alguém pra entrar.',
  },
]

const blobs = [
  { size: 700, top: 20, left: -260, rotate: 70 },
  { size: 420, top: '38%', right: -110, points: 6, rotate: 10 },
  { size: 340, top: -60, right: '26%', points: 6, rotate: 150 },
]

function Castells() {
  return (
    <section id="castells" className="section castells">
      <Blobs items={blobs} />
      <div className="container reveal">
        <div className="castells-layout">
          <div>
            <h2 className="section-title">Não é que a pessoa "não sabe mexer".</h2>
            <p className="section-lead">
              Olhando pela teoria da sociedade em rede, o problema sai do indivíduo e vai
              pro desenho do sistema.
            </p>
          </div>

          <ul className="ideas">
            {ideas.map((idea) => (
              <li key={idea.title}>
                <h3>{idea.title}</h3>
                <p>{idea.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="castells-note">
          Ter conta não é estar dentro. <span>45 milhões</span> de contas não foram usadas
          nenhuma vez em 2025.
        </p>
      </div>
    </section>
  )
}

export default Castells
