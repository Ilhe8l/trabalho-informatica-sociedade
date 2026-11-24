import './Placeholder.css'
import Circles from './Circles'

// Seção dos casos concretos, é a parte da Pessoa 3.
// Deixei só a estrutura, então pode mudar o que quiser aqui: texto, layout, colocar
// imagem, dividir em cards, o que achar melhor. Se for usar imagem, coloca em
// public/ e lembra de citar a licença lá nas fontes.
// As cores e classes que já existem estão no index.css (tipo --blue, .section, .section-title).

const circles = [
  { size: 160, top: 40, right: -40 },
]

function Cases() {
  return (
    <section id="casos" className="section">
      <Circles items={circles} />
      <div className="container reveal">
        <h2 className="section-title">Isso já aconteceu</h2>

        <div className="placeholder">
          <p>
            Aqui vão entrar os casos brasileiros (e um internacional), com as fontes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cases
