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
    name: 'Jardim, L. O PPA Federal 2024-2027: análise da plataforma Brasil Participativo (Enap, 2024)',
    url: 'https://repositorio.enap.gov.br/server/api/core/bitstreams/b478c712-8fa6-4c58-b779-490269381fd9/content',
  },
  {
    name: 'Brasil Participativo, programas do PPA',
    url: 'https://brasilparticipativo.presidencia.gov.br/processes/programas',
  },
  {
    name: 'Senado Notícias. PPA participativo será levado às capitais brasileiras (2023)',
    url: 'https://www12.senado.leg.br/noticias/videos/2023/05/ppa-participativo-sera-levado-as-capitais-brasileiras-anuncia-ministra-simone-tebet',
  },
  {
    name: 'PPA Participativo, plenária de Porto Alegre (vídeo)',
    url: 'https://www.youtube.com/watch?v=H2EFsC8x6NQ',
  },
  {
    name: 'FGV EAESP. Exclusão digital afetou acesso ao auxílio emergencial',
    url: 'https://eaesp.fgv.br/administracao-publica/gestao-publica/exclusao-digital-afetou-acesso-ao-auxilio-emergencial-durante-a-pandemia-especialmente-para-as-classes-d-e-e',
  },
  {
    name: 'IEA-USP. Boletim Políticas Públicas & Sociedade nº 5 (maio de 2020)',
    url: 'https://coracaoesaude.iea.usp.br/wp-content/uploads/2020/05/BoletimPPS_5_8maio_FINAL.pdf',
  },
  {
    name: 'ONU. Relatório do relator especial Philip Alston sobre o Reino Unido (A/HRC/41/39/Add.1, 2019)',
    url: 'https://digitallibrary.un.org/record/3806308/files/A_HRC_41_39_Add-1-EN.pdf',
  },
  {
    name: 'National Audit Office. Rolling out Universal Credit (2018)',
    url: 'https://www.nao.org.uk/press-releases/rolling-out-universal-credit/',
  },
  {
    name: 'HuffPost UK. 470,000 need help to apply for online-only Universal Credit (2019)',
    url: 'https://huffingtonpost.co.uk/entry/universal-credit-online-only-help-apply_uk_5c617f69e4b0eec79b262a34',
  },
  {
    name: 'Cetic.br, TIC Governo Eletrônico',
    url: 'https://cetic.br/pt/pesquisa/governo-eletronico/',
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

        <p className="credits">
          Eduardo de Oliveira, Gabriel Marinho e Guilherme do Carmo · Prof. Gilmar Luiz
          Vassoler · Informática e Sociedade, Ifes, 2026.
        </p>
      </div>
    </footer>
  )
}

export default Sources
