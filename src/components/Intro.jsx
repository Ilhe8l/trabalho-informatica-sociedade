import Blobs from './Blobs'
import './Intro.css'

const topics = [
  {
    title: 'Governo eletrônico',
    text: 'É o Estado atendendo pela internet. Aposentadoria, carteira de trabalho, saúde, documentos: hoje quase tudo passa pelo gov.br, que reúne mais de 5 mil serviços federais.',
  },
  {
    title: 'A conta gov.br',
    text: 'É a chave de entrada. Ela tem três níveis: bronze, prata e ouro. Quanto mais alto, mais serviços libera, e mais coisa exige: conta em banco, biometria, CNH ou certificado digital.',
  },
  {
    title: 'Participação cidadã',
    text: 'Não é só pedir serviço. O cidadão também opina e decide pela internet, em consultas públicas e em plataformas como o Brasil Participativo, que também pedem login gov.br.',
  },
]

const blobs = [
  { size: 460, top: 40, left: -250, rotate: 45 },
  { size: 400, bottom: 40, right: -200, points: 6, rotate: -20 },
]

function Intro() {
  return (
    <section id="tema" className="section intro">
      <Blobs items={blobs} />
      <div className="container intro-layout reveal">
        <div>
          <h2 className="section-title">Do balcão pro celular.</h2>
          <p className="section-lead">
            Em poucos anos, falar com o governo deixou de ser enfrentar uma fila e virou
            abrir um aplicativo. Antes de tudo, três coisas pra entender o tema.
          </p>
        </div>

        <ul className="topics">
          {topics.map((topic) => (
            <li key={topic.title}>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Intro
