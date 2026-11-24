import Blobs from './Blobs'
import './Numbers.css'

const numbers = [
  { value: '72%', label: 'dos serviços federais não têm atendimento presencial em nenhuma etapa.', highlight: true },
  { value: '175 mi', label: 'de contas gov.br, com 5,6 mil serviços federais lá dentro.' },
  { value: '2%', label: 'deixam você escolher entre fazer pela internet ou pessoalmente.' },
  { value: '1 em 5', label: 'idosos com 80 anos ou mais não tem conta. Dos que têm, metade não usou nenhuma vez em 2025.' },
  { value: '28 mi', label: 'de brasileiros não usam internet, a maioria das classes D e E.' },
]

const blobs = [
  { size: 780, top: -200, right: -220, rotate: 20 },
  { size: 480, top: '46%', left: -170, points: 6, rotate: -30 },
  { size: 520, top: -220, left: -230, points: 6, rotate: 110 },
]

function Numbers() {
  return (
    <section id="numeros" className="section numbers">
      <Blobs items={blobs} />
      <div className="container reveal">
        <div className="numbers-intro">
          <h2 className="section-title">O gov.br não é mais um caminho. É o caminho.</h2>
          <p className="section-lead">
            A plataforma funciona bem pra quem já está conectado. O problema é que, pra
            muitos serviços, não existe outra porta.
          </p>
        </div>

        <ul className="numbers-grid">
          {numbers.map((item) => (
            <li key={item.value} className={item.highlight ? 'highlight' : undefined}>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </li>
          ))}
        </ul>

        <p className="numbers-source">TCU, Acórdão 3066/2026 · TIC Domicílios 2024, Cetic.br</p>
      </div>
    </section>
  )
}

export default Numbers
