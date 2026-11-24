import './Sources.css'

const sources = [
  {
    name: 'TCU, auditoria Cidadania Digital (Acórdão 3066/2026)',
    url: 'https://portal.tcu.gov.br/imprensa/noticias/populacao-enfrenta-barreiras-para-acessar-servicos-publicos-digitais',
  },
  {
    name: 'INSS, Auditoria-Geral: Atendimento Presencial do INSS (2025)',
    url: 'https://www.gov.br/inss/pt-br/acesso-a-informacao/auditoria/AtendimentoPresencialnoINSS.pdf',
  },
  {
    name: 'Cetic.br, TIC Domicílios 2024',
    url: 'https://cetic.br/media/docs/publicacoes/2/20250512115624/tic_domicilios_2024_resumo_executivo.pdf',
  },
  {
    name: 'Secretaria-Geral da Presidência, Resultados do PPA Participativo',
    url: 'https://www.gov.br/secretariageral/pt-br/centrais-de-conteudo/publicacoes/relatorios/resultados-ppa-participativo.pdf',
  },
  {
    name: 'Lei 14.129/2021 (Lei do Governo Digital)',
    url: 'https://planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14129.htm',
  },
  {
    name: 'Kosloski, Moura e Gomes. Inclusão participativa de pessoas idosas usando e-Gov no Brasil (RSP, 2024)',
    url: 'https://repositorio.enap.gov.br/handle/1/8053',
  },
  {
    name: 'Castells, M. A Sociedade em Rede (1999) e A Galáxia da Internet (2003)',
  },
]

function Sources() {
  return (
    <footer className="sources">
      <div className="container">
        <h2>Fontes</h2>
        <ul>
          {sources.map((source) => (
            <li key={source.name}>
              {source.url ? (
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.name}
                </a>
              ) : (
                source.name
              )}
            </li>
          ))}
        </ul>

        <p className="credits">Seminário de Informática e Sociedade, Ifes, 2026.</p>
      </div>
    </footer>
  )
}

export default Sources
