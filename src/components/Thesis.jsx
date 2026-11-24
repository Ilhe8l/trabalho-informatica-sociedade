import './Thesis.css'

const steps = [
  {
    title: 'A decisão',
    text: 'O Governo Federal adotou o "digital por padrão". Só 2% dos serviços deixam você escolher entre internet e presencial.',
  },
  {
    title: 'Sem critério',
    text: 'A avaliação de quem precisa de atendimento fora da internet não segue padrão e nem é registrada pelos órgãos.',
  },
  {
    title: 'O resultado',
    text: 'Gente perdendo prazo de recurso no INSS, inscrição no Enem, vaga de emprego e consulta de saúde.',
  },
]

function Thesis() {
  return (
    <section id="tese" className="section thesis">
      <div className="container reveal">
        <span className="tag">Nossa tese</span>
        <blockquote>
          O gov.br virou porta única. E quem não passa por ela perde direito e perde voz.
        </blockquote>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={step.title} className="step">
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <div className="paradox">
          <p>
            Em 2024, o INSS fez <strong>4,6 milhões</strong> de atendimentos presenciais só pra
            emitir senha do gov.br. Milhões de pessoas tiveram que ir até uma agência pra
            conseguir entrar na porta digital.
          </p>
        </div>

        <div className="voice">
          <h3>E a participação?</h3>
          <p>
            O PPA Participativo teve cerca de 1,4 milhão de pessoas votando na plataforma, todas
            com login gov.br. Nas plenárias presenciais foram 34 mil. É um avanço enorme de
            escala, mas quem está fora da rede não entra nem na conta de quem participou.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Thesis
