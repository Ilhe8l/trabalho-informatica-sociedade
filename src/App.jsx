import Hero from './components/Hero'
import Numbers from './components/Numbers'
import Thesis from './components/Thesis'
import Castells from './components/Castells'
import Cases from './components/Cases'
import Proposal from './components/Proposal'
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
      <Sources />
    </>
  )
}

export default App
