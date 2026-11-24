import Circles from './Circles'
import './Numbers.css'

const numbers = [
  { value: '175 mi', label: 'de contas gov.br, com 5,6 mil serviços federais lá dentro.' },
  { value: '72%', label: 'dos serviços federais não têm atendimento presencial em nenhuma etapa.', highlight: true },
  { value: '2%', label: 'deixam você escolher entre fazer pela internet ou pessoalmente.' },
  { value: '1 em 5', label: 'idosos com 80 anos ou mais não tem conta. Dos que têm, metade não usou nenhuma vez em 2025.' },
  { value: '28 mi', label: 'de brasileiros não usam internet, a maioria das classes D e E.' },
]

const circles = [
  { size: 220, top: 80, right: -90 },
  { size: 110, bottom: 120, left: -50 },
]

function Numbers() {
  return (
    <section id="numeros" className="section numbers">
      <Circles items={circles} />
      <div className="container numbers-layout reveal">
        <div className="numbers-intro">
          <h2 className="section-title">O gov.br não é mais um caminho. É o caminho.</h2>
          <p className="section-lead">
            A plataforma funciona bem pra quem já está conectado. O problema é que, pra
            muitos serviços, não existe outra porta.
          </p>
        </div>

        <div>
          <ul className="numbers-list">
            {numbers.map((item) => (
              <li key={item.value} className={item.highlight ? 'highlight' : undefined}>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </li>
            ))}
          </ul>

          <p className="numbers-source">
            TCU, Acórdão 3066/2026 · TIC Domicílios 2024, Cetic.br
          </p>
        </div>
      </div>
    </section>
  )
}

export default Numbers
