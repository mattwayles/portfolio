import { useReveal } from './hooks/useReveal'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Credentials } from './components/Credentials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  useReveal()

  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Credentials />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
