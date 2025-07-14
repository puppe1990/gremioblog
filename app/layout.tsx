import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grêmio Blog - Paixão Tricolor",
  description:
    "Blog independente dedicado ao Grêmio Foot-Ball Porto Alegrense. Análises, história, notícias e paixão tricolor.",
  keywords: ["Grêmio", "futebol", "blog", "tricolor", "Porto Alegre", "análises táticas"],
  authors: [{ name: "Grêmio Blog Team" }],
  openGraph: {
    title: "Grêmio Blog - Paixão Tricolor",
    description: "Blog independente dedicado ao Grêmio Foot-Ball Porto Alegrense",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grêmio Blog - Paixão Tricolor",
    description: "Blog independente dedicado ao Grêmio Foot-Ball Porto Alegrense",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
