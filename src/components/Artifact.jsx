import { useEffect, useState } from 'react'
import Blobs from './Blobs'
import './Artifact.css'

const cards = [1, 2, 3, 4, 5]

const choices = [
  {
    title: 'Formato',
    text: 'Carrossel de 5 posts. Explica aos poucos, sem sobrecarregar, e circula fácil no WhatsApp e no Instagram.',
  },
  {
    title: 'Público',
    text: 'Pessoas mais velhas e quem tem pouca familiaridade com o digital, mas depende de aposentadoria, saúde e documentos.',
  },
  {
    title: 'Mensagem',
    text: 'Estar online não garante cidadania digital. E digitalizar não pode significar excluir.',
  },
]

const blobs = [
  { size: 480, top: 40, left: -260, rotate: 20 },
  { size: 420, bottom: 40, right: -220, points: 6, rotate: -40 },
]

function Artifact() {
  const [open, setOpen] = useState(null)

  useEffect(() => {
    if (open === null) return

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => Math.min(i + 1, cards.length - 1))
      if (e.key === 'ArrowLeft') setOpen((i) => Math.max(i - 1, 0))
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <section id="artefato" className="section artifact">
      <Blobs items={blobs} />
      <div className="container reveal">
        <h2 className="section-title">Gov.br pra todo mundo?</h2>
        <p className="section-lead">
          Nosso artefato de conscientização: um carrossel pra explicar o tema a quem mais
          sente o problema na pele.
        </p>

        <div className="cards">
          {cards.map((n, i) => (
            <button key={n} className="card-button" onClick={() => setOpen(i)}>
              <img src={`/artefato/card-${n}.webp`} alt={`Card ${n} do carrossel`} loading="lazy" />
            </button>
          ))}
        </div>

        <div className="choices">
          {choices.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <a className="download" href="/artefato/carrossel.pdf" download>
          Baixar o carrossel em PDF
        </a>
      </div>

      {open !== null && (
        <div className="viewer" onClick={() => setOpen(null)}>
          <button className="viewer-close" aria-label="Fechar">
            ×
          </button>

          <button
            className="viewer-nav prev"
            aria-label="Card anterior"
            disabled={open === 0}
            onClick={(e) => {
              e.stopPropagation()
              setOpen(open - 1)
            }}
          >
            ‹
          </button>

          <img
            src={`/artefato/card-${cards[open]}.webp`}
            alt={`Card ${cards[open]} do carrossel`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="viewer-nav next"
            aria-label="Próximo card"
            disabled={open === cards.length - 1}
            onClick={(e) => {
              e.stopPropagation()
              setOpen(open + 1)
            }}
          >
            ›
          </button>

          <span className="viewer-count">
            {open + 1} / {cards.length}
          </span>
        </div>
      )}
    </section>
  )
}

export default Artifact
