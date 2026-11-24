import Blob from './Blob'
import './Hero.css'

const links = [
  { href: '#numeros', label: 'Números' },
  { href: '#tese', label: 'Tese' },
  { href: '#castells', label: 'Castells' },
  { href: '#casos', label: 'Casos' },
  { href: '#proposta', label: 'Proposta' },
]

function Hero() {
  return (
    <header className="hero">
      <nav className="nav">
        <span className="nav-brand">gov.br pra quem?</span>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <Blob className="blob" />

      <div className="hero-content">
        <h1>
          Quem fica de fora do <span>gov.br</span>?
        </h1>
        <p>
          O governo virou digital. Pra maioria, ficou mais fácil. Pra quem já estava à
          margem, a porta ficou mais estreita.
        </p>
      </div>

      <a href="#numeros" className="scroll-hint" aria-label="Ir para os números">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </header>
  )
}

export default Hero
