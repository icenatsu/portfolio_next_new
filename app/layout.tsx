import './globals.scss'
import type { Metadata } from 'next'
import ThemeContextProvider from '@context/ThemeContext/ThemeContext'
import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"
import NavBar from '@components/Navbar/NavBar'
import { Instrument_Serif, Inter, Archivo, Oswald } from "next/font/google";

export const metadata: Metadata = {
  title: 'Portfolio Gaëlle',
  description: "Bienvenue sur mon portfolio me présentant ainsi que les projets sur lesquels j'ai travaillé au cours de ma formation et à titre personnel.",
}

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
  variable: "--font--oswald",
})

// const instrumentserif = Instrument_Serif({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font--instrumentSerif",
// })

const inter = Inter({
  subsets: ["latin"],
  variable: "--font--inter",
})

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font--archivo",
})


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
