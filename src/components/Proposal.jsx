import './Placeholder.css'
import Circles from './Circles'

// Seção da proposta, é a parte da Pessoa 1.
// Mesma coisa dos casos: tá vazia de propósito, pode mexer à vontade.
// O guia do professor pede algo bem específico (quem faz o quê, como e com qual
// critério de sucesso), então talvez valha fazer uns cards tipo os da seção de números.
// No pesquisa-contexto-e-tese.md tem umas ideias tiradas das recomendações do TCU,
// se ajudar.

const circles = [
  { size: 200, bottom: -60, right: '10%', color: '#d6e1fb' },
  { size: 100, top: 48, right: '18%', color: '#d6e1fb' },
]

function Proposal() {
  return (
    <section id="proposta" className="section proposal">
      <Circles items={circles} />
      <div className="container reveal">
        <h2 className="section-title">Nossa proposta</h2>

        <div className="placeholder">
          <p>Aqui entra a proposta do grupo.</p>
        </div>
      </div>
    </section>
  )
}

export default Proposal
