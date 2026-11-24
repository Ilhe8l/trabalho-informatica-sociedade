import Circles from './Circles'
import './Thesis.css'

const steps = [
  {
    title: 'A decisão',
    text: 'O governo adotou o "digital por padrão". O presencial virou exceção.',
  },
  {
    title: 'Sem critério',
    text: 'Quando um serviço precisa de atendimento fora da internet? Os órgãos decidem sem padrão e sem registro.',
  },
  {
    title: 'O resultado',
    text: 'Gente perdendo prazo de recurso no INSS, inscrição no Enem, vaga de emprego e consulta.',
  },
]

const circles = [
  { size: 280, top: -110, right: '6%', color: '#2b5ce6' },
  { size: 130, bottom: 160, left: -60, color: '#2b5ce6' },
]

function Thesis() {
  return (
    <section id="tese" className="section thesis">
      <Circles items={circles} />
      <div className="container reveal">
        <blockquote>
          O gov.br virou porta única. Quem não passa por ela perde direito e perde voz.
        </blockquote>

        <ol className="chain">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="paradox">
          <strong>4,6 mi</strong>
          <p>
            de atendimentos presenciais no INSS em 2024 foram só pra emitir senha do gov.br.
            Gente indo até a agência pra conseguir entrar na porta digital.
          </p>
        </div>

        <div className="voice">
          <div className="voice-text">
            <h3>E a participação?</h3>
            <p>
              O PPA Participativo de 2023 foi votado numa plataforma com login gov.br. Foi um
              salto enorme de escala. Mas quem está fora da rede não entra nem na conta de
              quem participou.
            </p>
          </div>

          <div className="voice-chart" aria-label="1,4 milhão de pessoas na plataforma contra 34 mil nas plenárias presenciais">
            <div className="voice-item">
              <span className="dot big" />
              <span>
                <b>1,4 mi</b> na plataforma
              </span>
            </div>
            <div className="voice-item">
              <span className="dot small" />
              <span>
                <b>34 mil</b> nas plenárias
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Thesis
