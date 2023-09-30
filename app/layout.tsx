import "./globals.scss";
import "normalize.css/normalize.css";
import type { Metadata } from "next";
import { Inter, Archivo, Oswald, Noto_Sans_Symbols_2 } from "next/font/google";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Portfolio Gaëlle",
  description:
    "Bienvenue sur mon portfolio me présentant ainsi que les projets sur lesquels j'ai travaillé au cours de ma formation et à titre personnel.",
};

const noto = Noto_Sans_Symbols_2({
  weight: ["400"],
  subsets: ["latin"],
  fallback: ["Arial", "sans serif"],
  preload: true,
  adjustFontFallback: false,
  display: "swap",
  variable: "--font--noto",
});

const oswald = Oswald({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font--oswald",
  fallback: ["Arial", "sans serif"],
  preload: true,
  adjustFontFallback: false,
  display: "swap",
});

const inter = Inter({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font--inter",
  fallback: ["Arial", "sans serif"],
  preload: true,
  adjustFontFallback: false,
  display: "swap",
});

const archivo = Archivo({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font--archivo",
  fallback: ["Arial", "sans serif"],
  preload: true,
  adjustFontFallback: false,
  display: "swap",
});

const ThemeContextProvider = dynamic(
  () => import("@context/ThemeContext/ThemeContext"),
  { ssr: false }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${archivo.variable} ${oswald.variable} ${noto.variable}`}
    >
      <body>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
