import Blobs from './Blobs'
import './Cases.css'

const blobs = [
  { size: 520, top: 40, right: -260, rotate: -15 },
  { size: 460, top: '18%', left: -250, points: 6, rotate: 30 },
  { size: 440, bottom: 60, right: -220, rotate: 80 },
]

const emergencyProblems = [
  {
    title: 'Filas físicas e virtuais',
    text: 'O Caixa Tem criou filas digitais e longas esperas. Muita gente acabou indo pras agências no meio da pandemia.',
  },
  {
    title: 'Barreiras de documentação',
    text: 'CPF com inconsistência, falta de celular, de conta em banco e de documentos travaram milhares de pedidos.',
  },
  {
    title: 'Sem internet em casa',
    text: 'Quem não estava no Cadastro Único tinha que pedir pelo app ou pelo site da Caixa. Não existia outro caminho.',
  },
]

const ukProblems = [
  {
    title: 'Uma barreira digital',
    text: 'O relator da ONU para extrema pobreza, Philip Alston, disse em 2019 que o sistema criou uma barreira que impede muita gente de chegar aos seus direitos. Os mais afetados: mulheres, idosos, pessoas com deficiência e quem não fala inglês.',
  },
  {
    title: 'Ajuda paga à parte',
    text: 'O governo teve que financiar apoio presencial: £39 milhões pra Citizens Advice ajudar as pessoas a fazerem o pedido online.',
  },
]

const ppaNumbers = [
  { value: '1.419.729', label: 'participantes' },
  { value: '8.254', label: 'propostas' },
  { value: '1.529.826', label: 'votos' },
]

function Cases() {
  return (
    <section id="casos" className="section cases">
      <Blobs items={blobs} />
      <div className="container reveal">
        <h2 className="section-title">Isso já aconteceu</h2>
        <p className="section-lead">
          Dois casos brasileiros e um de fora. A porta fechando, o que dá pra abrir, e um
          país que já cometeu o mesmo erro.
        </p>

        <article className="case">
          <div className="case-head">
            <span className="case-year">2020</span>
            <h3>Auxílio Emergencial: quando o direito virou aplicativo</h3>
            <p>
              O benefício da pandemia exigia cadastro pelo aplicativo ou pelo site da Caixa.
              Pra quem estava fora da rede, o pedido simplesmente não começava.
            </p>
          </div>

          <div className="case-stats">
            <div>
              <strong>7,4 mi</strong>
              <p>de pessoas elegíveis viviam em casas sem acesso à internet (boletim da USP, maio de 2020).</p>
            </div>
            <div>
              <strong>28%</strong>
              <p>dos mais pobres disseram não ter conseguido usar o app da Caixa (FGV).</p>
            </div>
          </div>

          <ul className="case-list">
            {emergencyProblems.map((item) => (
              <li key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="case case-ppa">
          <div className="case-head">
            <span className="case-year">2023</span>
            <h3>PPA Participativo: o que funciona, e o limite</h3>
            <p>
              O Plano Plurianual define as prioridades do governo federal por quatro anos. Na
              elaboração do PPA 2024-2027, o governo abriu o processo pela plataforma Brasil
              Participativo, ligada ao gov.br, e retomou os Fóruns Interconselhos, parados
              desde 2017. Cada pessoa podia votar em três programas, enviar três propostas e
              apoiar outras três.
            </p>
          </div>

          <div className="ppa-numbers">
            {ppaNumbers.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="ppa-compare">
            <div className="ppa-text">
              <h4>Mas quem participou?</h4>
              <p>
                O Norte teve 7,11% dos participantes, abaixo dos 8,95% que representa da
                população. A plataforma também não deixava as pessoas conversarem entre si,
                só registrar apoio. A própria Enap concluiu que o online funciona melhor
                quando anda junto com as plenárias presenciais.
              </p>
            </div>

            <div className="ppa-chart" aria-label="1,4 milhão de pessoas na plataforma contra 34 mil nas plenárias presenciais">
              <div className="ppa-item">
                <span className="dot big" />
                <span>
                  <b>1,4 mi</b> na plataforma
                </span>
              </div>
              <div className="ppa-item">
                <span className="dot small" />
                <span>
                  <b>34 mil</b> nas plenárias
                </span>
              </div>
            </div>
          </div>
        </article>

        <article className="case case-uk">
          <div className="case-head">
            <span className="case-year">Reino Unido · 2019</span>
            <h3>Universal Credit: o mesmo erro, do outro lado do oceano</h3>
            <p>
              O Universal Credit junta vários benefícios sociais britânicos num só. Ele foi
              desenhado como "digital by default": o pedido e o acompanhamento são feitos
              pelo portal online. É a mesma lógica do nosso "digital por padrão".
            </p>
          </div>

          <div className="uk-body">
            <div className="uk-stat">
              <strong>38%</strong>
              <p>
                de quem tentava conseguia verificar a própria identidade pela internet, um passo
                obrigatório pra receber (National Audit Office, 2018).
              </p>
            </div>

            <ul className="case-list uk-list">
              {ukProblems.map((item) => (
                <li key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="uk-lesson">
            A lição: o próprio Reino Unido passou a tratar o apoio assistido, o "assisted
            digital", como parte do serviço. Digital por padrão sem essa rede de apoio vira
            exclusão.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Cases
