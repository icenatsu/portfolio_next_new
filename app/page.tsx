import About from "@components/About/About";
import Projets from "@components/Projets/Project/Project";
import Skills from "@components/Skills/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <About />
        <Projets />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
