import './globals.scss'
import 'normalize.css/normalize.css';
import type { Metadata } from 'next'
// import ThemeContextProvider from '@context/ThemeContext/ThemeContext'
import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"
import NavBar from '@components/Navbar/NavBar'
import { Inter, Archivo, Oswald } from "next/font/google";
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Portfolio Gaëlle',
  description: "Bienvenue sur mon portfolio me présentant ainsi que les projets sur lesquels j'ai travaillé au cours de ma formation et à titre personnel.",
}

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font--oswald",
})


const inter = Inter({
  subsets: ["latin"],
  variable: "--font--inter",
})

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font--archivo",
})

const ThemeContextProvider = dynamic(() =>
  import('./context/ThemeContext/ThemeContext'), { ssr: false }
)


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="fr" className={`${inter.variable} ${archivo.variable} ${oswald.variable}`} >
      <body>
        <ThemeContextProvider>
          <NavBar />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
