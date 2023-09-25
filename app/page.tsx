import About from "@components/About/About"
import Projets from "@components/Projets/Project/Project"
import Skills from '@components/Skills/Skills/Skills'
import Contact from './components/Contact/Contact'


export default function Home() {
  return (
    <>
      <About />
      <Projets />
      <Skills />
      <Contact />
    </>
  )
}
