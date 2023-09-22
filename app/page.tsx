import styles from './page.module.css'
import About from "@components/About/About"
import Projets from "@components/Projets/Project/Project"
import Skills from '@components/Skills/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


export default function Home() {
  return (
    <main className={styles.main}>
      <About />
      <Projets />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
