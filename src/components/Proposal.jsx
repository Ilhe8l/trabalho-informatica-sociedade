import './Placeholder.css'

// Seção da proposta, é a parte da Pessoa 1.
// Mesma coisa dos casos: tá vazia de propósito, pode mexer à vontade.
// O guia do professor pede algo bem específico (quem faz o quê, como e com qual
// critério de sucesso), então talvez valha fazer uns cards tipo os da seção de números.
// No pesquisa-contexto-e-tese.md tem umas ideias tiradas das recomendações do TCU,
// se ajudar.

function Proposal() {
  return (
    <section id="proposta" className="section proposal">
      <div className="container reveal">
        <span className="tag">O que deveria mudar</span>
        <h2 className="section-title">Nossa proposta</h2>

        <div className="placeholder">
          <p>Aqui entra a proposta do grupo.</p>
        </div>
      </div>
    </section>
  )
}

export default Proposal
