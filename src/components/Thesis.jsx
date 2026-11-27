import Blobs from './Blobs'
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

const blobs = [
  { size: 840, top: -220, right: -140, color: '#2b5ce6', rotate: 40 },
  { size: 500, top: '34%', left: -180, color: '#2b5ce6', points: 6 },
  { size: 420, top: '58%', right: -120, color: '#2b5ce6', rotate: -20 },
  { size: 360, bottom: -80, left: '30%', color: '#2b5ce6', points: 6, rotate: 80 },
]

function Thesis() {
  return (
    <section id="tese" className="section thesis">
      <Blobs items={blobs} />
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
      </div>
    </section>
  )
}

export default Thesis
