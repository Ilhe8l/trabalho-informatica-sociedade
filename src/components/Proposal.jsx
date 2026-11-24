import './Placeholder.css'
import Blobs from './Blobs'

// Seção da proposta, é a parte da Pessoa 1.
// Mesma coisa dos casos: tá vazia de propósito, pode mexer à vontade.
// O guia do professor pede algo bem específico (quem faz o quê, como e com qual
// critério de sucesso), então talvez valha fazer uns cards tipo os da seção de números.
// No pesquisa-contexto-e-tese.md tem umas ideias tiradas das recomendações do TCU,
// se ajudar.

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
        <h2 className="section-title">Nossa proposta</h2>

        <div className="placeholder">
          <p>Aqui entra a proposta do grupo.</p>
        </div>
      </div>
    </section>
  )
}

export default Proposal
