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
        <a href="#numeros" className="hero-title">
          <h1>
            Quem fica de fora do <span>gov.br</span>?
          </h1>
        </a>
        <p>
          O governo virou digital. Pra maioria, ficou mais fácil. Pra quem já estava à
          margem, a porta ficou mais estreita.
        </p>
      </div>
    </header>
  )
}

export default Hero
