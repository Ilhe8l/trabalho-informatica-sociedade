import './Hero.css'

function Hero() {
  return (
    <header className="hero">
      <div className="blob" />

      <div className="hero-content">
        <span className="tag">Governo eletrônico e participação cidadã</span>
        <h1>
          Quem fica de fora do <span>gov.br</span>?
        </h1>
        <p>
          O governo virou digital. Pra maioria, ficou mais fácil. Pra quem já estava
          à margem, a porta ficou mais estreita.
        </p>
        <a href="#numeros" className="hero-button">
          Ver os números
        </a>
      </div>
    </header>
  )
}

export default Hero
