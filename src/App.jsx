import Hero from './components/Hero'
import Numbers from './components/Numbers'
import Thesis from './components/Thesis'
import Castells from './components/Castells'
import Cases from './components/Cases'
import Proposal from './components/Proposal'
import Artifact from './components/Artifact'
import Sources from './components/Sources'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <>
      <Hero />
      <Numbers />
      <Thesis />
      <Castells />
      <Cases />
      <Proposal />
      <Artifact />
      <Sources />
    </>
  )
}

export default App
