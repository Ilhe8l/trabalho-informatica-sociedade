import Hero from './components/Hero'
import Intro from './components/Intro'
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
      <Intro />
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
