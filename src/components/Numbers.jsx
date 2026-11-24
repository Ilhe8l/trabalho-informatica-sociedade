import './Numbers.css'

const numbers = [
  {
    value: '175 mi',
    label: 'de contas gov.br, com 5,6 mil serviços federais dentro dela',
  },
  {
    value: '72%',
    label: 'dos serviços federais não têm atendimento presencial em nenhuma etapa',
    highlight: true,
  },
  {
    value: '1 em 5',
    label: 'idosos com 80 anos ou mais não tem conta gov.br',
  },
  {
    value: '45 mi',
    label: 'de contas não tiveram nenhum acesso em 2025',
  },
  {
    value: '28 mi',
    label: 'de brasileiros não usam internet, a maioria das classes D e E',
  },
  {
    value: '4,6 mi',
    label: 'de atendimentos presenciais no INSS só pra emitir senha do gov.br',
    highlight: true,
  },
]

function Numbers() {
  return (
    <section id="numeros" className="section numbers">
      <div className="container">
        <span className="tag">O tamanho do problema</span>
        <h2 className="section-title">O gov.br não é mais um caminho. É o caminho.</h2>
        <p className="section-lead">
          A plataforma funciona bem pra quem já está conectado. O problema é que, pra
          muitos serviços, não existe outra porta.
        </p>

        <div className="numbers-grid">
          {numbers.map((item) => (
            <div key={item.value} className={item.highlight ? 'number-card highlight' : 'number-card'}>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        <p className="numbers-source">Fontes: TCU (Acórdão 3066/2026), Auditoria-Geral do INSS (2025), TIC Domicílios (Cetic.br).</p>
      </div>
    </section>
  )
}

export default Numbers
