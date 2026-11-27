import Blobs from './Blobs'
import './Artifact.css'

const cards = [1, 2, 3, 4, 5]

const choices = [
  {
    title: 'Formato',
    text: 'Carrossel de 5 posts. Explica aos poucos, sem sobrecarregar, e circula fácil no WhatsApp e no Instagram.',
  },
  {
    title: 'Público',
    text: 'Pessoas mais velhas e quem tem pouca familiaridade com o digital, mas depende de aposentadoria, saúde e documentos.',
  },
  {
    title: 'Mensagem',
    text: 'Estar online não garante cidadania digital. E digitalizar não pode significar excluir.',
  },
]

const blobs = [
  { size: 480, top: -100, left: -200, rotate: 20 },
  { size: 400, bottom: -140, right: -140, points: 6, rotate: -40 },
]

function Artifact() {
  return (
    <section id="artefato" className="section artifact">
      <Blobs items={blobs} />
      <div className="container reveal">
        <h2 className="section-title">Gov.br pra todo mundo?</h2>
        <p className="section-lead">
          Nosso artefato de conscientização: um carrossel pra explicar o tema a quem mais
          sente o problema na pele.
        </p>

        <div className="cards">
          {cards.map((n) => (
            <img
              key={n}
              src={`/artefato/card-${n}.webp`}
              alt={`Card ${n} do carrossel`}
              loading="lazy"
            />
          ))}
        </div>

        <div className="choices">
          {choices.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <a className="download" href="/artefato/carrossel.pdf" download>
          Baixar o carrossel em PDF
        </a>
      </div>
    </section>
  )
}

export default Artifact
