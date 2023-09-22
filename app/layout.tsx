import './globals.scss'
import type { Metadata } from 'next'
import ThemeContextProvider from '@context/ThemeContext/ThemeContext'
import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"
import NavBar from '@components/Navbar/NavBar'
import { Montserrat, Dancing_Script, Kalam, Karla, Instrument_Serif, Inter, Archivo } from "next/font/google";

export const metadata: Metadata = {
  title: 'Portfolio Gaëlle',
  description: "Bienvenue sur mon portfolio me présentant ainsi que les projets sur lesquels j'ai travaillé au cours de ma formation et à titre personnel.",
}

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font--montserrat",
});

const dancing = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font--dancing_script",
})

const kalam = Kalam({
  weight: "400",
  subsets: ["latin"],
  variable: "--font--kalam",
})

const karla = Karla({
  weight: "400",
  subsets: ["latin"],
  variable: "--font--karla",
})

const instrumentsherif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font--instrumentSherif",
})

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
    <html lang="fr" className={`${montserrat.variable} ${dancing.variable} ${kalam.variable} ${karla.variable} ${instrumentsherif.variable} ${inter.variable} ${archivo.variable}`} >
      <body>
        <ThemeContextProvider>
          <NavBar />
          <Header />
          <main>
            {children}
          </main>
          {/* <Footer /> */}
        </ThemeContextProvider>
      </body>
    </html>
  )
}
